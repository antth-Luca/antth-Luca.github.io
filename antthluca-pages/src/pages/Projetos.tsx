import { useEffect, useState } from "react"
import { CONFIG } from "../config"
import Badge from "../components/Badge"
import { Bug, Cat, CheckCircle2, CloudUpload, Flame, Gamepad2, ShieldAlert, Square, SquareCheckBig, Wrench, Zap } from "lucide-react"

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
    const [ currentTab, setCurrentTab ] = useState<"beta" | "versoes">("beta")

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
            <h4 className="text-xl font-bold text-brand-600 mb-4 flex items-center gap-2">
                <Flame />
                DESENVOLVIMENTO DESTACADO
            </h4>
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-900/20 via-white/[0.01] to-transparent relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

                {/* ================= CABEÇALHO DO PROJETO ================= */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-brand-500/10 text-brand-400 rounded-2xl flex items-center justify-center border border-brand-500/20 shadow-lg shrink-0">
                            <img 
                                src="/logo-celestia.png" 
                                alt="Celestia Logo" 
                                className="w-12 h-12 object-contain error:hidden"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                            <Gamepad2 size={32} className="absolute text-brand-400/20 md:group-hover:text-brand-400" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="text-2xl md:text-3xl font-bold text-space-tx tracking-tight">Celestia</h3>
                                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase bg-brand-500 text-white rounded-full tracking-wider animate-pulse">
                                    Fase Pré-Alpha
                                </span>
                                <span className="px-2 py-0.5 text-[10px] font-semibold bg-white/5 border border-white/10 text-brand-300 rounded-md">
                                    v1.26-prealpha
                                </span>
                            </div>
                            <p className="text-sm text-space-tx/60 mt-1">Jogo 2D top-down de sobrevivência e gamedev independente desenvolvido em Godot Engine.</p>
                        </div>
                    </div>
                </div>

                {/* ================= BANNER DE AVISO (BETA FECHADA) ================= */}
                <div className="mb-8 p-4 rounded-xl bg-brand-500/5 border border-brand-500/20 text-xs md:text-sm text-space-tx/80 flex gap-3 items-start">
                    <ShieldAlert className="text-brand-400 shrink-0 mt-0.5" size={18} />
                    <div>
                        <span className="font-bold text-brand-300">Nota de Desenvolvimento:</span> As versões de fundação <a href="https://github.com/antth-Luca/godot-Celestia/releases/tag/Pre-alpha" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300">Pre-alpha</a> e <a href="https://github.com/antth-Luca/godot-Celestia/releases/tag/Alpha" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300">Alpha</a> continuam abertas para testes. O ciclo Beta e os futuros Atos tornam-se privados para proteção de propriedade intelectual e comercial.
                    </div>
                </div>

                {/* ================= BOTÕES DE ALTERNÂNCIA DE ABAS ================= */}
                <div className="flex border-b border-white/5 mb-6 gap-4 text-sm">
                    <button 
                        onClick={() => setCurrentTab("beta")}
                        className={`pb-3 font-semibold transition-all relative ${currentTab === "beta" ? "text-brand-400" : "text-space-tx/40 hover:text-space-tx/70"}`}
                    >
                        Sprint Atual (v1.26-prealpha)
                        {currentTab === "beta" && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-500" />}
                    </button>
                    <button 
                        onClick={() => setCurrentTab("versoes")}
                        className={`pb-3 font-semibold transition-all relative ${currentTab === "versoes" ? "text-brand-400" : "text-space-tx/40 hover:text-space-tx/70"}`}
                    >
                        Linha do Tempo de Versões
                        {currentTab === "versoes" && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-500" />}
                    </button>
                </div>

                {/* ================= CONTEÚDO DA ABA 1: SPRINT DA BETA ================= */}
                {currentTab === "beta" && (
                    <div className="grid grid-cols-1 gap-6 animate-in fade-in duration-300">
                    
                        <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                            {[
                                { c: false, t: "Jogador" },
                                { c: false, t: "Mundo base (superfície)" },
                                { c: false, t: "Inventário do Jogador (inspirado no mod Mouse Tweaks)" },
                                { c: false, t: "Itens dropados (no chão)" },
                                { c: false, t: "Sistema de eventos com Signals" },
                                { c: false, t: "Sistema de registro de conteúdo" },
                                { c: false, t: "Sistema de DataComponents (para entidades, estruturas e itens)" },
                                { c: false, t: "HUD do Jogador" },
                                { c: false, t: "Primeiro inimigo: Zumbi" },
                                { c: false, t: "Sistema de dano" },
                                { c: false, t: "Sistema de ressurreição do Jogador" },
                                { c: false, t: "Jogador" },
                                { c: false, t: "Jogador" },
                                { c: false, t: "Jogador" },
                                { c: false, t: "Jogador" },
                                { c: false, t: "Jogador" },
                                { c: false, t: "Jogador" },
                                { c: false, t: "Jogador" },
                            ].map((item) => (
                                <div className="p-3 border rounded-xl flex items-center justify-between text-xs transition-all text-space-tx/50 bg-white/5 border-white/5">
                                    <div className="flex items-center gap-3">
                                        {item.c ? (
                                            <SquareCheckBig className="text-green-500 font-bold" />
                                        ) : (
                                            <Square className="text-red-500/50" />
                                        )}
                                        <span className="font-medium text-space-tx">{item.t}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                )}

                {/* ================= CONTEÚDO DA ABA 2: TIMELINE DE VERSÕES ================= */}
                {currentTab === "versoes" && (
                    <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar animate-in fade-in duration-300">
                        {[
                            { v: "v1.26-prealpha", t: "Fase Pré-alpha (Ciclo Dia/Noite, Fome, Fabricação)", s: "Em Desenvolvimento", c: "text-brand-400 bg-brand-500/10 border-brand-500/20" },
                            { v: "v1.26-alpha", t: "Fase Alpha (Chefes, Relíquias e Cultivo)", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26-beta", t: "Beta Fechada", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26.1.1", t: "Ato 1 (Entrega do MVP)", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26.1.2", t: "Novos Horizontes (Estruturas e Biomas)", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26.1.3", t: "Vamos ao combate! (Armas e Comerciantes)", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26.1.4", t: "MagEra (Sistema de Mana e Pedras Preciosas)", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26.1.5", t: "Cozinheiros a postos! (Novos animais e comidas)", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26.1.6", t: "Festeiro (NPCs, decorações e contas)", s: "Planejada", c: "text-space-tx/50 bg-white/5 border-white/5" },
                            { v: "v1.26.2.1", t: "Ato 2 (Mais história)", s: "Planejando...", c: "text-space-tx/50 bg-white/5 border-white/5" }
                        ].map((item) => (
                            <div key={item.v} className={`p-3 border rounded-xl flex items-center justify-between text-xs transition-all ${item.c}`}>
                                <div className="flex items-center gap-3">
                                    <span className="font-mono font-bold bg-white/5 px-2 py-0.5 rounded text-space-tx/80">{item.v}</span>
                                    <span className="font-medium text-space-tx">{item.t}</span>
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">{item.s}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Mensagem de Rodapé do Devlog */}
                <p className="text-[11px] text-space-tx/40 mt-6 text-center italic">
                * Nota: O desenvolvimento ocorre nos blocos de tempo livre, focado na arquitetura limpa e engenharia de sistemas de gamedev.
                </p>
            </div>
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