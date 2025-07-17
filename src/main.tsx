import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import './i18n.ts'; // Importa tu configuración de i18n
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div>Cargando traducciones...</div>}>
      <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
