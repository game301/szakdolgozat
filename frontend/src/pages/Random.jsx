const Random = () => {
    const randomContent = []
    console.log(randomContent[Math.floor(Math.random() * 10)])

    return (
        <main>
            <iframe
                src={randomContent[Math.floor(Math.random() * 10)]}
                width='10000'
                height='10000'></iframe>
        </main>
    )
}

export default Random
