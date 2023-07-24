import React from "react";

//include images into your bundle

import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<div className="container my-2">
			<Jumbotron/>
			<div className="row m-4">
				<div className="col-lg-3">
					<Card/>
				</div>
				<div className="col-lg-3">
					<Card/>
				</div>
				<div className="col-lg-3">
					<Card/>
				</div>
				<div className="col-lg-3">
					<Card/>
				</div>
				
				
			</div>
		</div>
		

		<div className="text-center text-white bg-dark p-5">
			Copyright@ Rachel Website 2023
		</div>
		</>
	);
};

export default Home;
