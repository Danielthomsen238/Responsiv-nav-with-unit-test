import { create } from "zustand";

interface Switch {
  toggleClass: boolean;
  switchToggle: () => void;
}

export const useSwitch = create<Switch>((set) => ({
  toggleClass: false,
  switchToggle: () => set((state) => state!),
}));
