import { MusicNote } from '@material-ui/icons';
import React from 'react'
import "./Videofooter.css";

function footer({channel, description, song}) {
  return (
    <div className="videofooter">
        <div className="videofooter_text">
          <h3>@{channel}</h3>
          <p>{description}</p>
          <div className="videofooter_icon">
          <MusicNote/>
          </div>
          <div className="videofooter_text1">
          <marquee  direction="left" >{song}</marquee>
          </div>
        </div>
        <img className="videofooter_record" src="https://cdn.pixabay.com/photo/2014/04/02/14/04/vinyl-306070_960_720.png" alt=""></img>
    </div>
  )
}

export default footer