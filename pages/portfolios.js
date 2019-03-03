import React,{Component} from 'react';
import BaseLayout from '../components/BaseLayout';
import axios from 'axios';
import {Link} from '../routes';
class Portfolio extends React.Component{

   static async getInitialProps(){

       let posts = [];
       try{
       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
       posts = response.data;

     }catch(err){
       console.log(err);
     }
     return{posts:posts.splice(0,10)};
   }


renderPosts(postArug){
  return postArug.map(post => {
    return   <li key={post.id}>
            {post.title}
          {/*  <Link as={`/portfolio/${post.id}`} href={`/portfolio?id=${post.id}`}><a>Learn More</a></Link>*/}


          <Link route={`/portfolio/${post.id}`}>
          <a>Learn More</a>
          </Link>
    </li>
  })


}

  render(){


  const { posts } = this.props;
console.log(this.props.posts);

    return(
      <BaseLayout>
        <ul>

        {
          this.renderPosts(posts)
        }
        </ul>
      </BaseLayout>
    )
  }
}


export default Portfolio;
