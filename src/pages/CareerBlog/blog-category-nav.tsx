type Category = {
    name: string;
    href: string;
    isActive?: boolean;
}

const categories: Category[] = [
    { name: "All Articles", href: "#", isActive: true },
    { name: "Job Search", href: "#" },
    { name: "Job Interviews", href: "#" },
    { name: "Career Advice", href: "#" },
    { name: "Resume Help", href: "#" },
    { name: "CV Help", href: "#" },
    { name: "Cover Letter Help", href: "#" },
    { name: "FAQ", href: "#" },
];

export function BlogCategoryNav() {
    return (
        <div className="w-full overflow-x-auto">
            <nav className="flex gap-6 border-b pb-4 mb-8">
                {categories.map((category) => (
                    <a
                        key={category.name}
                        href={category.href}
                        className={`text-sm whitespace-nowrap ${category.isActive
                                ? "text-[#00C48C] font-medium"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        {category.name}
                    </a>
                ))}
            </nav>
        </div>
    );
}

