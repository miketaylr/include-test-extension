 function include( files ) { // include({js: ['/js/foo.js','/js/bar.js'], css: '/css/baz.css' })
    var oex = window.location.protocol + '//' + window.location.host + '/',
        head = document.head,
          
    includeJS = function( path ) {
      var script = document.createElement('script');
      script.src = oex + path;
      head.appendChild( script );
    },
      
    includeCSS = function( path ) {
      var link = document.createElement('link');
      link.rel = "stylesheet";
      link.href = oex + path;
      head.appendChild( link );
    },
      
    includeFile = function( file, type ) {
      if ( type == 'js' ) includeJS( file );
      if ( type == 'css' ) includeCSS( file );
    };
      
    for ( var type in files ) {
      if ( files.hasOwnProperty( type ) ) {
        if ( Array.isArray( type ) ) {
          for ( var i = 0, l = type.length; i < l; i++ ) {
            (function(i){
              includeFile( files[ type ][ i ], type );
	    })(i);
          }
        } else if ( typeof files[ type ] == 'string') {
          includeFile( files[ type ], type );
        }
      }
    }
  };
