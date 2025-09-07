export default function QuoteBox() {
  return (
    <div className="flex mt-10 items-center justify-center">
      <figure className="border border-gray-400 p-6 max-w-xl">
        {/* Texte avec guillemets autour */}
        <blockquote className="text-lg font-mono italic text-center">
          “While there is life there is hope”
        </blockquote>

        {/* Auteur */}
        <figcaption className="mt-4 flex justify-end items-center gap-2">
          <span className="text-sm font-mono">– Pr. Hawking</span>
        </figcaption>
      </figure>
    </div>
  );
}

