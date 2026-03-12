export class CreateFoodOrderDto {
  meal: string;
  numberOfPeople: number;
  restaurant: string;
  dishes: { name: string; servings: number }[];
}
