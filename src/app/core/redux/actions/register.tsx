import db from '../../services/firebase';
import {
  Dispatch,
  UserData,
  START_REGISTER,
  FINISH_REGISTER,
} from '../store/types';

const register = ({ name, document, type, id }: UserData) => async (
  dispatch: Dispatch,
): Promise<void> => {
  try {
    dispatch({ type: START_REGISTER });
    await db.collection('submissions').doc(id).set({
      name,
      document,
      type,
      id,
    });
    dispatch({ type: FINISH_REGISTER });
  } catch (error) {
    dispatch({ type: FINISH_REGISTER });
  }
};

export default register;
