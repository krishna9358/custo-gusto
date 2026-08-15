/* ---------- brand glyph substitutes (Best Curry lacks ~ / and bullet) ---------- */
var TILDE = '<span class="g-tilde" aria-hidden="true"><svg viewBox="0 0 62 34"><path d="M4 22C4 10 12 5 19 12s11 14 18 7 11-12 17-6" stroke="currentColor" stroke-width="9" stroke-linecap="round" fill="none"/></svg></span>';
var SLASH = '<span class="g-slash" aria-hidden="true"></span>';
var DOT   = '<span class="g-dot" aria-hidden="true"></span>';
function bc(s){
  // single pass: replacement markup is never re-scanned (a sequential replace
  // corrupted the tilde SVG, whose own markup contains forward slashes)
  return s.replace(/[~\/●]/g, function(m){
    return m === '~' ? TILDE : m === '/' ? SLASH : DOT;
  });
}

/* ---------- shared blocks ---------- */
var STATS = [
  ['40,000+', 'Customers served'],
  ['1,20,000+', 'Pieces embroidered'],
  ['3&times;', 'Pieces per customer'],
  ['REVIEWS', '']
];

function tiles(night){
  var row = [['40,000+','Customers served'],['1,20,000+','Pieces embroidered'],
             ['3','Things the average customer takes home, not one']];
  return '<div class="sr">' + row.map(function(t){
      return '<div><div class="v">' + t[0] + '</div><div class="l">' + t[1] + '</div></div>';
    }).join('') + '</div>' +
    '<div class="revband"><span class="st">&#9733;&#9733;&#9733;&#9733;&#9733;</span>' +
    '<span class="bg">A PERFECT 5.0</span>' +
    '<span class="tx">500+ Google reviews, from stores right across India.</span></div>';
}

var IMG = {"contact_e1":"assets/img/contact_e1.jpg","story_c2":"assets/img/story_c2.jpg","story_c3":"assets/img/story_c3.jpg","story_e2":"assets/img/story_e2.jpg","story_e5":"assets/img/story_e5.jpg","svc_a10":"assets/img/svc_a10.jpg","svc_c1":"assets/img/svc_c1.jpg","svc_e1":"assets/img/svc_e1.jpg","touch_caps":"assets/img/touch_caps.jpg","touch_foil":"assets/img/touch_foil.jpg","touch_leather":"assets/img/touch_leather.jpg","touch_shoes":"assets/img/touch_shoes.jpg","w01":"assets/img/w01.jpg","w02":"assets/img/w02.jpg","w03":"assets/img/w03.jpg","w04":"assets/img/w04.jpg","w05":"assets/img/w05.jpg","w06":"assets/img/w06.jpg","w07":"assets/img/w07.jpg","w08":"assets/img/w08.jpg","w09":"assets/img/w09.jpg","w10":"assets/img/w10.jpg","w11":"assets/img/w11.jpg","w12":"assets/img/w12.jpg","w13":"assets/img/w13.jpg","w14":"assets/img/w14.jpg","w15":"assets/img/w15.jpg","w16":"assets/img/w16.jpg","w17":"assets/img/w17.jpg","w18":"assets/img/w18.jpg","why_a1":"assets/img/why_a1.jpg"};
function ph(key, alt, shape){
  if(!IMG[key]) return slot(key, alt, shape === 'ph-23' ? 'slot-23' : shape === 'ph-sq' ? 'slot-sq' : 'slot-16');
  return '<figure class="ph ' + shape + '" style="margin:0;">' +
    '<img src="' + IMG[key] + '" alt="' + alt + '" loading="lazy"></figure>';
}
function one8(shape){
  return '<figure class="ph ' + shape + '" style="margin:0;">' +
    '<img src="assets/img/one8-midstitch.jpg" alt="A sneaker held in front of an embroidery machine at the one8 Global Premiere"></figure>';
}

function slot(code, label, shape){
  return '<div class="slot ' + (shape || 'slot-16') + '"><div class="slot-in">' +
    '<div class="slot-c">' + code + '</div><div class="slot-l">' + label + '</div></div></div>';
}

function ticker(){
  var bits = ['40,000+ CUSTOMERS', '1,20,000+ PIECES', '300+ IN ONE NIGHT', bc('~5 MIN LIVE'),
              '500+ FIVE STAR REVIEWS', '13 LIVE DESKS', 'NEVER REPEATED'];
  var seq = '<div class="tick-s">' + bits.map(function(i){ return '<span>' + i + '</span>'; }).join('') + '</div>';
  return '<div class="tick" aria-hidden="true"><div class="tick-t">' + seq + seq + '</div></div>';
}

// The three steps, in words anyone understands.
function howItWorks(){
  var steps = [
    ['Pick the thing', 'Your shoes, your cap, your jacket. Something you already own, or something off the shelf.'],
    ['Tell us what to put on it', 'A name. A date. A crest. A drawing your kid made. Our designer sits right there and draws it up with you.'],
    ['Watch it being made', 'The machine runs while you stand there. Minutes later you walk away with it.']
  ];
  return '<div class="g g3">' + steps.map(function(s,i){
    return '<div class="tech">' +
      '<div class="tn" style="color:var(--indigo);font-size:34px;line-height:1;">' + (i+1) + '</div>' +
      '<div class="tn">' + s[0] + '</div>' +
      '<div class="tb">' + s[1] + '</div>' +
    '</div>';
  }).join('') + '</div>';
}

function closing(dare, sub){
  return '<section class="band band-mar"><div class="wrap close-g">' +
    '<div>' +
      '<h2 class="big">' + dare + '</h2>' +
      '<p style="margin-top:14px;max-width:46ch;font-size:17.5px;">' + sub + '</p>' +
      '<div class="btns" style="margin-top:26px;">' +
        '<a class="btn btn-live" href="https://wa.me/919654382799" target="_blank" rel="noopener">' + DOT + ' WhatsApp us</a>' +
        '<a class="btn btn-p" href="#/contact">Get a price in 24 hours</a>' +
        '<a class="btn btn-g" href="#/work">Just look at the work</a>' +
      '</div>' +
      '<p style="margin-top:14px;font-size:14px;opacity:.8;">No meeting needed to get a number. We reply the same day.</p>' +
    '</div>' +
    '<div style="display:grid;gap:12px;">' +
      '<div class="close-c"><div class="k">Watch the one8 film</div>' +
        '<div class="v"><a href="https://youtube.com/shorts/PFZjzmlq5LI" target="_blank" rel="noopener">300 pieces, one evening &rarr;</a></div></div>' +
      '<div class="close-c"><div class="k">Talk to Laksh</div>' +
        '<div class="v">+91 96543 82799<br>laksh@custogusto.in</div></div>' +
    '</div>' +
  '</div></section>';
}

