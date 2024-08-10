export default function CommonHero({ title, description }) {
  return (
    <div className="relative bg-[url('/assets/images/jadoconstruction-image-05.jpg')] w-full py-32 bg-no-repeat bg-cover bg-center px-2">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        {title ? (
          <h1 className="text-3xl lg:text-5xl font-semibold">{title}</h1>
        ) : (
          <h1 className="text-5xl font-semibold">Jado Construction</h1>
        )}
        {description && <p className="text-lg">{description}</p>}
      </div>
    </div>
  );
}
