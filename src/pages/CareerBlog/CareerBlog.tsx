import BlogListing from "./blog-listing"


const CareerBlog = () => {
    return (
        <>

            <div className="relative overflow-hidden mt-6">
                {/* Background with image */}
                <div
                    className="relative min-h-[300px] flex flex-col items-center justify-center px-4 py-16 text-white text-center bg-[#30D0AD]"
                >
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <p className="text-sm font-medium tracking-wider mb-4">
                            BLOG
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Career Blog
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Explore expert tips, real-life examples, and actionable advice to
                            land your dream job faster
                        </p>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00C48C] opacity-20 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#00C48C] opacity-20 -translate-x-1/2 translate-y-1/2" />
                    <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-[#00C48C] opacity-20 translate-x-1/2 -translate-y-1/2" />
                </div>
            </div>

            <div >
                <BlogListing />
            </div>

        </>
    )
}

export default CareerBlog
