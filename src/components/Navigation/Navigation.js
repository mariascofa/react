import "./navigation.css";
import React from 'react';
import { Link } from 'react-router-dom';
import {HOME, SMILE, TODO, USERS, CONTACTS} from  '../../constants/routes';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
        <Link to={HOME}>Home</Link>
        </li>
        <li>
        <Link to={SMILE}>Smiles</Link>
        </li>
        <li>
        <Link to={TODO}>Todo</Link>
        </li>
        <li>
        <Link to={USERS}>Users</Link>
        </li>
        <li>
        <Link to={CONTACTS}>Contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