// Six techniques. Vibe leads; the technical line sits behind a toggle.
// [name, hook, body, chips[4], minutes, isLive, technical, isHero]
var TECHS = [
  ['Embroidery','The one that feels expensive.',
   'Thread raised off the surface, so your fingers find it before your eyes do. This is the jacket somebody still owns in twenty years, and still tells the story about.',
   ['Shoes','Caps','Jackets','Bags'],'5 minutes',true,
   'A needle and thread worked into the material itself by machine. Nothing is printed and nothing sits on top &mdash; the design is built out of the fabric.',true],
  ['DTF print','For designs too wild for thread.',
   'Photographs, gradients, six colours crashing into each other. Anything you can put on a screen goes onto the shirt. This is the one the whole crowd ends up wearing.',
   ['T&#8209;shirts','Jerseys','Hoodies','Event tees'],'3 minutes',false,
   'Direct-to-film. Artwork prints onto a carrier film, adhesive is cured onto the wet ink, then the whole thing is fused into the fabric under heat. The printing happens beforehand; the pressing happens in front of you.',false],
  ['Digital hot foil','Gold you can see across a room.',
   'The finish that makes a plain box look like it came from somewhere far more expensive. Put it on the invitation, the luggage tag, the inside of a wallet nobody else will open.',
   ['Leather','Luggage tags','Notebooks','Gift boxes'],'2 minutes',true,
   'Metallic foil bonded to the surface with heat. Because no metal plate has to be cut first, even hairline detail comes out clean.',false],
  ['Laser engraving','The showpiece.',
   'A perfume bottle with her name down the side. A pen. A whisky glass. Nobody expects these things to be personal, which is exactly why they stop the room. It cannot peel or fade &mdash; the mark <em>is</em> the object.',
   ['Perfume bottles','Pens','Glassware','Leather'],'5 minutes',true,
   'A laser burns the design into the surface. Nothing is added and nothing sits on top, so there is no layer that can lift, wash off or wear away.',false],
  ['UV stickers','Colour on the hard stuff.',
   'The water bottle at the gym. The helmet. The phone case face-up on the table all through the meeting. Glass, metal, curved, painted &mdash; things nothing else will stick to properly.',
   ['Bottles','Phone cases','Helmets','Flasks'],'1 minute',false,
   'The same idea as DTF, built for hard surfaces. The design is UV-printed onto a film and cured on the spot, a second film is laminated over it, then it is pressed onto the object and the film peeled away. <strong>No heat at all</strong> &mdash; which is why it will sit on glass, metal and curves a press could never reach.',false],
  ['Iron-on patches','Built for a queue.',
   'When there is a line out the door and every single person still walks away with their own. The fast one, for the days when speed is the whole point.',
   ['Jackets','Bags','Caps','Uniforms'],'1 minute',false,
   'Embroidered separately, then heat-set into place. The patch is cut for one person; only the pressing happens at the desk.',false]
];

function techGrid(){
  return '<div class="tg">' + TECHS.map(function(t){
    var pill = t[5] ? '<span class="tk-live on">' + DOT + ' Live</span>'
                    : '<span class="tk-live off">Applied live</span>';
    return '<div class="tk rv' + (t[7] ? ' hero' : '') + '">' +
      '<div class="tk-top"><div class="tk-name">' + bc(t[0]) + '</div>' + pill + '</div>' +
      '<div class="tk-hook">' + t[1] + '</div>' +
      '<p class="tk-desc">' + t[2] + '</p>' +
      '<div class="tk-goes">Goes on</div>' +
      '<div class="chips2">' + t[3].map(function(c){ return '<span class="chip">' + c + '</span>'; }).join('') + '</div>' +
      '<div class="tk-foot"><span class="tk-time">' + t[4] + '</span></div>' +
      '<details class="sci"><summary>How it actually works</summary><p>' + t[6] + '</p></details>' +
    '</div>';
  }).join('') + '</div>';
}

// [swatch, kicker, name, THEIR problem, what we do about it, proof, link]
var ENGINES = [
  ['e-ind', 'A desk that stays', 'On your floor',
   'Your store is competing with a phone that has everything on it and never closes.',
   'We put a desk on your floor with a machine, an operator and a designer on it, and we keep it running every day. It gives a person a reason to come in that nothing online can match.',
   '13 desks running today', '#/services'],
  ['e-mar', 'A desk that travels', 'At your launch',
   'Most launches get seen, photographed once, and forgotten by the following week.',
   'We bring the whole desk to your event for a few days and make something for each guest while they watch. They leave holding it, and they film it themselves.',
   '300+ made in one evening', '#/services'],
  ['e-bri', 'No desk at all', 'Send it to us',
   'Sometimes you just need two hundred good things made properly, by a certain date.',
   'Send us the product, or we will find it. Tell us what goes on it. We make it here and send it back finished.',
   'Six ways to mark a thing', '#/services']
];

function engines(){
  return '<div class="g g3">' + ENGINES.map(function(e){
    return '<a class="eng" href="' + e[6] + '">' +
      '<div class="eng-t ' + e[0] + '"><div class="n">' + e[1] + '</div><div class="h">' + e[2] + '</div></div>' +
      '<div class="eng-b">' +
        '<p style="font-weight:500;color:var(--ink);">' + e[3] + '</p>' +
        '<p style="color:var(--soft);">' + e[4] + '</p>' +
        '<div class="eng-f"><b style="font-size:16px;">' + e[5] + '</b></div>' +
        '<div class="eng-go">See how this works &rarr;</div>' +
      '</div></a>';
  }).join('') + '</div>';
}

var COVERAGE = ['All types of shoes', 'Caps', 'Tees &amp; denim', 'Jackets', 'Bags &amp; totes', 'Socks',
                'Towels', 'Belts &amp; straps', 'Watch straps', 'Leather goods', 'Tags &amp; packaging', 'Stationery'];


