import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll al inicio cuando se selecciona un proyecto
  useEffect(() => {
    if (selectedProject) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onLogoClick={handleClosProject}
      />
      
      {selectedProject ? (
        <ProjectDetail 
          project={selectedProject} 
          onClose={handleClosProject} 
        />
      ) : (
        <Home onProjectClick={handleProjectClick} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
