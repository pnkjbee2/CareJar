import Container from '@mui/material/Container';
import Page1 from "./pages/Page1"
import Page2 from './pages/Page2';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  

  return (
    <div>
      <Router>
      <Routes>
        
        <Route path="/" element={<Container maxWidth="md"> <Page1 /></Container>} />
        <Route path="/:type" element={<Container maxWidth="md"><Page2 /></Container>} />
        
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
