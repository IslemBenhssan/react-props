import './App.css';
import Profile from './profile/Profile';
import imgprofile from './img.jpg';
function App() {
  const Data ={
  fullName:"foulen ben foulen",
  bio:'......',
  profession:'engenieer',
  }
  



  return (
    <div className="App">
      <Profile data={Data}>
        <img src={imgprofile} alt=''/> 
    </Profile>

      
      
    </div>
  );
}

export default App;
