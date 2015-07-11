module.exports = {
  options: {
    prefix : 'icon-',
    svg : {
        style : 'display:none',
        viewBox : '0 0 100 100',
        xmlns: 'http://www.w3.org/2000/svg'
    },
  },
    default : {
      files: [{
        expand: true,
        cwd: 'app/svg',
        src: ['*.svg'],
        dest:  'app/dest/',
        ext: '.svg'
        }]
    }
}