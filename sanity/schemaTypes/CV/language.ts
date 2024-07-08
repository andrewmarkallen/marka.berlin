import {defineField, defineType} from 'sanity'

export const language = defineType({
  name: 'language',
  title: 'Language',
  description: 'Language skill',
  type: 'document',
  fields: [
    defineField({
      name: 'language_name',
      type: 'string',
      title: 'Language_Name',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'level',
      type: 'string',
      title: 'Level',
      description: 'Attainment level / fluency',
      validation: (rule) => rule.required().error('Required'),
    }),
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare({language}: {language: string}) {
      return {
        title: language,
      }
    },
  },
})
