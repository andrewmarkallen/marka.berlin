import { groq } from 'next-sanity'
import { sanityFetch } from '../sanity/client'
import { CV, CV_FULL_QUERYResult, CV_QUERYResult, Role, ROLE_QUERYResult } from '@/sanity/types'
import { CV_Full } from './derived'

export const EVENT_QUERY2 = groq`*[
  _type == "event" &&
  slug.current == $slug
][0]{
...,
headline->,
venue->
}`

export const CV_QUERY = groq`*[_type == "CV"][0]{
  ...
}
`

export const ROLE_QUERY = groq`*[_type == "role" && slug.current == $slug][0]{
...
}`

export const CV_FULL_QUERY = groq`*[_type == "CV"][0]{
  ...,
  "roles": roles[]->{...},
  "education": education[]->{...},
  "languages": languages[]->{...}
}
`

export const _query = async <T extends S | null, S>(q: string) => {
  const result = await sanityFetch<T>({ query: q })
  if (result !== null) return result as S
  throw new Error('Query failed')
}

export const query = async (q: string) => {
  switch (q) {
    case 'cv':
      return sanityFetch<CV_QUERYResult>({
        query: CV_QUERY
      }) as Promise<CV>
    case 'role':
      return sanityFetch<ROLE_QUERYResult>({
        query: ROLE_QUERY
      }) as Promise<Role>
    case 'cvFull':
      return _query<CV_FULL_QUERYResult, CV_Full>(CV_FULL_QUERY)
    default:
      throw new Error('Invalid query type')
  }
}
