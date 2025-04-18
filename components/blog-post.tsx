import Image from "next/image";
import Link from "next/link";

// Imagens gratuitas de casamento do Unsplash
const WEDDING_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1920&auto=format&fit=crop"
];

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    slug: string;
    image?: string;
    category?: string;
    excerpt?: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  let imageSrc: string;

  if (typeof post.image === "string" && post.image.trim().length > 0) {
    imageSrc = post.image;
  } else if (post.id >= 0 && post.id < WEDDING_IMAGES.length) {
    imageSrc = WEDDING_IMAGES[post.id % WEDDING_IMAGES.length];
  } else {
    imageSrc = DEFAULT_IMAGE;
  }

  return (
    <Link href={`/blog/${post.slug || "post"}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg h-full">
        <div className="relative aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {post.category && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <span className="inline-block bg-[#b8a369] text-white text-xs px-2 py-1 rounded mb-2">
                  {post.category}
                </span>
                <h3 className="text-white font-serif text-lg md:text-xl">{post.title}</h3>
              </div>
            </div>
          )}
        </div>
        {!post.category && (
          <div className="p-4">
            <h3 className="font-serif text-lg text-[#5c5c5c] group-hover:text-[#b8a369] transition-colors">
              {post.title}
            </h3>
            {post.excerpt && <p className="text-[#8c8c8c] mt-2 text-sm">{post.excerpt}</p>}
          </div>
        )}
      </div>
    </Link>
  );
}
