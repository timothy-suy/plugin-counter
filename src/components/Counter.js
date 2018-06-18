import React from 'react'
import Odometer from 'react-odometerjs'

import '../styles/Counter.css'

class Counter extends React.Component {
  render () {
    return (
      <div>
        <Odometer
          format="d"
          duration={1000}
          value={Math.max(1000000, Math.pow(10, this.props.counter.toString().length + 1)) + this.props.counter}
        />
      </div>
    )
  }
}

export default Counter