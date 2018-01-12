var flickrApi = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

var populate;
var tags;


$( '#menuBtn' ).click( function() {$( '.search' ).toggleClass('hideMenu')})


$( '#loadingBtn' ).click( function(e) {
	e.preventDefault();
	$( ".gallery" ).empty();
	$.getJSON( "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
		format: "json"
	}, ).done(function( data ) {
		$.each( data.items, function( i, item ) {
			$( ".gallery" ).append( ' <li class="galleryItem"><img src="'+item.media.m+'" href="'+item.media.m+'"<p><strong><a href="' + item.link + '">' + item.title + '</a></strong> by <a href="https://www.flickr.com/people/'+item.author_id+'">'+item.author+'</a><div class = "description"><h5>Description</h5>' + item.description + '</div> <h5>Tags:</5><br>' + item.tags + '</li> ' );
		} );
		} );
});


$( "form" ).submit( function( e ) {
	e.preventDefault();
	tags =$( "#tags" ).val()
	$( '.search' ).toggleClass('hideMenu')
	$( ".gallery" ).empty();
	$.getJSON( flickrApi, {
		tags: tags,
		tagmode: "any",
		format: "json"
	}, ).done(function( data ) {
		$.each( data.items, function( i, item ) {
			$( ".gallery" ).append( ' <li class="galleryItem"><img src="'+item.media.m+'" href="'+item.media.m+'"<p><strong><a href="' + item.link + '">' + item.title + '</a></strong> by <a href="https://www.flickr.com/people/'+item.author_id+'">'+item.author+'</a><div class = "description"><h5>Description</h5>' + item.description + '</div> <h5>Tags:</5><br>' + item.tags + '</li> ' );
		} );
	} )
} )


$( "#refresh" ).click(function(e){
	if( $( ".galleryItem" ) ){
			e.preventDefault();
			$( ".gallery" ).empty();
			$.getJSON( flickrApi, {
				tags: tags,
				tagmode: "any",
				format: "json"
			}, ).done(function( data ) {
				$.each( data.items, function( i, item ) {
					$( ".gallery" ).append( ' <li class="galleryItem"><img src="'+item.media.m+'" href="'+item.media.m+'"<p><strong><a href="' + item.link + '">' + item.title + '</a></strong> by <a href="https://www.flickr.com/people/'+item.author_id+'">'+item.author+'</a><div class = "description"><h5>Description</h5>' + item.description + '</div> <h5>Tags:</5><br>' + item.tags + '</li> ' );
				} );
				} );
			}
		})
	;
