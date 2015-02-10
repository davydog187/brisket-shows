var Hogan = require('hogan.js');

var t = {
  /* jshint ignore:start */
  'errors/404' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1 style=\"color: #C00;\">404 - Page Not Found</h1>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'errors/500' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1 style=\"color: #C00;\">500 - There was an error serving the page</h1>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'home/home' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>Welcome to your first Brisket site!</h1>");t.b("\n");t.b("\n" + i);t.b("<h2>Check out my favorite shows!</h2>");t.b("\n" + i);t.b("<strong>Standard route:</strong> <a href=\"shows/parks-and-rec\">Parks and Recreation</a>");t.b("\n" + i);t.b("<br>");t.b("\n" + i);t.b("<br>");t.b("\n" + i);t.b("<strong>Routes with ajax:</strong>");t.b("\n" + i);t.b("<br>");t.b("\n" + i);t.b("<a href=\"shows/walking-dead\">Walking Dead</a>");t.b("\n" + i);t.b("<br>");t.b("\n" + i);t.b("<a href=\"shows/game-of-thrones\">Game of thrones</a>");t.b("\n" + i);t.b("<br>");t.b("\n" + i);t.b("<a href=\"shows/shameless\">Shameless</a>");t.b("\n");t.b("\n" + i);t.b("<h2>Check out the error page</h2>");t.b("\n" + i);t.b("<a href=\"500\">Default Error View</a>");t.b("\n");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'images/image' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<img src=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\" />");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'layout/header' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<header>");t.b("\n" + i);t.b("    <h1><a href=\"\" class=\"logo\">Brisket</a></h1>");t.b("\n" + i);t.b("</header>");t.b("\n");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'layout/layout' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<!DOCTYPE html>");t.b("\n" + i);t.b("<html>");t.b("\n" + i);t.b("<head>");t.b("\n" + i);t.b("   <meta charset=\"utf-8\">");t.b("\n" + i);t.b("   <title>Your first Brisket site</title>");t.b("\n" + i);t.b("</head>");t.b("\n" + i);t.b("<body>");t.b("\n" + i);t.b("   <div id=\"content\"> </div>");t.b("\n" + i);t.b("   <script type=\"text/javascript\" src=\"/javascripts/application.js\"></script>");t.b("\n" + i);t.b("</body>");t.b("\n" + i);t.b("</html>");t.b("\n");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'shows/parks_and_rec' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>Parks and Rec!</h1>");t.b("\n");t.b("\n" + i);t.b("<img src=\"http://www.ronswansongrill.com/images/ron-bbq.jpg\" alt=\"Ron Swanson\"/>");t.b("\n" + i);t.b("<img src=\"http://i.imgur.com/ryUnjKo.png\" alt=\"Tom Haverford\" style=\"max-width:600px\"/>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
  'shows/show' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>Show name: ");t.b(t.v(t.f("showName",c,p,0)));t.b("</h1>");t.b("\n");t.b("\n" + i);t.b("<div class=\"image-container\"></div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }})
  /* jshint ignore:end */
},
r = function(n) {
  var tn = t[n];
  return function(c, p, i) {
    return tn.render(c, p || t, i);
  };
};
module.exports = {
  templates : t,
  'errors/404' : r('errors/404'),
  'errors/500' : r('errors/500'),
  'home/home' : r('home/home'),
  'images/image' : r('images/image'),
  'layout/header' : r('layout/header'),
  'layout/layout' : r('layout/layout'),
  'shows/parks_and_rec' : r('shows/parks_and_rec'),
  'shows/show' : r('shows/show')
};