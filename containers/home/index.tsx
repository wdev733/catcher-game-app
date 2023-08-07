import { Button } from 'components/Button';
import style from 'containers/home/index.module.scss';
import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';

const Home = () => {
  const router = useRouter();

  const handleStartGame = () => {
    router.push(StaticLink.GamePlay);
  };

  const handleGotoRank = () => {
    router.push(StaticLink.Rank);
  };

  return (
    <div className={style.container}>
      <Button variant="primary" className={style.menuButton} onClick={handleStartGame}>
        Start Game
      </Button>
      <Button variant="secondary" className={style.menuButton} onClick={handleGotoRank}>
        Leaderboard
      </Button>
    </div>
  );
};

export default Home;
