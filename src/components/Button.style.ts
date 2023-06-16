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
  border-radius: 8px;
  border: solid 1px black;

  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.primary}

  /* ${props => {
    console.log(props)
    return css`
    background-color: ${buttonVariants[props.variant]}`
  }} */
`