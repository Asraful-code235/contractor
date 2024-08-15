import BathroomRemodelContent from "@/components/BathroomRemodel/BathroomRemodelContent";
import { getBathroomRemodel, getServiceBySlug } from "@/sanity/client";

export const metadata = {
  title: "Bathroom Remodel Miami",
  description: "Bathroom Remodel Miami | Jado Construction",
};

export default async function BathroomRemodel() {
  const getdata = await getBathroomRemodel();
  return <BathroomRemodelContent data={getdata} />;
}
