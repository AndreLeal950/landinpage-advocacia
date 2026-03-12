import "./Benefits.css";
import { FaCheckCircle } from "react-icons/fa";

function Benefits() {
	return (
		<section className="benefits">
			<div className="container">
				<h2 className="section-title">Diferenciais do Escritório</h2>

				<div className="benefits-grid">
					<div className="benefit-card">
						<FaCheckCircle />
						<h3>Atendimento humanizado</h3>
						<p>Tratamos cada caso com atenção e dedicação.</p>
					</div>

					<div className="benefit-card">
						<FaCheckCircle />
						<h3>Alta taxa de sucesso</h3>
						<p>Estratégias jurídicas eficazes.</p>
					</div>

					<div className="benefit-card">
						<FaCheckCircle />
						<h3>Agilidade no atendimento</h3>
						<p>Respostas rápidas e acompanhamento constante.</p>
					</div>

					<div className="benefit-card">
						<FaCheckCircle />
						<h3>Transparência</h3>
						<p>Informações claras durante todo o processo.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Benefits;
