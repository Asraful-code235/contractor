import { cn } from "@/lib/utils";

export default function Heading({
  title,
  description,
  titleClass,
  descriptionClass,
  className,
}) {
  console.log({ className });

  return (
    <div className="space-y-4 lg:space-y-8">
      {title && (
        <h2
          className={cn(
            "text-3xl lg:text-5xl text-center font-bold",
            titleClass
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className={cn("text-sm lg:text-2xl text-center", descriptionClass)}>
          {description}
        </p>
      )}
    </div>
  );
}
