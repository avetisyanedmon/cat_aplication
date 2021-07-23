import './style.css'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setNumber } from '../../redux/actions/actions';


const Content = ({ category }) => {

    const [contentInner, setContentInner] = useState([]);
    const [numberOfCat, setNumberOfCat] = useState(10);

    const dispatch = useDispatch();
    
    const {number, categories} = useSelector((state) => {
        return {
            number: state.number,
            categories: state.categories,
        }
    })


    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${number}&page=1&category_ids=${categories}`)
        .then((res) => res.json())
        .then((data) =>  setContentInner(data)
    )},[number, categories]); 



    return (
        <div className='container'>
            <div className='content'>
                {contentInner.map(item => {
                    return ( 
                        <div className='img_box'>
                            <img src={item.url} alt='img'></img>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => dispatch(setNumber())} >Load More</button>
        </div>
    )
}


export default Content;