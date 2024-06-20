import React from "react";

function CardDetails() {
  return (
    <div className="ml-8">
      <div className="site-container mt-6">
        <h1 className="mb-4  font-bold text-size-2xl">Resipe element</h1>
        <div
          className="ml-8 carousel carousel-center p-4 space-x-4 bg-neutral rounded"
          style={{ width: "1200px", height: "250px", margin: "0 auto" }}
        >
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded w-[500]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="rounded w-[500]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="rounded w-[500]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded w-[500]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded w-[500]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded w-[500]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="rounded w-[500]"
            />
          </div>
        </div>
      </div>
      <div className="site-container">
        <h1 className=" mt-10 font-bold">
          Food name: <span className="text-lg">Osh</span>
        </h1>
        <h2 className=" mt-2 font-bold">
          Ingredients: <div className="badge badge-secondary">NEW</div>{" "}
          <div className="badge badge-secondary">NEW</div>{" "}
          <div className="badge badge-secondary">NEW</div>{" "}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h3 className=" mt-2 font-bold">
          Cooking time:
          <span className="font-mono " style={{ color: "black" }}>
            {" "}
            45 minutes
          </span>
        </h3>
        <p className=" mt-2 font-bold">Method:</p>
        <span className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          odio ratione aliquid error, maxime incidunt Lorem ipsum dolor sit
          amet.
        </span>
        <br />
        <div className="flex justify-end mr-20  mb-5">
          <button className="btn btn-active btn-ghost">Back</button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
