function FeatureCard({ title, items }) {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-white mr-2 font-bold">
                            ✓
                        </span>
                        <span className="text-gray-200">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeatureCard;
