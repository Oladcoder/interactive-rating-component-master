# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#i learnt how to give a class to a list of item while removing the rest)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```
```js
  number.addEventListener('click', (e)=> {
        numbers.forEach(number => {
            number.classList.remove('color')
            selectedButton = e.target
            selectedButton.classList.add('color')
            value = selectedButton.textContent
        });

    })
});
```

### Continued development

Continued Learning Variables scoping


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Oladcoder)
- Twitter - [@yourusername](https://www.twitter.com/Olazthegreat)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

