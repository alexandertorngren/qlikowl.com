'use client'
import type { ThemeProviderProps } from 'next-themes'
import React, { useRef, useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { AppStore, makeStore } from '@/lib/store'
import { setupListeners } from '@reduxjs/toolkit/query'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch)
      return unsubscribe
    }
  }, [])

  return (
    <Provider store={storeRef.current}>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </Provider>
  )
}
