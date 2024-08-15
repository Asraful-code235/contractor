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
"contentModules":contentModules[]{
    ...,
    "services":services[]->{
    ...},

    "testimonials":testimonials[]->{
    ...}

}
}
`;

export const serviceBySlug = groq`
*[_type == "service" && slug.current == $slug][0] {
  ...,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },	
}
`;

export const bathroomRemodel = groq`
*[_type == "bathroomRemodel"][0] {
  ...,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },	
}
`;

export const kitchenRemodel = groq`
*[_type == "kitchenRemodel"][0] {
  ...,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },	
}
`;
export const paintingRemodel = groq`
*[_type == "paintingRemodel"][0] {
  ...,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },	
}
`;
export const plumbingRemodel = groq`
*[_type == "plumbingRemodel"][0] {
  ...,
  image {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },	
}
`;
