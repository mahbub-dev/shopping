
const ProductCard = () => {
  const ratings = 4.5; // Example rating value

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">
          New
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Product Name
        </h2>
        <p className="text-gray-600 mb-2">Product Description</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-1">&#9733;</span>
          <span className="text-yellow-400 mr-1">&#9733;</span>
          <span className="text-yellow-400 mr-1">&#9733;</span>
          <span className="text-yellow-400 mr-1">&#9733;</span>
          <span className="text-yellow-400 mr-1">&#9734;</span>
          <span className="text-gray-600">({ratings})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-green-500 font-bold">$49.99</div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
