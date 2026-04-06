const months = [
    {
        name: "January",
        background: "#4d4d4d",
        nav_color: "#63c3ff",
        text_color: "#ffffff",
        description: "Welcome to how I see January! The start of the new year! This month is cold and kind of lonely. January is quiet and peaceful after the chaos that is December. Imagine sitting on a park bench that’s under a street lamp late at night and just watching the snow fall. No one else is around. Just you and your thoughts. You can’t hear cars or dogs barking. It’s just the snow falling.",
        colors: "Gray, Light Blue, White",
        symbols: "Snowflake, Snowmen",
        font: "Playfair Display",
        font_style: "'Playfair Display', arial",
        month_image: "images/January.jpg"

    },
    {
        name: "February",
        background: "#fffbde",
        nav_color: "#ff99c9",
        text_color: "#ff0077",
        description: "February is winter in the daytime. Being outside with people you love, playing in the snow. It's bright, and while it's cold outside, your heart is kind of warm.is winter in the daytime. Being outside with people you love, playing in the snow. It's bright, and while it's cold outside, your heart is kind of warm.",
        colors: "Red, Warm white, pink/magenta, purple",
        symbols: "Hearts, roses and tulips, chocolate",
        font: "Courgette",
        font_style: "'Courgette', times new roman",
        month_image: "images/February.jpg"
    },
    {
        name: "March",
        background: "#036600",
        nav_color: "#f7a602",
        text_color: "#ffffff",
        description: "March doesn't really have an outside scene. Emeralds are march. Cute frogs are a March thing. Green leaves are another March thing. Bunnies are also kind of a March thing. Compared to the two previous months, March is brighter and a little warmer. March doesn’t have much of an outside scene, but maybe imagine little plant sprouts coming back after a long winter.",
        colors: "Green, golden yellow",
        symbols: "Four-leaf clover/shamrock, gold coins, rainbows",
        font: "Quicksand",
        font_style: "'Quicksand', arial",
        month_image: "images/March.jpg"
    },
    {
        name: "April",
        background: "#001454",
        nav_color: "#3b56ad",
        text_color: "#ffffff",
        description: "April is dark and rainy, but in a comforting way. The windows are all fogged up, and you’re sitting in a car in a comfy hoodie just listening to the rain hit the windshield. It would smell like wet pavement, and other than the constant soft rain, the only other sounds are your breathing and other cars driving around you. It would be daytime outside, but there are too many clouds to see the sun. April is probably my favorite month. ",
        colors: "Dark Blue",
        symbols: "Raindrops, dark clouds",
        font: "Abril Fatface",
        font_style: "'Abril Fatface', times new roman",
        month_image: "images/April.jpg"
    },
    {
        name: "May",
        background: "#ffcbf5",
        nav_color: "#ff7795",
        text_color: "#e0005e",
        description: "May is definitely sunny and warm (not too warm, though, just perfect). There is just a slight breeze that moves the flowers ever so slightly. You can hear people talking, but not like it's crowded. You can just hear people having a good time. Normal sounds that I feel like you could maybe hear outside a beautiful little cafe in a happy little city. There would be little pink petals floating through the air. It’s bright and airy compared to the dark and heavy April.",
        colors: "Light pink, white",
        symbols: "Cherry blossoms, flowers",
        font: "Caveat",
        font_style: "'Caveat', arial",
        month_image: "images/May.jpg"
    },
    {
        name: "June",
        background: "#de5900",
        nav_color: "#ffbc12",
        text_color: "#ffffff",
        description: "For June, I think a lot about sitting in the sun, painting outside, or swimming. Think about a bright sunset in warm orange and yellow tones. June is very alive and active compared to the previous months. You can feel the sun on your shoulders as you sit outside watching the late afternoon sun make a nearby lake sparkle. You feel warm and content with life. ",
        colors: "Orange, yellow",
        symbols: "The sun",
        font: "Unbounded",
        font_style: "'Unbounded', arial",
        month_image: "images/June.jpg"
    },
    {
        name: "July",
        background: "#040017",
        nav_color: "#850000",
        text_color: "#ffffff",
        description: "July next! It happens late at night when it's dark outside, so you can see the fireworks really well. It's a cool night (not cold, but a nice cool temperature compared to the heat of the day). It happens in an open space where people are sitting on camp chairs, holding glow sticks and sparklers. You can see bright fireworks all around, some near and some far. You can hear the loud booms in the sky as they explode upwards. You also watch your family and friends lighting fireworks and grabbing watermelon slices. Everyone has slightly sticky fingers. Overall, July is just a feeling of excitement.",
        colors: "Red, white, blue",
        symbols: "Fireworks",
        font: "Satisfy",
        font_style: "'Satisfy', times new roman",
        month_image: "images/July.jpg"
    },
    {
        name: "August",
        background: "#fffd91",
        nav_color: "#ffb026",
        text_color: "#cc6300",
        description: "To me, August is yellow. Not a neon yellow, but a nice soft yellow, like butter yellow. It's warm and sunny (not too warm), and imagine lying in a field of yellow flowers that are blowing in the soft wind. Willow trees are also an August thing. Lemons (especially lemon slices), cute bumble bees, and little white ducks are also August things. A lazy brown bear is also an August thing. It's a beautiful, sunny, and slow afternoon sitting on a deck in a swinging chair or a hammock.",
        colors: "Yellow",
        symbols: "Lemons, brown bears",
        font: "Special Elite",
        font_style: "'Special Elite', times new roman",
        month_image: "images/August.jpg"
    },
    {
        name: "September",
        background: "#8a5737",
        nav_color: "#4a1d01",
        text_color: "#210d00",
        description: "September is crunchy leaves swirling through the air. It's red apples, warm drinks, teddy bears, sunflowers, and raccoons. September doesn't really have a time of day, but it is colder outside. Not like winter, though. It's gray skies with the beautiful fall leaves on the trees. The gray skies make the leaves stand out. Je te laisserai des mots is a song that kind of feels like September. September feels kind of dreamy and slow. ",
        colors: "Brown, muted red, dark orange",
        symbols: "Leaves, apples",
        font: "Arvo",
        font_style: "'Arvo', arial",
        month_image: "images/September.jpg"
    }, 
    {
        name: "October",
        background: "#000000",
        nav_color: "#ff6200",
        text_color: "#ffffff",
        description: "October has jack-o'-lanterns, black cats, sheet ghosts, spiders, bats, and so much more. Fog is definitely an October thing. There are still leaves on the ground, but it's not the main focus. October is cozy, but also kind of fast. It's energetic even though you're comfy. October definitely is nighttime, and it's kind of cold outside. It's eating so much candy that your tongue hurts. October is watching scary movies with family and friends and being just a little afraid to go to bed that night. It's fun to be scared for a little bit. ",
        colors: "Black, orange, lime green, purple",
        symbols: "Monsters and ghouls, candy, jack-o-lanters",
        font: "Creepster",
        font_style: "'Creepster', arial",
        month_image: "images/October.jpg"
    },
    {
        name: "November",
        background: "#5f8a61",
        nav_color: "#300f00",
        text_color: "#ffffff",
        description: "November is family time. Doing things together. Playing board games and card games with each other. The leaves are back in focus, but they are all brown now. It's almost warm outside in my mind, even though realistically it would be colder. The biggest part of November, though, is Thanksgiving. Being in the kitchen together while everyone helps to make the Thanksgiving feast. November is getting so full from all the food that you just lounge around and maybe take a nap. November is acorns, mushrooms, leaves, turkeys, and pumpkins/pumpkin pie. November is being home with people you love.",
        colors: "Brown, sage green, orange",
        symbols: "Pie, turkey",
        font: "Kaushan Script",
        font_style: "'Kaushan Script', times new roman",
        month_image: "images/November.jpg"
    },
    {
        name: "December",
        background: "#012400",
        nav_color: "#870000",
        text_color: "#ffffff",
        description: "It should be snowy outside with people hustling and bustling. It's cold, but it's magical. I always think of a city at Christmas time. Snow all over, people bundled up, doing kind acts for others. December is also family time. Buying gifts for one another, playing games, getting cozy together, and wrapping up warm blankets, socks, and jackets. Christmas is always fun. December is symbolized by presents in shiny wrapping paper, reindeer, stars, Christmas trees, stockings, Santa and his elves, and twinkling Christmas lights. It's cold outside, but you can be cozy inside. It's making gingerbread houses and being merry with each other.",
        colors: "Red, green, white, yellow",
        symbols: "Baby Jesus, presents, santa, christmas trees",
        font: "Cinzel",
        font_style: "'Cinzel', times new roman",
        month_image: "images/December.jpg"
    }
]

let currentMonth = 0;

function showMonth() {
    const month = months[currentMonth];

    document.getElementById("navigation").style.backgroundColor = month.nav_color;
    document.getElementById("monthName").textContent = month.name;
    document.getElementById("description").textContent = month.description;
    document.getElementById("symbols").textContent = month.symbols;
    document.getElementById("colors").textContent = month.colors;
    document.getElementById("font").textContent = month.font;

    document.querySelectorAll("button").forEach(btn => {
        btn.style.backgroundColor = month.nav_color;
        btn.style.color = month.text_color;
    })

    document.body.style.backgroundColor = month.background;
    document.body.style.color = month.text_color;
    document.body.style.fontFamily = month.font_style;
    document.getElementById("month_image").src = month.month_image;
    document.getElementById("month_image").alt = month.month_image + "Month theme image";
}

function nextMonth() {
    currentMonth = (currentMonth + 1) % months.length;
    showMonth();
}

function previousMonth() {
    currentMonth = (currentMonth - 1 + months.length) % months.length;
    showMonth();
}

showMonth();

