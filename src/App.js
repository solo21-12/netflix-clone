
import {Route,Routes} from "react-router-dom"
import Main from "./components/main/Main";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/signIn";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>

    </Routes>
  );
}

export default App;
