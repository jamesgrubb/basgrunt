module.exports = {
makeItSo : {
    options : {
        require : 'susy',
    },
      files : [{
        expand: true,
        cwd: 'app/scss',
        src: ['*.scss'],
        dest: 'app/css/',
        ext: '.css'
      }]
    }
}