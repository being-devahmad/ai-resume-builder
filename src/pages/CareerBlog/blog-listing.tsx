import { BlogCard } from "./blog-card";
import { BlogCategoryNav } from "./blog-category-nav";
import blogImg from "@/assets/images/blog.jpeg"

export const blogPosts = [
    {
        id: 1,
        title: "Mastering the Art of Networking",
        description: "Learn how to expand your professional network and unlock new career opportunities.",
        author: "John Doe",
        date: "May 10, 2023",
        imageUrl: blogImg
    },
    {
        id: 2,
        title: "10 Productivity Hacks for Busy Professionals",
        description: "Discover simple yet effective tips to boost your productivity at work and in life.",
        author: "Jane Smith",
        date: "March 15, 2023",
        imageUrl: blogImg
    },
    {
        id: 3,
        title: "How to Build a Winning Resume",
        description: "Step-by-step guide to crafting a resume that stands out to hiring managers.",
        author: "Emily Clark",
        date: "April 22, 2023",
        imageUrl: blogImg
    },
    {
        id: 4,
        title: "Top 5 Skills to Learn in 2025",
        description: "Stay ahead in your career with these in-demand skills for the future.",
        author: "Michael Lee",
        date: "January 5, 2025",
        imageUrl: blogImg
    },
    {
        id: 5,
        title: "Work-Life Balance: Myths vs. Reality",
        description: "Debunk common myths and find practical ways to achieve a healthy work-life balance.",
        author: "Sophia Williams",
        date: "February 12, 2024",
        imageUrl: blogImg
    },
    {
        id: 6,
        title: "The Ultimate Guide to Freelancing",
        description: "Everything you need to know to start and succeed as a freelancer in 2025.",
        author: "Liam Johnson",
        date: "December 18, 2024",
        imageUrl: blogImg
    },
];

const BlogListing = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <BlogCategoryNav />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <BlogCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        author={post.author}
                        date={post.date}
                        imageUrl={post.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}


export default BlogListing;