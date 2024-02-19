import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Ingredients from "./Components/Ingredients";
import Instructions from "./Components/Instructions";
import Nutrition from "./Components/Nutrition";
import PreparationTime from "./Components/PreperationTime";
import Table from "./Components/Table";

function App() {
	return (
		<main>
			<img
				src="assets\images\image-omelette.jpeg"
				alt="A picture of an Omelette"
			/>
			<div className="recipe-page">
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
