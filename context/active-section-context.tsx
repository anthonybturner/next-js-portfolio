'use client'

import React, { useState, createContext, useContext } from 'react'
import type { SectionName, ActiveSectionContextType } from '@/lib/types'

/**
 * Props interface for the ActiveSectionContextProvider component.
 * @interface ActiveSectionContextProviderProps
 * @property {React.ReactNode} children - Child components that will have access to the context
 */
type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

/**
 * React Context for managing the currently active section in the portfolio navigation.
 * Provides undefined as default value to enable proper error handling in the hook.
 *
 * @type {React.Context<ActiveSectionContextType | undefined>}
 */
export const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined)

/**
 * Context Provider component that manages the active section state for the entire application.
 * Wraps components that need access to the current active section and ability to update it.
 * @component
 * @param {ActiveSectionContextProviderProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to render within the provider
 * @returns {JSX.Element} Provider component with active section state
 */
export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(Date.now())

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

/**
 * Custom hook to access the active section context.
 * Provides type-safe access to the current active section and setter function.
 * @function useActiveSectionContext
 * @returns {ActiveSectionContextType} Object containing activeSection and setActiveSection
 * @throws {Error} Throws an error if used outside of ActiveSectionContextProvider
 */
export function useActiveSectionContext(): ActiveSectionContextType {
  const context = useContext(ActiveSectionContext)
  if (context === undefined) {
    throw new Error('useActiveSectionContext: must be used within an ActiveSectionContextProvider')
  }
  return context
}
