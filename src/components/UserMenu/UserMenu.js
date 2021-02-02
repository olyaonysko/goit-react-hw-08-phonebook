import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from '@material-ui/core/Button';
import defaultAvatar from '../../img/defaultAvatar.jpg';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="50" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
