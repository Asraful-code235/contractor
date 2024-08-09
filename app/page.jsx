import HeroSectionContent from "@/components/Home/HeroSectionContent";

export const metadata = {
  metadataBase: new URL("https://www.jadoconstruction.com/"),
  title: "Miami General Contractor Certified licensed – Jado Construction",
  description:
    "General Contract serving Miami - Broward and all of Florida. Certified license Plumbing, Permits, New Construction, Redevelopment, Remodel, Electric and all your contractor needs.",
  openGraph: {
    title: "Miami General Contractor Certified licensed – Jado Construction",
    type: "website",
    locale: "en",
    url: "https://www.jadoconstruction.com/",
    siteName: "Miami General Contractor Certified licensed – Jado Construction",
  },

  keywords: [
    "Miami General Contractor Certified licensed – Jado Construction",
    "Construction",
    "Real state",
    "Interior design",
    "Remodel",
    "Plumbing",
    "Electric",
    "Permits",
    "New Construction",
    "Redevelopment",
    "Contractor",
  ],
};

export default function Home() {
  return (
    <div>
      <HeroSectionContent />
    </div>
  );
}
