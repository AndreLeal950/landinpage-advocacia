import "./About.css";

function About() {
	return (
		<section id="sobre" className="about">
			<div className="container about-grid">
				<div className="about-img">
					<img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" />
				</div>

				<div className="about-text">
					<h2>Sobre a Advogada</h2>

					<p>
						Dra. Mariana Silva atua há mais de 10 anos na defesa dos direitos de
						seus clientes, oferecendo atendimento humanizado e soluções
						jurídicas estratégicas.
					</p>

					<div className="about-stats">
						<div>
							<h3>10+</h3>
							<p>Anos de experiência</p>
						</div>

						<div>
							<h3>500+</h3>
							<p>Clientes atendidos</p>
						</div>

						<div>
							<h3>95%</h3>
							<p>Casos resolvidos</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
