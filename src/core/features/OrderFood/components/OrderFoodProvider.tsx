import React, { createContext, useState } from 'react';
import type { CreateFoodOrderDto } from '../../../dtos/create-food-order.dto';

interface OrderFoodContextType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  order: CreateFoodOrderDto | null;
  setOrder: React.Dispatch<React.SetStateAction<CreateFoodOrderDto | null>>;
}

export const OrderFoodContext = createContext<OrderFoodContextType | undefined>(undefined);

export const useOrderFood = () => {
  const context = React.useContext(OrderFoodContext);
  if (!context) {
    throw new Error('useOrderFood must be used within an OrderFoodProvider');
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export default function OrderFoodProvider({ children }: Readonly<Props>) {
  const [createFoodOrderDto, setCreateFoodOrderDto] = useState<CreateFoodOrderDto | null>(null);
  const [step, setStep] = useState(1);

  return (
    <OrderFoodContext.Provider
      value={{
        order: createFoodOrderDto,
        setOrder: setCreateFoodOrderDto,
        step,
        setStep,
      }}
    >
      {children}
    </OrderFoodContext.Provider>
  );
}
