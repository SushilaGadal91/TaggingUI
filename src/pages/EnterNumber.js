import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Keypad from '../components/Keypad.js';
export default function EnterNumber(){
  const nav=useNavigate(); const {state}=useLocation(); const billType=state?.billType||'Mobile';
  const [value,setValue]=useState(''); const maxLen=billType==='Mobile'?10:12;
  const onKey=(k)=>{ if(k==='Clear') return setValue(''); if(k==='⌫') return setValue(v=>v.slice(0,-1)); if(/^\d$/.test(k)) setValue(v=>(v+k).slice(0,maxLen)); };
  const onSubmit=(e)=>{ e.preventDefault(); if(value.length<Math.min(6,maxLen)) return; alert(`Mock submit for ${billType}: ${value}`); };
  return(<div className="screen"><div className="page">
    <div className="toolbar"><button className="link" onClick={()=>nav(-1)}>← Back</button><div className="spacer"/><button className="link" onClick={()=>nav('/help')}>Exit</button></div>
    <h1 className="hero">Enter your {billType.toLowerCase()} number or account number.</h1>
    <form className="entry" onSubmit={onSubmit}>
      <label className="field"><span className="label">{billType} number or account number</span>
        <input type="text" inputMode="numeric" pattern="\d*" value={value} onChange={(e)=>setValue(e.target.value.replace(/\D/g,'').slice(0,maxLen))}/>
      </label>
      <Keypad onPress={onKey}/>
      <button type="submit" className="btn primary" disabled={value.length<Math.min(6,maxLen)}>Continue</button>
    </form></div></div>);
}