import { useEffect } from "react"
import { CONFIG } from "../config"
import ContentContainer from "../components/ContentContainer";
import TopNavBar from "../components/TopNavBar";
import { ROUTES } from "../routes";

export default function SobreMim() {
  useEffect(() => {
    document.title = `Sobre mim${CONFIG.APP_NAME}`
  }, []);

  const links = [
    { url: '#', label: 'Início' },
    { url: ROUTES.EXPERIENCIA, label: 'Experiência' },
    { url: ROUTES.PROJETOS, label: 'Projetos' },
  ];

  return (
      <ContentContainer content={<>
        <TopNavBar
          homeURL='#'
          logoSrc='/LA-sigla.svg'
          title='antthLuca'
          links={links}
        />

        {/* Hero Section */}
        <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
          <div className="flex items-center justify-center mb-8">
            <div className="px-4">
              <h1 className="text-4xl md:text-6xl font-bold mr-6 tracking-tight leading-tight">
                Olá, <br />
                Eu sou <span className="text-gradient">Luca Anthony</span>
              </h1>

              <p>
                Com propósito e humanidade, crio sistemas, conto histórias, movo ideias!
              </p>
            </div>
            <img src="/perfil.png" alt="Perfil Luca" className="rounded-full w-60 h-60 mx-8" />
          </div>

          <div className="glass-card p-8 mb-8">
            <div>
              <h4 className="text-brand-500 mb-2">Sobre mim</h4>
              <p className="text-justify">
                A escola disse "estude programação", mas na minha primeira tentativa, eu odiei. Depois vi aquelas letrinhas coloridas no monitor de um primo e ouvi "você é bom de lógica, vai se dar bem com programação", então houve mais uma tentativa e eu me apaixonei!
                Hoje, com 21 anos, sou formado em Técnico de Desenvolvimento de Sistemas pelo IFPR - Campus Astorga e sou Gestor de TIC no Hospital Regional Cristo Rei de Astorga. Nas horas vagas, ainda desenvolvo... Muitos tipos de coisas, mas sempre assino meus códigos como <span className="text-gradient">antthLuca</span>.
              </p>
            </div>
          </div>

          <div className="mx-8">
            <h4 className="text-brand-500 mb-2">Skills e Tecnologias</h4>
            <div className="flex justify-center gap-4">
              <div className="glass-card">
                <h6 className="text-brand-400 mb-1">Frontend</h6>
                <div className="badge">Angular</div>
                <div className="badge">React</div>
              </div>

              <div className="glass-card">
                <h6 className="text-brand-400 mb-1">Backend</h6>
                <div className="badge">Django</div>
                <div className="badge">Spring Boot</div>
                <div className="badge">Express.js</div>
              </div>

              <div className="glass-card">
                <h6 className="text-brand-400 mb-1">Databases</h6>
                <div className="badge">SQL</div>
                <div className="badge">Neo4j</div>
                <div className="badge">MongoDB</div>
              </div>

              <div className="glass-card">
                <h6 className="text-brand-400 pb-1">Gamedev</h6>
                <div className="badge">Godot & GDScript</div>
                <div className="badge">Minecraft NeoForge</div>
              </div>
            </div>
          </div>
        </section>
      </>}/>
  )
}