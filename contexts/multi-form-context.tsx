"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import {
  bookingService,
  InputBookingServiceData,
} from "@/model/bookingServiceModel";
import { createContext, ReactNode, useEffect, useState } from "react";

interface MultiFormContextType {
  formData: InputBookingServiceData;
  updateFormData: (data: Partial<InputBookingServiceData>) => void;
  clearFormData: () => void;
}

// export const MultiFormContext = createContext<MultiFormContextType | undefined>(
//   undefined,
// );

export const MultiFormContext = createContext({
  formData: {
    id: bookingService.length,
    serviceName: "",
    duration: 5,
    numOfAttending: 1,
    apointmentDate: new Date(),
    technician: "",
    note: "",
  },
  updateFormData: () => {},
  clearFormData: () => {},
} as MultiFormContextType);

const STORAGE_KEY = "BOOKING_SERVICE_DATA";

export const MultiFormProvider = ({ children }: { children: ReactNode }) => {
  const {
    getItemFromLocalStorage,
    saveItemToLocalStorage,
    removeItemFromLocalStorage,
  } = useLocalStorage();
  const initialFormData: InputBookingServiceData = {
    id: bookingService.length,
    serviceName: "",
    duration: 5,
    numOfAttending: 1,
    apointmentDate: new Date(),
    technician: "",
    note: "",
  };

  const [formData, setFormData] = useState<InputBookingServiceData>(() => {
    const saved = getItemFromLocalStorage(STORAGE_KEY);
    return saved !== null ? saved : initialFormData;
  });

  const updateFormData = (data: Partial<InputBookingServiceData>) => {
    const updatedData = { ...formData, ...data };
    saveItemToLocalStorage(STORAGE_KEY, JSON.stringify(updatedData));
    setFormData(updatedData);
  };

  const clearFormData = () => {
    setFormData(initialFormData);
    removeItemFromLocalStorage(STORAGE_KEY);
  };

  return (
    <MultiFormContext.Provider
      value={{ formData, updateFormData, clearFormData }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};
