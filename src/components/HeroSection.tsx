import { Phone, ArrowRight } from "lucide-react";
import agentPortrait from "@/assets/agent-portrait.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="gradient-navy min-h-screen pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <span className="section-badge-dark mb-6 inline-block">
              Licenciado en los 50 Estados
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Protege el futuro{" "}
              <span className="text-gold">de tu familia</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Con más de 10 años de experiencia, te ayudo a construir un futuro financiero seguro con soluciones de seguros personalizadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contacto" className="btn-gold">
                <Phone className="w-5 h-5" />
                Contáctame Ahora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#servicios" className="btn-gold-outline border-gold text-primary-foreground hover:text-navy">
                <Phone className="w-5 h-5" />
                Solicitar Cotización
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <span className="text-4xl md:text-5xl font-bold text-gold">6+</span>
                <p className="text-primary-foreground/80 mt-1">Años de Experiencia</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-bold text-primary-foreground">50</span>
                <p className="text-primary-foreground/80 mt-1">Estados Licenciados</p>
              </div>
            </div>
          </div>

          {/* Right Content - Agent Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Golden circle border with image inside */}
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gold overflow-hidden flex items-center justify-center">
                <img
                  src={agentPortrait}
                  alt="Dariana Velazco - Agente de Seguros"
                  className="w-[130%] h-[130%] object-cover object-top"
                />
              </div>

              {/* Name card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl p-4 min-w-[280px] text-center">
                <h3 className="font-display font-bold text-lg text-foreground">
                  Dariana Velazco
                </h3>
                <p className="text-gold font-medium">Planes de Ahorro y Retiro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
