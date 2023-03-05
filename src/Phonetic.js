import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetic.css"


export default function Phonetic(props) {
    return (
        <div className="Phonetic">
                 {props.phonetic.text}
                 <br />
                 <br />
            <ReactAudioPlayer
  src={props.phonetic.audio}
  controls
/>
      
      
        </div>
    )
}