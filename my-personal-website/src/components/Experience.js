import React from 'react';

function Experience() {
    const experiences = [
        {
            title: 'Software Engineer Intern',
            company: 'Vanguard Law PLC',
            date: 'May 2022 - August 2022',
            description: [
                'Developed web applications using Python, JavaScript, HTML, CSS, and Tailwind.',
                'Collaborated with a team of engineers to design and implement new features.',
                'Performed code reviews and wrote unit tests to ensure code quality.'
            ]
        },
        {
            title: 'Robotics/Machine Learning Research Assistant',
            company: 'University of Virginia',
            date: 'May 2024 - Present',
            description: [
                'Worked on developing and testing autonomous robot systems.',
                'Utilized PyTorch, Python, Linux, and ROS for various machine learning projects.',
                'Contributed to technical documentation and research publications.'
            ]
        }
    ];

    return (
        <section id="experience" className="my-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-lg italic">{exp.company} | {exp.date}</p>
                    <ul className="list-disc list-inside text-lg leading-relaxed mt-2">
                        {exp.description.map((item, idx) => (
                            <li key={idx} className="mb-1">{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Experience;
