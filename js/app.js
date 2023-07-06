var app =angular.module('demo',['ngRoute','ui.bootstrap','slickCarousel','angular-flexslider','rzModule']);

app.config(function($routeProvider){
  $routeProvider
  	.when('/',{
    	  templateUrl:"views/main.html",
    	  controller:"mycontroller"
    })

    .when('/home',{
    	  templateUrl:"views/home.html",
    	  controller:"homecontroller"
    })

    .when('/about',{
    	  templateUrl:"views/about.html",
    	  controller:"aboutcontroller"
    })
    .when('/account',{
    	  templateUrl:"views/account.html",
    	  controller:"accountcontroller"
    })
    .when('/career',{
    	  templateUrl:"views/career.html",
    	  controller:"careercontroller"
    })
    .when('/franchise',{
    	  templateUrl:"views/franchise.html",
    	  controller:"franchisecontroller"
    })
    .when('/jeans',{
    	  templateUrl:"views/jeansshop.html",
    	  controller:"jeanscontroller"
    })
    .when('/tshirt',{
    	  templateUrl:"views/tshirtshop.html",
    	  controller:"tshirtcontroller"
    })
    .when('/shirt',{
        templateUrl:"views/shirt.html",
        controller:"shirtcontroller"
    })
    .when('/privacy',{
    	  templateUrl:"views/privacy.html",
    	  controller:"privacycontroller"
    })
    .when('/terms',{
    	  templateUrl:"views/terms.html",
    	  controller:"termscontroller"
    })
    .when('/login',{
    	  templateUrl:"views/login.html",
    	  controller:"logincontroller"
    })
    .when('/details',{
    	  templateUrl:"views/product-details.html",
    	  controller:"detailscontroller"
    })
    .when('/checkout',{
    	  templateUrl:"views/checkout.html",
    	  controller:"checkoutcontroller"
    })
    .when('/cart',{
    	  templateUrl:"views/cart.html",
    	  controller:"cartcontroller"
    })

		 .otherwise({
	    	redirectTo:'/home'
	     });
	});

	app.directive('slideit', function () {    
  return {
    link: function (scope, element, attrs) {          
      $(element).nivoSlider();
    }
  }
});

    app.directive('owlcarousel', function () {  
    return {  
        restrict: 'E',  
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));  
            $(element).owlCarousel(options)
              
        }  
    };  
});

    app.directive('setClass', ['$window', function($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function (scope, element, attrs)
        {
            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                topPadding = parseInt(attrs.paddingWhenAtTop, 10),
                offsetTop = element.prop('offsetTop'); // get element's offset top relative to document

            $win.on('scroll', function (e) {
                if ($window.pageYOffset + topPadding >= offsetTop) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                }
            });
        }
    };
}])

    var shuffleArray = function(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  


app.controller('mycontroller',function($scope,$http,$timeout){

    $timeout(function(){
         $('.slider-container').fadeIn('slow');
     },9000); 
  
    $timeout(function(){
        $('.main-image').fadeIn('slow');
    },500);  

    $timeout(function(){
        $('.main-image').fadeOut('slow');
    },10000);

    $scope.slides = [
          'images/1.jpg',
          'images/2.jpg',
          // 'images/slider-1.jpg'
        ];

  });

  

app.controller('homecontroller',function($scope,$http){
  $http({
        method: 'GET',
        url: 'data/category.php',
      }).then(function(response) {
        $scope.categories = response.data;
        //console.log($scope.categories);
      }, function error(response) {
        // console.log(response.data);
      });

      $http({
        method: 'GET',
        url: 'data/featured_product.php',
      }).then(function(response) {
        $scope.featured = response.data;
        //console.log($scope.featured);
      }, function error(response) {
        // console.log(response.data);
      });

      $http({
        method: 'GET',
        url: 'data/advertisement.php',
      }).then(function(response) {
        $scope.advertisement = response.data;
        //console.log($scope.advertisement);
      }, function error(response) {
        // console.log(response.data);
      });

      $http({
        method: 'GET',
        url: 'data/latest_arrival.php',
      }).then(function(response) {
        $scope.arrivals = response.data;
        //console.log($scope.arrivals);
      }, function error(response) {
        // console.log(response.data);
      });

      $http({
        method: 'GET',
        url: 'data/denims.php',
      }).then(function(response) {
        $scope.denims = response.data;
        $scope.denims = $scope.denims.splice(0,8);
        $scope.denims= shuffleArray($scope.denims);
        //console.log($scope.denims);
      }, function error(response) {
        // console.log(response.data);
      });

      $http({
        method: 'GET',
        url: 'data/shirt.php',
      }).then(function(response) {
        $scope.shirts = response.data;
         $scope.shirts = $scope.shirts.splice(0,8);
        $scope.shirts= shuffleArray($scope.shirts);
        //console.log($scope.shirts);
      }, function error(response) {
        // console.log(response.data);
      });

      $http({
        method: 'GET',
        url: 'data/tshirt.php',
      }).then(function(response) {
        $scope.tshirts = response.data;
         $scope.tshirts = $scope.tshirts.splice(0,8);
        $scope.tshirts= shuffleArray($scope.tshirts);
        //console.log($scope.tshirts);
      }, function error(response) {
        // console.log(response.data);
      });

      

   $scope.fetchData=function(data){
      $scope.id=data.pd_product_id;
      $http({
        method: 'GET',
        url: 'data/productdetails.php?id='+$scope.id,
      }).then(function(response) {
        $scope.productModalData = response.data;
        //console.log($scope.productModalData);
      }, function error(response) {
        // console.log(response.data);
      });
   }

   $scope.slickconfig1 = {
        enabled:true,
        autoplay:false,
        arrows:true,
        slidesToShow:5,
        slidesToScroll:1,
        adaptiveHeight: false,
        responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                  
                 arrows:false,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                  
                 arrows:false,
                 slidesToScroll: 1

               }
             }
            
           ]
      };

      $scope.slickconfig2 = {
        enabled:true,
        autoplay:false,
        arrows:true,
        slidesToShow:3,
        slidesToScroll:1,
        adaptiveHeight: false,
        responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                  
                 arrows:false,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                  
                 arrows:false,
                 slidesToScroll: 1

               }
             }
            
           ]
      };

      $scope.slickconfig3 = {
        enabled:true,
        autoplay:false,
        arrows:true,
        slidesToShow:4,
        slidesToScroll:1,
        adaptiveHeight: false,
        responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                  
                 arrows:false,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                  
                 arrows:false,
                 slidesToScroll: 1

               }
             }
            
           ]
      };

   // function init(){
   //  $scope.fetchData();
   // };
   //  init();

});

