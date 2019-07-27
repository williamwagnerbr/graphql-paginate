import interceptResolver from './interceptResolver';
import interceptArgs from './interceptArgs';

const interceptQuery = function (query) {
  return interceptResolver(interceptArgs(query));
}

export default interceptQuery;