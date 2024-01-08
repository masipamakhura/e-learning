import playIcon from '../img/playIcon.png';

function HeroBanner(){

    return (
        <section className="hero">
            <div className="hero__banner">
                <div className="hero__video">
                    <img src={playIcon} alt="play vedeo" />
                </div>
            </div>
        </section>
    )
}
export default HeroBanner;