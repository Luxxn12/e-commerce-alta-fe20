import phone from "../../public/icons8-smartphone-50.png";
import laptop from "../../public/icons8-laptop-50.png";
import accessories from "../../public/icons8-headset-64 (3).png";
import wear from "../../public/icons8-watch-64.png";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      description: "the greatest smartphones.",
      imageUrl: phone,
    },
    {
      id: 2,
      name: "Laptops",
      description: "High performance laptops for all needs.",
      imageUrl: laptop,
    },
    {
      id: 3,
      name: "Accessories",
      description: "Wide range of accessories for your gadgets.",
      imageUrl: accessories,
    },
    {
      id: 4,
      name: "Wearables",
      description: "Stylish and functional wearable devices.",
      imageUrl: wear,
    },
  ];
  return (
    <>
      {categories.map((category) => (
        <Link
          to="/"
          className="flex items-center justify-center px-3 py-2 gap-2 bg-white rounded-md"
          key={category.id}
        >
          <img
            src={category.imageUrl}
            alt={category.name}
            width={60}
            height={60}
          />
          <div>
            <h6 className="text-lg font-semibold text-neutral-700">
              {category.name}
            </h6>
            <p className="text-sm text-neutral-500">{category.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCategories;
