'use client'

import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data'

/**
 * Union type representing all possible section names in the portfolio navigation.
 * Automatically derived from the 'name' property of each link in the links array.
 *
 * @example
 * // If links contains: [{ name: "Home" }, { name: "About" }]
 * // Then SectionName = "Home" | "About"
 */
type SectionName = (typeof links)[number]['name']

/**
 * Props interface for the ActiveSectionContextProvider component.
 *
 * @interface ActiveSectionContextProviderProps
 * @property {React.ReactNode} children - Child components that will have access to the context
 */
type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

/**
 * Type definition for the context value provided by ActiveSectionContextProvider.
 * Contains the current active section and a function to update it.
 *
 * @interface ActiveSectionContextType
 * @property {SectionName} activeSection - Currently active/visible section name
 * @property {React.Dispatch<React.SetStateAction<SectionName>>} setActiveSection - Function to update the active section
 *
 * @example
 * const { activeSection, setActiveSection } = useActiveSectionContext()
 * console.log(activeSection) // "Home"
 * setActiveSection("About") // Updates to "About"
 */
type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
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
 *
 * @component
 * @param {ActiveSectionContextProviderProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to render within the provider
 *
 * @returns {JSX.Element} Provider component with active section state
 *
 * @example
 * // Wrap your app or layout with the provider
 * <ActiveSectionContextProvider>
 *   <Header />
 *   <MainContent />
 * </ActiveSectionContextProvider>
 */
export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

/**
 * Custom hook to access the active section context.
 * Provides type-safe access to the current active section and setter function.
 *
 * @function useActiveSectionContext
 * @returns {ActiveSectionContextType} Object containing activeSection and setActiveSection
 *
 * @throws {Error} Throws an error if used outside of ActiveSectionContextProvider
 *
 * @example
 * // In a component that needs to read/update active section
 * function NavigationLink({ sectionName }) {
 *   const { activeSection, setActiveSection } = useActiveSectionContext()
 *
 *   const isActive = activeSection === sectionName
 *
 *   return (
 *     <a
 *       onClick={() => setActiveSection(sectionName)}
 *       className={isActive ? 'active' : ''}
 *     >
 *       {sectionName}
 *     </a>
 *   )
 * }
 *
 * @example
 * // In a section component that wants to mark itself as active
 * function AboutSection() {
 *   const { setActiveSection } = useActiveSectionContext()
 *   const { ref, inView } = useInView({ threshold: 0.5 })
 *
 *   useEffect(() => {
 *     if (inView) {
 *       setActiveSection('About')
 *     }
 *   }, [inView, setActiveSection])
 *
 *   return <section ref={ref}>About content...</section>
 * }
 */
export function useActiveSectionContext(): ActiveSectionContextType {
  const context = useContext(ActiveSectionContext)
  if (context === undefined) {
    throw new Error('useActiveSectionContext: must be used within an ActiveSectionContextProvider')
  }
  return context
}
