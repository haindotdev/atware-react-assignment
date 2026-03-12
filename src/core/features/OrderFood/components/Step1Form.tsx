interface Step1FormProps {
  formData: {
    meal: string;
    people: number;
  };
  updateData: (data: Partial<{ meal: string; people: number }>) => void;
  onNext: () => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ formData, updateData, onNext }) => {
  return (
    <div>
      <div className='flex border-2 border-black rounded-md overflow-hidden bg-white'>
        <div className='px-4 py-2 bg-[#89b4fa] border-r-2 border-black font-bold'>Step 1</div>
        <div className='px-4 py-2 border-r-2 border-black text-gray-400 font-bold'>Step 2</div>
        <div className='px-4 py-2 border-r-2 border-black text-gray-400 font-bold'>Step 3</div>
        <div className='px-4 py-2 text-gray-400 font-bold'>Review</div>
      </div>

      <div className='w-full max-w-sm'>
        <p className='font-bold mb-2 text-slate-800'>Please Select a meal</p>
        <select
          value={formData.meal}
          onChange={(e) => updateData({ meal: e.target.value })}
          className='w-full p-3 border-2 border-black rounded-md font-bold focus:outline-none'
        >
          <option value=''>---</option>
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='dinner'>Dinner</option>
        </select>
      </div>

      <div className='w-full max-w-sm'>
        <p className='font-bold mb-2 text-slate-800'>Please Enter Number of people</p>
        <input
          type='number'
          value={formData.people}
          onChange={(e) => updateData({ people: parseInt(e.target.value) || 1 })}
          min={1}
          max={10}
          className='w-full p-3 border-2 border-black rounded-md font-bold focus:outline-none'
        />
      </div>

      <div className='w-full max-w-sm flex justify-end'>
        <button
          onClick={onNext}
          className='px-8 py-2 bg-white border-2 border-black font-black hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1Form;
