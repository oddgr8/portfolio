import {
    IconDefinition,
    faArrowAltCircleDown,
} from '@fortawesome/free-regular-svg-icons'
import {
    faGolang,
    faPython,
    faJsSquare,
    faDocker,
    faAws,
    faGit,
    faGoogle,
    faHtml5,
    faJava,
    faLinux,
    faMarkdown,
    faEthereum,
    faBitcoin,
    faNode,
    faPhabricator,
    faRaspberryPi,
    faReact,
    faSlack,
    faUbuntu,
} from '@fortawesome/free-brands-svg-icons'
import {
    faDharmachakra,
    faLink,
    faEye,
    faHouseSignal,
    faNetworkWired,
    faServer,
    faDatabase,
} from '@fortawesome/free-solid-svg-icons'

interface Skill {
    icon: IconDefinition
    link: string
    tooltip: string
}

const skills: Skill[] = [
    {
        icon: faGolang,
        link: 'https://go.dev/',
        tooltip: 'Golang',
    },
    {
        icon: faPython,
        link: 'https://www.python.org/',
        tooltip: 'Python',
    },
    {
        icon: faHtml5,
        link: 'https://en.wikipedia.org/wiki/HTML5',
        tooltip: 'HTML',
    },
    {
        icon: faJsSquare,
        link: 'https://www.javascript.com/',
        tooltip: 'Javascript',
    },
    {
        icon: faNode,
        link: 'https://nodejs.org/',
        tooltip: 'Node',
    },
    {
        icon: faReact,
        link: 'https://reactjs.org/',
        tooltip: 'React',
    },
    {
        icon: faGit,
        link: 'https://git-scm.com/',
        tooltip: 'Git',
    },
    {
        icon: faPhabricator,
        link: 'https://www.phacility.com/phabricator/',
        tooltip: 'Phabricator',
    },
    {
        icon: faJava,
        link: 'https://www.java.com/',
        tooltip: 'Java',
    },
    {
        icon: faLinux,
        link: 'https://www.linux.org/',
        tooltip: 'Linux',
    },
    {
        icon: faUbuntu,
        link: 'https://ubuntu.com/',
        tooltip: 'Ubuntu',
    },
    {
        icon: faLink,
        link: 'https://en.wikipedia.org/wiki/Blockchain',
        tooltip: 'Blockchain',
    },
    {
        icon: faBitcoin,
        link: 'https://bitcoin.org/',
        tooltip: 'Bitcoin',
    },
    {
        icon: faEthereum,
        link: 'https://ethereum.org/en/',
        tooltip: 'Ethereum',
    },
    {
        icon: faDatabase,
        link: 'https://en.wikipedia.org/wiki/SQL',
        tooltip: 'SQL',
    },
    {
        icon: faEye,
        link: 'https://en.wikipedia.org/wiki/Computer_vision',
        tooltip: 'Computer Vision',
    },
    {
        icon: faHouseSignal,
        link: 'https://en.wikipedia.org/wiki/Internet_of_things',
        tooltip: 'IoT',
    },
    {
        icon: faRaspberryPi,
        link: 'https://www.raspberrypi.org/',
        tooltip: 'Raspberry Pi',
    },
    {
        icon: faNetworkWired,
        link: 'https://en.wikipedia.org/wiki/Computer_network',
        tooltip: 'Computer Networks',
    },
    {
        icon: faGoogle,
        link: 'https://cloud.google.com/',
        tooltip: 'Google Cloud',
    },
    {
        icon: faAws,
        link: 'https://aws.amazon.com/',
        tooltip: 'AWS',
    },
    {
        icon: faServer,
        link: 'https://en.wikipedia.org/wiki/Cloud_computing',
        tooltip: 'Cloud Computing',
    },
    {
        icon: faDocker,
        link: 'https://www.docker.com/',
        tooltip: 'Docker',
    },
    {
        icon: faDharmachakra,
        link: 'https://kubernetes.io/',
        tooltip: 'Kubernetes',
    },
]

export default skills
