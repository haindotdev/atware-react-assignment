import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderFoodChooseDishesSchema, type OrderFoodChooseDishesDto } from '../../../schemas/order-food.schema';
import Select from '../../../../shared/components/atoms/Select';
import Input from '../../../../shared/components/atoms/Input';

interface Dish {
  id: number;
  name: string;
}

interface Props {
  defaultValues?: Partial<OrderFoodChooseDishesDto>;
  availableDishes: Dish[];
  onSubmit: (data: OrderFoodChooseDishesDto) => void;
  onBack: () => void;
}

export default function ChooseDishForm({ defaultValues, availableDishes, onSubmit, onBack }: Readonly<Props>) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OrderFoodChooseDishesDto>({
    resolver: zodResolver(orderFoodChooseDishesSchema),
    defaultValues: {
      dishes: defaultValues?.dishes ?? [],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'dishes' });

  const dishOptions = availableDishes.map((d) => ({ value: d.name, label: d.name }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-xl">
      {fields.length === 0 && <p className="text-gray-500 text-sm">Press + to add a dish</p>}

      {fields.map((field, index) => (
        <div key={field.id} className="flex items-start gap-6">
          <div className="flex-1">
            <Select
              label="Please Select a Dish"
              placeholder="---"
              options={dishOptions}
              error={errors.dishes?.[index]?.name?.message}
              required
              {...register(`dishes.${index}.name`)}
            />
          </div>

          <div className="w-28">
            <Input
              label="No. of Servings"
              type="number"
              min={1}
              max={10}
              error={errors.dishes?.[index]?.servings?.message}
              required
              {...register(`dishes.${index}.servings`, { valueAsNumber: true })}
            />
          </div>

          <button
            type="button"
            onClick={() => remove(index)}
            className="mt-6 text-red-500 font-bold text-lg leading-none cursor-pointer"
            aria-label="Remove dish"
          >
            &times;
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ name: '', servings: 1 })}
        className="w-10 h-10 rounded-full border-[3px] border-black text-xl font-bold cursor-pointer"
        aria-label="Add dish"
      >
        +
      </button>

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
