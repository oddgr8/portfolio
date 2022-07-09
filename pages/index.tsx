import type { NextPage } from 'next'
import FadeIn from 'react-fade-in'
import skills from '../utils/skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import timeline from '../utils/timeline'
import Image from 'next/image'

function AboutMe() {
    return (
        <div
            className="hero rounded-xl min-h-[50vh]"
            style={{ backgroundImage: 'url(/bg_me.jpg)' }}
        >
            <div className="hero-overlay bg-opacity-60 rounded-xl flex flex-col place-content-center place-items-center text-primary-content text-center">
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
        <FadeIn className="mt-5 max-w-3xl">
            <div className="flex flex-col pt-5 text-center">
                <h1 className="flex-none h-10 text-2xl">
                    I am really good at using
                </h1>
                <h1 className="flex-none h-10 text-2xl">{skill}</h1>
            </div>
            <ul className="text-center list-none">
                {skills.map((ele, idx) => (
                    <li
                        key={idx}
                        className="inline-block p-3 hover:scale-125 hover:opacity-100 ease-in duration-100 hover:text-primary opacity-50"
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
    const [tab, setTab] = useState(0)
    const timelineEle = timeline[tab]
    return (
        <>
            <h1 className="h-10 text-2xl mt-10">I have been at</h1>
            <div className="w-[90vw] flex flex-row justify-center">
                <div className="w-max overflow-x-auto">
                    <div className="btn-group flex-nowrap overflow-x-auto w-full px-2 justify-start">
                        {timeline.map((ele, idx) => (
                            <input
                                type="radio"
                                name="tab"
                                data-title={ele.tab}
                                className="btn btn-ghost"
                                checked={tab == idx}
                                key={idx}
                                onChange={() => setTab(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <h1 className="h-10 text-2xl mt-1">{timelineEle.duration}</h1>
            <div className=" mt-10 w-[100%] rounded-xl bg-base-300 grid grid-cols-1 md:grid-cols-2 min-h-[24rem] ">
                {timelineEle.image ? (
                    <div className="m-10 flex flex-row justify-center">
                        <Image
                            src={timelineEle.image}
                            alt={timelineEle.title}
                            width={350}
                            height={350}
                        />
                    </div>
                ) : null}
                <div className="m-5">
                    <h1 className="text-3xl my-5">{timelineEle.title}</h1>
                    {timelineEle.content.map((ele, idx) => (
                        <p key={idx} className="my-2 mr-10">
                            {ele}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
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
