import type { Metadata } from "next"

import { BlogList } from "@/components/blog/blog-list"
import { getAllBlogPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description:
    "Blog posts on AI automation in Nigeria, backend engineering best practices, and automation workflows using APIs and AI.",
  keywords: [
    ...siteConfig.keywords,
    "AI automation in Nigeria",
    "Backend engineering best practices",
    "Automation workflows using APIs and AI",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Posts on AI automation in Nigeria, backend engineering best practices, and automation workflows using APIs and AI.",
    url: "/blog",
    siteName: siteConfig.name,
    images: [{ url: siteConfig.image }],
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <section className="py-16">
      <div className="container space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Blog
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Writing about AI automation in Nigeria, backend engineering best
            practices, and project breakdowns. Available for remote work and
            roles in Lagos.
          </p>
        </header>

        <BlogList posts={posts} />
      </div>
    </section>
  )
}

