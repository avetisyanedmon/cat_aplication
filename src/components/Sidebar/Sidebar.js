import './style.css'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/actions/actions';

const Sidebar = () => {

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
                return <div className='sidebar_item' key={id}
                        onClick={() => dispatch(setCategory(id))}>
                        {item.name}
                    </div>
            })}
        </div>
    )
}

export default Sidebar;