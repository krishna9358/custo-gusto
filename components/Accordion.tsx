'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  className?: string;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function Accordion({
  question,
  answer,
  className = '',
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
}: AccordionProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setUncontrolledIsOpen(!uncontrolledIsOpen);
    }
  };

  return (
    <div
      className={`acc border border-rule bg-panel mb-2.5 shadow-sh transition-all duration-300 ${className}`.trim()}
    >
      <button
        type="button"
        className="w-full text-left p-[16px_20px] font-semibold text-[16px] flex justify-between items-center gap-4 cursor-pointer select-none group"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className="group-hover:text-brick transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brick flex-none transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0 pb-0'
        }`}
      >
        <div className="overflow-hidden px-5 text-[15.5px] text-soft">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function AccordionGroup({
  items,
  defaultOpenIndex = -1,
  className = '',
}: {
  items: { q: string; a: string }[];
  defaultOpenIndex?: number;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex >= 0 ? defaultOpenIndex : null
  );

  return (
    <div className={className}>
      {items.map((item, idx) => (
        <Accordion
          key={idx}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
