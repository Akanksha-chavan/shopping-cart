import{Routes,Route} from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-In/sign-in.component'
import Shop from './routes/shop/shop-Component';
import CheckoutPage from './routes/checkout/checkoutPage';

function App() { 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop/*' element={<Shop/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
