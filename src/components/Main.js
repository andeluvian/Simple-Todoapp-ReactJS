




import React, { Component } from 'react';

import { Link } from 'react-router'





class Main extends Component {


  render() {


    return (
      <div>
         <h1>React Router Tutorial</h1>
         <ul role="nav">
           <li><Link to="/Leaderboard">Leaderboard</Link></li>
           <li><Link to="/MyProfile">Profile</Link></li>
           <li><Link to="/WallBall">Game</Link></li>
         </ul>

         {this.props.children}
       </div>
    );
  }
}

export default Main;
