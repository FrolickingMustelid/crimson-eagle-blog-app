import type { PropsWithChildren, FC } from "react"
import Image from "next/image"
import Link from "next/link"
import SearchForm from "./search-form"

const Layout: FC<PropsWithChildren> = ({ children }) => (
    <div className="min-h-screen flex flex-col border-y-8 border-primary">
        <nav className="flex flex-wrap md:flex-nowrap justify-between items-center mx-8 lg:mx-10 xl:mx-12">
            <Link href="/home"
                className="flex items-center shrink-0 my-4 p-1
                    font-bold text-5xl md:text-4xl lg:text-5xl font-signika whitespace-nowrap
                    focus-secondary">
                <div className="w-12 h-12 mr-5 p-1 bg-accent rounded-lg">
                    <Image
                        src="/eagle-head-logo.svg"
                        width={ 40 }
                        height={ 40 }
                        alt="Crimson Eagles Logo"
                    />
                </div>
                Eagle Blog
            </Link>
            <SearchForm />
            <Link href="/admin"
                className="flex items-baseline shrink-0 my-4 p-1
                    font-medium text-4xl md:text-3xl lg:text-4xl font-signika
                    focus-secondary">
                <Image
                    className="mr-3"
                    src="/admin-icon.svg"
                    width={ 30 }
                    height={ 35 }
                    alt=""
                />
                Admin
            </Link>
        </nav>
        { children }
    </div>
)

export default Layout