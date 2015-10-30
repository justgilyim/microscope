/**
 * Created by Gilbert on 10/29/2015.
 */
Meteor.methods({
  addPost: function(newPost){
    Posts.insert(newPost);
  }
});