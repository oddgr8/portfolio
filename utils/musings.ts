interface Musing {
    date: Date
    author?: string
    link?: string
    content: string
}

const musings: Musing[] = [
    {
        date: '28-06-2022',
        content:
            'What is better - to be born good, or to overcome your evil nature through great effort?',
        author: 'Paarthurnax | Skyrim',
    },
    {
        date: '29/06/2022',
        link: 'https://kritingarg.substack.com/p/did-apple-make-your-startup-obsolete',
        content: 'Did Apple make your startup obsolete',
        author: 'Kritin Garg',
    },
].map((ele) => ({
    ...ele,
    date: new Date(ele.date),
}))

export default musings
