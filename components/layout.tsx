import { ReactNode, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function useTheme(): [string, () => void] {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme) {
            setTheme(theme)
            document.documentElement.setAttribute('data-theme', theme)
        }
    }, [])
    const toggleTheme = () => {
        const newTheme = theme == 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }
    return [theme, toggleTheme]
}

function ThemeToggle() {
    const [theme, toggleTheme] = useTheme()
    return (
        <label className="btn btn-primary swap swap-rotate">
            <input
                type="checkbox"
                checked={theme == 'dark'}
                onChange={() => toggleTheme()}
            />
            <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
        </label>
    )
}

function Navbar() {
    return (
        <nav className="navbar bg-primary text-primary-content rounded-b-xl">
            <div className="navbar-start">
                <Link href="/">
                    <button className="btn btn-ghost">Home</button>
                </Link>
                <Link href="/musings">
                    <button className="btn btn-ghost">Musings</button>
                </Link>
            </div>
            <div className="navbar-end">
                <ThemeToggle />
            </div>
        </nav>
    )
}
function Footer() {
    return (
        <footer className="footer footer-center md:footer md:justify-between gap-4 bg-neutral text-neutral-content rounded-t-xl p-4">
            <div className="grid-flow-col footer-title m-0">
                Onkar Deshpande
            </div>
            <div className="grid-flow-col ">
                <Link href={'/CV.pdf'} passHref>
                    <a target="_blank" className="btn btn-xs btn-ghost">
                        Resume
                    </a>
                </Link>
                <a
                    target="_blank"
                    className="btn btn-xs btn-ghost"
                    href="mailto:onkardeshpande07@gmail.com"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="h-5" icon={faEnvelope} />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-xs btn-ghost"
                    href="https://github.com/oddgr8"
                >
                    <FontAwesomeIcon className="h-5" icon={faGithub} />
                </a>
                <a
                    target="_blank"
                    className="btn btn-xs btn-ghost"
                    href="https://linkedin.com/in/onkardeshpande07"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon className="h-5" icon={faLinkedinIn} />
                </a>
            </div>
        </footer>
    )
}

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen justify-center">
            <div className="flex flex-col h-screen w-screen max-w-screen-xl">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </div>
    )
}
