function Header() {
    return (
        <nav className='teal lighten-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://alexstotskiy.github.io/search_movies'
                    className='brand-logo'
                >
                    Search Movies
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/AlexStotskiy/search_movies'>
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
