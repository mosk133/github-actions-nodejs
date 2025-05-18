function DestinationCard({ title, description, image }) {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl border border-white/20">
            <div
                className="relative h-64 w-full overflow-hidden rounded-t-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0"></div>
            </div>
            <div className="p-6 bg-transparent">
                <h3 className="text-xl font-bold text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-200">{description}</p>
                <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Book Now
                </button>
            </div>
        </div>
    );
}

export default DestinationCard;
