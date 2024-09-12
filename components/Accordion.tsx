import React, { useState, ReactNode, useRef, useEffect } from 'react';
import { IconChevronRight, IconChevronDown } from '@tabler/icons-react'; // Für das Icon

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
const [isOpen, setIsOpen] = useState(defaultOpen);
const [height, setHeight] = useState<string | number>(0);
const contentRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (isOpen && contentRef.current) {
    setHeight(contentRef.current.scrollHeight); // Höhe des Inhaltsbereichs
    } else {
    setHeight(0); // Höhe auf 0 setzen, wenn geschlossen
    }
}, [isOpen]);

const toggleAccordion = () => {
    setIsOpen(!isOpen);
};

return (
    <div className={`border-0 rounded border-black-800 bg-white-800 dark:bg-zinc-900`}>
    <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 flex items-center space-x-2 text-white focus:outline-none"
    >
        <span>
        {isOpen ? <IconChevronDown /> : <IconChevronRight />}
        </span>
        <span className="text-lg">{title}</span>
    </button>
    <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-height duration-300 ease-in-out"
    >
        <div className="p-4 text-gray-300">
        {children}
        </div>
    </div>
    </div>
);
};

export default Accordion;