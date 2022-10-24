import{Outlet,Link} from 'react-router-dom';
import {Fragment,useContext} from 'react';
import {ReactComponent as CrownImg} from '../../assets/crown.svg';
import './navigation.styles.scss';
import {UserContext} from '../../context/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';

const Navigation= ()=>{
  const {currentUser,setCurrentUser}=useContext(UserContext);

  const signOutHandler=async()=>{
    let res= await signOutUser();
    setCurrentUser(null);
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
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;