// Why customisation matters. Depreciation leads. Approved by Laksh 29 Jul 2026.
function whyItMatters(){
  var four = [
    ['This is mine.', 'Nobody else has one. Nobody else can get one.'],
    ['Nothing like it exists.', 'Made once, in front of one person, and never again.'],
    ['There is a reason it looks like this.', 'A name, a date, a thing that happened. The object carries it.'],
    ['I want to show someone.', 'And they do. That is the part you cannot buy media for.']
  ];
  return '<section class="sec"><div class="wrap">' +
    '<div class="split" style="align-items:start;">' +
      '<div>' +
        '<p class="eyebrow">Why any of this matters</p>' +
        '<h2 class="big">EVERYTHING YOU BUY LOSES VALUE. THIS DOESN&rsquo;T.</h2>' +
        '<p class="why-lead" style="margin-top:20px;">A pair of shoes is worth less the moment it leaves the shop. In a year they are worn. In three they are replaced.</p>' +
        '<p class="why-lead">Put a name in them &mdash; or a number, a date, a crest, the drawing a daughter made &mdash; and the arithmetic runs backwards. They stop being stock and start being <em>hers</em>. Ten years on they are still in the cupboard. Still being explained to whoever asks about them.</p>' +
        '<div class="pull">THAT IS WHAT A DESK ON YOUR FLOOR ACTUALLY SELLS.<small>Your story.</small></div>' +
      '</div>' +
      '<div>' + ph('why_a1','A sneaker with a name embroidered on the side','ph-16') + '</div>' +
    '</div>' +
    '<div class="four">' + four.map(function(q){
      return '<div class="q"><div class="qt">' + q[0] + '</div><div class="qb">' + q[1] + '</div></div>';
    }).join('') + '</div>' +
  '</div></section>';
}

/* ================= PAGES ================= */
var PAGES = {};

PAGES['/'] = function(){ return '' +
'<section class="hero"><div class="wrap">' +
  '<div class="hero-stk"><span class="stk">' + bc('1/1') + '</span></div>' +
  '<div class="hero-g">' +
    '<div>' +
      '<p class="eyebrow"><span class="liv">' + DOT + ' LIVE</span> &mdash; at 13 desks across India</p>' +
      '<h1 class="big">NOTHING LIKE IT EXISTS.</h1>' +
      '<p class="hero-hi hi">आपका. सिर्फ़ आपका.</p>' +
      '<p class="lead">Your name. Your number. A date that mattered. A drawing nobody else has.<br>' +
        'Stitched, printed or engraved into something you already own, while you stand there and watch.<br>' +
        '<strong>One of one. Never made again.</strong></p>' +
      '<div class="btns">' +
        '<a class="btn btn-p" href="#/work">See the work</a>' +
        '<a class="btn btn-live" href="https://youtube.com/shorts/PFZjzmlq5LI" target="_blank" rel="noopener">' + DOT + ' Watch it live</a>' +
      '</div>' +
    '</div>' +
    '<div class="hero-media">' +
      '<img src="assets/img/one8-midstitch.jpg" alt="A red one8 sneaker held in front of a ZSK embroidery machine mid-stitch at the one8 Global Premiere.">' +
      '<div class="hero-badge"><span class="stk stk-b">' + bc('MADE LIVE ●') + '</span></div>' +
    '</div>' +
  '</div>' +
'</div></section>' +

ticker() +

whyItMatters() +

'<section class="sec-sm"><div class="wrap">' +
  '<p class="eyebrow">What actually happens</p>' +
  '<h2 class="big">THREE STEPS. ABOUT FIVE MINUTES.</h2>' +
  '<div style="margin-top:28px;">' + howItWorks() + '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">Three ways to work with us</p>' +
  '<h2 class="big">WHERE DO YOU WANT THE MACHINE?</h2>' +
  '<p class="sub" style="margin-top:14px;">On your shop floor every day, at your launch for a week, or nowhere near you at all &mdash; just send us the boxes.</p>' +
  '<div style="margin-top:34px;">' + engines() + '</div>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<div class="split">' +
    '<div>' +
      '<p class="eyebrow">What can we touch?</p>' +
      '<h2 class="big">ALMOST EVERYTHING.</h2>' +
      '<p class="lead" style="margin-top:14px;">We customise over 90% of what is already on your shelf. Shoes lead &mdash; they always lead.</p>' +
      '<div class="chips">' + COVERAGE.map(function(c,i){ return '<span class="chip' + (i===0?' on':'') + '">' + c + '</span>'; }).join('') + '</div>' +
    '</div>' +
    '<div class="g g2">' + ph('touch_shoes','An embroidered sneaker','ph-sq') + ph('touch_caps','A cap with a gold emblem','ph-sq') +
      ph('touch_leather','An engraved leather wallet','ph-sq') + ph('touch_foil','Hot foil, close','ph-sq') + '</div>' +
  '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">Six techniques &middot; in-house design always included</p>' +
  '<h2 class="big">SIX WAYS TO MARK A THING.</h2>' +
  '<div style="margin-top:30px;">' + techGrid() + '</div>' +
  '<p class="sub" style="margin-top:20px;font-size:15px;">In-house design is included in every engagement and is never a separate line. It is what makes each piece one-of-one instead of a template.</p>' +
'</div></section>' +

'<section class="band band-night"><div class="wrap">' +
  '<p class="eyebrow">Three years, thirteen desks, counting</p>' +
  '<h2 class="big">THE NUMBERS BEHIND THE CRAFT</h2>' +
  '<div style="margin-top:32px;">' + tiles(true) + '</div>' +
  '<p style="margin-top:30px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.7;">Trusted by</p>' +
  '<div class="logos">' + ['Decathlon','Puma','Sports Yard','Benetton','Mothercare','one8','Comic Con']
    .map(function(l){ return '<span class="logo-pill">' + l + '</span>'; }).join('') + '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<div class="split">' +
    '<div>' + one8('ph-16') + '</div>' +
    '<div>' +
      '<p class="eyebrow">The biggest night we have had</p>' +
      '<h2 class="big">THE NIGHT THE QUEUE DID NOT MOVE.</h2>' +
      '<p class="lead" style="margin-top:14px;">Virat Kohli&rsquo;s one8 Global Premiere at Yashobhoomi, with District by Zomato. Four machines, eight operators, three designers.</p>' +
      '<div class="g g3" style="margin-top:22px;">' +
        '<div class="tile"><div class="v">300+</div><div class="l">Pieces in one evening</div></div>' +
        '<div class="tile"><div class="v">4</div><div class="l">Machines running</div></div>' +
        '<div class="tile"><div class="v">5 hrs</div><div class="l">Start to finish</div></div>' +
      '</div>' +
      '<div class="btns" style="margin-top:24px;">' +
        '<a class="btn btn-live" href="https://youtube.com/shorts/PFZjzmlq5LI" target="_blank" rel="noopener">' + DOT + ' Watch what the world saw</a>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div></section>' +

closing('YOURS. ONLY YOURS.', 'Put a machine on your floor, in your launch, or on the box you send us. We bring everything else.');
};

