import type { Metadata } from "next"
import Image from "next/image"
import Script from "next/script"
import { notFound } from "next/navigation"
import Link from "next/link"

import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllBlogSlugs, getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  const title = `${post.title} | ${siteConfig.name}`
  const url = `/blog/${post.slug}`
  const image = new URL(post.image ?? siteConfig.image, siteConfig.url).toString()

  return {
    title,
    description: post.description,
    keywords: [...siteConfig.keywords, ...post.tags],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: post.description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  })

  const related = getRelatedBlogPosts(post.slug, 3)

  const canonicalUrl = new URL(`/blog/${post.slug}`, siteConfig.url).toString()

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: canonicalUrl,
  }

  return (
    <article className="py-16">
      <Script id={`ld-blog-${post.slug}`} type="application/ld+json">
        {JSON.stringify(blogPostingJsonLd)}
      </Script>

      <div className="container space-y-10">
        <header className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readingTimeMinutes} min read</span>
            <span aria-hidden="true">•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {post.image ? (
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src={post.image}
              alt={`Preview for ${post.title}`}
              width={1200}
              height={630}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}

        <section className="space-y-4 leading-7">{content}</section>

        {related.length > 0 ? (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Related Posts</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <Card className="h-full border bg-card transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
                    <CardHeader className="space-y-2">
                      <CardTitle className="text-xl">{p.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {p.description}
                      </p>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{formatDate(p.date)}</span>
                      <span aria-hidden="true">•</span>
                      <span>{p.readingTimeMinutes} min read</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <footer className="pt-6">
          <Link href="/blog" className="text-sm text-primary hover:underline">
            Back to Blog
          </Link>
        </footer>
      </div>
    </article>
  )
}

