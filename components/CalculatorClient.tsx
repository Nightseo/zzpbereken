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
    const timer = setTimeout(() => {
      try {
        const scriptFunction = new Function(logic)
        scriptFunction()
      } catch (error) {
        console.error('Error ejecutando lógica de calculadora:', error)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [logic])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
