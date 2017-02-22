const resolvers = {
  Query: {
    testString (test) {
      return 'Hello World'
    }
  }
}

module.exports = resolvers
