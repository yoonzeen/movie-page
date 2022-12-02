import { useRouter } from 'next/router';

export default function Header() {
    const param = useRouter();
    console.log(param);
    return (
        <div className= "header">
            <h1 className="title">Page </h1>
        </div>
    );
}