/**
 * Configuración del servidor backend IPET 66 TecnoLingo
 * 
 * En el futuro se pueden agregar:
 * - SUPABASE_URL y SUPABASE_KEY para persistencia de usuarios
 * - JWT_SECRET para autenticación
 * - Variables de entorno para servicios externos
 */

export const config = {
  port: process.env.PORT || 3001,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  environment: process.env.NODE_ENV || 'development',
};
