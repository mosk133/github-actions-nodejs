function Header() {
    return (
        <header className="bg-indigo-900 text-white p-4 w-full">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center">
                    <span className="text-2xl font-bold">
                        Alien Abduction Tours
                    </span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#features"
                                className="hover:text-indigo-300 font-medium"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#destinations"
                                className="hover:text-indigo-300 font-medium"
                            >
                                Destinations
                            </a>
                        </li>
                        <li>
                            <a
                                href="#budget"
                                className="hover:text-indigo-300 font-medium"
                            >
                                Budget
                            </a>
                        </li>
                        {localStorage.getItem('fakeLoggedInUser') ? (
                            <li className="flex items-center space-x-4">
                                <span className="bg-white text-indigo-900 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition-colors">
                                    {localStorage.getItem('fakeLoggedInUser')}
                                </span>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('fakeLoggedInUser');
                                        window.location.reload();
                                    }}
                                    className="bg-white text-indigo-900 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition-colors"
                                >
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li>
                                <a
                                    href="#login"
                                    className="bg-white text-indigo-900 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition-colors"
                                >
                                    Login
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
