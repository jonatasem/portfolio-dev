import './Contact.css';

export default function Contact() {
    return (
        <section className="container-contact visible" id="contact">
            <h2 className="visible">Contato</h2>
            <form className="form-contact">
                <h3>Gostou do meu trabalho? Não hesite em fazer contato.</h3>
                <article className="form-group visible">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" required />
                </article>

                <article className="form-group visible">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required />
                </article>

                <article className="form-group visible">
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