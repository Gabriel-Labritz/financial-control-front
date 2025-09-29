"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "./password_input";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchema } from "@/schemas/sign_up.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUser } from "@/actions/auth";
import { useState } from "react";
import { BadgeCheck, BadgeX, LoaderCircle } from "lucide-react";
import { redirect } from "next/navigation";
import InputErrorMessage from "./input_error_message";

export default function SignUpForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData: SignUpSchema) => {
    setIsLoading(true);
    setSuccessMessage(null);
    setApiError(null);

    const response = await signUpUser(formData);

    if(response.success) {
      setSuccessMessage(response?.message || 'Sua conta foi criada com sucesso!');
      setApiError(null);
      reset();

      setTimeout(() => {
        redirect('/signin');
      }, 2000);
    } else {
      setSuccessMessage(null);
      setApiError(response?.error || 'Ocorreu um erro ao criar a sua conta.');
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
          <Label htmlFor="name">Nome*</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="ex: João" 
            required
            aria-invalid={!!errors.name} 
            {...register('name')}
            className="text-sm"   
          />
          {errors.name && <InputErrorMessage error_message={errors?.name?.message}/>}
        </div>
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
          <PasswordInput 
            labelText="Confirmar senha" 
            placeholderText="Confirme sua senha" 
            inputId="confirmPassword"
            aria-invalid={!!errors.confirmPassword}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <InputErrorMessage error_message={errors?.confirmPassword?.message}/>}
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
          "Criar conta"
        )}
      </Button>
    </form>
  );
}