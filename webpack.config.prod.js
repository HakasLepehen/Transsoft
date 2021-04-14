const imagemin = require( "imagemin" )
const webp = require( "imagemin-webp" )

imagemin( ['src/img/*.{jpg,jpeg,png}'], {
    destination: 'src/img',
    plugins: [
        webp( { quality: 50 } )
    ]
} )