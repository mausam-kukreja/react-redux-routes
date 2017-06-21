import PropTypes from 'prop-types';
import React from 'react';
import s from './css';
import ClockBar from '../ClockBar'
import { Link } from 'react-router-dom';

const SideBar = props => (
 <s.Container>
 <ClockBar />



  <ul>
          <li>
            <Link to={'/'}>Lobby</Link>
          </li>
           <li>
            <Link to={'/TicTacTeo'}>TicTacTeo</Link>
          </li>
           <li>
            <Link to={'/Todo'}>Todo</Link>
          </li>
          <li>
            <Link to={'/settings'}>Settings</Link>
          </li>
        </ul>
 </s.Container>
);
export default SideBar;