PAGES['/services'] = function(){ return '' +
'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">What we do</p>' +
  '<h1 class="big" style="font-size:clamp(34px,5.6vw,64px);">WE BRING THE MACHINE TO THE MOMENT.</h1>' +
  '<p class="lead" style="margin-top:18px;">Three ways to put a machine in front of your customer. Machines, operators, designers, materials and operations are ours. You provide space and product.</p>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' + engines() + '</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<div class="split">' +
    '<div>' +
      '<span class="stk stk-i">A DESK THAT STAYS</span>' +
      '<h2 class="big" style="margin-top:18px;">On your floor.</h2>' +
      '<p class="lead" style="margin-top:14px;">A permanent desk on your retail floor, six months and up. The slow one to agree, and the one that keeps paying you back.</p>' +
      '<p class="sub" style="margin-top:14px;">What arrives: an expert operator, a live designer, the machines, all raw materials, the full design back-end, and 365-day maintenance. You will not lose a trading day.</p>' +
      '<p class="sub">A structured operator-training system means a desk in Delhi runs exactly like one in Bangalore. That is the honest answer to &ldquo;can you do all our stores?&rdquo; &mdash; yes, identically, nationwide.</p>' +
      '<div class="btns" style="margin-top:22px;"><a class="btn btn-g" href="#/commercials">See the models</a></div>' +
    '</div>' +
    '<div>' + ph('svc_e1','A heat press closing onto a garment','ph-16') + '</div>' +
  '</div>' +
'</div></section>' +

'<section class="band band-mar"><div class="wrap">' +
  '<div class="split">' +
    '<div>' + ph('svc_c1','An embroidery machine stitching a bag','ph-16') + '</div>' +
    '<div>' +
      '<span class="stk stk-b">A DESK THAT TRAVELS</span>' +
      '<h2 class="big" style="margin-top:18px;color:var(--indigo);">At your launch.</h2>' +
      '<p class="lead" style="margin-top:14px;color:var(--onmar);">Launches, drops, festivals and showroom openings. Compact windows of three days to a fortnight, moving city to city across your calendar.</p>' +
      '<p style="margin-top:14px;color:var(--onmar);opacity:.9;">We can be set up in about two days. Crews sit ready in Bangalore and Delhi, so we can run two cities at once, and we add no work at all to your team &mdash; which is what the producers of the one8 premiere will tell you.</p>' +
      '<div class="btns" style="margin-top:22px;"><a class="btn btn-p" href="#/clients">Read the one8 story</a></div>' +
    '</div>' +
  '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<div class="split">' +
    '<div>' +
      '<span class="stk">NO DESK AT ALL</span>' +
      '<h2 class="big" style="margin-top:18px;">Send it to us.</h2>' +
      '<p class="lead" style="margin-top:14px;">The same hands and the same machines, pointed at your order. Corporate gifting, wedding memorabilia, team kit, small-batch runs.</p>' +
      '<p class="sub" style="margin-top:14px;">Send us your product, or we source it. Artwork in, finished pieces back. No desk, no floor space, no event.</p>' +
      '<p class="sub">This is the one thing we do that is not a performance &mdash; and we would rather say so than pretend. What you get is access to the craft, not the moment.</p>' +
      '<div class="btns" style="margin-top:22px;"><a class="btn btn-g" href="#/contact">Send us a brief</a></div>' +
    '</div>' +
    '<div>' + ph('svc_a10','Finished pieces in wood, metal, leather and acrylic','ph-16') + '</div>' +
  '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">The techniques</p>' +
  '<h2 class="big">SIX WAYS TO MARK A THING.</h2>' +
  '<div style="margin-top:30px;">' + techGrid() + '</div>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<p class="eyebrow">Product coverage</p>' +
  '<h2 class="big">90% OF WHAT IS ON YOUR SHELF.</h2>' +
  '<div class="chips" style="margin-top:20px;">' + COVERAGE.map(function(c,i){ return '<span class="chip' + (i===0?' on':'') + '">' + c + '</span>'; }).join('') + '</div>' +
  '<p class="sub" style="margin-top:20px;">Everything at a live desk is made for one person, in front of that person. No bulk printing, no generic giveaways, and no generic patches &mdash; if a patch is not personalised, it is not ours.</p>' +
'</div></section>' +

closing('WHERE DO YOU WANT THE MACHINE?', 'Tell us the floor, the launch, or the order. We will tell you what walks out of it.');
};

PAGES['/work'] = function(){
  var items = [
    ['w01','Name embroidered on a sneaker','emb','shoes','ph-sq'],
    ['w02','Embroidered motif on a shirt','emb','apparel','ph-23'],
    ['w03','Engraved pen','laser','leather','ph-16'],
    ['w04','Embroidered cap, worn','emb','caps','ph-23'],
    ['w05','Foiled pieces, together','foil','leather','ph-16'],
    ['w06','Embroidery, close enough to count the threads','emb','apparel','ph-sq'],
    ['w07','Name and number on a shoe','emb','shoes','ph-23'],
    ['w08','UV sticker on a bottle','uv','hard','ph-23'],
    ['w09','Personalised patches','patch','apparel','ph-16'],
    ['w10','Embroidered detail on denim','emb','apparel','ph-23'],
    ['w11','Bags, finished','emb','bags','ph-16'],
    ['w12','A name engraved into steel','laser','hard','ph-sq'],
    ['w13','Printed transfer on a tee','dtf','apparel','ph-23'],
    ['w14','Caps, a set','emb','caps','ph-16'],
    ['w15','UV on a curved surface','uv','hard','ph-sq'],
    ['w16','Printed tote','dtf','bags','ph-23'],
    ['w17','A pair, embroidered','emb','shoes','ph-16'],
    ['w18','Gold emblem, thread edge','patch','apparel','ph-sq']
  ];
  var cards = items.map(function(i){
    return '<div data-t="' + i[2] + '" data-p="' + i[3] + '">' + ph(i[0], i[1], i[4]) + '<div class="ph-cap">' + i[1] + '</div></div>';
  }).join('');
  return '' +
'<section class="sec-sm"><div class="wrap">' +
  '<p class="eyebrow">The work</p>' +
  '<h1 class="big" style="font-size:clamp(34px,5.6vw,64px);">EVERY ONE OF THESE EXISTS ONCE.</h1>' +
  '<p class="lead" style="margin-top:16px;">Made live, at a desk, for one person. Filter by technique or by product.</p>' +
  '<div class="filters" id="f-tech">' +
    '<button class="fbtn on" data-f="tech" data-v="all">All techniques</button>' +
    '<button class="fbtn" data-f="tech" data-v="emb">Embroidery</button>' +
    '<button class="fbtn" data-f="tech" data-v="dtf">DTF</button>' +
    '<button class="fbtn" data-f="tech" data-v="foil">Hot foil</button>' +
    '<button class="fbtn" data-f="tech" data-v="laser">Laser</button>' +
    '<button class="fbtn" data-f="tech" data-v="uv">UV</button><button class="fbtn" data-f="tech" data-v="patch">Patches</button>' +
  '</div>' +
  '<div class="filters" id="f-prod">' +
    '<button class="fbtn on" data-f="prod" data-v="all">All products</button>' +
    '<button class="fbtn" data-f="prod" data-v="shoes">Shoes</button>' +
    '<button class="fbtn" data-f="prod" data-v="caps">Caps</button>' +
    '<button class="fbtn" data-f="prod" data-v="apparel">Apparel</button>' +
    '<button class="fbtn" data-f="prod" data-v="bags">Bags</button>' +
    '<button class="fbtn" data-f="prod" data-v="leather">Leather</button>' +
    '<button class="fbtn" data-f="prod" data-v="hard">Hard goods</button>' +
  '</div>' +
  '<div class="masonry" id="grid">' + cards + '</div>' +
  '<p class="sub" style="margin-top:26px;font-size:14.5px;">Each block carries its shot code from the production list. Photography is being shot now; the layout is final.</p>' +
'</div></section>' +

'<section class="band band-blush"><div class="wrap" style="text-align:center;">' +
  '<h2 class="big">SEEN SOMETHING YOU WANT ON YOUR FLOOR?</h2>' +
  '<p style="margin-top:14px;max-width:52ch;margin-left:auto;margin-right:auto;">Every piece here was made at a desk that can be on your retail floor, at your launch, or working on the product you send us.</p>' +
  '<div class="btns" style="margin-top:26px;justify-content:center;">' +
    '<a class="btn btn-p" href="#/services">The three engines</a>' +
    '<a class="btn btn-g" href="#/contact">Send us a brief</a>' +
  '</div>' +
'</div></section>' +

closing('MADE ONCE. NEVER AGAIN.', 'Every piece on this page belongs to one person and exists nowhere else.');
};

