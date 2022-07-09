interface TimelineElement {
    tab: string
    duration: string
    title: string
    image?: string
    content: string[]
}

const timeline: TimelineElement[] = [
    {
        tab: 'IIT Bombay',
        duration: 'from 2017 to 2021',
        title: 'IIT Bombay, CSE B. Tech',
        image: '/iitb.png',
        content: [
            'An All India Rank of 8 in JEE Advanced got me into one of the most premiere institutes of the country. I eventually graduated with a CPI of 9.78.',
            'I worked on the formal verification of parameterized k-CAS programs. These are programs that havea access to atomic Compare-And-Swap intructions.',
            'My bachelor thesis was about creating a compiler for writing secure multi-party computation protocols at a high level.',
            'I worked on projects dealing with various fields like Machine Learning, Computer Vision, Compilers, etc.',
            'I was also an Institute student mentor, a Department mentor, a TA and winner of Institute Academic Prize.',
        ],
    },
    {
        tab: 'TU Braunschweig',
        duration: 'during Summer 2019',
        title: 'Technische Universität Braunschweig',
        image: '/tub.png',
        content: [
            'As an intern, I implemented a Liveness Verification tool for Broadcast networks. It ran a polynomial time algorithm that was based on the Kleene fixed-point iteration.',
            'Then, we moved on the developing an algorithm for the symbolic case and also implementing it. This was a generalization for the earlier case and ran in exponential time.',
        ],
    },
    {
        tab: 'Rubrik',
        duration: 'since 2021',
        title: 'Rubrik India',
        image: '/rubrik.png',
        content: [
            'I started with an internship where I implemented automatic tag based protection for various cloud-native workloads.',
            'I later joined full time and worked in the cloud-native PaaS workloads protection team. I was directly involved with the Azure SQL protection solution.',
            'The other projects I worked on include improving the permissions visibility for our cloud customers, better stats reporting for various internal clients as well as cost estimator tooling.',
            'As a periodic On-Call for my team, I have handled various bugs and operations for my team and its releases.',
        ],
    },
]

export default timeline
