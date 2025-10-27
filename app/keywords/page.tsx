'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { keywordsConfig } from '@/scripts/keywords-config'

interface KeywordData {
  id: number
  url: string
  keyword: string
  volume: number
  difficulty: string
  kwCount: number
  priority: 'ALTA' | 'MEDIA' | 'BAJA'
  category: string
  status: 'pending' | 'in-progress' | 'done'
  isGenerated?: boolean
}

export default function KeywordsPage() {
  const [sortBy, setSortBy] = useState<'volume' | 'difficulty' | 'priority'>('volume')
  const [filterPriority, setFilterPriority] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterCategory, setFilterCategory] = useState<string>('all')

  const initialData: KeywordData[] = keywordsConfig.map(kw => ({
    id: kw.id,
    url: kw.url,
    keyword: kw.keyword,
    volume: kw.volume,
    difficulty: kw.difficulty,
    kwCount: kw.kwCount,
    priority: kw.priority,
    category: kw.category,
    status: 'pending' as const,
    isGenerated: false
  }))

  const [data, setData] = useState<KeywordData[]>(initialData)
  const [generating, setGenerating] = useState<number | null>(null)
  const [checking, setChecking] = useState(true)

  // Check which calculators are already generated
  useEffect(() => {
    const checkCalculators = async () => {
      const checks = await Promise.all(
        initialData.map(async (item) => {
          const slug = item.url.replace('/bereken/', '')
          try {
            const response = await fetch('/api/check-calculator', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ slug })
            })
            const result = await response.json()
            return {
              ...item,
              isGenerated: result.isGenerated,
              status: (result.isGenerated ? 'done' : 'pending') as 'pending' | 'in-progress' | 'done'
            }
          } catch (error) {
            return { ...item, isGenerated: false, status: 'pending' as 'pending' | 'in-progress' | 'done' }
          }
        })
      )
      setData(checks)
      setChecking(false)
    }

    checkCalculators()
  }, [])

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === 'volume') return b.volume - a.volume
    if (sortBy === 'priority') {
      const priorityOrder = { ALTA: 3, MEDIA: 2, BAJA: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority]
    }
    return 0
  }).filter(item => {
    if (filterPriority !== 'all' && item.priority !== filterPriority) return false
    if (filterStatus !== 'all' && item.status !== filterStatus) return false
    if (filterCategory !== 'all' && item.category !== filterCategory) return false
    return true
  })

  // Get unique categories
  const categories = Array.from(new Set(data.map(item => item.category))).sort()

  const toggleStatus = (id: number) => {
    setData(data.map(item => {
      if (item.id === id) {
        const statuses: ('pending' | 'in-progress' | 'done')[] = ['pending', 'in-progress', 'done']
        const currentIndex = statuses.indexOf(item.status)
        const nextStatus = statuses[(currentIndex + 1) % statuses.length]
        return { ...item, status: nextStatus }
      }
      return item
    }))
  }

  const getPriorityColor = (priority: string) => {
    if (priority === 'ALTA') return 'bg-red-100 text-red-700 border-red-200'
    if (priority === 'MEDIA') return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    return 'bg-green-100 text-green-700 border-green-200'
  }

  const getStatusColor = (status: string) => {
    if (status === 'done') return 'bg-green-100 text-green-700'
    if (status === 'in-progress') return 'bg-blue-100 text-blue-700'
    return 'bg-gray-100 text-gray-700'
  }

  const getStatusIcon = (status: string) => {
    if (status === 'done') return '✓'
    if (status === 'in-progress') return '↻'
    return '○'
  }

  const generateCalculator = async (id: number, url: string) => {
    const slug = url.replace('/bereken/', '')
    setGenerating(id)

    // Mark as in-progress
    setData(data.map(item =>
      item.id === id ? { ...item, status: 'in-progress' } : item
    ))

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, type: 'both' })
      })

      const result = await response.json()

      if (result.success) {
        // Mark as done and generated
        setData(data.map(item =>
          item.id === id ? { ...item, status: 'done', isGenerated: true } : item
        ))
        alert(`✅ Calculator succesvol gegenereerd: ${slug}`)
      } else {
        // Mark as pending again
        setData(data.map(item =>
          item.id === id ? { ...item, status: 'pending' } : item
        ))
        alert(`❌ Fout: ${result.error}`)
      }
    } catch (error: any) {
      setData(data.map(item =>
        item.id === id ? { ...item, status: 'pending' } : item
      ))
      alert(`❌ Fout: ${error.message}`)
    } finally {
      setGenerating(null)
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">ZZP Calculators - Keywords Overzicht</h1>
            <p className="text-lg text-gray-600">Beheer van {data.length} calculators gebaseerd op keyword analyse</p>
          </div>

          {/* Filters en sortering */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sorteer op:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="border border-gray-300 px-4 py-2 text-sm focus:border-primary-600 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  >
                    <option value="volume">Volume (hoog naar laag)</option>
                    <option value="priority">Prioriteit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Filter op categorie:</label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="border border-gray-300 px-4 py-2 text-sm focus:border-primary-600 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  >
                    <option value="all">Alle categorieën</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Filter op prioriteit:</label>
                  <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="border border-gray-300 px-4 py-2 text-sm focus:border-primary-600 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  >
                    <option value="all">Alle prioriteiten</option>
                    <option value="ALTA">Hoog</option>
                    <option value="MEDIA">Midden</option>
                    <option value="BAJA">Laag</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Filter op status:</label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="border border-gray-300 px-4 py-2 text-sm focus:border-primary-600 focus:ring-2 focus:ring-primary-100 focus:outline-none"
                  >
                    <option value="all">Alle statussen</option>
                    <option value="pending">In afwachting</option>
                    <option value="in-progress">Bezig</option>
                    <option value="done">Voltooid</option>
                  </select>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <span className="font-bold text-primary-600">{sortedData.length}</span> van <span className="font-bold">{data.length}</span> calculators
              </div>
            </div>
          </div>

          {/* Tabel van calculators */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">#</th>
                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">URL</th>
                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Primair Keyword</th>
                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Categorie</th>
                    <th className="px-4 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Volume</th>
                    <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Diff</th>
                    <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">KWs</th>
                    <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Prioriteit</th>
                    <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Acties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-sm text-gray-500">{index + 1}</td>
                      <td className="px-4 py-4">
                        <code className="text-xs bg-gray-100 text-primary-600 px-3 py-1.5 font-mono border border-gray-200">
                          {item.url}
                        </code>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{item.keyword}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 border border-gray-200">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <span className="text-sm font-bold text-gray-900">
                          {item.volume >= 1000 ? `${(item.volume / 1000).toFixed(1)}K` : item.volume}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-600">{item.difficulty}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 text-xs font-bold">
                          {item.kwCount}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-block px-3 py-1 text-xs font-bold border ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => toggleStatus(item.id)}
                          className={`inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium transition-all hover:opacity-80 ${getStatusColor(item.status)}`}
                        >
                          <span className="text-base leading-none">{getStatusIcon(item.status)}</span>
                          <span className="capitalize">{item.status === 'in-progress' ? 'bezig' : item.status === 'done' ? 'voltooid' : 'in afwachting'}</span>
                        </button>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.isGenerated ? (
                          <Link
                            href={item.url}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 text-white text-xs font-semibold hover:bg-green-700 transition-all"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Bekijk calculator</span>
                          </Link>
                        ) : (
                          <button
                            onClick={() => generateCalculator(item.id, item.url)}
                            disabled={generating === item.id || checking}
                            className="px-4 py-2 bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {generating === item.id ? (
                              <span className="flex items-center space-x-2">
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Genereren...</span>
                              </span>
                            ) : checking ? (
                              'Controleren...'
                            ) : (
                              'Genereren'
                            )}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Snelle statistieken */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white border border-gray-200 p-4">
              <div className="text-2xl font-bold text-primary-600">{data.filter(d => d.status === 'done').length}/{data.length}</div>
              <div className="text-sm text-gray-600 mt-1">Voltooid</div>
            </div>
            <div className="bg-white border border-gray-200 p-4">
              <div className="text-2xl font-bold text-primary-600">
                {(data.reduce((acc, item) => acc + item.volume, 0) / 1000).toFixed(1)}K
              </div>
              <div className="text-sm text-gray-600 mt-1">Totaal Volume</div>
            </div>
            <div className="bg-white border border-gray-200 p-4">
              <div className="text-2xl font-bold text-primary-600">
                {data.reduce((acc, item) => acc + item.kwCount, 0)}
              </div>
              <div className="text-sm text-gray-600 mt-1">Totaal Keywords</div>
            </div>
            <div className="bg-white border border-gray-200 p-4">
              <div className="text-2xl font-bold text-primary-600">{data.filter(d => d.priority === 'ALTA').length}</div>
              <div className="text-sm text-gray-600 mt-1">Hoge Prioriteit</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
