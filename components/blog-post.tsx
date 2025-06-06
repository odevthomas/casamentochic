import Image from "next/image";
import Link from "next/link";

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
  const imageSrc =
    typeof post.image === "string" && post.image.trim().length > 0
      ? post.image
      : WEDDING_IMAGES[post.id % WEDDING_IMAGES.length] || DEFAULT_IMAGE;

  return (
    <Link href={`/blog/${post.slug || "post"}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[16/9] md:aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {post.category && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 flex items-end group-hover:opacity-100 opacity-0">
              <div className="p-4 w-full">
                <span className="bg-[#cfa144] text-white text-xs uppercase font-semibold px-2 py-1 rounded shadow">
                  {post.category}
                </span>
                <h3 className="text-white font-serif text-xl mt-2 leading-snug drop-shadow-sm">
                  {post.title}
                </h3>
              </div>
            </div>
          )}
        </div>

        {!post.category && (
          <div className="p-5 flex flex-col justify-between h-full">
            <h3 className="font-serif text-lg text-neutral-800 group-hover:text-[#cfa144] transition-colors leading-tight">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
