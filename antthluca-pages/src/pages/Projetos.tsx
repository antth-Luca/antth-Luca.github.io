import { useEffect, useState } from "react"
import { CONFIG } from "../config"
import Badge from "../components/Badge"
import { Cat, CloudUpload } from "lucide-react"

interface ProjectData {
    title: string
    description: string
    category:
        "sistema"
        | "estudo"
        | "contribuição"
        | "game"
        | "mod"
    github?: string
    deploy?: string
}

export default function Projetos() {
    const [featuredProjs, setFeaturedProjs] = useState<ProjectData[]>([]);
    const [plannedProjs, setPlannedProjs] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        document.title = `Projetos${CONFIG.APP_NAME}`
    }, [])

    useEffect(() => {
        fetch("/data/featured_projects.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar JSON de projetos concluídos")
                }
                return response.json()
            })
            .then((data: ProjectData[]) => {
                setFeaturedProjs(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Falha na busca:", error)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch("/data/planned_projects.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar JSON de projetos planejados")
                }
                return response.json()
            })
            .then((data: ProjectData[]) => {
                setPlannedProjs(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Falha na busca:", error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (<>
            <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-space-tx">
                        Carregando <span className="text-gradient">projetos</span>...
                    </h2>
                </div>
            </section>
        </>)
    }

    return (<>
        {/* Title Section */}
        <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-space-tx">
                Projetos & <span className="text-gradient">Devlog</span>
                </h2>
                <p className="text-space-tx/60 mt-2 text-base max-w-xl">
                Do backend corporativo à programação de jogos e modificações. Aqui estão as ideias que movo e os sistemas que construo.
                </p>
            </div>
        </section>

        {/* Highlight Section */}
        <section className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-600 mb-4">DESENVOLVIMENTO DESTACADO</h4>
        </section>

        {/* Featured Section */}
        <section className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Concluídos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    featuredProjs.map(({ title, description, category, github, deploy }: ProjectData) => (
                        <div className="glass-card p-5 flex flex-col gap-3">
                            <h6 className="text-lg font-semibold text-brand-400 border-b border-white/10 pb-2">
                                {title}
                            </h6>
                            <p className="border-b border-white/10 pb-2">
                                <Badge
                                    content={<>
                                        <span className="capitalize">{category}</span>
                                    </>}
                                /><br />
                                {description}
                            </p>
                            {github && (
                                <a 
                                    href={github} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                                >
                                    <Cat size={16} />
                                    <span className="hidden sm:inline">Ver no GitHub</span>
                                </a>
                            )}
                            {deploy && (
                                <a 
                                    href={deploy} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                                >
                                    <CloudUpload size={16} />
                                    <span className="hidden sm:inline">Ver deploy</span>
                                </a>
                            )}
                        </div>
                    ))
                }
            </div>
        </section>

        {/* Planned Section */}
        <section className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Planejados</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    plannedProjs.map(({ title, description, category }: ProjectData) => (
                        <div className="glass-card p-5 flex flex-col gap-3">
                            <h6 className="text-lg font-semibold text-brand-400 border-b border-white/10 pb-2">
                                {title}
                            </h6>
                            <p className="border-b border-white/10 pb-2">
                                <Badge
                                    content={<>
                                        <span className="capitalize">{category}</span>
                                    </>}
                                /><br />
                                {description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    </>)
}