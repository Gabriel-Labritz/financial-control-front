import HeaderTitleDesc from "@/_components/header_title_desc";
import LogoSite from "@/_components/logo_site";
import SignInForm from "@/_components/sign_in_form";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-full py-8">
      {/* Header */}
      <div className="select-none text-center">
        {/* Logo */}
        <LogoSite />

        {/* Title and Description */}
        <HeaderTitleDesc 
          headerTitle="Entrar com sua conta" 
          headerDescriprion="Entre com suas informações abaixo para acessar sua conta."
        />
      </div>

      {/* Form and Footer Area */}
      <div className="mt-5">
        {/* Form */}
        <SignInForm />
        
        {/* Footer Area*/}
        <div className="mt-5">
          <div className="flex justify-center">
            <Separator/>
          </div>
          <div className="text-sm text-center mt-5">
            <p className="text-muted-foreground">Não tem uma conta?{" "} 
              <Link href="/signup" className="text-primary font-semibold underline">
                Cadastre - se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}