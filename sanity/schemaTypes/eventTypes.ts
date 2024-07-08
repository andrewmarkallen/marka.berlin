import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  icon: CalendarIcon,
  type: 'document',
  groups: [
    {
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'details',
      title: 'Details',
    },
  ],
  fields: [
    defineField({
      group: 'details',
      name: 'name',
      type: 'string',
    }),
    defineField({
      group: 'details',
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error('Required'),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      group: 'details',
      name: 'eventType',
      type: 'string',
      options: {
        list: ['concert', 'festival', 'conference', 'other'],
      },
    }),
    defineField({
      group: 'details',
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      group: 'details',
      name: 'doorsOpen',
      description: 'Number of minutes before event when admission starts',
      type: 'number',
      initialValue: 60,
    }),
    defineField({
      group: 'details',
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
      readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType === 'virtual') {
            return 'Only in-person events can have a venue'
          }

          return true
        }),
    }),
    defineField({
      group: 'details',
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      group: 'editorial',
      name: 'image',
      type: 'image',
    }),
    defineField({
      group: 'editorial',
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      group: 'details',
      name: 'tickets',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      venue: 'venue.name',
      artist: 'headline.name',
      date: 'date',
      image: 'image',
    },
    prepare({name, venue, artist, date, image}) {
      const nameFormatted = name || 'Untitled event'
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        : 'No date'

      return {
        title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
        subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
        media: image || CalendarIcon,
      }
    },
  },
})
