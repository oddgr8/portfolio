import type { NextPage } from 'next'
import musings from '../utils/musings'

const ExternalLink: React.FC<{
    link: string
    content: string
    author: string | undefined
    date: Date
}> = ({ link, content, author, date }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <h1>{content}</h1>
            {author}
            {JSON.stringify(date)}
            {/* {date.toISOString()} */}
        </a>
    )
}
const Quote: React.FC<{
    content: string
    author: string | undefined
}> = ({ content, author }) => {
    return (
        <>
            {author}
            {content}
        </>
    )
}

const MusingsPage: NextPage = () => {
    console.log(musings)
    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-col w-screen max-w-screen-lg">
                {musings.map((musing, idx) => (
                    <div key={idx}>
                        <div className="m-7">
                            {musing.link ? (
                                <ExternalLink
                                    link={musing.link}
                                    author={musing.author}
                                    content={musing.content}
                                    date={musing.date}
                                />
                            ) : (
                                <Quote
                                    content={musing.content}
                                    author={musing.author}
                                />
                            )}
                        </div>
                        <div className="divider" />
                    </div>
                ))}
                <h3 className="text-center">Thank you for reading!</h3>
            </div>
        </div>
    )
}

export default MusingsPage
