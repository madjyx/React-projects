import React, { Component } from 'react';

class Counter extends Component {
    state = {
     count: 0
    };

    handleIncrement = (product) => {
        console.log(product);
        this.setState({count: this.state.count + 1})
    };

   
    render() {
     
     return(
      <div>
       <span className="badge bg-success m-2">{this.formatCount()}</span>
       <button onClick={this.handleIncrement} type="button" className="btn btn-dark">Gumbitj</button>
      </div>
    
     );
    }

    formatCount() {
     const {count} = this.state;
     return count === 0 ? 'zero' : count;
        
    }
}
export default Counter;