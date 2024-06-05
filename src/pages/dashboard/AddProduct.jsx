import toast from "react-hot-toast";

const AddProducts = () => {
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, brand, price, description, image_url };

    await fetch("https://computer-shope-server.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.error("Product added successful");
        // form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a Product</h1>

      <div className="my-16 grid grid-cols-1 justify-items-center w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 justify-items-center gap-6 w-96  text-black">
          <div className=" w-full">
            <input className="bg-gray-100 p-4 w-full border border-black rounded-lg" type="text" name="title" placeholder="Title" />
          </div>
          <div className=" w-full">
            <input className="bg-gray-100 p-4 w-full border border-black rounded-lg" type="text" name="brand" placeholder="Brand" />
          </div>
          <div className="w-full">
            <input className="bg-gray-100 p-4 w-full border border-black rounded-lg" type="text" name="price" placeholder="Price" />
          </div>
          <div className="w-full">
            <input className="bg-gray-100 p-4 w-full border border-black rounded-lg" type="text" name="description" placeholder="Description" />
          </div>
          <div className="w-full">
            <input className="bg-gray-100 p-4 w-full border border-black rounded-lg" type="text" name="image_url" placeholder="Image URL" />
          </div>

          <div className="mt-2 flex justify-center items-center w-full">
            <input className="btn mt-2 w-full bg-red-500 text-white p-4" type="submit" value="Add product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
