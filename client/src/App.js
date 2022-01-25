import './App.css';
import {Route , BrowserRouter , Redirect} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import 'antd/dist/antd.css';

function App() {
      return (
      <div className="App"> 
        <BrowserRouter>

            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <ProtectedRoute path='/' exact component={Home} />
            <ProtectedRoute path='/booking/:carid' exact component={BookingCar} />
            
        </BrowserRouter> 
    </div>)
}

export default App;


export function ProtectedRoute(props)
{
    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}
