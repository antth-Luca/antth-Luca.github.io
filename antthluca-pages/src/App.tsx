import { useState } from "react";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import { TopNavBar } from "./components/TopNavBar";
import SobreMim from "./pages/SobreMim";
import Projetos from "./pages/Projetos";

export default function App() {
    const [ currentPage, setCurrentPage ] = useState<"sobre" | "projs">("sobre")

    const links = [
        { onClick: () => setCurrentPage("sobre"), label: "Sobre Mim" },
        { onClick: () => setCurrentPage("projs"), label: "Projetos" },
    ]

    return (
        <ContentContainer content={<>
            <TopNavBar
                homeURL="#"
                logoSrc="/LA-sigla.svg"
                title="antthLuca"
                links={links}
            />
            
            <main>
                {currentPage === "sobre" ? <SobreMim goProjectsPage={ () => setCurrentPage("projs") } /> : <Projetos />}
            </main>
            
            <Footer />
        </>}/>
    )
}