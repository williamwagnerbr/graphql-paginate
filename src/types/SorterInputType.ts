import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInputType
} from 'graphql';

export default new GraphQLInputType({
  name: 'GraphQLPaginationSorterInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Sorting rule/method'
    },
    reverse: {
      type: GraphQLBoolean,
      description: 'Invert normal sorting'
    }
  }
});