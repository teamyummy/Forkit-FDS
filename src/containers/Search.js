import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../components/Common/Header';

class Search extends Component{
  render(){
    const query = this.props.location.query;
    const page = query.page || 1;
    const pageSize = query.pageSize || 10;
    return (
      <div>
        <Header />
        <h2>Restaurant List {page} {pageSize}</h2>
        <ul>
          <li><Link to="restaurant/1">1번</Link></li>
          <li><Link to="restaurant/2">2번</Link></li>
          <li><Link to="restaurant/3">3번</Link></li>
        </ul>
      </div>
    );
  }
}

export default Search;