import React from "react";
import { Navbar } from "./navbar.js";
import { Body } from "./body.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid mb-3">
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
}
