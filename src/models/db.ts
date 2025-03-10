// Pickup lines database
export interface PickupLineDatabase {
  [category: string]: string[];
}

export const pickupLines: PickupLineDatabase = {
  best: [
    "I'm not a photographer, but I can picture us together.",
    "Do you have a map? Because I just got lost in your eyes.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Life without you would be like a broken pencil... pointless.",
  ],
  funny: [
    "Are you a parking ticket? Because you've got 'fine' written all over you.",
    "Are you from Tennessee? Because you're the only 10 I see!",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you like raisins? How about a date?",
    "Are you a bank loan? Because you have my interest.",
  ],
  smooth: [
    "Your hand looks heavy. Let me hold it for you.",
    "I was feeling a bit off today, but you definitely turned me on.",
    "I must be a snowflake, because I've fallen for you.",
    "I'd say God bless you, but it looks like he already did.",
    "Can I follow you? Because my mom told me to follow my dreams.",
  ],
  clever: [
    "Are you a compiler? Because you're raising my temperature.",
    "Are you HTTP? Because without you, I'm just ://",
    "You must be the square root of -1, because you can't be real and you're complex.",
    "Are you a 90-degree angle? Because you're looking right.",
    "Are you made of beryllium, gold, and titanium? Because you are Be-Au-Ti-ful.",
  ],
  cute: [
    "If you were a fruit, you'd be a fine-apple.",
    "Are you a dictionary? Because you add meaning to my life.",
    "You know what's on the menu? Me-n-u.",
    "I'm not an organ donor, but I'd be happy to give you my heart.",
    "Is your name Wifi? Because I'm feeling a connection.",
  ],
  cheesy: [
    "Did the sun come out or did you just smile at me?",
    "If you were a triangle, you'd be acute one.",
    "Do you know what my shirt is made of? Boyfriend/girlfriend material.",
    "I'm no mathematician, but I'm pretty good with numbers. Tell you what, give me yours and watch what I can do with it.",
    "Is your dad a baker? Because you're a cutie pie!",
  ],
  sexy: [
    "Is it hot in here or is it just you?",
    "If I told you I like your body, would you hold it against me?",
    "My lips are getting jealous of all the words coming out of your mouth. They want to meet yours.",
    "Was your father a boxer? Because you're a knockout!",
    "You must be tired because you've been running through my mind all night.",
  ],
  flirty: [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "I must be a snowflake, because I've fallen for you.",
    "I was blinded by your beauty... I'm going to need your name and phone number for insurance purposes.",
    "Can I take your picture? I want to show Santa what I want for Christmas.",
    "Feel my shirt. Know what it's made of? Boyfriend/girlfriend material.",
  ],
  corny: [
    "Do you like bacon? Wanna strip?",
    "Did you invent the airplane? Because you seem Wright for me.",
    "Are you a campfire? Because you're hot and I want s'more.",
    "I'm not drunk, I'm just intoxicated by you.",
    "Is your name Ariel? Because we mermaid for each other.",
  ],
  database: [
    "Are you SQL? Because you structure my query language.",
    "Is your name MySQL? Because you've got lots of tables but all I want is to join with you.",
    "Are you a database? Because you have all the data I'm searching for.",
    "SELECT * FROM dating WHERE dating.their_number = your number;",
    "Are you MongoDB? Because I want to NoSQL, just one-on-one time with you.",
  ],
  programmer: [
    "Are you a JavaScript Promise? Because you look like you'll resolve all my problems.",
    "Is your name Wi-Fi? Because I'm feeling a strong connection.",
    "While (true) { ilove(you); }",
    "You must be a function, because I keep calling you and can't get enough.",
    "Are you a CSS rule? Because you've got great class.",
  ],
};
