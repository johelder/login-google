import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Google = {
  async signIn() {
    try {
      const response = await GoogleSignin.signIn();

      return {
        data: response.user,
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  },

  async signOut() {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      throw new Error();
    }
  },
};

export {Google};
