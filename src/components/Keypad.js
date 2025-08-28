import React from 'react';
export default function Keypad({ onPress }){
  const keys=['1','2','3','4','5','6','7','8','9','Clear','0','⌫'];
  return (<div className="keypad">{keys.map(k=>(<button key={k} className="key" onClick={()=>onPress&&onPress(k)}>{k}</button>))}</div>);
}