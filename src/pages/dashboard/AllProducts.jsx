import { useState } from "react";
import SingleProductCardDashboard from "../../components/dashboard/SingleProductCardDashboard";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../../hooks/useDebounce";

const AllProducts = () => {
  // const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //custom hooks for effitient search
  const debouncedSearch = useDebounce(search, 500);

  const url = `https://computer-shope-server.onrender.com/products?search=${search}`;
  const {
    data: products,
    isPending,
    refetch,
  } = useQuery({ queryKey: ["products", debouncedSearch], queryFn: () => fetch(url).then((res) => res.json()) });

  // useEffect(() => {
  //   // Fetch products based on the search query
  //   fetch(`https://computer-shope-server.onrender.com/products?search=${search}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log("রিয়াক্ট কুয়েরি ব্যবহার করছি তাই সার্চ হতে অনেক সময় অপেক্ষা করতে হয়");
    refetch();
  };
  if (isPending) {
    return <LoadingSpinner />;
  }
  // const handleDeleteProduct = (id) => {
  //   // setProducts(products.filter((product) => product._id !== id));
  // };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <form onSubmit={handleSearch} className="my-4 flex justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search by product title, name or price"
          className="input w-6/12 border-slate-300 rounded-none "
        />
        <input type="submit" value="Search" className="btn btn-primary rounded-none w-[120px]" />
      </form>
      <div className="my-16 flex flex-wrap gap-4">
        {products?.map((product) => (
          <SingleProductCardDashboard key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
