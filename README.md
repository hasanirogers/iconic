Iconic
======

A simple node app for building custom icon fonts from svg sources.


Instructions
------------

* Install npm packages: `npm install`
* Put the svg sources you want to compile in the `/svg` dir.
* Build fonts with: `gulp`

The fonts will build to `/fonts` and your css will build to `/examples`. You'll also find and example html file giving you a visual for the compiled fonts and their class names.

_Note_: You can specify prefix for the classname using the `--prefix` arg. For example `gulp --prefix=ids` will produce class names such as `ids-arrow`. If you don't specific a prefix it will default to "custom".


TODOs
-----
* Automatically name the fonts based on the template file names
* Add flag that changes the default source svg dir
* Come up with a way to custom glob svg source 