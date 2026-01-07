import { Shield, Award } from "lucide-react";

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
        <div className="max-w-4xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Texas License */}
            <div className="card-feature">
              <div className="bg-muted rounded-xl p-8 mb-4 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy">TX</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Documento de Licencia</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-display font-bold text-xl text-navy mb-1">Texas</h4>
                <p className="text-muted-foreground">General Lines Agent</p>
                <p className="text-sm text-muted-foreground">Licencia No. 3327744</p>
              </div>
            </div>

            {/* California License */}
            <div className="card-feature">
              <div className="bg-muted rounded-xl p-8 mb-4 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy">CA</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Documento de Licencia</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-display font-bold text-xl text-navy mb-1">California</h4>
                <p className="text-muted-foreground">Insurance Producer</p>
                <p className="text-sm text-muted-foreground">Licencia No. 4425759</p>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="bg-muted rounded-2xl p-6 text-center mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-navy">Además de estos estados</span>, cuento con licencias activas en los otros 46 estados de la nación, permitiéndome brindarte servicio profesional sin importar tu ubicación.
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