PAGES['/clients'] = function(){ return '' +
'<section class="band band-night" style="padding-top:calc(var(--pad)*.8);"><div class="wrap">' +
  '<p class="eyebrow">Clients</p>' +
  '<h1 class="big" style="color:var(--marigold);font-size:clamp(34px,5.6vw,64px);">SIX BRANDS. THIRTEEN DESKS. THREE YEARS.</h1>' +
  '<p class="lead" style="margin-top:16px;color:var(--on-night);opacity:.9;">Live customisation running inside real stores, at real footfall, since June 2023.</p>' +
  '<div style="margin-top:36px;">' + tiles(true) + '</div>' +
  '<p style="margin-top:30px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.7;">Trusted by</p>' +
  '<div class="logos">' + ['Decathlon','Puma','Sports Yard','Benetton','Mothercare','one8','Comic Con','Winter Wonderland']
    .map(function(l){ return '<span class="logo-pill">' + l + '</span>'; }).join('') + '</div>' +
  '<p style="margin-top:24px;font-size:14.5px;opacity:.75;max-width:60ch;">Four more footwear and lifestyle brands are in conversation.</p>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<div class="split">' +
    '<div>' +
      '<p class="eyebrow">The biggest night we have had</p>' +
      '<h2 class="big">one8 Global Premiere</h2>' +
      '<p class="lead" style="margin-top:14px;">Virat Kohli&rsquo;s brand launch at Yashobhoomi, produced with District by Zomato. The product launch, at the highest level India runs one.</p>' +
      '<p class="sub" style="margin-top:12px;">Four machines, eight operators, three designers. 300+ one-of-one pieces in a single evening, roughly five hours. The queue never emptied &mdash; that was the point.</p>' +
      '<div class="g g3" style="margin-top:20px;">' +
        '<div class="tile"><div class="v">300+</div><div class="l">Pieces, one evening</div></div>' +
        '<div class="tile"><div class="v">' + TILDE + '5 hrs</div><div class="l">Start to finish</div></div>' +
        '<div class="tile"><div class="v">15</div><div class="l">Pieces per machine, per hour</div></div>' +
      '</div>' +
      '<div class="btns" style="margin-top:22px;"><a class="btn btn-live" href="https://youtube.com/shorts/PFZjzmlq5LI" target="_blank" rel="noopener">' + DOT + ' Watch the film</a></div>' +
    '</div>' +
    '<div>' + one8('ph-23') + '</div>' +
  '</div>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<div class="g g2">' +
    '<div class="case"><div class="ct">Decathlon</div><div class="cm">Embedded desks &middot; pan-India</div>' +
      '<p>The proof that a desk works on an ordinary floor, on an ordinary day. Live embroidery desks running inside stores across the country, with customers returning to customise again.</p>' +
      '<p style="margin-top:10px;"><strong>The behaviour that matters:</strong> the average customer at our desks does not take home one piece. They take home three.</p></div>' +
    '<div class="case"><div class="ct">Mothercare</div><div class="cm">Embedded desk &middot; Bandra</div>' +
      '<p>Names on babywear, blankets and towels. The memory marker &mdash; a gift that gets kept rather than used, and the reason the desk earns its floor space in a category where nothing else is personal.</p></div>' +
    '<div class="case"><div class="ct">Puma</div><div class="cm">Retail desks &middot; five stores</div>' +
      '<p>One of the first floors that let this run at all. Five stores, real conditions, real customers. The model you are looking at today only exists because someone was willing to give it a floor to be tested on.</p></div>' +
    '<div class="case"><div class="ct">Sports Yard &amp; Benetton</div><div class="cm">Retail &middot; ongoing</div>' +
      '<p>Live personalisation as a permanent part of the in-store experience &mdash; the layer an online store cannot ship, sitting on the floor where the decision is already being made.</p></div>' +
  '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap rwrap">' +
  '<div class="rm-stk"><span class="stk hi" style="font-size:13px;">आपका. सिर्फ़ आपका.</span></div>' +
  '<p class="eyebrow">Beyond retail</p>' +
  '<h2 class="big">THE SAME DESK, DIFFERENT ROOMS.</h2>' +
  '<p class="sub" style="margin-top:12px;max-width:52ch;">A festival floor, a hotel lobby, a wedding. Same machines, same people, entirely different night.</p>' +
  '<div class="tks">' + [
    ['Comic Con','Fan identity at festival scale. Demand outran capacity on both days.','Festival'],
    ['Winter Wonderland','With Edamame and Mothercare. Family retail, holiday footfall.','Seasonal retail'],
    ['Weddings','Keepsakes, napkins and apparel that guests actually keep.','Private'],
    ['Hotels &amp; auto','Robes and towels; personalised accessories at launches.','Corporate']
  ].map(function(r){
    return '<div class="tk2"><div class="tk2-t">' + r[0] + '</div>' +
      '<div class="tk2-d">' + r[1] + '</div><span class="tk2-f">' + r[2] + '</span></div>';
  }).join('') + '</div>' +
  '<div class="rm-cta" style="margin-top:30px;">' +
    '<a class="btn btn-p" href="#/contact">Tell us about your event</a>' +
    '<a class="btn btn-g" href="#/work">See the work</a>' +
  '</div>' +
'</div></section>' +

closing('DOES IT WORK ON A FLOOR LIKE YOURS?', 'Give it fifteen minutes and you will see it mapped to your own stores, your own launch calendar, or the batch you need by Friday.');
};

