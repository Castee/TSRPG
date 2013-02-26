specialName = ["Brute","Tank","Genius","Ninja","Sensitive",
"Fertilizer","Size matters","Conservative","Greed is good","Curse or Gift?",
"Observant","Turbolism","Energizer","Clever","Comedian"];

specialDesc = [];
specialDesc[0] = "You start with +15 Strength.";
specialDesc[1] = "You start with +15 Stamina.";
specialDesc[2] = "You start with +15 Intelligence.";
specialDesc[3] = "You start with +15 Agility.";
specialDesc[4] = "You start with +15 Libido.";
specialDesc[5] = "Your chance to impregnate and/or get impregnated is increased by 50%.";
specialDesc[6] = "Your genital(s) is <i>more</i> prone to grow from food, potions and events.";
specialDesc[7] = "Your genital(s) is <i>less</i> prone to grow from food, potions and events.";
specialDesc[8] = "Prices are 5% lower. You sell for 5% more.";
specialDesc[9] = "Events, good and bad, are more prone to happen.";
specialDesc[10] = "Increased chance of finding more and rarer items and money.";
specialDesc[11] = "The potency of food and potion is increased by 25%.";
specialDesc[12] = "Your energy is increased by 20.";
specialDesc[13] = "Receive 10% more experience.";
specialDesc[14] = "People are 25% more willing to help you. 10% increased chance of escaping combat.";

story = [];
story[0] = "The muffled sound of guards desperately clinging onto what little was left to defend of the castle, could be heard from the throne room.<br/>It was hard to tell at first whether or not to any success.<br/>But it soon became apparent: the attackers were getting closer.<br/>The battle grew louder and louder as the attacking forces advanced towards the throne room.<br/>A final scream marked the end of the assault.<br/>The king rose from his throne, wearily as an old man, even though he was but 33 years of age.<br/>&quot;It is time.&quot; He said, in a low and sober voice, his eyes fixed at the large copper doors at the opposite side of the throne room.<br/>The council members looked terrified, had they not all stood up most of them would surely have been mistaken as corpses.<br/>The doors burst open.<br/>Enemy soldiers rushed through the gate, filling the room, leaving a path from the door all the way to the throne.<br/>A man appeared in the door opening, walking slowly towards the king.<br/>&quot;I warned you, Edgar.&quot; the man said. The king slowly walked towards the man.<br/>He recognized the man standing in front of him.<br/>Indeed it had been he who lead the coup, ultimately leading to the man’s banishment.<br/>The man, Horace, had pale, emotionless eyes, his mouth was but a thin line and the skin was like parchment.<br/>Edgar kneeled in front of him; it was over, he had tried to stop Horace, but it had proved fruitless.<br/>&quot;I surrender so that my subjects may be spared. Honor this, as I honored your last plea.&quot; he said in a clear voice, clearly prepared for what was to come.<br/>Horace drew his sword, held it above the King’s head.<br/>&quot;For the crimes you have committed against this kingdom, I hereby sentence you to death!&quot; Horace said out loud.<br/>He struck the sword down with all the strenght he could muster, it entered the neck and went out the throat.<br/>Blood spewed out, soon Edgar was lying in a pool of his own blood. It was over.The council men looked even more terrified by this point.<br/>&quot;Kill them&quot; Horace said, and it was so.<br/>An era that had lasted but 11 years, came to an abrupt end.<br/>";

origin = [];
origin[0] = "You were born and raised in a farm. You were made to help out from a young age, which has made you more physically fit.";
origin[1] = "You were born and raised in the lower tier of the city. Living in the city has taught you to fend for yourself, be it through speech or avoiding enemies.";
origin[2] = "You were born and raised in a village. Your growing up was a mixture of play and work.";
origin[3] = "You were captured as an infant and raised by bandits. Your life has been a tough one, serving bandits in your younger age and then joined them in their raids at the age of 15. ";
origin[4] = "You born and raised in a nomadic family, traveling from place to place. Travel has become your best friend and doesn't tire you down as much as it does regular people.";
origin[5] = "Your mother died giving birth to you, you were given to an orphanage as no one knows who the father was. You lived on thievery, until one day you got caught and was sentenced to death. Luckily for you thieves are not only good at getting in where they're not supposed to be, but also to get out.";
origin[6] = "You were left for dead in a forest a long way from home at a young age. Miraculously you managed to survive, at first at a bare minimum, but as time passed you've become an expert in surviving on your own.";

