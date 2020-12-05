import db from '../../services/firebase';
import { v4 as uuid } from 'uuid';
import {
  Dispatch,
  UserData,
  START_REGISTER,
  FINISH_REGISTER,
} from '../store/types';

const register = ({ name, document, type }: UserData) => async (
  dispatch: Dispatch,
): Promise<void> => {
  try {
    dispatch({ type: START_REGISTER });
    await db.collection('submissions').doc(uuid()).set({
      name,
      document,
      type,
    });
    dispatch({ type: FINISH_REGISTER });
  } catch (error) {
    dispatch({ type: FINISH_REGISTER });
  }
};

export default register;
