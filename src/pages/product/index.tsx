import { CardProduct } from "../../components/card-product";
import ProductCategories from "../../components/product-categories";
import AppLayout from "../../layouts/app-layout";
import { sampleProductCard } from "../../utils/apis/products/sample-data";

const Products = () => {
  return (
    <AppLayout>
      <div className="container lg:px-24 lg:py-12 py-6">
        <h5 className="lg:text-3xl md:text-2xl text-xl font-semibold text-neutral-700">
          Our products
        </h5>
        <div className="mt-4 lg:w-1/2 md:w-3/4 w-full">
          <input
            type="text"
            id="search"
            className="bg-white border border-neutral-300 text-neutral-700 text-sm rounded-lg block w-full p-2.5"
            placeholder="Type to search or sort by category..."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-5">
          <ProductCategories />
        </div>

        <div>
          {sampleProductCard.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {sampleProductCard.map((item) => (
                <CardProduct
                  key={item.id}
                  data={item}
                  navigation={`/product/${item.id}`}
                  data-testid={`detail-other-product-${item.id}`}
                />
              ))}
            </div>
          ) : (
            <div
              className="p-4 mt-5 w-full lg:w-1/2 md:w-3/4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">Data not found!</span> Change a few
              things up and try submitting again.
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Products;
