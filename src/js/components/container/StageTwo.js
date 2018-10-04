import GroupList from "../presentational/GroupList";
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class StageTwo  extends Component {
    constructor() {
      super();
      this.state = {
        localdata: [],
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?nat=gb&results=5')
          .then(response => response.json())
          .then(data => this.setState({localdata: data.results }));
      }
    render() {
      const { localdata } = this.state;
      return (
       
        <form id="article-form">
        <div>
        <p>Interviewing</p>
           <ul className="unstyled" > 
           {localdata.map( (item,i )=> 
           <li key={i}>
               <GroupList        
            value={item}
            handleChange={this.handleChange}
           /></li>)}</ul>
          <div> <Link  to='/'>&lt; &lt;applied </Link>|
<Link  to='/stagethree'> Hired>>> </Link></div>
           </div>
        </form>
      );
    }
  }
  export default StageTwo