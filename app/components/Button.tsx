import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-sans font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-brand-almost-black text-brand-almost-white hover:bg-brand-almost-black/90 shadow-lg hover:shadow-xl focus:ring-brand-primary',
    ghost: 'bg-transparent text-brand-almost-black hover:bg-brand-almost-black/10 focus:ring-brand-almost-black',
    outline: 'bg-transparent border-2 border-brand-almost-black text-brand-almost-black hover:bg-brand-almost-black hover:text-brand-almost-white focus:ring-brand-almost-black',
  };

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-xl',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
