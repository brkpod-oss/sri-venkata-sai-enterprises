import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fs9q51h4",
  dataset: "production",
  apiVersion: "2026-06-23",
  useCdn: true,
});
