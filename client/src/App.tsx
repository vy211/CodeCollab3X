import { useState } from 'react'
import './App.css'
import CodeEditor from './components/CodeEditor'
import ChatSection from './components/ChatSection';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="w-1/2 h-full p-2 bg-blue-200 border-r-2 border-black">
        <CodeEditor />
      </div>
      <div className="w-1/2 h-full p-2 bg-blue-200">
        <ChatSection />
      </div>
    </div>
  )
}

export default App
