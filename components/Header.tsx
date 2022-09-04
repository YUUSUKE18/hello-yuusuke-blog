import Link from 'next/link'

const Header = () => {
    return(
        <header>
            <div className=''>
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
            </div>
            <div className=''>
                <Link href={"/about"}>
                    <a>About</a>
                </Link>
            </div>
        </header>
    )
}

export default Header;