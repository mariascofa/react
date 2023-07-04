import "./navigation.css";
import React from 'react';
import { Link } from 'react-router-dom';
import {HOME, SMILE, TODO, ALBUMS} from  '../../constants/routes';

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
        <Link to={ALBUMS}>Albums</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
