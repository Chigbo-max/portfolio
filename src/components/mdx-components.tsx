import { cn } from "@/lib/utils"

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border p-4 bg-muted/50">
      {children}
    </div>
  )
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
      <strong className="block mb-2">Tip:</strong>
      {children}
    </div>
  )
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
      <strong className="block mb-2">Warning:</strong>
      {children}
    </div>
  )
}

export const MDXComponents = {
  h1: (props: any) => (
    <h1 className="mt-8 text-3xl font-bold tracking-tight" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mt-10 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-6 text-xl font-medium" {...props} />
  ),
  p: (props: any) => (
    <p className="leading-7 mt-4 text-muted-foreground" {...props} />
  ),
  ul: (props: any) => (
    <ul className="my-4 ml-6 list-disc space-y-2" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto my-6" {...props} />
  ),

  Callout,
  Tip,
  Warning,
}