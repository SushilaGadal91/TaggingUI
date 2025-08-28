import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Help(){
  const nav=useNavigate();
  return(<div className="screen"><div className="page">
    <div className="toolbar"><div className="pill">Today ▾</div><div className="spacer"/><a className="link ghost" href="#">Español</a><a className="link ghost" href="#">Reviews</a></div>
    <h1 className="hero red">How can we help you today?</h1>
    <div className="grid-2">
      <div className="card action" onClick={()=>nav('/bill-type')}><h3>Pay your bill</h3><p>Make a one-time payment toward your mobile or home internet bill.</p><div className="chev">→</div></div>
      <div className="card"><h3>Complete your order</h3><p>Access your order to proceed with payment.</p><div className="chev">→</div></div>
      <div className="card"><h3>Scan &amp; Go</h3><p>Scan the barcode to complete your accessory purchase.</p><div className="chev">→</div></div>
      <div className="card ghost"><h3>More options</h3><p>Coming soon.</p></div>
    </div></div></div>);
}