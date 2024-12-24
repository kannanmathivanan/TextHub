import React from 'react'
import { useParams } from 'react-router-dom'

const Profilepage = ({posts,newprofile}) => {

    const {id} = useParams();
    const post = posts.find((post)=>(post.id).toString()===id)

  return (
    <div>
      <article className='profile-container'> 
        <img src={`/${post.profile}`} height="100" width="100" alt="pic"  onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/100";
            }}
        />
        <h1 className='username' style={{marginLeft:"3.5rem"}}>{post.name}</h1>
        <div className='follow'>
        <h2 >&nbsp;300 <br /> followers
        </h2>
        <h2 >&nbsp;300 <br /> following
        </h2>
        </div>
        <div className='buttons'>
        <button>Message</button><button>Follow</button>
      </div>
      </article>
      
        {post ? (
        <>
           <h1 style={{textAlign:"center"}}>Posts</h1>
        <article>
          <img src={`/${post.profile}`} height="100" width="100" alt="pic"  onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/100";
            }}
          />
          <h1 className='name' style={{marginTop:"2rem"}}>{post.name}</h1>
          <h3 className='subject'>{post.subject}</h3>
          <p className='caption'>{post.post}</p>
        </article>    
        </>
      ) : (
        <p>Post not found</p>
      )}
   </div>
  )
}

export default Profilepage
