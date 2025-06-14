import React from "react";
import {
  Code,
  Megaphone,
  ArrowRight,
  GraduationCap,
  TvMinimalPlay,
  QrCode,
} from "lucide-react";
import Link from "next/link";

const ServiceServices = () => {
  const services = [
    {
      id: "01",
      title: "Transformation Numérique",
      description:
        "Modernisez vos processus et opérations avec les dernières technologies numériques.",
      icon: Code,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "02",
      title: "Audiovisuel",
      description:
        "Créez des supports visuels attrayants pour atteindre vos objectifs.",
      icon: TvMinimalPlay,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      isHighlighted: false,
    },

    {
      id: "03",
      title: "Digital Marketing",
      description:
        "Boostez la visibilité de vos produits ou services et générez des ventes.",
      icon: QrCode,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "04",
      title: "Communication",
      description:
        "Gérez votre communication interne et externe pour maintenir une image positive.",
      icon: Megaphone,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: "05",
      title: "Formation",
      description:
        "Gérez votre communication interne et externe pour maintenir une image positive.",
      icon: GraduationCap,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-[600px] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 py-20 mb-10">
        <h1 className="text-center text-[#A639FF] text-3xl  font-bold">
          Nos Services
        </h1>
        <h2 className="text-sm text-center sm:text-base max-w-2xl mx-auto">
          Boostez votre entreprise avec nos services digitaux personnalisés,
          conçus pour répondre à vos besoins spécifiques et accélérer votre
          succès dans le monde numérique.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative group max-w-xs sm:max-w-full mx-auto ${service.bgColor} rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group overflow-hidden hover:bg-gradient-to-br from-purple-500 to-purple-600 shadow-2xl`}
              >
                {/* Background decoration */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/5 rounded-full"></div>

                {/* Service number */}
                <div
                  className={`absolute top-6 right-6 text-6xl font-bold ${
                    service.isHighlighted ? "text-white/20" : "text-gray-200"
                  }`}
                >
                  {service.id}
                </div>

                {/* Icon container */}
                <div
                  className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-100`}
                >
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-2xl group-hover:text-white font-bold ${service.textColor} mb-4`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`group-hover:text-white ${service.textColor} ${
                      service.isHighlighted ? "text-white/90" : "text-gray-600"
                    } mb-8 leading-relaxed`}
                  >
                    {service.description}
                  </p>

                  {/* Read more button */}
                  <Link
                    href={"/service"}
                    className={`inline-flex items-center gap-2 px-6 py-3 ${
                      service.isHighlighted
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                    } rounded-xl font-semibold transition-all duration-300 group-hover:gap-4`}
                  >
                    READ MORE
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceServices;
