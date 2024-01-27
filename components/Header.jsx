export default function Header() {
    return <nav className="nav">
        <a href="/" className="home-page">Sarah Leder</a>
        <ul>
        <li className="active">
                <a href="/AboutMe">About Me</a>
            </li>
            <li>
                <a href="/Portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/Resume">Resume</a>
            </li>
            <li>
                <a href="/Contact">Contact Me</a>
            </li>
        </ul>
    </nav>
}