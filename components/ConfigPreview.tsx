import React, { useState, useEffect } from 'react';
import { IconFileCode } from '@tabler/icons-react';

interface ConfigPreviewProps {
    owner: string;
    repo: string;
    path: string;
    branch?: string;
}

const getLanguage = (path: string): string => {
    const ext = path.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'lua': return 'lua';
        case 'js': return 'javascript';
        case 'ts': return 'typescript';
        case 'json': return 'json';
        default: return 'text';
    }
};

const ConfigPreview: React.FC<ConfigPreviewProps> = ({ owner, repo, path, branch = 'main' }) => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch file content');
                }

                const text = await response.text();
                setContent(text);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [owner, repo, path, branch]);

    if (loading) {
        return (
            <div className="animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg p-4">
                <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-1/2"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded relative">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> {error}</span>
            </div>
        );
    }

    return (
        <div className="border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden">
            <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 flex items-center border-b border-zinc-300 dark:border-zinc-700">
                <IconFileCode className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
                <span className="text-sm text-zinc-600 dark:text-zinc-300 font-mono">{path}</span>
            </div>
            <pre className="p-4 bg-white dark:bg-zinc-900 overflow-x-auto">
                <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
                    {content}
                </code>
            </pre>
        </div>
    );
};

export default ConfigPreview;