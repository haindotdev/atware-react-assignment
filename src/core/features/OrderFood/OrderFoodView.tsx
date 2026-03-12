import { useState } from 'react';

const OrderFoodView = () => {

  const [ step, setStep ] = useState(1);

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
      <div
        className='w-full md:w-1/2 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-10 flex flex-col items-center gap-10'>
        {/*
        STEP 1, 2, 3, 4
         */}
      </div>
    </div>
  );
};

export default OrderFoodView;
