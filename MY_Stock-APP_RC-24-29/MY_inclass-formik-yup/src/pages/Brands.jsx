import React from 'react'
import useStockCall from '../hooks/useStockCall'
import { useEffect } from 'react'

const Brands = () => {

  const {
    // getBrands,
     getStockData} = useStockCall()
  useEffect (()=>{
    getStockData('brands')
  }, [])


  return (
    <div>Brands</div>
  )
}

export default Brands