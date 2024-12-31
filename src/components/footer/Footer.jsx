import "./Footer.css";

const Footer = ({ name = "Jonatas Elieser Moreira" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-footer" role="contentinfo">
      <p>
        <a href="https://www.linkedin.com/in/jonatas-elieser-moreira-948632270/">
          {name}
        </a>{" "}
        © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
