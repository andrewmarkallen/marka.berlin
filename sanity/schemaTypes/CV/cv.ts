import {defineField, defineType} from 'sanity'

const refArray = (type: string) => ({
  type: 'array',
  of: [{type: 'reference', to: [{type}]}],
})

export const CV = defineType({
  name: 'CV',
  title: 'CV',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'subtitle',
      title: 'subtitle',
      description: 'Should always be Curriculum Vitae, I make this variable for completeness',
      type: 'string',
      initialValue: 'Curriculum Vitae',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'tagline',
      title: 'tagline',
      type: 'string',
      description: 'A short description of yourself',
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'roles',
      ...refArray('role'),
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'education',
      ...refArray('education'),
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'communicationSkills',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'languages',
      ...refArray('language'),
      validation: (rule) => rule.required().error('Required'),
    }),
    defineField({
      name: 'contact',
      type: 'reference',
      to: [{type: 'contact'}],
      validation: (rule) => rule.required().error('Required'),
    }),
  ],
})
