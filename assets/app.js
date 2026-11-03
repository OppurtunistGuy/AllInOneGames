(function(){
"use strict";

/* ---------------- content ---------------- */

var GAMES = [
  {slug:"purity-test",  name:"Purity Test",      glyph:"😇", players:"solo",  kind:"purity", wash:"93 228 199"},
  {slug:"truth-or-dare",name:"Truth or Dare",    glyph:"🎭", players:"2–20", kind:"pick2",  wash:"255 46 116"},
  {slug:"never-have-i", name:"Never Have I Ever",glyph:"☝️", players:"2–20", kind:"single", wash:"255 182 72", stem:"Never have I ever…"},
  {slug:"most-likely",  name:"Most Likely To",   glyph:"👉", players:"2–20", kind:"single", wash:"138 160 196", stem:"Who's most likely to…"},
  {slug:"would-you",    name:"Would You Rather", glyph:"🚪", players:"2–20", kind:"ab",     wash:"168 108 255"},
  {slug:"rate-them",    name:"Rate Them",        glyph:"🔟", players:"2–20", kind:"rate",   wash:"93 228 199"},
  {slug:"kings-cup",    name:"King's Cup",       glyph:"👑", players:"2–20", kind:"soon",   wash:"255 46 116"},
  {slug:"imposter",     name:"Imposter",         glyph:"🔎", players:"3–20", kind:"soon",   wash:"255 46 116"},
  {slug:"quiz",         name:"Quiz",             glyph:"💡", players:"2–20", kind:"soon",   wash:"255 46 116"}
];

var PROMPTS = {
  "truth-or-dare":{
    soft:{truth:["What's the worst haircut you ever paid for?","Which of your group chats would ruin you first?","What's a compliment you still think about?","What did you pretend to understand all through school?","What's the pettiest thing you've ever held a grudge about?","Which of your habits would you hate in someone else?"],
          dare:["Text the fifth person in your recents a single word.","Let the group pick your next profile photo.","Do your best impression of whoever is on your left.","Let the person on your right choose your next three songs.","Say something nice about everyone here, in one breath.","Show the group your most recent photo, no context."],
          dareOnline:["Text the fifth person in your recents a single word.","Let the group pick your next profile photo.","Do your best impression of whoever went last.","Change your display name to whatever the group decides.","Say something nice about everyone on this call, in one breath.","Turn your camera to the messiest corner of your room."]},
    hot:{truth:["Who in this room would you sleep with tonight if nobody ever found out?","What's the worst sex you've ever had, and did you tell them?","What do you want in bed that you've never once asked for?","Who was the last person you thought about while you were alone?","What's the strangest place you've ever got yourself off?","Have you ever stopped halfway? Why?","What's the loudest you've ever been, and who heard it?","What's the biggest lie you've told about your number?","Who in this room do you reckon is best in bed, and who's worst?","What's the worst thing you've said in bed by accident?","Have you ever finished and immediately regretted who you were with?","What are you into that you'd never put in writing?","Who's the most recent person you sent a nude to?","What's the most physically risky place you've done it?","Have you ever slept with someone to get back at someone else?","What's the one thing a partner did that you still think about?","Who here do you think lies the most about their sex life?","Who would you let watch?","What's the longest you've kept someone a secret, and from who?","How many people have you been with in one week?","What's the one thing you'd change about your last partner?","Have you ever said the wrong name? What happened next?","Who in this room have you already pictured it with?","What's the filthiest thing you've ever said out loud?","Dom, sub or switch \u2014 and when did you work it out?","What's your safeword, and have you ever actually had to use it?","Have you ever been tied up? Better or worse than you expected?","Blindfold or restraints \u2014 which one does more for you?","What's your hard limit, the thing that is never happening?","What are you curious about but have never asked anyone for?","Who in this room do you read as a dom, and who as a sub?","Have you ever been told what to do and liked it more than you'd admit?","Collar, cuffs or rope?","What's the most you've ever been marked, and how did you explain it?","Have you ever subbed for someone you outrank in real life?","What's the kinkiest thing in your search history right now?","Who in here would you hand control to for a whole night?","Have you ever been edged? How long did you last?","What's the one instruction you'd follow without question, and from who?","Have you ever used a toy on someone else \u2014 whose idea was it?","What do you want that you've only ever typed and never said out loud?","What's the thing just inside your limit that you'd still say yes to?","Have you ever had aftercare, and did you know that's what it was?","What's something you're into that would genuinely surprise everyone here?","Who's the last person you asked permission from, and what for?"],
         dare:["Kiss the person on your left. Five seconds. The group counts.","Take off one item of clothing. The group chooses which.","Sit on the lap of whoever you'd pick in here, until your next turn.","Whisper the filthiest thing you can think of to the person on your right. They rate it out of ten.","Describe exactly what you'd do to the person opposite you. Thirty seconds, no stopping.","The group picks someone. Kiss their neck for ten seconds.","Make the noise you make. Everyone is listening.","Let the person opposite you put your hands wherever they like for one minute.","Demonstrate your best move on a cushion. Full commitment.","Say who in this room you'd pick first, second and third. In order, out loud.","Swap one item of clothing with the person on your right.","Take a drink off someone's collarbone.","Let whoever you'd pick blindfold you for the next two rounds.","Give the person on your left thirty seconds, anywhere they ask.","Hold eye contact with the person you want most in here. Thirty seconds, no talking.","Tell the group the one thing you'd want done to you tonight.","Read the last message you sent out loud, then say what you actually meant by it.","Let the person on your right pick your next dare. You can't refuse it.","Say 'I'd pick you' to the person opposite. No explanation, no laughing.","Let the person on your left unlock your phone and read one thread out loud.","Name your safeword to the group. Say it like you mean it.","Tell the person opposite exactly what you'd want them to do to you. Spare no detail.","Pick a dom in this room. They give you one command for the next round. You get one veto.","Ask the person on your left for permission to kiss their neck. If they say no, you drink.","Kneel in front of whoever you'd pick. They decide when you get up.","Let someone here bind your wrists with whatever is nearest. You say when it stops.","Blindfold yourself for two rounds. Anyone may speak to you. Nobody touches.","Describe your ideal scene, start to finish, to the person you'd want in it.","Give the person on your right one instruction. They choose whether to follow it.","Hand your phone to whoever you'd give control to. They set one rule for the rest of the game.","Tell the group your hard limit, then the thing sitting just inside it.","Whisper an instruction to the person on your right. They tell the group whether they'd follow it.","Let the person opposite choose: your hands behind your back for one round, or you answer anything they ask.","Ask permission before every turn you take for the rest of the game. Out loud, every time."],dareOnline:["Unmute and say the last thing you searched, out loud.","Show the group the last photo in your camera roll. No scrolling first.","Type the filthiest thing you can think of in the chat. No deleting it.","Looking straight down the camera, say which person on this call you\u2019d pick.","Unmute and make the noise you make. Everyone is listening.","Describe on camera exactly what you\u2019d do to whoever you\u2019d pick on this call.","Send your most recent selfie to the chat. Unedited.","Hold eye contact with the camera for thirty seconds while everyone watches.","Tell the group your safeword, straight into the mic.","Let the group choose a number. Open your camera roll and show that photo.","Whisper what you want done to you. Make them turn the volume up.","Pick a dom on this call. They give you one instruction for the next round. One veto.","Type your hard limit in the chat, then the thing sitting just inside it.","Camera off for one round. The group may ask you anything.","Change your display name to the name you almost said last time.","Let whoever went last choose one item of clothing you take off on camera.","Read your last sent message out loud, in full, then say what you meant by it.","Hand control of your next three turns to someone on this call. They decide, you comply."]}
  },
  "never-have-i":{
    soft:["cried at an advert","stayed in a group chat I muted two years ago","pretended to know a song everyone else knew","gone to a party and left before saying hello","lied about having seen a film","googled someone before meeting them"],
    hot:["slept with someone in this room","had a one night stand","had sex in a car","had a threesome","been walked in on","sent a nude to the wrong person","faked it start to finish","had sex somewhere public","slept with someone whose name I never got","used a toy with someone else","slept with a friend's ex","filmed it","had sex on a first date","cheated and never told anyone","been somebody's secret","paid for it","said the wrong name","wanted someone in this room"]
  },
  "most-likely":{
    soft:["lose their phone twice in one night","become weirdly good at a niche hobby","start a group chat nobody asked for","still be awake at 5am talking about nothing","cry at their own birthday","reply to a message three weeks late"],
    hot:["sleep with someone in this room tonight","send a nude to the wrong chat","get caught somewhere public","own a toy nobody here knows about","say the wrong name mid-way","sleep with an ex before the week is out","be into something they'd never admit","have already slept with someone everyone here knows","leave tonight with a stranger","be the loudest","lie about their number and get caught","catch feelings for someone they're only sleeping with"]
  },
  "would-you":{
    soft:[["Lose every photo you've ever taken","Lose every message you've ever sent"],["Never hear a new song again","Never see a new film again"],["Always be forty minutes early","Always be ten minutes late"],["Know exactly when you'll die","Know exactly how"]],
    hot:[["Have your ex rate you out of ten in public","Have your last partner describe it in detail"],["Sleep with someone here tonight and everyone finds out","Nobody ever knows, and it never happens"],["Give up sex for a year","Give up your phone for a year"],["Be walked in on by your parents","Walk in on them"],["Have every photo on your phone shown","Have every message you've sent read out"],["Only ever again with your first","Only ever again with strangers"],["Be the best they ever had and never see them again","Be forgettable and keep them forever"],["Know exactly who in this room wants you","Have every one of them know you want them"]]
  },
  "rate-them":{
    soft:["They're a 10 but they reply to every message with one word","They're a 10 but they arrive forty minutes late and bring nothing","They're a 10 but their playlist is three songs on loop","They're a 10 but they narrate every film while you watch it","They're a 10 but they've never once chosen the restaurant"],
    hot:["They're a 10 but they won't go down","They're a 10 but they finish in ninety seconds","They're a 10 but they're completely silent the whole time","They're a 10 but they call you by their ex's name","They're a 10 but they want it filmed every time","They're a 10 but they've slept with your sibling","They're a 10 but the lights stay off, always","They're a 10 but the socks stay on","They're a 10 but they have never once initiated","They're a 10 but they tell their group chat the details","They're a 10 but they check their phone halfway through","They're a 10 but they've never asked what you like","They're a 10 but they keep their ex's hoodie on the bed","They're a 10 but they want a running commentary from you"]
  }
};

var AXES = [
  {id:"nights",     label:"Nights out", glyph:"🍸", wash:"255 46 116"},
  {id:"screens",    label:"Screens",    glyph:"📱", wash:"138 160 196"},
  {id:"nerve",      label:"Nerve",      glyph:"😬", wash:"168 108 255"},
  {id:"trouble",    label:"Trouble",    glyph:"🚨", wash:"255 92 92"},
  {id:"redemption", label:"Redemption", glyph:"✨",       wash:"93 228 199"}
];

var DECK = [
  {axis:"nights",chain:"ladder",depth:0,gate:true, type:"binary",weight:1, text:"Had a full drink, not just a sip of someone's?"},
  {axis:"nights",chain:"ladder",depth:1,gate:false,type:"scale", weight:0, text:"How often are you out these days?",
    options:["Barely ever","A few times a month","Most weekends","More nights than not"],points:[0,1,3,5]},
  {axis:"nights",chain:"ladder",depth:2,gate:false,type:"binary",weight:3, text:"Lost a whole evening you still can't account for?"},
  {axis:"nights",chain:"ladder",depth:3,gate:false,type:"binary",weight:6, text:"Woken up somewhere you couldn't name?"},
  {axis:"nights",chain:"host", depth:0,gate:true, type:"binary",weight:2, text:"Thrown a party at someone else's place?"},
  {axis:"nights",chain:"host", depth:1,gate:false,type:"binary",weight:4, text:"Broke something there and said nothing?"},

  {axis:"screens",chain:"phone",depth:0,gate:true, type:"binary",weight:1, text:"Made a dating profile?"},
  {axis:"screens",chain:"phone",depth:1,gate:false,type:"count", weight:0, text:"How many are live right now?",
    options:["None","One","Two or three","More than I'd admit"],points:[0,1,3,5]},
  {axis:"screens",chain:"phone",depth:2,gate:false,type:"binary",weight:4, text:"Been on two at once without either knowing?"},
  {axis:"screens",chain:"lurk", depth:0,gate:true, type:"binary",weight:1, text:"Looked up someone you'd just met?"},
  {axis:"screens",chain:"lurk", depth:1,gate:false,type:"binary",weight:3, text:"Got far enough back that you had to be careful what you tapped?"},
  {axis:"screens",chain:"lurk", depth:2,gate:false,type:"binary",weight:6, text:"Made an account purely to keep watching?"},

  {axis:"nerve",chain:"nerve",depth:0,gate:true, type:"binary",weight:2, text:"Told someone how you felt with no idea how it would land?"},
  {axis:"nerve",chain:"nerve",depth:1,gate:false,type:"binary",weight:4, text:"Done it knowing they were with someone?"},
  {axis:"nerve",chain:"exit", depth:0,gate:true, type:"binary",weight:2, text:"Left somewhere without telling anyone you'd gone?"},
  {axis:"nerve",chain:"exit", depth:1,gate:false,type:"binary",weight:3, text:"Let them think you were still there?"},
  {axis:"nerve",chain:"exit", depth:2,gate:false,type:"multi",  weight:0, text:"What finally gave it away?",
    options:["Someone checked","A photo","My own message","Nothing — they still don't know"],points:[2,4,3,7]},

  {axis:"trouble",chain:"rules",depth:0,gate:true, type:"binary",weight:2, text:"Talked your way past a rule that applied to you?"},
  {axis:"trouble",chain:"rules",depth:1,gate:false,type:"binary",weight:4, text:"Needed someone else to cover for you?"},
  {axis:"trouble",chain:"rules",depth:2,gate:false,type:"binary",weight:7, text:"Let them take the blame for it?"},
  {axis:"trouble",chain:"edge", depth:0,gate:true, type:"binary",weight:3, text:"Done something you'd struggle to explain to a stranger?"},
  {axis:"trouble",chain:"edge", depth:1,gate:false,type:"binary",weight:9, text:"Would you struggle to explain it to the people here?"},

  {axis:"redemption",chain:"good",depth:0,gate:false,type:"binary",weight:-2,text:"Been the one who got everyone home?"},
  {axis:"redemption",chain:"good",depth:0,gate:false,type:"binary",weight:-2,text:"Owned up to something nobody would have found out about?"},
  {axis:"redemption",chain:"good",depth:0,gate:false,type:"binary",weight:-3,text:"Given up something you wanted so someone else could have it?"}
];
DECK.forEach(function(c,i){ c.id = i; });

/* ---------------- plumbing ---------------- */

var stage  = document.getElementById("stage");
var browse = document.getElementById("browse");
var ROUNDS = 10;
var S = { game:null, mode:null, round:0, purity:null, age:null, venue:null };

/* Age gate. A self-declared threshold, not verification — it is the curation
   signal and the liability shield app stores and ad networks expect. No date of
   birth is asked for, so no minor DOB is ever stored. */
var AGE_KEY = "party-engine-age";
function readAge(){ try { return localStorage.getItem(AGE_KEY); } catch(e){ return null; } }
function writeAge(v){ S.age = v; try { localStorage.setItem(AGE_KEY, v); } catch(e){} }
function isAdult(){ return S.age === "adult"; }
S.age = readAge();

/* In person or online. A dare that says "kiss the person on your left" is
   meaningless on a video call, so the venue selects a different dare list and
   rewrites room references in the shared truths. Stored beside the age answer. */
var VENUE_KEY = "party-engine-venue";
function readVenue(){ try { return localStorage.getItem(VENUE_KEY); } catch(e){ return null; } }
function writeVenue(v){ S.venue = v; try { localStorage.setItem(VENUE_KEY, v); } catch(e){} }
function isOnline(){ return S.venue === "online"; }
S.venue = readVenue();

/* One bank, two venues: rather than duplicate 45 truths, room references are
   rewritten at render time. */
function venueText(t){
  if(!isOnline() || typeof t !== "string") return t;
  return t.replace(/in this room/gi, "on this call")
          .replace(/in here\b/gi, "on this call")
          .replace(/\bthis room\b/gi, "this call");
}

/* Soft prompts that are fine for adults but not for a 13-year-old. Filtered out
   rather than rewritten, so the adult experience is untouched. */
var TEEN_EXCLUDE = ["Know exactly when you'll die", "Read your last three searches out loud"];
function teenOk(item){
  var t = Array.isArray(item) ? item.join(" | ") : item;
  for(var i = 0; i < TEEN_EXCLUDE.length; i++){ if(t.indexOf(TEEN_EXCLUDE[i]) !== -1) return false; }
  return true;
}
function promptSet(slug, mode){
  var set = PROMPTS[slug][mode];
  if(Array.isArray(set)) return isAdult() ? set : set.filter(teenOk);
  var dare = (isOnline() && set.dareOnline) ? set.dareOnline : set.dare;
  if(isAdult()) return { truth: set.truth, dare: dare };
  return { truth: set.truth.filter(teenOk), dare: dare.filter(teenOk) };
}

function esc(s){ return String(s).replace(/[&<>"]/g, function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function pick(a){ return a[Math.floor(Math.random()*a.length)]; }

/* Shuffle bags. A fresh random pick repeats within a ten-round session often
   enough to be noticed, so each prompt list gets its own bag: shuffled once
   with Fisher-Yates, drawn down to empty, then reshuffled. No card repeats
   until every other card in that list has been seen. */
var BAGS = {};
function draw(key, items){
  if(!items || !items.length) return "";
  var bag = BAGS[key];
  if(!bag || !bag.length){
    bag = items.slice();
    for(var i = bag.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var t = bag[i]; bag[i] = bag[j]; bag[j] = t;
    }
    BAGS[key] = bag;
  }
  return bag.pop();
}
function wash(rgb){ document.documentElement.style.setProperty("--wash", rgb); }
function playing(on){ document.body.classList.toggle("playing", !!on); if(on) window.scrollTo(0,0); }

/* ---------------- age gate ---------------- */

function renderGate(){
  playing(true);
  wash("255 46 116");
  syncChips();
  paint(
      '<div class="split anim-fade">'
    +   '<button class="panel dark" data-age="minor">'
    +     '<span class="big">Under 18</span>'
    +     '<span class="sub">Soft prompts only. Some games stay locked.</span>'
    +   '</button>'
    +   '<button class="panel hot" data-age="adult">'
    +     '<span class="big">18 or over</span>'
    +     '<span class="sub">Unlocks Hot \u2014 explicit, sexual, no filter.</span>'
    +   '</button>'
    + '</div>'
    + '<div class="orbadge"><i>or</i></div>'
    + '<div class="hud"><div class="hudrow center">One question before you start \u2014 '
    + 'no date of birth, and nothing leaves your browser</div></div>'
  );
  Array.prototype.forEach.call(stage.querySelectorAll(".panel"), function(b){
    b.addEventListener("click", function(){ writeAge(b.getAttribute("data-age")); renderBrowse(); });
  });
}

function syncChips(){
  var a = document.getElementById("agechip");
  if(!S.age){ a.hidden = true; } else {
    a.hidden = false;
    a.textContent = isAdult() ? "18+" : "Under 18";
    a.setAttribute("aria-label", "Age setting: " + a.textContent + ". Tap to change.");
  }
  var v = document.getElementById("venuechip");
  if(!S.venue){ v.hidden = true; } else {
    v.hidden = false;
    v.textContent = isOnline() ? "Online" : "In person";
    v.setAttribute("aria-label", "Playing " + v.textContent + ". Tap to change.");
  }
}

function renderVenue(){
  playing(true);
  wash("255 46 116");
  syncChips();
  paint(
      '<div class="split anim-fade">'
    +   '<button class="panel dark" data-venue="person"><span class="ico">\uD83C\uDFE0</span><span class="big">In person</span><span class="sub">One room, one phone. Dares you can actually do.</span></button>'
    +   '<button class="panel hot" data-venue="online"><span class="ico">\uD83D\uDCBB</span><span class="big">Online</span><span class="sub">On a call. Camera and chat dares instead.</span></button>'
    + '</div>'
    + '<div class="orbadge"><i>or</i></div>'
    + '<div class="hud"><div class="hudrow center">Where is everyone? \u2014 this decides which dares you get</div></div>'
  );
  Array.prototype.forEach.call(stage.querySelectorAll(".panel"), function(b){
    b.addEventListener("click", function(){ writeVenue(b.getAttribute("data-venue")); renderBrowse(); });
  });
}

/* ---------------- browse ---------------- */

function renderBrowse(){
  if(!S.age) return renderGate();
  if(!S.venue) return renderVenue();
  syncChips();
  playing(false);
  wash("255 46 116");
  stage.innerHTML = "";
  browse.innerHTML =
      '<p class="eyebrow anim-up">Reverse-engineered prototype · phase 2</p>'
    + '<h1 class="anim-up d1">Party games, minus the bait</h1>'
    + '<p class="lede anim-up d2">Six of these run in the browser. Three don’t, and the card says so before you click — the one thing the original gets wrong.</p>'
    + '<div class="grid">'
    + GAMES.map(function(g,i){
        var soon   = g.kind === "soon";
        var locked = !isAdult() && g.kind === "purity";
        var off    = soon || locked;
        var tag    = locked ? "lock" : (soon ? "soon" : "play");
        var label  = locked ? "18+" : (soon ? "App only" : "Playable");
        return '<button class="card anim-pop" style="--cw:'+g.wash+';animation-delay:'+(0.1 + i*0.04).toFixed(2)+'s" data-slug="'+g.slug+'"'+(off?" disabled":"")+'>'
          + '<span class="glyph">'+g.glyph+'</span>'
          + '<span class="name">'+esc(g.name)+'</span>'
          + '<span class="meta">'+g.players+' players</span>'
          + '<span class="tag '+tag+'">'+label+'</span>'
          + '</button>';
      }).join("")
    + '</div>';

  Array.prototype.forEach.call(browse.querySelectorAll(".card"), function(b){
    b.addEventListener("click", function(){ openGame(b.getAttribute("data-slug")); });
  });
}

function openGame(slug){
  var g = GAMES.filter(function(x){ return x.slug === slug; })[0];
  if(!g || g.kind === "soon") return;
  if(!isAdult() && g.kind === "purity") return;   // this deck cannot be made teen-safe
  S.game = g; S.mode = null; S.round = 0;
  playing(true);
  wash(g.wash);
  if(g.kind === "purity") startPurity(); else renderModePick();
}

/* ---------------- shared screen parts ---------------- */

function hud(doneRatio, left, right){
  var pct = Math.max(0, Math.min(99, Math.round(doneRatio*100)));
  return '<div class="hud"><div class="track"><i style="width:'+pct+'%"></i></div>'
    + '<div class="hudrow"><button class="quit" data-quit>← Quit</button>'
    + '<span class="n">'+esc(left)+'</span><span class="n">'+esc(right)+'</span></div></div>';
}

function paint(html, fill){
  stage.classList.toggle("fill-hot", fill === "hot");
  stage.innerHTML = html;
  var q = stage.querySelector("[data-quit]");
  if(q) q.addEventListener("click", renderBrowse);
}

function askClass(text){ return text.length > 58 ? "ask long" : "ask"; }

/* ---------------- soft / hot ---------------- */

function renderModePick(){
  var minor = !isAdult();
  paint(
      '<div class="split anim-fade">'
    +   '<button class="panel dark" data-mode="soft">'
    +     '<span class="ico">🎉</span>'
    +     '<span class="big">Soft</span>'
    +     '<span class="sub">Playful. Safe for people you just met.</span>'
    +   '</button>'
    +   '<button class="panel hot" data-mode="hot"' + (minor ? ' disabled' : '') + '>'
    +     '<span class="ico">🔥</span>'
    +     '<span class="big">Hot</span>'
    +     (minor ? '<span class="lock">18+ only</span>'
              : '<span class="sub">Explicit. Sexual. Nothing held back.</span>')
    +   '</button>'
    + '</div>'
    + '<div class="orbadge"><i>or</i></div>'
    + hud(0, S.game.name, "Pick a nerve")
  );
  Array.prototype.forEach.call(stage.querySelectorAll(".panel"), function(b){
    b.addEventListener("click", function(){
      S.mode = b.getAttribute("data-mode");
      S.round = 0;
      nextRound();
    });
  });
}

function nextRound(){
  if(S.round >= ROUNDS) return renderWall();
  S.round++;
  var k = S.game.kind;
  if(k === "pick2") renderPick2();
  else if(k === "ab") renderAB();
  else if(k === "rate") renderRate();
  else renderSingle();
}

function roundHud(){
  return hud((S.round-1)/ROUNDS, S.game.name + " · " + S.mode, S.round + " / " + ROUNDS);
}

/* one sentence, nothing else */
function renderSingle(){
  var text = draw(S.game.slug + "|" + S.mode, promptSet(S.game.slug, S.mode));
  paint(
      '<div class="solo">'
    +   '<p class="eyebrow anim-up">'+esc(S.game.stem || S.game.name)+'</p>'
    +   '<p class="'+askClass(text)+' anim-up d1">'+esc(venueText(text))+'</p>'
    +   '<button class="cta anim-up d2" data-next>Next →</button>'
    + '</div>' + roundHud()
  );
  stage.querySelector("[data-next]").addEventListener("click", nextRound);
}

/* the dare split: two words, whole screen */
function renderPick2(){
  paint(
      '<div class="split anim-fade">'
    +   '<button class="panel dark" data-t="truth"><span class="big">Truth</span></button>'
    +   '<button class="panel hot" data-t="dare"><span class="big">Dare</span></button>'
    + '</div>'
    + '<div class="orbadge"><i>or</i></div>'
    + roundHud()
  );
  Array.prototype.forEach.call(stage.querySelectorAll(".panel"), function(b){
    b.addEventListener("click", function(){ revealPick2(b.getAttribute("data-t")); });
  });
}

function revealPick2(t){
  var text = draw("tod|" + S.mode + "|" + t, promptSet("truth-or-dare", S.mode)[t]);
  paint(
      '<div class="solo">'
    +   '<p class="eyebrow anim-up">'+t+'</p>'
    +   '<p class="'+askClass(text)+' anim-up d1">'+esc(venueText(text))+'</p>'
    +   '<div class="stack anim-up d2">'
    +     '<button class="cta" data-next>Next →</button>'
    +     '<button class="cta ghost" data-again>Other one</button>'
    +   '</div>'
    + '</div>' + roundHud(), t === "dare" ? "hot" : ""
  );
  stage.querySelector("[data-next]").addEventListener("click", nextRound);
  stage.querySelector("[data-again]").addEventListener("click", renderPick2);
}

/* would you rather: the choice itself fills both halves */
function renderAB(){
  var pair = draw("wyr|" + S.mode, promptSet("would-you", S.mode));
  paint(
      '<div class="split anim-fade">'
    +   '<button class="panel dark" data-i="0"><span class="big phrase">'+esc(venueText(pair[0]))+'</span></button>'
    +   '<button class="panel hot" data-i="1"><span class="big phrase">'+esc(venueText(pair[1]))+'</span></button>'
    + '</div>'
    + '<div class="orbadge"><i>or</i></div>'
    + roundHud()
  );
  Array.prototype.forEach.call(stage.querySelectorAll(".panel"), function(b){
    b.addEventListener("click", nextRound);
  });
}

function rateColor(n){ return "hsl(" + ((n-1)/9*112).toFixed(0) + " 74% 58%)"; }

function renderRate(){
  var text = draw("rate|" + S.mode, promptSet("rate-them", S.mode));
  var btns = "";
  for(var n = 1; n <= 10; n++){
    btns += '<button class="rate" style="background:'+rateColor(n)+';animation-delay:'+(0.12 + n*0.025).toFixed(3)+'s" data-n="'+n+'">'+n+'</button>';
  }
  paint(
      '<div class="solo">'
    +   '<p class="eyebrow anim-up">Rate them</p>'
    +   '<p class="'+askClass(text)+' anim-up d1">'+esc(venueText(text))+'</p>'
    +   '<div class="rates anim-up d2">'+btns+'</div>'
    + '</div>' + roundHud(), S.mode === "hot" ? "hot" : ""
  );
  var row = stage.querySelector(".rates");
  Array.prototype.forEach.call(row.querySelectorAll(".rate"), function(b){
    b.addEventListener("click", function(){
      // Lock the row and mark the choice, so a fast second tap is visibly
      // refused rather than silently swallowed the way the original does.
      row.classList.add("locked");
      b.classList.add("chosen");
      Array.prototype.forEach.call(row.querySelectorAll(".rate"), function(x){ x.disabled = true; });
      setTimeout(nextRound, 420);
    });
  });
}

function renderWall(){
  paint(
      '<div class="solo halo">'
    +   '<p class="eyebrow anim-up">Demo over</p>'
    +   '<p class="ask anim-up d1">'+ROUNDS+' rounds done</p>'
    +   '<p class="lede anim-up d2" style="text-align:center;margin-left:auto;margin-right:auto">The app has no cap. This page does — but unlike the original, it lets you go again.</p>'
    +   '<div class="stack anim-up d3">'
    +     '<button class="cta" data-again>Play again</button>'
    +     '<button class="cta ghost" data-quit>All games</button>'
    +   '</div>'
    + '</div>'
  );
  stage.querySelector("[data-again]").addEventListener("click", function(){ S.round = 0; nextRound(); });
}

/* ---------------- purity engine ---------------- */

function startPurity(){
  S.purity = { asked:[], lost:{}, deadChains:{} };
  AXES.forEach(function(a){ S.purity.lost[a.id] = 0; });
  playing(true);
  purityStep();
}

function purityStep(){
  var p = S.purity;
  var remaining = DECK.filter(function(c){
    return p.asked.indexOf(c.id) === -1 && !p.deadChains[c.axis + "/" + c.chain];
  });
  if(!remaining.length) return purityResult();

  var card = remaining[0];
  var reachable = DECK.filter(function(c){
    return p.asked.indexOf(c.id) !== -1 || !p.deadChains[c.axis + "/" + c.chain];
  }).length;
  var axis = AXES.filter(function(a){ return a.id === card.axis; })[0];
  wash(axis.wash);

  var body;
  if(card.type === "binary"){
    body = '<div class="pair anim-up d2">'
         + '<button class="y" data-v="1">Yes</button>'
         + '<button data-v="0">No</button></div>';
  } else {
    body = '<div class="pair choices anim-up d2">'
         + card.options.map(function(o,i){ return '<button data-i="'+i+'">'+esc(o)+'</button>'; }).join("")
         + '</div>';
  }

  paint(
      '<div class="solo">'
    +   '<p class="eyebrow anim-up">'+axis.glyph+' '+esc(axis.label)+'</p>'
    +   '<p class="'+askClass(card.text)+' anim-up d1">'+esc(venueText(card.text))+'</p>'
    +   body
    + '</div>'
    + hud(p.asked.length / reachable, "Purity test", "Q" + (p.asked.length + 1))
  );

  Array.prototype.forEach.call(stage.querySelectorAll(".pair button"), function(b){
    b.addEventListener("click", function(){
      p.asked.push(card.id);
      if(card.type === "binary"){
        if(b.getAttribute("data-v") === "1") p.lost[card.axis] += card.weight;
        else if(card.gate) p.deadChains[card.axis + "/" + card.chain] = true;
      } else {
        p.lost[card.axis] += card.points[Number(b.getAttribute("data-i"))];
      }
      purityStep();
    });
  });
}

function axisMax(id){
  return DECK.filter(function(c){ return c.axis === id; }).reduce(function(s,c){
    return s + (c.type === "binary" ? Math.abs(c.weight) : Math.max.apply(null, c.points));
  }, 0);
}

function purityResult(){
  var p = S.purity;
  var totalMax  = AXES.reduce(function(s,a){ return s + axisMax(a.id); }, 0);
  var totalLost = AXES.reduce(function(s,a){ return s + p.lost[a.id]; }, 0);
  // Floor, never round up: a 99.4 must not read as a clean 100 beside a
  // breakdown that shows losses. That contradiction is defect 5 in the audit.
  var score = Math.max(0, Math.min(100, Math.floor(100 - (totalLost/totalMax)*100)));

  var bands = [
    [90,"Nothing to declare","Either you are new here or you are lying"],
    [75,"Mostly behaving","A couple of stories, nothing load-bearing"],
    [60,"A normal amount of bad","This is where most people land"],
    [45,"Certified menace","You are why the group chat has screenshots"],
    [25,"Problematic","There is a version of this night nobody mentions"],
    [0, "Beyond saving","Whatever the limit was, you passed it a while ago"]
  ];
  var band = bands.filter(function(b){ return score >= b[0]; })[0];

  wash(score >= 60 ? "93 228 199" : "255 46 116");

  var rows = AXES.map(function(a,i){
    var max = axisMax(a.id);
    var lostPct = max ? Math.max(0, Math.round(p.lost[a.id]/max*100)) : 0;
    return '<div class="axis"><span class="lab">'+a.glyph+' '+esc(a.label)+'</span>'
      + '<span class="trk"><i style="width:'+lostPct+'%;animation-delay:'+(0.2 + i*0.08).toFixed(2)+'s"></i></span>'
      + '<span class="pct">'+lostPct+'%</span></div>';
  }).join("");

  paint(
      '<div class="solo halo">'
    +   '<p class="eyebrow anim-up">Purity score</p>'
    +   '<p class="score anim-pop d1">'+score+'</p>'
    +   '<p class="lede anim-up d2" style="text-align:center;margin:10px auto 0">out of 100 · '+p.asked.length+' questions asked</p>'
    +   '<p class="ask anim-up d2" style="font-size:clamp(21px,3.4vw,30px);margin-top:26px">'+esc(band[1])+'</p>'
    +   '<p class="lede anim-up d3" style="text-align:center;margin:8px auto 0">'+esc(band[2])+'</p>'
    +   '<div class="axes">'+rows+'</div>'
    +   '<div class="stack anim-up d3">'
    +     '<button class="cta" data-again>Take it again</button>'
    +     '<button class="cta ghost" data-quit>All games</button>'
    +   '</div>'
    + '</div>'
  );
  stage.querySelector("[data-again]").addEventListener("click", startPurity);
}

/* ---------------- chrome ---------------- */

var banner = document.getElementById("banner");
var KEY = "party-engine-banner-dismissed";
function hideBanner(){
  banner.hidden = true;
  try { localStorage.setItem(KEY, "1"); } catch(e){}
}
try { if(localStorage.getItem(KEY) !== "1") banner.hidden = false; }
catch(e){ banner.hidden = false; }
document.getElementById("bannerX").addEventListener("click", hideBanner);
document.getElementById("bannerCta").addEventListener("click", hideBanner);

var LOCALES = ["EN","FR","ES","DE","JA","HI"], li = 0;
document.getElementById("locale").addEventListener("click", function(){
  li = (li + 1) % LOCALES.length;
  this.textContent = LOCALES[li];
  this.setAttribute("aria-label", "Locale: " + LOCALES[li]);
});
document.getElementById("home").addEventListener("click", renderBrowse);
document.getElementById("agechip").addEventListener("click", renderGate);
document.getElementById("venuechip").addEventListener("click", renderVenue);

renderBrowse();
})();
