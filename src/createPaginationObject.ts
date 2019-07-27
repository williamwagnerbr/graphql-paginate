import {
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql';

const createPaginationTypes = function (type: GraphQLObjectType) {
  const PaginationEdgeType = new GraphQLObjectType({
    name: `PaginationOf${type.name}Edge`,
    fields: {
      data: {
        type: type
      },
      cursor: {
        type: new GraphQLNonNull(GraphQLString)
      }
    }
  });

  const PaginationType = new GraphQLObjectType({
    name: `PaginationOf${type.name}`,
    fields: {
      edges: {
        type: new GraphQLList(PaginationEdgeType)
      },
      cursor: {
        type: new GraphQLNonNull(GraphQLString)
      },
      total: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    }
  });

  return { PaginationType, PaginationEdgeType }
}

const createPaginationType = function (type: GraphQLObjectType) {
  return createPaginationTypes(type).PaginationType;
}

export {
  createPaginationTypes,
  createPaginationType
}

export default createPaginationType;