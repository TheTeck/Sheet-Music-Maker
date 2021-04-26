import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import { Divider, Segment, Image, Grid, Transition, Form, Button} from 'semantic-ui-react';
import userService from '../../utils/userService';
import './ProfilePage.css';


export default function ProfilePage({ user, handleLogout, handleSignUpOrLogin }) {

  const [visible, setVisible] = useState(false)
  const [error, setError ] = useState('')
  const [state, setState]  = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    bio: user.bio
  });

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await userService.update(state);
      handleSignUpOrLogin()
      setVisible(false)

    } catch(err){
      console.log(err.message)
      setError(err.message)
    }
  }

    function handleEditClick() {
        setVisible(true)
    }

    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Segment padded="very">
                    <Grid columns={2}>
                        <Grid.Column textAlign='center'>
                            <Image src={`${user.photoUrl}`} size='large' rounded/>
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                            <Divider horizontal>{user.username.toUpperCase()}</Divider>
                            <p>Composer: <strong>{user.firstname} {user.lastname}</strong></p>
                            <Divider horizontal>My Bio:</Divider>
                            <p><strong>{user.bio ? user.bio : 'There is no bio, yet.'}</strong></p>
                            <Button onClick={handleEditClick}>Edit Profile</Button>
                        </Grid.Column>
                    </Grid>
                </Segment>

                <Transition visible={visible} animation='fly left' duration={500}>
                    <Segment>
                        <Form autoComplete="off"  onSubmit={handleSubmit}>
                            <Segment className="profile-edit" stacked> 
                                <Form.Input                    
                                name="firstname"
                                placeholder="first name"
                                value={state.firstname}
                                onChange={handleChange}
                                required
                                />
                                <Form.Input                    
                                name="lastname"
                                placeholder="last name"
                                value={state.lastname}
                                onChange={handleChange}
                                required
                                />
                                <Form.TextArea                
                                name="bio"
                                placeholder={user.bio ? user.bio : "bio"}
                                value={state.bio}
                                onChange={handleChange}
                                />
                                <Button
                                type="submit"
                                className="btn"
                                >
                                Update Profile
                                </Button>
                            </Segment>
                            {error ? <ErrorMessage error={error} /> : null}
                        </Form>
                    </Segment>
                </Transition>
                    
                
            </div>
        </div>
    )
}