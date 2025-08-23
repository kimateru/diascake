import React from 'react'
import cakeFillings from '../data/cakes';
import { useState, useEffect } from 'react';

const RangePicker = () => {
  
    const [selectedRange, setSelectedRange] = useState(null);
    const [selectedCake, setSelectedCake] = useState(null);
    const [finalPrice, setFinalPrice] = useState(0);
    const [kg, setKg] = useState(0);


    useEffect(() => {



    }, [selectedRange])
  
  
    return (
    <div>
        {/* range picker ui */}
        <div className='flex flex-col items-center justify-center'>
            
        </div>


    </div>
  )
}

export default RangePicker