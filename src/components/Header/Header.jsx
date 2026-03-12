import "./Header.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="header">
			<div className="header-container">
				<h2 className="logo">Dra. Mariana Silva</h2>

				<nav className={`nav ${menuOpen ? "active" : ""}`}>
					<a href="#sobre">Sobre</a>
					<a href="#servicos">Serviços</a>
					<a href="#depoimentos">Depoimentos</a>
					<a href="#contato">Contato</a>
				</nav>

				<button className="cta-header">Fale com especialista</button>

				<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</div>
			</div>
		</header>
	);
}

export default Header;
