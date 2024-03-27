import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="min-h-full">
     
      <Header />
      

      <div className="py-10">
      
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
           
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
 