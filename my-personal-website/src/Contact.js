import React from 'react';

function Contact() {
    return (
        <section id="contact" className="my-8">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>
                Email: <a href="mailto:zachkr05@gmail.com" className="text-blue-500 hover:underline">zachkr05@gmail.com</a>
            </p>
            <p>
                LinkedIn: <a href="https://www.linkedin.com/in/zachariah-risheq/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Zachariah Risheq</a>
            </p>
            <p>
                GitHub: <a href="https://github.com/zachkr05" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">zachkr05</a>
            </p>
        </section>
    );
}

export default Contact;
