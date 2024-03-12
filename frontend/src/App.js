import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Transcation from './Pages/Tanscation';
import AddTranscation from './Pages/AddTranscation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Transcation/>}/>
      <Route path='/add-transcation/' element={<AddTranscation/>}/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
