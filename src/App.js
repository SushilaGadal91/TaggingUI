import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Help from './pages/Help.js';
import BillType from './pages/BillType.js';
import EnterNumber from './pages/EnterNumber.js';
export default function App(){return(<div className="app-shell">
  <Routes>
    <Route path="/" element={<Navigate to="/help" replace/>}/>
    <Route path="/help" element={<Help/>}/>
    <Route path="/bill-type" element={<BillType/>}/>
    <Route path="/enter-number" element={<EnterNumber/>}/>
  </Routes></div>);}