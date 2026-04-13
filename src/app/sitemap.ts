import type { MetadataRoute } from "next"

import { getAllBlogPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: new URL("/", siteConfig.url).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/blog", siteConfig.url).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}

