# Code base for front end code test to Atlas Copco's DDS team

The code base contains two directories; one for the API (built with C#/.NET Core) and one for a vue app skeleton.
These are provided to aid you in the implementation and allow to focus on the frontend.
You are completely free to modify or replace them as you see fit.
For more detail about the API and vue app skeleton, see READMEs in respective directories.

# Application Leandro Notes

## General Notes

Work was done between 4/8/21 - 6/8/21.
The idea was to make a site that's reminiscent of old school RPG, with the grid type character inventory and what not, since that was the immediate feeling i got when reading the assignment.
Vetur extension kept throwing syntax error, but the code compiled just fine.

## Improvements

Refactoring of getImage() function that gets repeated in Cart.vue and Character.vue, outsource it to its own module.
As of right now no responsive design, only looks decent on desktop.
Structure the components to use either Component({}) type syntax with the options api inside the object or write the code in the exported class, my idea was to show that i can use both types of syntaxes, but in hindsight it would be better to choose one to keep it consice.
Styling wise it could have more padding and margins to make it more "breathy", so that the items arent to close to each other.
Some animations (fade in) to give it a more alive feeling.
Make site a bit more reactive, so that the cart display as soon as an item is added.

## Bugs

Weird bug that doesnt let one add items to cart after one makes a purschase
Could make more use of typeScript features, ts kept throwing error that globals like this.$store was not available and what not available but compiled it anyway, vetur kept throwing error but compiled regardless.

## Similar Projects

Here are some links to similar projects of mine:
[Aibean] (https://github.com/Leandro-Da-Souza/airbean)
a lightweight e-commerce site where one orders coffee, a school project that uses node.js in the backend and vue.js in the front.
