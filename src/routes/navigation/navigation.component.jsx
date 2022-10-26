import{Outlet,Link} from 'react-router-dom';
import {Fragment,useContext} from 'react';
import {ReactComponent as CrownImg} from '../../assets/crown.svg';
import './navigation.styles.scss';
import {UserContext} from '../../context/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import {ShopCart} from '../../components/shopping-cart-logo/shopping-cart';
import {CartDropdown} from '../../components/cart-dropdown/cart-dropdown';
import {CartDropDownContext} from '../../context/cart-dropdown.context';

const Navigation= ()=>{
  const {currentUser,setCurrentUser}=useContext(UserContext);
  const {isCartOpen,setIsCartOpen}=useContext(CartDropDownContext);

  const signOutHandler=async()=>{
    let res= await signOutUser();
  }

    return(
      <Fragment>
        <div className='navigations'>
            <Link className='logo-container' to='/'> <CrownImg className='logo'/> </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>Shop</Link>
                {currentUser ? 
                (<span className='nav-link' onClick={signOutHandler}>Sign Out</span>)
                : (<Link className='nav-link' to='/sign-in'>Sign In</Link>)
                }
                <ShopCart/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;