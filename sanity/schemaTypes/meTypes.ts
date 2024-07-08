import {defineField, defineType} from 'sanity'

export const meType = defineType({
  name: 'me',
  title: 'Me',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'aboutme',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().error('Required'),
    }),
  ],
})
