import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navigation';
import AdInsights from './Components/AdInsights';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import CreateAd from './Components/CreateAd';
import CreateTM from './Components/CreateTM';
import MultiStepForm from './Components/Multistep';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/Components/AdInsights" element={<AdInsights/>}/>
          <Route path="/Components/CreateAd" element={<CreateAd/>}/>
          <Route path="/Components/CreateTM" element={<CreateTM/>}/>
          <Route path="/Components/Multistep" element={<MultiStepForm/>}/>
          <Route path="/Components/MultiStepForm" element={<MultiStepForm/>}/>
          
        </Routes><MultiStepForm/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
