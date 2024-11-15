import { Routes, Route } from 'react-router-dom';
import './App.scss'
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App
