import React from 'react';
import { StoryPropType } from './types';

const Story = ({story}) => {
  return (
    <article className="story">
      <header className="story__header">
        <h2>Representative story</h2>
      </header>
      <div className="story__image">
        <img src={story.media[0] ? story.media[0].url : '/media-placeholder.png'} alt="media-img" className="story__image"></img>
      </div>
      <h4 className="story__title">{story.title}</h4>
      <div className="story__body">
      {story.sentences.map((sentence, i) => 
        <p className="story-body story__sentence" key={i}>{sentence}</p>
      )}
      </div>
      <p>Author: {story.author.name}</p>
      <a className="story__link" target="_blank" rel="noopener noreferrer" href={story.link}>Visit post on {story.source.name}</a>
      <p className="story__hashtags">
        {story.hashtags.map(hashtag => `${hashtag} `)}
      </p>
    </article>
  );
};

Story.propTypes = {
  story: StoryPropType.isRequired,
};

export default Story;