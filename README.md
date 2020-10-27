# Self Care Center
## Overview
How can I care for myself? One way is with affirmations and mantras!
Affirmations are thoughts of positive self-empowerment, meant to assert your self-worth.
Mantras are repetive phrases that are repeated again and again during mindfulness practices. Your challenge is to build an app that helps users remind themselves of their inherent value!

**I decided to go with error handling and favoriting messages. You will see that everything on the page runs fairly smooth and completes most of the set tasks for the CYOA. As for the MVP, I am proud to say I was able to get through that with flying colors!**

### Deployed Site
https://kevinhartmann23.github.io/self-care-center/

## Learning Goals

- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize your programming skill set

## Workflow
I was able to utilizes branches to create a good git workflow, I also used the projects feature on github to help myself remain organized!

### Day One Deliverable

Reflect on the the following questions in a DM to your Project Manager:

- What are my strengths as a developer? With which Mod 1 concepts do I feel comfortable?
_My strengths as a developer would be organization, task oriented, and calm. As for code, I feel my most comfortable with HTML/CSS and the javascript basics. After looking over the specs, there is nothing that I am ready that makes me uncomfortable or nervous!_

- In what areas could I grow? With which Mod 1 concepts do I struggle?
*I could spend more time practicing psuedocode. I tend to write my psudeocode out with code inside of it, this tends to get me off track or confused. Once I get to the area I've psuedocoded I am more focused on what I wrote down rather than working through code organically. I would like to be able to hone in my terms of art, as well as how to work through the struggle. Typically, I get stuck and confuse myself more. I would like to be able to slow down and simplify my process!*

- Which CYOA features align with my strengths?
*CSS animation & login page*

- Which CYOA features align with my areas of growth?
*favorites, all messages interface,  error handling, and responsive design*

- Which CYOA features align with what I enjoy about programming?
*responsive design and animation!*

- Which CYOA features make the most sense for this application?
*Login Page, never sees a repeated message, and favorites.*

- Which CYOA feature(s) will I aim for?
*I will most likely aim for login page and favorites*

### Iteration 0: Build Out Comp
- Images are below
- An assets directory is provided in the repo, and colors and fonts are provided in the CSS file.

<img width="1434" alt="Screen Shot 2020-10-15 at 10 05 58 AM 👁 " src="https://user-images.githubusercontent.com/49926352/96159974-93c4c780-0ed2-11eb-9009-68501c2b5bd7.png">

<hr/>

### Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature

- When a user selects a message option and then clicks the "Receive Message" button, the user sees a random message from the list of possible messages for that category
- When the message appears, the mediation icon disappears from the message area

<img width="1434" alt="Screen Shot 2020-10-15 at 10 06 20 AM 👁 " src="https://user-images.githubusercontent.com/49926352/96160091-b7880d80-0ed2-11eb-9e16-2c7e52b72509.png">

<hr/>

### Choose your own Adventure

I decided to tackled a few, I feel that with JavaScript I struggle towards the end. I wanted to do a few CYOA that were more javascript heavy.

#### Error handling and clear button
- User should not be able to click the "Receive Message" button unless they have selected a message option.
- The user can click a clear button, which clears the page of any message .
- User should only be able to click the clear button if a message is visible.
- When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
- If you've added other buttons or inputs, be sure to add some error handling for them as well.

_Note: You can disable these buttons, hide them, or display a message to the user for error handling. The choice is yours!_

#### User can favorite a message

- When a message appears, it should appear with a "Favorite" button.
- When the "Favorite" button is clicked, that message should be added to a new list of favorite messages.
- Users should be able to view their favorites by clicking a "View Favorites" button that exists somewhere on the page
- When the "View Favorites" button is clicked, users should be taken to a new page that displays all of their favorite messages.
- Users should be able to navigate back to the main page by clicking a button.
- Users should be able to remove a message from their list of favorites, by clicking a button.
- As you add these new elements to the page, be sure to match the style of existing elements.

_NOTE: None of this needs to persist on page refresh, unless you also complete the local storage feature_

#### Design your own feature
- Style the title! I added a Fav-Icon and matched the title to match the page styling!

#### Struggles

I found myself struggling in the same place I did in our paired project, finishing the last few steps. On the favorites button CYOA, I was able to complete everything. The only problem is, the remove from favorites function will not remove multiple without having to go back to the main page and back into favorites page. I spent a lot of time tinkering here, and I figure it has to do with some refactoring and decoupling my data (these are two huge areas of improvement!).
