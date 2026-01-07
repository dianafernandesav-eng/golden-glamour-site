import { Check } from "lucide-react";

const benefits = [
  "Licencia Nacional",
  "Consulta Gratuita",
  "Respuesta Rápida",
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="gradient-navy rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-6">
            ¿Por Qué Elegir Mis Servicios?
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto mb-10 text-lg">
            No se trata solo de vender seguros—se trata de construir relaciones duraderas basadas en la confianza y el compromiso. Mi experiencia nacional me permite ofrecerte las mejores opciones del mercado, sin importar dónde te encuentres en Estados Unidos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-3"
              >
                <Check className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
