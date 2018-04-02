// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(timeLeft){
    super();

    this.state = {
      secondsLeft: timeLeft['initialCount']
    }
  }

  render() {

      if(this.state.secondsLeft > 0){
        return(
        <p>{this.state.secondsLeft} seconds left before I go boom!</p>
      )
      }
      else{
        return(
        <p>Boom!</p>
      )
      }

  }
}

export default Bomb
