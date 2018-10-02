// Smooth Scroll

  whatAnimation("fadescroll");
  whatAnimation("moveleft");

   $(window).scroll(function(){
   	  whatAnimation("fadescroll");
   	  whatAnimation("moveleft");
   });

   function whatAnimation(name) {
   		$("." + name).each(function(){
   		  switch (name) {
   		  	case "fadescroll": AddClass(this, "fade");
   		  	break;
   		  	case "moveleft": AddClass(this, "left");
   		  	break;
   		  
   		  }	
   		});
   };

   function AddClass (object, name) {
   	if(IsVisible(object)) {
   		$(object).addClass(name);
   	} else {
   	$(object).removeClass(name);
   	}
   }

   function IsVisible(object) {
   	var viewport = $(window).scrollTop() + $(window).height();
   	var rand = $(object).offset();
   	rand.bottom = rand.top + $(object).outerHeight();
   	return(!(viewport < (rand.top + 500) || $(window).scrollTop() > (rand.bottom - 250)));
   }

   