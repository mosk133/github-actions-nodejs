import { useState } from "react";

function AuthSection() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [isLogin, setIsLogin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isLogin) {
            try {
                const response = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        password: formData.password,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    const successMessage = document.createElement('div');
                    successMessage.className = 'fixed inset-0 flex items-center justify-center z-50';
                    successMessage.innerHTML = `
                        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                        <div class="bg-white p-8 rounded-2xl shadow-2xl relative z-10 max-w-md w-full mx-4 transform transition-all duration-500 scale-100 opacity-100">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Login Successful!</h3>
                                <p class="text-gray-600 mb-6">You're now ready to explore the cosmos.</p>
                                <button 
                                    class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
                                    onclick="this.closest('div.fixed').remove()"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(successMessage);
                    console.log('Login successful:', data);
                    localStorage.setItem('fakeLoggedInUser', formData.username);
                    setIsAuthenticated(true);
                    window.location.hash = 'destinations';
                    window.location.reload();
                } else {
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'fixed inset-0 flex items-center justify-center z-50';
                    errorMessage.innerHTML = `
                        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                        <div class="bg-white p-8 rounded-2xl shadow-2xl relative z-10 max-w-md w-full mx-4">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Login Failed</h3>
                                <p class="text-gray-600 mb-6">Incorrect username or password. Please try again.</p>
                                <button 
                                    class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
                                    onclick="this.closest('div.fixed').remove()"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(errorMessage);
                }
            } catch (error) {
                console.error('Error during login:', error);
                const errorMessage = document.createElement('div');
                errorMessage.className = 'fixed inset-0 flex items-center justify-center z-50';
                errorMessage.innerHTML = `
                    <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                    <div class="bg-white p-8 rounded-2xl shadow-2xl relative z-10 max-w-md w-full mx-4">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-2">Error</h3>
                            <p class="text-gray-600 mb-6">An unexpected error occurred during login.</p>
                                <button 
                                    class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
                                    onclick="this.closest('div.fixed').remove()"
                                >
                                    Close
                                </button>
                        </div>
                    </div>
                `;
                document.body.appendChild(errorMessage);
            }
        } else {
            try {
                const response = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        password: formData.password,
                    }),
                });

                if (response.ok) {
                    const successMessage = document.createElement('div');
                    successMessage.className = 'fixed inset-0 flex items-center justify-center z-50';
                    successMessage.innerHTML = `
                        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                        <div class="bg-white p-8 rounded-2xl shadow-2xl relative z-10 max-w-md w-full mx-4 transform transition-all duration-500 scale-100 opacity-100">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
                                <p class="text-gray-600 mb-6">Welcome to the Space Explorers community.</p>
                                <button 
                                    class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
                                    onclick="this.closest('div.fixed').remove()"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(successMessage);
                    console.log('User registered:', formData);
                } else {
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'fixed inset-0 flex items-center justify-center z-50';
                    errorMessage.innerHTML = `
                        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                        <div class="bg-white p-8 rounded-2xl shadow-2xl relative z-10 max-w-md w-full mx-4">
                            <div class="text-center">
                                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Registration Failed</h3>
                                <p class="text-gray-600 mb-6">Could not complete registration. Please try again.</p>
                                <button 
                                    class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
                                    onclick="this.closest('div.fixed').remove()"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(errorMessage);
                }
            } catch (error) {
                console.error('Error during registration:', error);
                const errorMessage = document.createElement('div');
                errorMessage.className = 'fixed inset-0 flex items-center justify-center z-50';
                errorMessage.innerHTML = `
                    <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                    <div class="bg-white p-8 rounded-2xl shadow-2xl relative z-10 max-w-md w-full mx-4">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-2">Error</h3>
                            <p class="text-gray-600 mb-6">An unexpected error occurred during registration.</p>
                                <button 
                                    class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
                                    onclick="this.closest('div.fixed').remove()"
                                >
                                    Close
                                </button>
                        </div>
                    </div>
                `;
                document.body.appendChild(errorMessage);
            }
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    if (isAuthenticated) {
        return null;
    }

    return (
        <section id="login" className="bg-gradient-to-b from-purple-900 to-indigo-800 py-20 w-full text-white">
            <div className="container mx-auto px-4 max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-8">
                    {isLogin ? "Login to your Account" : "Join the Space Explorers"}
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-800"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Your username"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>
                <p className="text-center text-gray-200 mt-4">
                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <span
                                onClick={toggleForm}
                                className="cursor-pointer text-indigo-400 hover:text-indigo-500"
                            >
                                Sign up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span
                                onClick={toggleForm}
                                className="cursor-pointer text-indigo-400 hover:text-indigo-500"
                            >
                                Login
                            </span>
                        </>
                    )}
                </p>
            </div>
        </section>
    );
}

export default AuthSection;
