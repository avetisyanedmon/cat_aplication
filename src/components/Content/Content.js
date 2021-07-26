import './style.css'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setNumber } from '../../redux/actions/actions';
import Loading from 'react-loading';


const Content = () => {

    const [contentInner, setContentInner] = useState([]);

    const dispatch = useDispatch();
    
    const {number, categories} = useSelector((state) => {
        return {
            number: state.number,
            categories: state.categories,
        }
    })


    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categories}`)
        .then((res) => res.json())
        .then((data) =>  setContentInner((state) => {
            return state.concat(data)
        })
    )},[number]); 


    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${number}&page=1&category_ids=${categories}`)
        .then((res) => res.json())
        .then((data) =>  setContentInner(data)
    )},[categories]); 


    return (
        <div className='container'>
            {contentInner.length > 0 ? 
            <div className='content'>
                {contentInner.map((item, id) => {
                    return ( 
                        <div className='img_box' key={id}>
                            <img src={item.url} alt='img'></img>
                        </div>
                    )
                })}
            </div> 
            :
            <div className='loading'>
                <Loading type='bars' color='rgb(210 105 30)'/>
            </div>}

            <button onClick={() => dispatch(setNumber())} >Load More</button>
        </div>
    )
}


export default Content;