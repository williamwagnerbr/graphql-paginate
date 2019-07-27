import {
  createPaginationType,
  createPaginationTypes
} from './createPaginationObject';
import interceptResolver from './interceptResolver';
import interceptArgs from './interceptArgs';
import interceptQuery from './interceptQuery';
import PaginationInputType from './types/PaginationInputType';
import SorterInputType from './types/SorterInputType';

export {
  createPaginationType,
  createPaginationTypes,
  interceptResolver,
  interceptArgs,
  interceptQuery,
  SorterInputType,
  PaginationInputType
}

export default createPaginationType;