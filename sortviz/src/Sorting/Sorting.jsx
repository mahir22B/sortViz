import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./Sorting.css"

const Sorting = () => {

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      
    const [main, useMain] = useState([]);

        
        const ResetArray = () => {
            let arr = []
            for (let i = 0; i < 280 ; i++ ){
                arr.push(randomIntFromInterval(5, 900))
            }
            useMain(arr);
        }

        useEffect(()=>{
            ResetArray();
        },[])


        const merge = () => {
            
        }

        const quick = () => {

        }

        const heap = () => {

        }

        const bubble = () => {

        }


  return (
      <>
    <div className='array-container'>
        {main.map((value,id)=>(
            <div className='array-bar' key={id} style={{height:`${value/2}px`}}>
            </div>
        ))}
    </div>
    <div className='btn'>
        <button onClick={ResetArray}>Generate New Array</button> 
        <button onClick={merge}>Merge Sort</button> 
        <button onClick={quick}>Quick Sort</button> 
        <button onClick={heap}>Heap Sort</button> 
        <button onClick={bubble}>Bubble Sort</button> 
    </div>    
    </>
  )
}

export default Sorting