PAGES['/story'] = function(){ return '' +
'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">Our story</p>' +
  '<h1 class="big" style="font-size:clamp(32px,5.2vw,60px);max-width:18ch;">A FATHER, A DAUGHTER, AND A MACHINE NOBODY WAS USING.</h1>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap split">' +
  '<div class="prose">' +
    '<p>Custo Gusto started during COVID, when retail had stopped and an embroidery business with thirty years behind it had machines standing still. A father and daughter took one of them onto a shop floor and asked a simple question: what if the customer watched it happen?</p>' +
    '<p>Five years later there are thirteen desks running across the country and a team of twenty-five. The question has not changed.</p>' +
    '<p><strong>Thirty years of craft behind a five-year-old brand.</strong> Not a thirty-year-old company &mdash; that distinction matters. The company is young. The hands are not.</p>' +
  '</div>' +
  '<div>' + ph('story_e5','A patch being heat-set onto a jacket','ph-16') + '</div>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<div class="pull">This was never really about embroidery. It is about the moment a product stops being a product and starts belonging to one person.</div>' +
'</div></section>' +

'<section class="band band-night"><div class="wrap split">' +
  '<div class="prose">' +
    '<h2 class="big" style="color:var(--marigold);font-size:clamp(25px,3.4vw,38px);">German machines, Indian hands</h2>' +
    '<p style="margin-top:14px;color:var(--on-night);opacity:.92;">These are German ZSK machines, and that matters for exactly one reason: they are accurate enough to stitch a name into a finished shoe <em>without ruining the shoe</em> &mdash; in four minutes, while its owner stands and watches. It is a genuinely hard thing to do. It is also why a desk belongs on a good floor when a folding table does not.</p>' +
    '<p style="color:var(--on-night);opacity:.92;">A machine in a corner is not the product. The product is craft, a trained operator, a live designer, materials, maintenance, and a performance that stops the floor.</p>' +
  '</div>' +
  '<div>' + ph('story_c2','A transfer being applied to a hard surface','ph-16') + '</div>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<div class="split">' +
    '<div class="prose">' +
      '<h2 class="big" style="font-size:clamp(25px,3.4vw,38px);">Where we are going</h2>' +
      '<p style="margin-top:14px;">Wherever your stores are, we can reach them. Crews sit ready in Bangalore and Delhi and can be set up in about two days, and where our office happens to be has never decided where a desk can go.</p>' +
      '<p>Every operator is trained on the same system, so a desk in your Delhi store behaves exactly like the one in Bangalore. If you have ever rolled anything out across this country, you already know that is the hard part.</p>' +
    '</div>' +
    '<div>' + ph('story_e2','Monogrammed tees, finished','ph-16') + '</div>' +
  '</div>' +
'</div></section>' +

closing('COME AND WATCH ONE RUN.', 'The fastest way to understand this is to stand next to the machine while it works.');
};

