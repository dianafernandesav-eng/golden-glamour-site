const companies = [
  { name: "F&G", years: "80+", description: "Más de 80 años" },
  { name: "AMERICO", years: "114+", description: "Fundada en 1910" },
  { name: "National Life Group", years: "175+", description: "Fundada en 1848" },
  { name: "Athene", years: "114+", description: "Fundada en 1910" },
  { name: "Mutual of Omaha", years: "115+", description: "Fundada en 1909" },
];

const CompaniesSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge mb-4 inline-block">Confianza y Respaldo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
            Compañías con las que Trabajo
          </h2>
          <p className="text-muted-foreground text-lg">
            Represento a las compañías de seguros más sólidas y confiables de Estados Unidos, con más de 80 años de experiencia combinada protegiendo familias.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {companies.map((company, index) => (
            <div key={index} className="card-feature text-center py-8">
              <div className="h-16 flex items-center justify-center mb-4">
                <span className="font-display font-bold text-lg text-navy/70">
                  {company.name}
                </span>
              </div>
              <span className="text-3xl font-bold text-gold">{company.years}</span>
              <p className="text-sm text-muted-foreground mt-1">{company.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          Todas estas compañías tienen calificaciones A o superior por su solidez financiera y confiabilidad.
        </p>
      </div>
    </section>
  );
};

export default CompaniesSection;