origin_bonus = [];
origin_bonus[0] = "str:20";
origin_bonus[1] = "agi:10,cha:10";
origin_bonus[2] = "str:10,agi:10";
origin_bonus[3] = "str:10,sta:10";
origin_bonus[4] = "ene:20";
origin_bonus[5] = "agi:20";
origin_bonus[6] = "str:20";

startingtext = []; //Different depending on what origin you choose
startingtext[0] = "Reaching the age of 18 you decided, for whatever reason, to leave the farm and live your own life. Your journey starts at the farm you were born.";

GI_stat_name = [];
GI_stat_name[0] = "Wrath"; //Strength
GI_stat_name[1] = "the Bear"; //Stamina
GI_stat_name[2] = "agility"; //Agility
GI_stat_name[3] = "charisma"; //Charisma
GI_stat_name[4] = "intelligence"; //Intelligence
GI_stat_name[5] = "Pain"; //Damage

GI_weapon_names = [];
GI_weapon_names[0] = "Sword";
GI_weapon_names[1] = "Dagger";
GI_weapon_names[2] = "Axe";
GI_weapon_names[3] = "Halberd";
GI_weapon_names[4] = "Spear";
GI_weapon_names[5] = "Gladius";

GI_chest_names = [];
GI_chest_names[0] = "Tunic";
GI_chest_names[1] = "Doublet";
GI_chest_names[2] = "Coat";
GI_chest_names[3] = "Chain Mail";
GI_chest_names[4] = "Cuirass";
GI_chest_names[5] = "Plate Mail";
GI_chest_names[6] = "Harness";
GI_chest_names[7] = "Jacket";

GI_boots_names = [];
GI_boots_names[0] = "Sandals";
GI_boots_names[1] = "Shoes";
GI_boots_names[2] = "Boots";
GI_boots_names[3] = "Chain Boots";
GI_boots_names[4] = "Sabatons";
GI_boots_names[5] = "Greaves";
GI_boots_names[6] = "Treads";
GI_boots_names[7] = "Spurs";

GI_helm_names = [];
GI_helm_names[0] = "Hood";
GI_helm_names[1] = "Coif";
GI_helm_names[2] = "Cap";
GI_helm_names[3] = "Crown";
GI_helm_names[4] = "Helmet";
GI_helm_names[5] = "Mask";
GI_helm_names[6] = "Hat";
GI_helm_names[7] = "Bandana";

GI_gloves_names = [];
GI_gloves_names[0] = "Gloves";
GI_gloves_names[1] = "Hide Gloves";
GI_gloves_names[2] = "Chain Gloves";
GI_gloves_names[3] = "Plate Gloves";
GI_gloves_names[4] = "Gauntlets";
GI_gloves_names[5] = "Grips";
GI_gloves_names[6] = "Handwraps";

GI_rarity_names = ["Broken", "Cracked", "Damaged", "Rusty", "Poor", "Faulty", "Inferior", "Cheap", "Common", "Good", "Improved", "Superior",
"Fine", "Elegant", "Qualitative", "Masterful", "Perfect", "Heroic", "Epic", "Legendary", "Blessed", "Angelic", "Heavenly"];

location_name = [];
location_name[0] = "Grassland";
location_name[1] = "Desert";
location_name[2] = "Marsh";
location_name[3] = "Mountains";
location_name[4] = "Mountain Valley";
location_name[5] = "Beach";
location_name[6] = "Evergreen Forest";
location_name[7] = "Forest";
location_name[8] = "Plains";
location_name[9] = "Explore";
location_name[10] = "City";

