import React from "react";
import "./albums.css";

const Photo = ({closBtn, album}) => {




    return(<div> 
        <button 
        onClick={() => closBtn(album.id)}
        className="photo_close_btn">
    Close Photo
  </button> </div>);
};

export default Photo;
