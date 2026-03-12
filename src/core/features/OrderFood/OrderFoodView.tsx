import ChooseDishForm from './components/ChooseDishForm';
import ChooseMealForm from './components/ChooseMealForm.tsx';
import ChooseRestaurantForm from './components/ChooseRestaurantForm';
import OrderFoodProvider, { useOrderFood } from './components/OrderFoodProvider';
import dishData from '../../../../data/dishes.json';

interface Props {}

export default function OrderFoodView({}: Readonly<Props>) {
  const { step, setStep, order, setOrder } = useOrderFood();

  const restaurantList = dishData.map((d) => d.restaurant);
  const foodList = dishData.map((d) => d.name);

  return (
    <OrderFoodProvider>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full md:w-1/2 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-10 flex flex-col items-center gap-10">
          {step === 1 && <ChooseMealForm />}
          {step === 2 && <ChooseRestaurantForm />}
          {step === 3 && <ChooseDishForm />}
          {step === 4 && <div>Choose Meal Form</div>}
        </div>
      </div>
    </OrderFoodProvider>
  );
}
