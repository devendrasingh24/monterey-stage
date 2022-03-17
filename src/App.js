import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
import Div from "./components/Div";
import Footer from "./components/Footer";
import Card from './components/Card';



function App() {
  return (
  <>
  <div className="container" >
    <Router>
      <Sidebar />
      <Switch>
         <Route path='/home' exact component={Dashboard} />
        </Switch>
        
    </Router>
    </div>
    <div className='mt-2'>
    <Div/>
    </div>
    <div>
      <Card/>
    </div>
    <div className='mt-5' style={{margineTop:"10px"}}>
    <Footer/>
    </div>
    </>
  )
} 

export default App;
