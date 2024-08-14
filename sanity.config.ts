"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";
import { utilityType } from "./sanity/schemaTypes/utils";
import { homeType } from "./sanity/schemaTypes/home";
import { KitchenRemodelType } from "./sanity/schemaTypes/kitchen-remodeling";
import { bathroomRemodelType } from "./sanity/schemaTypes/bathroom-remodel";
import { plumbingRemodelType } from "./sanity/schemaTypes/plumbing-service";
import { PaintingRemodelType } from "./sanity/schemaTypes/painting-contractor";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      structure: pageStructure([
        utilityType,
        homeType,
        KitchenRemodelType,
        bathroomRemodelType,
        plumbingRemodelType,
        PaintingRemodelType,
      ]),
    }),
    singletonPlugin([
      utilityType.name,
      homeType.name,
      KitchenRemodelType.name,
      bathroomRemodelType.name,
      plumbingRemodelType.name,
      PaintingRemodelType.name,
    ]),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
