import React from 'react';

interface AccordionProps {
  question: string;
  answer: string;
  className?: string;
}

export function Accordion({ question, answer, className = '' }: AccordionProps) {
  return (
    <details className={`acc ${className}`.trim()}>
      <summary>{question}</summary>
      <div className="body">{answer}</div>
    </details>
  );
}
