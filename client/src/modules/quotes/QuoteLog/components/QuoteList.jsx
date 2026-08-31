import { useState } from "react";
import { listData } from "../ListData";

function QuoteList() {
	const [quotes, setQuotes] = useState(listData);
	const [page, setPage] = useState(1);

	return (
		<div className="flex-1 overflow-auto rounded-lg border border-gray-300 bg-white shadow m-4">
			<table>
				<thead className="bg-gray-100 text-left">
					<tr>
						<th className="px-3 py-2"></th>
						<th className="px-3 py-2">Status</th>
						<th className="px-3 py-2">Quote #</th>
						<th className="px-3 py-2">Opportunity Name</th>
						<th className="px-3 py-2">Type</th>
						<th className="px-3 py-2">Priority</th>
						<th className="px-3 py-2">Initiated By</th>
						<th className="px-3 py-2">Quote Due Date</th>
						<th className="px-3 py-2">Status Date</th>
						<th className="px-3 py-2">Customer</th>
						<th className="px-3 py-2">Buyer</th>
						<th className="px-3 py-2">Application</th>
						<th className="px-3 py-2">NBA</th>
						<th className="px-3 py-2">NBA Customer</th>
						<th className="px-3 py-2">Opportunity Status</th>
						<th className="px-3 py-2">Assigned To China</th>
					</tr>
				</thead>
				<tbody>
					{quotes.map((quote) => (
						<tr
							key={quote.id}
							onClick={() => onSelect(quote)}
							onDoubleClick={() => onQuoteDblClick(quote)}
							className="cursor-pointer border-b border-gray-300 hover:bg-gray-200"
						>
							<td className="px-3 py-2">
								<button
									className="text-blue-600 hover:text-blue-800"
									onClick={(e) => {
										e.stopPropagation();
										console.log("Info clicked", quote);
										navigate(`/quotes/${quote.id}`);
									}}
								>
									ℹ️
								</button>
							</td>

							<td className="px-3 py-2 min-w-30">{quote.status}</td>

							<td className="px-3 py-2 min-w-25">{quote.quoted_no}</td>

							<td className="px-3 py-2 min-w-65">{quote.opportunity_name}</td>

							<td className="px-3 py-2 min-w-30">{quote.quoted_type}</td>

							<td className="px-3 py-2">{quote.quoted_priority_display}</td>

							<td className="px-3 py-2 min-w-40">{quote.initiated_by_name}</td>

							<td className="px-3 py-2 min-w-40">{quote.quoted_due_date}</td>

							<td className="px-3 py-2 min-w-30">{quote.status_date}</td>

							<td className="px-3 py-2 min-w-30">{quote.customer_name}</td>

							<td className="px-3 py-2 min-w-50">{quote.buyer_name}</td>

							<td className="px-3 py-2">{quote.program_code}</td>

							<td className="px-3 py-2 text-center">
								{quote.is_nba ? "🏀" : ""}
							</td>

							<td className="px-3 py-2 min-w-50">{quote.nba_customer_name}</td>

							<td className="px-3 py-2 min-w-50">{quote.opportunity_status}</td>

							<td className="px-3 py-2 min-w-50 text-center">
								{quote.assigned_to_china ? "🇨🇳" : ""}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* Pagination */}
			<div className="flex items-center gap-5 p-1">
				<button
					onClick={() => setPage(page - 1)}
					disabled={page === 1}
					className="rounded bg-gray-200 px-4 py-2"
				>
					Previous
				</button>

				<span>Page {page}</span>

				<button
					onClick={() => setPage(page + 1)}
					className="rounded bg-gray-200 px-4 py-2"
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default QuoteList;
