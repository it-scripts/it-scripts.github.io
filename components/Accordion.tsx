import React, { useState, ReactNode, useRef, useEffect } from 'react';
import { IconChevronRight, IconChevronDown, IconHash } from '@tabler/icons-react'; // Für das Hashtag-Icon

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<string | number>(0);
  const [notificationVisible, setNotificationVisible] = useState(false); // State für die Benachrichtigung
  const contentRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null); // Referenz für das Accordion-Element
  const accordionId = title.toLowerCase().replace(/\s+/g, '-'); // ID aus dem Titel generieren

  // Scroll in die Mitte des Bildschirms, wenn der Hash geöffnet wird
  const scrollToAccordion = () => {
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // In der Mitte des Bildschirms anzeigen
      });
    }
  };

  // Prüfen, ob die URL den passenden Hash enthält
  useEffect(() => {
    if (window.location.hash === `#${accordionId}`) {
      setIsOpen(true); // Accordion öffnen, wenn der Hash passt
      scrollToAccordion(); // In die Mitte des Bildschirms scrollen
    }
  }, [accordionId]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight); // Höhe des Inhaltsbereichs setzen
    } else {
      setHeight(0); // Höhe auf 0 setzen, wenn geschlossen
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleHashtagClick = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Verhindern, dass sich das Accordion beim Klick auf das Hashtag öffnet
    const newUrl = `${window.location.origin}${window.location.pathname}#${accordionId}`;
    window.history.replaceState(null, '', newUrl); // URL aktualisieren, ohne die Seite neu zu laden
    scrollToAccordion(); // In die Mitte des Bildschirms scrollen

    try {
      await navigator.clipboard.writeText(newUrl); // Link in die Zwischenablage kopieren
      setNotificationVisible(true); // Benachrichtigung anzeigen
      setTimeout(() => setNotificationVisible(false), 3000); // Nach 3 Sekunden ausblenden
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return (
    <div id={accordionId} ref={accordionRef} className="relative border-0 rounded border-zinc-300 bg-zinc-200 dark:bg-zinc-900">
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 flex items-center space-x-2 text-black focus:outline-none dark:text-white"
      >
        <span>
          {isOpen ? <IconChevronDown /> : <IconChevronRight />}
        </span>
        <span className="text-lg flex-grow">{title}</span>
        {/* Hashtag-Icon auf der rechten Seite mit Hover-Effekt */}
        <span
          onClick={handleHashtagClick}
          className="text-gray-500 cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-300"
          title="Get link to this section"
        >
          <IconHash />
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-height duration-300 ease-in-out"
      >
        <div className="p-4 text-gray-900 dark:text-gray-300">
          {children}
        </div>
      </div>
      {/* Benachrichtigung unten rechts */}
      {notificationVisible && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          The link has been copied!
        </div>
      )}
    </div>
  );
};

export default Accordion;
