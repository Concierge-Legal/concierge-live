
export const realStreamHandler = (contentStream: AsyncIterable<string>, callback: (chunk: string) => void) => {
    let active = true;
    
    (async () => {
        try {
            for await (const chunk of contentStream) {
                if (!active) break;
                callback(chunk);
            }
        } catch (error) {
            console.error('Streaming error:', error);
        }
    })();

    return () => { active = false; };  // This cancel function now correctly matches the expected signature
};


export const fakeStreamHandler = (content: string, callback: (chunk: string) => void) => {
    const words = content.split(' ');
    let currentContent = '';
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < words.length) {
            currentContent += words[index] + ' ';
            callback(currentContent);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 100); // Adjust timing to simulate streaming

    return () => clearInterval(intervalId);
};

export const notStreamingHandler = (content: string, callback: (content: string) => void) => {
    // Directly pass the content without any delay or streaming simulation
    callback(content);
};