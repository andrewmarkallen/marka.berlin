import {defineField, defineType} from 'sanity'

export const role = defineType({
  name: 'role',
  title: 'Role',
  description: 'A role in your work history',
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
      name: 'role',
      type: 'string',
      title: 'Job Role',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'keyTechnologies',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Key Technologies',
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
      options: {source: 'company'},
      validation: (rule) => rule.required().error('Required'),
      hidden: ({document}) => !document?.company,
    }),
  ],
  preview: {
    select: {
      company: 'company',
      role: 'role',
    },
    prepare({company, role}: {company: string; role: string}) {
      return {
        title: company,
        subtitle: role,
      }
    },
  },
})
