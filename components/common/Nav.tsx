import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/todo">TODO</Link>
            <Link href="/works">WORKS</Link>
        </nav>
    );
};
