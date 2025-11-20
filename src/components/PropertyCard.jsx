function PropertyCard({ image, price, location, area, bed, bath }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.05] hover:cursor-pointer transition-transform duration-400">
            <img src={image} alt={location} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-[#FCA311]">{price}</h3>
                <p className="text-md font-medium">{location}</p>
                <div className="flex items-center space-x-2">
                    <p className="text-gray-500">{area} sqft</p>
                    <div className="border-l h-3" />
                    <p className="text-gray-500">{bed} bed</p>
                    <div className="border-l h-3" />
                    <p className="text-gray-500">{bath} bath</p>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;