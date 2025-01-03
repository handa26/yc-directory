import "server-only"; // This file will only be included in server build
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,
});

if (!writeClient.config().token) {
  throw new Error("Write client is missing a token");
}
