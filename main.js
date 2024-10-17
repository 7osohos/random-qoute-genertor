let humor_btn = document.querySelector(".btn.humor"),
    motivation_btn = document.querySelector(".btn.motivation"),
    philosophy_btn = document.querySelector(".btn.philosophy"),
    wisdom_btn = document.querySelector(".btn.wisdom"),
    quote = document.querySelector(".quote");

let humor_ary = [
    `“Two things are infinite: the universe and human stupidity;<br> and I'm not sure about the universe.”<span>"Albert Einstein"</span>`,
    `“Whenever I feel the need to exercise, I lie down until it goes away"<span>"Paul Terry"</span>`,
    `“All you need is love. But a little chocolate now and then doesn't hurt.”<span>"Charles M. Schulz"</span>`,
    `“A day without sunshine is like, you know, night.”<span>"Steve Martin"</span>`,
    `“I love deadlines. I love the whooshing noise they make as they go by.”<span>"Douglas Adams, The Salmon of Doubt"</span>`
];
let motivation_ary = [
    `“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”<span>"Roy T. Bennett, The Light in the Heart"</span>`,
    `“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”<span>"Roy T. Bennett, The Light in the Heart"</span>`,
    `“Be the change that you wish to see in the world.”<span>"Mahatma Gandhi"</span>`,
    `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”<span>"Marilyn Monroe"</span>`,
    `“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”<span>"Neil Gaiman, Coraline"</span>`
];
let philosophy_ary = [
    `“The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”<span>"Elie Wiesel"</span>`,
    `“You talk when you cease to be at peace with your thoughts.”<span>"Margaret Mead"</span>`,
    `“Man is the only creature who refuses to be what he is.”<span>"Albert Camus"</span>`,
    `“May you live every day of your life.”<span>"Jonathan Swift"</span>`,
    `“We have to dare to be ourselves, however frightening or strange that self may prove to be.”<span>"May Sarton"</span>`
];
let wisdom_ary = [
    `“Knowing yourself is the beginning of all wisdom.”<span>"Aristotle"</span>`,
    `“The only true wisdom is in knowing you know nothing.”<span>"Socrates"</span>`,
    `“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”<span>"Isaac Asimov"</span>`,
    `“Count your age by friends, not years. Count your life by smiles, not tears.”<span>"John Lennon"</span>`,
    `“If you're reading this...
Congratulations, you're alive.
If that's not something to smile about,
then I don't know what is.”<span>"Chad Sugg, Monsters Under Your Head"</span>`
];


let exist;
var randomNumber;
function RandomNumber() {
    randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber);

    if (exist - randomNumber == 0) {
        RandomNumber();
    }
    else {
        exist = randomNumber;
    }
}


humor_btn.addEventListener("click", function (e) {

    RandomNumber();
    quote.innerHTML = humor_ary[randomNumber];

})
motivation_btn.addEventListener("click", function (e) {

    RandomNumber();
    quote.innerHTML = motivation_ary[randomNumber];

})
philosophy_btn.addEventListener("click", function (e) {

    RandomNumber();
    quote.innerHTML = philosophy_ary[randomNumber];

})
wisdom_btn.addEventListener("click", function (e) {

    RandomNumber();
    quote.innerHTML = wisdom_ary[randomNumber];

})


