export default {
    name: 'tesitmonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
           name: 'company',
           title: 'Company',
           type: 'string',
        },
        {
            name: 'imageurl',
            title: 'ImgUrl',
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            tile: 'Feedback',
            type: 'string',
        }
    ]

}