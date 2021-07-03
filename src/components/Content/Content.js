import './style.css'
import { useEffect, useState } from "react";


const Content = ({ category }) => {

    const [contentInner, setContentInner] = useState([]);
    const [numberOfCat, setNumberOfCat] = useState(10);
    
 
    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${numberOfCat}&page=1&category_ids=${category}`)
        .then((res) => res.json())
        .then((data) =>  setContentInner(data)
    )},[numberOfCat, category]);

    console.log(category)

    const onLoadMore = (e) => {
        e.preventDefault()
        setNumberOfCat(state => {
            return state + 10;
        })
    }

    return (
        <div className='container'>
            <div className='content'>
                {contentInner.map(item => {
                    return ( 
                        <div className='img_box'>
                            <img src={item.url}></img>
                        </div>
                    )
                })}
            </div>
            <button onClick={(e) => onLoadMore(e)} >Load More</button>
        </div>
    )
}


export default Content;