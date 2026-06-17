import type { ReactNode } from "react"

interface LinkData {
    url: string
    label: string
}

interface TNBProps {
    homeURL: string
    logoSrc: string
    title: string
    links: LinkData[]
    additional?: ReactNode
}

export default function TopNavBar({ homeURL, logoSrc, title, links, additional }: TNBProps) {
    return (
        <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center glass-card !p-2 md:!p-3 !rounded-full">
                <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3">
                    <a href={homeURL} className="w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform">
                        <img src={logoSrc} alt={title} className="w-7 h-7 md:w-8 md:h-8" />
                    </a>
                    <span className="text-xl font-bold tracking-tight text-slate-800 text-white">
                        {title}
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 px-2 md:px-3 text-sm font-medium text-slate-300">
                    {
                        links.map(({ url, label }) => (
                            <a href={url} className="hover:text-brand-600 transition-colors">{label}</a>
                        ))
                    }
                </div>

                {additional && (
                    <div className="flex items-center gap-2 md:gap-3">
                        {additional}
                    </div>
                )}
            </div>
        </nav>
    );
};
