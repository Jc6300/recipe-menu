import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroImg from "./Components/HeroImg";
import Ingredients from "./Components/Ingredients";
import Instructions from "./Components/Instructions";
import Nutrition from "./Components/Nutrition";
import PreparationTime from "./Components/PreperationTime";
import Table from "./Components/Table";

function App() {
	return (
		<main>
			<div className="recipe-page">
				<HeroImg />
				<Header />
				<Description />
				<PreparationTime />
				<Ingredients />
				<Instructions />
				<Nutrition />
				<Table />
				<Footer />
			</div>
		</main>
	);
}

export default App;
