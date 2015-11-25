( function(){


  module.exports = {
    grabRepoNames: function (array) {
      var repos = array.map(function (repo) {
        return { name: repo.name, description: repo.description }
      });
      return repos;
    }
  }


})();