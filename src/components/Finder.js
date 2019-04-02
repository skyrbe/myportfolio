import React from 'react';
import PropTypes from 'prop-types';
import './Finder.css';

const Finder = (props) => {
  return (
    <div className="finder-container">
      <div className="finder-wrapper finder-wrapper-list">
        <div className="finder finder-list">
          <div className="left-col px-5 py-3">
            <ul className="dummy-actions mb-5">
              <li className="action red"></li>
              <li className="action yellow"></li>
              <li className="action green"></li>
            </ul>
            {props.sideMenu}
          </div>
          <div className="right-col">
            {props.mainContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
