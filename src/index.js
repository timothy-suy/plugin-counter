import React from 'react'
import { render } from 'react-dom'
import Counter from './components/Counter'
import { subscribeToAppointmentService } from './utils/subscribeToAppointmentService'

class App extends React.Component {
  allowedEnterprises = ['some_enterprise']
  
  constructor (props) {
    super(props)
    
    this.state = {
      count: 0,
    }
    
    subscribeToAppointmentService((err, msg) => {
      if (this.allowedEnterprises.indexOf(msg.enterprise) > -1) {
        this.setState({
          count: msg.count
        })
      }
    })
  }
  
  render () {
    return (
      <Counter counter={this.state.count} />
    )
  }
}

render(<App />, document.getElementById('SkedifyCounter'))
