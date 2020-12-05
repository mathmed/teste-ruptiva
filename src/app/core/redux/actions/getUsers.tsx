import db from '../../services/firebase';
import {
  Dispatch,
  START_GET_USERS,
  FINISH_GET_USERS,
  UserData,
} from '../store/types';

const getUsers = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: START_GET_USERS });
    const data: UserData[] = [];
    const users = await db.collection('submissions').get();
    users.forEach((user) => data.push(user.data() as UserData));
    dispatch({ type: FINISH_GET_USERS, payload: data });
  } catch (error) {
    dispatch({ type: FINISH_GET_USERS });
  }
};

export default getUsers;
