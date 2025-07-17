import { Shield, Mail, Phone, MapPin, Clock, Award, Users, Building } from "lucide-react"
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook

  const handleClick = () => {
    // Ejemplo de cómo cambiar el idioma desde cualquier componente
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              
              <div>
                 {/* Logo */}
              <img src="/images/logooficial.webp" alt="https://consulbank.com.ve" className="h-12 w-auto" />
                <p className="text-gray-400 text-sm">{t('FooterL1')}</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t('FooterL2')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">{t('FooterL3')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">{t('FooterL4')}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">{t('FooterL5')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-300">{t('FooterL6')}</span>
                </div>
                
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              {t('FooterL8')}
               </p>
              <div className="flex items-center space-x-3">
        
        <a 
          href="https://twitter.com/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition md:block"
          aria-label="Twitter"
        >
          <img src="/images/x.svg" alt="Twitter" className="h-4 w-4 m-3" />
        </a>

        {/* LinkedIn - Ocultar en móvil */}
        <a 
          href="https://linkedin.com/company/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition md:block"
          aria-label="LinkedIn"
        >
          <img src="/images/linkedin.svg" alt="LinkedIn" className="h-4 w-4 m-3" />
        </a>

         {/* Facebook - Ocultar en móvil */}
        <a 
          href="https://facebook.com/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition md:block"
          aria-label="Facebook"
        >
          <img src="/images/facebook.svg" alt="Facebook" className="h-4 w-4 m-3" />
        </a>
		
		{/* Instagram - Visible siempre */}
        <a 
          href="https://instagram.com/consulbank"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="Instagram"
        >
          <img src="/images/instagram.svg" alt="Instagram" className="h-4 w-4" />
        </a>

        {/* WhatsApp - Visible siempre */}
        <a 
          href="https://wa.me/13054001178"     
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="WhatsApp"
        >
          <img src="/images/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
        </a>
      </div>


           
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t('FooterL9')}</h4>
            <nav className="space-y-3">
              <a href="#Hero" className="block text-gray-300 hover:text-white transition-colors">
                {t('FooterL10')}
              </a>
              <a href="#problema-solucion" className="block text-gray-300 hover:text-white transition-colors">
                {t('FooterL11')}
              </a>
              <a href="#caracteristicas" className="block text-gray-300 hover:text-white transition-colors">
                 {t('FooterL12')}
              </a>
              <a href="#exito" className="block text-gray-300 hover:text-white transition-colors">
                {t('FooterL13')}
              </a>
            </nav>

            <div className="pt-4 border-t border-gray-700">
              <h5 className="font-medium mb-3">{t('FooterL14')}</h5>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-400 hover:text-gray-300 transition-colors">
                 {t('FooterL15')}
                </a>
                
                <a href="#" className="block text-gray-400 hover:text-gray-300 transition-colors">
                  {t('FooterL17')}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information Usa*/}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t('FooterL18')}</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">{t('FooterL23')}</p>
                  <p className="text-gray-400 text-sm">
                    {t('FooterL19')}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium"></p>
                  <a 
                  
                  href="https://wa.me/13054001178"     
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label="WhatsApp"
                >
                  <img
                  src="/images/whatsapp.webp"
                  alt="WhatsApp"
                  className="h-8 w-8"
                />
                </a>
                  <p className="text-gray-400 text-sm"></p>
               
                </div>
               
              </div>

              


              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">{t('FooterL32')}</p>
                  <p className="text-gray-400 text-sm">
                    {t('FooterL33')}
                  </p>
                </div>

                  

                
              </div>

              <div className="flex items-center space-x-3 g-gray-800 rounded-lg">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium"></p>
                                   
                  <a 
                  
                  href="https://wa.me/34603036215"     
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label="WhatsApp"
                >
                  <img
                  src="/images/whatsapp.webp"
                  alt="WhatsApp"
                  className="h-8 w-8"
                />
                </a>
                
                </div>


                {/* Contact Information España*
                <div>
                  <p className="text-gray-300 text-sm font-medium">{t('FooterL20')}2</p>
                                   
                  <a 
                  
                  href="https://wa.me/34611543073"     
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label="WhatsApp"
                >
                  <img
                  src="/images/whatsapp.webp"
                  alt="WhatsApp"
                  className="h-8 w-8"
                />
                </a>
                
                </div>
                 */}

              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email</p>
                  <p className="text-gray-400 text-sm">info@consulbank.com.ve</p>
                </div>
              </div>


            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-medium mb-2">{t('FooterL24')}</h5>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>{t('FooterL25')}:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('FooterL26')}</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('FooterL27')}</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Information España*/}
          

        </div>
      </div>

      {/* Certifications & Security 
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">{t('certification1')}</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🏆</div>
                <h5 className="font-medium">ISO 27001</h5>
                <p className="text-xs text-gray-400">{t('certification2')}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🛡️</div>
                <h5 className="font-medium">PCI DSS</h5>
                <p className="text-xs text-gray-400">{t('certification3')}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">⚖️</div>
                <h5 className="font-medium">GDPR</h5>
                <p className="text-xs text-gray-400">{t('certification4')}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl mb-2">🏪</div>
                <h5 className="font-medium">Banco de España</h5>
                <p className="text-xs text-gray-400">{t('certification5')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              {t('FooterL28')}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('FooterL29')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('FooterL30')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              {t('FooterL31')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
