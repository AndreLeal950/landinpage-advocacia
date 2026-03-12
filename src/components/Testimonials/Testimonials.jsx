import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
	{
		name: "Carlos Mendes",
		text: "Profissional extremamente competente.",
	},
	{
		name: "Ana Oliveira",
		text: "Atendimento humanizado e muito eficiente.",
	},
	{
		name: "Ricardo Lima",
		text: "Resolvi meu caso com rapidez e clareza.",
	},
];

export default function Testimonials() {
	const [index, setIndex] = useState(0);

	function next() {
		setIndex((index + 1) % testimonials.length);
	}

	return (
		<section className="testimonials">
			<div className="container testimonials-container">
				<h2 className="section-title">Depoimentos</h2>

				<div className="testimonial-card">
					<p className="testimonial-text">"{testimonials[index].text}"</p>

					<strong className="testimonial-name">
						{testimonials[index].name}
					</strong>
				</div>

				<button onClick={next} className="testimonial-button">
					Ver próximo
				</button>
			</div>
		</section>
	);
}
