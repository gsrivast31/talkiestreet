angular.module("MyApp").run(["$templateCache", function($templateCache) {$templateCache.put("views/add.html","<div class=\"container\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Add Movie</div>\n    <div class=\"panel-body\">\n      <form class=\"form\" method=\"post\" ng-submit=\"addMovie()\" name=\"addForm\">\n        <div class=\"form-group\" ng-class=\"{ \'has-error\' : addForm.movieUrl.$invalid && addForm.movieUrl.$dirty }\">\n          <label class=\"control-label\">Url</label>\n          <input class=\"form-control\" type=\"text\" name=\"movieUrl\" ng-model=\"movieUrl\" placeholder=\"Enter movie url\" required autofocus>\n          <div class=\"help-block text-danger\" ng-if=\"addForm.movieUrl.$dirty\" ng-messages=\"addForm.movieUrl.$error\">\n            <div ng-message=\"required\">Url is required.</div>\n          </div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"addForm.$invalid\">Add</button>\n      </form>\n    </div>\n  </div>\n</div>");
$templateCache.put("views/detail.html","<div class=\"container\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"media\">\n        <div class=\"media-body\">\n          <h2 class=\"media-heading\">\n            {{movie.title}}\n          </h2>\n          <p>{{movie.description}}</p>\n          <div class=\"text-center\">\n            <iframe width=\"100%\" height=\"480\" src=\"{{trustSrc(movie.embed_url)}}\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>");
$templateCache.put("views/home.html","<div class=\"jumbotron\">\n    <div class=\"container\">\n        <!-- <ul class=\"alphabet\">\n            <li ng-repeat=\"char in alphabet\">\n                <span ng-click=\"filterByAlphabet(char)\">{{char}}</span>\n            </li>\n        </ul> -->\n        <ul class=\"languages\">\n            <li ng-repeat=\"language in languages\">\n                <span ng-click=\"filterByLanguage(language)\">{{language}}</span>\n            </li>\n        </ul>\n        <ul class=\"genres\">\n            <li ng-repeat=\"genre in genres\">\n                <span ng-click=\"filterByGenre(genre)\">{{genre}}</span>\n            </li>\n        </ul>\n        \n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            {{headingTitle}}\n            <div class=\"pull-right\">\n                <input class=\"search\" type=\"text\" ng-model=\"query.title\" placeholder=\"Search...\">\n            </div>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"row show-list\">\n                <div class=\"fade-repeat col-xs-4 col-md-3\" ng-repeat=\"movie in movies | filter:query | orderBy:\'duration\':true\">\n                    <a href=\"/movies/{{movie._id}}\">\n                        <img class=\"img show-thumbnail\" ng-src=\"{{movie.thumbnail_medium}}\" width=\"100%\"/>\n                    </a>\n                    <div class=\"text-center show-details\">\n                        <a href=\"/movies/{{movie._id}}\">{{movie.title}}</a>\n                        <p class=\"text-muted\">Duration: {{movie.duration}} minutes</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("views/login.html","<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"center-form panel\">\n        <div class=\"panel-body\">\n          <h2 class=\"text-center\">Log in</h2>\n          <form method=\"post\" ng-submit=\"login()\" name=\"loginForm\">\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control input-lg\" type=\"text\" name=\"email\" ng-model=\"email\" placeholder=\"Email\" required autofocus>\n              <span class=\"ion-at form-control-feedback\"></span>\n            </div>\n\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control input-lg\" type=\"password\" name=\"password\" ng-model=\"password\" placeholder=\"Password\" required>\n              <span class=\"ion-key form-control-feedback\"></span>\n            </div>\n\n            <button type=\"submit\" ng-disabled=\"loginForm.$invalid\" class=\"btn btn-lg btn-block btn-success\">Log in</button>\n\n            <br/>\n\n            <p class=\"text-center\">\n              <a href=\"#\">Forgot your password?</a>\n            </p>\n\n            <p class=\"text-center text-muted\">\n              <small>Don\'t have an account yet? <a href=\"/signup\">Sign up</a></small>\n            </p>\n\n            <div class=\"signup-or-separator\">\n              <h6 class=\"text\">or</h6>\n              <hr>\n            </div>\n\n            <button class=\"btn btn-lg btn-block btn-facebook\" ng-click=\"facebookLogin()\"><span class=\"ion-social-facebook\"></span>Sign in with Facebook</button>\n            <button class=\"btn btn-lg btn-block btn-google-plus\" ng-click=\"googleLogin()\"><span class=\"ion-social-googleplus\"></span>Sign in with Google</button>\n          </form>\n        </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("views/signup.html","<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"center-form panel\">\n      <div class=\"panel-body\">\n        <form method=\"post\" ng-submit=\"signup()\" name=\"signupForm\">\n          <h2 class=\"text-center\">Sign up</h2>\n\n          <div class=\"form-group has-feedback\" ng-class=\"{ \'has-error\' : signupForm.fullName.$invalid && signupForm.fullName.$dirty }\">\n            <input class=\"form-control input-lg\" type=\"text\" name=\"displayName\" ng-model=\"displayName\" placeholder=\"Name\" required>\n            <span class=\"ion-person form-control-feedback\"></span>\n            <div class=\"help-block text-danger\" ng-if=\"signupForm.fullName.$dirty\" ng-messages=\"signupForm.fullName.$error\">\n              <div ng-message=\"required\">You must enter your name.</div>\n            </div>\n          </div>\n\n          <div class=\"form-group has-feedback\" ng-class=\"{ \'has-error\' : signupForm.email.$invalid && signupForm.email.$dirty }\">\n            <input unique-email class=\"form-control input-lg\" type=\"email\" id=\"email\" name=\"email\" ng-model=\"email\" placeholder=\"Email\" required autofocus>\n            <span class=\"ion-at form-control-feedback\"></span>\n            <div class=\"help-block text-danger\" ng-if=\"signupForm.email.$dirty\" ng-messages=\"signupForm.email.$error\">\n              <div ng-message=\"required\">Your email address is required.</div>\n              <div ng-message=\"email\">Your email address is invalid.</div>\n              <div ng-message=\"unique\"><span class=\"ion-looping\"></span> Email is already taken.</div>\n            </div>\n          </div>\n\n          <div class=\"form-group has-feedback\" ng-class=\"{ \'has-error\' : signupForm.password.$invalid && signupForm.password.$dirty }\">\n            <input password-strength class=\"form-control input-lg\" type=\"password\" name=\"password\" ng-model=\"password\" placeholder=\"Password\" required>\n            <span class=\"ion-key form-control-feedback\"></span>\n            <div class=\"help-block text-danger\" ng-if=\"signupForm.password.$dirty\" ng-messages=\"signupForm.password.$error\">\n              <div ng-message=\"required\">Password is required.</div>\n            </div>\n          </div>\n\n          <p class=\"text-center text-muted\"><small>By clicking on Sign up, you agree to <a href=\"#\">terms & conditions</a> and <a href=\"#\">privacy policy</a></small></p>\n\n          <button type=\"submit\" ng-disabled=\"signupForm.$invalid\" class=\"btn btn-lg btn-block btn-primary\">Sign up</button>\n          <br/>\n\n          <p class=\"text-center text-muted\">Already have an account? <a href=\"/login\">Log in now</a></p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");}]);