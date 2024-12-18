import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
  timeout: 80000, // time-out 80000
  reporter: [
    ['html', { open: 'never', outputFolder: 'html-report' }]
  ],
  use: {
    baseURL: 'https://automationexercise.com', // URL base si la necesitas
    headless: true, // Si quieres que las pruebas se ejecuten en modo headless (sin UI)
    screenshot: 'only-on-failure', // Tomar capturas de pantalla solo si la prueba falla
    video: 'retain-on-failure', // Grabar video solo si la prueba falla
    trace: 'retain-on-failure', // Grabar trazas solo si la prueba falla

  },
  projects: [
      {
        name: 'chromium', // Project for Chromium (Google Chrome)
        use: { 
          ...devices['Desktop Chrome'], // Use desktop Chrome settings
        },
        testMatch: '**/e2e/*.spec.ts', // Match tests in the e2e folder
      },
      {
        name: 'firefox', // Project for Firefox
        use: { 
          ...devices['Desktop Firefox'], // Use desktop Firefox settings
        },
        testMatch: '**/e2e/**/*.spec.ts', // Match tests in the e2e folder
      },
      {
        name: 'webkit', // Project for WebKit (Safari)
        use: { 
          ...devices['Desktop Safari'], // Use desktop Safari settings
        },
        testMatch: '**/e2e/**/*.spec.ts', // Match tests in the e2e folder
      },
      {
        name: 'edge', // Project for Microsoft Edge
        use: { 
          ...devices['Desktop Edge'], // Use desktop Edge settings
        },
        testMatch: '**/e2e/**/*.spec.ts', // Match tests in the e2e folder
      },
      {
        name: 'ios', // Pruebas en Chromium (Google Chrome)
        use: { ...devices['iPhone 15 Pro Max'] }, // Usar el dispositivo de escritorio de Chrome
        testMatch: '**/e2e/**/*.spec.ts',  // Directorio específico para las pruebas de rendimiento
  
      },
      {
        name: 'android', // Pruebas en Chromium (Google Chrome)
        use: { ...devices['Pixel 7'] }, // Usar el dispositivo de escritorio de Chrome
        testMatch: '**//e2e/**/*.spec.ts',  // Directorio específico para las pruebas de rendimiento
      },
       {
        name: 'performance',  // Proyecto de pruebas de rendimiento (puede ser solo para pruebas de performance)
        testMatch: '**/performance/**/*.spec.ts',  // Directorio específico para las pruebas de rendimiento
        use: {
          ...devices['Desktop Chrome'],  // Usar el dispositivo de escritorio de Chrome
        },
      },
  ],
});
