exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    count = 0
    for (var i = 0; i < arr.length; i++) {
      count = count + arr[i]
    }
    return count
  },


  remove : function(arr, item) {
    for(var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === item) arr.splice(i, 1);
    }
    return arr
  },

  reverseString : function(str) {
    var rev = '';
    for( var i = str.length - 1; i >= 0; i--)
      rev += str[i];
      return rev;
  },

  longestSubString : function(str) {
    broken_str_arr = str.split(" ");
    broken_str_arr.sort(function(a,b){
      return b.length - a.length;
    })
    return broken_str_arr[0]
  },

  letterMoveForward : function(str) {
    forward_array = [];
    for( var i = 0; i < str.length; i++) {
      forward_array.push(String.fromCharCode(str.charCodeAt(i) + 1));
    }
    return forward_array.join('');
  },

  capitalizeWords : function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});   
  }
};
