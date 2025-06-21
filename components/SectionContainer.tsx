interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'light' | 'pattern';
}

export default function SectionContainer({ 
  children, 
  className = '', 
  id,
  background = 'default' 
}: SectionContainerProps) {
  const backgroundClasses = {
    default: '',
    light: 'bg-gray-50',
    pattern: 'bg-pattern bg-gray-50'
  };

  return (
    <section 
      id={id}
      className={`py-16 lg:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}