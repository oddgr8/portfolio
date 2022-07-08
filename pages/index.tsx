import type { NextPage } from 'next'
import FadeIn from 'react-fade-in'
import skills from '../utils/skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AboutMe() {
    return (
        <div
            className="hero rounded-lg min-h-[50vh]"
            style={{ backgroundImage: 'url(/bg_me.jpg)' }}
        >
            <div className="hero-overlay bg-opacity-60 rounded-lg flex flex-col place-content-center place-items-center text-primary-content text-center">
                <FadeIn className="max-w-md">
                    <h1 className="m-4 text-5xl font-bold">Onkar Deshpande</h1>
                    <p className="m-2 text-lg">
                        Hi, welcome to my corner of the internet!
                    </p>
                    <p className="m-2">
                        I{"'"}m a Software engineer passionate about learning
                        new things and trying out new technologies. I{"'"}m
                        currently into blockchain and distributed systems.
                    </p>
                    <p className="m-2">
                        I love reading Physics, Math and a bit of Philosophy. I
                        {"'"}m always up for interesting conversations,
                        regardless of the topic.
                    </p>
                </FadeIn>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <>
            <h1 className="m-7 text-2xl">Some stuff I am good at</h1>
            <div className="min-w-full grid grid-flow-row-dense grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 place-items-center">
                {skills.map((ele, idx) => (
                    <FontAwesomeIcon icon={ele.icon} key={idx} />
                ))}
            </div>
        </>
    )
}

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center">
            <AboutMe />
            <Skills />
        </div>
    )
}

export default Home
