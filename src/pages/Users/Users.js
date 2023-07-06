import { useEffect, useState } from "react";
import "./albums.css";
import Albums from "./Albums";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [albumInfo, setAlbumInfo] = useState([]);
  const [photoArray, setPhotoInfo] = useState([]);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((resp) => {
          const updatedArr = resp.map((elem) => {
            return {
              ...elem,
              album_status: false,
            };
          });
          setUsers(updatedArr);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((resp) => resp.json())
        .then((resp) => {
          const updatedArr = resp.map((elem) => {
            return {
              ...elem,
              photo_status: false,
            };
          });
          setAlbumInfo(updatedArr);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const closeUsersAlbums = (closedAlbums) => {
    const updatedArray = albumInfo.map((album) => {
      if (closedAlbums.includes(album.userId) && album.photo_status) {
        return {
          ...album,
          photo_status: !album.photo_status,
        };
      }
      return album;
    });
    setAlbumInfo(updatedArray);
  };

  const handleChange = (id) => {
    const updatedArray = users.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          album_status: !obj.album_status,
        };
      }
      return obj;
    });
    setUsers(updatedArray);

    const usersAlbumsId = users
      .filter((obj) => obj.id === id)
      .map((obj) => obj.id);

    closeUsersAlbums(usersAlbumsId);
  };

  return (
    <div>
      <ul className="album">
        {users.map((user) => (
          <li key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Phone: {user.phone}</p>

            {user.album_status ? (
              <Albums
                albumInfo={albumInfo}
                id={user.id}
                closeFunction={handleChange}
                setAlbum={setAlbumInfo}
                photoArray={photoArray}
                setPhotoInfo={setPhotoInfo}
              />
            ) : (
              <button onClick={() => handleChange(user.id)}>Albums</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
