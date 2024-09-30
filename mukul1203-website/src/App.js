import React, { useState, useEffect } from 'react';
import Bio from './components/Bio';
import RepoCard from './components/RepoCard';
import "./App.css"

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/mukul1203/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app">
      <Bio />
      <h2>My Open-Source Projects</h2>
      <div className="repo-list">
        {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

export default App;
