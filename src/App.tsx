import { useState } from "react";
import './App.css';
import Profile from "./components/Profile";
import Login from "./components/Login";

interface UserInterface {
  id: string;
  userName: string;
  email: string;
  password: string;
}

function App():JSX.Element {
  const [userName, setUserName] = useState("Barent");
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <div className="App">
      <Profile 
        userName={userName} 
        userAuthenticated={userAuthenticated} 
      />
      <Login/>
    </div>
  );
}

export default App;
