"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "./password_input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInSchema } from "@/schemas/sign_in_schema";
import { signInUser } from "@/actions/auth";
import { useState } from "react";
import { BadgeCheck, BadgeX, LoaderCircle } from "lucide-react";
import { redirect } from "next/navigation";
import InputErrorMessage from "./input_error_message";

export default function SignInForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: SignInSchema) => {
    setSuccessMessage(null);
    setApiError(null);
    setIsLoading(true);

    const response = await signInUser(formData);

    if(response.success) {
      setSuccessMessage(response?.message || "Login bem-sucedido!");
      setApiError(null);
      reset();

      setTimeout(() => {
        redirect('/');
      }, 2000);
    } else {
      setSuccessMessage(null);
      setApiError(response?.error || "Ocorreu um erro ao acessar a sua conta.");
    }

    setIsLoading(false);
  }

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        {/* FEEDBACK AREA */}
        <div>
          {successMessage && (
            <div className="flex justify-center items-center gap-2 text-green-500 text-sm font-medium">
              <BadgeCheck size={17}/>
              <p>{successMessage}</p>
            </div>
          )}
          {apiError && (
            <div className="flex justify-center items-center gap-2 text-destructive text-sm font-medium">
              <BadgeX size={17}/>
              <p>{apiError}</p>
            </div>
          )}
        </div> 

        {/* FIELDS AREA */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email*</Label>
          <Input 
            id="email" 
            type="email" 
            required
            aria-invalid={!!errors.email}
            placeholder="ex: seuemail@email.com"
            {...register('email')}
           className="text-sm" 
          />
          {errors.email && <InputErrorMessage error_message={errors?.email?.message}/>}
        </div>
          <PasswordInput 
            labelText="Senha" 
            placeholderText="Senha" 
            inputId="password"
            aria-invalid={!!errors.password}
            {...register('password')}
          />
          {errors.password && <InputErrorMessage error_message={errors?.password?.message}/>}
      </div>

      {/* BUTTON */}
      <Button 
        type="submit" 
         className="h-12 w-full mt-7 rounded-sm"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <LoaderCircle className="animate-spin"/>
            Aguarde...
          </>
        ) : (
          "Entrar"
        )}
      </Button>
    </form>
  );
}