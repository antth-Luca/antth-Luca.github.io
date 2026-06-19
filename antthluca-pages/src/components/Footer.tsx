import { BriefcaseBusiness, Camera, Cat, Mail, Send } from "lucide-react"

export default function Footer() {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-white/5 bg-space-bg/80 backdrop-blur-md pt-12 pb-8 px-6 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Assinatura à esquerda */}
            <div className="text-center md:text-left">
                <p className="text-lg font-bold text-space-tx">
                <span className="text-gradient">antthLuca</span>
                </p>
                <p className="text-sm text-space-tx/50 mt-1">
                    Com propósito e humanidade, crio sistemas, conto histórias, movo ideias!
                </p>
            </div>

            {/* Grid de Redes Sociais / Contatos */}
            <div className="flex flex-wrap justify-center gap-4">
                
                {/* E-mail */}
                <a 
                    href="mailto:lucamafort05@gmail.com" 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                    title="Enviar E-mail"
                >
                    <Mail size={16} />
                    <span className="hidden sm:inline">E-mail</span>
                </a>

                {/* Telegram */}
                <a 
                    href="https://t.me/antthLuca" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                >
                    <Send size={16} />
                    <span className="hidden sm:inline">Telegram</span>
                </a>

                {/* LinkedIn */}
                <a 
                    href="https://linkedin.com/in/antth-Luca"
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                >
                    <BriefcaseBusiness size={16} />
                    <span className="hidden sm:inline">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a 
                    href="https://github.com/antth-Luca" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                >
                    <Cat size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                </a>

                {/* Instagram */}
                <a 
                    href="https://instagram.com/antth.luca" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-space-tx/80 hover:text-brand-400 hover:border-brand-500/30 transition-all text-sm"
                >
                    <Camera size={16} />
                    <span className="hidden sm:inline">Instagram</span>
                </a>

            </div>
            </div>

            {/* Direitos Autorais bem discreto embaixo */}
            <div className="max-w-6xl mx-auto border-t border-white/5 mt-8 pt-6 text-center text-xs text-space-tx/30">
            <p>© {anoAtual} Luca Anthony. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}