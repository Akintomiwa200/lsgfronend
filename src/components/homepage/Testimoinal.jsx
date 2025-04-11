const testimonials = [
    {
      text: "Investing with LSG Investment was a great decision. Their team provided excellent support, and my returns exceeded expectations. Their transparency and updates make them a trustworthy partner.",
      name: "Emeka M.",
    },
    {
      text: "LSG Investment transformed my portfolio with their real estate expertise. Their clear communication and strategic insights have led to significant returns. Highly recommend!",
      name: "Davis Adegoke.",
    },
    {
      text: "I was skeptical about real estate investing, but LSG Investment’s professionalism and market insights gave me confidence. The results have been outstanding!",
      name: "Racheal John.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="px-8 md:px-24 lg:px-64 py-64 bg-[#F8FAFC] text-center">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          What our Clients Say About Us
        </h2>
  
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-32 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1D2150] text-white p-8 rounded-xl shadow-lg relative  h-auto lg:h-auto"
            >
              {/* Stars */}
              <div className="flex justify-end mb-3">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    {star}
                  </span>
                ))}
              </div>
  
              {/* Testimonial Text */}
              <p className="text-3xl md:text-xl leading-relaxed">{testimonial.text}</p>
  
              {/* Profile Placeholder */}
              <div className="absolute -bottom-12 md:-bottom-12 left-1/4 transform -translate-x-1/2">
                <div className="w-32 h-32 md:w-24 md:h-24 bg-gray-300 rounded-full"></div>
              </div>
  
              {/* Name */}
              <p className="mt-8 text-yellow-400 flex justify-end pr-12 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  