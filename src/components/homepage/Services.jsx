import salesImage from "../../assets/Frame76.png"; // Update with correct path
import developmentImage from "../../assets/Frame77.png"; // Update with correct path
import consultancyImage from "../../assets/Frame78.png"; // Update with correct path


const OurServices = () => {
  return (
    <section className=" md:px-20 lg:h-[100vh] flex flex-col w-[100vw] justify-center px-8 bg-[#F8FAFC] text-center">
      {/* Title */}
      <h2 className=" font-light text-4xl lg:font-bold text-gray-900 mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-2xl">
        At LSG Investment Limited, we offer comprehensive real estate solutions
        designed to empower our clients with the knowledge and support they need
        to achieve their property goals with confidence.
      </p>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 text-2xl gap-8">
        {/* Sales */}
        <div className=" overflow-hidden p-4">
          <img
            src={salesImage}
            alt="Sales"
            className="w-full h-[600px] lg:h-[250px]  object-cover rounded-lg"
          />
     <h3 className="lg:text-2xl text-4xl font-light lg:font-semibold text-gray-900 mt-4">Sales</h3>
        </div>

        {/* Development */}
        <div className=" overflow-hidden p-4">
          <img
            src={developmentImage}
            alt="Development"
            className="w-full h-[600px] lg:h-[250px] object-cover rounded-lg"
          />
        <h3 className="lg:text-2xl text-4xl font-light lg:font-semibold text-gray-900 mt-4">
            Development
          </h3>
        </div>

        {/* Consultancy */}
        <div className=" overflow-hidden p-4">
          <img
            src={consultancyImage}
            alt="Consultancy"
            className="w-full h-[600px] lg:h-[250px]  object-cover rounded-lg"
          />
          <h3 className="lg:text-2xl text-4xl font-light lg:font-semibold text-gray-900 mt-4">
            Consultancy
          </h3>
        </div>
        {/* <Button width="40vw" className="">See more</Button> */}
      </div>
    </section>
  );
};

export default OurServices;
