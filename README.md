# Loading Screen: ALPHA #

Here with have a simple, clean, and expandable loading screen.<br>
The loading screen is coded using HTML/CSS with JQUERY.<br>
All images and text can be easily edited, full instructions provided below.<br>

## Features ##

- Four premade content tabs; News, Rules, Staff, Trailer
- Audio controller for background music
- Video controller for displaying a server trailer

## Install ##

1) Customise HTML and CSS accordingly to fit your server, refer to instructions below if unsure
2) Drag and drop `boii-loadscreen-alpha` into your server resources
3) Restart your server

## Editing HTML ##
- Below is some brief instructions of where to edit specfic parts of the loading screen
- All of this information is located within `loadscreen.html`

Cursor colour; 
- At `line: 27` edit `<polygon style="fill:#4dcbc2;"`  
- At `line: 28` edit `<polygon style="fill:#3da29b;"`

Server name; 
- At `line: 39` edit `<h1 id="sv-name">BOII DEVELOPMENT</h1>`

Content headers; 
- At `line: 39` edit `<h1 class="content-header">NEWS</h1>`
- At `line: 57` edit `<h1 class="content-header">RULES</h1>`
- At `line: 82` edit `<h1 class="content-header">STAFF</h1>`
- At `line: 99` edit `<h1 class="content-header">TRAILER</h1>`

Menu buttons; 
- From `line: 104` to `line: 108` edit the following;
`<button class="content-btn1">HOME</button>`
`<button class="content-btn2">NEWS</button>`
`<button class="content-btn3">RULES</button>`
`<button class="content-btn4">STAFF</button>`
`<button class="content-btn5">TRAILER</button>`

News posts;
- At `line:47` edit the following; 
`<div><img src="img/news1.jpg" alt="1" class="news-img"><p class="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>`
- You can remove the additional template posts at `line: 49` & `line: 51` don't forget to remove the `<br></br>`
- You can add as many posts as you like the container will scroll

Rules; 
- Starting at `line: 59` edit the rules list
- You can add as many rules as you like the container will scroll

Staff members; 
- Starting at `line 84:` edit your staff members list
- Ensure that you add your staff images into `boii-loadscreen-alpha/html/img`

Audio; 
- At `line: 96` edit `<source src="./audio/aleesia-high.mp3" id="track">` 
- Ensure that you add your audio file into `boii-loadscreen-alpha/html/audio`

Video; 
- At `line: 101` edit `<source src="./video/1.mp4" type="video/mp4">`
- Ensure that you add your video file into `boii-loadscreen-alpha/html/video`

## Editing CSS ##
- Below is some brief instructions on how/where to edit the loading screen css
- Everything below is edited within `boii-loadscreen-alpha/html/loadscreen.css`

Background images; 
- Starting from `line: 34` edit the following *(there is 5 to edit)*;
`/* Background images */`
`.bg-crossfade > div:nth-child(1) {`
    `background-image: url('img/bg1.jpg'); // Change background image here`
`}`

Overlay;
- Starting from `line: 55` you can edit the menu overlay;
`/* Left side overlay */`
`.bg-overlay {`
    `position: fixed;`
    `left: -10%;`
    `height: 100%;`
    `width: 25%;`
    `background-color: rgba(31, 30, 30, 0.9); /* Edit background colour here */`
    `transform: skew(-15deg);`
    `border: 1px solid #4dcbc2; /* Edit border colour here */`
    `border-top: none;`
    `border-bottom: none;`
    `box-shadow: rgba(77, 203, 195, 0.56) 0px 0px 50px 4px; /* Edit box shadow here */`
`}`

Header container; 
- At `line: 77` & `line: 78` edit the following to change header text colours;
`color: #fff;`
`text-shadow: 0px 0px 10px #4DCBC2; /* Edit text shadow here */`

