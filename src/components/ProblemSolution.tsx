import { Clock, AlertTriangle, TrendingDown, FileText, CheckCircle, Zap, Shield, BarChart  } from "lucide-react"
import { useTranslation } from 'react-i18next';


const ProblemSolution = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook

  const handleClick = () => {
    // Ejemplo de cómo cambiar el idioma desde cualquier componente
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <section className="py-20 bg-white" id="problema-solucion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('titleSectionTwo')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subTitleSectionTwo')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problema Section */}
          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <AlertTriangle className="h-7 w-7 mr-3" />
                 {t('columOneOneSectionTwo')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">✅ {t('columOneTwoSectionTwoTitle')}</h4>
                    <p className="text-red-700 text-sm mt-1">
                      {t('columOneTwoSectionTwoSubtitle')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">❌  {t('columOneThreeSectionTwoTitle')}</h4>
                    <p className="text-red-700 text-sm mt-1">
                     {t('columOneThreeSectionTwosubtitle')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">⏳ {t('columOneFourSectionTwoTitle')}</h4>
                    <p className="text-red-700 text-sm mt-1">
                      {t('columOneFourSectionTwoSubtitle')}
                    </p>
                  </div>
                </div>

              {/*
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">❌  {t('columTwoSevenSectionTwoTitle')}</h4>
                    <p className="text-red-700 text-sm mt-1">
                     {t('columTwoSevenSectionTwoSubTile')}
                    </p>
                  </div>
                </div>
                */}

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">📉 {t('columFiveSectionTwoTitle')}</h4>
                    <p className="text-red-700 text-sm mt-1">
                      {t('columFiveSectionTwoSubtitle')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">✅ {t('columTwoEightSectionTwoTitle')}</h4>
                    <p className="text-red-700 text-sm mt-1">
                      {t('columTwoEightSectionTwoSubTile')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

             <div className=" pt-1 rounded-lg"> </div>

            {/* *************Impacto Economico*************** */}

            <div className="bg-gray-100 p-6  rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">{t('sectionTwoThreeTitle')}</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-red-600">$250K</div>
                  <div className="text-sm text-gray-600">{t('sectionTwoThreeSubtitleOne')}</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-red-600">40hrs</div>
                  <div className="text-sm text-gray-600">{t('sectionTwoThreeSubtitleTwo')}</div>
                </div>
              </div>
            </div>
          </div>

       

          {/* *****************Solución Section****************** */}
          <div className="space-y-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <CheckCircle className="h-7 w-7 mr-3" />
               {t('titleSectionTwoTwo')}
              </h3>
              
              <div className="space-y-6">

               

                <div className="space-y-4">
                 

                  

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">{t('columTwoThreeSectionTwoTitle')}</h4>
                      <p className="text-green-700 text-sm mt-1">
                       {t('columTwoThreeSectionTwoSubTile')}
                      </p>
                    </div>
                  </div>

                



                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">{t('columTwoOneSectionTwoTitle')}</h4>
                      <p className="text-green-700 text-sm mt-1">
                        {t('columTwoOneSectionTwoSubTile')}
                      </p>
                    </div>
                  </div>


                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <BarChart className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">{t('columTwoFourSectionTwoTitle')}</h4>
                      <p className="text-green-700 text-sm mt-1">
                       {t('columTwoFourSectionTwoSubTile')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">{t('columTwoFiveSectionTwoTitle')}</h4>
                      <p className="text-green-700 text-sm mt-1">
                        {t('columTwoFiveSectionTwoSubTile')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800"> {t('columTwoSixSectionTwoTitle')}</h4>
                      <p className="text-green-700 text-sm mt-1">
                        {t('columTwoSixSectionTwoSubTile')}
                      </p>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>

            
             
             
              {/* ***************Beneficios Medibles************ */}

              
             <div className="bg-white p-3 rounded"> </div>
            <div className="bg-blue-50 p-6 rounded-lg ">
              <h4 className="font-bold text-blue-800 mb-3">{t('sectionTwoThreeTitletwo')}</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-green-600">$400M</div>
                  <div className="text-sm text-gray-600">{t('sectionTwoThreeSubtitleOneTwo')}</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-green-600">30%</div>
                  <div className="text-sm text-gray-600">{t('sectionTwoThreeSubtitleTwoTwo')}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Technology Showcase */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('titleSectionTwoFour')}</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('subtitleSectionTwoFour')}
            </p>
            <img 
              src="/images/fintech-interface.jpg" 
              alt="Interfaz del sistema bancario" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
