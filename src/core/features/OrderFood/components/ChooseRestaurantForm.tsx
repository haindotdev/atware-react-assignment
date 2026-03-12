import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFoodChooseRestaurantSchema, type OrderFoodChooseRestaurantDto } from '../../../schemas/order-food.schema';
import Select from '../../../../shared/components/atoms/Select';

interface Props {
  defaultValues?: Partial<OrderFoodChooseRestaurantDto>;
  restaurants: string[];
  onSubmit: (data: OrderFoodChooseRestaurantDto) => void;
  onBack: () => void;
}

export default function ChooseRestaurantForm({ defaultValues, restaurants, onSubmit, onBack }: Readonly<Props>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFoodChooseRestaurantDto>({
    resolver: zodResolver(orderFoodChooseRestaurantSchema),
    defaultValues: {
      restaurant: defaultValues?.restaurant ?? '',
    },
  });

  const restaurantOptions = restaurants.map((r) => ({ value: r, label: r }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-md">
      <Select
        label="Please Select a Restaurant"
        placeholder="---"
        options={restaurantOptions}
        error={errors.restaurant?.message}
        required
        {...register('restaurant')}
      />

      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2 border-2 border-black shadow-[3px_3px_0px_black] font-bold cursor-pointer"
        >
          Previous
        </button>
        <button
          type="submit"
          className="px-5 py-2 border-2 border-black shadow-[3px_3px_0px_black] font-bold cursor-pointer"
        >
          Next
        </button>
      </div>
    </form>
  );
}
