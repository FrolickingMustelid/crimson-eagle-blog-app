import React from "react"
import Head from "next/head"

type LayoutHeadProps = {
    title?: string,
    description?: string,
    children?: React.ReactNode,
}
const LayoutHead: React.FC<LayoutHeadProps> = ({ title, description, children }) => {
    const name = `${ title || 'Home' } | Crimson Blogs`

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content={ description || 'A blog application where you can write blogs.' } />
            <title>{ name }</title>
            <link rel="icon" href="/favicon.ico" />
            { children }
        </Head>
    )
}

export default LayoutHead