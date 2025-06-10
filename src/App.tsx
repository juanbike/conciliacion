import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock, TrendingDown, RefreshCw, Database, FileText, Shield, Users, BarChart, Zap } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: ''
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.')
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">ConBanking Pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ¿Tu banco aún usa procesos 
                  <span className="text-blue-600"> manuales</span> para la conciliación?
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  Automatiza completamente tus procesos de conciliación bancaria con nuestra solución nativa para IBM Power. 
                  Reduce errores, acelera operaciones y cumple con todas las regulaciones.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Solicitar Demo Gratuita
                </Button>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  Ver Características
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/hero-banking.jpg" 
                alt="Dashboard bancario moderno" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Sistema en línea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Los desafíos actuales de la conciliación bancaria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los procesos manuales están frenando el crecimiento de tu institución financiera
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Problemas Actuales</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Pérdida de tiempo valioso en tareas repetitivas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Alto riesgo de error humano en cálculos críticos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingDown className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Dificultad para cumplir con regulaciones locales e internacionales</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Informes lentos e imprecisos que retrasan decisiones</span>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Nuestra Solución</h3>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Con nuestro sistema de conciliaciones electrónicas, <strong>automatizas desde la extracción de datos hasta el análisis final</strong>, 
                  integrándose directamente con tu ambiente IBM Power sin necesidad de infraestructura adicional.
                </p>
              </div>
              <img 
                src="/images/process-flow.jpg" 
                alt="Flujo de proceso automatizado" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que te ayudan a optimizar operaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas diseñadas específicamente para instituciones financieras modernas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <RefreshCw className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Automatización Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conciliaciones diarias, semanales y mensuales completamente automatizadas, 
                  eliminando intervención manual y reduciendo errores.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Database className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Integración Nativa IBM i</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Funciona directamente con sistemas IBM Power sin migración de datos 
                  ni cambios en tu infraestructura existente.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Informes Inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generación automática de reportes detallados y exportables 
                  para auditorías y análisis ejecutivo.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Cumplimiento Regulatorio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Asegura el cumplimiento con normativas bancarias locales e internacionales 
                  con controles automáticos integrados.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Control de Acceso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema seguro de roles y permisos para múltiples usuarios 
                  con trazabilidad completa de acciones.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <BarChart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Dashboard en Tiempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Indicadores clave y métricas operativas actualizadas en tiempo real 
                  con interfaz intuitiva y amigable.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <img 
              src="/images/dashboard-mockup.png" 
              alt="Dashboard del sistema de conciliaciones" 
              className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
              "Desde que implementamos este sistema de conciliaciones, logramos reducir en un 70% 
              el tiempo destinado a estos procesos y mejoramos la precisión de nuestros informes regulatorios."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="/images/banking-team.jpeg" 
                alt="Javier R." 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-gray-900">Javier R.</p>
                <p className="text-gray-600">Gerente de Operaciones</p>
                <p className="text-blue-600 font-medium">Banco Regional S.A.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Descubre cómo podemos ayudarte
            </h2>
            <p className="text-xl text-gray-600">
              Agenda una demo personalizada y descubre el potencial de automatización para tu banco
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Nombre de tu institución"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono (opcional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                >
                  Enviar información y agendar demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resuelve las dudas más comunes sobre nuestro sistema
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "¿El sistema requiere migración de datos?",
                answer: "No, está diseñado para operar dentro del entorno IBM Power existente sin afectar tu infraestructura actual."
              },
              {
                question: "¿Es compatible con cualquier versión de IBM i?",
                answer: "Sí, funciona con las versiones más utilizadas, desde la 7.2 en adelante."
              },
              {
                question: "¿Ofrecen soporte técnico post-implementación?",
                answer: "Por supuesto, contamos con un equipo especializado disponible 24/7 para resolver cualquier incidencia."
              },
              {
                question: "¿Cuánto tiempo toma la implementación?",
                answer: "Depende del tamaño del banco, pero en promedio entre 30 y 60 días."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                    <div className="text-blue-600">
                      {openFaq === index ? '−' : '+'}
                    </div>
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">ConBanking Pro</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Soluciones de automatización bancaria especializadas en sistemas IBM Power. 
                Transformamos operaciones financieras con tecnología de vanguardia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@conbankingpro.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>🏢 Ciudad de México, México</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ConBanking Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
