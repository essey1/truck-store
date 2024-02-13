export function Home() {
    return <>
        <section className="home" id="hero">
            <div className="home__titles">
                <h1 className="section__title section__title--home">
                    Truck Store
                </h1>
                <p className="section__subtitle section__subtitle--home">Moving you Forward, Mile by Mile</p>

            </div>
            
            <video className="home__video" autoPlay muted loop>
                <source src="img/pickup.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
        </section>
    </>
}