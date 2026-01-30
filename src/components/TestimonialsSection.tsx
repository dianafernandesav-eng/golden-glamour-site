import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "Miami, FL",
    service: "Seguro de Vida Familiar",
    text: "Dariana nos ayudó a encontrar el plan perfecto para nuestra familia. Su conocimiento y paciencia fueron increíbles. Ahora dormimos tranquilos sabiendo que nuestros hijos están protegidos.",
  },
  {
    name: "Roberto Martínez",
    location: "Houston, TX",
    service: "IUL (Index Universal Life)",
    text: "La mejor decisión que tomamos fue contratar un IUL con Dariana. No solo tenemos protección, sino que nuestros ahorros están creciendo. Su explicación fue clara y profesional.",
  },
  {
    name: "Carmen Silva",
    location: "Los Angeles, CA",
    service: "Plan de Retiro",
    text: "Excelente servicio. Dariana me explicó todas las opciones sin presiones y encontramos el plan ideal para mi retiro. Su experiencia se nota en cada consejo.",
  },
  {
    name: "Jorge Ramírez",
    location: "Chicago, IL",
    service: "Mortgage Protector",
    text: "Como dueño de negocio, necesitaba proteger mi empresa. Dariana estructuró un plan completo que cubre a mis empleados clave. Muy recomendado.",
  },
  {
    name: "Ana Fernández",
    location: "Phoenix, AZ",
    service: "Seguro Familiar",
    text: "Contraté un seguro para mis padres mayores y Dariana hizo todo el proceso súper fácil. Siempre disponible para responder preguntas. Una profesional.",
  },
  {
    name: "Pedro López",
    location: "Dallas, TX",
    service: "Ahorro Educativo",
    text: "Llevo 3 años trabajando con Dariana y cada año revisa mi póliza para asegurar que tengo la mejor cobertura. Ese nivel de servicio es difícil de encontrar.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-4 inline-block">Testimonios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Lo Que Dicen Mis Clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            La confianza de mis clientes es mi mayor logro. Lee sus experiencias reales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-feature">
              {/* Stars and Quote */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-5xl text-gold/30 font-display leading-none">"</span>
              </div>

              {/* Quote Text */}
              <p className="text-muted-foreground italic mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-navy">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-sm text-gold font-medium">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
