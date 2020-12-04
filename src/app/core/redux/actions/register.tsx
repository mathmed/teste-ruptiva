import db from '../../services/firebase';
import { v4 as uuid } from 'uuid';
import {
  Dispatch,
  RegisterActionData,
  START_REGISTER,
  FINISH_REGISTER,
} from '../store/types';

const register = ({ name, document, type }: RegisterActionData) => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch({ type: START_REGISTER });
  await db.collection('submissions').doc(uuid()).set({
    name,
    document,
    type,
  });

  dispatch({ type: FINISH_REGISTER });
};

export default register;
