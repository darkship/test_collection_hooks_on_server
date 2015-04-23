if (Meteor.isServer) {
  item = new Mongo.Collection("items")

  item.attachSchema(new SimpleSchema({
    title: {
      type: String
    }
  }))


  item.before.insert(function(userId, doc) {
    console.log('function before insert')
  })
  item.after.insert(function(userId, doc) {
    console.log('function after insert')
  })
  item.before.remove(function(userId, doc) {
    console.log('function before remove')

  })
  item.after.remove(function(userId, doc) {
    console.log('function after remove')
  })

  item.before.update(function(userId, doc, fieldNames, modifier, options) {
    console.log('function before update')
  })

  item.after.update(function(userId, doc, fieldNames, modifier, options) {
    console.log('function after update')
  })

  var id = item.insert({
    title: "title"
  })

  item.update({
    _id: id
  }, {
    $set: {
      title: "new title"
    }
  })
  item.remove(id)
}
