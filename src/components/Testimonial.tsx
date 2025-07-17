import { Quote, Star } from "lucide-react"
import { useTranslation } from 'react-i18next';


const Testimonial = () => {
  
  const { t, i18n } = useTranslation(); // Initialize translation hook

  const handleClick = () => {
    // Ejemplo de cómo cambiar el idioma desde cualquier componente
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };



  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700" id="exito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <Quote className="h-16 w-16 text-blue-300 opacity-50" />
              
              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed">
                {t('TestimonialTitleOne')} <span className="text-yellow-300 font-bold">{t('TestimonialTitleTwo')}</span> {t('TestimonialTitleThree')} <span className="text-yellow-300 font-bold">{t('TestimonialTitleFour')}</span>."
              </blockquote>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

               {/* *************Impacto Economico***************  
              <div className="border-l-4 border-blue-300 pl-6">
                <div className="font-bold text-xl">Javier R.</div>
                <div className="text-blue-200">{t('TestimonialSubTitleFive')}</div>
                <div className="text-blue-300 font-semibold">{t('Banco Regional S.A.')}</div>
              </div>
                */} 
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">{t('ResultTitle')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">70%</div>
                  <div className="text-sm text-blue-200">{t('ResultOne')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">99.8%</div>
                  <div className="text-sm text-blue-200">{t('ResultTwo')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">€180K</div>
                  <div className="text-sm text-blue-200">{t('ResultThree')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">24/7</div>
                  <div className="text-sm text-blue-200">{t('ResultFour')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-8">
              <img 
                src="/images/bancos.png" 
                alt="Equipo bancario profesional" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              
              {/* Success Metrics Overlay */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✅ {t('ImplementationTitle')}
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🏆 {t('ImplementationOne')}
              </div>

              {/* Company Info 
              <div className="mt-6 bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900">{t('ImplementationTwo')}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• {t('ImplementationThree')}</div>
                  <div>• {t('ImplementationFour')}</div>
                  <div>• {t('ImplementationFive')}</div>
                  <div>• {t('ImplementationSix')}</div>
                </div>
              </div>
                */}
            </div>

            {/* Floating Stats */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Additional Success Stories 
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-2">85%</div>
            <div className="text-sm text-blue-200">{t('SuccessStoriesTitleOne')}</div>
            <div className="text-xs text-blue-300 mt-2">{t('SuccessStoriesTitleTwo')}</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-2">30 {t('Success30')}</div>
            <div className="text-sm text-blue-200">{t('SuccessStoriesTitleTwoOne')}</div>
            <div className="text-xs text-blue-300 mt-2">{t('SuccessStoriesTitleTwoOneTwo')}</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-2">€500K</div>
            <div className="text-sm text-blue-200">{t('SuccessStoriesTitleThreeOne')}</div>
            <div className="text-xs text-blue-300 mt-2">{t('SuccessStoriesTitleThreeOneTwo')}</div>
          </div>
        </div>
          */}

      </div>
    </section>
  )
}

export default Testimonial
