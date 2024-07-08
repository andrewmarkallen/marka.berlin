import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  description: 'All contact details and links',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'website',
      type: 'url',
      title: 'Website',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'github',
      type: 'url',
      title: 'Github',
      validation: (rule) => rule.required().error('Required'),
    }),
  ],
  preview: {
    select: {
      email: 'email',
    },
    prepare({email}: {email: string}) {
      return {
        title: email,
      }
    },
  },
})
