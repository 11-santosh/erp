import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Login from "./auth/LoginPage.jsx";
import QuoteLog from "./modules/quotes/QuoteLog/QuoteLog.jsx";
import Admin from "./modules/admin/Admin.jsx";
import MainLayout from "./layouts/MainLayout";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<MainLayout />}>
					<Route path="/quote-log" element={<QuoteLog />} />
					<Route path="/admin" element={<Admin />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
