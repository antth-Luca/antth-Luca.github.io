import { Menu, X } from "lucide-react"
import React from "react"

interface LinkData {
    url: string
    label: string
}

interface TNBProps {
    homeURL: string
    logoSrc: string
    title: string
    links: LinkData[]
}

export const TopNavBar: React.FC<TNBProps> = ({ homeURL, logoSrc, title, links }) => {
    const [ isMenuOpen, setIsMenuOpen ] = React.useState(false)

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

                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden p-2.5 glass-inner !rounded-full text-brand-600"
                >
                    <Menu size={20} />
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsMenuOpen(false)} />
                    <div className="absolute right-4 top-4 bottom-4 w-[280px] glass-card !p-8 animate-in slide-in-from-right duration-500 flex flex-col">
                        <div className="flex justify-between items-center mb-10">
                            <span className="font-bold text-brand-600">MENU</span>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 glass-inner !rounded-full text-brand-400">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 flex-grow">
                            {
                                links.map(({ url, label }) => (
                                    <a href={url} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white tracking-tighter">{label}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
