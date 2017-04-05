# Eat-Da-Burger!

## Overview
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. App stores every burger in a mysql database, whether devoured or not.

## Installation
- Clone repo locally -> `cd` into project folder.
- Run `npm install` to install dependencies locally.
- Log into localhost mysql shell and source `db/schema.sql` and `db/seeds.sql` files in order to create and load initial database data.
  - To do this within mysql shell, use the command `source /FULL_PATH_HERE/schema.sql`
- Rename `EXAMPLE__keys.js` to `keys.js`.
- Inside `keys.js` file, provide values for your local mysql connection where the schema.sql and seeds.sql files were sourced.
- Run with either `npm run debug` or simply `npm start`.
- Enjoy eating burgers <3

----------

Ronny Tomasetti (C) 2016. All Rights Reserved.
