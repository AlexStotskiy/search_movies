function Footer() {
    return (
        <footer className='page-footer teal lighten-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Alex Stotskiy
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/AlexStotskiy/search_movies'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
