import React, { useEffect, useState } from 'react';
import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import cn from "clsx";

interface ExternLinkProps {
  href: string;
  icon?: React.ReactNode | React.ElementType; // Erlaubt sowohl React-Komponenten als auch Strings
  manualTitle?: string; // Eigenschaft für manuellen Titel
  manualDescript?: string; // Eigenschaft für manuelle Beschreibung
  children?: React.ReactNode; // Kinder-Elemente unterstützen
}

interface LinkMetaData {
  title: string;
  description: string;
  icon: string;
}

// Stile im Stil der Nextra Cards
const classes = {
  card: cn(
    "nx-group nx-flex nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200",
    "nx-text-current nx-no-underline dark:nx-shadow-none",
    "hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100",
    "active:nx-shadow-sm active:nx-shadow-gray-200",
    "nx-transition-all nx-duration-200 hover:nx-border-gray-300",
    "nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900",
    "my-4"
  ),
  title: cn(
    "nx-font-semibold nx-text-gray-700 hover:nx-text-gray-900",
    "dark:nx-text-neutral-200 dark:hover:nx-text-neutral-50"
  ),
  description: cn(
    "nx-text-sm nx-text-gray-500 dark:nx-text-gray-400"
  )
};

const fetchMetaData = async (url: string): Promise<LinkMetaData> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Netzwerkantwort war nicht ok');
    }
    const text = await response.text(); // HTML-Inhalt abrufen
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const title = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
      doc.querySelector('title')?.textContent ||
      'Kein Titel';
    const description = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
      doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
      'Keine Beschreibung';
    const icon = doc.querySelector('link[rel="icon"]')?.getAttribute('href') ||
      doc.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
      'https://example.com/default-icon.png';

    return { title, description, icon: new URL(icon, url).href };
  } catch (error) {
    console.error('Fehler beim Abrufen der Metadaten:', error);
    return {
      title: 'Fehler',
      description: 'Metadaten konnten nicht abgerufen werden.',
      icon: 'https://example.com/error-icon.png',
    };
  }
};

const ExternLink: React.FC<ExternLinkProps> = ({ href, icon, manualTitle, manualDescript, children }) => {
  const [metaData, setMetaData] = useState<LinkMetaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!manualTitle && !manualDescript) {
      fetchMetaData(href).then((data) => {
        setMetaData(data);
        setLoading(false);
      });
    } else {
      setMetaData({
        title: manualTitle || 'Kein Titel verfügbar',
        description: manualDescript || 'Keine Beschreibung verfügbar',
        icon: 'https://example.com/web-icon.png', // Web-Icon für manuellen Titel/Beschreibung
      });
      setLoading(false);
    }
  }, [href, manualTitle, manualDescript]);

  // Funktion zum Kürzen der Beschreibung
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...'; // Kürzen und '...' hinzufügen
  };

  // Wenn Kinder-Elemente vorhanden sind, diese anstelle des automatisch generierten Inhalts anzeigen
  if (children) {
    return (
      <a
        href={href}
        className="nx-flex nx-items-center nx-no-underline nx-text-current nx-transition-colors hover:nx-text-blue-600 dark:hover:nx-text-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <IconExternalLink className="nx-ml-1 nx-inline-block nx-h-4 nx-w-4" />
      </a>
    );
  }

  if (loading) {
    return (
      <div className="nx-flex nx-items-center nx-justify-center nx-h-20 nx-bg-zinc-100 dark:nx-bg-zinc-800 nx-rounded-lg nx-animate-pulse">
        <span className="nx-text-zinc-500 dark:nx-text-zinc-400">Lädt...</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      className={classes.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="nx-flex nx-items-center nx-w-full nx-p-4 nx-relative">
        {/* Icon - mit größerem Abstand zum Text */}
        <div className="nx-flex-shrink-0 nx-mr-12">
          {icon ? (
            typeof icon === 'string' ? (
              <img src={icon} alt="Favicon" className="w-6 h-6 mr-3" />
            ) : (
              React.isValidElement(icon) ? (
                React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 mr-3' })
              ) : (
                React.createElement(icon as React.ElementType, { className: 'w-6 h-6 mr-3' })
              )
            )
          ) : (
            <img src={metaData?.icon} alt="Favicon" className="w-6 h-6 mr-3" />
          )}
        </div>
        
        {/* Inhalt - mit weniger Padding rechts, da der Pfeil absolut positioniert ist */}
        <div className="nx-flex-grow px-4">
          <span className={classes.title}>
            {metaData?.title}
          </span>
          <div className="nx-mt-1">
            <span className={classes.description}>
              {metaData?.description && truncateDescription(metaData.description, 120)}
            </span>
          </div>
        </div>
        
        {/* Pfeil-Icon - korrekt rechts ausgerichtet mit absoluter Positionierung */}
        <span className="absolute right-4 content-end nx-top-1/2 nx-transform nx--translate-y-1/2">
          <IconChevronRight className="nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]" />
        </span>
      </div>
    </a>
  );
};

export default ExternLink;