location_place_master = [];
location_place_master[10] = "1";

location_desc = [];
location_desc[0] = "Grass reach as far as your eyes can see.";
location_desc[1] = "Grass reach as far as your eyes can see.";
location_desc[2] = "As you enter the wetland a smell of decay hits you like a brick wall. This is not a friendly place.";
location_desc[3] = "Grass reach as far as your eyes can see.";
location_desc[4] = "Grass reach as far as your eyes can see.";
location_desc[5] = "Grass reach as far as your eyes can see.";
location_desc[6] = "Grass reach as far as your eyes can see.";
location_desc[7] = "Grass reach as far as your eyes can see.";
location_desc[8] = "Grass reach as far as your eyes can see.";
location_desc[9] = "You explore your surroundings.";

location_threat = [];
location_threat[0] = 10;
location_threat[1] = 10;
location_threat[2] = 20;
location_threat[3] = 40;
location_threat[4] = 10;
location_threat[5] = 5;
location_threat[6] = 8;
location_threat[7] = 6;
location_threat[8] = 10;
location_threat[9] = 1;
location_threat[10] = 0;

location_discoverable = []; /* Describe what locations can be discovered by traveling to what location */
location_discoverable[0] = "2,8";
location_discoverable[1] = "5";
location_discoverable[2] = "1";
location_discoverable[7] = "6";
location_discoverable[9] = "0,1,3,4,7";

/* If set, will decrease or increase the chance in percent of discovery. */
location_rarity = []; 
location_rarity[1] = 3;

location_spawn = [];
location_spawn[0] = "0,2";
location_spawn[1] = "0,2";
location_spawn[2] = "0,2";
location_spawn[3] = "0,2";
location_spawn[4] = "0,2";
location_spawn[5] = "0,2";
location_spawn[6] = "0,2";
location_spawn[7] = "0,2";
location_spawn[8] = "0,2";
location_spawn[9] = "0,2";

place_master_places = [];
place_master_places[0] = "0";

place_name = [];
place_name[0] = "Castle";

building_name = [];
building_name[0] = "Tent";
building_name[1] = "Cave";
building_name[2] = "Shed";
building_name[3] = "Small Cottage";
building_name[4] = "Cottage";
building_name[5] = "Rundown Apartment";
building_name[6] = "Apartment";
building_name[7] = "Log House";
building_name[8] = "Small House";
building_name[9] = "House";
building_name[10] = "Large House";
building_name[11] = "Small Farm";
building_name[12] = "Farm";
building_name[13] = "Large Farm";
building_name[14] = "Small Villa";
building_name[15] = "Villa";
building_name[16] = "Large Villa";
building_name[17] = "Mansion";
building_name[18] = "Manor";
building_name[19] = "Large Manor";
building_name[20] = "Small Castle";
building_name[21] = "Castle";
building_name[22] = "Large Castle";

building_price = []; /* Declare price if it deviates from standard price calculation */
building_price[0] = 0;
building_price[1] = 0;

building_unlock = []; /* 1 = Dwelling is locked and not showed in list. 2 = Dwelling is locked BUT showed in list. */
building_unlock[0] = 2;
building_unlock[1] = 1;
building_unlock[5] = 1;
building_unlock[6] = 1;
building_unlock[7] = 1;
building_unlock[8] = 1;
building_unlock[9] = 1;
building_unlock[10] = 1;
building_unlock[11] = 1;
building_unlock[12] = 1;
building_unlock[13] = 1;
building_unlock[14] = 1;
building_unlock[15] = 1;
building_unlock[16] = 1;
building_unlock[17] = 1;
building_unlock[18] = 1;
building_unlock[19] = 1;
building_unlock[20] = 1;
building_unlock[21] = 1;
building_unlock[22] = 1;

popup_preset = [];
popup_preset[1] = "Not enough coin|You do not have enough coin!";
popup_preset[2] = "Exhausted|You are exhausted. You cannot preform any action requiring energy. Sleep or consume an energy potion to regain your energy.";

