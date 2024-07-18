import React from 'react';

function About() {
    return (
        <section id="about" className="my-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg leading-relaxed">
                Hello! I'm <span className="font-semibold">Zachariah Risheq</span>, a Machine Learning Engineer with experience in TensorFlow, PyTorch, NumPy, Pandas, Keras, and Scikit-learn.
                My passion lies at the intersection of machine learning, distributed systems, and robotics. I have self-studied machine learning by following
                <a href="https://atcold.github.io/NYU-DLSP21/en/week01/01/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Yann LeCun's freely available introduction to machine learning course</a>
                from NYU School of Data Science. I am currently applying to graduate school with hopes of pursuing a PhD in reinforcement learning.
            </p>
        </section>
    );
}

export default About;
