import Home from './pages/Home'
import Driver from './pages/Driver'
import Business from './pages/Business'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HealthInsurance from './pages/HealthInsurance';
import AutoService from './pages/AutoService';
import CNG from './pages/CNG';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ScrollToTop from './utils/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndCondition from './pages/TermsAndCondition';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/drivers' element={<Driver/>}/>
            <Route path='/business' element={<Business/>}/>
            <Route path='/health-insurance' element={<HealthInsurance/>}/>
            <Route path='/auto-services' element={<AutoService/>}/>
            <Route path='/cng-conversion' element={<CNG/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
