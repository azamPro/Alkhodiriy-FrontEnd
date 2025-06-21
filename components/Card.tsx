interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hover = false 
}: CardProps) {
  return (
    <div className={`
      bg-white rounded-xl shadow-md border border-gray-100 p-6
      ${hover ? 'card-hover' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}