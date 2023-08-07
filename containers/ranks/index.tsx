import { Button } from 'components/Button';
import SectionContainer from 'containers/base/SectionContainer';
import style from 'containers/ranks/index.module.scss';
import RankerTable from 'containers/ranks/RankerTable';
import { useRouter } from 'next/router';
import useGetTop100Rankers from 'services/catcher/useGetTop100Rankers';
import { StaticLink } from 'shared/configs/links';

const RankContainer = () => {
  const router = useRouter();

  const { data: topRankers } = useGetTop100Rankers();

  const handleGotoHome = () => {
    router.push(StaticLink.Home);
  };

  const handlePlayGame = () => {
    router.push(StaticLink.GamePlay);
  };

  return (
    <SectionContainer className={style.container}>
      <h1 className={style.title}>Top Rankers</h1>
      <div className={style.buttonWrapper}>
        <Button variant="secondary" onClick={handleGotoHome}>
          Back
        </Button>
        <Button onClick={handlePlayGame}>Play</Button>
      </div>
      <RankerTable data={topRankers} />
    </SectionContainer>
  );
};

export default RankContainer;
