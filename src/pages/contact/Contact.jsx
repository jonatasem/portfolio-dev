import './Contact.css';

export default function Contact() {
    return (
        <section className="container-contact" id="contact">
            <h2>Contato</h2>
            <form className="form-contact">
                <h3>Gostou do meu trabalho? Não exite em fazer contato.</h3>
                <article className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" required />
                </article>

                <article className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required />
                </article>

                <article className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </article>

                <button className="btn-contact" type="submit">
                    <span>Enviar</span>
                </button>
            </form>
        </section>
    );
}