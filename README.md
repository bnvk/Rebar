Rebar
=====

Rebar helps make developing the front-end CSS of your application easier. Born of frustration with existing offerings in this space- popular frameworks like Bootstrap & Foundation are far too heavy & opinated, especially when it comes to design. Have you ever tried making a site with Bootstrap that doesn't look like a site made with Bootstrap? While possible, doing so requires you to really dive in an learn the Bootstrap way of building apps. Meanwhile, bolierplates like HTML5 or GoldenGrid are so small that building a web application on top of one still requires a bit of uneccesary repetitive scaffolding to get going. 

If you are like me and found neither extreme a good fit- Rebar might be right for you. Additionally, Rebar aims to provide you with an dependency architecture that should meet most of your needs without getting in your way no mater the scale of your application. Think of Rebar as a toolbox + blueprints to help you get building quickly :)



### Features

* CSS Reset
* Responsive Grid
* Responsive Boxes
* Icons
* Webfonts
* Typography
* Color Palate
* LESS templating
* LESS Mixins

### LESS

Before you can really do anything of real value with Rebar, you need to feel comfortable working with LESS. If you're totally unfamiliar go to http://lesscss.org and read up and find a basic tutorial somewhere. If you're scratching your head and saying WTF? You not be ready to use LESS or Rebar just yet. However, if you want to take your web dev skills to the next level you need to start using LESS or SASS and they will make your life *much* better, I promise.


#### Architecture

* **config.less**

This is where the magic happens. Inspired by the Customize & Theme Generator for Bootstrap, in  **config.less** you define fonts, colors, sizes of your app. By tweaking a few things your app can get quite a custom look and feel going quite easily.

* **css/**
	* app.css
	* guide.css

This is where your application css files live. 

* **less/app/** 
	* backgrounds.less
	* fonts.less
	* icons.less
	* messages.less

In this folder you will find global app templates that can be configured in a highly custom fashion, and then used throughout your app. 

* **less/app.less** 

This file is your basic app template where you choose which mixins you want to include.

* **less/rebar/**
	* base.less
	* links.less
	* typography.less
	* navigation.less
	* lists.less
	* elements.less
	* images.less
	* buttons.less
	* forms.less
	* tables.less
	* responsive-grid.less
	* responsive-boxes.less

The **less/base/** folder contains Rebar specific LESS templates. If your app does not have tables leave out **tables.less** 

* **less/mixins/** 
	* animate.less
	* elements.less
	* shapes.less

LESS Mixins are collection of really useful snippets and helpers made by 3rd parties which make doing things like animation, gradients, and shapes really easy. You may not want or need any of these things- in which case just delete these files from your app and delete 



### What's Missing

Rebar would LIKE to be able to easily switch between fixed and fluid grid designs, we don't have this functionality, yet.

At the moment Rebar offers very little aethetics for your site unless you want it to look like the demo page. Thus, if you are not a desiger or are not working with a designer, you may want to use Bootstrap or something else.



### Where's the JavaScript?

If you need a lightbox, dropdown menu, tooltips, typeahead, or snazy Javascript things- you ain't gonna find that here. This is an intentional decision and we don't ever plan to add JS libraries to Rebar. We believe responsive design and the CSS to do so is complex enough to warrant it's own framework- we think libraries and frameworks should never try to do *everything*



### Credits

[ Brennan Novak ]: https://brennannovak.com

[David Gamache - Skeleton Framework]: http://www.getskeleton.com

[Dan Eden - Animate.css]: http://daneden.me/animate

[LESS Elements]: http://lesselements.com

[LESS]: http://lesscss.org