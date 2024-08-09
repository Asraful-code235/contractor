export default function Heading({ title, description }) {
  return (
    <div>
      {title && (
        <h2 className="text-3xl lg:text-5xl text-center text-white font-bold">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-sm lg:text-base text-center text-white">
          {description}
        </p>
      )}
    </div>
  );
}
