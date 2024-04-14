import { useState, useEffect } from 'react';
import { realStreamHandler, fakeStreamHandler, notStreamingHandler } from '../streamingUtils';
import { StreamingType } from '../types';

// Adjust content type based on StreamingType
export const useStreaming = (
    content: string | AsyncIterable<string>,
    type: StreamingType
) => {
    const [displayContent, setDisplayContent] = useState('');

    useEffect(() => {
        let cancel: () => void = () => {};

        if (type === StreamingType.real && typeof content !== 'string') {
            cancel = realStreamHandler(content, setDisplayContent);
        } else if (type === StreamingType.fake && typeof content === 'string') {
            cancel = fakeStreamHandler(content, setDisplayContent);
        } else if (type === StreamingType.noStream && typeof content === 'string') {
            notStreamingHandler(content, setDisplayContent);
        }

        return () => cancel();  // Execute the cleanup function
    }, [content, type]);

    return displayContent;
};

