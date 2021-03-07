import React from 'react';
import { StoryPropType } from './types';

const Story = ({story}) => {
  return (
    <div className="story">
      <img src={story.media[0] ? story.media[0].url : '/media-placeholder.png'} className="story__image"></img>
      <h4 className="story__title">{story.title}</h4>
      <div className="story__body">
      {story.sentences.map((sentence, i) => 
        <p className="story-body story__sentence" key={i}>{sentence}</p>
      )}
      </div>
      <p>Author: {story.author.name}</p>
      <a className="story__link" target="_blank" href={story.link}>Visit post on {story.source.name}</a>
      <ul className="story__hashtags">
        {story.hashtags.map(hashtag => (
          <p key={hashtag}>{hashtag}</p>
        ))}
      </ul>
    </div>
  );
};

Story.propTypes = {
  story: StoryPropType.isRequired,
};

export default Story;