import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Dariana <span className="text-gold">Seguros</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Tu socio de confianza en protección financiera. Más de 10 años protegiendo familias en todo Estados Unidos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/70">Seguro de Vida</li>
              <li className="text-primary-foreground/70">IUL (Index Universal Life)</li>
              <li className="text-primary-foreground/70">Planes de Retiro</li>
              <li className="text-primary-foreground/70">Mortgage Protector</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+19545497517" className="hover:text-gold transition-colors">(954) 549-7517</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:dvvainsurance@gmail.com" className="hover:text-gold transition-colors">dvvainsurance@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold" />
                Los 50 Estados de USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light/30 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {currentYear} Dariana Seguros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
