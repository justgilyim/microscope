/**
 * Created by Gilbert on 10/28/2015.
 */
Meteor.publish("posts", function () {
  return Posts.find();
});