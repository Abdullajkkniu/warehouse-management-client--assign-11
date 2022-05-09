import { useEffect, useState } from "react";


const useInventoryDetail = () =>{
    const [inventory, setInventory] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/inventories`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setInventory(data));
    },[]);
    return [inventory, setInventory];
}

export default useInventoryDetail;