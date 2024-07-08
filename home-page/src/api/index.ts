import { groq } from 'next-sanity'
import { sanityFetch } from '../sanity/client'
import { Cv as CV, CV_QUERYResult } from '@/sanity/types'

export const EVENT_QUERY2 = groq`*[
  _type == "event" &&
  slug.current == $slug
][0]{
...,
headline->,
venue->
}`

export const CV_QUERY = groq`*[_type == "cv"][0]{
  ...,
 "roles": roles[]->{...}
}
`

export const query = async (q: string) => {
  switch (q) {
    case 'cv':
      return sanityFetch<CV_QUERYResult>({
        query: CV_QUERY
      }) as Promise<CV>
    default:
      throw new Error('Invalid query type')
  }
}
