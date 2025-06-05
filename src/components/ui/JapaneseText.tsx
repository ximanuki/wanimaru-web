import React from 'react';
import { cn } from '@/lib/utils';

interface JapaneseTextProps {
  children: React.ReactNode;
  className?: string;
  balance?: boolean;
}

export default function JapaneseText({ 
  children, 
  className = '',
  balance = true
}: JapaneseTextProps) {
  
  return (
    <span 
      className={cn(
        // Japanese typography optimization
        "leading-relaxed",
        // Modern CSS text balancing
        balance && "[text-wrap:balance]",
        // Japanese line breaking
        "[word-break:auto-phrase]",
        // Better spacing for Japanese text
        "[letter-spacing:0.02em]",
        className
      )}
      style={{
        // CSS Text Module Level 4 properties
        textWrap: balance ? 'balance' : 'wrap',
        wordBreak: 'auto-phrase',
        lineBreak: 'strict',
        hangingPunctuation: 'first last',
        letterSpacing: '0.02em'
      }}
    >
      {children}
    </span>
  );
}