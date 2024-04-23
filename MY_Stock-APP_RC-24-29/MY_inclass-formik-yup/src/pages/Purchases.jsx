import React from 'react'
import useStockCall from '../hooks/useStockCall';

const Purchases = () => {
  const {getStockData} = useStockCall();

  useEffect(() => {
    getStockData("firms");
  }, []);
 
  return (
    <div>Purchases</div>
  )
}

export default Purchases