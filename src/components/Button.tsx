import { ButtonStyled, propsVariantColors } from "./Button.style"

interface ButtonProps {
  variant?: propsVariantColors
}

export function Button({variant = 'primary'}: ButtonProps){
  return (
    <>
      <ButtonStyled variant={variant}>Enviar</ButtonStyled>
    </>
  )  
}