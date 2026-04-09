import { PHOTOS, CATEGORIES, type Photo, type Category } from './photos.js';

// ─── POETRY DATA ───────────────────────────────────────────────────
type PoemCategory = 'all' | 'desire' | 'longing' | 'devotion' | 'darkness' | 'fire';

interface Poem {
  id: string;
  title: string;
  year: number;
  lines: string[];
  mood: string;
  category: PoemCategory;
}

const POEMS: Poem[] = [
  // ── DESIRE ──────────────────────────────────────────────────────
  {
    id: 'p1',
    title: 'Full Moon Night',
    year: 2025,
    mood: 'intoxicating',
    category: 'desire',
    lines: [
      "It's a full moon night tonight",
      'And we\'re all playing our part so faithfully',
      'There\'s love in the air',
      'And we\'re all breathing it so gracefully',
      'Oh moon, moon of the night sky stars',
      'One way or the other',
      'We\'re all following you so tenaciously',
      'This light in our eyes',
      'And we\'re all painting your picture so painfully',
      'Seems like god\'s grace',
      'Sunshine, touching us in his place',
      'Sensations of cold air on bare skin',
      'We\'re all getting excited so shamelessly',
      'It might be as meaningful as breathing',
      'Or as meaningless as repeating',
      'Like an art even artists couldn\'t understand',
      'We\'re all staring at you insatiably',
      '',
      'There\'s a crowd of irresistible experiences',
      'Every one of them buried under countless sins',
      'Devilish feelings are in demand',
      'In these glamorous nights and pretty skins',
      'Racing hearts breathless people',
      'World champions, lauding grins',
      'Look them in their eyes and make a wish',
      'They\'re magical, feeling like jinns',
      'In a horde of masked monsters, like a death trap',
      'You, staring like the end of a long list of wins',
      'Burning, like falling in the sun',
      'Oh those eyes, could destroy kings',
      'Like moths to a flame',
      'Flying towards you burning their wings',
      'There\'s a crowd of irresistible experiences',
      'Everything is on fire and it stings',
      'In a world of lust, you',
      'You reek of love of all things',
    ],
  },
  {
    id: 'p2',
    title: 'Irresistible',
    year: 2025,
    mood: 'obsessive',
    category: 'desire',
    lines: [
      'Standing on her balcony, staring off into deep space',
      'Yeah she\'s attractive, fiery eyes, blood red lips, pretty face',
      'One look and yes that really is all it takes',
      'A gamble of hearts, a gamble of highest stakes',
      'One look and you\'ll know she\'s not a schemer',
      'It pulls you in deeper, her austere demeanor',
      'She is a dangerous game, her essence immiscible',
      'I know I have no shame, she\'s god damn irresistible',
      'That\'s not even page one, just scratching the surface',
      'As you dig deeper, love sets in, you get nervous',
      '',
      'Love? These days love is.. just lame',
      'Me? I\'m just another name',
      'She? She smells like victory, like fame',
      'Others? Respectfully, they all smell the same',
      '',
      'A heart that loved, I could feel her pain',
      'A fool in love, foolishly I too made it rain',
      'Knowing sanity before, I too went insane',
      'The brightest star, lighting even the darkest night',
      'She\'s shining brightly even when the moon goes out of sight',
      'She\'s not a desire, she\'s eternal fire',
      'If I said I don\'t love her, I\'d be a liar',
      'If you\'re not careful, you too will fall in love',
      'She\'s the kind person you can\'t unlove',
      '',
      'Who is she? Maybe she\'s you for someone out there',
      'Maybe you have them now, maybe they\'re just unaware',
      'I have my source of fire, do you?',
    ],
  },
  {
    id: 'p3',
    title: 'City Forest Spirit',
    year: 2025,
    mood: 'hypnotic',
    category: 'desire',
    lines: [
      'Deep inside the city forest',
      'Lies a spirit laying emotionless',
      'White as ice, cold as frost',
      'Beating heart but motionless',
      'Lost in its thoughts with an open mind',
      'Pale skin, blue eyes, long hair in a mess',
      'Gazing at her,',
      'Like moving pieces of chess',
      'There\'s peace and calm in her',
      'Like nyx in a black wedding dress',
      '',
      'Sitting on the couch, passing comments casually',
      'In a room full of dangers, her gaze is feline',
      'An entire universe in itself, you\'re scared and excited at the same time',
      'Skipping beats you know your heart won\'t be fine',
      'She\'s calm and the peace inside her is hypnotizing',
      'With her in sight, you don\'t want to avert your eyes',
      'There\'s still hope, her existence is a blessing',
      'Like a burning star breathing life into the night skies',
    ],
  },
  {
    id: 'p4',
    title: 'Tonight',
    year: 2025,
    mood: 'electric',
    category: 'desire',
    lines: [
      'Tonight there\'s a red mixed in the air',
      'Tonight I\'m out of my mind',
      'There\'s beauty everywhere I see',
      'But she\'s truly one of a kind',
      'In this trance like state',
      'She\'s the constant high',
      'Tonight there\'s a red mixed in the air',
      'And I\'m out of my mind',
      '',
      'Tonight there\'s a frozen moment',
      'Tonight there exists no time',
      'There\'s a feeling of peace inside you',
      'But you look like a premeditated crime',
      'In this realm of gods',
      'Her presence is beyond sublime',
      'Tonight there\'s a red mixed in the air',
      'And I\'m out of my mind',
      '',
      'Tonight, it\'s like a beautiful dream',
      'I waited for it my whole life',
      'This feeling inside me',
      'Like I can hear my heart scream',
      'Tonight, death is in a bind',
      'Tonight, the love is pure, true and forever',
      'Tonight there\'s a red mixed in the air',
      'And I\'m out of my mind',
    ],
  },
  {
    id: 'p5',
    title: 'The First of Moon',
    year: 2025,
    mood: 'breathless',
    category: 'desire',
    lines: [
      'The first of moon and the moon of first',
      'Will you let me satisfy my throat quenching thirst',
      '',
      'Hand in one and her waist in other',
      'Drowning my eyes in yours like a wild untamed lover',
      '',
      'The moon is jealous looking at us',
      'Grabbing all the attention in this banquet of starry night',
      'As we move',
      'Cutting through space',
      'Slowing down time',
      'The cold white light is being overwhelmed by her fire',
      'Reddish and warm',
      'She\'s burning brightly',
      'So unfairly stunning',
      'Her existence could be labeled a crime',
      '',
      'Flowing through the crowd like a gust of wind',
      'Slicing the threads that bind us, unstringed...',
      'I\'m a man of few words but she makes me speechless',
      'She\'s a woman with killer moves and tonight she\'s sheathless',
      'It\'s 4 am, we\'re fucking sleepless',
      'Holding her, as a stroke of pure luck',
      'Unhinged, I know I\'m an undeserving jerk',
      'To hell with sanity, like I\'d give a fuck',
      'Tonight, not one fucking thing will be safe for work',
    ],
  },
  {
    id: 'p6',
    title: 'Walking on the Beach',
    year: 2025,
    mood: 'dreamy',
    category: 'desire',
    lines: [
      'Walking on the beach with you',
      'Dark sky the ocean blue',
      'A glimpse of fantasy',
      'Shining inside you',
      'This night moon has nothing over you',
      '',
      'Burning hearts homemade brew',
      'Cold air morning dew',
      'A dash of love',
      'Sprinkled onto you',
      'Even fireflies are fawning over you',
      '',
      'Bare skin rose tattoo',
      'Single me complicated you',
      'A sea full of possibilities',
      'Sailing ship no crew',
      'How am I supposed to get over you',
      '',
      'Laying beneath this moonlight',
      'Caught myself daydreaming again',
    ],
  },
  {
    id: 'p7',
    title: 'Glitters',
    year: 2025,
    mood: 'urgent',
    category: 'desire',
    lines: [
      'Glitters on you shining like pear blue',
      'Tonight makes no sense',
      'Tonight I\'m drowning inside you',
      'There is no room for lies it\'s a blood pact',
      'Tonight there\'s no one else besides you',
      '',
      'Dark times',
      'Loud screams',
      'Prisoned sandman',
      'No dreams',
      'Playing dirty',
      'Dirty schemes',
      'Me and you',
      'You and me',
      'Burning together',
      'Beyond extremes',
      '',
      'If life is supposed to be lived',
      'Why are you not here',
      'Just say the words once and',
      'To get to you I\'ll travel this whole sphere',
      'Burning the bridges that don\'t lead to you',
      'Fuck destiny I\'ll carve your name in my palms',
      'Age color caste creed — fuck this',
      'I\'ll kill the ones who interfere',
    ],
  },

  // ── LONGING ─────────────────────────────────────────────────────
  {
    id: 'p8',
    title: 'No One to Tell',
    year: 2025,
    mood: 'hollow',
    category: 'longing',
    lines: [
      'So many things to share, but no one to tell it to',
      'So many failures in life, but no one to talk about it to',
      'So many idiots messing things up, but no one to bitch about it to',
      'So many jokes, but no one to crack them to',
      'So many dreams to fulfill, but no one to share the joy with',
      'So much drama everyday, but no one to gossip about it to',
      'So much pain, but no one to cry about it to',
      '',
      'Am I supposed to be heartless?',
      'Love is supposed to save us but why does it feel like a weakness?',
      'To love selflessly, I remember the taste, I remember the sweetness.',
      'Take a step towards me I\'ll reach out to you even from the depths of hell,',
      'There\'s no one like you in this big world, even god couldn\'t undo your uniqueness.',
      'You radiated so much that I forgot about everything for a moment,',
      'I got so intoxicated that I feel like I drank 18 margaritas.',
      'This meaningless pure love that I have for you',
      'I\'d keep it just between us, you could count on my discreetness',
    ],
  },
  {
    id: 'p9',
    title: 'Falling',
    year: 2025,
    mood: 'desperate',
    category: 'longing',
    lines: [
      'I\'m falling down',
      'I saw her again',
      'I have already fallen now',
      'Someone different something unique',
      'I\'ve been falling since I first saw her',
      'Now that I know her I can\'t stand up again',
      'Should I just give up on trying',
      'Cause I\'m never meeting someone like her again',
      '',
      'She\'s pain, she\'s not a drizzle but a beautiful rain',
      'She\'s sane, but thinking \'bout her is making me insane',
      'She\'s a ten, all I wanna do is write about her when I pick my pen',
      '',
      'I\'m thinking about her when I\'m sitting with you',
      'I can\'t control myself, I don\'t know how to',
      '',
      'Baby, are you happy with him?',
      'Are you sure it\'s not a whim?',
      '',
      'Dust, as it settles down',
      'Rust, everywhere I see',
      'Lust, is all it ever was',
      'Must, you do it to me?',
    ],
  },
  {
    id: 'p10',
    title: 'Cosmic Thread',
    year: 2025,
    mood: 'wistful',
    category: 'longing',
    lines: [
      'For someone who looks for logic even in fairy tales',
      'Not once he had a doubt about it being illogical sails',
      'The beauty of sailing through this life following her cosmic thread',
      'The way she\'s sailing through hers, she\'s the same kinda crazy in the head',
      '',
      'Once upon a time he was told a tale',
      'How people slowed down against time with every breath they inhale',
      'Living their daily life, far away on a distant plane in a town enclosed inside a dome',
      'Though the tale fades away, he remembers the voice sounding like singing a poem',
      'Painting a picture of a machine looking inside his head, looking for the missing dates',
      'Whispering, that\'s when you find out that the story is not about humans, as she narrates',
      'It\'s not about the story, it\'s not about their fates',
      'It\'s not about her, it\'s about the bond that he creates',
      '',
      'Would a selenophile\'s yearning wane,',
      'Knowing that the moonshine is not just theirs to claim',
      'She\'s like the breath of fresh air deep inside the ocean water',
      'For him',
      'Everything\'s going wrong kinda day, but it\'s a day to remember since he saw her',
    ],
  },
  {
    id: 'p11',
    title: 'Sunflowers',
    year: 2026,
    mood: 'tender',
    category: 'longing',
    lines: [
      'Sunny day, searching for the sun, a world filled with sunflowers',
      'Thinking about you, feels like the feeling of hot showers',
      'In this universe, that weaves the thread of fate binding sunflowers with sun',
      'Pulling in the thread that connects me to you, the efforts second to none',
      '',
      'Figuring you out, a puzzle game',
      'Forgetting about others, they\'re not the same',
      'If I write about you',
      'Will I be labeled as the man who can\'t be moved',
      'Or will I be the man who just loves',
      '',
      'All this, there\'s no way all this is meaningful in any way',
      'An unstoppable force, two unmoving souls with no say',
      'Maybe I\'m way too addicted, just to let it all go',
      'It\'s fine, it\'s something, it\'s all I have to show',
    ],
  },
  {
    id: 'p12',
    title: 'Melodies',
    year: 2025,
    mood: 'yearning',
    category: 'longing',
    lines: [
      'Melodies, whispers of words lingering around',
      'Elegies, tearing me apart, oh I love your sound',
      'Remedies, breathing life with every breath you take',
      'Parodies, is it fate playing games or a simple mistake',
      '',
      'Moirai, as I walk following the trail',
      'Will you bless me or will you punish me for my crime',
      'The moment I saw through her I knew',
      'She\'s the right person and forgot about the time',
      '',
      'Something once loved cannot be unloved',
      'And to hear you and not fall would be a sin',
      'Everything is a means to reach you',
      'A step forward or a glass of vodka mixed with gin',
      '',
      'Even though the dark clouds have turned skies grey',
      'Seeing you smile still makes my day',
    ],
  },
  {
    id: 'p13',
    title: 'Wished for You',
    year: 2026,
    mood: 'consuming',
    category: 'longing',
    lines: [
      'I wished for you',
      'Wished for you till death',
      'Felt like feeling you till',
      'Every last inch, every last breath',
      '',
      'I wished for you',
      'Wished for you with all my might',
      'Warm like the feeling of love',
      'I\'d die if I ever lost sight',
      '',
      'A servant, a ruler',
      'What is it that you wish for?',
      'People will grant you wishes',
      'Until they don\'t want you anymore',
      '',
      'Is it still not enough?',
      'Bowing down to you',
      'Black and white canvas',
      'Wishing for your blue hue',
      '',
      'Jumping to reach the moon',
      'Falling for you, with every breath',
      'Food for the fools',
      'Inevitable like death',
      '',
      'Tears of blood',
      'Destroyed worlds',
      'No weapons',
      'Just words',
      '',
      'Neither insane nor a complete fool',
      'Singing praises like a broken tool',
      'Mumbling mumbo jumbo',
      'Dancing like a dumbo',
      'Screaming your name',
      'Blinded by your fame',
      'Incomplete without your blue',
      'Out of reach, you being you',
      '',
      'Every breath is yours to take',
      'Every dream is yours to rule',
      'Stand up and take the crown',
      'Wear that queen\'s gown',
      'And watch them obsessively',
      'Try to be the king of this town',
      '',
      'Maybe I am insane, a complete fool',
      'Carrying you around like a jewel',
      'Feelings for you across seven seas',
      'Spreading love for you like a disease',
      '',
      'Writing for you, I\'m poor',
      'I\'d shower you with riches, dreams of grandeur',
      'But all I have right now are words, cri de coeur',
      'All powerful like a saint\'s dying wishes',
      'I tell you, beyond logical reasoning this is',
      'Every scar on you feels like death to me',
      'Hence, dancing like a dumbo for all to see',
      '',
      'There\'s life without you',
      'And then there\'s living with you',
      'There\'s life without you',
      'And I chose death and living with you',
      '',
      'Cursing your haters',
      'I am insane, a complete fool',
      'Death to traitors',
      'If I have to be, I am that cruel',
      '',
      'A Warrior, a Bard, a Joker — I am what you need',
      'A God, a Will, a Stone, a desire for you to succeed',
      'Unavoidable like a loss, yet hitting bullseye with every dart',
      'Unbreakable like a promise, yet as brittle as your heart',
      'Mumbling mumbo jumbo, yet I call it an art',
      '',
      'Feelings for you across seven seas',
      'Spreading love for you like a disease',
    ],
  },

  // ── DEVOTION ────────────────────────────────────────────────────
  {
    id: 'p14',
    title: 'Not a Human',
    year: 2025,
    mood: 'unconditional',
    category: 'devotion',
    lines: [
      'No more secrets, no more pretending',
      'No more lies, no more defending',
      'No more mind games, no more chasing',
      'The steps I took, I\'m retracing',
      '',
      'This here, this is it',
      'This here, this is the perfect fit',
      'Pains gonna come, I\'m gonna cry',
      'It won\'t tell, don\'t ask why',
      '',
      'The who, how, why, what of it',
      'Leave my heart out of it',
      'Looking deep inside me',
      'What is it that I want to see',
      '',
      'I\'m not a human',
      'And I don\'t want to be',
      'I\'m not a human being',
      'And I don\'t want to be',
      'Humans love to win, humans are users',
      'Who cares if it puts me in your list of losers',
      '',
      'If I love you, I love you regardless of you being here or not',
      'If I love you, I love you regardless of whether you care or not',
      'If you call me I\'ll be there, if I could give',
      'I\'d give you everything',
      'Expectations are for humans',
      'I don\'t expect anything',
      '',
      'Let all your secrets in my skin',
      'I don\'t even tell my best of friends',
      'To light up, to really light myself up from within',
      'I\'m burning the candles from both ends',
      '',
      'Lay you down when you go to sleep',
      'Tell you that life is not that deep',
      'Out of all of these hearts that we meet',
      'You\'re one of the very few that I wish to keep',
    ],
  },
  {
    id: 'p15',
    title: 'A Piece of Art',
    year: 2025,
    mood: 'reverent',
    category: 'devotion',
    lines: [
      '"You may be good looking but you\'re not a piece of art"',
      '',
      'Ohhh I don\'t know if her looks brought her fame',
      'But she\'s definitely a piece of art putting even Mona Lisa to shame',
      '"Sunshine in human form" is what I think of her',
      'I couldn\'t help myself from associating the phrase with her name',
      'Never in my life I\'ve shown mercy but',
      'If it\'s you, I wouldn\'t mind losing this game',
      '',
      'Fuck fate, fuck the world, be selfish, be unfair',
      'Be you, burn it all down and I\'ll take the blame',
      'You filled this black and white world of mine with colors so I\'ll be selfish',
      'And keep you all to myself because without you it\'ll never be the same',
      '',
      '8 billion people and you might have hundreds of them waiting for you in queue',
      'Each one of them better than me at everything, doing their best to woo',
      'And I might suck at it but tell me honestly how many of them are writing poetry for you',
    ],
  },
  {
    id: 'p16',
    title: 'She Was Shakespeare',
    year: 2025,
    mood: 'devoted',
    category: 'devotion',
    lines: [
      'She tucked her hair and smiled',
      'In a room filled with fire, he just couldn\'t help but stare',
      'It\'s as if wrong doesn\'t exist in this world',
      'She\'s 18 and he ain\'t no player',
      'They say we carry god inside our hearts and',
      'She let him, let him touch her there',
      'He loved drama and she was fucking Shakespeare',
      '',
      'To the end of what is long, to the bottom of what is deep',
      'For the seeds of love, is what they wish to reap',
      'If god let him choose anything from the entire universe',
      'She\'s the one he\'d ask to keep',
      'He\'s 30 and the time before her is as if he never lived',
      'It\'s poison, inside him, and she doesn\'t fucking care',
      'He loved drama and she was fucking Shakespeare',
      '',
      'Laying next to each other, lost somewhere in the starry sky',
      'Fighting like they\'d kill each other out of breath throats dry',
      'People can turn into monsters and life can be fucking unfair',
      'Still',
      'He held her in front of the whole world, for death is better than living in fear',
      'He loved drama and she was fucking Shakespeare',
    ],
  },
  {
    id: 'p17',
    title: 'A Step Towards Healing',
    year: 2025,
    mood: 'redemptive',
    category: 'devotion',
    lines: [
      'Dark like a shadow, and she\'s bright just like snow',
      'Dull like a paper, and she, moon like glow',
      'The strides in her hair',
      'Her brown eyes stare',
      'Storming in their thoughts, neither of them are blinking',
      '',
      'Cold weather, hot shower',
      'Misty room, bodies steaming',
      'Black top hiding black rose flower',
      'She looks unreal, he\'s not dreaming',
      'The path that led them here, neither of them are rethinking',
      '',
      'Leaving behind the past, a step towards healing',
      'The innocence of their soul, they\'re planning on stealing',
      'A leap of faith, not a means of dealing',
      'Their shiny moments, their gloomy days, they\'re planning on revealing',
      'Their clashing intentions, like the sound of glasses you hear them clinking',
      '',
      'The excitement and chill from her touch spreading like wildfire',
      'For a man who thought he cannot be loved, this is a new start',
      'Why does committing a sin feel like a push from divine power',
      'Conquering your soul, it\'s like a drug, this feeling of a beating heart',
      'Stealing god\'s precious soul, in this little tale, she\'s his queen, he\'s her king',
    ],
  },
  {
    id: 'p18',
    title: 'Divine Nightmare',
    year: 2026,
    mood: 'fierce',
    category: 'devotion',
    lines: [
      'I was, I am, I\'ll always be',
      'Your',
      'Divine nightmare',
      'Your',
      'Hellish dream',
      '',
      'Spreading my wings as I lie besides you',
      'Slaying the monsters hiding in your closet',
      'Turning gloomy days glorious',
      'Sleepless nights and I\'m being notorious',
      '',
      'Floating lies',
      'Slicing ties',
      'It\'s just you and me',
      'Killing highs',
      'Pleasing cries',
      'Tell me what do you see',
      '',
      'I\'m a ten and I have no fear',
      'I hope you love drama cause',
      'Tonight I am fucking Shakespeare',
      '',
      'Dripping like a heartbeat',
      'On a white paper thin sheet',
      'There\'s something missing',
      'Beating heart but incomplete',
    ],
  },

  // ── FIRE ────────────────────────────────────────────────────────
  {
    id: 'p19',
    title: 'Castle Princess',
    year: 2023,
    mood: 'awakening',
    category: 'fire',
    lines: [
      'Sitting on top of her castle looking down on people passing by',
      'Looking at her with love, there\'s a boy, just another passer by',
      'There sits a princess, fighting her battles each day, fighting for her dreams',
      'A little smile on her face, hiding the sounds of her battle screams',
      '',
      'I haven\'t felt a thing for a long time',
      'Now I\'m heating up again',
      'I thought I had it all locked up',
      'Now I hear it beating up again',
      'It all seemed too far away for me to reach but',
      'Now I find myself peeking up again',
    ],
  },
  {
    id: 'p20',
    title: 'They Tried to Burn Her',
    year: 2025,
    mood: 'defiant',
    category: 'fire',
    lines: [
      'When they saw her',
      'They tried to touch her soul',
      'And when they couldn\'t',
      'They tried to burn her whole',
      '',
      'Everyone\'s got a sad story they tell all',
      'Yet they didn\'t hold back when they stole',
      'All these god fearing people',
      'Throw bricks at her and call it a light troll',
      '',
      'And when she fought back',
      'They played the victim\'s role',
      'They said they love her',
      'They just want to be in control',
      '',
      'No wonder she\'s doubtful now',
      'No wonder she\'s wary of everyone\'s goal',
      'They complain about the burns from her fire',
      'Even though they knowingly kept on adding coal',
      '',
      'How can one call themselves human',
      'And not feel a thing after seeing the toll',
      'How can one not feel a thing watching her unroll',
      '',
      'Still. Because humans didn\'t, one day god will have to',
      'Bow down to the soul that still carries on enduring it all',
    ],
  },
  {
    id: 'p21',
    title: 'Dark New Moon',
    year: 2025,
    mood: 'consuming',
    category: 'fire',
    lines: [
      'Flames coming out of me.',
      'In this dark new moon night',
      'Away from the bling of these city lights',
      'You can\'t see but the flames \'re there',
      'You keep shining with your eyes',
      'As I engulf you in darkness',
      'Cold and peaceful like death\'s embrace',
      'The bodies melting in the lightless dark',
      'As we open our minds two souls are all we see',
      '',
      'There\'s a line you that shouldn\'t cross',
      'She\'s 18 and she\'s come quite close',
      'The places where they hurt you',
      'Like lightning streaks',
      '',
      'A touch, a hold, a kiss, a dark game',
      'And I\'m breathless for weeks',
      'Touch it and it breathes,',
      'Hold it and it weeps,',
      'Kiss it and it feels,',
      'Please it and it heals',
      '',
      'The soul can\'t tell no lie',
      'Let it all go don\'t be shy',
      'If you\'re a path then I\'m the end',
      'Fates intertwined, cannot pretend',
    ],
  },
  {
    id: 'p22',
    title: 'A Dream in Reality',
    year: 2025,
    mood: 'intense',
    category: 'fire',
    lines: [
      'Thinking about her for some time now',
      'Paving my way to her I don\'t know how',
      'Anything I do doesn\'t seem to work lately',
      'The way she smiled oh I cannot think straightly',
      '',
      'A soul venturing out filling my dead eyes with life',
      'It\'s love dripping out my veins',
      'The hands are mine but she\'s the one holding the knife',
      'She\'s the wings on my shoulders as I fly',
      'A paper plane floating in this dark night',
      'If I\'m the suicide letter',
      'She\'s Van Gogh\'s starry sky',
      '',
      'Cutting the webs holding her back',
      'As I pull out my sword out of its sheath',
      'Burning everything in my track',
      'With the flames of sun as I breathe',
      '',
      'Rainbows and sunshine',
      'Table candles and an old wine',
      'In the real world, that\'s probably as far as we go',
      'Dark sky and moonlight',
      'Pale skin shameless sight',
      'In here I have no control, holding you in his arms is my alter ego',
      '',
      'Unwrapping as if she\'s god\'s gift, a dream in reality',
      'Like a playboy\'s mansion, screams getting intense lately',
      'As I trace every inch of her with devilish morality',
      'Looking in her eyes peering into her soul intimately',
      '',
      'Endorphins dopamine',
      'Bloody backs blood on the sheets',
      'Oxytocin serotonin',
      'With every beat that our heart beats',
    ],
  },

  // ── DARKNESS ────────────────────────────────────────────────────
  {
    id: 'p23',
    title: 'This Heart is No Home',
    year: 2025,
    mood: 'raw',
    category: 'darkness',
    lines: [
      'This heart is no home to you but you came rushing in',
      'You\'re 18 and the things we did are no less than a grave sin',
      'You don\'t belong here but there\'s nowhere to go',
      'You\'re fire playing with gasoline,',
      'The destruction we\'ll cause, there\'s no way to know',
      '',
      'You showed me your scars and I couldn\'t help but cry',
      'Burning in this hellish world I thought all my tears were dry',
      'You made yourself comfortable in my sheets but that\'s not where you should be',
      'We\'re two shards of pure chaos striking each other, I hope you can see',
      '',
      'I was there when you needed someone to carry you over',
      'Fascinated by the storm you saw in me you ended up coming closer',
      'Black sky, red lightning, long dark hair, slinky attire',
      'Warm gentle hands, exchanging heat, fueled by desire',
      '',
      'Diving in your eyes, hearing your tunes,',
      'How could I say no to you',
      'I\'m dead inside but I could die again for you',
      'I\'m sorry for I\'ve been rough with you',
      '',
      'Love is hard for me now, the blood in veins has turned into ice',
      'If you tear me open you won\'t find anything, not even fear or cries',
      'I\'ve been with girls holier than angels and I had to say goodbyes',
      '',
      'I don\'t know if I can give you what you really need',
      'But I hope I can help you shine brighter than the stars in night skies',
      'You\'re smart and strong but I\'m not sure if being with me is really wise',
      'With all my experiences, I\'m one hell of a mess',
      'The innocence I see in you, it\'d really kill me if it dies',
      '',
      'You might have already figured me out, this shouldn\'t really be a surprise',
      'There\'s one thing I can promise you, I value you more than me',
      'I understand the importance of truth, you won\'t have to worry about lies',
    ],
  },
  {
    id: 'p24',
    title: 'Shaky Eyes',
    year: 2025,
    mood: 'haunting',
    category: 'darkness',
    lines: [
      'Shaky eyes, wavy lines',
      'Drop of blood, falling on the ground',
      'Hazy sight, losing surely right?',
      'Shots fired, but there\'s no sound',
      '',
      'Do you think I care if I die?',
      'He said conversing somewhere in between eyes',
      'Do you think I care if the end is nigh?',
      'Did you fail to notice the count of my night cries?',
      '',
      'When I said I promise',
      'Did you think I was being dishonest, full of lies?',
      'The fingers are mine',
      'Pulling the trigger, don\'t you see it in my eyes?',
      '',
      'That is what it takes',
      'There\'s no other way of breaking the ties',
      'Fuck hell fuck paradise',
      'I\'ll stay here looking at you through the skies',
      '',
      'I\'ll be there if there\'s a way to subsist',
      'I\'ll be there till the day I cease to exist',
    ],
  },
  {
    id: 'p25',
    title: 'Movie',
    year: 2025,
    mood: 'obsessive',
    category: 'darkness',
    lines: [
      'They say that life plays a difficult game',
      'One minute you\'re basking in glory and next it\'s a walk of shame',
      'All those fairytales you loved as a kid',
      'Now just feel so lame',
      'You keep on moving on even though',
      'The answers to your prayers never really came',
      '',
      'Me?',
      'I\'m trying, living this movie with each day',
      'Trying my best to squeeze you in one more frame',
      'I\'m religious and somehow in every prayer',
      'To god, I end up saying your name',
      'They call me crazy, they laugh at my despair',
      'I don\'t really care I\'ll take all the blame',
      '',
      'I realized the darkness in me, I know I\'m unfair',
      'I see it, now that I\'ve lost the light from your flame',
      '',
      'As I choose to deep dive',
      'Whispering that I\'m fine',
      'Wishing that everyone dies',
      'So that you could be all mine',
      '',
      'For the rest of the world',
      'I\'m okay to be a sinner',
      'You\'re the only one who',
      'Inspires me to be a winner',
      'I couldn\'t live with you in reality',
      'So I wish to be a dreamer',
    ],
  },
  {
    id: 'p26',
    title: 'Love Is Complicated',
    year: 2026,
    mood: 'reflective',
    category: 'darkness',
    lines: [
      'Love is supposed to be simple yet it is so complicated',
      'Now you find them vacuous, the ones who once radiated',
      'Eight letters three words is all you wish to hear',
      'But the sincerity of the four is what you fear',
      '',
      'You find the one, but all they do is shatter your dreams',
      'And to seem strong in this cold apathetic world, you silence your screams',
      'When did we move from die for you to me myself and I',
      'When did we move from It\'s a wonderful life to living a lie',
      '',
      'Zillion poems billion stories million songs',
      'Still we cannot distinguish the rights from the wrongs',
      'Somewhere between William (Shakespeare) and Gregory (Anton)',
      'We\'re drowning the good, sunk in our dark reverie',
      '',
      'This relationship with our own heart',
      'Did we fuck it up or was it doomed from the start',
      'What is it if not a mad affair',
      'It longs for one who doesn\'t care',
      '',
      'Age work caste color norm, excuses...',
      'Fearing memories of past, bruises...',
      'Ingrained social mental physical, abuses...',
      'Compelling blurring confusing',
      'Sadly, so reducing our view is',
      '',
      'Reading a fairytale with a sigh (she was)',
      'Thinking that forever is a pleasing lie',
      'Love hurts more than loneliness',
      'So it\'s better to just say goodbye',
      '',
      'You said she\'s your sun and moon, so',
      'Why would you leave her with a tear in her eye',
      'It\'s not easy, it never is but',
      'It is your loss if you let her cry',
    ],
  },

  // ── THE LONG EPIC ───────────────────────────────────────────────
  {
    id: 'p27',
    title: 'The Never-Ending Fight for the Heart of a Romantica',
    year: 2026,
    mood: 'epic',
    category: 'devotion',
    lines: [
      '"If I let you in, like everyone else, you\'ll end up choking me with your ties"',
      '',
      '"Their words might be prettier than mine, but I hope you see that mine are not filled with lies"',
      '',
      '"The words maybe different, promising love, once the chase is over, they all move on knocking on other\'s doors.',
      'The ones I trusted, the ones I couldn\'t, all those pretty words found another lover, so tell me why, why should I believe yours?"',
      '',
      '"Love is a leap of faith, and I found you as a stroke of pure luck. Something beautiful, something serene, I don\'t understand why anyone would leave your stardust"',
      '',
      '"I\'m perfectly fine as I am, without you, I\'ve learned my lesson. It\'s all magical like a fairytale at first, I\'ve felt the transition from being a princess to unwanted rust"',
      '',
      '"When I think about you, everything feels magical like ice cream. Doesn\'t matter how much you eat, how long you\'ve been eating it, it\'s always the same feeling of butterflies"',
      '',
      '"You\'re living in a dreamland, snap out of it. This is real life and I\'m at peace now without you. Even listening to you is a pain, stop with this wishful thinking before it multiplies"',
      '',
      '"Everything that we have now was a dream once, and I\'ll keep on wishing for you even if it takes thousands of falling suns"',
      '"Come and feel my heart bursting out my chest, come and say it\'s unrealistic and put its dreams to rest"',
      '',
      '"You might be the champion who conquers all, what\'s the point if you\'re fighting for the wrong soul"',
      '"Even if I were to believe your feelings, even if I were to see how deeply you care,',
      'come, feel my heart look at you and not feel a thing, so what\'s the point of this affair?"',
      '',
      '"Are you saying, the moments that we shared,',
      'the laughs,',
      'the cries,',
      'the dances,',
      'the sighs,',
      'Did you really feel nothing, you never dared?"',
      '',
      '"The love you speak of, all that magic, once you\'ve had your fill, turns into cursed voodoo',
      'the jokes,',
      'the fights,',
      'the days,',
      'and the nights,',
      'I already gave you enough pieces of me, what more do you expect me to do?"',
      '',
      '"I know you\'ve been hurt before, you hide it well but I\'ve felt it in your words,',
      'These walls you\'ve built, built them high enough to keep out the toxic herds,',
      'I see you keeping them out standing in your castle bravely',
      'You doubt there\'s no way letting anyone in is going to end safely"',
      '',
      '"I\'ve let people in, people with whom I\'ve felt love, dressed up as the perfect romance,',
      'They loved and let me down all the same, so, why do you think you stand a chance"',
      '',
      '"When it comes to you, I want to be the greediest',
      'I want you to teach me dancing, show me how to move with you, I want you to look in my eyes, shining, as I see the world with yours, see I\'m the cheesiest',
      'When it comes to you, I want to be the fluffiest',
      'I want you to teach me lancing, show me how to fight alongside you, I want you to see me smile as I take on the blows, if I have you by my side, there\'s no way we lose cause I\'ll be the luckiest"',
      '',
      '"I\'ve waited years for someone like you and I\'ll wait for a lot more,',
      'And I\'d want nothing more than to stay forever, if you let me in through the door"',
      '',
      '"This is madness, how is this fair?',
      'You\'re trying to make things out of thin air.',
      'This vision of happiness that you present,',
      'Is something that I don\'t believe I share"',
      '"Just like you can\'t see it fail,',
      'I can\'t believe it\'ll work,',
      'There are rules, impervious to change',
      'Wouldn\'t matter if I went all berserk"',
      '',
      '"If this has reached the heights of madness, I do not regret',
      'the way you\'ve touched my soul it\'s never going to forget"',
      '"People fall in love in mysterious ways,',
      'Every day, someone breaks norms that were set in stone,',
      'Just because we didn\'t get our right place right time',
      'Instead of crying about it and moving on, I\'d rather try to create my own"',
      '',
      '"You\'re pushing it too far,',
      'stop this,',
      'put down your pen',
      'Whatever you\'re trying to do is not working,',
      'My feelings for you are not changing',
      'I know I\'ve clearly expressed it',
      'I don\'t know how this constant chance makes sense to you',
      'When all it does is make you look desperate"',
      '',
      '"You\'re right,',
      'I know,',
      'it\'s sad but I know you\'re right',
      'It makes it even harder because I understand it all',
      'I know I\'m selfish in my pursuit, but aren\'t we all?',
      'Desperation is just another word for those who\'ve seen how love looks',
      'How would you stop yourself from doing everything you could',
      'If you found the one you always looked for in all those books"',
      '',
      '"Seems like we\'re at an impasse, nothing I say seems to change your mind',
      'I tried talking some sense but now none of my remaining options are as kind"',
      '',
      '"That\'s alright, undoubtedly fair.',
      'If I get burned by the fire you radiate to protect yourself, I am to blame',
      'Sunshine in human form, somehow I know I\'ll be fine standing in your flame"',
      '',
      '"......"',
      '"It\'s fine, it\'s not like I\'m going to kidnap you"',
      '"....."',
      '"Hellow, is anyone home? Trick or Treat?',
      'Staring with \'a\' from the book of tricks, now that\'s a spooky treat"',
      '',
      '"Did you hear they started another war,',
      'Shraddha Kapoor apparently bought a new car',
      'I found a few good places that\'d be fun you know',
      'I asked the ghosts and they said it\'d be okay if we go"',
      '',
      '"I can\'t help but say, that your anger makes you even more desirable',
      'That picture you posted, the blessings of heaven shining on you is undeniable"',
      '',
      '"Now this is tough, even for me, you see',
      'I had all and then most of you, some and now none of you',
      'Take me back to the night we met',
      'I don\'t know what I\'m supposed to do, haunted by the ghost of you',
      'Can we go back to the night we met"',
      '"Standing there like a ghost, shaking from the rain',
      'You\'ll open up the door and say \'Are you insane?\'',
      '\'It\'s been a long few months\'',
      'And I couldn\'t tell you what I want',
      'Is that how it works?',
      'Is that how I get the girl?',
      'Because',
      'I want you for worse or for better',
      'I would wait forever and ever',
      'Broke your heart, I\'ll put it back together',
      'I would wait forever and ever"',
      '',
      '"Boy did I ruin those pieces of art, mixing their feelings with some from my own heart',
      'Something is better than nothing I remember they used to say and I don\'t want to give up on you',
      'I hope it makes you laugh even if it doesn\'t help me get on the way back to you"',
      '',
      '"I guess it must be pretty funny then, good to know that I still have my funny bone',
      'I\'ll be back with a new plan for making progress in the territories unknown"',
      '',
      '"From looking at you and thinking about the galaxies',
      'To looking at the stars and thinking about you',
      'I wonder if angels open up skies, clear the weather',
      'Just to see how beautifully you hold it all in together',
      'I wouldn\'t blame you for thinking',
      'how does that even make sense',
      'Warmth of the stars, eyes that have rained',
      'the conflicts inside you look so intense',
      'If you let it out, you could burn this world',
      'I wonder if it\'s too complex for me to understand',
      'But when I look at you everything seems to make sense',
      'Every time I think about touching you, I feel breathless',
      'Pulling me in, closer, this love for you feels endless',
      'Too scared or maybe just idiots, no offense',
      'I feel sorry for those who had the chance but couldn\'t see',
      'For those who had the chance but couldn\'t be"',
      '',
      '"Swordfights to loving daisies',
      'Aren\'t we, the same kind of crazies',
      'Duty calls to beer cases',
      'Bitchin about shitty pay raises',
      'Cold stares to unicorns and rainbows',
      'It kills me, for not being able to see your cosmic phases',
      'To the ones who\'ve raised you',
      'I have nothing but praises',
      'For the queen who rules my world',
      'I present these lame but original posies"',
      '',
      '"Oh come on, don\'t be shy, (chori chupe) send me a wink',
      'This thread of communication is getting way out of sync"',
      '',
      '"Walking in the night under the cold, bright moonlight,',
      'Think I saw you for a moment and lost sight',
      'Relentless eyes, moving all over, hoping to find the hint of you',
      'Running wild, like a stoner, just to get a glimpse of you',
      'With every breath of air that this body manages to sip up,',
      'The feeling of your presence is like a drug and this heart refuses to give up',
      'Running down the cold streets, your absence feels colder',
      'Twinkling stars, dwindling lights, if only it was your hand, reaching me over my shoulder',
      '',
      'Dancing at the gates of death, you\'re the touch of life',
      'How often you see a smile that\'s not hiding a knife',
      'Everyone who sees otherwise are either blind or out of their mind',
      'It took me some time to finally understand',
      'In a time where mind games are in demand',
      'The truth behind your words, how can one call honesty unkind',
      '',
      'Everyday I think about how can I be of any help to you',
      'Figuring out how to be better than good enough to deserve you',
      'Maybe I\'m delusional',
      'Idealistic, juvenile',
      'I tried to pretend otherwise but couldn\'t persist',
      'Someone better than you could ever exist',
      'I\'d be the stone you need to step on to jump over',
      'It doesn\'t matter what you think of me, it\'s an honor, to be your lover"',
      '',
      '"You don\'t know when to stop do you?',
      'What will you do if I never see it, the way you do?',
      'You\'re playing with your life, I hope you realize that there\'s no reset',
      'Choosing not to move on might be a choice you\'d forever regret"',
      '',
      '"Isn\'t that a good thing? Maybe I\'m an idiot',
      'Every thought every beat feels the same, you\'re undoubtedly the best',
      'Following my heart has never led me to regret, maybe I\'m privileged',
      'Ever since I laid my eyes on you, you\'ve always outshined the rest',
      'Everyone who saw you and moved on',
      'all deserve my pity',
      'I think I\'ll be in love forever',
      'never was there ever a girl so pretty',
      'Lock me up and throw away the key, maybe I\'m crazy',
      'You\'re like the ocean to my pirate, like space to my astronaut, like physics to my scientist and so much more',
      'A living, breathing dream, you\'re what\'s right with this world, loving you is an honor, it\'s not about winning or losing you anymore"',
      '',
      '"Why do you choose to be like this?"',
      '"Some things we don\'t get to choose"',
      '"Even if it leads to abyss?"',
      '"Even if it leads to abyss."',
      '',
      '"Why?"',
      '"Why??"',
    ],
  },
];

