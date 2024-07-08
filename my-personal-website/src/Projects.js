import React from 'react';

function Projects() {
    return (
        <section id="projects" className="my-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-4">
                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold">Project 1</h3>
                    <p>Description of project 1.</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold">Project 2</h3>
                    <p>Description of project 2.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
