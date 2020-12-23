import { FunctionComponent } from 'preact';

interface ButtonProps {
  text: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, ...props }) => {
  return (
    <button type="button" {...props}>
      {text}
    </button>
  );
};
