import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

const menuItems = [
	{ name: "Quote Log", path: "/quote-log" },
	{ name: "Support", path: "/support" },
	{ name: "Re-Assign Programs", path: "/reassign-programs" },
	{ name: "Admin", path: "/admin" },
];

export default function Sidebar() {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/", { replace: true }); // redirect to login page
	};

	return (
		<aside className="w-55 bg-[#54698d] flex flex-col">
			<div className="p-4 border-b border-slate-500">
				<img src={logo} alt="logo" className="h-15" />
			</div>

			<nav className="flex-1 mt-4">
				{menuItems.map((item) => (
					<NavLink
						key={item.name}
						to={item.path}
						className={({ isActive }) =>
							`block px-5 py-4 cursor-pointer ${
								isActive
									? "bg-[#64799c] text-white font-semibold"
									: "text-gray-300 hover:bg-[#64799c]"
							}`
						}
					>
						{item.name}
					</NavLink>
				))}
			</nav>

			{/* bottom section */}
			<div className="p-4 border-t border-slate-500 text-white">
				<p className="font-semibold">Don Bowersox</p>
				<p className="text-sm text-gray-300">Sales admin</p>

				{/* logout button */}
				<button
					onClick={handleLogout}
					className="mt-4 flex items-center gap-2 text-red-200 hover:text-white"
				>
					{/* simple icon (you can replace with react-icons) */}⎋ Logout
				</button>
			</div>
		</aside>
	);
}
