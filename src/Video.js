import React, {useRef, useState} from 'react'
import Videofooter from "./Videofooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video( {
        url,
        channel,
        description,
        song,
        likes,
        shares,
        bookmarks,
        comments,
    }
    ) {

    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
    
    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    };

  return (
    <div className="video">
        <video className="video__player" mediatype="video"
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src={url}
        ></video>

        <Videofooter 
            channel={channel} 
            description={description}
            song={song}
        />

        <VideoSidebar 
            likes={likes} 
            shares={shares}
            bookmarks={bookmarks}
            comments={comments}
        />

    </div>
  )
}

export default Video

