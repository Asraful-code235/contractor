import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  previewSecretId,
} from "./config";
import {
  bathroomRemodel,
  getAll,
  home,
  kitchenRemodel,
  paintingRemodel,
  plumbingRemodel,
  serviceBySlug,
  utils,
} from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    })
  : null;

export const previewClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: previewSecretId,
    })
  : null;

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll);
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getUtils() {
  if (client) {
    return (await client.fetch(utils)) || {};
  }
  return {};
}

// get services by slug
export async function getHome() {
  if (client) {
    return (await client.fetch(home)) || {};
  }
  return {};
}

export async function getServiceBySlug(slug) {
  if (client) {
    return (await client.fetch(serviceBySlug, { slug })) || {};
  }
  return [];
}
export async function getBathroomRemodel() {
  if (client) {
    return (await client.fetch(bathroomRemodel)) || {};
  }
  return [];
}
export async function getKitchenRemodel() {
  if (client) {
    return (await client.fetch(kitchenRemodel)) || {};
  }
  return [];
}
export async function getPaintingRemodel() {
  if (client) {
    return (await client.fetch(paintingRemodel)) || {};
  }
  return [];
}
export async function getPlumbingRemodel() {
  if (client) {
    return (await client.fetch(plumbingRemodel)) || {};
  }
  return [];
}
