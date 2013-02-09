function seedCollection() {
  var collection = this;
  collection.remove({});
  
  var isVisible = [true, true, false];
 
  for (var i = 0; i < 3; i++) {
    collection.insert({
      text: "Document " + String(i+1),
      isVisible: isVisible[i],
      order: i
    });
  }
}

if (Meteor.isClient) {
  DocumentCollection = new Meteor.Collection(null);

  Meteor.startup(function () {
    seedCollection.call(DocumentCollection);  
  });
}
