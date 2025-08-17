/**
 * utils.ts - Utilitários e funções auxiliares
 * 
 * Este arquivo contém funções utilitárias:
 * - Função cn() para combinação de classes CSS
 * - Outras funções auxiliares do projeto
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Função utilitária para combinar e mesclar classes CSS
// Esta função é muito útil para aplicar classes condicionalmente e evitar conflitos
// 
// Parâmetros:
// - ...inputs: Array de valores que podem ser strings, objetos ou arrays
// 
// Retorna:
// - String com classes CSS mescladas e otimizadas
//
// Exemplos de uso:
// cn("text-red-500", "bg-blue-500")                    // Combina duas classes
// cn("text-red-500", isActive && "bg-blue-500")        // Classe condicional
// cn("base-class", className)                          // Combina com props externas
// cn("p-4", { "bg-red-500": isError })                // Objeto com condições
export function cn(...inputs: ClassValue[]) {
  // clsx() combina as classes de forma inteligente
  // twMerge() resolve conflitos entre classes Tailwind CSS
  return twMerge(clsx(inputs))
}