const POEM_CATEGORIES: PoemCategory[] = ['all', 'desire', 'longing', 'devotion', 'fire', 'darkness'];

const POEM_CATEGORY_LABELS: Record<PoemCategory, string> = {
  all: 'All',
  desire: 'Desire',
  longing: 'Longing',
  devotion: 'Devotion',
  fire: 'Fire',
  darkness: 'Darkness',
};

// A poem is "long" if it has more than 24 lines
const PREVIEW_LINE_COUNT = 10;
function isLongPoem(poem: Poem): boolean {
  return poem.lines.filter(l => l !== '').length > 24;
}

// ─── CURSOR ────────────────────────────────────────────────────────
function initCursor(): void {
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  const ring = document.createElement('div');
  ring.id = 'cursor-ring';
  document.body.append(cursor, ring);

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateRing(): void {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .photo-item, .filter-btn, .poem-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ─── LOADER ────────────────────────────────────────────────────────
function initLoader(): void {
  const loader = document.getElementById('loader')!;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1400);
  });
}

// ─── INTERSECTION OBSERVER ─────────────────────────────────────────
function initReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.photo-item').forEach((el, i) => {
    (el as HTMLElement).style.transitionDelay = `${(i % 6) * 0.06}s`;
    observer.observe(el);
  });
}

