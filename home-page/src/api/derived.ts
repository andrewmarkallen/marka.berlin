import { CV, Education, Language, Role } from '@/sanity/types'

// Derived dereferenced types from the Sanity schema

export type CV_Arrays = {
  roles?: Role[] | null
  education?: Education[] | null
  languages?: Language[] | null
}

export type Derefence<T, U> = { [K in keyof T]: K extends keyof U ? U[K] : T[K] }

export type CV_Full = Derefence<CV, CV_Arrays>
