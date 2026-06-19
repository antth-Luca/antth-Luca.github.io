import { useEffect } from "react"
import { CONFIG } from "../config"
import { ArrowRight } from "lucide-react";
import Badge from "../components/Badge";

interface SMProps {
  goProjectsPage: () => void
}

export default function SobreMim({ goProjectsPage }: SMProps) {
  useEffect(() => {
    document.title = `Sobre mim${CONFIG.APP_NAME}`
  }, [])

  return (<>
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-16">
        
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-space-tx">
            Olá, <br />
            Eu sou <span className="text-gradient">Luca Anthony</span>
          </h1>
          <p className="text-lg text-space-tx/80 max-w-lg mx-auto md:mx-0">
            Com propósito e humanidade, crio sistemas, conto histórias, movo ideias!
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src="/perfil.png" 
            alt="Perfil Luca" 
            className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover border-2 border-brand-500/30 shadow-xl" 
          />
        </div>

      </div>
    </section>

    {/* About Me Section */}
    <section className="relative pb-20 px-6 max-w-6xl mx-auto">
      <h4 className="text-xl font-bold text-brand-500 mb-4">Sobre mim</h4>
      <div className="glass-card p-6 md:p-8 mb-16">
        <p className="text-justify text-space-tx/90 leading-relaxed">
          A escola disse "estude programação", mas na minha primeira tentativa, eu odiei. 
          Depois vi aquelas letrinhas coloridas no monitor de um primo e ouvi 
          <span className="italic text-brand-300"> "você é bom de lógica, vai se dar bem com programação"</span>, 
          então houve mais uma tentativa e eu me apaixonei!
        </p>
        <p className="text-justify text-space-tx/90 leading-relaxed mt-4">
          Hoje, com 21 anos, sou formado em Técnico de Desenvolvimento de Sistemas pelo IFPR - Campus Astorga e 
          sou Gestor de TIC no Hospital Regional Cristo Rei de Astorga. Nas horas vagas, ainda desenvolvo... 
          Muitos tipos de coisas, mas sempre assino meus códigos como <span className="text-gradient font-semibold">antthLuca</span>.
        </p>
      </div>

      {/* Skills */}
      <h4 className="text-xl font-bold text-brand-500 mb-6">Skills & Tecnologias</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card Frontend */}
        <div className="glass-card p-5 flex flex-col gap-3">
          <h6 className="text-lg font-semibold text-brand-400 border-b border-white/10 pb-2">Frontend</h6>
          <div className="flex flex-wrap gap-2">
            <Badge content='Angular' />
            <Badge content='React' />
          </div>
        </div>

        {/* Card Backend */}
        <div className="glass-card p-5 flex flex-col gap-3">
          <h6 className="text-lg font-semibold text-brand-400 border-b border-white/10 pb-2">Backend</h6>
          <div className="flex flex-wrap gap-2">
            <Badge content='Django' />
            <Badge content='Spring Boot' />
            <Badge content='Express.js' />
          </div>
        </div>

        {/* Card Databases */}
        <div className="glass-card p-5 flex flex-col gap-3">
          <h6 className="text-lg font-semibold text-brand-400 border-b border-white/10 pb-2">Databases</h6>
          <div className="flex flex-wrap gap-2">
            <Badge content='SQL' />
            <Badge content='Neo4j' />
            <Badge content='MongoDB' />
          </div>
        </div>

        {/* Card Gamedev */}
        <div className="glass-card p-5 flex flex-col gap-3">
          <h6 className="text-lg font-semibold text-brand-400 border-b border-white/10 pb-2">Gamedev</h6>
          <div className="flex flex-wrap gap-2">
            <Badge content='Godot & GDScript' />
            <Badge content='Minecraft NeoForge' />
          </div>
        </div>

      </div>
    </section>

    {/* Journey Section */}
    <section id="experiencia" className="relative pb-20 px-6 max-w-6xl mx-auto">
      <h4 className="text-xl font-bold text-brand-500 mb-4">Experiência & Formação</h4>
      <div className="relative border-l-2 border-brand-800/40 ml-4 md:ml-6 flex flex-col gap-8">
        
        {/* Item 1: Cargo Atual */}
        <div className="relative pl-8 md:pl-10">
          {/* Círculo do Ano posicionado sobre a linha */}
          <div className="absolute -left-[17px] top-1 bg-brand-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
            2026
          </div>
          
          {/* Card da Experiência */}
          <div className="glass-card p-6 flex flex-col gap-1">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Cargo Atual</span>
            <h5 className="text-lg font-bold text-space-tx">Gestor de TIC</h5>
            <span className="text-sm text-brand-300 font-medium">Hospital Regional Cristo Rei de Astorga</span>
            <p className="text-sm text-space-tx/70 mt-2 text-justify">
              Gerenciamento da infraestrutura de Tecnologia da Informação e Comunicação, 
              garantindo a alta disponibilidade dos sistemas e suporte técnico especializado.
            </p>
          </div>
        </div>

        {/* Item 2: Formação Acadêmica */}
        <div className="relative pl-8 md:pl-10">
          {/* Círculo do Ano posicionado sobre a linha */}
          <div className="absolute -left-[17px] top-1 bg-brand-800 text-brand-300 text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-space-bg shadow-lg">
            2025
          </div>
          
          {/* Card da Formação */}
          <div className="glass-card p-6 flex flex-col gap-1">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Formação</span>
            <h5 className="text-lg font-bold text-space-tx">Técnico em Desenvolvimento de Sistemas</h5>
            <span className="text-sm text-brand-300 font-medium">IFPR - Campus Astorga</span>
            <p className="text-sm text-space-tx/70 mt-2 text-justify">
              Formação técnica focada em lógica de programação, engenharia de software, bancos de dados 
              e desenvolvimento de aplicações web.
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* CTA Section */}
    <section id="projetos" className="relative pb-20 px-6 max-w-6xl mx-auto">
      <h4 className="text-xl font-bold text-brand-500 mb-4">Portfólio & Devlog</h4>
      <div className="glass-card p-6 md:p-8 mb-16">

        <h3 className="font-bold text-space-tx mb-4">
          Quer ver minhas criações de perto?
        </h3>
        <p className="text-space-tx/70 max-w-xl">
          Explore meus sistemas concluídos, jogos independentes e acompanhe o roadmap em tempo real dos meus projetos ativos.
        </p>
        <div className="w-full md:w-auto flex justify-center">
          <button
            onClick={goProjectsPage}
            className="group flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-600/30 w-full sm:w-auto justify-center"
          >
            Conhecer Projetos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  </>)
}