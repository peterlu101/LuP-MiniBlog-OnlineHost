$(function() {
   var APPLICATION_ID = "F8660EB3-8C6F-50F0-FF07-A63709C25C00";
   var SECERT_KEY = "E5B362B2-FD0C-AED8-FF42-CB0C45AA2E00";
   var VERSION = "v1";
   
   Backhandless.initApp(APPLICATION_ID, SECERT_KEY, VERSION);
   
   var user = new Backhandless.user();
   user.email = "peterlu101@yahoo.com";
   user.password = "dreamcenter";
   Backhandless.userService.register(user);
});