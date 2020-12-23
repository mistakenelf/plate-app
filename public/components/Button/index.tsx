import { FunctionComponent } from 'preact';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {text}
    </button>
  );
};
