function Filters() {
	return (
		<div className="grid grid-cols-12 gap-1 p-4">
			{/* Quotes Section */}
			<div className="col-span-5">
				<h2 className="mb-2 font-bold text-blue-600">Quotes:</h2>

				<div className="grid grid-cols-2 gap-1">
					<input
						type="text"
						placeholder="Quote #"
						className="rounded border border-gray-300 px-3 py-2"
					/>

					<select className="rounded border border-gray-300 px-3 py-2">
						<option>All Status</option>
						<option>All Status</option>
						<option>All Status</option>
						<option>All Status</option>
						<option>All Status</option>
					</select>

					<select className="rounded border border-gray-300 px-3 py-2">
						<option>Initiated By</option>
						<option>Initiated By</option>
						<option>Initiated By</option>
						<option>Initiated By</option>
					</select>

					<select className="rounded border border-gray-300 px-3 py-2">
						<option>Customer Name</option>
						<option>Customer Name</option>
						<option>Customer Name</option>
						<option>Customer Name</option>
					</select>
				</div>
			</div>

			{/* Parts Section */}
			<div className="col-span-4">
				<h2 className="mb-2 font-bold text-blue-600">Parts:</h2>

				<div className="grid grid-cols-2 gap-1">
					<input
						type="text"
						placeholder="Drawing #"
						className="rounded border border-gray-300 px-3 py-2"
					/>
					<input
						type="text"
						placeholder="Cust Part #"
						className="rounded border border-gray-300 px-3 py-2"
					/>
					<input
						type="text"
						placeholder="Part Description"
						className="col-span-2 rounded border border-gray-300 px-3 py-2"
					/>
				</div>
			</div>

			<div className="col-span-2">
				{/* <h2 className="mb-2 font-bold text-blue-600">Actions:</h2> */}
				<div className="h-6 mb-2"></div>

				<div className="grid grid-cols-2 gap-1">
					<button className="rounded border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50">
						Search
					</button>
					<button className="text-sm text-blue-500 hover:underline">
						filter
					</button>
					<button className="text-sm text-blue-500 px-4 py-2 hover:underline">
						Clear All
					</button>
				</div>
			</div>
		</div>
	);
}

export default Filters
