import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/admin/adminPage.jsx';
import HomePage from './pages/home/homePage.jsx';
import Test from './components/test.jsx';
import Login from './pages/login/login.jsx';
import { Toaster } from 'react-hot-toast';



function App() {
  
  return (
    
    <BrowserRouter>
      <Toaster position='top-right'/>
      <Routes path = "*/"> 
      
        <Route path = "/testing" element = {<Test/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/admin/*" element = {<AdminPage/>} />
        <Route path = "/*" element = {<HomePage/>} /> 

      
      </Routes>
    
    </BrowserRouter>
    
    
  )
}

export default App
