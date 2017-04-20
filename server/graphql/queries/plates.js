const { GraphQLList } = require('graphql')

const PlateType = require('../types/plate')

// Query all plates
module.exports = {
  name: 'plates',
  description: 'plates query',
  type: new GraphQLList(PlateType),
  resolve({ db, csrf, req }) {
    if (csrf === req.cookies.csrf) {
      return db.collection('plates').find().toArray()
    }
  }
}