vendor_name = [];
vendor_name[0] = "Alberich";

vendor_items = [];
vendor_items[0] = [1];

vendor_dialogue = [];
vendor_dialogue[0] = "As you enter the store, a low, yet audible, voice says \"Ah, welcome, I've been expecting someone like you. Have a look around; but don't touch anything!\".";

enemy_name = [];
enemy_name[0] = "Goblin";
enemy_name[1] = "Bandit";
enemy_name[2] = "Raider";
enemy_name[3] = "Orc";
enemy_name[4] = "Centaur";
enemy_name[5] = "Ghost";
enemy_name[6] = "Spirit";
enemy_name[7] = "Ghast";
enemy_name[8] = "Kobold";
enemy_name[9] = "Witch";
enemy_name[10] = "Wizard";
enemy_name[11] = "Giant";
enemy_name[12] = "Minotaur";
enemy_name[13] = "Tentacle Monster";
enemy_name[14] = "Demon";
enemy_name[15] = "Succubus";
enemy_name[16] = "Wraith";
enemy_name[17] = "Goo";
enemy_name[18] = "Pirate";
enemy_name[19] = "Archer";
enemy_name[20] = "Skeleton";
enemy_name[21] = "Undead";
enemy_name[22] = "Spider";
enemy_name[23] = "Giant Spider";

enemy_basedmg = [];
enemy_basedmg[0] = 0.9;
enemy_basedmg[1] = 1.2;
enemy_basedmg[2] = 0.8;
enemy_basedmg[3] = 0.6;
enemy_basedmg[4] = 0.6;
enemy_basedmg[5] = 1.3;
enemy_basedmg[6] = 1.3;
enemy_basedmg[7] = 1.1;
enemy_basedmg[8] = 1;
enemy_basedmg[9] = 1.5;
enemy_basedmg[10] = 1.5;
enemy_basedmg[11] = 1.8;
enemy_basedmg[12] = 1.8;
enemy_basedmg[13] = 2;
enemy_basedmg[14] = 1.5;
enemy_basedmg[15] = 1.5;
enemy_basedmg[16] = 1.2;
enemy_basedmg[17] = 1.2;
enemy_basedmg[18] = 1.5;
enemy_basedmg[19] = 1.4;
enemy_basedmg[20] = 1.4;
enemy_basedmg[21] = 1.4;
enemy_basedmg[22] = 1.4;
enemy_basedmg[23] = 2;

enemy_basehp = [];
enemy_basehp[0] = 15;
enemy_basehp[1] = 20;
enemy_basehp[2] = 20;
enemy_basehp[3] = 20;
enemy_basehp[4] = 20;
enemy_basehp[5] = 20;
enemy_basehp[6] = 20;
enemy_basehp[7] = 25;
enemy_basehp[8] = 20;
enemy_basehp[9] = 20;
enemy_basehp[10] = 20;
enemy_basehp[11] = 20;
enemy_basehp[12] = 20;
enemy_basehp[13] = 20;
enemy_basehp[14] = 20;
enemy_basehp[15] = 20;
enemy_basehp[16] = 20;
enemy_basehp[17] = 20;
enemy_basehp[18] = 20;
enemy_basehp[19] = 20;
enemy_basehp[20] = 20;
enemy_basehp[21] = 20;
enemy_basehp[22] = 20;
enemy_basehp[23] = 20;
/* Unlisted enemies will have a randomly assigned gender. So only specify enemies with a certain gender, such as witch or wizard. */
/* 1 male, 2 female, 3 herm, 4 ambiguous/none */
enemy_gender = [];
enemy_gender[9] = 2;
enemy_gender[10] = 1;
enemy_gender[13] = 4;
enemy_gender[17] = 4;
enemy_gender[20] = 4;

enemy_loot = [];

gender_name = [];
gender_name[1] = "Male";
gender_name[2] = "Female";
gender_name[3] = "Herm";
gender_name[4] = "";