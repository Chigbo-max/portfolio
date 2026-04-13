import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"
import readingTime from "reading-time"

export type BlogPostFrontmatter = {
  title: string
  description: string
  date: string
  tags: string[]
  author: string
  image?: string
}

export type BlogPostMeta = BlogPostFrontmatter & {
  slug: string
  readingTimeMinutes: number
}

export type BlogPost = BlogPostMeta & {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

function getReadingTimeMinutes(text: string) {
  const minutes = readingTime(text).minutes
  return Math.max(1, Math.round(minutes))
}

export function getAllBlogSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const frontmatter = data as BlogPostFrontmatter

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    tags: frontmatter.tags ?? [],
    author: frontmatter.author,
    image: frontmatter.image,
    readingTimeMinutes: getReadingTimeMinutes(content),
    content,
  }
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const slugs = getAllBlogSlugs()
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .map(({ content: _content, ...meta }) => meta)

  posts.sort((a, b) => {
    const aTime = new Date(a.date).getTime()
    const bTime = new Date(b.date).getTime()
    return bTime - aTime
  })

  return posts
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPostMeta[] {
  const current = getBlogPostBySlug(slug)
  if (!current) return []

  const currentTags = new Set(current.tags.map((t) => t.toLowerCase()))
  const posts = getAllBlogPosts()
    .filter((post) => post.slug !== slug)
    .map((post) => {
      const score = post.tags.reduce((acc, tag) => {
        if (currentTags.has(tag.toLowerCase())) return acc + 1
        return acc
      }, 0)
      return { post, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)

  return posts
}

