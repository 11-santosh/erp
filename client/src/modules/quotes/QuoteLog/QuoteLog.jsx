import { useState } from "react";
import Filters from "./components/Filters";
import QuoteList from "./components/QuoteList";

function QuoteLog() {
	return (
		<div className="min-h-screen bg-white flex flex-col">
			{/* Header section */}
			<header className="h-24 border-b flex items-center justify-center relative">
				<h1 className="text-[20px] font-bold">Quote Log</h1>

				<button className="absolute right-6 bg-[#0174d3] text-white px-6 py-2 rounded hover:opacity-50">
					Add
					<span className="ml-2">▼</span>
				</button>
			</header>

			<Filters />
			<QuoteList />
		</div>
	);
}

export default QuoteLog;
