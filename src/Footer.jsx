import { NavLink } from "react-router";
import './Footer.css'

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
          {footerLinks.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className="footer-link">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <p className="footer-copy">&copy; {year} Your Company. All rights reserved.</p>
    </footer>
  );
}