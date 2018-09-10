# Simply Modal Box

Simply Modal Box is a modern dialog library which is highly configurable, clear, simple and easily styleable works on mobile devices, and can be customized to match your style.

## Overview

Check out the some following examples modal box opening:

default, notifyTemplate, iframeModal, type1

Check out the some following examples modal box type opening (I was set notification template (notifyTemplate))

default, succes, info, error

### Features

Responsive, Customizable and clean code

### Include the files
```
<link href="simply-modal.min.css" rel="stylesheet">
<script src="simply-modal.min.js"></script>
```


Call the plugin when the body is load:

```
// Instantiate new modal

$.simplyModal  (({
    title: 'Modal Box Title',
    description: 'Modal Box description'
    setTimeout: 0
    class: 'set-your-class'
    type: 'iframeModal'
    defaultW: 'set-your-width'
    defaultH: 'set-your-height'
  }
});
```



## Css3 Effects
fadein, slideRight, slideBottom, fall, flid3d, scale, newspaper, d3rotate, horizontal-3d

## Options

| Name | type | default | description |
| :---          |     :---:      |   :---: |  :---  |
| title  | string   | null   | Set the your modal box title (optional)
| description  | string   | null   | Set the your modal box description / spot (optional)
| setTimeout  | integer   | false   | Set the automatic close after millisecond
| classSet  | string   | Array   | Set the template type (notification template for example / iframeModal etc.)
| close  | boolean   | true   | Allows the user to close the modal when press esc.
| buttonNameSet  | string   | Yes/No   | If you want to ask your user (Yes/No reply). You can set what do you want button name.
| effect  | string   | fadein  | Set the effect name.
| classBtn  | string   | fadein  | If you want use iframe modal box, set your element class. You must to use div element. 'div class="simply-iframeModal" data-width="400" data-height="500" data-src="https://www.youtube.com/embed/cMNPPgB0_mU".
| defaultW  | integer   | 400   | If you want the use Iframe modal box, you can set your iframe width. You can change.
| defaultH  | integer   | 500   | If you want the use Iframe modal box, you can set your iframe height. You can change.
| cookie  | array   | expire : null name : null   | If you want to set cookie (no show again for example), you can set cookie name and expire.

## Author

* **Yasin Demir** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
