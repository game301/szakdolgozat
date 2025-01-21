const Footer = () => {
    return (
        <footer className='flex items-center justify-center rounded-t-2xl bg-navbarBgColor'>
            <div className='hidden items-center justify-center  text-navIconContainerFontSize dark:text-darkModePrimaryColor navbarChange:flex'>
                <button type='button' className='pe-2 ps-2'>
                    <a href='' target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                </button>
                <button type='button' className='pe-2 ps-2'>
                    <a href='' target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                </button>
                <button type='button' className='me-2 pe-2 ps-2'>
                    <a href='' target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-reddit'></i>
                    </a>
                </button>
            </div>
        </footer>
    )
}

export default Footer
