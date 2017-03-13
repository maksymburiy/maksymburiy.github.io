jQuery(document).ready(function($) {

	$('#lightSlider-1, #lightSlider-2, #lightSlider-3').lightSlider({

		item:1,
		adaptiveHeight:true,
		slideMove:1,
		speed:400,
		slideMargin:30,
		loop:true,
		rtl:true,
		verticalHeight:200,

	});


	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item',
	  // columnWidth: 200
	});


	$('#ideas__button-search').click(function(e){
		e.preventDefault();
		var searchQuery = $('.ideas__form input').val();
		var URL = "https://pixabay.com/api/?key=3548591-78eba01a0681de5f0029bee84&q=" + searchQuery + "&per_page=10";
		$.ajax({
	  	url: URL,
	  	dataType: 'jsonp',
	  	success: function (data) { 
	      // var ul = document.createElement("ul");
				$.each(data.hits, function(i, val){
				  var div = document.createElement("div");
				  div.innerHTML = '<img src="'+val.previewURL+'">';                         
				  ('#ideas__conteiner').appendChild(div);
        });
				$('.ideas').html('#ideas__conteiner');
			}
		})	      
	}); 







});






// $(function () {
//   var searchCont = $("#ideas__conteiner");
//   var input = $(".ideas__form input");

//   function search() {
//     searchCont.html('');
//     searchCont.masonry('destroy');

//     var searchQuery = input.val();
//     var URL =
//       "https://pixabay.com/api/?key=3548591-78eba01a0681de5f0029bee84&q=" +
//       searchQuery + "&per_page=7";

//     $.ajax({
//         url: URL,
//         dataType: 'jsonp'
//       })
//       .success(function (data) {
//         if(data.totalHits == 0) {
//           searchCont.html(
//             "Sorry, we could'nt find any image on your request:(");
//           return;
//         }

//         var template = $("#masonry-template").html();
//         var newData = tmpl(template, {
//           data: data
//         });

//         searchCont.append(newData);
//         searchCont.masonry({
//           itemSelector: '.masonry__cont',
//           columnWidth: '.masonry__cont'

//         });
//       });

//     input.val("");
//   }

//   $('#search-btn').on('click', function (e) {
//     e.preventDefault();
//     search();
//   });

//   input.val("relax");
//   search();
// });