jQuery(function() {

	let my_switch = false;
	var cities=['images/l-los-angeles-700.jpg', 'images/l-london-700.jpg', 'images/l-sydney-700.jpg', 'images/l-chicago-700.jpg', 'images/l-honolulu-700.jpg'];
	var dudes=['images/d-hopkins-400.jpg', 'images/d-gervais-400.jpg', 'images/d-chris-400.jpg', 'images/d-billybob-400.jpg', 'images/d-keanu-400.jpg'];
	var foods=['images/f-fava-400.png', 'images/f-trifle-400.png', 'images/f-vegemite-400.png', 'images/f-burger-400.png', 'images/f-poke-400.png'];
	var place=['Los Angeles', 'London', 'Sydney', 'Chicago', 'Honolulu'];
	var man=['Anthony Hopkins', 'Ricky Gervais', 'Chris Hemsworth', 'Billy Bob Thornton', 'Keanu Reeves'];
	var nom=['Vegetarian Fava Bean Salad', 'Rachel Green\'s Thanksgiving Trifle', 'Vegemite Cheesecake', 'Big Mega Burger Stacks', 'Poke Bowls'];

	function randomValueFromArray(array){
	  var random = Math.floor(Math.random()*array.length);
	  return array[random];
	}

	$('#go').click(function () {
			console.log('CLICKED!');
			var location = randomValueFromArray(cities);
			var person = randomValueFromArray(dudes);
			var dish = randomValueFromArray(foods);

			$('#location-image').fadeOut('fast', function () {
				$('#location-image').attr('src', location).fadeIn('slow');
				var loc = cities.indexOf(location);
				$('#loc').text(place[loc]);
			});
			$('#person-image').fadeOut('500', function () {
				$('#person-image').attr('src', person).fadeIn('3000');
				var guy = dudes.indexOf(person);
				$('#guy').text(man[guy]);

			});
			$('#dish-image').fadeOut('slow', function () {
				$('#dish-image').attr('src', dish).fadeIn('4000');
				var foo = foods.indexOf(dish);
				$('#foo').text(nom[foo]);
			});
	});


	});
