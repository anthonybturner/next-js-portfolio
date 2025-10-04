'use client'

import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data'

type SectionName = (typeof links)[number]['name']

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(): ActiveSectionContextType {
  const context = useContext(ActiveSectionContext)
  if (context === undefined) {
    throw new Error('useActiveSectionContext: must be used within an ActiveSectionContextProvider')
  }
  return context
}
