import React from 'react'
import { Link } from 'react-router-dom'

const Postfeed = ({id,profile,mode,name,subject,post}) => {
  return (
    <div>
        <article className='posts'>
            <img src={profile} height="100" width="100" alt="pic" loading='lazy'/>
            <h3 className={mode?"mode-online":"mode-offline"}>{mode?"online":"offline"}</h3>
            <h1 className='name'>{name}</h1>
            <h3 className='subject'>{subject}</h3>
            <p className='caption'>{post}</p>
            <div className='profilebutton'>
            <Link to={`/post/${id}`}><button className='profilepage'>Vist Profile</button></Link>
            </div>
        </article>
    </div>
  )
}

export default Postfeed