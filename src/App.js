import "./App.css";

import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import Hero from "./components/Hero/Hero";

function App() {
	return (
		<div className="App">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
		</div>
	);
}

export default App;
