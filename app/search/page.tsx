import Search from "../component/Search";

const SearchPage = () => {
  return (
    <>
      <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="mb-2">Region</h1>
          <p className="font-light text-reg">Toronto</p>
          <p className="font-light text-reg">Ottawa</p>
          <p className="font-light text-reg">Montreal</p>
          <p className="font-light text-reg">Hamilton</p>
          <p className="font-light text-reg">Kingston</p>
          <p className="font-light text-reg">Niagara</p>
        </div>
        <div className="border-b pb-4 mt-3">
          <h1 className="mb-2">Cuisine</h1>
          <p className="font-light text-reg">Mexican</p>
          <p className="font-light text-reg">Italian</p>
          <p className="font-light text-reg">Chinese</p>
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2">Price</h1>
          <div className="flex">
            <button className="border w-full text-reg font-light rounded-l p-2">
              $
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2">
              $$
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
              $$$
            </button>
          </div>
        </div>
      </div>
      {/* SEARCH SIDE BAR */}
      <div className="w-5/6">
        {/* RESAURANT CAR */}
        <div className="border-b flex pb-5">
          <img
            src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
            alt=""
            className="w-44 rounded"
          />
          <div className="pl-5">
            <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2 text-sm">Awesome</p>
            </div>
            <div className="mb-9">
              <div className="font-light flex text-reg">
                <p className="mr-4">$$$</p>
                <p className="mr-4">Mexican</p>
                <p className="mr-4">Ottawa</p>
              </div>
            </div>
            <div className="text-red-600">
              <a href="">View more information</a>
            </div>
          </div>
        </div>
        {/* RESAURANT CAR */}
      </div>
    </>
  );
};

export default SearchPage;
