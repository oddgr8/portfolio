import type { NextPage } from 'next'
import FadeIn from 'react-fade-in'
import skills from '../utils/skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

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
    const [skill, setSkill] = useState('')
    return (
        <FadeIn>
            <div className="flex flex-col pt-5 text-center">
                <h1 className="flex-none h-10 text-2xl">
                    I am really good at using
                </h1>
                <h1 className="flex-none h-10 text-2xl">{skill}</h1>
            </div>
            <ul className="text-center list-none px-2 max-w-3xl">
                {skills.map((ele, idx) => (
                    <li
                        key={idx}
                        className="inline-block p-3 hover:scale-125 ease-in duration-100 hover:text-primary"
                        onMouseEnter={() => {
                            setSkill(ele.tooltip)
                        }}
                        onMouseLeave={() => {
                            setSkill('')
                        }}
                    >
                        <a href={ele.link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ele.icon} size="3x" />
                        </a>
                    </li>
                ))}
            </ul>
        </FadeIn>
    )
}

function Projects() {
    return <></>
}

function Timeline() {
    return <></>
}

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center">
            <AboutMe />
            <Skills />
            <Projects />
            <Timeline />
        </div>
    )
}

export default Home
