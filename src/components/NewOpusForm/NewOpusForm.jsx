import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Form, Segment, Button, Grid, Divider} from 'semantic-ui-react';
import './NewOpusForm.css';

export default function NewOpusForm () {

    const [error, setError ] = useState('')
    const [opus, setOpus] = useState({
        title: '',
        tempo: 120,
        timeBeat: 4,
        timeDuration: 4,
        key: 'C',
        accidental: 'natural',
        mode: 'major'
    });

    const beatOptions = [
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '6', value: '6' },
        { text: '9', value: '9' },
        { text: '12', value: '12' }
    ]

    const durationOptions = [
        { text: '2', value: '2' },
        { text: '4', value: '4' },
        { text: '6', value: '6' },
        { text: '8', value: '8' },
        { text: '12', value: '12' }
    ]

    const keyOptions = [
        { text: 'A', value: 'A' },
        { text: 'B', value: 'B' },
        { text: 'C', value: 'C' },
        { text: 'D', value: 'D' },
        { text: 'E', value: 'E' },
        { text: 'F', value: 'F' },
        { text: 'G', value: 'G' }
    ]

    const accidentalOptions = [
        { text: '\u266e', value: 'natural' },
        { text: '\u266f', value: 'sharp' },
        { text: '\u266d', value: 'flat' }
    ]

    const modeOptions = [
        { text: 'Major', value: 'major' },
        { text: 'Minor', value: 'minor' }
    ]

    function handleChange(e){
        setOpus({
          ...opus,
          [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        console.log(opus)
        // e.preventDefault();
    
        // const formData = new FormData();
        // formData.append('photo', selectedFile);
    
        // for (let key in state){
        //   formData.append(key, state[key])
        // }
        // try {
        //   await userService.signup(formData);
        //   props.handleSignUpOrLogin()
    
        // } catch(err){
        //   console.log(err.message)
        //   setError(err.message)
        // }
    
      }

    return (
        <Form autoComplete="off"  onSubmit={handleSubmit}>
            <Segment padded="very">               
                <Form.Input        
                    label="Title"            
                    name="title"
                    placeholder="title"
                    value={opus.title}
                    onChange={handleChange}
                    required
                />
                <Grid columns={2}  style={{ marginTop: '20px' }}>
                    <Grid.Column verticalAlign="middle">
                        <Form.Input   
                            label="Tempo (bpm)"                 
                            name="tempo"
                            placeholder="tempo"
                            value={opus.tempo}
                            onChange={handleChange}
                            required
                        />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle">
                        <Form.Select   
                            label="Time Signature"           
                            name="timeBeat"
                            options={beatOptions}
                            placeholder='4'
                            required
                        />
                        <Form.Select              
                            name="timeDuration"
                            placeholder="4"
                            options={durationOptions}
                            required
                        />
                    </Grid.Column>
                </Grid>
                <Form.Group style={{ marginTop: '30px' }} widths="equal">
                    <Form.Select 
                          
                        label="Key"          
                        name="key"
                        placeholder="C"
                        options={keyOptions}
                        required
                    />
                    <Form.Select    
                        label="Accidental"
                        name="accidental"
                        placeholder={'\u266e'}
                        options={accidentalOptions}
                        required
                    />
                    <Form.Select   
                        label="Mode"
                        name="mode"
                        placeholder="Major"
                        options={modeOptions}
                        required
                    />
                </Form.Group>
                <Button type="submit" color="red">OK</Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
        </Form>
    )
}