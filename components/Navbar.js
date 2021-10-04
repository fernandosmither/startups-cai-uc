import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={100} height={100} />
            </div>
            <h1> Encuentra tu talento! </h1>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/"><a>¿Quiénes somos?</a></Link>
        </nav>
    );
}

export default Navbar;
