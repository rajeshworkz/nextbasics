import React,{Component} from 'react';
import Link from 'next/link';
import BaseLayout from '../components/BaseLayout';
import axios from 'axios';
class Index extends Component{
  static async getInitialProps(){
    let posts = [];
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    posts = response.data;
  }catch(err){
    console.log(err);
  }
return{posts}
  }
  render(){
  //  debugger
    const { pData } = this.props;
    return(
      <BaseLayout>
        <p>Hello Next.js</p>
      </BaseLayout>
    )
  }
}



export default Index;
