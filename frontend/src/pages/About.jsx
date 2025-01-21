const About = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='flex w-6/12 flex-col items-center justify-center'>
                    <img src='' alt='' className='m-1.5 w-7/12 rounded-[5%]' />
                    <div>
                        <h2 className='hover:scale-x-1 focus:scale-x-1 p-1.5 text-center font-fontNormal text-cultSubHeaderSmallScreenFontSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            Mi vagyunk az xy
                        </h2>
                        <p className='hover:scale-x-1 focus:scale-x-1 p-1.5 font-fontNormal text-footerCopyrightSize duration-300 ease-in-out dark:text-darkModePrimaryColor'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Natus labore doloremque veniam aspernatur
                            deleniti nostrum adipisci quos consectetur magnam.
                            Nobis.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
