import {
  Database,
  FileBarChart,
  Shield,
  Users,
  BarChart3,
  Smartphone,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const KeyFeatures = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const handleClick = () => {
    // Ejemplo de cómo cambiar el idioma desde cualquier componente
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: t("features.feature1.title"),
      description: t("features.feature1.description"),
      color: "bg-blue-500",
    },
    {
      icon: <FileBarChart className="h-8 w-8" />,
      title: t("features.feature2.title"),
      description: t("features.feature2.description"),
      color: "bg-green-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t("features.feature3.title"),
      description: t("features.feature3.description"),
      color: "bg-purple-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t("features.feature4.title"),
      description: t("features.feature4.description"),
      color: "bg-orange-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t("features.feature5.title"),
      description: t("features.feature5.description"),
      color: "bg-red-500",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t("features.feature6.title"),
      description: t("features.feature6.description"),
      color: "bg-cyan-500",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      id="caracteristicas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-lg text-white mb-6`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Features Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t("Cutting-edgetechnologyTitle")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("Cutting-edgetechnologyTitleOne")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("Cutting-edgetechnologySubTitleOne")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {" "}
                      {t("Cutting-edgetechnologyTitleTwo")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("Cutting-edgetechnologySubTitleTwo")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("Cutting-edgetechnologyTitleThree")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("Cutting-edgetechnologySubTitleThree")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("Cutting-edgetechnologyTitleFour")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("Cutting-edgetechnologySubTitleFour")}
                    </p>
                  </div>
                </div>

                

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("Cutting-edgetechnologyTitleFive")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("Cutting-edgetechnologySubTitleFive")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("Cutting-edgetechnologyTitleSix")}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t("Cutting-edgetechnologySubTitleSix")}
                    </p>
                  </div>
                </div>


              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {t("AnalyticsAvancedTitle")}
              </h3>

              <img
                src="/images/gifcc.gif"
                alt="Dashboard de analytics bancarios"
                className="w-full rounded-lg shadow-2xl mb-6"
              />

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">
                    {t("AnalyticsAvancedTitleOne")}
                  </h4>
                  <p className="text-blue-100 text-sm">
                    {t("AnalyticsAvancedSubTitleOne")}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">
                    {t("AnalyticsAvancedTitleTwo")}
                  </h4>
                  <p className="text-blue-100 text-sm">
                    {t("AnalyticsAvancedSubTitleTwo")}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">
                    {t("AnalyticsAvancedTitleThree")}
                  </h4>
                  <p className="text-blue-100 text-sm">
                    {t("AnalyticsAvancedSubTitleThree")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
