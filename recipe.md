<div class="back">
 
<a href="https://sarafiskray.github.io/"> 
<div class="back">
<i style="font-size: 20px;" class="fa fa-chevron-left"></i> Back 
</div>
</a></div>

# Millennial Recipe System

<img src="images/flaskpymongo.jpg?raw=true" width="100%" />

**Project Description:**
The Millennial Recipe System is a full-stack web application built with MongoDB, Python, Flask, and React.  It is a classic recipe system, allowing users to create accounts and post recipes.  My focus for this project was the back-end.  Unfortunately, as this project was built for a university course, the live website is no longer accessible.

## System Overview:

<img src="images/recipe_systemarch.png?raw=true">

My focus on this project was the back-end.  I wanted to use a NoSQL database for this system, as different recipes can have a different number of ingredients.  In addition, I had some experience with Flask from working on the Landlord Watchlist.  The API was hosted on Amazon Web Services while the front-end React App was hosted on University of Vermont Silk.

<!--  \
## Code Samples:

Here are a couple API calls in Python using Flask, one GET method and one POST method.

The first is a GET method to retrieve all recipes posted by a single user.

```python
#GET all recipes by a certain user
@app.route("/recipes/users/<user_id>", methods=["GET"])
def get_userrecipes(user_id):
    output = []
    recipes = mongo.db.recipes
    for recipe in recipes.find({"userId" : user_id}):
        output.append({"id" : recipe["id"], "title" : recipe["title"],
                  "userId" : recipe["userId"], "author" : recipe["author"],
                  "cook_time" : recipe["cook_time"],
                  "img_url" : recipe["img_url"],
                  "ingredients" : recipe["ingredients"],
                  "steps" : recipe["steps"]})
    return jsonify(output)
```

The next is a POST method, called when a new user is created.

```python
#POST user
@app.route("/users", methods=["POST"])
def create_user():
    global userId
    user = mongo.db.users
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    new_user = user.insert({"id" : str(userId), "name" : name, "email" : email,
                            "password" : password})
    userId += 1
    return "Success"
```
-->

## CS Fair:

<img src="images/csfair2018.jpg?raw=true" class="picture">

We presented this project at the 2018 UVM CS Fair.  I'm on the right.



