import React , { useEffect } from "react";
import styled from "styled-components";
import { selectUserName , selectUserPhoto , setUserLogin , setSignOut } from '../features/user/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import { auth,provider } from '../firebase'
import { useHistory } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
          if(user){
            dispatch(setUserLogin({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL
        }))
        history.push('/')
          }
        })
    },[])

  const signIn = ()=>{
      auth.signInWithPopup(provider)
      .then((result)=>{
        let user = result.user;
          dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
          }))
          history.push('/')
      })
  }

  const signOut = ()=>{
        auth.signOut()
        .then(()=>{
          dispatch(setSignOut())
          history.push('/login');          
        })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      { !userName ? (
          <LoginContainer>
                <Login onClick={signIn}>Login</Login>
          </LoginContainer>
           ):
        <>
             <NavMenu>
                        
        <a>
          <Link to ="/">
          <img src="/images/home-icon.svg" />
          <span>HOME </span>
          </Link>
        </a>

        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH </span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg onClick={signOut} src = "https://avatars.githubusercontent.com/u/46294668?v=4"  />

        </>

      }
  
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-item: center;
  padding: 0px 36px;
  overflow-x:hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex:1;
  margin-left:25px;
  align-items:center;

  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor:pointer;
    color:white;
    text-decoration:none;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position:relative;

      &:after {
          content:"";
          height:2px;
          background:white;
          position:absolute;
          left:0px;
          right:0px;
          bottom:-6px;
          opacity:0;
          transform scaleX(0);
          transform-origin:left center;
          transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.9
            )0s;
      }
    }

    &:hover{
        span:after{
            transform scaleX(1);
            opacity:1;

        }
    }
  }
`;


const UserImg = styled.img`
    width:60px;
    height:60px;
    border-radius:50%;
    cursor:pointer; 
    margin-top:5px; 

`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius:4px;
    letter-spacing:4px;
    text-transform: uppercase;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    transition: all 0.2s ease 0s;
  
    &:hover{
      background-color:#f9f9f9;
      color:#000;
      border-color:transparent;
    }
`

const LoginContainer = styled.div`
    flex:1;
    height:40px;
    margin-top:15px;
    display:flex;
    justify-content:flex-end;
`