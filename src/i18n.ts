// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Opcional: para detectar el idioma del navegador
import HttpBackend from 'i18next-http-backend'; // Opcional: para cargar traducciones de forma asíncrona

i18n
  // Carga las traducciones a través de HTTP (útil para producción)
  .use(HttpBackend)
  // Detecta el idioma del usuario (opcional, puedes establecerlo manualmente)
  .use(LanguageDetector)
  // Pasa la instancia de i18n a react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    fallbackLng: 'en', // Idioma de respaldo si el idioma detectado no está disponible
    debug: process.env.NODE_ENV === 'development', // Habilita el modo debug en desarrollo
    interpolation: {
      escapeValue: false // React ya escapa los valores por defecto
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' // Ruta donde se cargarán los archivos JSON
    },
    ns: ['translation'], // Namespaces que se cargarán (por defecto 'translation')
    defaultNS: 'translation' // Namespace por defecto
  });

export default i18n;