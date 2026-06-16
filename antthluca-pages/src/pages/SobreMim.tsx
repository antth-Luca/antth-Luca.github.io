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
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="flex items-center text-right relative z-10">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-slate-900 text-white px-4">
              Olá, eu sou <span className="text-gradient">Luca Anthony</span> <br className="hidden md:block" />
              eu sou <span className="text-gradient">Dev</span>.
            </h1>
            <img src="/perfil.png" alt="Perfil Luca" className="profile-pic rounded-full" />
          </div>
        </section>
      </>}/>
  )
}