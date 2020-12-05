import db from '../../services/firebase';
import { Dispatch } from '../store/types';

const deleteUser = (uuid: string) => async (
  dispatch: Dispatch,
): Promise<void> => {
  try {
    await db.collection('submissions').doc(uuid).delete();
  } catch (error) {}
};

export default deleteUser;
