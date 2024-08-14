import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div>
      <Link href="/product/slugs">
        <Image
          className="w-[280px] h-[280px] object-cover rounded-sm"
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
