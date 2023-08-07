import { act } from 'react-dom/test-utils';

import RankContainer from 'containers/ranks';
import * as nextRouter from 'next/router';
import { screen, render } from 'test.utils';
import { instance, mock } from 'ts-mockito';

const push = jest.fn();
const mockedRouterType = mock<nextRouter.NextRouter>({});
const mockedRouter = instance(mockedRouterType);
jest.spyOn(nextRouter, 'useRouter').mockImplementation(() => ({
  ...mockedRouter,
  route: '/',
  push,
}));

describe('Top 100 Rankers View', () => {
  test('Should render title', async () => {
    await act(() => {
      render(<RankContainer />);
    });
    expect(screen.getByText('Top Rankers')).toBeInTheDocument();
  });
});
