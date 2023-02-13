import React, {useState} from 'react'
import "./VideoSidebar.css";
import { Comment } from '@material-ui/icons';
import { FavoriteBorder } from '@material-ui/icons';
import { Favorite } from '@material-ui/icons';
import { BookmarkBorder } from '@material-ui/icons';
import { Bookmark } from '@material-ui/icons';
import { Send } from '@material-ui/icons';


function VideoSidebar({likes,shares,comments,bookmarks}) {
    const[liked,setliked] = useState(false);
    const[liked0,setliked0] = useState(false);
  return (
    <div className="videosidebar">
        <div className="side_button">
            {liked ?  
            (<Favorite fontSize="large" onClick = {(e) => setliked(false)}/>)
            : (<FavoriteBorder fontSize="large" onClick = {(e) => setliked(true)}/>)}
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="side_button">
            <Comment fontSize="large"/>
            <p>{comments}</p>
        </div>
        <div className="side_button">
            {liked0 ?  
            (<Bookmark fontSize="large" onClick = {(e) => setliked0(false)}/>)
            : (<BookmarkBorder fontSize="large" onClick = {(e) => setliked0(true)}/>)}
            <p>{liked0 ? bookmarks + 1 : bookmarks}</p>
        </div>
        <div className="side_button">
            <Send fontSize="large"/>
            <p>{shares}</p>
        </div>
    </div>
  );
}

export default VideoSidebar