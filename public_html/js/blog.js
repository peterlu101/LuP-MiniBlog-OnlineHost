$(function () {
    var APPLICATION_ID = "F8660EB3-8C6F-50F0-FF07-A63709C25C00",
        SECRET_KEY = "E5B362B2-FD0C-AED8-FF42-CB0C45AA2E00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var dataStore = Backendless.Persistence.of(Posts);
    var post = new Posts ({title: "My First Blog Post", content: "My First Blog Post Content", authorEmail: "peterlu101@yahoo.com"});
    dataStore.save(post);
    
});

function Posts(arga){
    arga = arga || {};
    this.title = arga.title || "";
    this.content = arga.content || "";
    this.authorEmail = arga.authorEmail || "";
    
}
