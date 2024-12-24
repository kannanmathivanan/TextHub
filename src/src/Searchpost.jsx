import React from 'react'

const Searchpost = ({search,setSearch}) => {
  return (
    <div>
        <label htmlFor='search' className="search">Search</label><br /><br />
        <div className='input'>
        <input id='search' type='text' placeholder='Search User' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    </div>
  )
}

export default Searchpost