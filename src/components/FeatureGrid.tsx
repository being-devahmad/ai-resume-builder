import { Clock, FileText, PenLine, Search } from "lucide-react";

const FeaturesGrid = () => {
    const features = [
        {
            title: "Quick online CV builder",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: <Clock />,
            bg: "bg-[#30D0AD]",
            active: true
        },
        {
            title: "Instant access to job-winning CV template",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consect.",
            icon: <PenLine />,
            bg: "bg-white",
            active: false
        },
        {
            title: "Pre-written phrase generator",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..",
            icon: <Search />,
            bg: "bg-white",
            active: false
        },
        {
            title: "Save and access from anywhere",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
            icon: <FileText />,
            bg: "bg-white",
            active : false
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 max-w-5xl mx-auto ">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={`${feature.bg} p-6 rounded-lg`}
                >
                    <div className="flex flex-col items-start mb-4">
                        <div className={`text-2xl mb-2 ${feature.active === true ? "bg-[#FFFFFF33] text-white" : "bg-[#30D0AD] text-white"}   p-3 rounded-full 
                        flex items-center justify-center`}>
                            {feature.icon}
                        </div>
                        <h3 className={`text-lg font-bold ${feature.active === true  ? 'text-white' : 'text-black'}`}>
                            {feature.title}
                        </h3>

                    </div>
                    <p className={`text-gray-600 text-sm 
                        ${feature.active === true ? 'text-white' : 'text-black'} `}>
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FeaturesGrid;
