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
            className="hero min-h-[50vh]"
            style={{
                backgroundImage: 'url(/bg_me.jpg)',
                backgroundPositionX: '72%',
                backgroundPositionY: '10%',
            }}
        >
            <div className="hero-overlay bg-opacity-60 flex flex-col justify-center ali place-items-center text-primary-content text-left md:text-center">
                <FadeIn className="max-w-xl">
                    <h1 className="m-4 text-5xl md:text-6xl lg:text-7xl font-bold">
                        Onkar
                        <br /> Deshpande
                    </h1>
                    <p className="m-2 mx-4 text-lg md:text-xl lg:text-2xl">
                        Hi, welcome to my corner of the internet!
                    </p>
                    <p className="m-2 mx-4 md:text-lg">
                        I{"'"}m a Software engineer passionate about learning
                        new things and trying out new technologies. I{"'"}m
                        currently into blockchain and distributed systems.
                    </p>
                    <p className="m-2 mx-4 md:text-lg">
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
                <h1 className="flex-none h-10 text-2xl">I am good at</h1>
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
            <div className=" mt-2 w-[100%] bg-base-300 grid grid-cols-1 md:grid-cols-2 min-h-[24rem] ">
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
                    <h1 className="text-3xl mt-5">{timelineEle.title}</h1>
                    <h2 className="text-xl mb-5">{timelineEle.duration}</h2>
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
