import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useReducer, Component } from "react"
import cn from 'classnames';
import styles from './Toolbar.module.css';
import Clock from './Clock';
import Charge from './Charge';

const Toolbar = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <ul className={cn(styles.list, styles.leftList)}>
        <li className={styles.logo}>HV</li>
        <li id="full-screen-js">Full Screen</li>
        <li id="theme-switcher-js">Dark Theme</li>
      </ul>

      <ul className={cn(styles.list, styles.rightList)}>
        <Charge />
        <Clock />
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
