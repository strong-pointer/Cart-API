# Team 6: Banana Slugs
### Team Members: Hayden Strong, Dennis Huynh, Mackenzie Blue, Forrest Zach

***
To get the repo on your local machine:
* In folder of your choice run "git init" to create a new repo
* Then run "git remote add [name_of_remote] https://github.com/Clemson3720/Team6-Cart.git"
  * where [name_of_remote] can be whatever you want, recommended: origin
* Afterwards, run "git fetch", followed by "git pull [name_of_remote] main"
  * *if your local branch is named "master", you will have to rename before pushing to this repo. To do so run "git branch -m master main"*
***

To test run our Heroku Postman Collection, please copy and paste from the examples into new tab to send in this order:

1. Run GET /carts -- Get All Carts to view an empty list. This is because we haven't added any carts to the list yet!
2. Run POST /carts -- here you will choose to create a cart with an id. In our examples, we have setup 3 different ones with 3 different ids. Feel free to pick any.
3. Run GET /carts -- Now you should see the newly added cart.
4. Run POST /carts -- Add another cart, or two, so this way we can see multiple carts in the list.<br>
*Recommended: Run GET /carts to view changes to the cart in the list*

5. Run GET /carts/:cartID/cartTime -- For the IDs you chose, run the specified example. These will return the cart's uptime(in days) -- should be 0.
6. Run GET /carts/:cartID -- Use this to get the cart of an ID you chose.
7. Run POST /carts/:cartID/:productID/:productModifier -- Use this to add a product to the cart of choice (id you chose). I suggest that you add a product to every cart you have in your list.<br><br>
*For the two next steps, if you have multiple carts, feel free to run on each cart*<br>
8. Run PUT /carts/:cartID/:productID/:productModifier -- Use this to update the quantity of the product in the cart of choice.
9. Run DEL /carts/:cartID/:productID/:productModifier -- Use this to delete a product from the cart of choice.<br>
*Recommended: Run GET /carts to view changes to the cart in the list*

10. Run DEL /carts/:cartID -- Use this to delete a cart of choice.<br>
*Recommended: Run GET /carts to view changes to the cart in the list*
11. Run PUT /carts -- Update all carts in the list (Adds 1 to All cartIDs and cartTimes).
12. Finally, run DEL /carts -- Deletes all carts in the list.<br>
*Recommended: Run GET /carts to view changes to the cart in the list*
***
