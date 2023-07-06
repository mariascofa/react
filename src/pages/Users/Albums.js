import React from "react";
import "./albums.css";
import Photo from "./Photo";

const Albums = ({ albumInfo, id, closeFunction, setAlbum }) => {

  const updatePhotoStatus = (photoId) => {
    const updatedArray = albumInfo.map((obj) => {
      if (obj.id === photoId) {
        return {
          ...obj,
          photo_status: !obj.photo_status,
        };
      }
      return obj;
    });
    setAlbum(updatedArray);
  };

  return (
    <div>
      <div className="album-container">
        <h2> Albums: </h2>
        {albumInfo
          .filter((element) => element.userId === id)
          .map((element) => (
            <div key={element.id}>
              <p>{element.title}</p>

              {element.photo_status ? (
                <Photo 
                closBtn = {updatePhotoStatus}
                album = {element}
                />
              ) : (
                <button
                  onClick={() => updatePhotoStatus(element.id)}
                  className="photo_btn"
                >
                  Photo
                </button>
              )}
            </div>
          ))}
        <button onClick={() => closeFunction(id)}>Close Album</button>
      </div>
    </div>
  );
};

export default Albums;
