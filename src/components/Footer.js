import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useReducer, Component } from "react"
import cn from 'classnames';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.dockContainer}>
      
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
