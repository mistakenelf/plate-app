import GraphQLJSON from 'graphql-type-json'

export default {
  JSON: GraphQLJSON,

  Query: {
    todoLists: (root, { limit }, { db }) => {
      if (limit) {
        return db
          .get('todoLists')
          .take(limit)
          .value()
      } else {
        return db.get('todoLists').value()
      }
    },
    todoList: (root, { id }, { db }) =>
      db
        .get('todoLists')
        .find({ id: Number(id) })
        .value()
  },

  Mutation: {
    myMutation: (root, args, context) => {
      const message = 'My mutation completed!'
      context.pubsub.publish('hey', { mySub: message })
      return message
    }
  },

  Subscription: {
    mySub: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('hey')
    }
  }
}
