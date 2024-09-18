import React, { useEffect, useState } from 'react';
import { IconChevronRight, Icon as TablerIcon } from '@tabler/icons-react';

interface ExternLinkProps {
  href: string;
  icon?: React.ReactNode | React.ElementType; // Erlaubt sowohl React-Komponenten als auch Strings
  manualTitle?: string; // Neuer Prop für manuellen Titel
}

interface LinkMetaData {
  title: string;
  description: string;
  icon: string;
}

const fetchMetaData = async (url: string): Promise<LinkMetaData> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const text = await response.text(); // Hole den HTML-Inhalt
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const title = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
      doc.querySelector('title')?.textContent ||
      'No title';
    const description = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
      doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
      'No description';
    const icon = doc.querySelector('link[rel="icon"]')?.getAttribute('href') ||
      doc.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
      'https://example.com/default-icon.png';

    return { title, description, icon: new URL(icon, url).href };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Error',
      description: 'Unable to fetch metadata.',
      icon: 'https://example.com/error-icon.png',
    };
  }
};

const ExternLink: React.FC<ExternLinkProps> = ({ href, icon, manualTitle }) => {
  const [metaData, setMetaData] = useState<LinkMetaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!manualTitle) {
      fetchMetaData(href).then((data) => {
        setMetaData(data);
        setLoading(false);
      });
    } else {
      setMetaData({
        title: manualTitle,
        description: 'No description available',
        icon: 'https://example.com/web-icon.png', // Web-Icon für manuellen Titel
      });
      setLoading(false);
    }
  }, [href, manualTitle]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while fetching metadata
  }

  // Funktion zur Kürzung der Beschreibung
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...'; // Kürzen und '...' hinzufügen
  };

  return (
    <a
      href={href}
      className="w-full my-5 border border-gray-200 shadow-sm hover:shadow-md dark:border-neutral-700 dark:hover:border-neutral-600 transition-all duration-200 dark:bg-neutral-900 bg-white rounded-lg overflow-hidden flex flex-col justify-start relative"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center p-4">
        {/* Icon */}
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
        {/* Title */}
        <div className="flex flex-col">
          <span className="font-semibold text-lg text-gray-700 dark:text-gray-100">
            {metaData?.title}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {metaData?.description && truncateDescription(metaData.description, 100)} {/* Hier wird die Beschreibung gekürzt */}
          </span>
        </div>
        {/* Arrow Icon */}
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300">
          <IconChevronRight />
        </span>
      </div>
    </a>
  );
};

export default ExternLink;
