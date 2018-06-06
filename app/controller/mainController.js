angular.module("Template")
.controller("mainController", function ($scope, localize, $location, $window, $http, $route){

    // All the code of this website was made by LOVELESS-Act.V(dusk@laposte.net)

    lang = localize.language;

    // Adding the active class to whichever is the current language
    if (lang == 'fr') {
      $('#lang_fr').addClass('active');
    } else {
      $('#lang_en').addClass('active');
    }

    $scope.setLanguage = function (code) {
      if (code == 'fr') {
        $('#lang_en').removeClass('active');
        $('#lang_fr').addClass('active');
      } else {
        $('#lang_fr').removeClass('active');
        $('#lang_en').addClass('active');
      }
      localize.setLanguage(code);
      $scope.actuallang = localize.language;
    }

    var ToggleSubMenu = $scope.ToggleSubMenu = function () {
      if ($("#submenu").css("top") == "-344px") {
        $("#submenu").css("top", $("header").css("height"))
      } else {
        $("#submenu").css("top","-344px")
      }
    }

    $scope.cat1items = [
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"}
    ];

    $scope.cat2items = [
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"}
    ]

    $scope.cat3items = [
      {name:"ITEM"},
      {name:"ITEM"},
      {name:"ITEM"}
    ]

    $scope.ads = [
      {img:"app/img/blockright_1.jpg",alt:"PICTURE 1 ALT"},
      {img:"app/img/blockright_2.jpg",alt:"PICTURE 2 ALT"}
    ]

    setTimeout(function () {
      $scope.emailplaceholder = localize.getLocalizedString("_EMAIL_");
      $scope.passwordplaceholder = localize.getLocalizedString("_PASSWORD_");
    }, 100);

    var logged = false;

    var ToggleAccount = $scope.ToggleAccount = function () {
      if (logged) {
        if ($("#account").css("top") == "0px") {
          $("#accountbutton").css("transform","rotateZ(0deg)");
          $("#accountbutton i").css("transform","rotateZ(0deg)");
          $("#accountbutton").css("height","36px");
          $("#accountbutton").css("width","40px");
          $("#accountbutton").css("margin","0");
          $("#account").css("top","-288px");
        } else {
          $("#accountbutton").css("transform","rotateZ(90deg)");
          $("#accountbutton i").css("transform","rotateZ(-90deg)");
          $("#accountbutton").css("height","40px");
          $("#accountbutton").css("width","36px");
          $("#accountbutton").css("margin","-2px 0 0 2px");
          $("#account").css("top","0px");
        }
      } else {
        if ($("#login").css("top") == "0px") {
          $("#accountbutton").css("transform","rotateZ(0deg)");
          $("#accountbutton i").css("transform","rotateZ(0deg)");
          $("#accountbutton i").css("filter","none");
          $("#accountbutton").css("height","36px");
          $("#accountbutton").css("width","40px");
          $("#accountbutton").css("margin","0");
          $("#accountbutton").removeClass("active");
          $("#login").css("top","-94px");
        } else {
          $("#accountbutton").css("transform","rotateZ(90deg)");
          $("#accountbutton i").css("transform","rotateZ(-90deg)");
          $("#accountbutton i").css("filter","contrast(0%) saturate(27578%) hue-rotate(292deg)");
          $("#accountbutton").css("height","40px");
          $("#accountbutton").css("width","36px");
          $("#accountbutton").css("margin","-2px 0 0 2px");
          $("#accountbutton").addClass("active");
          $("#login").css("top","0px");
        }
      }
    }

    var FakeLogin = $scope.FakeLogin = function () {
      email = $('#login input[type="email"]').val();
      password = $('#login input[type="password"]').val();
      if (email.length >= 5 && email.indexOf("@") > -1 && email.indexOf(".") > -1 && password.length >= 8 && pwdfilter1(password).length > 0 && pwdfilter2(password).length > 0 && pwdfilter3(password).length > 0 && password.indexOf(" ") < 0) {
        logged = true;
        $("#login").css("opacity","0");
        $("#accountbutton").css("opacity","0");
        setTimeout(function () {
          $("#account").css("opacity","1");
          $("#login").css("top","-94px");
          setTimeout(function () {
            $("#login").css("opacity","1");
          }, 400);
        }, 400);
        setTimeout(function () {
          $("#accountbutton").addClass("logged");
          $("#accountbutton").css("opacity","1");
          $("#account").css("top","0");
        }, 300);
      } else {
        if (email.indexOf("@") < 0 || email.indexOf(".") < 0 || email.length < 5) {
          $('#login input[type="email"]').val("");
          $('#login input[type="email"]').addClass(".invalid");
          $('#login input[type="email"]').focus();
          $('#login input[type="email"]').prop("placeholder",localize.getLocalizedString("_EMAILINVALID_"));
        }
        if (password.length < 8 || pwdfilter1(password).length < 1 || pwdfilter2(password).length < 1 || pwdfilter3(password).length < 1 || password.indexOf(" ") > -1) {
          $('#login input[type="password"]').val("");
          $('#login input[type="password"]').addClass(".invalid");
          $('#login input[type="password"]').focus();
          $('#login input[type="password"]').prop("placeholder",localize.getLocalizedString("_PASSWORDINVALID_"));
        }
      }
    }

    var FakeLogout = $scope.FakeLogout = function () {
      logged = false;
      $("#account").css("opacity","0");
      $("#account").css("top","-288px");
      $("#accountbutton").removeClass("logged");
      $("#accountbutton").css("transform","rotateZ(0deg)");
      $("#accountbutton i").css("transform","rotateZ(0deg)");
      $("#accountbutton i").css("filter","none");
      $("#accountbutton").css("margin","0");
      $("#accountbutton").css("height","36px");
      $("#accountbutton").css("width","40px");
      $("#accountbutton").removeClass("active");
    }

    function pwdfilter1(text) {
      return text.replace(/[^0-9]/g, '');
    }

    function pwdfilter2(text) {
      return text.replace(/[^a-zA-Z]/g, '');
    }

    function pwdfilter3(text) {
      specialchar = text.replace(/[0-9]/g, '').match(/[^a-zA-Z ]+/);
      if (specialchar == null) {
        return "";
      } else {
        return specialchar[0];
      }
    }

});
