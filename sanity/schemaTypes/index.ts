import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";

import { authorType } from "./authorType";
import { utilityType } from "./utils";
import { homeType } from "./home";
import { ourWork } from "../modules/ourWork";
import { serviceType } from "./serviceType";
import { servicesModuleType } from "../modules/servicesModuleType";
import { showcaseProjectType } from "../modules/remodel";
import { testimonialType } from "./testimonials";
import { testimonialsSectionType } from "../modules/testimonialsSectionModule";
import { KitchenRemodelType } from "./kitchen-remodeling";
import { bathroomRemodelType } from "./bathroom-remodel";
import { PaintingRemodelType } from "./painting-contractor";
import { plumbingRemodelType } from "./plumbing-service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    serviceType,
    utilityType,
    homeType,
    ourWork,
    servicesModuleType,
    showcaseProjectType,
    testimonialType,
    testimonialsSectionType,
    KitchenRemodelType,
    bathroomRemodelType,
    PaintingRemodelType,
    plumbingRemodelType,
  ],
};
