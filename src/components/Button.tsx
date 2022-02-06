import { forwardRef, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => (
    <button
      className='px-6 py-2 text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded shadow-xl hover:bg-blue-600'
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
