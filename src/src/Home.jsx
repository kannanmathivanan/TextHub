import React from 'react';
import Postfeed from './Postfeed';

const Home = ({posts,search}) => {
    const filteredPosts = posts.filter((post)=>(
        (post.name).toLowerCase().includes(search.toLowerCase())
    ))

  return (
     <div>
      {filteredPosts.map((post)=>(
        <Postfeed key={post.id} id={post.id} profile={post.profile} mode={post.mode}name={post.name} subject={post.subject}  post={post.post} 
        />))} 
     </div>
  )
}

export default Home