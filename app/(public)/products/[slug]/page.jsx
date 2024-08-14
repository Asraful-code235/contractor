"use client";

import { useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams();
  return <div>{params.slug}</div>;
}
