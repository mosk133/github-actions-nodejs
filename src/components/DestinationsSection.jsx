import DestinationCard from "./DestinationCard";

function DestinationsSection() {
    const destinations = [
        {
            title: "The Moon",
            description:
                "Experience Earth's closest neighbor with our weekend lunar getaways. Enjoy low-gravity activities and breathtaking Earth views.",
            image: "/src/assets/moon.png",
        },
        {
            title: "Uranus",
            description:
                "Explore the ice giant's unique sideways rotation and stunning blue atmosphere on our exclusive guided tours.",
            image: "/src/assets/uranus.png",
        },
        {
            title: "Mars",
            description:
                "Visit the red planet's famous landmarks including Olympus Mons and Valles Marineris on our adventure expeditions.",
            image: "/src/assets/mars.png",
        },
        {
            title: "Saturn's Rings",
            description:
                "Witness the majestic rings of Saturn up close on our luxury space cruises.",
            image: "/src/assets/background-saturn-and-star.png",
        },
        {
            title: "Black Hole Experience",
            description:
                "Experience the edge of a black hole with our extreme space adventures.",
            image: "/src/assets/background-black-hole.png",
        },
        {
            title: "Deep Space Exploration",
            description:
                "Journey to the farthest reaches of our galaxy with our deep space missions.",
            image: "/src/assets/background-lights-in-space.png",
        },
    ];

    return (
        <section id="destinations" className="py-16 bg-[url('/src/assets/solar-system-planets.png')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-indigo-900/70"></div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Featured Destinations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <DestinationCard
                            key={index}
                            title={destination.title}
                            description={destination.description}
                            image={destination.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DestinationsSection;
