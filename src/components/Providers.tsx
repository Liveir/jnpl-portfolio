'use client'

import ActiveSectionContextProvider from '@/context/active-section-context'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ActiveSectionContextProvider>
        {children}
      </ActiveSectionContextProvider>
    </NextUIProvider>
  )
}