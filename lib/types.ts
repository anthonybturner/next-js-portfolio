import { links } from "./data";

export type SectionName = (typeof links)[number]['name']
export type useSectionInViewProps= {sectionName: SectionName;}

/**
 * Type definition for the context value provided by ActiveSectionContextProvider.
 * Contains the current active section and a function to update it.
 * @interface ActiveSectionContextType
 * @property {SectionName} activeSection - Currently active/visible section name
 * @property {React.Dispatch<React.SetStateAction<SectionName>>} setActiveSection - Function to update the active section
 */
export type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: (time: number) => void;
}