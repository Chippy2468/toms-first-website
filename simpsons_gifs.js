function refreshGif(){
var gifArray = [["https://i.pinimg.com/originals/0d/b3/14/0db314fd7cca54738f3fe6234916b969.gif","Homer Belly Wobble"],
    ["https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6484329/millhouse.gif","Everything Is Coming Up Milhouse"],
    ["https://gifdb.com/images/high/bart-and-homer-join-us-409oypc8y7q8kyh7.gif", "Join Us"],
    ["https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6484447/salad.gif", "You Don't Win Friends With Salad"],
    ["https://24.media.tumblr.com/tumblr_mb2xdb6uwB1r00g1wo1_500.gif","Squishee Madness"],
    ["https://img1.wikia.nocookie.net/__cb20130920111652/simpsons/images/8/81/Best-simpsons-gifs-jasper-cats.gif","Jasper's Cat"],
    ["https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6484367/lizard%20queen.gif","Lizard Queen"],
    ["https://gifdb.com/images/high/homer-simpsons-why-you-little-bart-zwczin36d05mqgff.gif","Why You Little"],
    ["https://25.media.tumblr.com/8f659d31440e48a142df3dd5da80dd1b/tumblr_mmr372Fylk1rv1ckao1_500.gif","Devil's Donuts"],
    ["https://cdn.vox-cdn.com/uploads/chorus_asset/file/6947241/homercar.gif","Homer's Car"],
    ["https://media1.tenor.com/m/PiF4WW_91GcAAAAC/simpsons-ah-its-too-hot-today.gif","It's Too Hot Today"],
    ["https://studentedgecontent.blob.core.windows.net/images/articles/2017/04/10.gif","Speak Up I'm Wearing A Towel"],
    ["https://cdn-images-1.medium.com/v2/resize:fit:640/1*hO2Y9OihBOOf2Lexo_1OaA.gif", "Good Old Rock, Nothing Beats That!"],
    ["https://gifdb.com/images/thumbnail/homer-simpson-monkey-brain-g8s0lpt6ujd0wfgt.gif", "Clapping Monkey"],
    ["https://i.pinimg.com/originals/a7/51/b0/a751b0266f5f96c865bc49f49adadcc3.gif", "Dancing Bart"],
    ["https://rubbercat.net/simpsons/jerusalem-punchlenny.gif", "Lenny Punch"],
    ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3QjL4RsR0C0SUsDOO7VrM330WTdnCm88h1SMWvDObUY0Y8sPdnGCj5af91kIw8K2ABgumGh0FQMwXODsInS9cteDw6kApCcvnMBTNIuKRHz1s0QLxTl-Bvzw0KodV1NW_xjfFxV-tBKIc_1HbHE7b5sfGz9g8ulLBMkOOCGHQTCtBf_a9Nb00TclurQ/s480/giphy.gif", "Aw, He's Miserable"],
    ["https://25.media.tumblr.com/4423ff497fe6f5d70d18e84e22540330/tumblr_mi0vbhhV5S1rmgel4o1_500.gif","Homer, The Shining!"],
    ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f85f615f-d4f1-408b-8810-9047d7f66b2f/d6b447a-8397ce23-4bff-456b-bfd8-8cc13d82c4e2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NWY2MTVmLWQ0ZjEtNDA4Yi04ODEwLTkwNDdkN2Y2NmIyZlwvZDZiNDQ3YS04Mzk3Y2UyMy00YmZmLTQ1NmItYmZkOC04Y2MxM2Q4MmM0ZTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mzsnup1eCETzI_0ei4ViQ3hopuUvTWGdfKcmaVqCuQE", "Homer Swearing"],
    ["https://64.media.tumblr.com/91a49d615314afc1482e9178b580ec74/0aaf5e52c840c309-97/s540x810/537296d8f341e8a51b4f22d9fd24257595777c3c.gifv","Dr Nick"],
    ["https://media.tenor.com/9HdeM_pvdnIAAAAM/just-ask-this-scientician-um.gif","Just Ask This Scientician"],
    ["https://media.tenor.com/3FcijD6HUzAAAAAM/aurora-borealis-steamed-hams.gif","Aurora Borealis"]
];

var randomNumber = Math.floor(Math.random() * gifArray.length);
console.log(randomNumber);

var chosenGif = gifArray[randomNumber][0];
console.log(chosenGif);

var chosenGifName = gifArray[randomNumber][1];
console.log(chosenGifName);

document.querySelectorAll(".simpsons_gif")[0].setAttribute("src", chosenGif);

document.querySelectorAll("h3")[0].innerHTML = chosenGifName;
}

refreshGif();
