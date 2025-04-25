import { Button } from "@/components/ui/button"
import { Image } from "@nextui-org/react"
import { NavLink, useParams } from "react-router-dom"
import blogImg from "@/assets/images/blog.jpeg"
// import BlogMetadata from "./blod-metadata"
import { blogPosts } from "./blog-listing"
import { BlogCard } from "./blog-card"

export default function BlogDetail() {

    const { id } = useParams()

    return (
        <article className="max-w-5xl mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <NavLink to="/blog" className="hover:text-primary">
                    BLOG
                </NavLink>
                <span>{">"}</span>
                <NavLink to="/blog/career" className="hover:text-primary">
                    Career Blog {id}
                </NavLink>
            </nav>

            {/* Header Section */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-3">
                        Tether unveils plans for AI platform launch in 2025
                    </h1>
                    <p className="text-muted-foreground">
                        by{" "}
                        <NavLink to="#" className="hover:text-primary">
                            Admin One
                        </NavLink>
                    </p>
                </div>
                <Button className="bg-emerald-400 hover:bg-emerald-500 text-white">
                    Start creating your CV today!
                </Button>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden mb-8">
                <Image
                    src={blogImg}
                    alt="AI Platform Interface"
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit enim.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>

                {/* Quote Block */}
                {/* <blockquote className="my-8 p-6 bg-emerald-400 text-white rounded-lg">
                    <p className="text-lg italic mb-2">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat."
                    </p>
                    <footer className="font-medium">- name</footer>
                </blockquote> */}

                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                </p>
                <br />
                <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                    eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                    nulla pariatur?
                </p>
            </div>

            {/* Metadata */}
            {/* <div>
                <BlogMetadata />
            </div> */}

            {/* Related Blogs */}

            <div className={'mt-6'}>
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
                    )).slice(0,3)}
                </div>
            </div>

        </article>
    )
}

