import { useEffect } from 'react';
import { fetchUsers } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
  const { users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>

      {loading && <strong>Yükleniyor...</strong>}
      {error && <strong>{error.message}</strong>}
      <ul>
        {users?.map((user) => (
          <li>{user.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
