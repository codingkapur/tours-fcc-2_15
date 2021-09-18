import Tour from "./Tour"

function Tours({ data }) {
    return (
        <article>
            <div className="title">
                <h2>Our tours</h2>
            </div>
            <div>
                {data.map((tour)=> {

                
                return <Tour key={tour.id} {...tour}/>
                })}
            </div>
        </article>
    )
}

export default Tours