
import Card from './Card';
import {con} from '../cardBuilder.js';
console.log("content", con)
function Grid(){
    
    return <section className='grid-container'>
         {
           con.map((c,i) => <Card con={c} key={i} />)
         }
    </section>
}
export default Grid;