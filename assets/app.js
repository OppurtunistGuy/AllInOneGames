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
          dare:["Text the fifth person in your recents a single word.","Let the group pick your next profile photo.","Do your best impression of whoever is on your left.","Let the person on your right choose your next three songs.","Say something nice about everyone here, in one breath.","Show the group your most recent photo, no context."]},
    hot:{truth:["Who in this room would you say yes to?","What's the most adventurous place you've done it?","What have you wanted to ask for in bed and never have?","Who were you thinking about the last time you shouldn't have been?","Have you ever faked it, and did they notice?","What's the worst thing you've done to someone who liked you?","Who did you tell the group you were over, and weren't?","What's the longest you've kept someone a secret?","Who here would you least want reading your messages, and why?","What's your actual type, and how badly does it contradict your last choice?","What's the closest you've come to being caught?","Which of your exes would you still answer at 2am?","What did you do that you'd deny in front of the person it involved?","What's the pettiest reason you ever ended things?","Who in this room have you pictured more than once?","What's the most you've lied to get someone into bed?","What's the one thing you've never admitted to a partner?","Who's the last person you let get away with too much?"],
         dare:["Rank everyone here by who you'd pick, and say the top one out loud.","Read your last sent message in the voice you'd use in bed.","Describe your type while looking directly at the person closest to it.","Whisper your most recent search to the person on your left.","Let the group read your last three messages out loud.","Say the name you almost said last time, out loud.","Let the person on your right type one reply from your phone.","Give the person on your left a thirty-second shoulder rub, no talking.","Tell the person opposite the first thing you noticed about them.","Hold eye contact with someone here for thirty seconds without speaking.","Let the group decide which of your photos gets deleted.","Say out loud what you were hoping would happen tonight."]}
  },
  "never-have-i":{
    soft:["cried at an advert","stayed in a group chat I muted two years ago","pretended to know a song everyone else knew","gone to a party and left before saying hello","lied about having seen a film","googled someone before meeting them"],
    hot:["had a one night stand","slept with someone in this room","nearly been caught in the act","wanted a friend's partner","sent a photo that could ruin me","lied about being single","done it somewhere I could have been caught","been somebody's secret","gone back for one more night after saying never again","kept a profile live while seeing someone","said the wrong name","done something I'd deny to their face","hooked up with someone and never learned their name","regretted it before it was over"]
  },
  "most-likely":{
    soft:["lose their phone twice in one night","become weirdly good at a niche hobby","start a group chat nobody asked for","still be awake at 5am talking about nothing","cry at their own birthday","reply to a message three weeks late"],
    hot:["sleep with someone in this room tonight","get caught sexting at work","be back with their ex before the month is out","have an account nobody here knows about","say the wrong name at the worst moment","text first and regret it by morning","kiss someone here just to see what happens","be the reason two people here stop speaking","leave with someone they only just met","read this and know it's about them"]
  },
  "would-you":{
    soft:[["Lose every photo you've ever taken","Lose every message you've ever sent"],["Never hear a new song again","Never see a new film again"],["Always be forty minutes early","Always be ten minutes late"],["Know exactly when you'll die","Know exactly how"]],
    hot:[["Have every message you've sent read aloud","Have every photo on your phone shown"],["Know who in this room wants you","Have them know you want them"],["Sleep with someone here once and never speak again","Never, and stay close forever"],["Be caught by your parents","Be caught by your boss"],["Have your ex describe you in bed","Have your last partner rate you out of ten"],["Be forgiven for everything","Be remembered for everything"],["Only ever again with your first","Only ever again with a stranger"],["Have your search history read out","Have your voice notes played back"]]
  },
  "rate-them":{
    soft:["They're a 10 but they reply to every message with one word","They're a 10 but they arrive forty minutes late and bring nothing","They're a 10 but their playlist is three songs on loop","They're a 10 but they narrate every film while you watch it","They're a 10 but they've never once chosen the restaurant"],
    hot:["They're a 10 but they talk the whole way through","They're a 10 but they won't return the favour","They're a 10 but they still have their ex's photos up","They're a 10 but they screenshot every conversation","They're a 10 but they finish in ninety seconds","They're a 10 but they've slept with your closest friend","They're a 10 but they check your phone while you shower","They're a 10 but they keep the dating apps installed","They're a 10 but they've never once said what they want","They're a 10 but they call you by the wrong name and don't notice","They're a 10 but they tell their group chat everything","They're a 10 but they'd leave if someone better texted"]
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
var S = { game:null, mode:null, round:0, purity:null, age:null };

/* Age gate. A self-declared threshold, not verification — it is the curation
   signal and the liability shield app stores and ad networks expect. No date of
   birth is asked for, so no minor DOB is ever stored. */
var AGE_KEY = "party-engine-age";
function readAge(){ try { return localStorage.getItem(AGE_KEY); } catch(e){ return null; } }
function writeAge(v){ S.age = v; try { localStorage.setItem(AGE_KEY, v); } catch(e){} }
function isAdult(){ return S.age === "adult"; }
S.age = readAge();

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
  if(isAdult()) return set;
  if(Array.isArray(set)) return set.filter(teenOk);
  return { truth: set.truth.filter(teenOk), dare: set.dare.filter(teenOk) };
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
  syncAgeChip();
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

function syncAgeChip(){
  var c = document.getElementById("agechip");
  if(!S.age){ c.hidden = true; return; }
  c.hidden = false;
  c.textContent = isAdult() ? "18+" : "Under 18";
  c.setAttribute("aria-label", "Age setting: " + c.textContent + ". Tap to change.");
}

/* ---------------- browse ---------------- */

function renderBrowse(){
  if(!S.age) return renderGate();
  syncAgeChip();
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

function paint(html){
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
    +   '<p class="'+askClass(text)+' anim-up d1">'+esc(text)+'</p>'
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
    +   '<p class="'+askClass(text)+' anim-up d1">'+esc(text)+'</p>'
    +   '<div class="stack anim-up d2">'
    +     '<button class="cta" data-next>Next →</button>'
    +     '<button class="cta ghost" data-again>Other one</button>'
    +   '</div>'
    + '</div>' + roundHud()
  );
  stage.querySelector("[data-next]").addEventListener("click", nextRound);
  stage.querySelector("[data-again]").addEventListener("click", renderPick2);
}

/* would you rather: the choice itself fills both halves */
function renderAB(){
  var pair = draw("wyr|" + S.mode, promptSet("would-you", S.mode));
  paint(
      '<div class="split anim-fade">'
    +   '<button class="panel dark" data-i="0"><span class="big phrase">'+esc(pair[0])+'</span></button>'
    +   '<button class="panel hot" data-i="1"><span class="big phrase">'+esc(pair[1])+'</span></button>'
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
    +   '<p class="'+askClass(text)+' anim-up d1">'+esc(text)+'</p>'
    +   '<div class="rates anim-up d2">'+btns+'</div>'
    + '</div>' + roundHud()
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
    +   '<p class="'+askClass(card.text)+' anim-up d1">'+esc(card.text)+'</p>'
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

/* ---------------- deck table ---------------- */

document.getElementById("deckTable").innerHTML = AXES.map(function(a){
  var cards = DECK.filter(function(c){ return c.axis === a.id; });
  var chains = {};
  cards.forEach(function(c){ chains[c.chain] = 1; });
  return '<tr><td>'+a.glyph+' '+esc(a.label)+'</td>'
    + '<td class="n">'+Object.keys(chains).length+'</td>'
    + '<td class="n">'+cards.length+'</td>'
    + '<td class="n">'+axisMax(a.id)+'</td></tr>';
}).join("");

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

document.getElementById("theme").addEventListener("click", function(){
  var r = document.documentElement, now = r.getAttribute("data-theme");
  var dark = now ? now === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  r.setAttribute("data-theme", dark ? "light" : "dark");
});

document.getElementById("home").addEventListener("click", renderBrowse);
document.getElementById("agechip").addEventListener("click", renderGate);

renderBrowse();
})();
