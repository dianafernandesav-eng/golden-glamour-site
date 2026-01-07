import { Shield, Award, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Protección Garantizada",
    description: "Planes de seguros diseñados para proteger a tu familia en cualquier circunstancia.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de una década ayudando a familias a asegurar su futuro financiero.",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    description: "Atención individualizada para encontrar la mejor solución para ti.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Asegurado",
    description: "Estrategias de ahorro e inversión que maximizan tu patrimonio.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-4 inline-block">Sobre Mí</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Tu Socio en Protección Financiera
          </h2>
          <p className="text-muted-foreground text-lg">
            Como agente de seguros licenciado en los 50 estados de Estados Unidos, mi misión es brindarte tranquilidad financiera. Con 10 años de experiencia, entiendo que cada familia es única y merece un plan personalizado que se adapte a sus necesidades específicas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card-feature text-center">
              <div className="icon-circle mx-auto mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
