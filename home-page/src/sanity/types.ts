/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Education = {
  _id: string
  _type: 'education'
  _createdAt: string
  _updatedAt: string
  _rev: string
  startDate?: string
  endDate?: string
  title?: string
  location?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  slug?: Slug
}

export type CV = {
  _id: string
  _type: 'CV'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  subtitle?: string
  tagline?: string
  roles?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'role'
  }>
  education?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'education'
  }>
  communicationSkills?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  languages?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'language'
  }>
}

export type Role = {
  _id: string
  _type: 'role'
  _createdAt: string
  _updatedAt: string
  _rev: string
  startDate?: string
  endDate?: string
  role?: string
  company?: string
  location?: string
  keyTechnologies?: Array<string>
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  slug?: Slug
}

export type Language = {
  _id: string
  _type: 'language'
  _createdAt: string
  _updatedAt: string
  _rev: string
  language_name?: string
  level?: string
}

export type Me = {
  _id: string
  _type: 'me'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  aboutme?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type Event = {
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  eventType?: 'concert' | 'festival' | 'conference' | 'other'
  date?: string
  doorsOpen?: number
  venue?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'venue'
  }
  headline?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'artist'
  }
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  details?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  tickets?: string
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Artist = {
  _id: string
  _type: 'artist'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
}

export type Venue = {
  _id: string
  _type: 'venue'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Education
  | CV
  | Role
  | Language
  | Me
  | Event
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Artist
  | Venue
  | Slug
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ../home-page/src/api/index.ts
// Variable: EVENT_QUERY2
// Query: *[  _type == "event" &&  slug.current == $slug][0]{...,headline->,venue->}
export type EVENT_QUERY2Result = {
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  eventType?: 'concert' | 'conference' | 'festival' | 'other'
  date?: string
  doorsOpen?: number
  venue: {
    _id: string
    _type: 'venue'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: string
  } | null
  headline: {
    _id: string
    _type: 'artist'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: string
  } | null
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  details?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  tickets?: string
} | null
// Variable: CV_QUERY
// Query: *[_type == "CV"][0]{  ...}
export type CV_QUERYResult = {
  _id: string
  _type: 'CV'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  subtitle?: string
  tagline?: string
  roles?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'role'
  }>
  education?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'education'
  }>
  communicationSkills?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  languages?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'language'
  }>
} | null
// Variable: ROLE_QUERY
// Query: *[_type == "role" && slug.current == $slug][0]{...}
export type ROLE_QUERYResult = {
  _id: string
  _type: 'role'
  _createdAt: string
  _updatedAt: string
  _rev: string
  startDate?: string
  endDate?: string
  role?: string
  company?: string
  location?: string
  keyTechnologies?: Array<string>
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  slug?: Slug
} | null
// Variable: CV_FULL_QUERY
// Query: *[_type == "CV"][0]{  ...,  "roles": roles[]->{...},  "education": education[]->{...},  "languages": languages[]->{...}}
export type CV_FULL_QUERYResult = {
  _id: string
  _type: 'CV'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  subtitle?: string
  tagline?: string
  roles: Array<{
    _id: string
    _type: 'role'
    _createdAt: string
    _updatedAt: string
    _rev: string
    startDate?: string
    endDate?: string
    role?: string
    company?: string
    location?: string
    keyTechnologies?: Array<string>
    description?: Array<{
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }>
    slug?: Slug
  }> | null
  education: Array<{
    _id: string
    _type: 'education'
    _createdAt: string
    _updatedAt: string
    _rev: string
    startDate?: string
    endDate?: string
    title?: string
    location?: string
    description?: Array<{
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }>
    slug?: Slug
  }> | null
  communicationSkills?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  languages: Array<{
    _id: string
    _type: 'language'
    _createdAt: string
    _updatedAt: string
    _rev: string
    language_name?: string
    level?: string
  }> | null
} | null
// Source: ../home-page/src/app/page.tsx
// Variable: EVENTS_QUERY
// Query: *[  _type == "event"   && defined(slug.current)]{_id, name, slug, date}|order(date desc)
export type EVENTS_QUERYResult = Array<{
  _id: string
  name: string | null
  slug: Slug | null
  date: string | null
}>
// Source: ../home-page/src/app/events/[slug]/page.tsx
// Variable: EVENT_QUERY
// Query: *[    _type == "event" &&    slug.current == $slug  ][0]{  ...,  headline->,  venue->}
export type EVENT_QUERYResult = {
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  eventType?: 'concert' | 'conference' | 'festival' | 'other'
  date?: string
  doorsOpen?: number
  venue: {
    _id: string
    _type: 'venue'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: string
  } | null
  headline: {
    _id: string
    _type: 'artist'
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: string
  } | null
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  details?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  tickets?: string
} | null
