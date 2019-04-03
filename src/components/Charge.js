import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useReducer, useEffect, Component } from "react"
import useBattery from 'use-battery-hook';
import cn from 'classnames';
import styles from './Toolbar.module.css';

const Charge = () => {
  const battery = useBattery();
  return (
    <li className={cn('d-flex align-items-center', styles.batteryContainer)}>
      {battery && battery.level && (
        <>
          <span className="d-none d-md-block mr-2" id="battery-level-js">
            {`${window.parseInt(battery.level * 100)}%`}
          </span>
          <div className={styles.batteryOuter}>
            <div className={cn(styles.batteryInner, battery.charging ? cn('icon-thunder', styles.chargingIcon): '')} style={{width: 'calc('+(battery.level * 100)+'% - 2px)'}}></div>
          </div>
        </>
      )}
    </li>
  )
}

Charge.propTypes = {
  time: PropTypes.string,
}

Charge.defaultProps = {
  time: ``,
}

export default Charge
