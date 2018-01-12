var flickrApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var apiKey = "031eb4c694336c791aec5f4c63af63df";
var secret = "e858ae20dadc032a";


var load = function(){

	$.getJSON(flickrApi, {
		format : "json",
	}).done(function(data){
		$(".galleryContainer").empty();
		$("<ul class='gallery'></ul>").appendTo(".galleryContainer")
		$.each(data.items, function(i,item){
			$("<li>"+ item.description+"<hr>" +item.tags+"<hr></li>").appendTo(".gallery")
		})
	})

}
//button logic

$('#refresh').click(load)

$('#menuBtn').click(function(){
	$('.search').toggle(
  function() {
    $( this ).addClass( "hide" );
  }, function() {
    $( this ).removeClass( "hide" );
  }
)
})

	//Title of the Flickr pool
//      <p id="description"></p> //Description of the images pool
// <p id="link"></p>


//old stuff
// $.each( data.items, function( i, item ) {
//  $( ".gallery" ).append(' <li class="galleryItem"> <img src="'+ item.media.m +'" /><p><strong><a href="'+ item.link+'">'+item.title+'</a></strong> by '+ item.author + '<div id="description_'+(i+1)+'">'+ item.description +'</div>'+ item.tags +'</li> ');
//  if ( i === 10 ) {
// 	 return false;
//  }
// })
