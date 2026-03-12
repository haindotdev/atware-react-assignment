import { useForm } from 'react-hook-form';
import { orderFoodChooseMealSchema, type OrderFoodChooseMealDto } from '../../../schemas/order-food.schema';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {}

export default function ChooseMealForm({}: Readonly<Props>) {
  const form = useForm<OrderFoodChooseMealDto>({
    resolver: zodResolver(orderFoodChooseMealSchema),
    defaultValues: {
      type: '',
      people: 1,
    },
  });

  const onSubmit = (data: OrderFoodChooseMealDto) => {
    console.log(data);
  };

  return <form onSubmit={form.handleSubmit(onSubmit)}></form>;
}
