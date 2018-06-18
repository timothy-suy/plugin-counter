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
          value={1000000 + this.props.counter}
        />
      </div>
    )
  }
}

export default Counter