# Friminutt
Final Project

## Guidelines

### CSS
* the /css/ folder must be used for all css files.
* no inline css, i.e. `style=""`

### Images
* lowercase filenames  
* all images goes into the img/ folder, create logical subfolders if needed  
* no spaces or special characters
* mind the filesizes, none should be over 1MB
* descriptive and short file names
`img/header.jpg` `img/fadder/tor.png`

### Containers and grid system

#### Main Container
```
<div class="container">
  Place the main content and rows inside here, unless you need to cover the entire screen.
</div>
```

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
<div class="row">
  <div class="col-6">
      empty
  </div>
  <div class="col-6">
      empty
   </div>
</div>
