import { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      
      const response = await fetch("https://formspree.io/f/xaqjbqar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado correctamente!",
          description: "Nos pondremos en contacto contigo pronto.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="text-primary-foreground">
            <span className="section-badge-dark mb-4 inline-block">Contacto</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              ¿Listo para Proteger tu Futuro?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Estoy aquí para ayudarte a encontrar la mejor solución de seguros para ti y tu familia. Contáctame hoy para una consulta gratuita.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Teléfono</p>
                  <a href="tel:+19545497517" className="text-primary-foreground font-medium hover:text-gold transition-colors">
                    (954) 549-7517
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Email</p>
                  <a href="mailto:dvvainsurance@gmail.com" className="text-primary-foreground font-medium hover:text-gold transition-colors">
                    dvvainsurance@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Cobertura</p>
                  <p className="text-primary-foreground font-medium">
                    Los 50 Estados de USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-3xl p-8 shadow-xl">
            <h3 className="font-display font-bold text-2xl text-navy mb-6">
              Solicita tu Cotización Gratis
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="vida">Seguro de Vida</option>
                  <option value="iul">IUL (Index Universal Life)</option>
                  <option value="retiro">Plan de Retiro</option>
                  <option value="mortgage">Mortgage Protector</option>
                  <option value="familiar">Seguro Familiar</option>
                  <option value="educativo">Ahorro Educativo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                  placeholder="Cuéntame sobre tus necesidades..."
                />
              </div>

              <button 
                type="submit" 
                className="btn-gold w-full justify-center text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