app.controller('aboutcontroller',function($scope,$http){
$scope.slickConfig = {
        enabled:true,
        autoplay:true,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
        adaptiveHeight: false,
        responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                  
                 arrows:false,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                  
                 arrows:false,
                 slidesToScroll: 1

               }
             }
            
           ]
      };

});

app.controller('accountcontroller',function($scope,$http){

});

app.controller('careercontroller',function($scope,$http){
$scope.resumeshow=false;
  $scope.toggleresume=function(){
   $scope.resumeshow = !$scope.resumeshow;
  }

$scope.jobsshow=false;
  $scope.togglejobs=function(){
   $scope.jobsshow = !$scope.jobsshow;
  }
});


app.controller('franchisecontroller',function($scope,$http,$compile){
  $scope.visible=false;
  $scope.toggle=function(){
    $scope.visible = !$scope.visible;
  }
var cities = [
              {
                  city : 'Kaizen Fashion',
                  desc : 'Patna',
                  lat : 25.593819,
                  long : 85.160530,
                  name:'Jameel Ashraf',
                  contact1: 9973352654,
                  contact2:'' ,
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'New Delhi',
                  lat : 28.7041,
                  long : 77.1025,
                  name:'Md Abu Ibran & Md Abu Ghufran',
                  contact1:  9312125896,
                  contact2:  7053998576,
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'Jamshedpur',
                  lat : 22.805618,
                  long : 86.203110,
                  name:'Anwar Nazar',
                  contact1: 6206707709,
                  contact2:'',
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'Gaya',
                  lat : 24.7914,
                  long : 85.0002,
                  name:'Shuaib',
                  contact1: 9661070339,
                  contact2: '',
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'Bhagalpur',
                  lat : 25.3478,
                  long : 86.9824,
                  name:'Md Gulraiz Ahmad',
                  contact1: 9262278373,
                  contact2: '',
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'Jaipur',
                  lat : 26.9124,
                  long : 75.7873,
                  name:'Nazia Sayeed',
                  contact1: 6377810837,
                  contact2: '',
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'Chennai',
                  lat : 13.0827,
                  long : 80.2707,
                  name:'Mohammad Abu Kashif',
                  contact1: 9560632802,
                  contact2: '',
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'Mumbai',
                  lat : 19.0760,
                  long : 72.8777,
                  name:'Mohammad Abu Kashif',
                  contact1: 9560632802,
                  contact2: '',
                  email:'customersupport@uvkshopping.in'
              },
              {
                  city : 'Kaizen Fashion',
                  desc : 'Middle East',
                  lat : 23.4241,
                  long : 53.8478,
                  name:'Md Ashraf Zia',
                  contact1: 96560495718,
                  contact2: '',
                  email:'customersupport@uvkshopping.in'
              }
          ];

              var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(22.7991462,86.1394451),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>'
                  +'<div class="infoWindowContent">'+'<h6>'+'Name :' + info.name + '</h6>'+'</div>'
                  +'<div class="infoWindowContent">'+'<h6>'+'Contact :' + info.contact1 +'&nbsp;&nbsp;'+ info.contact2+ '</h6>'+'</div>'
                  +'<div class="infoWindowContent">'+'<h6>'+'Email :' + info.email + '</h6>'+'</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });



app.controller('jeanscontroller',function($scope,$http){
 $http({
        method: 'GET',
        url: 'data/denim_product.php?label=All',
      }).then(function(response) {
        $scope.denims = response.data;
        // $scope.denims= shuffleArray($scope.denims);
        //console.log($scope.denims);
      }, function error(response) {
        // console.log(response.data);
      });

    $scope.sizes=['28','30','32','34','36'];
    $scope.fitsize=['Narrow','Regular','Straight','Skinny','Tapered','Slim']

      $scope.lists=['All','new','best','trending','rated'];
      $scope.select=$scope.lists[0];

        $scope.slider = {
          minValue: 1,
          maxValue: 2000,
          options: {
            floor: 1,
            ceil: 5000,
            showTicks: 1000,
          }
        };

        $scope.selectView=function(data){
          var url ='http://localhost/kaizen/data/denim_product.php?';
          $scope.min=$scope.slider.minValue;
          $scope.max=$scope.slider.maxValue;
          console.log($scope.min);
          console.log($scope.max);
          // $scope.sizeSelect=[];
          // var indexOfDay = $scope.sizeSelect.indexOf(data); 
          //   if(indexOfDay === -1) {
          //   $scope.sizeSelect.push(data);
          //   console.log($scope.sizeSelect);
          // } else {
          //     $scope.sizeSelect.splice(indexOfDay, 1)
          // }

          if ($scope.select&&$scope.select!=NaN) {
              url=url+'label='+$scope.select;
          }
          // if ($scope.min) {
          //     url=url+'&'+'min='+$scope.min;
          //     console.log(url);
          // }
          // if ($scope.max) {
          //     url=url+'&'+'max='+$scope.max;
          //     console.log(url);
          // }
          // if ($scope.min && $scope.max) {
          //     url=url+'&'+'min='+$scope.min+'&'+'max='+$scope.max;
          //     console.log(url);
          // }
          // if ($scope.sizeSelect){
          //     url=url+'&'+'size='+$scope.sizeSelect;
          //     console.log(url);
          // }
          //url=url+'label='+$scope.select+'&'+'min='+min+'&'+'max='+max;
           //console.log(url);
           $http({
            method: 'POST',
            url:url,
            data:{
              min:$scope.min,
              max:$scope.max
            },
            headers:{
              'Content-type':'application/json'
            }
            }).then(function(response) {
              $scope.denims = response.data;
              // $scope.denims= shuffleArray($scope.denims);
              //console.log($scope.denims);
            }, function error(response) {
              // console.log(response.data);
            });
        }

        $scope.sizeSelect=[];
        $scope.applyFilter=function(day){
          var indexOfDay = $scope.sizeSelect.indexOf(day); 
            if(indexOfDay === -1) {
            $scope.sizeSelect.push(day);
            console.log($scope.sizeSelect);
          } else {
              $scope.sizeSelect.splice(indexOfDay, 1)
          }
          var url ='http://localhost/kaizen/data/denim_product.php?';
          if ($scope.sizeSelect){
              url=url+'&'+'size='+$scope.sizeSelect;
              console.log(url);
          }
        }



});

app.controller('tshirtcontroller',function($scope,$http,$location){
  $http({
        method: 'GET',
        url: 'data/tshirt_product.php?label=All',
      }).then(function(response) {
        $scope.tshirts = response.data;
         //$scope.tshirts= shuffleArray($scope.tshirts);
        //console.log($scope.tshirts);
      }, function error(response) {
        // console.log(response.data);
      });

      $scope.options=['Highest','Lowest',];
      $scope.priceSort="price";
      $scope.lists=['All','new','best','trending','rated'];
      $scope.select=$scope.lists[0];

      $scope.slider = {
          minValue: 1,
          maxValue: 2000,
          options: {
            floor: 1,
            ceil: 5000,
            showTicks: 1000,
          }
        };

        $scope.selectView=function(){
        var url ='http://localhost/kaizen/data/tshirt_product.php?';
          $scope.min=$scope.slider.minValue;
          $scope.max=$scope.slider.maxValue;
          if ($scope.select&&$scope.select!=NaN) {
              url=url+'label='+$scope.select;
          }
          if ($scope.min) {
              url=url+'&'+'min='+$scope.min;
              console.log(url);
          }
          if ($scope.max) {
              url=url+'&'+'max='+$scope.max;
              console.log(url);
          }
          if ($scope.min && $scope.max) {
              url=url+'&'+'min='+$scope.min+'&'+'max='+$scope.max;
              console.log(url);
          }
      
        $http({
        method: 'GET',
        url: url,
      }).then(function(response) {
        $scope.tshirts = response.data;
        //$scope.tshirts= shuffleArray($scope.tshirts);
        //console.log($scope.tshirts);
      }, function error(response) {
        // console.log(response.data);
      });
      }

      // function init(){
      //   $scope.options='Lowest';
      // };init();
});

app.controller('shirtcontroller',function($scope,$http){
  $http({
        method: 'GET',
        url: 'data/shirt_product.php?label=All',
      }).then(function(response) {
        $scope.shirts = response.data;
        //$scope.shirts= shuffleArray($scope.shirts);
        //console.log($scope.shirts);
      }, function error(response) {
        // console.log(response.data);
      });

      

      $scope.lists=['All','new','best','trending','rated'];
      $scope.select=$scope.lists[0];

      $scope.slider = {
          minValue: 1,
          maxValue: 2000,
          options: {
            floor: 1,
            ceil: 5000,
            showTicks: 1000,
          }
        };

       $scope.selectView=function(){
        var url ='http://localhost/kaizen/data/shirt_product.php?';
          $scope.min=$scope.slider.minValue;
          $scope.max=$scope.slider.maxValue;
          console.log($scope.sizeSelect);
          if ($scope.select&&$scope.select!=NaN) {
              url=url+'label='+$scope.select;
          }
          if ($scope.min) {
              url=url+'&'+'min='+$scope.min;
              console.log(url);
          }
          if ($scope.max) {
              url=url+'&'+'max='+$scope.max;
              console.log(url);
          }
          if ($scope.min && $scope.max) {
              url=url+'&'+'min='+$scope.min+'&'+'max='+$scope.max;
              console.log(url);
          }
        $http({
        method: 'GET',
        url: url,
      }).then(function(response) {
        $scope.shirts = response.data;
        //$scope.shirts= shuffleArray($scope.shirts);
        //console.log($scope.shirts);
      }, function error(response) {
        // console.log(response.data);
      });
      }

});

app.controller('privacycontroller',function($scope,$http){

});

app.controller('termscontroller',function($scope,$http){

});

app.controller('logincontroller',function($scope,$http){

});

app.controller('detailscontroller',function($scope,$http,$location){
       var url = $location.absUrl().split('?')[1];
      $scope.url_id = url.split('=')[1];
  $http({
        method: 'GET',
        url: 'data/productdetails.php?id='+$scope.url_id,
      }).then(function(response) {
        $scope.productData = response.data;
        //console.log($scope.productData);
      }, function error(response) {
        // console.log(response.data);
      });

      $http({
        method: 'GET',
        url: 'data/product_details.php',
      }).then(function(response) {
        $scope.relatedProducts = response.data;
        $scope.relatedProducts = $scope.relatedProducts.splice(0,20);
        $scope.relatedProducts= shuffleArray($scope.relatedProducts);
        console.log($scope.relatedProducts);
      }, function error(response) {
        // console.log(response.data);
      });

      $scope.slickconfig3 = {
        enabled:true,
        autoplay:false,
        arrows:true,
        slidesToShow:4,
        slidesToScroll:1,
        adaptiveHeight: false,
        responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 2,
                  
                 arrows:false,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 480,
               settings: {
                 slidesToShow: 1,
                  
                 arrows:false,
                 slidesToScroll: 1

               }
             }
            
           ]
      };

});

app.controller('checkoutcontroller',function($scope,$http){

});

app.controller('cartcontroller',function($scope,$http){

});
