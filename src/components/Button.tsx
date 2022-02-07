import clsx from 'clsx';
import { forwardRef, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => (
    <button
      className={clsx(
        'px-6 py-2 text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded hover:bg-blue-600',
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
