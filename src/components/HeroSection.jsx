function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-indigo-800 to-purple-900 text-white py-20 w-full">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Exploring the cosmos, one abduction at a time
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
                    Our mission is to make space travel accessible and enjoyable
                    for everyone.
                </p>
                <a 
                    href="#destinations"
                    className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    Explore Tours
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
