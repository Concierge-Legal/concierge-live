import { useState, useEffect } from 'react';
import { realStreamHandler, fakeStreamHandler, notStreamingHandler } from '../streamingUtils';
import { StreamingType } from '../types';

// Adjust content type based on StreamingType
export const useStreaming = (
    content: string,
    type: StreamingType
) => {
    const [displayContent, setDisplayContent] = useState('');

    useEffect(() => {
        let cancel: () => void = () => {};

        if (type === StreamingType.real) {
            realStreamHandler(content, setDisplayContent);
        } else if (type === StreamingType.fake) {
            cancel = fakeStreamHandler(content, setDisplayContent);
        } else if (type === StreamingType.noStream) {
            notStreamingHandler(content, setDisplayContent);
        }

        return () => cancel();  // Execute the cleanup function
    }, [content, type]);

    return displayContent;
};

