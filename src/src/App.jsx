import './App.css';
import Header from './Header';
import { useState } from 'react';
import Addpost from './Addpost';
import Home from './Home';
import About from './About';
import Searchpost from './Searchpost';
import { Routes,Route, useNavigate} from 'react-router-dom';
import Profilepage from './Profilepage';


function App() {

const[posts,setPosts]=useState([ {
    id:1,
    profile:"my photo2.jpg",
    mode:true,
    name:"Kannan",
    subject:"Motivational Qutoes",
    post:"Dream big and work hard.Every step forward takes you closer to your goal.Mistakes are lessons in disguise—embrace them.Believe in yourself and your journey.Success is yours if you never give up!",
},
{
  id:2,
  profile:"vinoth1.jpg",
  mode:false,
  name:"VinothKumar",
  subject:"Hiring!!!",
  post:"Are you passionate about building exceptional websites and creating seamless user experiences? Join our dynamic team as a Web Developer! We’re looking for a creative and detail-oriented professional who thrives in a fast-paced environment and enjoys bringing innovative ideas to life.",
},
{
  id:3,
  profile:"sankar.jpg",
  mode:false,
  name:"Sankar",
  subject:"Good Morning Whishes",
  post:"Good morning! Start your day with a smile and a heart full of gratitude Each sunrise is a chance to begin again.Make today beautiful and bright.Have a wonderful day ahead!"
},
{
  id:4,
  profile:"aravinth.jpg",
  mode:true,
  name:"Aravinth",
  subject:"Love Qutoes",
  post:"Love is not about how many days, months, or years you’ve been together.It’s about how much you love each other every single day.You are my sunshine on cloudy days.With you, every moment feels magical.",
},
{
  id:5,
  profile:"siva.jpg",
  mode:false,
  name:"Siva",
  subject:"Love Qutoes",
  post:"In your arms, Ive found my forever home.Your love is the melody my heart dances to.No matter what life throws our way, I’m with you always.Together, we are unbreakable.I love you morethan words can say",
  
},
{
  id:6,
  profile:"sanjai.jpg",
  mode:true,
  name:"Sanjai",
  subject:"Thalapathy",
  post:"Vijay isnt just a name; its an emotion for millions of fans who see him as a symbol of hard work and perseverance",
},])
const [search,setSearch] = useState('');
const [newProfile,setnewProfile]=useState('');
const [newName,setnewName]=useState('');
const [newSubject,setnewSubject]=useState('');
const [newPost,setnewPost]=useState('');
const navigate =  useNavigate();



const handleSubmit = async (e)=>{
    e.preventDefault();
    const id = posts.length?posts[posts.length-1].id+1:1;
    const addPosts = {id,mode:true,profile:newProfile, name:newName, subject:newSubject , post:newPost };
    const allPosts = [...posts,addPosts];
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


