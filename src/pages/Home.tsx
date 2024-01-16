export function Home() {
    return <>
        <section className="home" id="hero">
            <h1 className="section__title section__title--home">
                Truck Store
            </h1>
            <p className="section__subtitle section__subtitle--home">Moving you Forward, Mile by Mile</p>
            <video className="video-bg" 
                autoPlay muted loop controls>
                <source src="1.mp4" type="video/mp4"></source>
            </video>
        </section>
    </>
}