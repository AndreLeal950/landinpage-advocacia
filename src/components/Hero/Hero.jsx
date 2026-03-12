import "./Hero.css";

function Hero() {
	return (
		<section className="hero">
			<div className="hero-overlay"></div>

			<div className="container hero-grid">
				<div className="hero-text">
					<h1>
						Defesa jurídica com
						<span> estratégia e confiança</span>
					</h1>

					<p>
						Atendimento jurídico especializado para proteger seus direitos com
						transparência e excelência.
					</p>

					<div className="hero-buttons">
						<button className="btn-primary">Agendar consulta</button>

						<button className="btn-secondary">Falar no WhatsApp</button>
					</div>
				</div>

				<div className="hero-img">
					<img src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
