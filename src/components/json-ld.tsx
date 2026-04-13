"use client"

import { useEffect } from "react"

interface JsonLdProps {
  id: string
  data: unknown
}

export function JsonLd({ id, data }: JsonLdProps) {
  useEffect(() => {
    const existing = document.getElementById(id)
    if (existing) {
      existing.remove()
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = id
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      const current = document.getElementById(id)
      if (current) {
        current.remove()
      }
    }
  }, [id, data])

  return null
}
