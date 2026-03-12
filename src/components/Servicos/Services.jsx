import "./Services.css";
import {
	FaBalanceScale,
	FaBriefcase,
	FaUsers,
	FaFileAlt,
} from "react-icons/fa";

function Services() {
	return (
		<section id="servicos">
			<div className="container">
				<h2 className="section-title">Áreas de atuação</h2>

				<div className="services-grid">
					<div className="service-card">
						<FaUsers />
						<h3>Direito de Família</h3>
						<p>Divórcios, pensões e guarda.</p>
					</div>

					<div className="service-card">
						<FaBriefcase />
						<h3>Direito Trabalhista</h3>
						<p>Defesa de direitos trabalhistas.</p>
					</div>

					<div className="service-card">
						<FaFileAlt />
						<h3>Direito Previdenciário</h3>
						<p>Benefícios e aposentadoria.</p>
					</div>

					<div className="service-card">
						<FaBalanceScale />
						<h3>Consultoria Jurídica</h3>
						<p>Orientação preventiva.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
