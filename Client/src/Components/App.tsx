import './App.css';

import LogIn from './Login'
import DashBoard from "./DashBoard/DashBoard"

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div className="App-centering">
      <div className='App'>
        {code ? <DashBoard code={code}></DashBoard> : <LogIn code={code}></LogIn>}
      </div>
    </div>
  );
}

export default App;