'use client';

import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';


interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function AccordionItem({ 
  title, 
  content, 
  isOpen = false, 
  onToggle 
}: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-800 flex-1 text-right">
          {title}
        </h3>
        <div className="flex items-center mr-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-gray-600" />
          ) : (
            <Plus className="w-5 h-5 text-gray-600" />
          )}
        </div>
      </button>
      
      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}
      `}>
        <div className="pl-9">
          <p className="text-gray-600 leading-relaxed text-right">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}