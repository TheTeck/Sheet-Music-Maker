import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Form, Segment, Button, Grid} from 'semantic-ui-react';
import './NewOpusForm.css';

export default function NewOpusForm ({ user, handleAddOpus }) {

    const [error, setError ] = useState('')
    const [opus, setOpus] = useState({
        title: '',
        tempo: '120',
        timeBeat: '4',
        timeDuration: '4',
        key: 'C',
        accidental: 'natural',
        mode: 'major'
    });

    const beatOptions = [
        { key: '2', text: '2', value: '2' },
        { key: '3', text: '3', value: '3' },
        { key: '4', text: '4', value: '4' },
        { key: '6', text: '6', value: '6' },
        { key: '9', text: '9', value: '9' },
        { key: '12', text: '12', value: '12' }
    ]

    const durationOptions = [
        { key: '2', text: '2', value: '2' },
        { key: '4', text: '4', value: '4' },
        { key: '6', text: '6', value: '6' },
        { key: '8', text: '8', value: '8' },
        { key: '12', text: '12', value: '12' }
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
        console.log(e.target.name)
        setOpus({
          ...opus,
          [e.target.name]: e.target.value
        })
    }

    function handleBeatChange(e, {value}) {
        setOpus({
            ...opus,
            timeBeat: value
        })
    }

    function handleDurationChange(e, {value}) {
        setOpus({
            ...opus,
            timeDuration: value
        })
    }

    function handleKeyChange(e, {value}) {
        setOpus({
            ...opus,
            key: value
        })
    }

    function handleAccidentalChange(e, {value}) {
        setOpus({
            ...opus,
            accidental: value
        })
    }

    function handleModeChange(e, {value}) {
        setOpus({
            ...opus,
            mode: value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        const formattedOpus = {
            title: opus.title,
            composer: user.firstname + ' ' + user.lastname,
            tempo: opus.tempo,
            timeSignature: [opus.timeBeat, opus.timeDuration],
            keySignature: [opus.key, opus.accidental, opus.mode],
            music: "_m_m_m_m_s_m_m_m_m_s_m_m_m_m_s_m_m_m_m_s_m_m_m_m"
        };
        
        handleAddOpus(formattedOpus);
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
                            defaultValue='4'
                            onChange={handleBeatChange}
                            required
                        />
                        <Form.Select              
                            name="timeDuration"
                            defaultValue="4"
                            options={durationOptions}
                            onChange={handleDurationChange}
                            required
                        />
                    </Grid.Column>
                </Grid>
                <Form.Group style={{ marginTop: '30px' }} widths="equal">
                    <Form.Select     
                        label="Key"          
                        name="key"
                        defaultValue="C"
                        options={keyOptions}
                        onChange={handleKeyChange}
                        required
                    />
                    <Form.Select    
                        label="Accidental"
                        name="accidental"
                        defaultValue="natural"
                        options={accidentalOptions}
                        onChange={handleAccidentalChange}
                        required
                    />
                    <Form.Select   
                        label="Mode"
                        name="mode"
                        defaultValue="major"
                        options={modeOptions}
                        onChange={handleModeChange}
                        required
                    />
                </Form.Group>
                <Button type="submit" color="red">OK</Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
        </Form>
    )
}