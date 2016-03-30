$(function () {
    var APPLICATION_ID = "F8660EB3-8C6F-50F0-FF07-A63709C25C00",
        SECRET_KEY = "E5B362B2-FD0C-AED8-FF42-CB0C45AA2E00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var user = new Backendless.User();
    user.email = "peterlu101@yahoo.com";
    user.password = "password";
    Backendless.UserService.register(user);
   
});
