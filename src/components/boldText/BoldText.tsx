import React from 'react';

/**
 * This component used to bold subtext in Text string.
 * Text displayed as normal, if there is no match for bold text
 * @param param here text is actual text, boldText is text need to be bold
 */
export default function BoldText({ text, boldText }: any) {
  const textArray = text.split(boldText);
  return (
    <div>
      {textArray.map((item: any, index: any) => (
        <span key={index} className="item">
          {item}
          {index !== textArray.length - 1 && (
            <span className="font-weight-bold">{boldText}</span>
          )}
        </span>
      ))}
    </div>
  );
}
