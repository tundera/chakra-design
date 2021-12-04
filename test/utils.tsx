import { render as defaultRender } from '@testing-library/react'
import { renderHook as defaultRenderHook } from '@testing-library/react-hooks'

export * from '@testing-library/react'

export function render(
  ui: RenderUI,
  { wrapper, ...options }: RenderOptions = {}
) {
  if (!wrapper) {
    wrapper = ({ children }) => <>{children}</>
  }
  return defaultRender(ui, { wrapper, ...options })
}

export function renderHook(
  hook: RenderHook,
  { wrapper, ...options }: RenderHookOptions = {}
) {
  if (!wrapper) {
    wrapper = ({ children }) => <>{children}</>
  }
  return defaultRenderHook(hook, { wrapper, ...options })
}

type DefaultParams = Parameters<typeof defaultRender>
type RenderUI = DefaultParams[0]
type RenderOptions = DefaultParams[1]

type DefaultHookParams = Parameters<typeof defaultRenderHook>
type RenderHook = DefaultHookParams[0]
type RenderHookOptions = DefaultHookParams[1]
