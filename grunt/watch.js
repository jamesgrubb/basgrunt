module.exports = {
  options : {
    atBegin : true,
  },
  scss : {
    files : ['scss/*.scss'],
    tasks : ['sass']
  },
  options : {
    cwd : 'app/',
    spawn : false
  },
  inject : {
    files : ['bower_components/'],
    tasks : ['injectIt']
  }
}