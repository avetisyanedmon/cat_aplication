import './style.css'
import { useEffect, useState } from "react";

const Sidebar = ({change}) => {

    const [sidebarItems, setSidebarItems] = useState([])

    useEffect(() =>{
        fetch(`https://api.thecatapi.com/v1/categories`)
        .then((res) => res.json())
        .then((data) =>  setSidebarItems(data))
    
    },[])


    
    return(
        <div className='sidebar'>
            {sidebarItems.map((item, id) => {
                return <div className='sidebar_item'
                        onClick={() => change(id + 1)}>
                        {item.name}
                    </div>
            })}
        </div>
    )
}

export default Sidebar;