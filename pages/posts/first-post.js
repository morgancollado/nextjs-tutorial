import Link from "next/link"
export default function FirstPost() {
    return(
        <>
            <h1>
                Post the First
            </h1>
            <h2>
                <Link href="/">
                    <a>Back home</a>
                </Link>
            </h2>

        </>
    )
}