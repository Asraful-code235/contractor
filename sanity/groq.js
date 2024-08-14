import { groq } from "next-sanity";

export const getAll = groq`*[]`;

export const utils = groq`
*[_type == "utility"][0] {
...
}
`;

export const home = groq`
*[_type == "home"][0] {
  ...,
  	
}
`;

export const serviceBySlug = groq`
*[_type == "service" && slug.current == $slug][0] {
  ...,
  mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },	
}
`;
