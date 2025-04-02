import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joshita Bhaviripudi</h1>
        <p>B.Tech CSE Student | Machine Learning Enthusiast | Full-Stack Developer</p>

        <section className="bio">
          <h2>About Me</h2>
          <p>
            Hi, I'm Joshita Bhaviripudi, a B.Tech Computer Science student at KL University, Hyderabad.
            I am passionate about software development, machine learning, and building innovative solutions.
          </p>
        </section>

        <section className="education">
          <h2>Education</h2>
          <ul>
            <li><strong>B.Tech in CSE</strong> - KL University, Hyderabad (Pursuing, CGPA: 9.55)</li>
            <li><strong>Class XII</strong> - Narayana Junior College (96%)</li>
            <li><strong>Class X</strong> - DAV School (80.08%)</li>
          </ul>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Programming: Java, Python, C</li>
            <li>Web Development: JavaScript, React, HTML</li>
            <li>Databases: SQL, MongoDB</li>
            <li>Machine Learning & Data Structures</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:joshitabhaviripudi@gmail.com">joshitabhaviripudi@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/joshita-bhaviripudi-544855289/" target="_blank" rel="noopener noreferrer">Joshita Bhaviripudi</a></p>
          <p>GitHub: <a href="https://github.com/Joshitab" target="_blank" rel="noopener noreferrer">Joshitab</a></p>
        </section>
      </header>
    </div>
  );
}

export default App;
