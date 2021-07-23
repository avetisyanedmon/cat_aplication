import './style.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/actions/actions';

const Sidebar = ({change}) => {

    const [sidebarItems, setSidebarItems] = useState([]);

    const dispatch = useDispatch();

    useEffect(() =>{
        fetch(`https://api.thecatapi.com/v1/categories`)
        .then((res) => res.json())
        .then((data) =>  setSidebarItems(data))
    
    },[])



    
    return(
        <div className='sidebar'>
            {sidebarItems.map((item, id) => {
                return <div className='sidebar_item'
                        onClick={() => dispatch(setCategory(id))}>
                        {item.name}
                    </div>
            })}
        </div>
    )
}

export default Sidebar;