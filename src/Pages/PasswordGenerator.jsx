import React, { useState } from 'react'
import './PasswordGenerator.css'
import { LC, NUM, SC, UC } from '../Data/passChar';
export default function PasswordGenerator() {
    let [upperCase,setUpperCase] = useState(false);
    let [lowerCase,setLowerCase] = useState(false);
    let [numCase,setNumCase] = useState(false);
    let [specialCase,setSpecialCase] = useState(false);
    let [passwordlen, setPasswordlen ] = useState(6);
    let [finalPass, setFinalPass] = useState('');

    let createPassword=()=>{
        let charSet = ''
        let finalPassword = ''
      if(upperCase || lowerCase || numCase || specialCase){
        if(upperCase) charSet+=UC;
        if(lowerCase) charSet+=LC;
        if(numCase) charSet+=NUM;
        if(specialCase) charSet+=SC;
        for (let index = 0; index < passwordlen; index++) {
          finalPassword +=  charSet.charAt(Math.floor(Math.random()*charSet.length))
          setFinalPass(finalPassword)
        }
      }else{
        alert("please checked any one checkbox");
      }
    }

    let copyPass = ()=> {
        navigator.clipboard.writeText(finalPass)
    }

    return (
        <div className="password-generator">
        <h1>Password Generator</h1>
        <div className="password-display">
          <input
            type="text"
            readOnly
            className="password-input"
            value={finalPass}
          />
          <button className="copy-button" onClick={copyPass}>Copy</button>
        </div>
        <div className="length-input">
          <label htmlFor="length">Password Length</label>
          <input
            type="number"
            id="length"
            name="length"
            value={passwordlen}
            className="length-control"
            min="1"
            max="20"
            onChange={(event)=>setPasswordlen(event.target.value)}
          />
        </div>
        <div className="options">
          <label>
            <input
              type="checkbox"
              name="includeUppercase"
              checked={upperCase}
              onChange={()=> setUpperCase(!upperCase)}
            />
            Include Uppercase
          </label>
          <label>
            <input
              type="checkbox"
              name="includeLowercase"
              checked={lowerCase}
              onChange={()=> setLowerCase(!lowerCase)}
            />
            Include Lowercase
          </label>
          <label>
            <input
              type="checkbox"
              name="includeNumbers"
              checked={numCase}
              onChange={()=> setNumCase(!numCase)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              name="includeSpecialChars"
              checked={specialCase}
              onChange={()=> setSpecialCase(!specialCase)}
            />
            Include Special Characters
          </label>
        </div>
        <button className="generate-button" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    )
}
