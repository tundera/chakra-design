import type { AppProps as NextAppProps } from 'next/app'
import type {
  NextComponentType as DefaultNextComponentType,
  NextPage as DefaultNextPage,
  NextPageContext,
} from 'next'

export type GetLayoutFunction = (component: JSX.Element) => JSX.Element

export declare type NextComponentType<
  C = NextPageContext,
  IP = Record<string, unknown>,
  P = Record<string, unknown>
> = DefaultNextComponentType<C, IP, P>

export interface AppProps<P = Record<string, unknown>> extends NextAppProps<P> {
  Component: NextComponentType<NextPageContext, any, P> & {
    getLayout?: GetLayoutFunction
  }
}

export declare type NextPage<
  P = Record<string, unknown>,
  IP = P
> = DefaultNextPage<P, IP> & {
  getLayout?: GetLayoutFunction
}
