interface Musing {
    date: Date
    author?: string
    link?: string
    content: string
}

const musings: Musing[] = [
    {
        date: '2020-02-22',
        link: 'https://youtu.be/1ZM-jnXh4uw',
        content: 'Is Thor: Ragnarok the best Marvel movie ever?',
        author: 'ScreenCrunch',
    },
    {
        date: '2022-06-29',
        link: 'https://kritingarg.substack.com/p/did-apple-make-your-startup-obsolete',
        content: 'Did Apple make your startup obsolete?',
        author: 'Kritin Garg',
    },
    {
        date: '2022-06-28',
        content:
            'What is better - to be born good, or to overcome your evil nature through great effort?',
        author: 'Paarthurnax, Skyrim',
    },
].map((ele) => ({
    ...ele,
    date: new Date(ele.date),
}))

export default musings
