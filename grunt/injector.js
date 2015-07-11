module.exports = {
  options : {
    template : 'app/index.html',
    relative : true,
    addRootSlash : false //removes / from the diectory
  },
  local_dependencies: {

    files : {
        'app/index.html' : ['app/js/*.js' , 'app/css/*.css' , 'bower.json'],
    }
  }
}