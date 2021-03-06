import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import OpusIndexPage from '../OpusIndexPage/OpusIndexPage';
import FriendsPage from '../Friends/Friends';
import OpusEdit from '../OpusEdit/OpusEdit';
import userService from '../../utils/userService';


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    console.log('handleLogout reached')
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
                <Route exact path="/">
                    <HomePage handleLogout={handleLogout} user={user} />
                </Route>
                <Route path="/compose">
                    <OpusEdit handleLogout={handleLogout} user={user} />
                </Route>
                <Route path="/opera">
                    <OpusIndexPage handleLogout={handleLogout} user={user} />
                </Route>
                <Route path="/following">
                    <FriendsPage handleLogout={handleLogout} user={user} handleSignUpOrLogin={handleSignUpOrLogin} />
                </Route>
                <Route path="/:username">
                    <ProfilePage handleLogout={handleLogout} handleSignUpOrLogin={handleSignUpOrLogin} user={user} />
                </Route>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;
