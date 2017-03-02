'use strict';
angular.module('burgerApp')
  .controller('BurgerCtrl', function($scope) {

    $scope.methods = {};
    $scope.model = {};

    /*
     * Bun object & the bun array object
     */

    $scope.model.bunSesame = {name: 'Sesame bun', top:'images/bun1-top.png', bottom: 'images/bun1-bottom.png', selected: false};
    $scope.model.bunGlazed = {name:'Glazed bun', top:'images/bun2-top.png', bottom: 'images/bun2-bottom.png', selected: false};
    $scope.model.bunHotCrossed = {name:'Hot Crossed bun', top:'images/bun3-top.png', bottom: 'images/bun3-bottom.png', selected: false};

    $scope.model.bunCollection = [$scope.model.bunSesame, $scope.model.bunGlazed, $scope.model.bunHotCrossed];

    /*
     * Meat object & the meat array object
     */
    $scope.model.chicken = {name: 'Chicken', img: 'images/meat2-chicken.png', selected: false};
    $scope.model.beef = {name: 'Beef', img: 'images/meat1-beef.png', selected: false};
    $scope.model.meat = [$scope.model.chicken, $scope.model.beef];


    /*
     * Cheese object and the cheese array object
     */
    $scope.model.cheeseCheddar = {name: 'Cheddar', img: 'images/cheese1-cheddar.png', selected: false};
    $scope.model.cheeseOldEnglish = {name: 'Old English', img: 'images/cheese2-oldenglish.png', selected: false};
    $scope.model.cheeseCollection = [$scope.model.cheeseCheddar, $scope.model.cheeseOldEnglish];

    /*
     * Salad object & the salad array object
     */
    $scope.model.pineapple = {name: 'Pineapple', img: 'images/veg1-pineapple.png', selected:false};
    $scope.model.onion = {name: 'Onion', img: 'images/veg2-onions.png', selected:false};
    $scope.model.gerkhins = {name: 'Gerkhins', img: 'images/veg3-gerkhins.png', selected:false};
    $scope.model.lettuce1 = {name: 'Lettuce 1', img: 'images/veg4-lettuce1.png', selected:false};
    $scope.model.lettuce2 = {name: 'Lettuce 2', img: 'images/veg5-lettuce2.png', selected:false};
    $scope.model.cucumber = {name: 'Cucumber', img: 'images/veg6-cucumber.png', selected:false};
    $scope.model.tomato = {name: 'Tomato', img: 'images/veg7-tomato.png', selected:false};

    $scope.model.saladCollection = [$scope.model.pineapple, $scope.model.onion, $scope.model.gerkhins, $scope.model.lettuce1,
    $scope.model.lettuce2, $scope.model.cucumber, $scope.model.tomato];

    /*
     * Extra object and the extra array object
     */
    $scope.model.bacon = {name: 'Bacon', img: 'images/extra1-bacon.png', selected: false};
    $scope.model.egg = {name: 'Egg', img: 'images/extra2-egg.png', selected: false};
    $scope.model.extraCollection = [$scope.model.bacon, $scope.model.egg];

    /*
     * A list of all the steps
     * Use the currentStep to keep track of the where the user is at
     */
    $scope.model.steps = ['bun', 'meat', 'cheese', 'salads', 'extras', 'complete'];
    $scope.model.currentStep = 'bun';

    $scope.model.selectedBurger = {bun: null, meat: null, cheese: null, salads: [], extras: []};

    /*
     * Scope public methods
     */
    $scope.methods.selectBun = selectBun;
    $scope.methods.selectMeat = selectMeat;
    $scope.methods.selectCheese = selectCheese;
    $scope.methods.checkSalad = checkSalad;
    $scope.methods.checkExtra = checkExtra;
    $scope.methods.selectStep = selectStep;
    $scope.methods.selectSalad = selectSalad;
    $scope.methods.selectExtra = selectExtra;
    $scope.methods.cancelBurger = cancelBurger;

    /*
     * Scope methods definition
     */

     /*
      * Set the selected bun for the burger
      * Move to the next step which is cheese
      */
    function selectBun(bun) {

      if($scope.model.selectedBurger.bun) {
        $scope.model.selectedBurger.bun.selected = false;
      }

      $scope.model.selectedBurger.bun = bun;
      $scope.model.selectedBurger.bun.selected = true;

      selectStep('meat');
    }
    /*
     * Set the selected meat for the burger
     * Move to the next step which is cheese
     */

    function selectMeat(meat) {
      if($scope.model.selectedBurger.meat) {
        $scope.model.selectedBurger.meat.selected = false;
      }
      $scope.model.selectedBurger.meat = meat;
      $scope.model.selectedBurger.meat.selected = true;
      selectStep('cheese');
    }
    /*
     * Set the selected cheese for the burger
     * Move to the next step which is salads
     */
    function selectCheese(cheese) {
      if($scope.model.selectedBurger.cheese) {
        $scope.model.selectedBurger.cheese.selected = false;
      }
      if(cheese !== undefined) {
        $scope.model.selectedBurger.cheese = cheese;
        $scope.model.selectedBurger.cheese.selected = true;
      }

      selectStep('salads');
    }

    /*
     * Used for the salad checkbox.
     * Add or remove the salad from the array salads for the burger depending on the state of the checkbox
     */
    function checkSalad(salad) {
      if(salad.selected) {

        $scope.model.selectedBurger.salads.push(salad.name);
      } else {
        for(var i = 0; i < $scope.model.selectedBurger.salads.length; i++) {
          if($scope.model.selectedBurger.salads[i]== salad.name) {
            $scope.model.selectedBurger.salads.splice(i, 1);
            break;
          }
        }
      }

    }

    /*
     * Used for the extra checkbox.
     * Add or remove the extra from the array of extras for the burger depending on the state of the checkbox
     */
    function checkExtra(extra) {
      if(extra.selected) {

        $scope.model.selectedBurger.extras.push(extra.name);
      } else {
        for(var i = 0; i < $scope.model.selectedBurger.extras.length; i++) {
          if($scope.model.selectedBurger.extras[i]== extra.name) {
            $scope.model.selectedBurger.extras.splice(i, 1);
            break;
          }
        }
      }

    }

    /*
     * Set the current step to the step input
     */
    function selectStep(step) {
      $scope.model.currentStep = step;
    }

    /*
     * Used when the user click the image of the salad
     * Add or remove the salad from the array salads for the burger
     */
    function selectSalad(salad) {
      var removeSalad = false;
      for(var i = 0; i < $scope.model.selectedBurger.salads.length; i++) {
        if($scope.model.selectedBurger.salads[i] == salad.name) {
          $scope.model.selectedBurger.salads.splice(i, 1);
          removeSalad = true;
          break;
        }
      }
      if(!removeSalad) {
        $scope.model.selectedBurger.salads.push(salad.name);
      }
      salad.selected = !removeSalad;
    }
    /*
     * Used when the user click the image of the extra
     * Add or remove the extra from the array extras for the burger
     */
    function selectExtra(extra) {
      extra.selected = !extra.selected;

      if(extra.selected) {

        $scope.model.selectedBurger.extras.push(extra.name);
      } else {
        for(var i = 0; i < $scope.model.selectedBurger.extras.length; i++) {
          if($scope.model.selectedBurger.extras[i] == extra.name) {
            $scope.model.selectedBurger.extras.splice(i, 1);
            break;
          }
        }
      }
    }

    /*
     * Reset the burger object
     * Back to the first step which is to select bun
     */

    function cancelBurger() {
      $scope.model.selectedBurger = {bun: null, meat: null, cheese: null, salads: [], extras: []};
      angular.forEach($scope.model.bunCollection, function(bun) {
        bun.selected = false;
      });

      angular.forEach($scope.model.meat, function(meat) {
        meat.selected = false;
      })

      angular.forEach($scope.model.cheeseCollection, function(cheese) {
        cheese.selected = false;
      })

      angular.forEach($scope.model.saladCollection, function(salad) {
        salad.selected = false;
      })

      angular.forEach($scope.model.extraCollection, function(extra) {
        extra.selected = false;
      })
      selectStep('bun');
    }
});
