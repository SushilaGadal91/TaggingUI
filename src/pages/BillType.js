import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function BillType(){
  const nav=useNavigate();
  const pick=(type)=>nav('/enter-number',{state:{billType:type}});
  return(<div className="screen"><div className="page">
    <div className="toolbar"><button className="link" onClick={()=>nav(-1)}>← Back</button><div className="spacer"/><button className="link" onClick={()=>nav('/help')}>Exit</button></div>
    <h1 className="hero">What type of bill do you want to pay?</h1>
    <div className="grid-2 compact">
      <div className="tile big" onClick={()=>pick('Mobile')}><span>Mobile</span></div>
      <div className="tile big" onClick={()=>pick('Home Internet')}><span>Home Internet</span></div>
    </div></div></div>);
}