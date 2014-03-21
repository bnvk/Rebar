![Rebar - a lightweight HTML5 / CSS3 framework for making responsive websites, built using the LESS preprocessor](images/rebar-logo.png)

**Rebar** makes developing responsive front-end HTML5 & CSS3 easier. An alternative to popular frameworks like Bootstrap & Foundation which are a bit too heavy & opinionated for our taste- if you've ever tried making a Bootstrap site that doesn't look like a Bootstrap site- you know what we mean. The heaviness of these frameworks works great for back-end developers who have little to no front-end or design knowledge or interest, but can be more of obstacle to people who poses the later skills especially when trying to upgrae an existing application.

Think of Rebar as a toolbox + some blueprints to help you start building beautiful modern responsive web applications, quickly. Rebar also aims to provide you with an dependency architecture that should meet most of your needs without getting in your way, no mater the scale of your application :)

Features
------------

* CSS Reset
* HTML5 Element Styling
* HTML5 Form Styling
* Responsive Grid
* Responsive Boxes
* Color Palate
* LESS

### LESS

Before you can really customize Rebar, you need to be comfortable with the CSS preprocessor LESS. If you're unfamiliar with it, go check out [lesscss.org](http://lesscss.org), read up, and do a basic tutorial. If you're not be ready to compile LESS just yet, if you're scratching your head saying WTF, seriously consider trying it, preprocessors are where it's at and will take your front-end skills to the next level.


### Architecture

Rebar documentation guide, use this page to copy style and snippets for your application.

* **index.html**

#### CSS 

Include ```rebar.css``` along with your application's CSS but place the ``` <link rel="stylesheet" href="rebar.css" />``` link above your custom CSS code and beware of conflicting styles happening lower in your code. The ```guide.css``` is only used for our documentation page.

* **css/**
	* rebar.css
	* guide.css

#### Config

The magic happens in  ```config.less``` and is where you define fonts, colors, sizes, margins, and paddings of your app. By tweaking a few things you can get a custom look and feel with little effort.

* **less/config.less**

#### Rebar Core LESS

The ```less/rebar/``` folder contains the core Rebar LESS files. You **should not** edit things in here unless you're trying to submit bug fixes or add functionality to Rebar. If so, we'd love for you to help make Rebar better :)

* **less/rebar/**
	* base.less
	* buttons.less
	* clearing.less
	* forms.less
	* grid.less
	* images.less
	* links.less
	* lists.less
	* messages.less
	* navigation.less
	* responsive-boxes.less
	* responsive-grid.less
	* separators.less
	* shapes.less
	* tables.less
	* typography.less

By default all these files are included in **less/rebar.less** but you may leave out files your app does not need to cut down on size. Example: comment out **tables.less** if you don't have <tables> in your application, and your name is not [Bobby](http://xkcd.com/327/)

* **less/rebar.less**

This LESS file is what creates the final **rebar.css** that you link to in your application. You shouldn't edit this file if you are using Rebar by itself with little to no customization.

#### Application LESS

If you want to build a new application with Rebar use the ```less/app/``` folder which contains LESS templates commonly used in web applications & responsive design.

* **less/app/** 
	* backgrounds.less
	* icons.less
	* mobile.less
	* tablet.less
	* web.less
	* webfonts.less

And if you're using [Bower](http://bower.io) package manager (which we reccomend), you will probably want to copy this folder to your application assets or static folder. Once you do that update the paths inside ```app.less``` to a path similar to ``` ../bower_components/rebar/less/rebar/base.less ``` Then set your LESS compiler to properly compile the CSS within your static folder as well.

What's Missing
--------------------

Rebar would LIKE to be able to easily switch between fixed and fluid grid designs with adding a class or two but we don't have this functionality, yet.

At the moment Rebar does not have a theme generator or anything, so you need recompile the LESS files with updated config values to make aethetic changes to your site, otherwise it will look like the demo page.

Where's the JavaScript?
--------------------------------

If you need a lightbox, dropdown menu, tooltip, or other snazy JS things- you ain't gonna find that here. This is an intentional decision, we don't ever plan to add JS libraries to Rebar. We believe responsive design and  CSS is a complex enough thing to warrant separting it from JS. We suggest you instal modular robust JS tools in addition to Rebar using [Bower.io](http://bower.io) as it is a great tool for front-end developers.

### Dependencies

The following depencies are installed via Bower when you install Rebar. If you don't use Bower you can manually install them yourself. These are both very helpful libraries for doing fun CSS3 animation, shapes, and gradients. To add these to your application, just link to the LESS or CSS in your ```app.less``` or ```rebar.less``` manifest file.

Dan Eden's [Animate.css](http://daneden.me/animate)
Useful mixins [LESS Elements](http://lesselements.com)

### Credits

Brennan Novak creator of [Rebar](https://brennannovak.com)
David Gamache's for creating [Skeleton Framework](http://www.getskeleton.com)
Awesome CSS preprocessor [LESS](http://lesscss.org)