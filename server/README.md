## unsplash pics API

### What is unspalsh pics API?
it's an api created to get data from **unsplash* site, actually it's pictures with various sizes

### What technelogies used?
* **mongodb** for Database called _ mongoose _ library
* **bodyparser** 
* **cors** for cross origin requests
* **dotenv** for env files for security
* **express** as a server side

## What are the functionalities?
it has a functionality turn around the *post* using CRUD tichnique:
    * *getPosts* for getting posts, not requires request data
    * *createPost* for creating a post (memmory), requires request data
        ```
            title: String,
            message: String,
            creator: String,
            tags: [String],
            selectedFile: String,
            likeCount: {
                type: Number,
                default: 0
            },
            createdAt: {
                type: Date,
                default: new Date()
            },
        ```
    * *updatePost* for updating the post, requires request data
        ```
        req.params => contains **_id**
        req.body => contains new data like above on *createPost*
        ```
    * *deletePost* for deleting a post, requires request data
        ```
        req.params => contains **id**
        ```
    * *likePost* for like a post, requires request data
        ```
        req.params => contains **id**
        ```
