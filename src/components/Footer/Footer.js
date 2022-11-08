export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="footer">
        <p className="footer__text">{year}</p>
      </footer>
    );
  }