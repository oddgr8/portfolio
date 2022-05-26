import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-screen text-center ">
            <header className="h-auto">
                <div>HEADER</div>
            </header>
            <nav className="p5 sticky top-0">NAV</nav>
            <main className="flex-1  p5">{children}</main>
            <footer className="py-5 text-center">Footer</footer>
        </div>
    )
}
