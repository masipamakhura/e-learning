import amazon from '../img/amazon.png';
import zapier from '../img/zapier.png';
import zoom from '../img/zoom.png';
import spotify from '../img/sportify.png';
import adobe from '../img/adobe.png';
import notion from '../img/notion.png';
import netflix from '../img/notion.png';

function ClientListing(){

    return <section className="client">
        <ul className="client__list">
            <li className="client__image">
                <img src={zapier} alt='zapier' />
            </li>
            
            <li className="client__image">
                <img src={spotify} alt='spotify' />
            </li>

            <li className="client__image">
                <img src={zoom} alt='zoom' />
            </li>
            <li className="client__image">
                <img src={amazon} alt='amazon' />
            </li>

            <li className="client__image">
                <img src={adobe} alt='adobe' />
            </li>
            <li className="client__image">
                <img src={notion} alt='notion' />
            </li>
            <li className="client__image">
                <img src={netflix} alt='netflix' />
            </li>
        </ul>
    </section>
}

export default ClientListing;