
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import testimonialDp from "@/assets/images/testimonialDp.png"

const testimonials = [
    {
        id: 1,
        quote: "A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at lectus ac, sed facilisis hac. Egestas in dolor dui purus tincidunt eget cras nisl est molestie aliquam.",
        rating: 5,
        name: "Mell Harvey",
        role: "Founder BookChimp",
        image: testimonialDp, // Replace with actual image URL
    },
    {
        id: 2,
        quote: "A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at lectus ac, sed facilisis hac. Egestas in dolor dui purus tincidunt eget cras nisl est molestie aliquam.",
        rating: 5,
        name: "Mell Harvey",
        role: "Founder BookChimp",
        image: testimonialDp, // Replace with actual image URL
    },
    {
        id: 3,
        quote: "A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at lectus ac, sed facilisis hac. Egestas in dolor dui purus tincidunt eget cras nisl est molestie aliquam.",
        rating: 5,
        name: "Mell Harvey",
        role: "Founder BookChimp",
        image: testimonialDp, // Replace with actual image URL
    },
    {
        id: 4,
        quote: "A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at lectus ac, sed facilisis hac. Egestas in dolor dui purus tincidunt eget cras nisl est molestie aliquam.",
        rating: 5,
        name: "Mell Harvey",
        role: "Founder BookChimp",
        image: testimonialDp, // Replace with actual image URL
    },
    {
        id: 5,
        quote: "A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at lectus ac, sed facilisis hac. Egestas in dolor dui purus tincidunt eget cras nisl est molestie aliquam.",
        rating: 5,
        name: "Mell Harvey",
        role: "Founder BookChimp",
        image: testimonialDp, // Replace with actual image URL
    }, {
        id: 6,
        quote: "A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at lectus ac, sed facilisis hac. Egestas in dolor dui purus tincidunt eget cras nisl est molestie aliquam.",
        rating: 5,
        name: "Mell Harvey",
        role: "Founder BookChimp",
        image: testimonialDp, // Replace with actual image URL
    }, {
        id: 7,
        quote: "A lectus ac pulvinar tincidunt accumsan. Ullamcorper dolor at lectus ac, sed facilisis hac. Egestas in dolor dui purus tincidunt eget cras nisl est molestie aliquam.",
        rating: 5,
        name: "Mell Harvey",
        role: "Founder BookChimp",
        image: testimonialDp, // Replace with actual image URL
    },
];

function Testimonials() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Title Section */}
                <div className="mb-8">
                    <p className="text-teal-500 font-semibold text-lg">Testimonial</p>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        This Is What Theirs Have To Say
                    </h2>
                    <p className="text-gray-500 text-lg mt-2">
                        Rated excellent with <span className="text-teal-500">4.5</span> until 5 on{" "}
                        <span className="text-gray-800 font-semibold">TrustWebsite</span>
                    </p>
                </div>

                {/* Swiper Testimonials */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white p-6 rounded-lg shadow-lg text-left border border-gray-200 hover:shadow-xl transition">
                                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                                <div className="flex items-center mb-4">
                                    {Array(testimonial.rating)
                                        .fill(0)
                                        .map((_, index) => (
                                            <span key={index} className="text-yellow-500 text-xl">&#9733;</span>
                                        ))}
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mr-4 border-2 border-teal-500"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Call to Action */}
                <button className="mt-8 bg-teal-500 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-teal-600 transition">
                    Start creating your CV today!
                </button>
            </div>
        </div>
    );
}

export default Testimonials;
