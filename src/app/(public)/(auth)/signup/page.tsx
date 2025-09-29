// inspiração tela - > https://cdn.dribbble.com/userupload/7688436/file/original-0a0cdcf725b83fb74cae366b43f947a3.jpg?resize=1024x768&vertical=center

import SignUpForm from "@/_components/sign_up_form";
import { Separator } from "@/components/ui/separator";
import { ChartArea } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="select-none text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="flex gap-2 items-center text-2xl font-bold tracking-tighter">
            <ChartArea size={30} color="var(--color-primary)"/>
            FinanCash
          </h1>
        </div>

        {/* Title and Description */}
        <div className="space-y-1">
          <h2 className="text-2xl xl:text-3xl font-semibold tracking-tighter">Crie sua conta</h2>
          <p className="text-sm text-muted-foreground">Entre com suas informações abaixo para criar a sua conta.</p>
        </div>
      </div>

      {/* Form and Footer Area */}
      <div className="mt-5">
        {/* Form */}
        <SignUpForm />
        
        {/* Footer Area*/}
        <div className="mt-5">
          <div className="flex justify-center">
            <Separator/>
          </div>
          <div className="text-sm text-center mt-5">
            <p className="text-muted-foreground">Já tem uma conta?{" "} 
              <Link href="#" className="text-primary font-semibold underline">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}