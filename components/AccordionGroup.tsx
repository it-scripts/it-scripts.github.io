// components/AccordionGroup.tsx
import React, { ReactNode } from 'react';

interface AccordionGroupProps {
  children: ReactNode;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ children }) => {
  return (
    <div className="border border-zinc-700 rounded-md bg-gray-900 my-4"> {/* Hier Margin hinzugefügt */}
      {children}
    </div>
  );
};

export default AccordionGroup;
