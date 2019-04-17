import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useReducer, Component } from "react"
import cn from 'classnames';
import styles from './Toolbar.module.css';
import Clock from './Clock';
import Charge from './Charge';

const Toolbar = ({ siteTitle, changeTheme }) => {
  const toggleFullScreen = () => {
    const elem = document.querySelector('html');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  return (
    <header className={cn('d-none d-md-flex', styles.header)}>
      <ul className={cn(styles.list, styles.leftList)}>
        <li className={styles.logo}>HV</li>
        <li id="full-screen-js" className="d-none d-md-block" onClick={toggleFullScreen}>Full Screen</li>
        <li className="d-none d-md-block" onClick={changeTheme}>Dark Theme</li>
      </ul>
      <ul className={cn('d-block d-md-none', styles.list, styles.rightList)}>
        <li>
          <Clock />
        </li>
      </ul>
      <ul className={cn(styles.list, styles.rightList)}>
        <Charge />
        <li className="d-none d-md-block">
          <Clock />
        </li>
      </ul>
    </header>
  )
}

Toolbar.propTypes = {
  siteTitle: PropTypes.string,
}

Toolbar.defaultProps = {
  siteTitle: ``,
}

export default Toolbar
