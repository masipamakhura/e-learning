import { useState } from "react";

function Card({con}){
 const [selected,setSelect] = useState('dark-bg');
 var  handleSelected = (ev)=>{

    

    var cls = selected.includes('active') ? 'dark-bg' : 'dark-bg active-bg'
    setSelect(cls);
  }
    return <div className="card-container">
        <div  className="card">
            <div className="card__heading">
                <h2>{con.heading}</h2>
            </div>
            <div className="card__sub-heading">
                <h3>{con.subHeading}</h3>
            </div>
            <div className="card__listing">
                <ul className="card__list">
                    {
                        con.list.map((listItem ,index)=>{

                            return(
                                <li key={listItem.text} className="card__list-item" onClick={handleSelected}>
                                    {listItem.text}
                                    <div className="card__details">
                                    
                                    <span>{listItem.lesson}</span>
                                     { <span className={selected}>{listItem.minutes}</span>  }  
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    </div>
}

export default Card;