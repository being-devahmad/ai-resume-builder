import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Share2 } from 'lucide-react'


export default function BlogMetadata() {
    const tags = ["Tips", "Blog", "Tech"]

    return (
        <div className=" p-4 rounded">
            <div className="flex justify-between items-center my-8 py-8 px-4 border border-[#D0D0D2] ">
                <div className="flex items-center gap-2 ">
                    <span className="font-medium">Tags:</span>
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="hover:bg-secondary/80 cursor-pointer"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-medium mr-2">Share:</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        aria-label="Share on Facebook"
                    >
                        <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        aria-label="Share on Twitter"
                    >
                        <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        aria-label="Share link"
                    >
                        <Share2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <h2 className="text-2xl font-bold">Related Blogs</h2>
        </div>
    )
}

