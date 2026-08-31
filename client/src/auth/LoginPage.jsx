import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(email);
		console.log(password);

		if (!email) {
			setError("Email is required");
			return;
		}
		if (!password) {
			setError("Password is required");
			return;
		}

		setError("");

		navigate("/quote-log", { replace: true });
	};

	return (
		<div className="bg-white h-screen flex items-center justify-center">
			<div className="bg-white w-md rounded-lg shadow-2xl p-5">
				<div className="text-center mb-4">
					<h1 className="font-bold text-4xl text-sky-600 mb-2">EMS 2</h1>
					<p className="text-gray-500 text-lg ">Enterprise Management System</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-2">
						<label htmlFor="email" className="block font-medium text-lg mb-2">
							Email id:
						</label>
						<input
							id="email"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							placeholder="Enter Email"
							className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-4 focus:ring-sky-300 focus:outline-none"
						></input>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block font-medium text-lg mb-2"
						>
							Password:
						</label>
						<div className="relative">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								placeholder="Enter Password"
								className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-4 focus:ring-sky-300 focus:outline-none"
							></input>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-5 top-3"
							>
								Show
							</button>
						</div>
					</div>

					{error && (
						<div className="bg-red-100 text-red-600 rounded-lg p-4 mb-4">
							{error}
						</div>
					)}

					<button
						type="submit"
						disabled={loading}
						className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50"
					>
						{loading ? "Signing In..." : "Sign In"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
