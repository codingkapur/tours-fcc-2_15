import Tour from "./Tour"

function Tours({ data, onClick }) {
    return (
        <article>
            <div className="title">
                <h2>Our tours:</h2>
            </div>
            <div>
                {data.map((tour)=> {
                    
                
                return <Tour key={tour.id} {...tour} onClick={onClick}/>
                })}
            </div>
        </article>
    )
}

export default Tours