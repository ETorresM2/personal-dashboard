import React, {useState, useEffect} from "react";

function News() {

    const [newsData, setNewsData] = useState(null)

    useEffect(() => {
        fetchNewsData();
    }, []);

    const fetchNewsData = async() => {
        try {
            const response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=EUoOKTNAV9PMzBnpA0HVoHueAnrJXGR0")
        
        const data = await response.json();
        setNewsData(data)

        } catch (error) {
            console.error(error)
        }
        
    }

    return (
        <div>
            <h2>News Widget</h2>
            {newsData ? (
                <div>
                    <h1>{newsData.results[0].abstract}</h1>
                </div>
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default News;