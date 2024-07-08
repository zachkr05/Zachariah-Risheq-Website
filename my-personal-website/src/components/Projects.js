import React from 'react';
import FloatingText from './FloatingText';

const techStack = ['PyTorch'];

function Projects() {
    return (
        <section id="projects" className="my-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
            <div className="space-y-8">
                <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg flex items-center space-x-6 transform transition duration-500 hover:scale-105">
                    <div className="flex-1 text-white">
                        <h3 className="text-2xl font-semibold">
                            <a href="http://link-to-asd-proj.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                ASD Proj
                            </a>
                        </h3>
                        <p className="mt-2">Description of project 1.</p>
                    </div>
                    <div className="w-1/3 h-48">
                        <FloatingText techStack={techStack} />
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-lg flex items-center space-x-6 transform transition duration-500 hover:scale-105">
                    <div className="flex-1 text-white">
                        <h3 className="text-2xl font-semibold">
                            <a href="http://link-to-autonomous-robots.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Autonomous Robots
                            </a>
                        </h3>
                        <p className="mt-2">Description of project 2.</p>
                    </div>
                    <div className="w-1/3 h-48">
                        <FloatingText techStack={techStack} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
