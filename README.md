# Friminutt
Final Project

## Guidelines

### General
https://github.com/thedaviddias/Front-End-Checklist
https://axesslab.com/alt-texts/ <- alt tags

### Validators
http://checkers.eiii.eu/ <- Main one for Accessibility  
https://validator.w3.org/ <- HTML/Markup Validation  
https://jigsaw.w3.org/css-validator/validator.html.en <- CSS

### CSS
* the /css/ folder must be used for all css files.
* no inline css, i.e. `style=""`
* lowercase classnames, use hypen (-) for spaces `text-center` `img-header`

#### Common CSS classes (defined in css/main.css)
* text-center (text-align: center;)
* no-padding
* visible (display: inherit !important;)
* hidden (display: none !important;)
* standard-img (max-width:100%;height:auto;)
* **Add more to main.css**

### Images
* lowercase filenames  
* all images goes into the img/ folder, create logical subfolders if needed  
* no spaces or special characters
* mind the filesizes, none should be over 1MB
* descriptive and short file names
* alt tags are required, should be descriptive
`img/header.jpg` `img/fadder/tor.png`

### Containers and grid system

#### Main Container
```
<div class="container">
  Place the main content and rows inside here, unless you need to cover the entire screen.
</div>
```

#### Full Container
```
<div class="container-full">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center">Dekker hele skjermen</h1>
     </div>
     </div>
</div>
```
#### See example.html for more
#### Example, 1 column with a header and a paragraph:
```
<div class="row">
  <div class="col-12">
    <h1 class="">Header!</h1>
      <p>This is a paragraph!</p>
  </div>
</div>
```

#### Example, 2 columns: 6 + 6 = 12
```
<div class="row">
  <div class="col-6">
      empty
  </div>
  <div class="col-6">
      empty
   </div>
</div>
```
