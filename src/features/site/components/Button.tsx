import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `
    font-semibold rounded-lg transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary)',
          color: 'white',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--color-secondary)',
          color: 'white',
        };
      case 'outline-primary':
        return {
          border: '2px solid var(--color-primary)',
          color: 'var(--color-primary)',
          backgroundColor: 'transparent',
        };
      case 'outline-secondary':
        return {
          border: '2px solid var(--color-secondary)',
          color: 'var(--color-secondary)',
          backgroundColor: 'transparent',
        };
      default:
        return {};
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.disabled) return;
    
    switch (variant) {
      case 'primary':
        e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
        break;
      case 'secondary':
        e.currentTarget.style.backgroundColor = 'var(--color-secondary-hover)';
        break;
      case 'outline-primary':
        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
        e.currentTarget.style.color = 'white';
        break;
      case 'outline-secondary':
        e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
        e.currentTarget.style.color = 'white';
        break;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.disabled) return;
    
    const style = getStyle();
    Object.assign(e.currentTarget.style, style);
  };

  return (
    <button
      className={baseClasses}
      style={getStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

