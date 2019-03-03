import React,{Component} from 'react';
import {withRouter} from 'next/router'
import BaseLayout from '../components/BaseLayout';
import axios from 'axios';
class Portfolio extends React.Component{
  static async getInitialProps({query}){
    const postId = query.id;
    let portfolio = {}

    try{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    portfolio = response.data;
  }catch(err){
    console.error(err);
  }
    return {data:portfolio}
  }



  render(){

const { data } = this.props;

    return(
      <BaseLayout>
      <h2>Portfolio detail page</h2>

      <p>{data.title}</p>
      <p>{data.body}</p>


      </BaseLayout>
    )
  }
}


export default withRouter(Portfolio);
