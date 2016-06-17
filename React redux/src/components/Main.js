require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'

let yeomanImage = require('../images/yeoman.png');

const App = React.createClass({
  render(){
    return <div>这里是app</div>
  }
})
const About = React.createClass({
  render(){
    return <div>这里是About</div>
  }
})
const NoMatch = React.createClass({
  render(){
    return <div>这里是NoMatch</div>
  }
})
// const Users = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>Users</h1>
//         <div className="master">
//           <ul>
//             {/* use Link to route around the app */}
//             {this.state.users.map(user => (
//               <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
//             ))}
//           </ul>
//         </div> 
//         <div className="detail">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// })


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export {App, About,NoMatch}
