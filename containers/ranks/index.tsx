import Link from 'next/link';
import useGetTop100Rankers from 'services/catcher/useGetTop100Rankers';
import { StaticLink } from 'shared/configs/links';
import SectionContainer from 'containers/base/SectionContainer';
import style from 'containers/ranks/index.module.scss';
import RankerTable from 'containers/ranks/RankerTable';

const RankContainer = () => {
  const { data: topRankers } = useGetTop100Rankers();

  return (
    <SectionContainer className={style.container}>
      <h1 className={style.title}>Top Rankers</h1>
      <Link href={StaticLink.Home}>Back</Link>
      <RankerTable data={topRankers} />
    </SectionContainer>
  );
};

export default RankContainer;
