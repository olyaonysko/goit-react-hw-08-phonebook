import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className={s.container}>
          <h1 className={s.title}>
            Don't forget about your friend, add them to your phonebook{' '}
            <span role="img" aria-label="icon">
              🙄
            </span>
          </h1>
        </div>
      ) : (
        <div className={s.container}>
          <h2 className={s.title}>
            This is your phonebook, <span className={s.active}>Sign up</span> or{' '}
            <span className={s.active}>Log in</span> to continue 📱
          </h2>
        </div>
      )}
    </>
  );
};

export default HomeView;
