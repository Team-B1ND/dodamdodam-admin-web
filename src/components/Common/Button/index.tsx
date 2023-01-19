import { ButtonProps } from "./Button.type";
import { ButtonContainer } from "./style";

const Button = ({ onClick, title, customStyle, type }: ButtonProps) => {
  return (
    <ButtonContainer
      buttonType={type}
      onClick={onClick}
      style={{ ...customStyle }}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