Header logo; 
- At `line: 91` & `line: 92` edit the following to change logo and box shadow
`background-image: url('img/logo.png'); // Edit header logo here`
`box-shadow: rgba(77, 203, 195, 0.56) 0px 0px 10px 2px; /* Edit box shadow here */`

Menu buttons; 
- Starting from `line: 96` edit the following *(there is 5 to edit)*;
`/* Menu button 1 */`
`.content-btn1 {`
    `position: fixed;`
    `top: 25%;`
    `left: 13%;`
    `height: 5%;`
    `width: 10%;`
    `border: 1px solid #4dcbc2; /* Edit border here */`
    `background-color: rgba(31, 30, 30, 1); /* Edit background colour here */`
    `box-shadow: rgba(77, 203, 195, 0.56) 0px 0px 5px 2px; /* Edit box shadow here */`
    `transform: skew(-15deg);`
    `text-align: center;`
    `font-size: 20px;`
    `color: #fff; /* Edit colour here */`
`}`
`.content-btn1:hover {`
    `color: #4DCBC2; /* Edit colour here */`
    `box-shadow: rgba(77, 203, 195, 0.56) 0px 0px 15px 2px; /* Edit box shadow here */`
`}`

Content containers; 
- Starting at `line: 202` edit the following *(there is 4 to edit)*;
`/* Content containers */`
`#news-container {`
    `position: fixed;`
    `top: 10%;`
    `left: 25%;`
    `height: 80%;`
    `width: 65%;`
    `background-color: none;`
    `text-shadow: 0px 0px 10px #4DCBC2;`
    `transform: skew(-15deg);`
    `overflow-y: scroll;`
`}`

Trailer box shadow; 
- At `line: 245` edit the following; 
`box-shadow: rgba(31, 30, 30, 0.65) 0px 0px 15px 2px; /* Edit box shadow here */`

Content box text; 
- Starting from `line: 248` edit the following; 
`/* Content texts */`
`.content-header {`
    `color: #fff; /* Edit colour here */`
    `font-size: 4rem;`
    `text-shadow: 0px 0px 10px #1f1e1e; /* Edit text shadow here */`
    `padding: 1%`
`}`
`.content-text {`
    `color: #fff; /* Edit colour here */`
    `font-size: 1.2rem;`
    `text-shadow: 0px 0px 10px #1f1e1e; /* Edit text shadow here */`
    `padding: 1%`
`}`

Staff & news image box shadow;
- Starting from `line:293` edit the following;
`/* Images */`
`.staff-img {`
    `max-height: 150px;`
    `max-width: 150px;`
    `border-radius: 25%;`
    `box-shadow: rgba(31, 30, 30, 0.65) 0px 0px 10px 2px; /* Edit box shadow here */`
`}`
`.news-img {`
    `fit: cover;`
    `max-width: 100%;`
    `box-shadow: rgba(31, 30, 30, 0.65) 0px 0px 10px 2px; /* Edit text shadow here */`
`}`        

Audio controller;
- Starting from `line: 354` edit the following;
`/* Audio controls */`
`audio {`
    `position: fixed;`
    `top: 92%;`
    `left: 83%;`
    `border: 1px solid #4dcbc2; /* Edit border colour here */`
    `border-radius: 40px;`
    `box-shadow: rgba(77, 203, 195, 0.56) 0px 0px 15px 2px; /* Edit box shadow here */`
`}`
`audio::-webkit-media-controls-panel {`
    `background-color: #1f1e1e; /* Edit background colour here */`
`}`  
`audio::-webkit-media-controls-time-remaining-display {`
    `color: #4dcbc2; /* Edit colour here */`
`}`
`audio::-webkit-media-controls-current-time-display {`
    `color: #4dcbc2; /* Edit colour here */`
`}`

## PREVIEW ##
[YouTube](https://www.youtube.com/watch?v=Dj9b2pVZvxE)

## SUPPORT ##
[Discord](https://discord.gg/MUckUyS5Kq)  
