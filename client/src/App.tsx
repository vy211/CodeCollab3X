// src/App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import ChatSection from './components/ChatSection';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomeLayout from './layouts/HomeLayout';

const HomePage: React.FC = () => {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="w-1/2 h-full p-2 bg-blue-200 border-r-2 border-black overflow-hidden">
        <CodeEditor />
      </div>
      <div className="w-1/2 h-full p-2 bg-blue-200 overflow-hidden">
        <ChatSection />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Layout with Header */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* No header for login/signup */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
