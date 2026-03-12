import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="footer ">
			<div className="footer-grid">
				<div>
					<h3 className="footer-title">Dra. Mariana Silva</h3>
					<p>Advocacia especializada</p>
				</div>

				<div>
					<p>OAB: 000000</p>
					<p>Endereço do escritório</p>
				</div>

				<div className="footer-social">
					<FaWhatsapp style={{ fontSize: "40px" }} />
					<FaInstagram style={{ fontSize: "40px" }} />
				</div>
			</div>

			<p className="footer-copy">© 2026 Todos os direitos reservados</p>
		</footer>
	);
}
