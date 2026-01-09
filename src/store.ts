import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Object3D = {
  id: string;
  color: string;
  size: number;
  position: [number, number, number];
  direction: 'x' | 'y' | 'z';
  velocity?: number;
};

type Store = {
  objects: Object3D[];
  addObject: (obj: Object3D) => void;
  clearObjects: () => void;
};

export const useObjectsStore = create<Store>()(
  persist(
    (set) => ({
      objects: [],
      addObject: (obj) => set((state) => ({ objects: [...state.objects, obj] })),
      clearObjects: () => set({ objects: [] }),
    }),
    {
      name: 'object-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
