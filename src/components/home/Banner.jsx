// import banner1 from "../../assets/image_01.jpeg";
import { useEffect, useState } from "react";
import banner2 from "../../assets/bg-computer.jpg";

export default function Banner() {
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(`https://computer-shope-server.onrender.com/products?search=${search}`).then((res) => res.json().then((data) => console.log(data)));
  }, [search]);
  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log(searchText);
  };
  return (
    <div
      className="hero min-h-screen bg-no-repeat bg-center bg-cover "
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <form onSubmit={handleSearch}>
            <input type="text" name="search" id="" className="input" />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
