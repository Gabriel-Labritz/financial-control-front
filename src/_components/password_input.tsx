"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed } from "lucide-react";
import { forwardRef, InputHTMLAttributes, useState } from "react";

export type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText: string,
  placeholderText: string,
  inputId: string
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ labelText, placeholderText, inputId, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const handlePasswordVisibility = () => setIsVisible(() => !isVisible);

  return (
    <div className="grid gap-2">
      <Label htmlFor={inputId}>{labelText}*</Label>
      <div className="relative">
        <Input id={inputId}
          name={inputId}
          type={isVisible ? "text" : "password"}
          placeholder={placeholderText}
          required
          ref={ref}
          {...props}
          className="text-sm pr-10"
        />
        <Button type="button"
          variant="ghost"
          onClick={handlePasswordVisibility}
          className="absolute right-1 top-1/2 -translate-y-1/2"
        >
          {isVisible ? <EyeClosed /> : <Eye />}
        </Button>
      </div>
    </div>
  );
})

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;