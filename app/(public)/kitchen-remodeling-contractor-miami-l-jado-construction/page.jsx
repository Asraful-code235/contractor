import KitchenRemodelContent from "@/components/KitchenRemodel/KitchenRemodelContent";
import { getKitchenRemodel } from "@/sanity/client";

export const metadata = {
  title: "Kitchen Remodeling Contractor Miami",
  description: "Kitchen Remodeling Contractor Miami | Jado Construction",
};

export default async function KitchenRemodel() {
  const getdata = await getKitchenRemodel();

  return <KitchenRemodelContent data={getdata} />;
}
