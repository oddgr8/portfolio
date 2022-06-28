import type { NextPage } from 'next'
import FadeIn from 'react-fade-in'

function AboutMe() {
    return (
        <div
            className="hero rounded-lg min-h-[50vh]"
            style={{ backgroundImage: 'url(/bg_me.jpg)' }}
        >
            <div className="hero-overlay bg-opacity-60 rounded-lg flex flex-col place-content-center place-items-center text-neutral-content text-center">
                <FadeIn className="max-w-md">
                    <h1 className="m-4 text-5xl font-bold">Onkar Deshpande</h1>
                    <p className="m-2 text-lg">
                        Hi, welcome to my corner of the internet!
                    </p>
                    <p className="m-2">
                        I{"'"}m a Software engineer passionate about learning
                        new things and trying out new technologies. I{"'"}m
                        currently into in blockchain and distributed systems.
                    </p>
                    <p className="m-2">
                        I love reading Physics, Math and a bit of Philosophy and
                        I{"'"}m always up for interesting conversations,
                        regardless of the topic.
                    </p>
                </FadeIn>
            </div>
        </div>
    )
}

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center">
            <AboutMe />
        </div>
    )
}

export default Home
