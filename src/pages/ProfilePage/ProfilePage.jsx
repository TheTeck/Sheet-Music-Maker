import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PageHeader from '../../components/Header/Header';
import UserNav from '../../components/UserNav/UserNav';
import { Segment, Icon, Image, Header, Grid, Dimmer, Form, Button} from 'semantic-ui-react';
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';


export default function ProfilePage({ user, handleLogout, handleSignUpOrLogin }) {

  const [active, setActive] = useState(false)
  const [invalidForm, setValidForm] = useState(false)
  const [error, setError ] = useState('')
  const [selectedFile, setSelectedFile] = useState(user.photoUrl)
  const [state, setState]  = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    bio: user.bio
  });

  const history = useHistory()

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault();


    try {
      const output = await userService.update(state);
      handleSignUpOrLogin()

    } catch(err){
      console.log(err.message)
      setError(err.message)
    }

  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  function handleShow() {
      setActive(true)
  }

  function handleHide() {
      setActive(false)
  }

  const content = (<Button icon labelPosition='right'>
                        Choose New Image
                        <Icon name='file' />
                    </Button>)


    return (
        <div className="page-container">
            <PageHeader user={user} handleLogout={handleLogout} />
            <div className="body">
                <UserNav user={user} />
                <Segment padded="very">
                    <Grid columns={2}>
                        <Grid.Column textAlign='center'>
                            <Dimmer.Dimmable
                                as={Image}
                                dimmed={active}
                                dimmer={{ active, content }}
                                onMouseEnter={handleShow}
                                onMouseLeave={handleHide}
                                size='large'
                                src={`${user.photoUrl}`}
                            />
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                            <Grid.Row>
                                <Header size='huge'>{user.username.toUpperCase()}</Header>
                            </Grid.Row>
                            <Grid.Row>
                                <Form autoComplete="off"  onSubmit={handleSubmit}>
                                    <Segment stacked> 
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
                                        disabled={invalidForm}
                                        >
                                        Update Profile
                                    </Button>
                                    </Segment>
                                    {error ? <ErrorMessage error={error} /> : null}
                                </Form>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>

                    
                    
                </Segment>
            </div>
        </div>
    )
}