import { useMessages } from "next-intl";
import { Link } from "../navigation";

const Footer = () => {
  const messages = useMessages();

  return (
    <footer>
      <div className="footer__container">
        <div className="footer__item">
          <Link href="/" className="footer__link">
            <span className="footer__para">{messages?.footer.Locations}</span>
          </Link>
        </div>
        <div className="footer__item">
          <Link href="/" className="footer__link">
            <span className="footer__para">{messages?.footer.Locations}</span>
          </Link>
        </div>
        <div className="footer__item">
          <Link href="/" className="footer__link">
            <span className="footer__para">{messages?.footer.Locations}</span>
          </Link>
        </div>
        <div className="footer__item">
          <Link href="/register" className="footer__link">
            <span className="footer__para">{messages?.footer.Locations}</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
