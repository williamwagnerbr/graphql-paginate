import {
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputType
} from 'graphql';

import SorterInputType from './SorterInput';

export default new GraphQLInputType({
  name: 'GraphQLPaginationInput',
  fields: {
    limit: {
      type: GraphQLInt,
      description: 'Max items per page'
    },
    cursor: {
      type: GraphQLString,
      description: 'Continue previous request'
    },
    sorters: {
      type: new GraphQLList(new GraphQLNonNull(SorterInputType)),
      description: 'Sorting orders'
    }
  }
});