import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TablePage from './pages/TablePage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
