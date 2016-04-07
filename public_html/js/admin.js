$(function () {
    var APPLICATION_ID = "F8660EB3-8C6F-50F0-FF07-A63709C25C00",
        SECRET_KEY = "E5B362B2-FD0C-AED8-FF42-CB0C45AA2E00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
   
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);

    
    $('.main-container').html(loginTemplate);
    
    $(document).on('submit', '.form-signin', function(event){
        event.preventDefault();
        
        var data = $(this).serializeArray(),
            email = data[0].value,
            password = data[1].value;
            
        Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
    });
    
    $(document).on('click', '.add-blog', function(){
        var addBlogScript = $("#add-blog-template").html();
        var addBlogTemplate = Handlebars.compile(addBlogScript);
        $('.main-container').html(addBlogTemplate);
    });
    
});

function Posts(arga){
    arga = arga || {};
    this.title = arga.title || "";
    this.content = arga.content || "";
    this.authorEmail = arga.authorEmail || "";
    
}

function userLoggedIn(user) {
    console.log("user successfully logged in");
    var welcomeScript = $('#welcome-template').html();
    var welcomeTemplate = Handlebars.compile(welcomeScript);
    var welcomeHTML = welcomeTemplate(user);
    
    $('.main-container').html(welcomeHTML);
    
}

function gotError (error) {
    console.log("Error message - " + error.message);
    console.log("Error code - " + error.code);
}

