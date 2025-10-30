'use client'

import { useEffect } from 'react'

interface CalculatorClientProps {
  html: string
  logic: string
  styles?: string
}

export default function CalculatorClient({ html, logic, styles }: CalculatorClientProps) {
  useEffect(() => {
    if (styles) {
      const styleElement = document.createElement('style')
      styleElement.textContent = styles
      document.head.appendChild(styleElement)
      return () => {
        document.head.removeChild(styleElement)
      }
    }
  }, [styles])

  useEffect(() => {
    let script: HTMLScriptElement | null = null

    const timer = setTimeout(() => {
      try {
        // Ejecutar el código en el scope global para que funciones estén disponibles para onclick
        script = document.createElement('script')
        script.textContent = logic
        document.body.appendChild(script)
      } catch (error) {
        console.error('Error ejecutando lógica de calculadora:', error)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      if (script && document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [logic])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
