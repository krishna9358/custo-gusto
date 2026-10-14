import React from 'react';
import { bc } from './Glyphs';

export default function Ticker() {
  const bits = [
    '40,000+ CUSTOMERS',
    '1,20,000+ PIECES',
    '300+ IN ONE NIGHT',
    '~5 MIN LIVE',
    '500+ FIVE STAR REVIEWS',
    '13 LIVE DESKS',
    '5 LIVE EVENTS',
    'NEVER REPEATED',
  ];

  const renderSeq = (keyPrefix: string) => (
    <div className="tick-s" key={keyPrefix}>
      {bits.map((bit, i) => (
        <span key={`${keyPrefix}-${i}`}>{typeof bit === 'string' && bit.includes('~') ? bc(bit) : bit}</span>
      ))}
    </div>
  );

  return (
    <div className="tick" aria-hidden="true">
      <div className="tick-t">
        {renderSeq('seq1')}
        {renderSeq('seq2')}
      </div>
    </div>
  );
}
