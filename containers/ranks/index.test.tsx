import { act } from 'react-dom/test-utils';

import RankContainer from 'containers/ranks';
import { screen, render } from 'test.utils';

describe('Top 100 Rankers View', () => {
  test('Should render title', async () => {
    await act(() => {
      render(<RankContainer />);
    });
    expect(screen.getByText('Top Rankers')).toBeInTheDocument();
  });
});
