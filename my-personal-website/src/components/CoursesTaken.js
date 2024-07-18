import React from 'react';

function CoursesTaken() {
    const courses = [
        'Data Structures & Analysis of Algorithms I & II',
        'Software Development Engineering',
        'Advanced Software Engineering',
        'Cloud Computing',
        'Machine Learning',
        'Artificial Intelligence',
        'Distributed Systems',
        'Robotics',
        'Reinforcement Learning',
        'Deep Learning'
    ];

    return (
        <section id="courses" className="my-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Courses Taken</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed">
                {courses.map((course, index) => (
                    <li key={index} className="mb-2">{course}</li>
                ))}
            </ul>
        </section>
    );
}

export default CoursesTaken;
