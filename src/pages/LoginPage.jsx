import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@mail.com" && password === "admin123") {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome!",
      }).then(() => {
        navigate("/table");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password!",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Login Page</h1>
          {/* form login */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-4 py-2 text-sm text-gray-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {/* button login */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
