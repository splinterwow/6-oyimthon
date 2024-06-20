function CreateRecipe() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[600px]">
        <h1 className="text-center font-bold mt-4">Add New Recipe</h1>

        <form className="site-container mt-5">
          <div className="mb-4">
            <label className="font-bold">Title:</label>
            <div className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="rounded-md border-gray-300 focus:ring-blue-200 w-full"
                placeholder="Enter your meal name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              ></svg>
            </div>
          </div>
          <div className="mb-4">
            <label className="font-bold">Cooking time:</label>
            <div className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="rounded-md border-gray-300 focus:ring-blue-200 w-full"
                placeholder="Enter preparation time of your male"
              />
              
            </div>
          </div>

            <label className="font-bold">Ingredients:</label>
          <div className="mb-4 flex justify-between items-center gap-3">
            <div className="input input-bordered flex items-center gap-2 w-full">
              <input
                type="text"
                className="rounded-md border-gray-300 focus:ring-blue-200 w-full"
                placeholder="Enter your meal name"
              />
              
            </div>
            <button type="button" className="py-3 px-8 rounded-lg text-center bg-info">
              +
            </button>
          </div>

            <label className="font-bold">Image URL:</label>
          <div className="mb-4 flex justify-between items-center gap-3">
            <div className="input input-bordered flex items-center gap-2 w-full">
              <input
                type="text"
                className="rounded-md border-gray-300 focus:ring-blue-200 w-full"
                placeholder="Enter your meal name"
              />
              
            </div>
            <button type="button" className="py-3 px-8 rounded-lg text-center bg-info">
              +
            </button>
          </div>
          <div className="mb-4">
            <label className="font-bold">Method:</label>
            <textarea
              className="textarea textarea-bordered w-full max-h-[1000px] resize-none rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter method of meal"
            ></textarea>
          </div>
          <div className="flex gap-4 mb-3">
            <button className="btn btn-info flex-grow">Info</button>
            <button className="btn btn-success flex-grow">Success</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