PAGES['/commercials'] = function(){ return '' +
'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">Commercials</p>' +
  '<h1 class="big" style="font-size:clamp(34px,5.6vw,64px);">FOUR WAYS TO WORK WITH US.</h1>' +
  '<p class="lead" style="margin-top:16px;">Pick the shape that fits your floor. We bring everything else.</p>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<div class="g g2">' +
    '<div class="case"><div class="ct">Rental</div><div class="cm">End-to-end &middot; fixed monthly</div>' +
      '<p>The hassle-free one. Machines, expert operator, raw materials and maintenance for a fixed monthly price. Nothing to buy, nothing to learn.</p>' +
      '<p style="margin-top:10px;font-size:14px;color:var(--soft);"><strong>Best for</strong> a permanent desk on your shop floor.</p></div>' +
    '<div class="case"><div class="ct">Ownership + services</div><div class="cm">Long-term investment</div>' +
      '<p>You own the machines; we run them. Operation, maintenance and raw materials handled, with the cost efficiency that comes from owning the hardware.</p>' +
      '<p style="margin-top:10px;font-size:14px;color:var(--soft);"><strong>Best for</strong> multi-store rollouts with a long horizon.</p></div>' +
    '<div class="case"><div class="ct">Pay per use</div><div class="cm">Flexibility, no commitment</div>' +
      '<p>Pay only for what you use. No long-term commitment, no capital outlay &mdash; the right shape for launches and short windows.</p>' +
      '<p style="margin-top:10px;font-size:14px;color:var(--soft);"><strong>Best for</strong> launches and festivals.</p></div>' +
    '<div class="case"><div class="ct">Subscription</div><div class="cm">Continuous support</div>' +
      '<p>Uninterrupted access to the desk and the design back-end, with the service kept current as the calendar changes.</p>' +
      '<p style="margin-top:10px;font-size:14px;color:var(--soft);"><strong>Best for</strong> seasonal programmes across a year.</p></div>' +
  '</div>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<h2 class="big">SIDE BY SIDE.</h2>' +
  '<div class="tw"><table>' +
    '<thead><tr><th>Model</th><th>What is included</th><th>Commitment</th><th>Best for</th></tr></thead>' +
    '<tbody>' +
      '<tr><td><strong>Rental</strong></td><td>Machines, operator, designer, materials, 365-day maintenance</td><td>6 months+</td><td>Permanent retail desk</td></tr>' +
      '<tr><td><strong>Ownership + services</strong></td><td>Operation, maintenance, materials, design back-end</td><td>Long term</td><td>Multi-store rollout</td></tr>' +
      '<tr><td><strong>Pay per use</strong></td><td>Everything, for the window you book</td><td>3&ndash;14 days</td><td>Launches, drops, festivals</td></tr>' +
      '<tr><td><strong>Subscription</strong></td><td>Ongoing access plus design back-end</td><td>Rolling</td><td>Seasonal programmes</td></tr>' +
      '<tr><td><strong>Job work</strong></td><td>Machines and hands; you send product or we source it</td><td>Per order</td><td>Gifting, weddings, team kit</td></tr>' +
    '</tbody>' +
  '</table></div>' +
'</div></section>' +

'<section class="band band-blush"><div class="wrap">' +
  '<h2 class="big">INCLUDED IN EVERY MODEL.</h2>' +
  '<div class="g g4" style="margin-top:26px;">' +
    '<div><h3 class="mid">Expert operator</h3><p style="font-size:15px;margin-top:6px;">Trained on our system, so every city runs the same.</p></div>' +
    '<div><h3 class="mid">Live designer</h3><p style="font-size:15px;margin-top:6px;">In-house design at the desk. Never a separate line.</p></div>' +
    '<div><h3 class="mid">All raw materials</h3><p style="font-size:15px;margin-top:6px;">Threads, films, foils, backing. Nothing to source.</p></div>' +
    '<div><h3 class="mid">365-day maintenance</h3><p style="font-size:15px;margin-top:6px;">You will not lose a trading day to a machine.</p></div>' +
  '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">Before you ask</p>' +
  '<h2 class="big">WHAT MOVES THE NUMBER.</h2>' +
  '<p class="lead" style="margin-top:14px;max-width:56ch;">Four things, and you control all of them. Push any one up and the price follows. We are not the cheapest and will not pretend to be &mdash; but nothing here is a mystery.</p>' +
  '<div class="dl">' + [
    ['Days','82','3 days','6 months','The biggest single factor, by a distance.'],
    ['Machines','55','One','Four+','About fifteen pieces an hour each. Your queue decides.'],
    ['Techniques','40','Transfers','Embroidery','Thread and foil take longer than pressing.'],
    ['Cities','28','One','Nationwide','Travel, stated plainly rather than buried.']
  ].map(function(d){
    return '<div class="dl-c"><div class="dl-t">' + d[0] + '</div>' +
      '<div class="dl-bar"><i style="width:' + d[1] + '%"></i></div>' +
      '<div class="dl-ends"><span>' + d[2] + '</span><span>' + d[3] + '</span></div>' +
      '<div class="dl-d">' + d[4] + '</div></div>';
  }).join('') + '</div>' +
  '<p style="margin-top:26px;font-weight:600;font-size:17px;">Tell us where you sit on all four. A real number comes back within 24 hours, no meeting first.</p>' +
  '<div class="btns" style="margin-top:16px;"><a class="btn btn-p" href="#/contact">Get a price in 24 hours</a></div>' +
'</div></section>' +

'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">The questions buyers actually ask</p>' +
  '<h2 class="big">ANSWERED BEFORE THE CALL.</h2>' +
  '<div style="margin-top:26px;max-width:820px;">' +
    acc('What is the ROI? What is the revenue share?',
      'Do not think of us as a shop inside your shop. Think of us the way you think about how your store looks and feels: it brings people in, keeps them there longer, and gives them something to tell people about. The commercial proof does exist: the average customer at our desks takes home three pieces, not one, and every one of our 500+ Google reviews is five stars. But that is the consequence of the experience, not the pitch.') +
    acc('Can you handle our footfall? All of our stores?',
      'A ready design takes about four minutes, and one drawn on the spot takes about ten. That is roughly fifteen pieces an hour from each machine. At the one8 premiere, four machines and eight operators produced 300+ pieces in one evening. For very busy days we add more heat-press stations. And the operator-training system means a desk in Delhi runs exactly like one in Bangalore &mdash; we serve stores nationwide.') +
    acc('Why not just buy a machine, or hire a vendor?',
      'A machine in a corner is not the thing. The thing is thirty years of skill, a trained operator, a designer sitting right there, all the materials, the servicing &mdash; and a performance that stops people mid-step. Levi&rsquo;s spent ten years building that inside their own company. We arrive with all of it already built, in about two days.') +
    acc('Is this not just customisation? Or printing?',
      'No. Printing means a warehouse somewhere makes a thousand identical things and posts them to you. We make one thing, for one person, standing in front of them &mdash; and they almost always film it.') +
    acc('How quickly can you start?',
      'About two days, from crews already standing by in Bangalore and Delhi. We can run two events at the same time, one in each city, and desks anywhere in the country.') +
  '</div>' +
'</div></section>' +

closing('WHAT SHAPE FITS YOUR FLOOR?', 'Tell us the stores, the calendar or the order, and we will put real numbers against it.');
};

function acc(q, a){
  return '<details class="acc"><summary>' + q + '</summary><div class="body">' + a + '</div></details>';
}

PAGES['/faq'] = function(){
  var qs = [
    ['What services do you offer at the customisation desk?','Six: live embroidery on ZSK machines, DTF print and heat-press, digital hot foil, laser engraving, UV stickers, and personalised iron-on patches. In-house design is included in all of them and is never charged separately.'],
    ['Are your services available for events?','Yes &mdash; it is one of our three engines. We run compact windows of three days to a fortnight for launches, drops, festivals and showroom openings, with set up in about two days.'],
    ['What products and materials can you customise?','Around 90% of a typical store&rsquo;s inventory: all types of shoes, caps, clothing, bags, socks, totes, watch straps, belts, towels, leather goods, and stationery, tags and packaging. Laser and UV extend that to wood, metal, acrylic and hard goods.'],
    ['What types of machines do you use?','German ZSK embroidery machines &mdash; the same precision equipment used in luxury production &mdash; plus heat-press, digital hot foil, laser and UV. We use international-quality threads and professional framing.'],
    ['What is the pricing structure?','There are four engagement models: rental, ownership plus services, pay-per-use, and subscription. Job work is priced per order. Which one fits depends on your floor and your calendar, so we would rather agree a shape first and then put real numbers against it.'],
    ['Do you offer long-term and short-term models?','Both. Permanent embedded desks run six months and up. Launch and event windows run three days to a fortnight. Job work is per order with no commitment at all.'],
    ['What do you provide with the desk?','An expert operator, a live designer, the machines, all raw materials, the full design back-end and 365-day maintenance. You provide space and product; everything else is ours.'],
    ['Can you handle high-volume orders?','Yes, with the right technique. Embroidery is about fifteen pieces per machine per hour on a ready design. For genuinely high volume we add multi-station heat-press. We will always tell you what a configuration can actually deliver rather than over-promise.'],
    ['Do you provide design assistance?','Always, and it is never a separate charge. A live designer sits at the desk. It is what makes each piece one-of-one instead of a template.'],
    ['Can the machines be moved to another location?','Yes. That is exactly what the travelling desk is for &mdash; machines move city to city across a client&rsquo;s calendar, with standing crews in Bangalore and Delhi.'],
    ['How do I get started?','Send us a brief, or message us on WhatsApp. If it helps, we will set up a live desk for an afternoon so your team can watch it work before anyone signs anything.'],
    ['Where are you based, and where do you operate?','The office is in Noida, with standing crews in Bangalore and Delhi. We serve client stores nationwide &mdash; where we sit does not limit where the desk goes.']
  ];
  return '' +
'<section class="sec"><div class="wrap">' +
  '<p class="eyebrow">Questions</p>' +
  '<h1 class="big" style="font-size:clamp(34px,5.6vw,60px);">EVERYTHING PEOPLE ASK.</h1>' +
  '<div style="margin-top:32px;max-width:820px;">' + qs.map(function(q){ return acc(q[0], q[1]); }).join('') + '</div>' +
'</div></section>' +
closing('STILL WONDERING?', 'Message us. We answer quickly, and we will tell you if we are not the right fit.');
};

