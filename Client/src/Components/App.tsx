import './App.css';
import SideBar from './SideBar/SideBar'
import LogIn from './Login'
import DashBoard from "./DashBoard/DashBoard"

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    code ? <DashBoard code={code}></DashBoard> : <LogIn code={code}></LogIn>
  );
}

export default App;
    // <div className="App-centering">
    //   <div className='App'>
    //     <SideBar></SideBar>
    //   </div>
    // </div>