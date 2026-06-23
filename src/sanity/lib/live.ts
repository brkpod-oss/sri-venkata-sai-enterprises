import { defineLive } from "next-sanity/live";
import { client } from "@/sanity/client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2026-06-23",
  }),
});
