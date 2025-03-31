function Header() {
  return (
    // Header component
    <div className="bg-gray-50 flex lg:justify-around text-center lg:text-left flex-col-reverse lg:flex-row  items-center p-12">
      <div>
        <div>
          <div>
            <h1 className="text-7xl font-bold">Lessons and insights </h1>
          </div>
          <div>
            <h1 className="text-7xl text-primary font-bold">from 8 years</h1>
          </div>
        </div>
        <div>
          <p className="text-secondery/50 mt-3">
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <div>
            <button className="btn cursor-pointer mt-6 bg-primary text-white p-3 px-8 rounded-sm hover:scale-115 transition ease-in-out">Register</button>
        </div>
      </div>

      <div>
        <img src="HeaderImg.svg" className="lg:w-84 w-64 mb-12 lg:mb-0" alt="" />
      </div>
    </div>
  );
}
export default Header;
