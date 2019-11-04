import React from 'react';
import classes from './App.module.css';
import {videoMetaData} from "./videoData"

function App() {
  const VideoMetaData=videoMetaData;
  console.log(VideoMetaData);
  return (
    <div className={classes.App}>
      <div className={classes.mainWrapper}>
        <div className={classes.playerSection}>
          <div className={classes.videoContainer}>
          <iframe className={classes.videoPlayer} src="https://player.vimeo.com/video/190062231" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" title="video Player"></iframe>
          </div>
          <div className={classes.videoStats}>
            <p>98.4K Views</p>
          </div>
          <div>
            <h1>{VideoMetaData.title}</h1>
            <p>{VideoMetaData.description}</p>
          </div>
        </div>
        <div className={classes.playList}></div>
      </div>
    </div>
  );
}

export default App;
