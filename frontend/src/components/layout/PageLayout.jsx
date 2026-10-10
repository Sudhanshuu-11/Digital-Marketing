import React from "react";
import logoImage from "../../assets/icon.png";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function PageLayout({ children }) {
  return (
    <div className="route-site">
      <header className="route-nav">
        <a className="route-brand" href="/" data-nav aria-label="Purple Octopus home">
          <img className="logo-image" src={logoImage} alt="" />
          <span className="logo-name"><strong>PURPLE</strong><strong>OCTOPUS</strong></span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map(([label, path]) => <a href={path} data-nav key={path}>{label}</a>)}
        </nav>
      </header>
      <main className="route-content">{children}</main>
      <footer className="route-footer"><span>PURPLE OCTOPUS</span><span>Digital marketing / Brand / Experience</span></footer>
    </div>
  );
}
