import React, { useState } from 'react';
import { sendEmail } from '../../api/axios';
import './Contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendEmail({ name, email, message });
            alert('E-mail enviado com sucesso!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            alert('Falha ao enviar o e-mail.');
        }
    };

    return (
        <section className="container-contact" id="contact">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit} className="form-contact">
                <h3>Gostou do meu trabalho? Não exite em fazer contato.</h3>
                <article className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </article>

                <article className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </article>

                <article className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </article>

                <button className="btn-contact" type="submit">
                    <span>Enviar</span>
                </button>
            </form>
        </section>
    );
}