// ─── GALLERY ───────────────────────────────────────────────────────
let lightboxIndex = 0;
let filteredPhotos: Photo[] = [...PHOTOS];

function buildGallery(): void {
  const grid = document.querySelector('.photo-grid')!;
  grid.innerHTML = '';

  PHOTOS.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = `photo-item ${photo.orientation}`;
    item.dataset.category = photo.category;
    item.dataset.index = String(index);

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = 'lazy';
    img.decoding = 'async';

    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';

    if (photo.title) {
      const title = document.createElement('div');
      title.className = 'photo-title';
      title.textContent = photo.title;
      overlay.appendChild(title);
    }

    const meta = document.createElement('div');
    meta.className = 'photo-meta';
    meta.textContent = [photo.category, photo.year].filter(Boolean).join(' — ');
    overlay.appendChild(meta);

    item.append(img, overlay);
    item.addEventListener('click', () => openLightbox(index));
    grid.appendChild(item);
  });
}

function applyFilter(category: Category): void {
  filteredPhotos = category === 'all' ? [...PHOTOS] : PHOTOS.filter(p => p.category === category);

  document.querySelectorAll('.photo-item').forEach(el => {
    const item = el as HTMLElement;
    const cat = item.dataset.category as Category;
    if (category === 'all' || cat === category) {
      item.classList.remove('hidden-filter');
    } else {
      item.classList.add('hidden-filter');
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', (btn as HTMLElement).dataset.filter === category);
  });
}

function buildFilterBar(): void {
  const bar = document.getElementById('filter-bar')!;
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'all' ? ' active' : '');
    btn.dataset.filter = cat;
    btn.innerHTML = `<span>${cat}</span>`;
    btn.addEventListener('click', () => applyFilter(cat));
    bar.appendChild(btn);
  });
}

