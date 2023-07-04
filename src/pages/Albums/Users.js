import { useEffect, useState } from "react";
import "./albums.css";

const Albums = () => {
  const [users, setUsers] = useState([]);
  const [idsAlbum, openAlbum] = useState([]);
  const [albumInfo, setAlbum] = useState({});
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((resp) => setUsers(resp));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    let activeAlbums = {};
    try {
      if (!idsAlbum) return;
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((resp) => resp.json())
        .then((resp) => {
          const filteredAlbums = resp.filter((elem) => idsAlbum.includes(elem.id));
          filteredAlbums.forEach((elem) => {
            if (!activeAlbums.hasOwnProperty(elem.id)) {
              activeAlbums[elem.id] = elem.title;
            }
          });
          setAlbum(activeAlbums);
        });
    } catch (error) {
      console.error(error);
    }
  }, [idsAlbum]);
  
  const handleChange = (id) => {
    openAlbum((prevIdsAlbum) => [...prevIdsAlbum, id]);
  };

  return (
    <div>
      <ul className="album">
        {users.map((user) => (
          <li key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Phone: {user.phone}</p>
            <button onClick={() => handleChange(user.id)}>Albums</button>
            {albumInfo.hasOwnProperty(user.id) && (
              <p>{albumInfo[user.id]}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
            }

export default Albums;
