import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  description: 'Element of your educational history',
  type: 'document',
  fields: [
    defineField({
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Description',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'location'},
      validation: (rule) => rule.required().error('Required'),
      hidden: ({document}) => !document?.location,
    }),
  ],
  preview: {
    select: {
      location: 'location',
      title: 'title',
    },
    prepare({location, title}: {location: string; title: string}) {
      return {
        title: location,
        subtitle: title,
      }
    },
  },
})
