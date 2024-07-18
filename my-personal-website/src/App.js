import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoursesTaken from './components/CoursesTaken';
function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <About />

                <Experience />
                <CoursesTaken />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
