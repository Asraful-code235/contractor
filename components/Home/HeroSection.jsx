import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div>
      <div className="overlay"></div>
      <video src="/assets/videos/12.mp4" autoPlay loop muted />
      <div className="absolute h-screen top-0 left-[94px] flex flex-col justify-center text-white text-7xl font-bold">
        <h1>General Contractor</h1>
        <h1>Licensed.Insured</h1>
        <div>
          <Button
            size="lg"
            className="bg-brand-color-one text-black hover:text-white uppercase font-semibold"
          >
            Get a quote
          </Button>
        </div>
      </div>
    </div>
  );
}
