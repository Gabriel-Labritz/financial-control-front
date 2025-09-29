import HeaderTitleDesc from "@/_components/header_title_desc";
import LogoSite from "@/_components/logo_site";
import SignUpForm from "@/_components/sign_up_form";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="select-none text-center">
        {/* Logo */}
        <LogoSite />

        {/* Title and Description */}
        <HeaderTitleDesc 
          headerTitle="Crie sua conta" 
          headerDescriprion="Entre com suas informações abaixo para criar a sua conta."
        />
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
              <Link href="/signin" className="text-primary font-semibold underline">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}