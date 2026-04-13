"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import type { BlogPostMeta } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  const [query, setQuery] = React.useState("")
  const [activeTag, setActiveTag] = React.useState<string | null>(null)

  const tags = React.useMemo(() => {
    const all = posts.flatMap((p) => p.tags)
    return Array.from(new Set(all)).sort((a, b) => a.localeCompare(b))
  }, [posts])

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()

    return posts.filter((post) => {
      const matchesTag = activeTag
        ? post.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase())
        : true

      const matchesQuery = q
        ? post.title.toLowerCase().includes(q) ||
          post.description.toLowerCase().includes(q) ||
          post.tags.some((t) => t.toLowerCase().includes(q))
        : true

      return matchesTag && matchesQuery
    })
  }, [posts, query, activeTag])

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts by title, topic, or tags…"
          className="sm:max-w-md"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className="rounded-md"
          >
            <Badge variant={activeTag ? "outline" : "default"}>All</Badge>
          </button>
          {tags.map((tag) => {
            const active = activeTag?.toLowerCase() === tag.toLowerCase()
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(active ? null : tag)}
                className="rounded-md"
              >
                <Badge variant={active ? "default" : "outline"}>{tag}</Badge>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full overflow-hidden border bg-card transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
              {post.image ? (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Preview image for ${post.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : null}
              <CardHeader className="space-y-2 p-4">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </CardHeader>
              <CardContent className="space-y-3 px-4 pb-4">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span aria-hidden="true">•</span>
                  <span>{post.readingTimeMinutes} min read</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

