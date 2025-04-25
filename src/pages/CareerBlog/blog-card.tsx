import { NavLink } from "react-router-dom";

interface BlogCardProps {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    imageUrl: string;
}

export function BlogCard({ id, title, description, author, date, imageUrl }: BlogCardProps) {
    return (
        <article className="flex flex-col rounded-lg overflow-hidden bg-white transition-shadow shadow-lg">
            <div className="aspect-video overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-3">
                    <NavLink to={`/career/${id}`} className="hover:text-[#00C48C]">
                        {title}
                    </NavLink>
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">
                    {description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">{author}</span>
                    <span className="mx-2">•</span>
                    <time>{date}</time>
                </div>
            </div>
        </article>
    );
}