// ─── LIGHTBOX ──────────────────────────────────────────────────────
function openLightbox(globalIndex: number): void {
  const lightbox = document.getElementById('lightbox')!;
  lightboxIndex = filteredPhotos.findIndex(p => p.id === PHOTOS[globalIndex].id);
  if (lightboxIndex === -1) lightboxIndex = 0;
  showLightboxPhoto();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(): void {
  const lightbox = document.getElementById('lightbox')!;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showLightboxPhoto(): void {
  const photo = filteredPhotos[lightboxIndex];
  if (!photo) return;

  const img = document.getElementById('lightbox-img') as HTMLImageElement;
  const title = document.querySelector('.lightbox-caption-title')!;
  const meta = document.querySelector('.lightbox-caption-meta')!;
  const counter = document.querySelector('.lightbox-counter')!;

  img.style.opacity = '0';
  img.style.transform = 'scale(0.97)';

  setTimeout(() => {
    img.src = photo.src;
    img.alt = photo.alt;
    title.textContent = photo.title ?? '';
    meta.textContent = [photo.category, photo.year].filter(Boolean).join(' — ');
    counter.textContent = `${lightboxIndex + 1} / ${filteredPhotos.length}`;

    img.onload = () => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    };
  }, 100);

  img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

function lightboxNav(dir: 1 | -1): void {
  lightboxIndex = (lightboxIndex + dir + filteredPhotos.length) % filteredPhotos.length;
  showLightboxPhoto();
}

function buildLightbox(): void {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" id="lb-close" aria-label="Close">✕</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">‹</button>
      <div class="lightbox-img-wrap">
        <img id="lightbox-img" src="" alt="" />
        <div class="lightbox-caption">
          <span class="lightbox-caption-title"></span>
          <span class="lightbox-caption-meta"></span>
        </div>
      </div>
      <button class="lightbox-nav lightbox-next" aria-label="Next">›</button>
      <span class="lightbox-counter"></span>
    </div>
  `;
  document.body.appendChild(lb);

  document.getElementById('lb-close')!.addEventListener('click', closeLightbox);
  lb.querySelector('.lightbox-prev')!.addEventListener('click', () => lightboxNav(-1));
  lb.querySelector('.lightbox-next')!.addEventListener('click', () => lightboxNav(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });

  // Touch swipe
  let touchStartX = 0;
  lb.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  lb.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) lightboxNav(diff > 0 ? 1 : -1);
  });
}

// ─── POETRY SECTION ────────────────────────────────────────────────
let activePoemCategory: PoemCategory = 'all';

function renderPoemLines(lines: string[]): string {
  return lines.map(line =>
    line === '' ? '<br>' : `<p>${line}</p>`
  ).join('');
}

function buildPoetrySection(): void {
  const section = document.getElementById('poetry-section')!;
  section.innerHTML = '';

  const filtered = activePoemCategory === 'all'
    ? POEMS
    : POEMS.filter(p => p.category === activePoemCategory);

  filtered.forEach((poem, i) => {
    const long = isLongPoem(poem);

    const card = document.createElement('article');
    card.className = 'poem-card' + (long ? ' poem-card--long' : '');
    card.dataset.id = poem.id;
    card.dataset.category = poem.category;
    card.style.animationDelay = `${i * 0.07}s`;

    const header = document.createElement('div');
    header.className = 'poem-header';
    header.innerHTML = `
      <h3 class="poem-title">${poem.title}</h3>
      <div class="poem-meta">
        <span class="poem-year">${poem.year}</span>
        <span class="poem-mood">${poem.mood}</span>
        <span class="poem-category-tag">${POEM_CATEGORY_LABELS[poem.category]}</span>
      </div>
    `;

    const body = document.createElement('div');
    body.className = 'poem-body';

    if (long) {
      // Show only first PREVIEW_LINE_COUNT non-empty lines as preview
      const previewLines: string[] = [];
      let count = 0;
      for (const line of poem.lines) {
        previewLines.push(line);
        if (line !== '') count++;
        if (count >= PREVIEW_LINE_COUNT) break;
      }

      const preview = document.createElement('div');
      preview.className = 'poem-preview';
      preview.innerHTML = renderPoemLines(previewLines);

      const fade = document.createElement('div');
      fade.className = 'poem-fade';

      const full = document.createElement('div');
      full.className = 'poem-full';
      full.innerHTML = renderPoemLines(poem.lines);
      full.hidden = true;

      const expandBtn = document.createElement('button');
      expandBtn.className = 'poem-expand-btn';
      expandBtn.innerHTML = `<span class="poem-expand-label">Read full poem</span>
        <svg class="poem-expand-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6,9 12,15 18,9"/>
        </svg>`;

      expandBtn.addEventListener('click', () => {
        const expanded = card.classList.toggle('poem-card--expanded');
        preview.hidden = expanded;
        fade.hidden = expanded;
        full.hidden = !expanded;
        expandBtn.querySelector('.poem-expand-label')!.textContent = expanded ? 'Collapse' : 'Read full poem';
        expandBtn.querySelector('.poem-expand-icon')!.classList.toggle('rotated', expanded);
      });

      body.append(preview, fade, full, expandBtn);
    } else {
      body.innerHTML = renderPoemLines(poem.lines);
    }

    card.append(header, body);
    section.appendChild(card);
  });
}

function applyPoemFilter(category: PoemCategory): void {
  activePoemCategory = category;

  document.querySelectorAll('.poem-filter-btn').forEach(btn => {
    btn.classList.toggle('active', (btn as HTMLElement).dataset.filter === category);
  });

  buildPoetrySection();
}

function buildPoetryFilterBar(): void {
  const bar = document.getElementById('poetry-filter-bar')!;
  bar.innerHTML = '';
  POEM_CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn poem-filter-btn' + (cat === 'all' ? ' active' : '');
    btn.dataset.filter = cat;
    btn.innerHTML = `<span>${POEM_CATEGORY_LABELS[cat]}</span>`;
    btn.addEventListener('click', () => applyPoemFilter(cat));
    bar.appendChild(btn);
  });
}

// ─── MUSIC PLAYER ──────────────────────────────────────────────────
function buildMusicPlayer(): void {
  const player = document.createElement('div');
  player.id = 'music-player';
  player.innerHTML = `
    <div class="music-inner">
      <div class="music-info">
        <div class="music-pulse">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="music-text">
          <span class="music-track">Ambient — Dark String</span>
          <span class="music-status">Paused</span>
        </div>
      </div>
      <button class="music-btn" id="music-toggle" aria-label="Play ambient music">
        <svg class="icon-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21"/>
        </svg>
        <svg class="icon-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:none">
          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
        </svg>
      </button>
      <div class="music-volume">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        <input type="range" id="music-volume" min="0" max="1" step="0.05" value="0.4" aria-label="Volume">
      </div>
    </div>
  `;
  document.body.appendChild(player);

  let audioCtx: AudioContext | null = null;
  let masterGain: GainNode | null = null;
  let oscillators: OscillatorNode[] = [];
  let isPlaying = false;

  const toggle = document.getElementById('music-toggle')!;
  const statusEl = player.querySelector('.music-status')!;
  const playIcon = toggle.querySelector('.icon-play') as HTMLElement;
  const pauseIcon = toggle.querySelector('.icon-pause') as HTMLElement;
  const volumeSlider = document.getElementById('music-volume') as HTMLInputElement;
  const bars = player.querySelectorAll('.music-pulse span');

  function startAmbient(): void {
    audioCtx = new AudioContext();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = parseFloat(volumeSlider.value);
    masterGain.connect(audioCtx.destination);

    const freqs = [55, 82.5, 110, 165, 220, 330];
    const detunes = [0, -4, 3, -2, 5, -3];

    freqs.forEach((freq, i) => {
      const osc = audioCtx!.createOscillator();
      const oscGain = audioCtx!.createGain();
      const filter = audioCtx!.createBiquadFilter();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      osc.detune.value = detunes[i];

      filter.type = 'lowpass';
      filter.frequency.value = 800;
      filter.Q.value = 1;

      oscGain.gain.value = 0.08 / (i + 1);

      const lfo = audioCtx!.createOscillator();
      const lfoGain = audioCtx!.createGain();
      lfo.frequency.value = 0.05 + i * 0.02;
      lfoGain.gain.value = 0.03;
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfo.start();

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterGain!);
      osc.start();
      oscillators.push(osc);
    });
  }

  function stopAmbient(): void {
    oscillators.forEach(o => { try { o.stop(); } catch(_) {} });
    oscillators = [];
    masterGain?.disconnect();
    audioCtx?.close();
    audioCtx = null;
    masterGain = null;
  }

  toggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startAmbient();
      statusEl.textContent = 'Playing';
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      player.classList.add('playing');
      bars.forEach((b, i) => {
        (b as HTMLElement).style.animationPlayState = 'running';
        (b as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      });
    } else {
      stopAmbient();
      statusEl.textContent = 'Paused';
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      player.classList.remove('playing');
      bars.forEach(b => {
        (b as HTMLElement).style.animationPlayState = 'paused';
      });
    }
  });

  volumeSlider.addEventListener('input', () => {
    if (masterGain) masterGain.gain.value = parseFloat(volumeSlider.value);
  });
}

// ─── HTML STRUCTURE ────────────────────────────────────────────────
function buildHTML(): void {
  document.getElementById('app')!.innerHTML = `
    <!-- LOADER -->
    <div id="loader">
      <div class="loader-name">TJ</div>
      <div class="loader-line"></div>
    </div>

    <!-- NAV -->
    <nav>
      <div class="nav-logo">T<span>J</span></div>
      <ul class="nav-links">
        <li><a href="#photography">Photography</a></li>
        <li><a href="#poetry">Poetry</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="https://instagram.com/the_dark_string" target="_blank" rel="noopener">Instagram</a></li>
      </ul>
    </nav>

    <!-- HERO -->
    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid-lines"></div>
      <div class="hero-center">
        <div class="hero-eyebrow">Photography &amp; Poetry</div>
        <h1 class="hero-title">TJ</h1>
        <div class="hero-sub-text">
          <p>Capturing the spaces between light and shadow,<br>the moments between silence and sound.</p>
        </div>
        <div class="hero-divider"></div>
        <div class="hero-tagline">The Dark String</div>
      </div>
      <div class="hero-scroll-hint">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span>Photography</span><span class="accent">—</span>
        <span>Poetry</span><span class="accent">—</span>
        <span>Desire</span><span class="accent">—</span>
        <span>Longing</span><span class="accent">—</span>
        <span>Devotion</span><span class="accent">—</span>
        <span>Fire</span><span class="accent">—</span>
        <span>Darkness</span><span class="accent">—</span>
        <span>@the_dark_string</span><span class="accent">—</span>
        <span>Photography</span><span class="accent">—</span>
        <span>Poetry</span><span class="accent">—</span>
        <span>Desire</span><span class="accent">—</span>
        <span>Longing</span><span class="accent">—</span>
        <span>Devotion</span><span class="accent">—</span>
        <span>Fire</span><span class="accent">—</span>
        <span>Darkness</span><span class="accent">—</span>
        <span>@the_dark_string</span><span class="accent">—</span>
      </div>
    </div>

    <!-- PHOTOGRAPHY -->
    <section id="photography">
      <div class="section-header">
        <div>
          <span class="section-label">Visual Work</span>
          <h2 class="section-title">Photography</h2>
        </div>
      </div>
      <div id="filter-bar"></div>
      <div id="gallery">
        <div class="photo-grid"></div>
      </div>
    </section>

    <!-- POETRY -->
    <section id="poetry">
      <div class="section-header">
        <div>
          <span class="section-label">Written Work</span>
          <h2 class="section-title">Poetry</h2>
        </div>
        <p class="section-desc">Words from the same dark string.</p>
      </div>
      <div id="poetry-filter-bar"></div>
      <div id="poetry-section" class="poetry-grid"></div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <div class="about-text">
        <h2>About<br>the Artist</h2>
        <p>TJ is a photographer and poet drawn to the edges — the uncertain light of dusk, the texture of forgotten spaces, the gaze that holds more than it reveals.</p>
        <p>Working across portrait, street, and documentary forms, and through verse spanning desire, longing, devotion, fire and darkness — the work lives where mood meets moment.</p>
        <div class="about-stats">
          <div>
            <span class="stat-num">${PHOTOS.length}</span>
            <span class="stat-label">Photos</span>
          </div>
          <div>
            <span class="stat-num">${POEMS.length}</span>
            <span class="stat-label">Poems</span>
          </div>
          <div>
            <span class="stat-num">${Math.max(...PHOTOS.map(p => p.year ?? 2024)) - Math.min(...PHOTOS.map(p => p.year ?? 2024)) + 1}+</span>
            <span class="stat-label">Years Active</span>
          </div>
        </div>
        <a href="https://instagram.com/the_dark_string" target="_blank" rel="noopener" class="instagram-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          @the_dark_string
        </a>
      </div>
      <div class="about-visual">
        <div class="about-img-frame">
          <div class="about-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
            <span>Add your photo here</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="footer-logo">TJ</div>
      <span class="footer-copy">© ${new Date().getFullYear()} TJ. All rights reserved.</span>
      <a href="https://instagram.com/the_dark_string" target="_blank" rel="noopener" class="footer-ig">
        @the_dark_string
      </a>
    </footer>
  `;
}

// ─── INIT ──────────────────────────────────────────────────────────
function init(): void {
  buildHTML();
  buildLightbox();
  buildFilterBar();
  buildGallery();
  buildPoetryFilterBar();
  buildPoetrySection();
  buildMusicPlayer();
  initLoader();
  if (!('ontouchstart' in window) && window.matchMedia('(hover: hover)').matches) {
    initCursor();
  }

  requestAnimationFrame(() => {
    initReveal();
  });
}

init();
