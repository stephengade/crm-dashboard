import Image from "next/image"
import Logo from "../../public/workergen-logo.png"

export const mainLogo = Logo

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <Image src={mainLogo} width={200} height={50} className="h-10 w-[120px] object-cover" alt="workergen logo" />
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
