import { TextInputContainer } from "./style";
import { TextInputProps } from "./TextInput.type";

const TextInput = ({ customStyle, ...attr }: TextInputProps) => {
  return <TextInputContainer {...attr} style={{ ...customStyle }} />;
};

export default TextInput;
