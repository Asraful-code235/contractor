import PaintingServiceContent from "@/components/PaintingService/PaintingServiceContent";
import { getPaintingRemodel } from "@/sanity/client";

export const metadata = {
  title: "Painting Contractor Miami",
  description: "Painting Contractor Miami | Jado Construction",
};

export default async function PaintingService() {
  const getdata = await getPaintingRemodel();

  return <PaintingServiceContent data={getdata} />;
}
