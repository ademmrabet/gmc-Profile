import './App.css';
import data from './data';
import Profile from './Profile/Profile';

function App() {
  return (
    <div>
     <Profile data={data}/>
    </div>
  );
}

export default App;
