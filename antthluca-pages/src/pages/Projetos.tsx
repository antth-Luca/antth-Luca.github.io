import { useEffect, useState } from "react"
import { CONFIG } from "../config"

interface FeaturedProject {
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
    const [featuredProjs, setFeaturedProjs] = useState<FeaturedProject[]>([]);
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
            .then((data: FeaturedProject[]) => {
                setFeaturedProjs(data)
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
            <h4 className="text-xl font-bold text-brand-600 mb-4">DESTAQUE ATUAL</h4>
        </section>

        {/* Featured Section */}
        <section className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Concluídos</h4>
        </section>

        {/* Planned Section */}
        <section className="relative pb-20 px-6 max-w-6xl mx-auto">
            <h4 className="text-xl font-bold text-brand-500 mb-4">Planejados</h4>
        </section>
    </>)
}