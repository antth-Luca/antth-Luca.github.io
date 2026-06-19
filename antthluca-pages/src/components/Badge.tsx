import type { ReactNode } from "react"

interface BProps {
    content: ReactNode
}

export default function Badge({ content }: BProps) {
    return (
        <div className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-brand-900">
            {content}
        </div>
    )
}