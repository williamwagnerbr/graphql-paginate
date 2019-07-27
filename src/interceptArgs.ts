import PaginationInputType from './types/PaginationInput';

const interceptArgs = function (query) {
  return {
    ...query,
    args: {
      ...query.args,
      pagination: {
        type: PaginationInputType
      }
    }
  }
}

export default interceptArgs;