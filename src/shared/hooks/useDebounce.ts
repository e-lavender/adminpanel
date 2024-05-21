import { useCallback, useEffect } from 'react'

type EffectCallback = () => (() => void) | void

export default function useDebounce(effect: EffectCallback, dependencies: any[], delay: number) {
  const callback = useCallback(effect, dependencies)

  useEffect(() => {
    const timeout = setTimeout(() => {
      callback()
    }, delay)

    return () => clearTimeout(timeout)
  }, [callback, delay])
}
