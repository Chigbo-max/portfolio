import Link from "next/link"

export default function NotFound() {
  return (
    <section className="py-16">
      <div className="container space-y-4">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="text-muted-foreground">
          The blog post you’re looking for doesn’t exist.
        </p>
        <Link href="/blog" className="text-primary hover:underline">
          Back to Blog
        </Link>
      </div>
    </section>
  )
}

