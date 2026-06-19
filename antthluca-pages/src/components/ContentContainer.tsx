import type { ReactNode } from "react"

interface CCProps {
    content: ReactNode
}

export default function ContentContainer({ content }: CCProps) {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <div className="blur-bg">
                <div className="blob"></div>
            </div>

            <div className="relative z-10 w-full">
                {content}
            </div>
        </div>
    )
}
