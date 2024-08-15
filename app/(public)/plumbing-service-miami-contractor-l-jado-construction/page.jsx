import PlumbingServiceContent from "@/components/PlumbingServiceContent/PlumbingServiceContent";
import { getPlumbingRemodel } from "@/sanity/client";

export const metadata = {
  title: "Plumbing Service Miami Contractor",
  description: "Plumbing Service Miami Contractor | Jado Construction",
};

export default async function PaintingService() {
  const getdata = await getPlumbingRemodel();

  return <PlumbingServiceContent data={getdata} />;
}
