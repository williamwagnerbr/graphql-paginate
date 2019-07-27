
const interceptResolver = function (resolver) {
  return async function (parent, args, context) {
    const { cursor } = args;

    let results = await resolver(parent, args, context);
    let hasNext = true;

    if (cursor) {
      let foundCursorRow = results.filter((row) => row.id === cursor);
      
      if (foundCursorRow.length > 0) {
        hasNext = false;
      }
    }
    
    return {
      data: results.map(function (row) {
        return {
          data: row,
          cursor: row.id
        }
      }),
      total: results.length,
      hasPrev: false,
      hasNext: hasNext,
      firstCursor: 'aaaa',
      lastCursor: 'aaaa',
      prevCursor: 'aaaa',
      nextCursor: 'aaaa'
    }
  }
};

export default interceptResolver;