import React from "react";
import "./Photos.css"

export default function Photos(props) {
    console.log(props.photos)
    if (props.photos) {
    return (
        <section className="Photos">
            <div className="row">
            {props.photos.map(function(photo, index){
                return (
                    <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
                    <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
                   <img src={photo.src.landscape} className="img-fluid" alt={photo.alt}/> </a>
                   </div>
                )
            })}
            </div>
        </section>
    );
}
else {
    return null;
}
} 