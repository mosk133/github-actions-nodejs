import { useState } from "react";

function QuoteRequestForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        destination: "",
        travelers: 1,
        departureDate: "",
        message: ""
    });

    const destinations = [
        "The Moon",
        "Uranus",
        "Mars",
        "Jupiter",
        "Saturn",
        "Neptune"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        
        // More visually appealing success message
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
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Quote Requested!</h3>
                    <p class="text-gray-600 mb-6">We'll contact you soon with details about your cosmic journey.</p>
                    <button class="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(successMessage);
        
        // Add event listener to close button
        const closeButton = successMessage.querySelector('button');
        closeButton.addEventListener('click', () => {
            successMessage.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 300);
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(successMessage)) {
                successMessage.classList.add('opacity-0', 'scale-95');
                setTimeout(() => {
                    if (document.body.contains(successMessage)) {
                        document.body.removeChild(successMessage);
                    }
                }, 300);
            }
        }, 5000);
        
        // Reset form
        setFormData({
            name: "",
            email: "",
            destination: "",
            travelers: 1,
            departureDate: "",
            message: ""
        });
    };

    // Add CSS animations
    const animationStyles = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-delayed {
            opacity: 0;
            animation: fadeIn 0.5s ease-out 0.2s forwards;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out 0.3s forwards;
        }
    `;

    return (
        <section id="budget" className="py-12 bg-gradient-to-b from-indigo-800 via-indigo-600 to-purple-900 relative text-white">
            <style>{animationStyles}</style>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-6 animate-fade-in">
                    Request Your Cosmic Journey
                </h2>
                <p className="text-center text-gray-100 mb-8 max-w-2xl mx-auto text-lg animate-fade-in-delayed">
                    Fill out the form below to request a personalized quote for your next intergalactic adventure.
                </p>

                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-indigo-300 backdrop-blur-sm bg-opacity-95 animate-fade-in-up relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-indigo-800 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your cosmic identity"
                                    className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-indigo-50 bg-opacity-50 text-indigo-900"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-indigo-800 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@galaxy.com"
                                    className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-indigo-50 bg-opacity-50 text-indigo-900"
                                />
                            </div>
                            <div>
                                <label htmlFor="destination" className="block text-indigo-800 font-medium mb-2">Destination</label>
                                <div className="relative">
                                    <select
                                        id="destination"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-indigo-50 bg-opacity-50 text-indigo-900 appearance-none"
                                    >
                                        <option value="">Select your cosmic destination</option>
                                        {destinations.map((destination, index) => (
                                            <option key={index} value={destination}>{destination}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="travelers" className="block text-indigo-800 font-medium mb-2">Number of Travelers</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="travelers"
                                        name="travelers"
                                        min="1"
                                        max="20"
                                        value={formData.travelers}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-indigo-50 bg-opacity-50 text-indigo-900 pr-10"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="departureDate" className="block text-indigo-800 font-medium mb-2">Departure Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="departureDate"
                                        name="departureDate"
                                        value={formData.departureDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-indigo-50 bg-opacity-50 text-indigo-900 pr-10"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-indigo-800 font-medium mb-2">Additional Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your cosmic expectations..."
                                    className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-indigo-50 bg-opacity-50 text-indigo-900"
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1 flex mx-auto items-center space-x-2"
                            >
                                <span>Request Your Journey</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-300 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>
        </section>
    );
}

export default QuoteRequestForm;
