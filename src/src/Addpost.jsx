import React from 'react'

const Addpost = ({ newProfile,setnewProfile,newName,setnewName,newSubject,setnewSubject,newPost,setnewPost,handleSubmit,handleDone,fileUpload}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Upload Post</h1>
            <label htmlFor='profile'>Upload your profile</label><br/><br/>
            <input id="profile" type="file" accept='image/*' onChange={fileUpload}/><br/><br/>
            <label htmlFor='name'>Name</label><br/><br/>
            <input id="name" placeholder='enter your name' value={newName} onChange={(e)=>setnewName(e.target.value)}/><br /><br />
            <label htmlFor='sub'>Subject</label><br/><br/>
            <input id="sub" placeholder='enter subject' value={newSubject} onChange={(e)=>setnewSubject(e.target.value)}/><br /><br />
            <label htmlFor='post'>Write your Post here</label><br /><br />
            <textarea id="post" type="text" rows="10" cols="50" value={newPost} onChange={(e)=>setnewPost(e.target.value)}></textarea><br /><br />
            <div className='btn'>
            <button type="submit" onClick={handleDone} >Submit</button></div>
        </form>
    </div>
  )
}

export default Addpost