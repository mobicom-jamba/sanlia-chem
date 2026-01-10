import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
  size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = "", size = 48 }) => (
  <div className={`flex justify-center items-center w-full py-12 ${className}`}>
    <Loader2 className="animate-spin text-primary" size={size} />
  </div>
);
