exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	var defer = $.Deferred();
    setTimeout(function() {
      defer.resolve(value);
    }, 60);
    return defer.promise();
  },

  manipulateRemoteData: function(url) {
	var defer = $.Deferred();
    $.ajax(url).then(function(response) {
      var peopleList = response.people.map(function(person){return person.name}).sort();
      defer.resolve(peopleList);
    });
    return defer.promise();
  }
};
