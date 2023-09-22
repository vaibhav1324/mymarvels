import create, { State } from 'zustand';

import { persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CurrentUser {
  userName?: string;
  emailAddress?: string;
  id?: string;
}
export interface CredentialStore extends State {
  currentUser?: CurrentUser;
  token?: string;
  login: (emailAddress: string, password: string) => void;
  logout: () => void;
}

const userSelector = (state: CredentialStore) => state.currentUser;

const useCredentialStore = create<CredentialStore>(
  persist(
    (set) => ({
      currentUser: undefined,
      token: undefined,
      login: async (emailAddress: string, _: string) => {
        const dummyUser = {
          userName: 'Vaibhav',
          emailAddress,
          id: 'UniqueValariId',
        };

        const dummyToken = 'ASDSKLAJD@&*#^&*@#^&*@#KLJASKLD&*@&*#^@&*#^';

        set({ currentUser: dummyUser, token: dummyToken });
      },
      logout: async () => {
        set({ currentUser: undefined, token: undefined });
      },
    }),
    {
      name: 'auth-storage', // unique name
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    },
  ),
);

export { useCredentialStore, userSelector };
