function Footer() {
    return (
        <footer className="bg-indigo-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>
                    © {new Date().getFullYear()} Alien Abduction Tours. All
                    rights reserved.
                </p>
                <p className="mt-2 text-indigo-300">
                    Exploring the cosmos, one abduction at a time
                </p>
            </div>
        </footer>
    );
}

export default Footer;
