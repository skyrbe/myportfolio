import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

const checkTime = (i) => {
  if( i < 10 ) {
    i = "0" + i;
  }
  return i;
}

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const systemTime = window.setTimeout(() => {
      setTime(new Date())
    },1000);
    return () => window.clearTimeout(systemTime);
  },[time]);

  let date = time, hour = date.getHours(), minute = checkTime(date.getMinutes());

  let timeZone = "AM";
  if ( hour > 12 ) {
    hour = hour - 12;
    hour = checkTime(hour);
    if ( hour !== 12 ) {
      timeZone = "PM";
    }
  }
  return (
    <span>
      {`${hour}:${minute} ${timeZone}`}
    </span>
  )
}

Clock.propTypes = {
  time: PropTypes.string,
}

Clock.defaultProps = {
  time: ``,
}

export default Clock
