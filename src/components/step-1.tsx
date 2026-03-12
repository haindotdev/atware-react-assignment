import React from 'react';

interface Step1Props {
  formData: {
    meal: string;
    people: number;
  };
  updateData: (data: Partial<{ meal: string; people: number }>) => void;
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, updateData, onNext }) => {
  return (
    (
      /* Container căn giữa màn hình */
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

        {/* Card chính: ép chiều rộng 50% trên desktop, viền đen bao quanh toàn bộ */}
        <div className="w-full md:w-1/2 bg-white border-4 border-solid border-black p-8 flex flex-col gap-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">

          {/* Stepper có viền bao quanh */}
          <div className="flex w-fit border-4 border-solid border-black">
            <div className="px-4 py-2 bg-[#89b4fa] border-r-4 border-solid border-black font-bold">Step 1</div>
            <div className="px-4 py-2 border-r-4 border-solid border-black text-gray-400 font-bold">Step 2</div>
            <div className="px-4 py-2 border-r-4 border-solid border-black text-gray-400 font-bold">Step 3</div>
            <div className="px-4 py-2 text-gray-400 font-bold">Review</div>
          </div>

          {/* Select Meal */}
          <div className="w-full">
            <p className="font-bold text-xl mb-2 italic">Please Select a meal</p>
            <select
              value={formData.meal}
              onChange={(e) => updateData({ meal: e.target.value })}
              className="w-full block p-4 bg-white border-4 border-solid border-black rounded-none font-bold text-lg focus:outline-none appearance-none cursor-pointer"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'black\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'4\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em' }}
            >
              <option value="">---</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          {/* Number of People */}
          <div className="w-full">
            <p className="font-bold text-xl mb-2 italic">Please Enter Number of people</p>
            <input
              type="number"
              value={formData.people}
              onChange={(e) => updateData({ people: parseInt(e.target.value) || 1 })}
              min={1}
              className="w-full block p-4 bg-white border-4 border-solid border-black rounded-none font-bold text-lg focus:outline-none"
            />
          </div>

          {/* Button Next */}
          <div className="w-full flex justify-end mt-4">
            <button
              onClick={onNext}
              className="px-10 py-3 bg-white border-4 border-solid border-black font-black text-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    )  );
};

export default Step1;
