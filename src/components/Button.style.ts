import styled, {css} from 'styled-components'

export type propsVariantColors = 'primary' | 'secondary' | 'danger' | 'success'


interface ButtonStyledProps {
  variant: propsVariantColors
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 100px;
  height: 40px;
  margin: 5px;
  border-radius: 4px;
  border: 0;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme['green-500']}

  /* ${props => {
    console.log(props)
    return css`
    background-color: ${buttonVariants[props.variant]}`
  }} */
`