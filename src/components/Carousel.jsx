import React from "react";

const Carousel = () => {
  return (
    <div className="h-5/6 w-full">
      <div className="relative h-full w-full overflow-hidden">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://img.freepik.com/free-photo/asian-happy-female-woman-girl-holds-colourful-shopping-packages-standing-yellow-background-studio-shot-close-up-portrait-young-beautiful-attractive-girl-smiling-looking-camera-with-bags_609648-3029.jpg?size=626&ext=jpg&ga=GA1.2.1428796754.1680492591&semt=sph"
            className="w-full"
          />
          <div className="absolute top-0 left-0 m-32 ">
            <h1 className="font-bold text-5xl "> Buy and happines</h1>
            <p className="w-96 h-32 font-normal text-lg pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 mr-4 bg-[#4F200D] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg"
            className="w-full hidden md:table-cell"
          />
          <div className="absolute top-0 right-0 p-32 hidden md:table-cell">
            <h1 className="font-bold text-5xl "> Buy all you need</h1>
            <p className="w-96 h-32 font-normal text-lg pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 mr-4 bg-[#4F200D]  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Check Our Item
            </button>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg"
            className="w-full hidden md:table-cell"
          />
          <div className="absolute top-0 left-0 p-32 hidden md:table-cell">
            <h1 className="font-bold text-5xl "> We have promo</h1>
            <p className="w-96 h-32 font-semibold text-lg pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 mr-4 bg-[#4F200D] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Search
            </button>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
            className="w-full hidden md:table-cell"
          />
          <div className="absolute top-0 ledt-0 p-32 hidden md:table-cell">
            <h1 className="font-bold text-5xl "> Let's go...</h1>
            <p className="w-96 h-32 font-semibold text-lg pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="mt-4 mr-4 bg-[#4F200D] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 top relative ">
        <a href="#item1" className="btn btn-xs hidden md:table-cell">
          1
        </a>
        <a href="#item2" className="btn btn-xs hidden md:table-cell">
          2
        </a>
        <a href="#item3" className="btn btn-xs hidden md:table-cell">
          3
        </a>
        <a href="#item4" className="btn btn-xs hidden md:table-cell">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
