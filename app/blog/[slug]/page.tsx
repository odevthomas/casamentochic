import Image from "next/image";
import Link from "next/link";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const article = {
    title: "História de Casamento",
    image: "/Image/Galeria/seucasamento1.jpeg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    content: `
      <p><strong>Planejar um casamento</strong> envolve sonhos, expectativas e muitos detalhes. Um dos grandes desafios é criar uma celebração inesquecível sem extrapolar o orçamento.</p>
      <p>A decoração pode ser charmosa e econômica com criatividade. Veja abaixo algumas estratégias que ajudam nesse processo:</p>

      <h2>Priorize os espaços mais importantes</h2>
      <p>Invista na decoração de áreas que terão mais destaque visual e fotográfico: altar, mesa do bolo e entrada do salão.</p>

      <h2>Escolha flores da estação</h2>
      <p>Flores sazonais são mais baratas, duráveis e acessíveis, além de garantirem arranjos mais frescos.</p>

      <h2>Reutilize a decoração</h2>
      <p>Itens como arcos e vasos podem ser reaproveitados entre cerimônia e recepção.</p>

      <h2>Iluminação estratégica</h2>
      <p>Use velas, fitas de LED e lanternas para criar um clima romântico com baixo custo.</p>

      <h2>Conclusão</h2>
      <p>Com criatividade, planejamento e autenticidade, é possível criar um casamento memorável sem extrapolar o orçamento.</p>
    `,

    relatedPosts: [
      {
        title: "Casamento Cristão",
        slug: "casamento-cristao",
        image: "/Image/Galeria/seucasamento1.jpeg",
      },
      {
        title: "Mini Casamento",
        slug: "mini-casamento",
        image: "/Image/Galeria/seucasamento2.jpeg",
      },
      {
        title: "Casamento da Princesa Beatrice",
        slug: "casamento-princesa-beatrice",
        image: "/Image/Galeria/seucasamento3.jpeg",
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-serif text-gray-800 bg-zinc-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">{article.title}</h1>

      {/* Imagem e Conteúdo lado a lado */}
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        <Image
          src={article.image}
          alt={article.title}
          width={700}
          height={500}
          className="rounded-xl shadow-xl w-full h-auto object-cover"
        />

        <div
          className="prose prose-lg leading-relaxed text-justify space-y-6 max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* Botões de Compartilhamento */}
      <div className="flex justify-center gap-6 my-6">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://seusite.com/blog/${params.slug}`}
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Compartilhar no Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=https://seusite.com/blog/${params.slug}`}
          target="_blank"
          className="bg-sky-500 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-600"
        >
          Compartilhar no Twitter
        </a>
      </div>

      {/* Vídeo */}
      <div className="my-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Vídeo Inspirador</h2>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src={article.videoUrl}
            title="Vídeo de Casamento"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Posts relacionados */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-center mb-8">Veja também</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {article.relatedPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="block">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-52"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
