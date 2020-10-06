
import React from 'react';
import './Counter.css';


class Counter extends React.Component {
    state = {
      number: 10,   //  SETS THE COUNTER - OBVS CAN BE SET TO WHATEVER
    }
  
    increaseNumber = () => {
      this.setState({
        number: this.state.number +1 
      })
  }

    decreaseNumber = () => {
      if(this.state.number >= 1) {
        this.setState({
          number: this.state.number -1
        })
      } else {
        this.setState({
          number: 0
        })
      }
    }



    render() {
      // THIS IS THE BEST PLACE FOR ANY CONSOLE LOGS
      
      return (
      <div>
      
          <div className="brian">
          <h2>{this.state.number}</h2>
          </div>
          

          <div className="increase">
          <button onClick={this.increaseNumber}>Increase</button>
          </div>
  
  
          <div className="decrease">
          <button onClick={this.decreaseNumber}>Decrease</button>
          </div>
  
  
      </div>

  


      )
    }    
}

export default Counter;			



