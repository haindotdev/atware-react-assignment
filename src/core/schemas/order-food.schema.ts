import z from 'zod';
import { MealEnum } from '../../shared/enums/meal.enum';

// Form schema for choosing meal and number of people
export const orderFoodChooseMealSchema = z.object({
  type: z.enum(Object.values(MealEnum) as unknown as [string, ...string[]], {
    errorMap: () => ({ message: 'Meal is required' }),
  }),
  people: z
    .number()
    .min(1, { message: 'At least 1 person is required' })
    .max(10, { message: 'Maximum 10 people allowed' }),
});
export type OrderFoodChooseMealDto = z.infer<typeof orderFoodChooseMealSchema>;

// Form schema for choosing restaurant
export const orderFoodChooseRestaurantSchema = z.object({
  restaurant: z.string().min(1, { message: 'Restaurant is required' }),
});
export type OrderFoodChooseRestaurantDto = z.infer<typeof orderFoodChooseRestaurantSchema>;

// Form schema for choosing dishes and servings
export const orderFoodChooseDishesSchema = z.object({
  dishes: z.array(
    z.object({
      name: z.string().min(1, { message: 'Dish name is required' }),
      servings: z
        .number()
        .min(1, { message: 'At least 1 serving is required' })
        .max(10, { message: 'Maximum 10 servings allowed' }),
    })
  ),
});
export type OrderFoodChooseDishesDto = z.infer<typeof orderFoodChooseDishesSchema>;
