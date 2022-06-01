
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './pages/Home'
import AddEdit from './pages/AddEdit';
import Login from './pages/Login';
import View from './pages/View';
function App() {
  return (
    <Router> 
      <div className="App">
        <ToastContainer position="top-center"/>
          <h1 className="text-center my-4 head">React crud App</h1>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Add-Edit-Employee" element={<AddEdit/>}/>
            <Route path="/Edit-Employee/:id" element={<AddEdit/>}/>
            <Route path="/view/:id" element={<View/>}/>
          </Routes>
      </div>
      </Router>
  );
}

export default App;
