import { Magic } from 'magic-sdk';

const magic = new Magic(import.meta.env.SNOWPACK_PUBLIC_MAGIC_KEY);

export const login = async (email: string) => {
  console.log('here');
  await magic.auth.loginWithMagicLink({ email });
};
