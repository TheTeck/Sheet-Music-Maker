import React from 'react';
import './KeySignature.css';

export default function KeySignature ({ keySig }) {

    let output;

    // Standard Keys with sharps
    if ( (keySig[0] === 'C' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'A' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
        output = <></>
    } else if ( (keySig[0] === 'G' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'E' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
        output = <div className="signature">
                    <div className="sharp-1">♯</div>
                </div>
    } else if ( (keySig[0] === 'D' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'B' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
        output = <div className="signature">
                    <div className="sharp-1">♯</div>
                    <div className="sharp-2">♯</div>
                </div>
    } else if ( (keySig[0] === 'A' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'F' && keySig[1] === 'sharp' && keySig[2] === 'minor')) {
        output = <div className="signature">
                    <div className="sharp-1">♯</div>
                    <div className="sharp-2">♯</div>
                    <div className="sharp-3">♯</div>
                </div>
    } else if ( (keySig[0] === 'E' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'C' && keySig[1] === 'sharp' && keySig[2] === 'minor')) {
        output = <div className="signature">
                    <div className="sharp-1">♯</div>
                    <div className="sharp-2">♯</div>
                    <div className="sharp-3">♯</div>
                    <div className="sharp-4">♯</div>
                </div>
    } else if ( (keySig[0] === 'B' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'G' && keySig[1] === 'sharp' && keySig[2] === 'minor')) {
        output = <div className="signature">
                    <div className="sharp-1">♯</div>
                    <div className="sharp-2">♯</div>
                    <div className="sharp-3">♯</div>
                    <div className="sharp-4">♯</div>
                    <div className="sharp-5">♯</div>
                </div>
    } else if ( (keySig[0] === 'F' && keySig[1] === 'sharp' && keySig[2] === 'major') ||
        (keySig[0] === 'D' && keySig[1] === 'sharp' && keySig[2] === 'minor')) {
        output = <div className="signature">
                    <div className="sharp-1">♯</div>
                    <div className="sharp-2">♯</div>
                    <div className="sharp-3">♯</div>
                    <div className="sharp-4">♯</div>
                    <div className="sharp-5">♯</div>
                    <div className="sharp-6">♯</div>
                </div>
    } else if ( (keySig[0] === 'C' && keySig[1] === 'sharp' && keySig[2] === 'major') ||
        (keySig[0] === 'A' && keySig[1] === 'sharp' && keySig[2] === 'minor')) {
        output = <div className="signature">
                    <div className="sharp-1">♯</div>
                    <div className="sharp-2">♯</div>
                    <div className="sharp-3">♯</div>
                    <div className="sharp-4">♯</div>
                    <div className="sharp-5">♯</div>
                    <div className="sharp-6">♯</div>
                    <div className="sharp-7">♯</div>
                </div>
    } else if ( (keySig[0] === 'F' && keySig[1] === 'natural' && keySig[2] === 'major') ||
        (keySig[0] === 'D' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
            console.log('okay')
        output = <div className="signature">
                    <div className="flat-1">♭</div>
                </div>
    } else if ( (keySig[0] === 'B' && keySig[1] === 'flat' && keySig[2] === 'major') ||
        (keySig[0] === 'G' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
            console.log('okay')
        output = <div className="signature">
                    <div className="flat-1">♭</div>
                    <div className="flat-2">♭</div>
                </div>
    } else if ( (keySig[0] === 'E' && keySig[1] === 'flat' && keySig[2] === 'major') ||
        (keySig[0] === 'C' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
            console.log('okay')
        output = <div className="signature">
                    <div className="flat-1">♭</div>
                    <div className="flat-2">♭</div>
                    <div className="flat-3">♭</div>
                </div>
    } else if ( (keySig[0] === 'A' && keySig[1] === 'flat' && keySig[2] === 'major') ||
        (keySig[0] === 'F' && keySig[1] === 'natural' && keySig[2] === 'minor')) {
            console.log('okay')
        output = <div className="signature">
                    <div className="flat-1">♭</div>
                    <div className="flat-2">♭</div>
                    <div className="flat-3">♭</div>
                    <div className="flat-4">♭</div>
                </div>
    } else if ( (keySig[0] === 'D' && keySig[1] === 'flat' && keySig[2] === 'major') ||
        (keySig[0] === 'B' && keySig[1] === 'flat' && keySig[2] === 'minor')) {
            console.log('okay')
        output = <div className="signature">
                    <div className="flat-1">♭</div>
                    <div className="flat-2">♭</div>
                    <div className="flat-3">♭</div>
                    <div className="flat-4">♭</div>
                    <div className="flat-5">♭</div>
                </div>
    } else if ( (keySig[0] === 'G' && keySig[1] === 'flat' && keySig[2] === 'major') ||
        (keySig[0] === 'E' && keySig[1] === 'flat' && keySig[2] === 'minor')) {
            console.log('okay')
        output = <div className="signature">
                    <div className="flat-1">♭</div>
                    <div className="flat-2">♭</div>
                    <div className="flat-3">♭</div>
                    <div className="flat-4">♭</div>
                    <div className="flat-5">♭</div>
                    <div className="flat-6">♭</div>
                </div>
    } else if ( (keySig[0] === 'C' && keySig[1] === 'flat' && keySig[2] === 'major') ||
        (keySig[0] === 'A' && keySig[1] === 'flat' && keySig[2] === 'minor')) {
            console.log('okay')
        output = <div className="signature">
                    <div className="flat-1">♭</div>
                    <div className="flat-2">♭</div>
                    <div className="flat-3">♭</div>
                    <div className="flat-4">♭</div>
                    <div className="flat-5">♭</div>
                    <div className="flat-6">♭</div>
                    <div className="flat-7">♭</div>
                </div>
    }

    return (
        <>
            {output}
        </>
    )
}