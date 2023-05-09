import styles from './assets/App.module.scss';

import Title from './components/common/title/title';
import Main from './layouts/main/main';

function App() {
  return (
    <div className={styles.container}>
      <Title className={styles.title} tag='h1'>Форма бронирования переговорной</Title>
      <Main />
    </div>
  );
}

export default App;
