import React, { useState, useEffect } from "react"
import "./App.css";
import Video from "./Video";
import db from './firebase';


function App() {
    
     const[videos, setVideos] = useState([]);

    useEffect(() => {
        db.collection('videos').onSnapshot((snapshot) => (
          setVideos(snapshot.docs.map((doc) => doc.data()))
        ))
      }, []);

    return (
        <div className = "app">
            <div className="app__videos">
                {videos.map(videos => (
                        <Video  
                            url={videos.url}
                            channel={videos.channel}
                            description={videos.description}
                            song={videos.song}
                            likes={videos.likes}
                            shares={videos.shares}
                            bookmarks={videos.bookmarks}
                            comments={videos.comments}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default App;