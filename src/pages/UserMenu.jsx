import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, selectUserToken } from 'redux/auth/auth.selectors';
import { logOutThunk } from 'redux/auth/auth.operations';

export default function Home() {
  const userEmail = useSelector(selectUserData);
  const userToken = useSelector(selectUserToken);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Your email: {userEmail && userEmail.email}</p>
      <button onClick={() => dispatch(logOutThunk(userToken))}>Log out</button>
    </div>
  );
}
