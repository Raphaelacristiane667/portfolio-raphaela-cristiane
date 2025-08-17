/**
 * button.tsx - Componente de botão reutilizável
 * 
 * Este componente implementa um botão personalizado com:
 * - Variantes de estilo (default, destructive, outline, secondary, ghost, link)
 * - Tamanhos configuráveis (default, sm, lg, icon)
 * - Suporte a estados (disabled, loading)
 * - Integração com Tailwind CSS
 * 
 * @author Raphaela Cristiane
 * @version 1.0.0
 */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-pink-500/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-pink-500 text-white shadow-lg hover:bg-pink-600 transform hover:scale-105",
        destructive:
          "bg-red-600 text-white shadow-lg hover:bg-red-700",
        outline:
          "border-2 border-pink-500 bg-transparent text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300",
        secondary:
          "bg-gray-700 text-gray-300 shadow-lg hover:bg-gray-600",
        ghost:
          "hover:bg-pink-500/10 hover:text-pink-500",
        link: "text-pink-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg gap-2 px-8 has-[>svg]:px-6 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
