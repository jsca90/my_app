import React, { useEffect, useState } from 'react'
import { dbService } from '../fbase';

const Lists = () => {
    const [Lists, setLists] = useState([]);
    useEffect(() => {
        dbService
            .collection("Lists")
            .onSnapshot((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setLists(data);
            });
    }, []);
    return (<>
        {Lists.map((item, index)=>{
            return <h1 key={index}>{item.user}{item.teamName}</h1>
        })}
    </>)
}

export default Lists;