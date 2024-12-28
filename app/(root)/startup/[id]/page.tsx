import React from "react";
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY_BY_ID } from "@/sanity/lib/queries";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }>}) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_QUERY_BY_ID, { id });

  if (!post) {
    return notFound();
  }

  return <>
    <h1 className="text-3xl">{post.title}</h1>
  </>;
};

export default Page;
