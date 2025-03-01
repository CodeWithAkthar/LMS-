// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import ModulePage from './pages/ModulePage';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
        <Route path="/module/video/:moduleId" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;