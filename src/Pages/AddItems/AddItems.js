import React from 'react';
import {useForm} from "react-hook-form";

const AddItems = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventories`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result);
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3'> Add Item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })}/>
                <input className='mb-2' placeholder='description' {...register("Description", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo Url' {...register("img", { required: true})}/>
                <input type='submit' value='Add Inventory' />
            </form>
            
        </div>
    );
};

export default AddItems;