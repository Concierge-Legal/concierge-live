import React from 'react';
import { ContentBlock, ContentType, StreamingType } from "../lib/types";
import { QuestionBlock, AnswerBlock, ConciergeIconLabel, WelcomeBlock, AbeIconLabel, UserIconLabel } from "./chatBlocks";



const componentMap: { [key in ContentType]: React.ElementType<any> } = {
    [ContentType.Loading]: ConciergeIconLabel,
    [ContentType.Question]: QuestionBlock,
    [ContentType.Answer]: AnswerBlock,
    [ContentType.Welcome]: WelcomeBlock,
    [ContentType.UserSpeaker]: UserIconLabel,
    [ContentType.ConciergeSpeaker]: ConciergeIconLabel,
    [ContentType.AbeSpeaker]: AbeIconLabel
};

interface ContentQueueProps {
    items: ContentBlock[];
}

const ContentQueue: React.FC<ContentQueueProps> = ({ items }) => {
  const renderContentBlock = (item: ContentBlock) => {
    const ContentComponent = componentMap[item.type];
    if (!ContentComponent) return null;

    

    const { blockId, ...props } = item;

    return (
      <div className={`flex ${item.type === ContentType.Question ? 'justify-end' : 'justify-start'}`}>
        {/* Apply the key directly on the component and spread the rest of the props */}
        <ContentComponent key={blockId} {...props} />
      </div>
    );
  };

  return (
    <div>
      {items.map(item => (
        <React.Fragment key={item.blockId}>
          {renderContentBlock(item)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContentQueue;