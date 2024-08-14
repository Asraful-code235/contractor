import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div>
      <Link href="/products/slugs">
        <Image
          className="w-[160px] h-[160px] lg:w-[280px] lg:h-[280px] object-cover rounded-sm"
          src="/assets/images/jadoconstruction-image-02.webp"
          width={280}
          height={280}
          alt="product image"
        />
        <div className="mt-2">
          <p className="font-semibold">Product card</p>
          <p>$288</p>
        </div>
      </Link>
    </div>
  );
}
