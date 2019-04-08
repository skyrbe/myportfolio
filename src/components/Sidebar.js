import React from 'react';
import { Link } from "gatsby";
import cn from 'classnames';
import PropTypes from 'prop-types';
import './Finder.css';

const Sidebar = (props) => {
  return (
    <>
      <div className="menu pl-2">
        <h3 className="menu-title">Favorites</h3>
        <ul className="menu-list">
          <li><Link rel="canonical" className={cn("menu-item", props.to === 'me' ? 'active' : '')} to="/">Harsha Venkatram</Link></li>
          <li><Link rel="canonical" className={cn("menu-item", props.to === 'code' ? 'active' : '')} to="/code/">Code</Link></li>
          <li><Link rel="canonical" className={cn("menu-item", props.to === 'designs' ? 'active' : '')} to="/designs/">Designs</Link></li>
          <li><a className="menu-item" data-href="experience">Experience</a></li>
        </ul>
      </div>
      <div className="menu pl-2 mt-5">
        <h3 className="menu-title">Others</h3>
        <ul className="menu-list">
          <li><Link rel="canonical" className={cn("menu-item", props.to === 'social' ? 'active' : '')} to="/social/">Useful Links</Link></li>
          <li><Link rel="canonical" className={cn("menu-item", props.to === 'artwork' ? 'active' : '')} to="/artwork/">Artwork</Link></li>
          <li><Link rel="canonical" className={cn("menu-item", props.to === 'photography' ? 'active' : '')} to="/photography/">Photography</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
