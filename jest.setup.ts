import 'whatwg-fetch';
import { TextEncoder } from 'util';

import fetchMock from 'jest-fetch-mock';

global.TextEncoder = TextEncoder;
fetchMock.enableMocks();
