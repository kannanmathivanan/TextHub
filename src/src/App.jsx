import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import Addpost from './Addpost';
import Home from './Home';
import About from './About';
import Searchpost from './Searchpost';
import { Routes,Route, useNavigate} from 'react-router-dom';
import api from './api/posts';
import Profilepage from './Profilepage';


function App() {

const[posts,setPosts]=useState([])
const [search,setSearch] = useState('');
const [newProfile,setnewProfile]=useState('');
const [newName,setnewName]=useState('');
const [newSubject,setnewSubject]=useState('');
const [newPost,setnewPost]=useState('');
const navigate =  useNavigate();

useEffect( ()=>{
  const fetchPosts = async ()=>{
     const response = await api.get('/posts');
     setPosts(response.data)
  }
  fetchPosts();
},[])

const handleSubmit = async (e)=>{
    e.preventDefault();
    const id = posts.length?posts[posts.length-1].id+1:1;
    const addPosts = {id,mode:true,profile:newProfile, name:newName, subject:newSubject , post:newPost };
    const response = await api.post('/posts',addPosts);
    const allPosts = [...posts,response.data];
    setPosts(allPosts);
    setnewProfile("");
    setnewName("");
    setnewSubject("");
    setnewPost("");
  }

  const fileUpload = (e)=>{
    const file = e.target.files[0];
    if(file){
      const fileURL = URL.createObjectURL(file);
      setnewProfile(fileURL);
    }
  }

  const handleDone = ()=>{
   alert(`Post Added!!!`);
   navigate("/");
   }

return (
    <div className="App">
       <Header />
       <Routes>
        <Route
        path="/"
        element={
          <>
            <Searchpost search={search} setSearch={setSearch} />
            <Home posts={posts} search={search} />
          </>
         }
        />
        <Route path="/addpost"element={<Addpost  newProfile={newProfile} setnewProfile={setnewProfile} newName={newName} setnewName={setnewName} newSubject={newSubject} setnewSubject={setnewSubject} newPost={newPost} setnewPost={setnewPost} handleSubmit={handleSubmit} handleDone={handleDone} fileUpload={fileUpload}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/post/:id" element={<Profilepage posts={posts} newProfile={newProfile} />} />
      </Routes> 
    </div>
  );
}

export default App;


