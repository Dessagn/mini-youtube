import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    //We have access to the videos array and we will pass each video item to the VideoListItem component
    const videoItem = props.videos.map((video) => {
        return (
        <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video = {video} />
    );
    });

    return(
        <div className="col-md-4">
            <ul className="list-group" >
                { videoItem }
            </ul>
        </div>
    );
};

export default VideoList;