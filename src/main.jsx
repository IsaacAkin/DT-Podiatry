import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Treatments from './components/Treatments.jsx';
import NailSurgery from './components/NailSurgery.jsx';
import Orthotics from './components/Orthotics.jsx';
import Biomechanics from './components/Biomechanics.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

        <Route path='treatments'>
          <Route index element={<Treatments />} />
          <Route path='nail-surgery' element={<NailSurgery />} />
          <Route path='orthotics' element={<Orthotics />} />
          <Route path='biomechanics' element={<Biomechanics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
