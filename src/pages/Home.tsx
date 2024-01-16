export function Home() {
    return <>
        <section className="home" id="hero">
            <h1 className="section__title section__title--home">
                Truck Store
            </h1>
            <p className="section__subtitle section__subtitle--home">Moving you Forward, Mile by Mile</p>
            <video autoPlay muted loop>
                <source src="img/TRuck.webm" type="video/webm" />
                Sorry, your browser doesn't support videos.
            </video>
        </section>
    </>
}