PAGES['/contact'] = function(){ return '' +
'<section class="band band-mar" style="padding-bottom:calc(var(--pad)*.6);"><div class="wrap">' +
  '<p class="eyebrow" style="color:var(--onmar);opacity:.8;">Contact</p>' +
  '<h1 class="big" style="color:var(--indigo);font-size:clamp(34px,5.8vw,66px);">TELL US WHAT YOU WANT MADE.</h1>' +
  '<p class="lead" style="margin-top:16px;color:var(--onmar);">A shop floor, a launch in six weeks, or two hundred things that need to be ready by Friday. Say which one it is and you will have an answer today &mdash; WhatsApp is the fastest way.</p>' +
  '<div class="btns" style="margin-top:28px;">' +
    '<a class="btn btn-live" href="https://wa.me/919654382799" target="_blank" rel="noopener">' + DOT + ' WhatsApp us</a>' +
    '<a class="btn btn-p" href="mailto:laksh@custogusto.in">Email Laksh</a>' +
  '</div>' +
'</div></section>' +

'<section class="sec"><div class="wrap split">' +
  '<div>' +
    '<h2 class="big" style="font-size:clamp(24px,3.2vw,34px);">Tell us what you are working on</h2>' +
    '<p class="sub" style="margin-top:10px;">Four fields, because your time is worth more than our form. You get a reply the same day.</p>' +
    '<form class="form" style="margin-top:22px;" onsubmit="return false;">' +
      '<div class="f2">' +
        '<div class="field"><label for="n">Name</label><input id="n" type="text" autocomplete="name"></div>' +
        '<div class="field"><label for="e">Email</label><input id="e" type="email" autocomplete="email"></div>' +
      '</div>' +
      '<div class="field"><label for="w">Which sounds like you?</label><select id="w">' +
        '<option>I have a shop floor that needs a reason to visit</option>' +
        '<option>I have a launch or an event coming up</option>' +
        '<option>I need a batch of things made and sent back</option>' +
        '<option>I am not sure yet, but I want to talk</option>' +
      '</select></div>' +
      '<div class="field"><label for="m">Tell us more</label><textarea id="m"></textarea></div>' +
      '<div><button class="btn btn-p" type="submit">Send it</button></div>' +
    '</form>' +
  '</div>' +
  '<div>' +
    '<div class="case"><div class="ct">Getting to you</div>' +
      '<p style="margin-top:10px;"><strong>Office</strong><br>E-107, Sector 6, Noida,<br>Uttar Pradesh 201301</p>' +
      '<p style="margin-top:12px;"><strong>How fast we reach you</strong><br>Crews wait in Bangalore and Delhi, so most places in India are about two days away. Two cities can run at the same time.</p>' +
      '<p style="margin-top:12px;"><strong>If your stores are somewhere else, that is fine.</strong> Where our office sits has never decided where a desk can go.</p>' +
      '<p style="margin-top:14px;"><strong>Phone</strong><br>+91 96543 82799</p>' +
      '<p style="margin-top:12px;"><strong>Email</strong><br>laksh@custogusto.in</p>' +
    '</div>' +
    '<div style="margin-top:16px;">' + ph('contact_e1','A set of finished totes','ph-16') + '</div>' +
  '</div>' +
'</div></section>' +

'<section class="sec-sm"><div class="wrap">' +
  '<h2 class="big" style="font-size:clamp(24px,3.2vw,34px);">What people usually ask first</h2>' +
  '<div style="margin-top:22px;max-width:820px;">' +
    acc('How quickly can you start?','About two days, from our crews in Bangalore and Delhi.') +
    acc('What do you need from us?','Somewhere to stand and the products themselves. The machines, the operator, the designer, all the materials and the running of it are ours.') +
    acc('Can we see it before committing to anything?','Yes, and this is the easiest way. We will bring a desk to your office for an afternoon and let your team make their own pieces. Most decisions get made in that hour.') +
    acc('Do you work outside Delhi and Bangalore?','Yes. Those are just where the crews sleep.') +
    '<p style="margin-top:16px;"><a href="#/faq" style="color:var(--brick);font-weight:600;">All questions &rarr;</a></p>' +
  '</div>' +
'</div></section>';
};

/* ================= router ================= */
function render(){
  var h = location.hash.replace(/^#/, '') || '/';
  var page = PAGES[h] || PAGES['/'];
  document.getElementById('main').innerHTML = page();
  var links = document.querySelectorAll('.nav a');
  for (var i = 0; i < links.length; i++){
    links[i].classList.toggle('on', links[i].getAttribute('href') === '#' + h);
  }
  document.getElementById('nav').classList.remove('open');
  document.getElementById('hcta').classList.remove('open');
  document.getElementById('burger').setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
  wireFilters();
  wireReveal();
}

function wireReveal(){
  var els=[].slice.call(document.querySelectorAll('.rv'));
  if(!els.length) return;
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in');}); return; }
  var io=new IntersectionObserver(function(en){
    en.forEach(function(e){ if(!e.isIntersecting) return;
      var i=els.indexOf(e.target);
      setTimeout(function(){ e.target.classList.add('in'); }, (i%3)*90);
      io.unobserve(e.target); });
  },{threshold:.15, rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){ io.observe(e); });
}

function wireFilters(){
  var grid = document.getElementById('grid');
  if (!grid) return;
  var state = { tech: 'all', prod: 'all' };
  var btns = document.querySelectorAll('.fbtn');
  function apply(){
    var cards = grid.children;
    for (var i = 0; i < cards.length; i++){
      var c = cards[i];
      var okT = state.tech === 'all' || c.getAttribute('data-t') === state.tech || c.getAttribute('data-t') === 'mixed';
      var okP = state.prod === 'all' || c.getAttribute('data-p') === state.prod || c.getAttribute('data-p') === 'all';
      c.style.display = (okT && okP) ? '' : 'none';
    }
  }
  for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
      var f = this.getAttribute('data-f'), v = this.getAttribute('data-v');
      state[f === 'tech' ? 'tech' : 'prod'] = v;
      var group = document.querySelectorAll('[data-f="' + f + '"]');
      for (var j = 0; j < group.length; j++) group[j].classList.remove('on');
      this.classList.add('on');
      apply();
    });
  }
}

window.addEventListener('hashchange', render);

document.getElementById('burger').addEventListener('click', function(){
  var n = document.getElementById('nav'), c = document.getElementById('hcta');
  var open = n.classList.toggle('open');
  c.classList.toggle('open', open);
  this.setAttribute('aria-expanded', open ? 'true' : 'false');
});

render();
