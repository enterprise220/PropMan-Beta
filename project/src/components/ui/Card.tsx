import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-white rounded-lg shadow-sm border border-gray-200',
          className
        )
      )}
    >
      {children}
    </div>
  );
}

Card.Header = function CardHeader({
  className,
  children,
}: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'px-6 py-4 border-b border-gray-200',
          className
        )
      )}
    >
      {children}
    </div>
  );
};

Card.Body = function CardBody({
  className,
  children,
}: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'px-6 py-4',
          className
        )
      )}
    >
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({
  className,
  children,
}: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'px-6 py-4 border-t border-gray-200',
          className
        )
      )}
    >
      {children}
    </div>
  );
};