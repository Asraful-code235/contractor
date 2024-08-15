import { PortableText } from "../../sanity/plugins/portabletext";
import CommonHero from "../shared/CommonHero";

export default function BathroomRemodelContent({ data }) {
  return (
    <div>
      <CommonHero
        title={data?.title || "Bathroom Remodel Miami l Jado Construction"}
      />
      <div className="container mx-auto my-12 ">
        <article className="mx-auto max-w-5xl ">
          <div className="prose prose-sm lg:prose-lg prose-p:my-0 prose-table:table-fixed prose-thead:text-left prose-thead:!align-top prose-thead:my-0 prose-h1:mb-0 prose-h2:mb-0 prose-h3:mb-0 prose-h4:mb-0 prose-h5:mb-0 prose-h6:mb-0  my-3 dark:prose-invert prose-a:text-blue-600 !w-full max-w-5xl mx-auto">
            {data.content && <PortableText value={data.content} />}
          </div>
        </article>
      </div>
    </div>
  );
}
