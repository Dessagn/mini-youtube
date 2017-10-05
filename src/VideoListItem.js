import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    /**
      Remember onVideoSelect is a function that takes a video as an argument. So on clicking on the current video listItem (li), we pass that video object to the onVideoSelect function
     */
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
    <li onClick={() => {onVideoSelect(video); window.scrollTo(0,0)}} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img alt="" src={imageUrl}  className="media-object"/>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    <h4>{video.snippet.title}</h4>
                    <h6 className="hidden-xs hidden-sm">{video.snippet.description}</h6>
                </div>
            </div>
        </div>
    </li>
);
};

export default VideoListItem;