# Redactor Plugins

A bunch of plugins for the Redacator WYSIWYG Text Editor.

## Version

These plugins have been tested on Redactor v10.0.4

## Video.js

This is an updated version of the plugin available on the Redactor site that
does not appear to have been updated to use the new API.

## Audio.js

Paste in a url to an audio file and it the plugin will wrap it in the ```<audio>``` tag.

## Usage

These are the instructions when you are using ```redactor-rails```. Firstly add the plugin you wish to use to the location:

```
/app/assets/redactor-rails/plugins/
```

Now in your ```/app/assets/redactor-rails/config.js``` or where ever you you init redactor.

```
$('.redactor').redactor({
  plugins: ['video', 'audio'],
  ...
});
```
