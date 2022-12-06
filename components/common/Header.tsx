import { useRouter } from 'next/router';

export default function Header() {
    const param = useRouter();
    return (
        <div className= "header">
            <h1 className="title">Page </h1>
        </div>
    );
}