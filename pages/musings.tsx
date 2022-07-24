import type { NextPage } from 'next'
import FadeIn from 'react-fade-in'
import musings from '../utils/musings'
import dayjs from 'dayjs'

const ExternalLink: React.FC<{
    link: string
    content: string
    author: string | undefined
    date: Date
}> = ({ link, content, author, date }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <h1 className="font-bold text-3xl m-3 font-['Cormorant_SC']">
                {content}
            </h1>
            <div className="flex flex-row justify-end m-3 mb-0">
                <h2 className="font-['Edu_TAS_Beginner'] text-2xl ">
                    <span className="text-sm">
                        {dayjs(date).format('D MMM YYYY')}
                    </span>
                    {'  '}
                    {author}
                </h2>
            </div>
        </a>
    )
}
const Quote: React.FC<{
    content: string
    author: string | undefined
}> = ({ content, author }) => {
    return (
        <>
            <h1 className="font-['Tangerine'] text-5xl text-center">
                {content}
            </h1>
            <h2 className="font-['Edu_TAS_Beginner'] text-2xl text-right">
                {author}
            </h2>
        </>
    )
}

const MusingsPage: NextPage = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="flex-auto min-h-[10vh]" />
            <FadeIn className="flex flex-col w-screen max-w-screen-lg my-5">
                {musings.map((musing, idx) => (
                    <div key={idx}>
                        {idx == 0 ? null : <div className="divider" />}

                        <div className="m-7 mb-0">
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
                    </div>
                ))}
            </FadeIn>
        </div>
    )
}

export default MusingsPage
