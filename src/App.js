import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Servicos/Services";
import Benefits from "./components/Benefits/Benefits";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

import "./global.css";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Services />
			<Benefits />
			<Testimonials />
			<CTA />
			<Footer />
			<WhatsAppFloat />
		</>
	);
}

export default App;
