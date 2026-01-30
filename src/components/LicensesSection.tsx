import { Shield, Award } from "lucide-react";
import texasLicense from "@/assets/texas-license.png";
import kansasLicense from "@/assets/kansas-license.png";
import indianaLicense from "@/assets/indiana-license.png";
import alaskaLicense from "@/assets/alaska-license.png";
import arkansasLicense from "@/assets/arkansas-license.png";
import californiaLicense from "@/assets/california-license.jpeg";

const licenses = [
  {
    state: "Texas",
    image: texasLicense,
    type: "Life Agent",
    licenseNo: "3302134",
    npn: "21492699"
  },
  {
    state: "California",
    image: californiaLicense,
    type: "Insurance Producer - Life",
    licenseNo: "4448840",
    npn: "21492699"
  },
  {
    state: "Kansas",
    image: kansasLicense,
    type: "Insurance Producer - Life",
    licenseNo: "N/A",
    npn: "21492699"
  },
  {
    state: "Indiana",
    image: indianaLicense,
    type: "Non-Resident Producer - Life",
    licenseNo: "4171766",
    npn: "21492699"
  },
  {
    state: "Alaska",
    image: alaskaLicense,
    type: "Insurance Producer - Life",
    licenseNo: "3003901255",
    npn: "21492699"
  },
  {
    state: "Arkansas",
    image: arkansasLicense,
    type: "Insurance Producer - Life",
    licenseNo: "21492699",
    npn: "21492699"
  }
];

const LicensesSection = () => {
  return (
    <section id="licencias" className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-4 inline-block">Certificaciones Profesionales</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Licenciado en los 50 Estados
          </h2>
          <p className="text-muted-foreground text-lg">
            Con licencias activas en todos los estados de Estados Unidos, puedo asesorarte sin importar dónde te encuentres.
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-6xl mx-auto">
          <div className="card-feature text-center py-12 mb-12 border-2 border-gold/30">
            <div className="icon-circle mx-auto mb-6 w-20 h-20">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              Cobertura Nacional
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Autorizado para operar en los 50 estados de Estados Unidos, ofreciendo protección sin fronteras.
            </p>
          </div>

          {/* License examples */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-gold" />
              <h3 className="font-display font-bold text-xl text-navy">
                Licencias de Ejemplo
              </h3>
            </div>
            <p className="text-muted-foreground">
              Estas son solo algunas de mis licencias estatales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {licenses.map((license) => (
              <div key={license.state} className="card-feature">
                <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-center min-h-[200px]">
                  <img 
                    src={license.image} 
                    alt={`Licencia de ${license.state} - ${license.type}`} 
                    className="w-full h-auto max-h-[250px] object-contain rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-display font-bold text-xl text-navy mb-1">{license.state}</h4>
                  <p className="text-muted-foreground">{license.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {license.licenseNo !== "N/A" && `Licencia No. ${license.licenseNo} | `}NPN: {license.npn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="bg-muted rounded-2xl p-6 text-center mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-navy">Además de estos estados</span>, cuento con licencias activas en los otros 44 estados de la nación, permitiéndome brindarte servicio profesional sin importar tu ubicación.
            </p>
          </div>

          {/* Regulated card */}
          <div className="card-feature text-center py-10 border-2 border-gold/30">
            <div className="icon-circle mx-auto mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-navy mb-4">
              Regulado y Supervisado
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todas nuestras licencias están vigentes y son verificables. Operamos bajo estricta supervisión de los departamentos de seguros estatales para garantizar el cumplimiento de todas las regulaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensesSection;
