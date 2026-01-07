import { Heart, Umbrella, PiggyBank, Home, Users, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Protege el futuro de tus seres queridos con pólizas de vida diseñadas para dar tranquilidad a tu familia.",
    features: ["Cobertura Permanente", "Cobertura Temporal", "Valor en Efectivo"],
  },
  {
    icon: Umbrella,
    title: "IUL (Index Universal Life)",
    description: "Combina protección de vida con crecimiento de ahorros vinculado a índices de mercado.",
    features: ["Crecimiento Protegido", "Flexibilidad de Pagos", "Beneficios Fiscales"],
  },
  {
    icon: PiggyBank,
    title: "Planes de Retiro con IUL",
    description: "Estrategias de retiro utilizando IUL para acumular ahorros con protección y crecimiento garantizado.",
    features: ["Retiro Libre de Impuestos", "Crecimiento Protegido", "Herencia Garantizada"],
  },
  {
    icon: Home,
    title: "Mortgage Protector",
    description: "Protege tu hogar y asegura que tu familia nunca pierda su vivienda ante cualquier eventualidad.",
    features: ["Cobertura de Hipoteca", "Protección Familiar", "Pago Decreciente"],
  },
  {
    icon: Users,
    title: "Seguro Familiar",
    description: "Planes integrales que protegen a toda la familia con coberturas adaptadas a cada etapa de vida.",
    features: ["Cobertura Infantil", "Accidentes", "Enfermedades Críticas"],
  },
  {
    icon: GraduationCap,
    title: "Ahorro Educativo con IUL",
    description: "Utiliza IUL para acumular fondos para la educación universitaria de tus hijos con crecimiento protegido.",
    features: ["Crecimiento Garantizado", "Acceso Flexible", "Beneficios Fiscales"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-4 inline-block">Servicios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Soluciones Completas de Seguros
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrezco una amplia gama de productos diseñados para proteger cada aspecto de tu vida financiera.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-feature">
              <div className="icon-circle mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-navy mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full btn-gold-outline text-sm">
                Más Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
