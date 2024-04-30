interface ButtonProps {
  onClick: () => void;
  text: 'click me' | 'go out ';
  bgColor?: 'red' | 'green';
}

const Button = ({ onClick, text, bgColor }: ButtonProps) => {
  return (
    <button
style={{
    backgroundColor: bgColor
}}
    
    onClick={onClick}>
        {text}
    </button>
  )
};

export default Button;
