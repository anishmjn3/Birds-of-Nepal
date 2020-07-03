
const familyname = {
    // GALLIFORMES
    Phasianidae: "Phasianidae",
    // ANSERIFORMES
    Anatidae: "Anatidae",
    // PODICIPEDIFORMES
    Podicipedidae: "Podicipedidae",
    // PHOENICOPTERIFORMES
    Phoenicopteridae: "Phoenicopteridae",
    // COLUMBIFORMES
    Columbidae: "Columbidae",
    // PTEROCLIFORMES
    Pteroclidae: "Pteroclidae",
    // CAPRIMULGIFORMES
    Caprimulgidae: "Caprimulgidae",
    Hemiprocnidae: "Hemiprocnidae",
    Apodidae: "Apodidae",
    // CUCULIFORMES
    Cuculidae: "Cuculidae",
    // GRUIFORMES
    Rallidae: "Rallidae",
    Gruidae: "Gruidae",
    // GAVIIFORMES
    Gaviidae: "Gaviidae",
    // OTIDIFORMES
    Otididae: "Otididae",
    Ciconiidae: "Ciconiidae",
    Threskiornithidae: "Threskiornithidae",
    // PELECANIFORMES
    Ardeidae: "Ardeidae",
    Pelecanidae: "Pelecanidae",
    // SULIFORMES
    Phalacrocoracidae: "Phalacrocoracidae",
    Anhingidae: "Anhingidae",
    // CHARADRIIFORMES
    Burhinidae: "Burhinidae",
    Haematopodidae: "Haematopodidae",
    Ibidorhynchidae: "Ibidorhynchidae",
    Recurvirostridae: "Recurvirostridae",
    Charadriidae: "Charadriidae",
    Rostratulidae: "Rostratulidae",
    Jacanidae: "Jacanidae",
    Scolopacidae: "Scolopacidae",
    Turnicidae: "Turnicidae",
    Glareolidae: "Glareolidae",
    Laridae: "Laridae",
    // STRIGIFORMES
    Tytonidae: "Tytonidae",
    Strigidae: "Strigidae",
    // ACCIPITRIFORMES
    Pandionidae: "Pandionidae",
    Accipitridae: "Accipitridae",
    // TROGONIFORMES
    Trogonidae: "Trogonidae",
    // BUCEROTIFORMES
    Bucerotidae: "Bucerotidae",
    Upupidae: "Upupidae",
    // CORACIIFORMES
    Meropidae: "Meropidae",
    Coraciidae: "Coraciidae",
    Alcedinidae: "Alcedinidae",
    // PICIFORMES
    Megalaimidae: "Megalaimidae",
    Indicatoridae: "Indicatoridae",
    Picidae: "Picidae",
    // CARIAMIFORMES
    Falconidae: "Falconidae",
    // PSITTACIFORMES
    Psittacidae: "Psittacidae",
    // PASSERIFORMES
    Pittidae: "Pittidae",
    Eurylaimidae: "Eurylaimidae",
    Oriolidae: "Oriolidae",
    Vireonidae: "Vireonidae",
    Campephagidae: "Campephagidae",
    Artamidae: "Artamidae",
    Vangidae: "Vangidae",
    Aegithinidae: "Aegithinidae",
    Rhipiduridae: "Rhipiduridae",
    Dicruridae: "Dicruridae",
    Monarchidae: "Monarchidae",
    Laniidae: "Laniidae",
    Corvidae: "Corvidae",
    Stenostiridae: "Stenostiridae",
    Paridae: "Paridae",
    Alaudidae: "Alaudidae",
    Cisticolidae: "Cisticolidae",
    Acrocephalidae: "Acrocephalidae",
    Pnoepygidae: "Pnoepygidae",
    Locustellidae: "Locustellidae",
    Hirundinidae: "Hirundinidae",
    Pycnonotidae: "Pycnonotidae",
    Scotocercidae: "Scotocercidae",
    Phylloscopidae: "Phylloscopidae",
    Aegithalidae: "Aegithalidae",
    Sylviidae: "Sylviidae",
    Zosteropidae: "Zosteropidae",
    Timaliidae: "Timaliidae",
    Pellorneidae: "Pellorneidae",
    Leiotrichidae: "Leiotrichidae",
    Certhiidae: "Certhiidae",
    Sittidae: "Sittidae",
    Troglodytidae: "Troglodytidae",
    Cinclidae: "Cinclidae",
    Sturnidae: "Sturnidae",
    Turdidae: "Turdidae",
    Muscicapidae: "Muscicapidae",
    Regulidae: "Regulidae",
    Bombycillidae: "Bombycillidae",
    Elachuridae: "Elachuridae",
    Irenidae: "Irenidae",
    Chloropseidae: "Chloropseidae",
    Dicaeidae: "Dicaeidae",
    Nectariniidae: "Nectariniidae",
    Prunellidae: "Prunellidae",
    Ploceidae: "Ploceidae",
    Estrildidae: "Estrildidae",
    Passeridae: "Passeridae",
    Motacillidae: "Motacillidae",
    Fringillidae: "Fringillidae",
    Emberizidae: "Emberizidae"
}

const order = {
    GALLIFORMES:"Galliformes",
    ANSERIFORMES:"Anseriformes",
    PODICIPEDIFORMES:"Podicipediformes",
    PHOENICOPTERIFORMES:"Phoenicopteriformes",
    COLUMBIFORMES:"Columbiformes",
    PTEROCLIFORMES:"Pterocliformes",
    CAPRIMULGIFORMES:"Caprimulgiformes",
    CUCULIFORMES:"Cuculiformes",
    GRUIFORMES:"Gruiformes",
    GAVIIFORMES:"Gaviiformes",
    OTIDIFORMES:"Otidiformes",
    PELECANIFORMES:"Pelecaniformes",
    SULIFORMES:"Suliformes",
    CHARADRIIFORMES:"Charadriiformes",
    STRIGIFORMES:"Strigiformes",
    ACCIPITRIFORMES:"Accipitriformes",
    TROGONIFORMES:"Trogoniformes",
    BUCEROTIFORMES:"Bucerotiformes",
    CORACIIFORMES:"Coraciiformes",
    PICIFORMES:"Piciformes",
    CARIAMIFORMES:"Cariamiformes",
    PSITTACIFORMES:"Psittaciformes",
    PASSERIFORMES:"Passeriformes"

}
export default database = {
    "abbott s babbler": {
        "id": "a001",
        "name": "Abbott's Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "genus":"Malacocincla", "species":"abbotti ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p><b>Abbott's babbler</b> (<i>Malacocincla abbotti</i>) is a species of bird in the family Pellorneidae. It is widely distributed along the Himalayas in South Asia and extending into the forests of Southeast Asia. They are short-tailed and stout birds which forage in pairs in dense undergrowth close to the ground and their presence is indicated by their distinctive calls.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>Abbott's babbler was described by the English zoologist Edward Blyth in 1845 and given the binomial name <i>Malacocincla abbotti</i>. The genus name <i>Malacocincla</i> combines the Ancient Greek <i>malakos</i> meaning \"soft\" with modern Latin <i>cinclus</i>, meaning \"thrush\"; referring to the birds' full and drooping plumage. The specific name <i>abbotti</i> was chosen by Blyth to honour the specimen collector, Lieutenant Colonel J. R. Abbott (1811\u20131888) who served in British India as Assistant Commissioner of the Arakan from 1837 to 1845. Blyth erected the new genus <i>Malacocincla</i> for this species but subsequent workers placed the species in <i>Turdinus</i> and <i>Trichastoma</i>. A revision reinstated its placement in <i>Malacocincla</i> in 1985. A 2001 study confirmed the cohesiveness of the <i>Trichastoma</i> group but a 2012 study shows that <i>M. abbotti</i> and <i>M. sepiaria</i> are in a clade along with Napothera while <i>M. cinereiceps</i> and <i>M. malaccensis</i> fall into a different clade along with the genus <i>Trichastoma</i> and several species of <i>Pellorneum</i>. An isolated population occurs in the Visakhapatnam Ghats, well separated from the nearest main distribution along the Himalayas and was named after Indian ornithologist K.S.R. Krishna Raju by Dillon Ripley and Bruce Beehler in 1985. The nominate population is from southern Myanmar and extends to southern Tenasserim and northwestern Malaya including the Langkawi Islands. Several other populations of this widespread species have been named as subspecies and not all are recognized. The population in the eastern Himalayas from eastern Nepal to Sikkim and Assam was named as <i>amabile</i> but is now considered within the nominate subspecies. Others include <i>altera</i> (central Laos and Annam), <i>williamsoni</i> (eastern Thailand and northwestern Cambodia), <i>obscurior</i> (coastal southeastern Thailand), <i>olivaceum</i> (Peninsular Thailand and Malaya), <i>sirense</i> (Borneo, Pulau Mata Siri) and <i>baweanum</i> (Bawean Island).</p><p>Eight subspecies are recognised:</p>\n<ul><li><i>M. a. abbotti</i> Blyth, 1845 \u2013 east Himalayas to central Malay Peninsula</li>\n<li><i>M. a. krishnarajui</i> Ripley &amp; Beehler, 1985 \u2013 east India</li>\n<li><i>M. a. williamsoni</i> Deignan, 1948 \u2013 east Thailand to south Vietnam</li>\n<li><i>M. a. obscurior</i> Deignan, 1948 \u2013 east Thailand and southwest Cambodia</li>\n<li><i>M. a. altera</i> (Sims, 1957) \u2013 central Laos and central Vietnam</li>\n<li><i>M. a. olivacea</i> (Strickland, 1847) \u2013 south Malay Peninsula and Sumatra</li>\n<li><i>M. a. concreta</i> B\u00fcttikofer, 1895 \u2013 Borneo and Belitung Island</li>\n<li><i>M. a. baweana</i> Oberholser, 1917 \u2013 Bawean Island (north of Java)</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>The adult Abbott's babbler is a nondescript, brown, short-tailed, babbler that moves about in the low vegetation often near streams and in the vicinity of tree ferns and tangled vegetation. The throat is grey-white while the center of the belly is white and the flanks are olive. The undertail coverts are rusty-colored. The sexes are alike. It has a short tail and heavy bill; it is drab olive-brown with bright rusty lower flanks and vent, a greyish-white throat and breast and variable pale grey supercilium and lores. Juvenile birds have dark rufescent-brown crowns and upperparts. The calls are distinctive. The subspecies <i>M. a. krishnarajui</i> of the Eastern Ghats has a darker russet tail and rump than the Himalayan nominate subspecies. Specimens measure 12\u201313\u00a0cm (4.7\u20135.1\u00a0in) in length, with a head of 39\u201344\u00a0mm (1.5\u20131.7\u00a0in) and tail of 55\u201361\u00a0mm (2.2\u20132.4\u00a0in).</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>In South Asia, Abbott's babbler is resident from Nepal to Arunachal Pradesh and the Assam Valley in India, south throughout the South Assam hills, including Meghalaya and south through the Lushai Hills. It is also resident in east and south Bangladesh (around Jessore and Khulna), and the Eastern Ghats in North-east Andhra Pradesh and Odisha. It occurs up to 600\u00a0m (2000\u00a0ft), 275\u00a0m (900\u00a0ft) in Nepal. It is widely distributed across Southeast Asia.</p><p>It is common across much of its large range. It is seen in the understory of broadleaved evergreen forest, forest edge, secondary growth and scrub. In Singapore, they have been noted as being tolerant to disturbance and adapting to secondary growth and disturbed forest.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Abbott's babbler usually moves around in pairs close to the ground. They breed from April to July (summer monsoon), with the nest being a carefully placed but bulky cup low in palms or other undergrowth. A study in Thailand found that most nests are placed in spiny palms and rattans. The usual clutch is 3 to 5 eggs which are bright salmon with dark blotches and red lines. When disturbed at the nest, the bird slip over the edge and fly with laboured wing beats and then hop out of sight. More than one brood may be raised in a season.</p><p>Their distinctive calls consists of three or four notes with the a drop on the middle note. The antiphonal duet of a male and female has the male leading with a \"poor'ol bear\" followed by the females \"dear dear\". The tunes may however change over time. The birds tend to remain within a well marked area and do not wander widely. The song is a variable short series of around three to four notes of rich, fluty, liquid, slurred, short whistled notes; these are sometimes delivered haltingly and sometimes rapidly. The evening group song consists of a recurrent sputtering <i>churrr</i> sound, which is low and slurred; ending with a sharp <i>chreep</i>. Calls include soft mewing notes, and a pulsing, purring trill when agitated.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Call recordings on Xeno-Canto</li>\n<li>Images and videos</li></ul>"
    },
    "aberrant bush warbler": {
        "id": "a002",
        "name": "Aberrant Bush-wabler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Horonis", "species":"flavolivaceus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>aberrant bush warbler</b> (<i>Horornis flavolivaceus</i>) is a species in the bush warbler family, Cettiidae. It was formerly included in the \"Old World warbler\" assemblage.\n</p><p>It is found in central and southern China, and the northern extremes of Myanmar and Vietnam. It occurs in the countries of Bhutan, China, India, Indonesia, Laos, Malaysia, Myanmar, Nepal, Philippines, Thailand, Timor-Leste and Vietnam and also may occur in northeastern and southeastern Bangladesh.</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p>\n\n<p><br></p>"
    },
    "african comb duck": {
        "id": "a003",
        "name": "African Comb Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Sarkidiornis", "species":"melantos",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>knob-billed duck</b> (<i>Sarkidiornis melanotos</i>), or <b>African comb duck</b>, is a duck found in tropical wetlands in Sub-Saharan Africa, Madagascar and south Asia from Pakistan to Laos and extreme southern China.\n</p><p>Most taxonomic authorities split this species and the comb duck from each other. The supposed extinct \"Mauritian comb duck\" is based on misidentified remains of the Mauritian shelduck (<i>Alopochen mauritianus</i>); this was realized as early as 1897, but the mistaken identity can still occasionally be found in recent sources.\n</p>\n\n\n<h2><span id=\"Description_and_systematics\">Description and systematics</span></h2>\n<p>This common species is unmistakable. It is one of the largest species of duck. Length can range from 56 to 76\u00a0cm (22 to 30\u00a0in), wingspan ranges from 116 to 145\u00a0cm (46 to 57\u00a0in) and weight from 1.03 to 2.9\u00a0kg (2.3 to 6.4\u00a0lb). Adults have a white head freckled with dark spots, and a pure white neck and underparts. The upperparts are glossy blue-black upperparts, with bluish and greenish iridescence especially prominent on the secondaries (lower arm feathers). The male is much larger than the female, and has a large black knob on the bill. Young birds are dull buff below and on the face and neck, with dull brown upperparts, top of the head and eyestripe. Knob-billed ducks are generally larger in size when compared to comb ducks, and flanks are usually lighter (light grey, in females sometimes whitish).\n</p><p>Immature knob-billed ducks look like a large greyish female of the cotton pygmy goose (<i>Nettapus coromandelicus</i>) and may be difficult to tell apart if no other birds are around to compare size and hue. However, knob-billed ducks in immature plumage are rarely seen without adults nearby and thus they are usually easily identified too.</p><p>The knob-billed duck is silent except for a low croak when flushed.</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><p>Uncertainty surrounds the correct systematic placement of this species. Initially, it was placed in the dabbling duck subfamily Anatinae. Later, it was assigned to the \"perching ducks\", a paraphyletic assemblage of waterfowl most of which are intermediate between dabbling ducks and shelducks. As the \"perching ducks\" were split up, the knob-billed duck was moved to the Tadorninae or shelduck subfamily.</p><p>Analysis of mtDNA sequences of the cytochrome <i>b</i> and NADH dehydrogenase subunit 2 genes, however, suggests that it is a quite basal member of the Anatidae, vindicating the earliest placement. But its closest living relatives cannot be resolved to satisfaction without further study.</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n<p>It breeds in still freshwater swamps and lakes in the tropics. It is largely resident, apart from dispersion in the wet season.</p><p>This duck feeds on vegetation by grazing or dabbling and to a lesser extent on small fish, invertebrates, and seeds. It can become a problem to rice farmers. Knob-billed ducks often perch in trees. They are typically seen in flocks, small in the wet season, up to 100 in the dry season. Sometimes they separate according to sex.</p><p>The knob-billed duck is declining in numbers locally, but due to its wide range it is not considered globally threatened by the IUCN. It is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> applies.\n</p>\n<h3><span id=\"Reproduction\">Reproduction</span></h3>\n<p>African birds breed during and after the rainy season and may not breed if the rain is scanty. Knob-billed ducks nest mainly in tree holes, also in tall grass.\n</p><p>Males may have two mates at once or up to five in succession. They defend the females and young but not the nest sites.\n</p><p>Females lay 7 to 15 yellowish-white eggs.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Species text in The Atlas of Southern African Birds.</li></ul>"
    },
    "alexandrine parakeet": {
        "id": "a004",
        "name": "Alexandrine Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "genus":"Psittacula", "species":"eupatria",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Alexandrine parakeet</b> (<i>Psittacula eupatria</i>), also known as the <b>Alexandrine parrot</b>, is a medium-sized parrot in the genus Psittacula of the family Psittacidae. It is named after Alexander the Great, who transported numerous birds from Punjab to various European and Mediterranean countries and regions, where they were prized by the royalty, nobility and warlords.</p><p>The Alexandrine parakeet has established feral populations in Spain, England, Belgium, the Netherlands, Germany, Turkey, Saudi Arabia, Bahrain, Qatar, the United Arab Emirates, Iran, Hong Kong where it lives alongside feral populations of its close relative, the rose-ringed parakeet (<i>Psittacula krameri</i>).</p>\n\n\n<h2><span id=\"Taxonomy_and_etymology\">Taxonomy and etymology</span></h2>\n<p>The Alexandrine parakeet was first described by French zoologist Mathurin Jacques Brisson as <i>Psittaca Ginginiana</i> or \"La Perruche de Gingi\" (The Gingi's Parakeet) in 1760; after the town of Gingee in southeastern India, which was a French outpost then. The birds may, however, merely have been held in captivity there. Carl Linnaeus redescribed the Alexandrine parakeet in 1766 as <i>Psittacus eupatria</i>.</p>\n\n<p>The genus name <i>Psittacula</i> is a diminutive of the Latin word <i>psittacus</i> meaning \"parrot\", and the specific name <i>eupatria</i> is derived from the Ancient Greek words <i>eu-</i> meaning \"well\" and <i>patri\u00e1</i> meaning \"descent\".</p>\n<h2><span id=\"Phylogeny\">Phylogeny</span></h2>\n<p>Genetic analysis of the mitochondrial cytochrome b sequences of <i>Psittacula</i> parakeets has shown that the Alexandrine parakeet diverged from the lineage that gave rise to the rose-ringed parakeet (<i>Psittacula krameri</i>) and the Mauritius parakeet (<i>Psittacula eques</i>) about 5 million years ago.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The Alexandrine parakeet is one of the largest parakeets, measuring 56 to 62\u00a0cm (22 to 24\u00a0in) from the top of the head to the tip of the tail and weighing 200 to 300\u00a0g (7.1 to 10.6\u00a0oz). The tail measures 28 to 35\u00a0cm (11 to 14\u00a0in). It is predominantly green with a light blue-grey sheen on the cheeks and nape (back of the neck), yellow-green abdomen, red patch on the shoulders and massive red beak with yellow tips. The upperside of the tail passes from green at the top to blue further down, and is yellow at the tip. The underside of the tail is yellow.</p><p>Adults are sexually dimorphic. Adult males have a black stripe across their lower cheeks and a pink band on their nape. Adult females lack both a black stripe across their lower cheeks and a pink band on their nape. The young are similar in appearance to adult females but have shorter tails.</p>\n<h2><span id=\"Subspecies\">Subspecies</span></h2>\n<p>Five subspecies of the Alexandrine parakeet are currently recognized. Information on the distribution and plumage differences of the different subspecies is given below.</p>\n\n<h2><span id=\"Ecology_and_behaviour\">Ecology and behaviour</span></h2>\n<p>The Alexandrine parakeet lives in forests, woodlands, agricultural lands and mangrove forests at elevations of up to 900 m (3,000 ft). It eats a variety of wild and cultivated seeds, buds, fruits and nuts. Flocks can cause extensive damage to ripening fruits and grain crops like maize and jowar. It usually lives in small flocks, but forms larger groups in areas where food is abundant or at communal roosts.</p>\n\n<p>The Alexandrine parakeet has a variety of calls, including a ringing <i>trrrieuw</i>, loud <i>kree-aar</i> or <i>keeak</i>, deep <i>klak-klak-klak-klak</i> and resonant <i>gr-aak</i>. Its calls are usually deeper, harsher and more resonant than those of the rose-ringed parakeet. Its voice becomes harsher when alarmed, and it shrieks loudly when mobbing predators. Flocks occasionally excitedly vocalize together. It is known to imitate human speech in captivity.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n\n<p>Alexandrine parakeets breed from November to April in their native range. They usually nest in tree hollows, but sometimes use tree holes excavated by themselves or cracks in buildings. Females lay 2 to 4 white, blunt oval-shaped eggs, measuring 27 to 34\u00a0mm (1.1 to 1.3\u00a0in). The average incubation period is 24 days. The chicks fledge at about 7 weeks of age, and are dependent on their parents until 3 to 4 months of age.</p>\n<h2><span id=\"Aviculture\">Aviculture</span></h2>\n<p>Alexandrine parakeets are relatively popular pet birds due to their long lifespan in captivity, playful behaviour and ability to mimic human speech. Alexander the Great is thought to have kept one as a pet. They are one of the most sought-after cage birds in the Indian market. According to CITES trade data, at least 57,772 Alexandrine parakeets were imported into countries outside their native range between 1981 and 2014.</p>\n<h2><span id=\"Conservation\">Conservation</span></h2>\n<p>The Alexandrine parakeet is listed as near threatened by the International Union for Conservation of Nature (IUCN) because of its steep population decline in its native range due to habitat loss, persecution and excessive capture to cater to the demands of the illegal wildlife trade. It is sporadic in South India, uncommon in Bangladesh, and declining in North Bengal and certain parts of Sri Lanka. It has suffered the greatest population declines in the Sindh and Punjab provinces of Pakistan, Laos, northwestern and southwestern Cambodia, and Thailand.</p><p>The sale of Alexandrine parakeets is banned in Pakistan, but they can be found being openly sold in the markets of Lahore and Rawalpindi. Their sale is also banned in India, and yet they are sold in broad daylight in urban bird markets, suggesting that the Indian government is allocating insufficient resources for their protection.</p>\n<h2><span id=\"Culture\">Culture</span></h2>\n\n<p>Sri Lanka, Vietnam, Thailand, Mongolia and Iran have issued postage stamps depicting the Alexandrine parakeet.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li class=\"mw-empty-elt\">\n<li>Alexandrine Parakeet (Psittacula eupatria) | Parrot Encyclopedia by the World Parrot Trust</li>\n<li class=\"mw-empty-elt\">\n<li><i>Birds of the Indian Subcontinent</i> by Richard Grimmett, Carol Inskipp and Tim Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a01408127636</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li class=\"mw-empty-elt\">\n<li>Wildscreen Arkive: Alexandrine parakeet (Psittacula eupatria) Gallery and fact sheet</li>\n<li class=\"mw-empty-elt\">\n<li>Oriental Bird Images: <i>Alexandrine parakeet</i> Selected images</li></ul> "
    },
    "alpine acentor": {
        "id": "a005",
        "name": "Alpine Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "genus":"Prunella", "species":"collaris",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>alpine accentor</b> (<i>Prunella collaris</i>) is a small passerine bird in the family Prunellidae.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Alpine accentor was described by the Austria naturalist Giovanni Antonio Scopoli in 1769. He coined the binomial name <i>Sturnus collaris</i> and specified the type locality as the Carinthia region of southern Austria. The specific epithet is from the Latin <i>collaris</i> \"of the neck\". This species is now placed in the genus <i>Prunella</i> that was introduced by the French ornithologist Louis Vieillot in 1816. The Alpine accentor, along with the Altai accentor is sometimes separated from the other accentors, into the genus <i>Laiscopus</i>.</p><p>The word \"accentor\" is from post-classical Latin and means a person who sings with another. The genus name <i>Prunella</i> is from the German <i>Braunelle</i>, \"dunnock\", a diminutive of <i>braun</i>, \"brown\".</p><p>Nine subspecies are recognised:</p>\n<ul><li><i>P. c. collaris</i> (Scopoli, 1769) \u2013 southwest Europe to Slovenia and the Carpathians, northwest Africa</li>\n<li><i>P. c. subalpina</i> (Brehm, CL, 1831) \u2013 Croatia to Bulgaria and Greece, Crete and southwest Turkey</li>\n<li><i>P. c. montana</i> (Hablizl, 1783) \u2013 north and east Turkey to the Caucasus and Iran</li>\n<li><i>P. c. rufilata</i> (Severtzov, 1879) \u2013 northeast Afghanistan and north Pakistan through the mountains of central Asia to west China</li>\n<li><i>P. c. whymperi</i> (Baker, ECS, 1915) \u2013 west Himalayas</li>\n<li><i>P. c. nipalensis</i> (Blyth, 1843) \u2013 central and east Himalayas to southcentral China and north Myanmar</li>\n<li><i>P. c. tibetana</i> (Bianchi, 1905) \u2013 east Tibet</li>\n<li><i>P. c. erythropygia</i> (R. Swinhoe, 1870) \u2013 east Kazakhstan and southcentral Siberia to northeast Siberia, Japan, Korea and northeast China</li>\n<li><i>P. c. fennelli</i> Deignan, 1964 \u2013 Taiwan</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>This is a robin-sized bird at 15\u201317.5\u00a0cm in length, slightly larger than its relative, the dunnock. It has a streaked brown back, somewhat resembling a house sparrow, but adults have a grey head and red-brown spotting on the underparts. It has an insectivore's fine pointed bill.\n</p><p>Sexes are similar, although the male may be contrasted in appearance. Young birds have browner heads and underparts.\n</p>\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>It is found throughout the mountains of southern temperate Europe, Lebanon and Asia at heights above 2000\u00a0m. It is mainly resident, wintering more widely at lower latitudes, but some birds wander as rare vagrants as far as Great Britain.\n</p><p>It is a bird of bare mountain areas with some low vegetation.\n</p>\n<h2><span id=\"Breeding\">Breeding</span></h2>\n<p>It builds a neat nest low in a bush or rock crevice, laying 3-5 unspotted sky-blue eggs.\n</p><p>The mating system is of particular interest.  Home ranges are occupied by breeding groups of 3 or 4 males with 3 or 4 females.  These are unrelated birds which have a socially polygynandrous mating system.  Males have a dominance hierarchy, with the alpha males being generally older than subordinates.  Females seek matings with all the males, although the alpha male may defend her against matings from lower ranking males.  In turn, males seek matings with all the females.  DNA fingerprinting has been used to show that, within broods, there is often mixed paternity, although the female is always the true mother of the nestlings raised within her nest.  Males will provide food to chicks at several nests within the group, depending on whether they have mated with the female or not - males only provide care when they are likely to be the true fathers of the chicks.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li><cite id=\"CITEREFCramp1988\" class=\"citation book\">Cramp, Stanley;  et al., eds. (1988). \"<i>Prunella collaris</i> Alpine Accentor\". <i>Handbook of the Birds of Europe the Middle East and North Africa. The Birds of the Western Palearctic. Volume V: Tyrant Flycatchers to Thrushes</i>. Oxford: Oxford University Press. pp.\u00a0574\u2013585. ISBN\u00a0<bdi>978-0-19-857508-5</bdi>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Prunella+collaris+Alpine+Accentor&amp;rft.btitle=Handbook+of+the+Birds+of+Europe+the+Middle+East+and+North+Africa.+The+Birds+of+the+Western+Palearctic.+Volume+V%3A+Tyrant+Flycatchers+to+Thrushes&amp;rft.place=Oxford&amp;rft.pages=574-585&amp;rft.pub=Oxford+University+Press&amp;rft.date=1988&amp;rft.isbn=978-0-19-857508-5&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFDaviesHartleyHatchwellDesrochers1995\" class=\"citation journal\">Davies, N.B.; Hartley, I.R.; Hatchwell, B.J.; Desrochers, A.; Skeer, J.; Nebel, D. (1995). \"The polygynandrous mating system of the alpine accentor <i>Prunella collaris</i>. I. Ecological causes and reproductive conflicts\". <i>Animal Behaviour</i>. <b>49</b> (3): 769\u2013788. doi:10.1016/0003-3472(95)80209-6.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Animal+Behaviour&amp;rft.atitle=The+polygynandrous+mating+system+of+the+alpine+accentor+Prunella+collaris.+I.+Ecological+causes+and+reproductive+conflicts&amp;rft.volume=49&amp;rft.issue=3&amp;rft.pages=769-788&amp;rft.date=1995&amp;rft_id=info%3Adoi%2F10.1016%2F0003-3472%2895%2980209-6&amp;rft.aulast=Davies&amp;rft.aufirst=N.B.&amp;rft.au=Hartley%2C+I.R.&amp;rft.au=Hatchwell%2C+B.J.&amp;rft.au=Desrochers%2C+A.&amp;rft.au=Skeer%2C+J.&amp;rft.au=Nebel%2C+D.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFHartleyDaviesHatchwellDesrochers1995\" class=\"citation journal\">Hartley, I.R.; Davies, N.B.; Hatchwell, B.J.; Desrochers, A.; Nebel, D.; Burke, T. (1995). \"The polygynandrous mating system of the alpine accentor <i>Prunella collaris</i>. II. Multiple paternity and parental effort\". <i>Animal Behaviour</i>. <b>49</b> (3): 789\u2013803. doi:10.1016/0003-3472(95)80210-X.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Animal+Behaviour&amp;rft.atitle=The+polygynandrous+mating+system+of+the+alpine+accentor+Prunella+collaris.+II.+Multiple+paternity+and+parental+effort&amp;rft.volume=49&amp;rft.issue=3&amp;rft.pages=789-803&amp;rft.date=1995&amp;rft_id=info%3Adoi%2F10.1016%2F0003-3472%2895%2980210-X&amp;rft.aulast=Hartley&amp;rft.aufirst=I.R.&amp;rft.au=Davies%2C+N.B.&amp;rft.au=Hatchwell%2C+B.J.&amp;rft.au=Desrochers%2C+A.&amp;rft.au=Nebel%2C+D.&amp;rft.au=Burke%2C+T.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFDaviesHartleyHatchwellLangmore1996\" class=\"citation journal\">Davies, N.B.; Hartley, I.R.; Hatchwell, B.J.; Langmore, N.E. (1996). \"Female control of copulations to maximise male help: a comparison of polygynandrous alpine accentors <i>Prunella collaris</i> and dunnocks <i>Prunella modularis</i>\" <span>(PDF)</span>. <i>Animal Behaviour</i>. <b>51</b> (1): 27\u201347. doi:10.1006/anbe.1996.0003.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Animal+Behaviour&amp;rft.atitle=Female+control+of+copulations+to+maximise+male+help%3A+a+comparison+of+polygynandrous+alpine+accentors+Prunella+collaris+and+dunnocks+Prunella+modularis&amp;rft.volume=51&amp;rft.issue=1&amp;rft.pages=27-47&amp;rft.date=1996&amp;rft_id=info%3Adoi%2F10.1006%2Fanbe.1996.0003&amp;rft.aulast=Davies&amp;rft.aufirst=N.B.&amp;rft.au=Hartley%2C+I.R.&amp;rft.au=Hatchwell%2C+B.J.&amp;rft.au=Langmore%2C+N.E.&amp;rft_id=http%3A%2F%2Fwww.avibirds.com%2Fpdf%2FH%2FHeggemus1.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Alpine accentor videos, photos &amp; sounds on the Internet Bird Collection</li>\n<li>Xeno-canto: audio recordings of the Alpine accentor</li></ul> "
    },
    "alpine swift": {
        "id": "a006",
        "name": "Alpine Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Tachymarptis", "species":"melba",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Alpine swift</b> (<i>Tachymarptis melba</i>) formerly <i>Apus melba</i>, is a species of swift. The genus name is from the Ancient Greek <i>takhus</i>, \"fast\", and <i>marptis</i>, \"seizer\". The specific name <i>melba</i> comes from \u2018melano-alba\u2019 or \u2018mel-alba\u2019; Eigenhuis &amp; Swaab (1992) posited that \u2018melba\u2019 might be a short form for \u2018melano-alba\u2019 or \u2018mel-alba\u2019 (Gr. melas, melanos = black; L. albus = white). Linnaeus certainly referred to these two colors in his diagnosis.</p><p>Alpine swifts breed in mountains from southern Europe to the Himalaya. Like common swifts, they are strongly migratory, and winter much further south in southern Africa.\n</p><p>Swifts have very short legs which are used for clinging to vertical surfaces. They never settle voluntarily on the ground, spending most of their lives in the air living on the insects they catch in their beaks. Alpine swift are able to stay aloft in the air for up to seven months at a time, even drinking water \"on the wing\".\n</p>\n\n\n<h2><span id=\"Description_and_biology\">Description and biology</span></h2>\n<p>The bird is superficially similar to a large barn swallow or house martin. It is, however, completely unrelated to those passerine species, since swifts are in the order Apodiformes. The resemblances between the groups are due to convergent evolution, reflecting similar life styles.\n</p><p>Swifts have very short legs which they use only for clinging to vertical surfaces. The scientific name Apodidae comes from the Ancient Greek <i>\u03b1\u03c0\u03bf\u03c5\u03c2, apous</i>, meaning \"without feet\". They never settle voluntarily on the ground.\n</p><p>Alpine swifts breed in mountains from southern Europe to the Himalaya. Like common swifts, they are strongly migratory, and winter much further south in southern Africa. They wander widely on migration, and are regularly seen in much of southern Europe, Salford and Asia. The species seems to have been much more widespread during the last ice age, with a large colony breeding, for example in the Late Pleistocene Cave No 16, Bulgaria, around 18,000\u201340,000 years ago. The same situation has been found for Komarowa Cave near Cz\u0119stochowa, Poland during a period about 20,000\u201340,000 years ago.</p>\n\n<p>These apodiformes build their nests in colonies in a suitable cliff hole or cave, laying two or three eggs. Swifts will return to the same sites year after year, rebuilding their nests when necessary, and pairing for life. Young swifts in the nest can drop their body temperature and become torpid if bad weather prevents their parents from catching insects nearby. They have adapted well to urban conditions, frequently nesting in old buildings in towns around the Mediterranean, where large, low-flying flocks are a familiar feature in summer. Alpine swifts have a short forked tail and very long swept-back wings that resemble a crescent or a boomerang but may (as in the image) be held stretched straight out. Their flight is slower and more powerful than that of their smaller relatives, with a call that is a drawn-out twittering (listen at right).\n</p><p>Alpine swifts are readily distinguished from the common swifts by their larger size and their white belly and throat. They are around twice as big as most other swifts in their range, about 20 to 23\u00a0cm (7.9 to 9.1\u00a0in) in length, with a wingspan of 57\u00a0cm (22\u00a0in) and a weight of around 100\u00a0g (3.5\u00a0oz). By comparison, the common swift has a wingspan of around 42\u00a0cm (17\u00a0in). They're largely dark brown in colour with a dark neck band that separates the white throat from the white belly.\nJuveniles are similar to adults, but their feathers are pale edged.</p>\n<h2><span id=\"Life_on_the_wing\">Life on the wing</span></h2>\n<p>Alpine swifts spend most of their lives in the air, living on the insects they catch in their beaks. They drink on the wing, but roost on vertical cliffs or walls. A study published in 2013 showed Alpine swifts can spend over six months flying without having to land. All vital physiological processes, including sleep, can be performed while in air.\n</p><p>In 2011, Felix Liechti and his colleagues at the Swiss Ornithological Institute attached electronic tags that log movement to six alpine swifts and it was discovered that the birds could stay aloft in the air for more than 200 days straight.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Ageing and sexing (PDF; 2.3 MB) by Javier Blasco-Zumeta &amp; Gerd-Michael Heinze</li>\n<li>Alpine swift - Species text in The Atlas of Southern African Birds</li></ul>\n<p>.\n</p> "
    },
    "alpine thrush": {
        "id": "a007",
        "name": "Alpine Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Zoothera", "species":"mollissima",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>alpine thrush</b> (<i>Zoothera mollissima</i>) is a species of bird in the thrush family.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The alpine thrush was formerly known as the <b>plain-backed thrush</b> until split into the Sichuan thrush and the newly discovered Himalayan thrush.\n</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>It is found from the north-western Himalayas to southern China. Its natural habitats are subtropical or tropical high-altitude shrubland and subtropical or tropical high-altitude grassland.\n</p>\n\n\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Details of alpine thrush</li></ul>\n<p><br></p> "
    },
    "altai acentor": {
        "id": "a008",
        "name": "Altai Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "genus":"Prunella", "species":"himalayana",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The  <b>Altai accentor</b> (<i>Prunella himalayana</i>) is a species of bird in the family Prunellidae. It is also known as the <b>rufous-streaked accentor</b> or <b>Himalayan accentor</b>. It breeds in the Altai Mountains of western mongolia; it winters in the southern Tian Shan and Himalayan ranges.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Altai accentor was described by the English zoologist Edward Blyth in 1842 and given the binomial name <i>Accentor himalayanus</i>. The Altai accentor is now placed in the genus <i>Prunella</i> that was introduced by the French ornithologist Louis Vieillot in 1816. The species is monotypic.</p><p>This species, along with the alpine accentor, is sometimes separated from the other accentors, into the genus <i>Laiscopus</i>.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Xeno-canto: audio recordings of the Altai accentor</li></ul>\n<p><br></p>"
    },
    "amur falcon": {
        "id": "a009",
        "name": "Amur Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"amurensis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Amur falcon</b> (<i>Falco amurensis</i>) is a small raptor of the falcon family. It breeds in south-eastern Siberia and Northern China before migrating in large flocks across India and over the Arabian Sea to winter in Southern Africa\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>Males are characteristically dark sooty grey above with rufous thighs and vent. In flight, the wing lining is white, contrasting with the dark wing feathers. Adult males of the closely related red-footed falcon have a dark grey wing lining. In Africa, males can be confused with melanistic Gabar goshawks, but the chestnut on the vent is distinctive. Also, there may be some superficial resemblance to the sooty falcon and the grey kestrel, but those two species both have yellow feet and cere. The wings are long as in most falcons (with a span of 63\u201371\u00a0cm) and at rest the wing tip reaches or extends just beyond the tail-tip.</p><p>Females can be more difficult to identify as they share a pattern common to many falcons, but are distinctive in having an orange eye-ring, a red cere and reddish orange feet. Juveniles can be confused only with those of the red-footed falcon, but lack the buffy underwing coverts.\n</p>\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Amur falcon was long considered a subspecies or morph of the red-footed falcon, but it is nowadays considered distinct. Nonetheless, it is the red-footed falcon's closest relative; their relationship to other falcons is more enigmatic. They appear morphologically somewhat intermediate between kestrels and hobbies and DNA sequence data has been unable to further resolve this question, mainly due to lack of comprehensive sampling.</p><p>The genus name <i>Falco</i> is Late Latin and derives from <i>falx</i>, <i>falcis</i>, a sickle, referencing the claws of the bird. The species name <i> amurensis </i> is from Amurland in south-eastern Siberia.</p>\n\n<h2><span id=\"Distribution_and_migration\">Distribution and migration</span></h2>\n<p>The Amur falcon breeds in east Asia from the Transbaikalia, Amurland, and northern Mongolian region to parts of North Korea. They migrate in a broad front through India and Sri Lanka, sometimes further east over Thailand and Cambodia and then over the Arabian Sea, sometimes in passage on the Maldives and other islands to reach southern Africa. Birds going over India are thought to be aided by strong winds blowing westward. These winds are strong at an altitude of about 3000m and the birds are thought to fly at a height of above 1000m during migration. The route taken to return to their breeding grounds runs slightly more northward. Because of its tendency to wander long distances over the ocean while migrating, this falcon has been found in locations far outside its normal range, such as in Italy, Sweden, Tristan da Cunha, St. Helena and the United Kingdom.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<h3><span id=\"Foraging_and_food\">Foraging and food</span></h3>\n<p>The Amur falcon feeds mainly late in the evening or early in the morning capturing a wide range of insects in the air or on the ground. They capture most of their prey in flight, sometimes by hovering, but will also pick prey by alighting on the ground. The winter diet appears to be almost entirely made up of insects but they take small birds, mammals  and amphibians to feed their young in their breeding range. The rains in Africa produce swarms of termites, locusts, ants and beetles that provide ample food. Their migration over the Arabian Sea coincides with the timing of the migration of dragonflies (<i>Pantala flavescens</i>) and these are thought to provide food during the most arduous part of their migration route.</p>\n<h3><span id=\"Nesting\">Nesting</span></h3>\n\n<p>During migration they stay in open forest or grasslands, roosting colonially on exposed perches or wires. Their breeding habitat is open wooded country with marshes. The breeding season is May to June and several pairs may nest close together. Abandoned nest platforms belonging to birds of prey or corvids and even tree hollows are re-used for nesting. Three or four eggs are laid (at two day intervals). Both parents take turns to incubate and feed the chicks which hatch after about a month. The young birds leave the nest after about a month.</p>\n<h3><span id=\"Parasites\">Parasites</span></h3>\n<p>The Amur falcon hosts three species of lice, <i>Degeeriella rufa</i>, <i>Colpocephalum subzerafae</i>, and <i>Laembothrion tinnunculi</i>.</p>\n<h2><span id=\"Status_and_conservation\">Status and conservation</span></h2>\n<p>The wide breeding range and large population size of the Amur falcon have led to the species being assessed as being of least concern. The flocking behaviour during migration and the density at which they occur, however, expose them to hunting and other threats. During their migration from their breeding area to the winter quarters, they are plump and are hunted for food in parts of northeastern India as well as in eastern Africa.\nIn 2012, mass trapping and capture of migrating Amur falcons in Nagaland (India) was reported in the media and a successful campaign was begun to prevent their killing. As part of this campaign, three birds were fitted with 5 gm satellite transmitters that allowed them to be tracked during their migration.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li>Adventures in Nagaland and Satellite tracks of three individuals</li>\n<li>How to make 2.5 billion termites disappear? A case for protecting the Amur falcon, <i>Ornithological Observations,</i> an open-content, electronic journal published by <i>BirdLife South Africa</i> and the Animal Demography Unit at the <i>University of Cape Town</i></li>\n<li>The Great migration of Amur Falcon, <i>The Morung Express</i></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Atlas of Southern African Birds.</li>\n<li>Global Raptor Information Network</li>\n<li> Media related to <span>Falco amurensis</span> at Wikimedia Commons</li>\n<li> Data related to Falco amurensis at Wikispecies</li></ul> "
    },
    "ashy bulbul": {
        "id": "a010",
        "name": "Ashy Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Hermixo", "species":"flavala",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy bulbul</b> (<i>Hemixos flavala</i>) is a species of songbird in the bulbul family, Pycnonotidae. It is found on the Indian subcontinent and in Southeast Asia. Its natural habitats are subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest.\n</p>\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>Formerly, some authorities classified the ashy bulbul in the genera <i>Hypsipetes</i> and <i>Microscelis</i>.\n</p>\n\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Five subspecies are currently recognized:</p>\n<ul><li><i>H. f. flavala</i> - <small>Blyth, 1845</small>: Found in the eastern Himalayas, north-eastern Bangladesh, north-western Myanmar and southern China</li>\n<li><i>H. f. hildebrandi</i> - <small>Hume, 1874</small>: Found in eastern Myanmar and north-western Thailand</li>\n<li><i>H. f. davisoni</i> - <small>Hume, 1877</small>: Found in south-eastern Myanmar and south-western Thailand</li>\n<li><i>H. f. bourdellei</i> - <small>Delacour, 1926</small>: Found in southern China, eastern Thailand, northern and central Laos</li>\n<li><i>H. f. remotus</i> - <small>(Deignan, 1957)</small>: Found in southern Indochina</li></ul><h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "ashy drongo": {
        "id": "a011",
        "name": "Ashy Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "genus":"Dicrurus", "species":"leucophaeus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy drongo</b> (<i>Dicrurus leucophaeus</i>) is a species of bird in the drongo family Dicruridae. It is found widely distributed across South and Southeast Asia with several populations that vary in the shade of grey, migration patterns and in the size or presence of  white patches around the eye.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The adult ashy drongo is mainly dark grey, and the tail is long and deeply forked, There are a number of subspecies varying in the shade of the grey plumage. Some subspecies have white markings on the head. Young birds are dull brownish grey.\n</p><p>Subspecies <i>longicaudatus</i> of India (which includes <i>beavani</i> of the Himalayas that winters on the peninsula, with one breeding population in central India that Vaurie separates as <i>longicaudatus</i> in the restricted sense) is very dark and almost like the black drongo although this bird is slimmer and has a somewhat longer and less-splayed tail. It is found in more tall forest habitat, has dark grey underside lacking the sheen of black drongo. The iris is crimson and there is no white rictal spot. Subspecies <i>leucogenis</i> and <i>salangensis</i> have a white eye-patch as do several of the island forms that breed further south. The calls are a little more nasal and twangy than that of the black drongo.</p><p><br></p>\n\n\n\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>The ashy drongo breeds in the hills of tropical southern Asia from eastern Afghanistan east to southern China, Ryukyu Islands in southern Japan (particularly Okinawa) and Indonesia. Many populations in the northern part of its range are migratory. Charles Vaurie described subspecies <i>beavani</i> (after Robert Cecil Beavan) as the population that breeds along the Himalayas that wintered in peninsular India. However, later workers include this as part of <i>longicaudatus</i> which also has a population that breeds in central India. In winter, the species is particularly fond of hill forests. E. C. Stuart Baker described <i>stevensi</i> which Vaurie considered as being either <i>beavani</i> or <i>hopwoodi</i> of the eastern Himalayas. To the east of the range of <i>hopwoodi</i> is <i>mouhouti</i> of Thailand and Myanmar. To the north of this range are <i>leucogenis</i> and <i>salangensis</i> (both migratory mainly to areas further south but also known from Nagaland) while <i>bondi</i> is found to the south. Along the southeast Asian island chain, there are number of insular populations including <i>periophthalmus</i>, <i>ryukyuensis</i>, <i>batakensis</i>, <i>phaedrus</i>, <i>siberu</i> and <i>nigrescens</i>. The nominate form is said to be found on Simalur, Java, Bali, Lombok, Palawan, and Balabac Islands.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>The ashy drongo has short legs and sits very upright while perched prominently, often high on a tree. It is insectivorous and forages by making aerial sallies but sometimes gleans from tree trunks. They are found singly, in pairs or small groups. During migration they fly in small flocks.</p><p>A common call that they make is described as <i>drangh gip</i> or <i>gip-gip-drangh</i>. They can imitate the calls of other birds and are capable of imitating the whistling notes of a common iora.</p><p>The breeding season is May to June with a clutch of three or four reddish or brown eggs laid in a loose cup nest in a tree.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Ashy drongo videos, photos &amp; sounds on the Internet Bird Collection</li></ul> "
    },
    "ashy minivet": {
        "id": "a012",
        "name": "Ashy Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"divaricatus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy minivet</b> (<i>Pericrocotus divaricatus</i>) is a passerine bird of eastern Asia belonging to the minivet genus <i>Pericrocotus</i> in the cuckooshrike family Campephagidae. While most of the minivets have shades of yellow, orange and red in their plumage, this species has only greys, whites and blacks. The male is distinctive with a white face and black nape although females can be confused with the female of the brown-rumped minivet. They forage in the canopy, often along with other minivets and join mixed-species foraging flocks.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>It is 18.5\u201320\u00a0cm long. The male is grey above and whitish below. It has a black cap with a white forehead and there is a white band across the flight-feathers. The outer tail feathers are white. The bill and feet are black. The female's cap is grey apart from a black band between the bill and eye and a narrow white band above it. The call is a high-pitched, metallic trill. It is considered as closely related to <i>Pericrocotus roseus</i> and <i>Pericrocotus cantonensis</i> but differs in moult pattern. It is one of the few passerine birds that moult their primaries twice in a year and is the longest distance migrant among the minivets.</p><p>It breeds in south-east Siberia, north-east China, Korea and Japan. Birds in the Ry\u016bky\u016b Islands of southern Japan are commonly considered to be a separate species\u2014Ryukyu minivet (<i>P. tegimae</i>). The ashy minivet is a long distance migrant, wintering in South and South-east Asia as far south as Sumatra, Borneo and the Philippines. It is found in forest as well as in more open areas with scattered trees. It forages in the tree canopy for insects sometimes joining mixed-species foraging flocks. Migrant birds can often be seen in large flocks.\n</p><p>The status of the species is considered to be secure and is considered as a \"least concern\" species by the IUCN. Populations of the species on the Amami Island was found to have increased from 1985\u20132001.</p><p>In the South Asian region, they are considered rare. They were first noted on the Indian mainland only in 1965 although they had been reported in 1897 from the Andaman Islands. It has since been reported with greater regularity.</p><p>Four to seven eggs are laid. These are incubated for 17 to 18 days.\n</p>\n<h2><span id=\"Notes\">Notes</span></h2>\n\n<h2><span id=\"References\">References</span></h2>\n<ul><li>Brazil, Mark A. (1991) <i>The Birds of Japan</i>, Christopher Helm, London.</li>\n<li>MacKinnon, John &amp; Phillipps, Karen (2000) <i>A Field Guide to the Birds of China</i>, Oxford University Press, Oxford.</li>\n<li>Robson, Craig (2002) <i>A Field Guide to the Birds of South-East Asia</i>. New Holland, London.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Photographs and videos</li>\n<li>Calls</li></ul> "
    },
    "ashy prinia": {
        "id": "a013",
        "name": "Ashy Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"socialis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy prinia</b> or <b>ashy wren-warbler</b> (<i>Prinia socialis</i>) is a small warbler in the family Cisticolidae. This prinia is a resident breeder in the Indian Subcontinent, ranging across most of India, Nepal, Bangladesh, Bhutan, Sri Lanka and western Myanmar. It is a common bird in urban gardens and farmland in many parts of India and its small size, distinctive colours and upright tail make it easy to identify. The northern populations have a rufous rump and back and have a distinct breeding and non-breeding plumage while other populations lack such variation.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>These 13\u201314\u00a0cm long warblers have short rounded wings and longish graduated cream tail tipped with black subterminal spots. The tail is usually held upright and the strong legs are used for clambering about and hopping on the ground. They have a short black bill. The crown is grey and the underparts are rufous in most plumages. In breeding plumage, adults of the northern population are ash grey above, with a black crown and cheek with no supercilium and coppery brown wings. In non-breeding season, this population has a short and narrow white supercilium and the tail is longer. They are found singly or in pairs in shrubbery and will often visit the ground.</p><p>In winter, the northern subspecies, <i> P. s. stewartii</i> Blyth, 1847, has warm brown upperparts and a longer tail and has seasonal variation in plumage. The other races retain summer plumage all year round. West Bengal and eastwards has race <i>inglisi</i> Whistler &amp; Kinnear, 1933 which is darker slaty above than the nominate race of the Peninsula and deeper rufous on the flanks with a finer and shorter beak. The distinctive endemic race in Sri Lanka, <i> P. s. brevicauda</i> Legge, 1879, has a shorter tail and has the juveniles with yellowish underparts apart from a distinct call.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This passerine bird is found in dry open grassland, open woodland, scrub and in home gardens in many cities. The northern limits of the species are along the Himalayan foothills extending into the upper Indus river system. The species is absent from the dry desert zone of the west of India and extends east into Burma. The Sri Lankan population is found mainly in the lowlands but going up into the hills to about 1600 m.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Like most warblers, the ashy prinia is insectivorous. The song is a repetitive <i>tchup, tchup, tchup</i> or <i>zeet-zeet-zeet</i>. Another call is a nasal <i>tee-tee-tee</i>. It also makes a sound like \"electric sparks\" during its fluttery flight, which is thought to be produced by the wings (however, one author suggests that it is made by the beak).</p>\n<blockquote class=\"templatequote\"><p>\nIt is most easily distinguished by the loud snapping noise it makes during flight. How this noise is produced we do not know for certain. Reid was of opinion that the bird snapped its long tail. What exactly this means I do not know. Jesse believes that the sound is produced by the bird's mandibles. I have spent much time in watching the bird, and am inclined to think that the noise is caused by the beating of the wings against the tail. This last is constantly being wagged and jerked, and it seems to me that the wings beat against it as the bird flits about. When doves and pigeons fly, their wings frequently meet, causing a flapping sound. I am of opinion that something similar occurs when the ashy wren-warbler takes to its wings.</p></blockquote>\n\n<p>The non-migratory genus <i>Prinia</i> shows biannual moult, which is rare among passerines. A moult occurs in spring (April to May) and another moult occurs in autumn (October to November). Biannual moult is theorized to be favoured when ectoparasite loads are very high, however no investigations have been made. <i>Prinia socialis</i> moults some remiges twice a year and is termed to have a partially biannual moult, however some authors describe <i>P. socialis socialis</i> as having two complete moults.</p><p>Birds stay in pairs but roost singly on the branch of a small tree or shrub.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>The song is sung from the top of a bush and males make fluttery display flights with the tail held up. The ashy prinia builds its nest close to the ground in a shrub or tall grass. Several types of nests have been described, including a flimsy cup made by sewing several large leaves, an oblong purse-like structure with grass stems inside it, and a flimsy ball of grass. The usual nest is built low in a bush and consists of leaves stitched together with webs, lined with hair and having an entrance on the side. It lays 3 to 5 glossy, somewhat oval-shaped eggs. They vary in colour from brick-red to rich chestnut. The broad end of the egg is generally darker than the remainder of the shell, and exhibits a cap or zone. The eggs measure 0.6 to 0.68 inches in length, and 0.45 to 0.5 in breadth. They hatch in about 12 days.</p><p>The breeding season varies with locality and has been recorded around the year, but mostly after the monsoons. In north India it is mainly June to September and in Sri Lanka mainly December to March or August to October. Breeding season is during May to June in the Nilgiris. The species is believed to be monogamous, and both the male and the female take part in incubation and feeding, though to varying extents. Parents may spend more time at the nest during cool days. The eggs hatch in about 12 days. Plaintive and grey-bellied cuckoos are known to be brood parasites of this species. When the nest is threatened by predators such as cats, adults have been observed feigning injury.</p><p>Rare cases of birds reusing material from a nest to build a nest at a new location have been noted.</p>\n\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Balachandran, S; Rosalind, Lima (1992) Southern Ashy Wren-Warbler <i>Prinia socialis socialis</i> Sykes in Pt. Calimere Wildlife Sanctuary, Tamil Nadu. J. Bombay Nat. Hist. Soc. 89(3):377.</li>\n<li>Jairamdas, Arjun (1977) Three nests of Ashy Wren Warbler \u2013 diary of one season. <i>Newsletter for Birdwatchers</i> . 17(2):4\u20136.</li>\n<li>Subramanya, S.; Veeresh, G. K. (1998) Nesting of two insectivorous birds in the rice fields of Bangalore. Chap. 4. In: Birds in Agricultural Ecosystem. (Eds: Dhindsa, MS; Rao, P Syamsunder; Parasharya, BM) Society for Applied Ornithology, Hyderabad, 10\u201317.</li>\n<li>Ajmeri, R. M.; Das, A. R. K.; Sasikumar, M. (1961) An unusual nest of the Ashy Wren-warbler (<i>Prinia socialis</i>). <i>Newsletter for Birdwatchers</i> . 1(4):1.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li></ul> "
    },
    "ashy wood pigeon": {
        "id": "a014",
        "name": "Ashy Woodpigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Columba", "species":"pulchricollis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy wood pigeon</b> (<i>Columba pulchricollis</i>) is a species of bird in the family Columbidae, found in temperate forests of southeastern Asia.\n</p>\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The ashy wood pigeon has a wide range throughout Southeast Asia, able to be found in Bhutan, northern India, southern Tibet, southern China, northern Laos, northern to mid Myanmar, northernThailand, and Taiwan. While the world population is unknown, the Taiwan population is estimated to be anywhere from 10,000 to 100,000 breeding pairs.</p>\n<h2><span id=\"Nesting\">Nesting</span></h2>\n<p>Clutches usually consist of one single white egg, although double egg clutches have been recorded. This pigeon incubates its eggs for approximately 21\u201323 days. Young birds fledge at about 28 days from being hatched.</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "ashy woodswallow": {
        "id": "a015",
        "name": "Ashy Woodswallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Artamus", "species":"fuscus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy woodswallow</b> (<i>Artamus fuscus</i>) sometimes also called the <b>ashy swallow-shrike</b> is a woodswallow which is found in south Asia. Like other woodswallows, it has a short curve bill and a short square tail and long wings. It is usually seen perched in groups, high on powerlines, tall bare trees and most often in areas with a predominance of tall palm trees.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>This stocky woodswallow has an ashy grey upperparts with a darker head and a narrow pale band on the rump. The underside is pinkish grey and the short slaty black tail is tipped in white. The finch-like bill is silvery. In flight the long wing looks very broad at the base giving it a very triangular outline. The first primary is very short. The legs are short and the birds usually perch on high vantage points from which they make aerial sallies. There are no geographic variations in plumage and no subspecies have been designated.</p><p>Males and females are indistinguishable in the field, however an old report suggests that the sexes differ in the colour of the inside of the mouth. Young birds appear barred on the underside.</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n\n<p>Woodswallows are found in a range of habitats from the plains to about 2000 m, over cultivated areas, in forest clearings and often in areas with tall palm trees. The species is widely distributed across Bangladesh, India, Nepal, Sri Lanka, Thailand, Myanmar, Laos, Malaysia and China. They are absent in the very arid regions of western India. They have been recorded on the island of Maldives.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Ashy woodswallows are usually seen in small groups. Several birds may sit huddled side-by-side on the bare branches of a tall tree, sometimes preening each other. They also perch on high vantage points such as powerlines and pylons. From their perches, they make aerial sallies, flapping and gliding to capture insects in the air. Insects may be caught in the beak, transferred and held in their feet, torn up with their bill and swallowed without returning to the perch. They may also return to the perch with prey to feed and will sometimes sit on the ground and have been known to visit bird baths. Although mainly feeding on insects, they may take nectar from flowers of trees such as <i>Erythrina</i>. They have been recorded feeding on toxic butterflies of the family Danaiidae such as <i>Euploea core</i> which are avoided by other birds.</p><p>The breeding season in India is March to June, the nest is a shallow cup placed at some height such as at the base of the frond of a tall palm or a hollow atop a street lighting post. The usual clutch consists of 2\u20133 greenish white eggs with brown spots. Both parents take part in nest building, incubation and feeding the young. They will mob larger birds such as crows and birds of prey that approach too close to the nesting birds. The song consists of a varied combination of wheezy notes that may include imitations of the calls of other birds. The usual call is shrill nasal <i>chewk</i>.</p><p>They make seasonal movements, possibly in response to rainfall.</p><p>The woodswallows, Artamidae, are among the few perching birds that have special feathers called powder down that break up into fine dust that is spread by the birds onto their body when preening. Powder down is also found in the egrets. Members of the family have a brush-tipped tongue. They also have some of the thoracic vertebrae fused into a structure called the notarium.</p><p>A species of ectoparasitic birdlouse, <i>Menacanthus elbeli</i>, and a mite that lives inside the feather quill have been described from hosts of this species. Other organisms associated with the species include endoparasitic trematodes <i>Plagiorchis dactylopharynx</i>, <i>Papillatrema echinata</i> and <i>Stomylotrema travassosi</i>.</p>\n\n<h2><span id=\"References\">References</span></h2>"
    },
    "ashy headed green pigeon": {
        "id": "a016",
        "name": "Ashy-headed Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Treron", "species":"phayrei",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy-headed green pigeon</b> (<i>Treron phayrei</i>) is a pigeon in the genus <i>Treron</i>. It is found from Nepal and northeast India to southwest China, Myanmar, Thailand, Laos, and Vietnam. Many authorities split the species from the pompadour green pigeon complex. It has been added in the Red List of IUCN in 2014.\n</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n\n<p>The ashy-headed green pigeon usually occur singly or in small groups. Its flight is fast and direct, with the regular beats and an occasional sharp flick of the wings that are characteristic of pigeons in general. It eats the seeds and fruits of a wide variety of plants.  It builds a stick nest in a tree and lays two white eggs.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Collar, N.J. 2011. Species limits in some Philippine birds including the Greater Flameback Chrysocolaptes lucidus. Forktail number 27: 29\u201338.</li>\n<li>Rasmussen, P.C., and J.C. Anderton. 2005. Birds of South Asia: the Ripley guide. Lynx Edicions and Smithsonian Institution.</li></ul>"
    },
    "ashy crowned sparrow lark": {
        "id": "a017",
        "name": "Ashy-crowned Sparrow-lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Eremopterix", "species":"griseus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy-crowned sparrow-lark</b> (<i>Eremopterix griseus</i>) is a small sparrow-sized member of the lark family. It is found in the plains in open land with bare ground, grass and scrub across South Asia. The males are well marked with a contrasting black-and-white face pattern, while females are sandy brown, looking similar to a female sparrow. Males are easily detected during the breeding season by the long descending whistle that accompanies their undulating and dive-bombing flight displays.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The ashy-crowned sparrow-lark was originally placed in the genus <i>Alauda</i>. This species is also known by the following alternate names: <b>ash-crowned sparrow-lark</b>, <b>ashy-crowned finch-lark</b>, <b>black-bellied finch-lark</b>, and <b>black-bellied sparrow-lark</b>.\n</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Although some subspecies <i>ceylonensis</i> (from Sri Lanka) and <i>siccata</i> (from Gujarat) have been named, variations are mostly clinal and they are treated as a monotypic species.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>Sparrow sized with a finch-like bill and short legs, these birds are usually seen sitting on the ground, and although they will sometimes perch on wires they do not perch in trees or bushes. The male is sandy brown overall with a black belly, chin, lower lores and eye stripe. The top of the head is ashy (although the base of these crown feathers are dark) unlike the dark brown to black in the black-crowned sparrow-lark which partly overlaps with the range of this species in the arid zone of India and Pakistan. The female is pale brown and very similar to a female house sparrow, although the legs are much shorter and appearing stockier and shorter-necked.</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n\n \n<p>This species is restricted to below 1000 metres elevation and is found from south of the Himalayas to Sri Lanka extending to the Indus river system in the west and to Assam in the east. It is found in stubble, scrub, waste land, riverside sand and tidal flats on the coast. They avoid the interior of the desert zone, a habitat that is more likely to be used by the black-crowned sparrow-lark. The two species overlap partly in range, although they are rarely seen together in the same locations. During the monsoon season, they withdraw from heavy rainfall regions.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>These larks are found in pairs or small groups and form larger flocks in winter. They forage on the ground for seeds and insects. When disturbed they will sometimes crouch and take to flight. They will take fallen grain in fields. They roost at night on the ground, making small depressions in the soil.</p><p>The breeding is irregular and spread out although they breed before the rains mainly during February to September in southern India and May to June in Sri Lanka. The display of the male consists of a song flight that involves soaring up with some chirruping calls and then diving with partly closed wings and then rising up in a glide. This undulating flight is accompanied by a long low whistle at each dive and at the tip of each rise by a sharp <i>chilp</i> note. The display ends with the male descending at an angle and landing on a small mound or clod before repeating the performance after a few minutes. The nest is a compact depression under a tuft of grass in the ground lined with grass and hair with some pebbles arranged on the edge. The usual clutch is two or three eggs and both males and female incubate the eggs. The eggs hatch after about 13 or 14 days and both parents take turns to feed the young although the female is more active.</p><p>In most birds, the right ovary is not fully developed; however, a study found 6 out of 150 specimens had traces of a right ovary although the oviduct was absent.</p>\n<h2><span id=\"In_culture\">In culture</span></h2>\n<p>The name in some Hindi dialects for the bird is <i>dabhak churi</i>, which means \"crouching sparrow\". In British India, it was shot for the table and termed as 'ortolan'.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Shivanarayan, N (1978) Damage to Sorghum by Ashycrowned Finch-Lark. <i>Newsletter for Birdwatchers</i> . 18(3):10.</li>\n<li>Shukla, RN; Shrivastava, M (1985): Some observations on nests and nesting behavior of three birds. <i>Comparative Physiol. Ecol.</i> 10(2):77-78.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li></ul>"
    },
    "ashy throated warbler": {
        "id": "a018",
        "name": "Ashy-throated Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"maculipennis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy-throated warbler</b> (<i>Phylloscopus maculipennis</i>) is a species of leaf warbler (family Phylloscopidae). It was formerly included in the \"Old World warbler\" assemblage.\n</p><p>It is found in Bhutan, China, India, Laos, Myanmar, Nepal, Pakistan, Thailand, and Vietnam. Its natural habitats are temperate forests and subtropical or tropical moist lowland forests.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "asian barred owlet": {
        "id": "a019",
        "name": "Asian Barred Owlet",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Glacudium", "species":"cuculoides",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian barred owlet</b> (<i>Glaucidium cuculoides</i>) is a species of true owl, resident in northern parts of the Indian Subcontinent and parts of Southeast Asia. It ranges across north central and northeast India, Nepal Bhutan, north Bangladesh, and southeast Asia (Myanmar, Thailand, Cambodia, Laos, Vietnam). Its natural habitat is temperate forest.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<p> Media related to <span>Glaucidium cuculoides</span> at Wikimedia Commons<br> Data related to Glaucidium cuculoides at Wikispecies\n</p>\n<ul><li>BirdLife species factsheet for <i>Glaucidium cuculoides</i></li>\n<li><cite class=\"citation web\">\"Glaucidium cuculoides\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Glaucidium+cuculoides&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3D75E76449583F8EA4&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+barred+owlet\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Asian barred owlet media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Asian+barred+owlet+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fasian-barred-owlet-glaucidium-cuculoides&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+barred+owlet\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Asian barred owlet photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Glaucidium cuculoides</i> at IUCN Red List maps</li>\n<li>Audio recordings of Asian barred owlet on Xeno-canto.</li></ul>\n<p><br></p> "
    },
    "asian blue quail": {
        "id": "a020",
        "name": "Asian Blue Quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Synoicus", "species":"chinensis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n\n<p>The <b>king quail</b> (<i>Excalfactoria chinensis</i>), also known as the <b>blue-breasted quail</b>, <b>Asian blue quail</b>, <b>Chinese painted quail</b>, or <b>Chung-Chi</b>, is a species of Old World quail in the family Phasianidae. This species is the smallest \"true quail\", ranging in the wild from southeastern Asia to Oceania with 10 different subspecies. A failed attempt was made to introduce this species to New Zealand by the Otago Acclimatisation Society in the late 1890s. It is quite common in aviculture worldwide, where it is sometimes misleadingly known as the \"<b>button quail</b>\", which is the name of an only very distantly related family of birds, the buttonquails.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The male king quail comes in many colors, including blue, brown, silver, maroon, dark brown &amp; almost black. They have orange feet which are hard and able to withstand a continuous life on the ground like many other game birds. The female is similar to the male but cannot come in shades of blue. They can live up to 13 years in captivity but only 3-6 on average.  In the wild they may live only 1.5 years. The eggs of king quail are a light, creamy-brown colour and slightly pointed at the 'top'; roughly ovular in shape.\n</p>\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>There are six subspecies recognized:</p>\n<ul><li><i>E. c. chinensis</i> <small>(Linnaeus, 1766)</small>: Found from India and Sri Lanka to Malaya, Indochina, southeastern China and Taiwan</li>\n<li><b>Nicobar blue-breasted quail</b> (<i>E. c. trinkutensis</i> <small>Richmond, 1902</small>): Found on Andaman and Nicobar Islands</li>\n<li><i>E. c. lineata</i> <small>(Scopoli, 1786)</small>: Found in the Philippines, Borneo, Lesser Sundas, Sulawesi and Sula Islands</li>\n<li><i>E. c. lepida</i> <small>Hartlaub, 1879</small>: Found in the Bismarck Archipelago</li>\n<li><i>E. c. australis</i> <small>Gould, 1865</small>: Found in eastern Australia</li>\n<li><i>E. c. colletti</i> <small>Mathews, 1912</small>: Found in northern Australia</li></ul><h2><span id=\"Reproduction\">Reproduction</span></h2>\n\n<p>Clutch size varies anywhere from 5 to 13 eggs. Before incubation starts all the eggs composing the clutch will be laid. In captivity, the ideal number of eggs in a clutch is 6 to 8. The chicks hatch after about 16 days.\n</p>\n<h2><span id=\"Conservation_status\">Conservation status</span></h2>\n<h3><span id=\"Australia\">Australia</span></h3>\n<p>King quail are not listed as threatened on the Australian Environment Protection and Biodiversity Conservation Act 1999.\n</p>\n<h4><span id=\"State_of_Victoria.2C_Australia\"></span><span id=\"State_of_Victoria,_Australia\">State of Victoria, Australia</span></h4>\n<p>This species is listed as threatened on the Victorian Flora and Fauna Guarantee Act (1988). Under this Act, an <i>Action Statement</i> for the recovery and future management of this species has not been prepared.</p><p>On the 2007 advisory list of threatened vertebrate fauna in Victoria, this species is listed as endangered.</p>\n<h2><span id=\"Aviculture\">Aviculture</span></h2>\n<p>This quail has been very popular to keep and breed for many years; numerous mutations have been developed. They are quite hardy once they have adjusted to their surroundings and will keep the bottom of an aviary spotless. A great advantage of these quails is that they will live exclusively on the ground, &amp; will not interfere with other birds. The cost of purchasing and maintaining them is very little. They have been known to become hand-tame.\n</p><p>They may be housed in pairs to quartets in a planted aviary, kept singly in bird cages, or in colonies in large flights. Males may compete, as may females. Suspension cages do not work well for this species of quail because of their smaller feet; a much finer size floor wire would need to be employed.</p><p>Females will lay an egg a day if kept on the proper diet. Nesting sites can be as spartan as a quiet corner or a depression in the ground against a wall. Preferably, a clump of long grass, tea tree branches, or pile of loose herbage should be provided. Often a hen will lay eggs on the aviary floor without the use of a nest. This is a sign that the birds are not content with the existing facilities and the provision of a sheltered nest site may result in a nest being built. The cock usually selects the nest site. The nest is a simple scrape in the ground, lined with grasses  and is built by the hen with some assistance from the cock. The eggs measuring 25 x 19mm are variable in colour form the palest of browns to dark olive and peppered with fine black spots. Clutch size varies from 4-13, but occasionally a hen will be found incubating upwards of 20 eggs. It is usually a combined clutch from a number of hens and due to the difficulties of turning and covering a clutch of that size, hatchability is often poor. It may be better to remove some of the eggs and artificially incubate them or foster them.</p><p>The species usually breed year round; incubation times are from 18\u201323 days before chicks hatch. The hen bird will care for the chicks until around 4 weeks of age where they should be separated from parent birds into a separate aviary. \n</p>\n<h3><span id=\"Hybrids_and_mutations\">Hybrids and mutations</span></h3>\n<p>Hybrids of king quail and brown quail are known.\n</p><p>Silvers and cinnamon are the most common colour varieties. Pied, albino, and charcoals are becoming more common. Mutations can be combined.\n</p><p>Occasional cock-feathered hens appear: This is not a mutation as such, but one of a few conditions which has affected normal hormonal balances. It is most often seen when a hen has an ovarian cyst, or growth. They usually stop laying eggs, but can live for a number of years happily just looking like a male. In one case a silver hen was kept for many years by herself, moulted into cock plumage, and laid only extremely pale green shelled eggs for a few seasons before passing of old age.</p>\n<h2><span id=\"Diet\">Diet</span></h2>\n<p>In the wild, the diet of king quails consists of small bugs, seed and various grasses that are available at the time. In aviculture, all birds should be fed a variety of seeds as well as a healthy range of fruit and vegetables. During breeding, hens should be fed calcium-rich food sources such as shell grit to prevent egg binding. Newly hatched chicks should be fed high protein chick crumb mixed in with a little water. Other sources of protein include mealworms and various bugs.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>BirdLife Species Factsheet</li>\n<li>ITIS Standard Report Page: Coturnix chinensis taxonomic details (includes subspecies)</li></ul> "
    },
    "asian brown flycatcher": {
        "id": "a021",
        "name": "Asian Brown Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Muscicapa", "species":"dauurica",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian brown flycatcher</b>  (<i>Muscicapa dauurica</i>) is a small passerine bird in the flycatcher family Muscicapidae. The word <i>Muscicapa</i> comes from the Latin <i>musca</i>, a fly and <i>capere</i>, to catch. The specific <i>dauurica</i> refers to Dauria, an area of south-eastern Siberia named after a local nomadic tribe.</p><p>This is an insectivorous species which breeds in Japan, eastern Siberia and the Himalayas. It is migratory and winters in tropical southern Asia from southern  India and Sri Lanka east to Indonesia.\n</p><p>The correct specific epithet for this species is disputed.</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>This species is 13\u00a0cm (5.1\u00a0in) long, including the cocked tail. It is similar in shape to the larger spotted flycatcher, but is relatively longer-tailed. The dark bill is relatively large and broad-based.\nThe adult has grey-brown upperparts, which become greyer as the plumage ages, and whitish underparts with brown-tinged flanks. Young birds have scaly brown upperparts, head and breast.\n</p>\n<h2><span id=\"Geographical_variation\">Geographical variation</span></h2>\n\n \n<p>Although usually treated as monotypic if the brown-streaked flycatcher is not included, Rasmussen and Anderton, in <i>Birds of South Asia. The Ripley Guide</i> argue that populations in the Indian subcontinent and the Andaman Islands should be regarded as a separate subspecies, <i>poonensis</i>, from the nominate race which occupies most of the species' range. They describe <i>poonensis</i> as paler and browner above, with a deeper bill, and mostly pale lower mandible, a more mottled throat, breast and flanks (in fresh plumage), less contrastingly white \"spectacles\" and throat, and perhaps a more rounded wing.</p>\n\n\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<p>Asian brown flycatcher is a common bird found in open woodland and cultivated areas. It nests in a hole in a tree, laying four eggs which are incubated by the female.\n</p><p>The male Asian brown flycatcher sings a simple melodic song during courtship.\n</p><p>This bird is parasitised by the chewing louse <i>Philopterus davuricae.</i>\n</p>\n<h2><span id=\"Vagrancy\">Vagrancy</span></h2>\n<p>The Asian brown flycatcher is an extremely rare vagrant to Western Europe. Records have come from Britain, Denmark, and Sweden, and in addition, there are unproven claims from Ireland, Faeroe, and Norway.</p>\n<h2><span id=\"Britain\">Britain</span></h2>\n<p>On 3 October 2007 a first winter brown flycatcher was discovered at Flamborough Head, East Riding of Yorkshire which attracted hundreds of birdwatchers during its stay which lasted until dusk of the following day. This looks set to become the first accepted record. A previous record, on Fair Isle, on 1\u20132 July 1992  was regarded by the BOURC as not definitely of wild origin. A bird had also been claimed on Holy Island, Northumberland on 9 September 1956, but the identification was not accepted with beyond doubt.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li><cite id=\"CITEREFAlstr\u00f6mHirschfeld1991\" class=\"citation journal\">Alstr\u00f6m, Per; Hirschfeld, Erik (1991). \"Field identification of Brown, Siberian and Grey-streaked Flycatchers\". <i>Birding World</i>. <b>4</b> (8): 271\u2013278.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Birding+World&amp;rft.atitle=Field+identification+of+Brown%2C+Siberian+and+Grey-streaked+Flycatchers&amp;rft.volume=4&amp;rft.issue=8&amp;rft.pages=271-278&amp;rft.date=1991&amp;rft.aulast=Alstr%C3%B6m&amp;rft.aufirst=Per&amp;rft.au=Hirschfeld%2C+Erik&amp;rft_id=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F269392252_Field_identification_of_Brown_Siberian_and_Grey-streaked_Flycatchers&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+brown+flycatcher\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFBradshawJepsonLindsey1991\" class=\"citation journal\">Bradshaw, C.; Jepson, P.J.; Lindsey, N.J. (1991). \"Identification of brown flycatchers\" <span>(PDF)</span>. <i>British Birds</i>. <b>84</b> (12): 527\u2013542.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=British+Birds&amp;rft.atitle=Identification+of+brown+flycatchers&amp;rft.volume=84&amp;rft.issue=12&amp;rft.pages=527-542&amp;rft.date=1991&amp;rft.aulast=Bradshaw&amp;rft.aufirst=C.&amp;rft.au=Jepson%2C+P.J.&amp;rft.au=Lindsey%2C+N.J.&amp;rft_id=https%3A%2F%2Fbritishbirds.co.uk%2Fwp-content%2Fuploads%2Farticle_files%2FV84%2FV84_N12%2FV84_N12_P527_542_A151.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+brown+flycatcher\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFLeader2010\" class=\"citation journal\">Leader, P.J. (2010). \"Brown, Siberian and Grey-streaked Flycatchers: identification and ageing\" <span>(PDF)</span>. <i>British Birds</i>. <b>103</b>: 658\u2013671.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=British+Birds&amp;rft.atitle=Brown%2C+Siberian+and+Grey-streaked+Flycatchers%3A+identification+and+ageing&amp;rft.volume=103&amp;rft.pages=658-671&amp;rft.date=2010&amp;rft.aulast=Leader&amp;rft.aufirst=P.J.&amp;rft_id=https%3A%2F%2Fwww.britishbirds.co.uk%2Fwp-content%2Fuploads%2F2014%2F05%2FV103_N11_P658%25e2%2580%2593671_A.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+brown+flycatcher\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul> "
    },
    "asian emerald cuckoo": {
        "id": "a022",
        "name": "Asian Emerald Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Chrysococcyx", "species":"maculatus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian emerald cuckoo</b> (<i>Chrysococcyx maculatus</i>) is a species of cuckoo in the family Cuculidae. It is found in Bangladesh, Bhutan, Cambodia, China, India, Indonesia, Laos, Malaysia, Myanmar, Nepal, Sri Lanka, Thailand, and Vietnam. Its natural habitats are subtropical or tropical moist lowland forests and subtropical or tropical moist montane forest.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The Asian emerald cuckoo grows to a length of about 18\u00a0cm (7\u00a0in). The adult male has  an iridescent dark green head, upper parts and upper breast, a white lower breast and a green barred belly. Bare skin round the eye is orange and the beak is orange/yellow tipped with black. The adult female has coppery-green upper parts, rusty brown crown and nape and green-barred underparts. Both sexes show a white band on the underwing when in flight. The underparts of the juvenile male lack the white lower breast and are more heavily barred. The voice is a \u201cchweek\u201d uttered while flying, and various whistled twitters.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This cuckoo has a breeding range that extends from the Himalayas eastwards to Myanmar, China and northern Thailand. Further south it is a vagrant or migrant in northern India, Sri Lanka, Malaysia and Sumatra; it is not known to breed in these areas. It frequents forests and woodland margins.</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n<p>The Asian emerald cuckoo mainly forages in the upper levels of the canopy where it feeds on insects and other small invertebrates, including ants, caterpillars and bugs. It is a brood parasite, the females laying their eggs in the nests of other birds, such as the crimson sunbird (<i>Aethopyga siparaja</i>) and the little spiderhunter (<i>Arachnothera longirostra</i>).</p>\n<h2><span id=\"Status\">Status</span></h2>\n<p><i>C. maculatus</i> has a very wide range but is generally an uncommon species. No particular threats have been recognised and the population is believed to be stable, so the International Union for Conservation of Nature has assessed its conservation status as being of \"least concern\".</p>\n<h2><span id=\"References\">References</span></h2> "
    },
    "asian fairy bluebird": {
        "id": "a023",
        "name": "Asian Fairy-bluebird",
        "order": order.PASSERIFORMES,
        "family": familyname.Irenidae,
        "genus":"Irena", "species":"puella",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian fairy-bluebird</b> (<i>Irena puella</i>) is a medium-sized, arboreal passerine bird.\n</p><p>This fairy-bluebird is found in forests across tropical southern Asia, Indochina, the Greater Sundas and Palawan. Two or three eggs are laid in a small cup nest in a tree. It was described by British ornithologist John Latham in 1790. The only other member of the genus and family is the Philippine fairy-bluebird, <i>I. cyanogastra</i>, which replaces the Asian fairy-bluebird in most of the Philippines. Both species are considered as sacred to the Tagalog people as they are perceived as tigmamanukan omens.\n</p><p>The adult Asian fairy bluebird is about 24 to 27 centimetres (9.4 to 10.6\u00a0in). The male has glossy, iridescent blue upperparts, and black underparts and flight feathers. The female and first year male are entirely dull blue-green.\n</p><p>The Asian fairy bluebird eats fruits, nectar and some insects. Its call is a liquid two note <i>glue-it</i>.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>The Asian fairy bluebird measures 24 to 27 centimetres (9.4 to 10.6\u00a0in) in length. The iris is crimson and eyelids pinkish; the bill, legs and claws are black, and mouth a flesh- colour. Marked sexual dimorphism is evident. The male is a shining ultramarine-blue with lilac reflections on its upper plumage, lesser wing coverts, and under tail coverts, while the sides of its head and the whole lower plumage are deep black; greater wing-coverts, quills, and tail black, and some of the coverts tipped with blue, and the middle tail-feathers glossed with blue.\n</p><p>The upper plumage, the lesser wing coverts, and the lower tail coverts of the female are brownish blue, with the edges of the feathers brighter. The middle tail feathers and the outer webs of all the others, except the outer pair, like the upper plumage, and remainder of tail dark brown. primaries and secondaries dark brown. The greater wing coverts, primary coverts, and tertiaries dark brown, with a blue tinge on the outer webs. Sides of the head and whole lower plumage blue, very similar to the upper parts. The young resemble the female. The male changes into adult plumage in March, the change taking place without a moult. The feathers of the upper parts first become fringed with bright blue, then the tail coverts change, and finally the lower plumage changes. Young birds with the lower plumage mixed black and dull blue, and the upper plumage like that of the adult are frequently seen.\n</p><p>There are several subspecies, including <i>I. cyanea malayensis</i> from the Malay Peninsula, where the male differs in having the undertail coverts longer, nearly reaching to the tip of the tail.\n</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The Asian fairy bluebird is found in Sri Lanka and the western coast of India from Travancore up to the latitude of Belgaum and Sawantwadi; Sikkim and the lower ranges of the Himalayas to Dibrugarh in Assam; the Khasi Hills; Cachar; Manipur; Bangladesh; Arrakan; Bago and Taninthayi Division in Burma; the Andaman and Nicobar Islands. In southeast Asia it occurs throughout most of Indochina (including Peninsular Malaysia), Sumatra, Borneo, Java, Palawan, and on smaller nearby islands. In the Indian part of its range this species is confined to the evergreen forests of the hills and plains, but elsewhere it is regular in various types of humid and deciduous forests from lowlands up to about 1,600 metres (5,200\u00a0ft). The species has been reported to be more frequent in mature rainforests and in rustic cardamom plantations under native shade trees than in coffee plantations.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>This bird is common in most of the tracts it frequents, going about in small parties or in pairs.\n</p>\n\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>It breeds from February to April, constructing a shallow cup-shaped nest, sometimes of moss and sometimes of small twigs, in a sapling or small tree. The eggs, which are generally two in number, are greenish white marked with brown, and measure about 1.14\u00a0cm by .77\u00a0cm.</p>\n<h3><span id=\"Feeding\">Feeding</span></h3>\n<p>It feeds principally on fruit and is generally found on the larger forest-trees.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Asian fairy bluebird videos, photos &amp; sounds on the Internet Bird Collection</li></ul> "
    },
    "asian glossy starling": {
        "id": "a024",
        "name": "Asian Glossy Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Strigidae,
        "genus":"Aplonis", "species":"panayensis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian glossy starling</b> (<i>Aplonis panayensis</i>) is a species of starling in the family Sturnidae. It is found in Bangladesh, Brunei, India, Indonesia, Malaysia, Myanmar, the Philippines, Singapore, Taiwan (introduced) and Thailand. Its natural habitats are subtropical or tropical moist lowland forest and subtropical or tropical mangrove forest. There is also a huge number of this species inhabiting towns and cities, where they take refuge in abandoned buildings and trees. They often move in large groups and are considered one of the noisiest species of birds.\n</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "asian green bee eater": {
        "id": "a025",
        "name": "Asian Green Bee-eater",
        "order": order.CORACIIFORMES,
        "family": familyname.Meropidae,
        "genus":"Merops", "species":"orientalis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>green bee-eater</b> (<i>Merops orientalis</i>), also known as <b>little green bee-eater</b>, is a near passerine bird in the bee-eater family. It is resident but prone to seasonal movements and is found widely distributed across sub-Saharan Africa from Senegal and the Gambia to Ethiopia, the Nile valley, western Arabia and Asia through India to Vietnam. They are mainly insect eaters and they are found in grassland, thin scrub and forest often quite far from water. Several regional plumage variations are known and several subspecies have been named.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The green bee-eater was first described by the English ornithologist John Latham in 1801 using its current binomial name. Several populations have been designated as subspecies:</p>\n<ul><li><i>M. o. viridissimus</i> is found from Senegal to northern Ethiopia (has more green on the throat, crown and nape with long streamers)</li>\n<li><i>M. o. cleopatra</i> from the Nile Valley to northern Sudan</li>\n<li><i>M. o. flavoviridis</i> from northern Chad to Sudan</li>\n<li><i>M. o. muscatensis</i> on the Arabian plateau (more yellowish green with narrow gorget on throat)</li>\n<li><i>M. o. cyanophrys</i> found in Israel and the Arabian region (includes <i>meccanus</i>)</li>\n<li><i>M. o. beludschicus</i>(=<i>M. o. biludschicus</i>) Iran to Pakistan (paler colours with a blue throat)</li>\n<li><i>M. o. orientalis</i> in India and Sri Lanka (has head and neck tinged with rufous).</li>\n<li><i>M. o. ferrugeiceps</i> (=<i>birmanus</i>) in northeastern India, Myanmar, Thailand and Vietnam (has rufous crown, mane and mantle). I</li>\n<li><i>M. o. ceylonicus</i> in Sri Lanka has the nape and hindneck with more pronounced golden brown sheen often included within the nominate race</li></ul><p>A study of species within the genus <i>Merops</i> based on plumage characteristics found that most of the subspecies of <i>M. o. orientalis</i> grouping together with the most similar species being <i>Merops leschenaulti</i> and subspecies <i>M. o. ferrugeiceps</i> appeared closer to that group.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>Like other bee-eaters, this species is a richly coloured, slender bird. It is about 9\u00a0inches (16\u201318\u00a0cm) long with about 2\u00a0inches made up by the elongated central tail-feathers. The sexes are not visually distinguishable. The entire plumage is bright green and tinged with blue especially on the chin and throat. The crown and upper back are tinged with golden rufous. The flight feathers are rufous washed with green and tipped with blackish. A fine black line runs in front of and behind the eye. The iris is crimson and the bill is black while the legs are dark grey. The feet are weak with the three toes joined at the base. Southeast Asian birds have rufous crown and face, and green underparts, whereas Arabian <i>beludschicus</i> has a green crown, blue face and bluish underparts. The wings are green and the beak is black. The elongated tail feathers are absent in juveniles. Sexes are alike.</p><p>The calls is a nasal trill <i>tree-tree-tree-tree</i>, usually given in flight.</p><p>Leucistic individuals have been noted.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This is an abundant and fairly tame bird, familiar throughout its range. It is a bird which breeds in open country with bushes. In Africa and Arabia it is found in arid areas, but is more diverse in its habitats further east.  This species often hunts from low perches, maybe only a metre or less high. It readily makes use of fence wires and electric wires. Unlike some other bee-eaters, they can be found well away from water.</p><p>They are mostly seen in the plains but can sometimes be found up to 5000 or 6000 feet in the Himalayas. They are resident in the lowlands of South Asia but some populations move seasonally but the patterns are not clear, moving away to drier regions in the rainy season and to warmer regions in winter. In parts of Pakistan, they are summer visitors.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<p>Like other species in the genus, bee-eaters predominantly eat insects, especially bees, wasps and ants, which are caught in the air by sorties from an open perch. Before swallowing prey, a bee-eater removes stings and breaks the exoskeleton of the prey by repeatedly thrashing it on the perch. Migration is not known but they make seasonal movements in response to rainfall. These birds are somewhat sluggish in the mornings and may be found huddled next to each other on wires sometimes with their bills tucked in their backs well after sunrise. They sand-bathe more frequently than other bee-eater species and will sometimes bathe in water by dipping into water in flight. They are usually seen in small groups and often roost communally in large numbers (200-300). The birds move excitedly at the roost site and call loudly, often explosively dispersing before settling back to the roost tree.\nThe little green bee-eater is also becoming common in urban and sub-urban neighborhoods, and has been observed perching on television antennae, only to launch into a brief, zig-zag flight formation to catch an insect, then return to the same perch and consume the meal. This behaviour is generally observed between the hours of 7:00 and 8:00am, and after 4:00pm.\n</p>\n\n<p>The breeding season is from March to June. Unlike many bee-eaters, these are often solitary nesters, making a tunnel in a sandy bank. The breeding pairs are often joined by helpers. They nest in hollows in vertical mud banks. The nest tunnel that they construct can run as much as 5 feet long and the 3-5 eggs are laid on the bare ground in the cavity at the end of the tunnel. The eggs are very spherical and glossy white. Clutch size varies with rainfall and insect food density. Both sexes incubate. The eggs hatch asynchronously with an incubation period of about 14 days and the chicks grow fledge in 3 to 4 weeks and in the fledging stage show a reduction in body weight.from Sde Boker, Israel|left]]A study suggested that green bee-eaters may be capable of interpreting the behaviour of human observers. They showed an ability to predict whether a human at a particular location would be capable of spotting the nest entrance and then behaved appropriately to avoid giving away the nest location. The ability to look at a situation from another's point of view was previously believed to be possessed only by primates.</p><p>Riverside habitats were found to support high populations in southern India (157 birds per square kilometre) dropping off too 101 per km\u00b2 in agricultural areas and 43-58 per square km near human habitations.</p><p>They feed on flying insects and can sometimes be nuisance to bee-keepers. The preferred prey was mostly beetles followed by hymenopterans. Orthopterans appear to be avoided. They are sometimes known to take crabs. Like most other birds they regurgitate the hard parts of their prey as pellets.</p><p>An endoparasitic nematode (<i>Torquatoides balanocephala</i>) sometimes infects their gizzard. A protozoal parasite in their blood, <i>Haemoproteus manwelli</i>, has been described from India.</p>\n<ul class=\"gallery mw-gallery-packed\"><li class=\"gallerybox\" style=\"width: 272px\">\n\t\t<li class=\"gallerybox\" style=\"width: 485.33333333333px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li></ul>\n<p>Template:Https://youtu.be/5q7TMPFOTz4\n</p> "
    },
    "asian house martin": {
        "id": "a026",
        "name": "Asian House Matin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Delichon", "species":"dasypus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>Asian house martin</b> (<i>Delichon dasypus</i>) is a migratory passerine bird of the swallow family Hirundinidae. It has mainly blue-black upperparts, other than its white rump, and has pale grey underparts. Its three subspecies breed in the Himalayas and in central and eastern Asia, and spend the winter lower in the mountains or in Southeast Asia. This species is locally abundant and is expanding northward in Siberia, so there are no concerns about its conservation status.\n</p><p>This martin breeds in colonies, building mud nests under an overhang on a vertical cliff or the wall of a building. Both sexes build the nest, incubate the three or four white eggs and feed the chicks. The Asian house martin feeds on small insects taken in flight, usually caught high in the air. The presence of terrestrial springtails and Lepidoptera larvae in its diet indicates that food is sometime picked from the ground.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Asian house martin was first formally described from a bird collected in Borneo by French naturalist and ornithologist Charles Lucien Bonaparte in 1850 as <i>Chelidon dasypus</i>, shortly before it was moved to the new genus <i>Delichon</i> by British entomologist Frederic Moore and American naturalist Thomas Horsfield in 1854. <i>Delichon</i> is an anagram of the Ancient Greek term <i>\u03c7\u03b5\u03bb\u03b9\u03b4\u03ce\u03bd</i> (<i>chel\u012bd\u014dn</i>), meaning \"swallow\", and <i>dasypus</i> is from Greek <i>\u03b4\u03b1\u03c3\u03cd\u03c0\u03bf\u03c5\u03c2</i> \"rough-legged\". This martin's closest relatives are the two other members of the genus <i>Delichon</i>, the Nepal house martin and the common house martin.\nThere are three subspecies:</p>\n<ul><li><i>D. d. dasypus</i>, the nominate subspecies described by Bonaparte, which breeds in eastern Russia and nearby islands</li>\n<li><i>D. d. cashmeriensis</i>, the Himalayan and central Asian form described by English ornithologist John Gould in 1858 from a Kashmiri specimen obtained by Andrew Leith Adams</li>\n<li><i>D. d. nigrimentalis</i>, the form which is found in the south east of the breeding range, was described by German ornithologist Ernst Hartert in 1910 from a specimen taken in Fujian, southeast China.</li></ul>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The adult Asian house martin of the nominate subspecies is 12\u00a0cm (4.7\u00a0in) long, dark steel blue above with a contrasting white rump, grey-washed white underparts, and a slightly forked tail. The tail and upperwings are brownish-black, and the underwings are grey-brown. The legs and feet are brownish-pink and covered with white feathers, the eyes are brown, and the bill is black. There are few differences in appearance between the sexes, although the male is somewhat whiter below than the female, especially in fresh plumage. The juvenile bird is less glossy and has dark brown upperparts, sometimes with a brownish wash to the rump, and grey-white underparts.</p><p><i>D. d. cashmiriensis</i> has brighter blue upperparts and a whiter rump than the slightly larger nominate race. The third, smallest, race is <i>D. d. nigrimentalis</i>.  All three subspecies can be distinguished from the similar Nepal house martin by the latter species' black chin, black undertail coverts and much squarer tail. The Asian house martin is more similar to the common house martin, but is darker underneath and has a less deeply forked tail. Confusion is most likely between adult male Asian house martins, which have paler underparts, and the eastern race of common house martin, <i>D. urbicum lagopodum</i> which has a less forked tail than the western subspecies, although it still shows a more pronounced fork than Asian.</p><p>This species\u2019 song is a rippling metallic trill, and is a sibilant twitter, and call is a dry metallic cheep, often with two or three syllables. It is similar to that of common house martin, but more rasping.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The nominate subspecies of the Asian house martin, <i>D. d. dasypus</i>, breeds in the southeast of Russia, the Kuril Islands, Japan and sometimes Korea. It migrates through eastern China to winter in the Malay Peninsula, Borneo, the Philippines, Java and Sumatra; a few birds remain around hot springs in Japan. <i>D. d. cashmeriensis</i> breeds in the Himalayas from Afghanistan east to Sikkim and northwards into Tibet and western and central China. It is found between 1,500\u20135,000\u00a0m (4,900\u201316,400\u00a0ft) altitude, although mainly in the 2,400\u20134,000\u00a0m (7,900\u201313,100\u00a0ft) range. This martin is a short-range migrant, mainly wintering at lower altitudes in the foothills of the Himalayas, but with some birds on the plains of North-eastern India and North-eastern and South-eastern Bangladesh, and smaller numbers further afield in Myanmar and northern Thailand. The third race, <i>D. d. nigrimentalis</i>, breeds in southeastern China and southern Siberia. Its wintering grounds are unknown, but birds in Taiwan just move to lower altitudes in winter. Non-breeding Asian house martin have been recorded as far west as the United Arab Emirates. The range of <i>D. d. cashmeriensis</i> overlaps with that of the Nepal house martin, although they breed at somewhat different altitudes. The height separation and the small differences in appearance seem sufficient to prevent interbreeding.</p><p>The preferred habitat of the Asian house martin is valleys and gorges in mountainous areas or coastal cliffs, where natural caves or crevices provide nest sites. It will also breed on large man-made sites like temples, hotels or power stations. This martin tends to move to lower altitude open or hilly country in its wintering areas, although it has been recorded at up to 2,565\u00a0m (8,415\u00a0ft) in Thailand.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n\n<p>The Asian house martin is a cliff nester, breeding in colonies sited under an overhang on a vertical cliff, usually with the nests not touching. It also frequently nests on large buildings such as temples and bridges, but not to the same extent as the common house martin. The nest is a deep mud cone lined with grasses or feathers. Unlike its relatives, the Asian house martin frequently does not complete the enclosure of its nest, leaving it open instead like a deeper version of a barn swallow nest. A Russian study found half the nests in its Baikal research area to be of the open type, and the Himalayan subspecies <i>D. d. cashmiriensis</i> has also been recorded as building a shallow cup nest.</p><p>The normal clutch is three or four (occasionally up to six) plain white eggs averaging 20.2\u00a0mm \u00d7\u00a014.1\u00a0mm (0.80\u00a0in \u00d7\u00a00.56\u00a0in) and weighing 2.1\u00a0g (0.074\u00a0oz). The incubation and fledging times are unknown, but are probably similar to those of the common house martin, which has an incubation period of 14 to 16 days until the eggs hatch, and a further 22 to 32 days to fledging. Both sexes build the nest, incubate the eggs and feed the chicks.</p>\n<h3><span id=\"Feeding\">Feeding</span></h3>\n<p>This martin feeds on insects taken in flight. As with its relatives it tends to feed high in the air, taking mostly small flies, aphid and Hymenoptera such as winged ants. A wide range of other insects are caught, including Lepidoptera, beetles and lacewings. The presence in the diet of terrestrial springtails and Lepidoptera larvae indicate that food is sometime picked from the ground.</p>\n<h3><span id=\"Predators_and_parasites\">Predators and parasites</span></h3>\n<p>Birds often carry parasites, both external lice and fleas, and internal blood parasites. The Asian house martin is a host of the house martin flea <i>Ceratophyllus hirundinis</i>, and has recently been shown to carry signs of avian malaria. The predators of this martin appear to be little studied, but are presumably similar to those of the common house martin, namely fast flying falcons such as Oriental hobby which can chase down their prey in flight.</p>\n<h2><span id=\"Conservation_status\">Conservation status</span></h2>\n<p>The Asian house martin has a large range that does not appear to be contracting, and its numbers appear to be stable, although the total population is unknown. Since the range is more than 20,000 square kilometres (7,700\u00a0sq\u00a0mi), and there are more 10,000 mature individuals, in the absence of any large decline in distribution or numbers the species does not appear to meet the criteria to be considered vulnerable, and is currently evaluated as Least Concern. This species is locally abundant and appears to be expanding its range northwards in southern Siberia.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2> "
    },
    "asian openbill": {
        "id": "a027",
        "name": "Asian Openbill",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "genus":"Anastomus", "species":"oscitans",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>Asian openbill</b> or <b>Asian openbill stork</b> (<i>Anastomus oscitans</i>) is a large wading bird in the stork family Ciconiidae. This distinctive stork is found mainly in the Indian subcontinent and Southeast Asia. It is greyish or white with glossy black wings and tail and the adults have a gap between the arched upper mandible and recurved lower mandible. Young birds are born without this gap which is thought to be an adaptation that aids in the handling of snails, their main prey. Although resident within their range, they make long distance movements in response to weather and food availability.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Asian openbill was described by the French polymath Georges-Louis Leclerc, Comte de Buffon in 1780 in his <i>Histoire Naturelle des Oiseaux</i> from a specimen collected in Pondichery, India. The bird was also illustrated in a hand-coloured plate engraved by Fran\u00e7ois-Nicolas Martinet in the <i>Planches Enlumin\u00e9es D'Histoire Naturelle</i> which was produced under the supervision of Edme-Louis Daubenton to accompany Buffon's text.  Neither the plate caption nor Buffon's description included a scientific name but in 1783 the Dutch naturalist Pieter Boddaert coined the binomial name <i>Ardea oscitans</i> in his catalogue of the <i>Planches Enlumin\u00e9es</i>. The Asian openbill is now placed in the genus <i>Anastomus</i> that was erected by the French naturalist Pierre Bonnaterre in 1791. The genus name <i>Anastomus</i> is from the Ancient Greek \u03b1\u03bd\u03b1\u03c3\u03c4\u03bf\u03bc\u03bf\u03c9 <i>anastomo\u014d</i> meaning \"to furnish with a mouth\" or \"with mouth wide-opened\". The specific epithet <i>oscitans</i> is the Latin word for \"yawning\".</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The Asian openbill stork is predominantly greyish (non-breeding season) or white (breeding season) with glossy black wings and tail that have a green or purple sheen. The name is derived from the distinctive gap formed between the recurved lower and arched upper mandible of the beak in adult birds. Young birds do not have this gap. The cutting edges of the mandible have a fine brush like structure that is thought to give them better grip on the shells of snails. The tail consists of twelve feathers and the preen gland has a tuft. The mantle is black and the bill is horn-grey. At a distance, they can appear somewhat like a white stork or Oriental stork. The short legs are pinkish to grey, reddish prior to breeding. Non-breeding birds have a smoky grey wings and back instead of white. Young birds are brownish-grey and have a brownish mantle. Like other storks, the Asian openbill is a broad-winged soaring bird, which relies on moving between thermals of hot air for sustained flight. They are usually found in flocks but single birds are not uncommon. Like all storks, it flies with its neck outstretched. It is relatively small for a stork and stands at 68\u00a0cm height (81\u00a0cm long).</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n<p>The usual foraging habitats are inland wetlands and are only rarely seen along river banks and tidal flats. On agricultural landscapes, birds forage in crop fields, irrigation canals, and in seasonal marshes. Birds may move widely in response to habitat conditions. Young birds also disperse widely after fledging. Individuals ringed at Bharatpur in India have been recovered 800\u00a0km east and a bird ringed in Thailand has been recovered 1500\u00a0km west in Bangladesh. Storks are regularly disoriented by lighthouses along the southeast coast of India on overcast nights between August and September. The species is very rare in the Sind and Punjab regions of Pakistan, but widespread and common in India, Sri Lanka, Nepal, Bangladesh, Myanmar, Thailand and Cambodia.</p>\n<h2><span id=\"Food_and_foraging\">Food and foraging</span></h2>\n\n<p>During the warmer part of the day, Asian Openbills soar on thermals and have a habit of descending rapidly into their feeding areas. Groups may forage together in close proximity in shallow water or marshy ground on which they may walk with a slow and steady gait. The Asian openbill feeds mainly on large molluscs, especially <i>Pila</i> species, and they separate the shell from the body of the snail using the tip of the beak. The tip of the lower mandible of the beak is often twisted to the right. This tip is inserted into the opening of the snail and the body is extracted with the bill still under water. Jerdon noted that they were able to capture snails even when blindfolded. The exact action being difficult to see, led to considerable speculation on the method used. Sir Julian Huxley examined the evidence from specimens and literature and came to the conclusion that the bill gap was used like a nutcracker. He held the rough edges of the bill as being the result of wear and tear from such actions. Subsequent studies have dismissed this idea and the rough edge of the bill has been suggested as being an adaptation to help handle hard and slippery shells. They forage for prey by holding their bill tips slightly apart and make rapid vertical jabs in shallow water often with the head and neck partially submerged. The gap in the bill is not used for handling snail shells and forms only with age. Young birds that lack a gap are still able to forage on snails. It has been suggested that the gap allows the tips to strike at a greater angle to increases the force that the tips can apply on snail shells. Smaller snails are often swallowed whole or crushed.  They also feed on water snakes, frogs and large insects. When foraging on agricultural landscapes with a variety of habitats, Asian openbills preferentially use natural marshes and lakes (especially in the monsoon and winter), and irrigation canals (especially in the summer) as foraging habitat.</p>\n<h2><span id=\"Breeding\">Breeding</span></h2>\n\n<p>The breeding season is after the rains, during July to September in northern India and Nepal, and November to March in southern India and Sri Lanka. They may skip breeding in drought years. The Asian openbill breeds colonially, building a rough platform of sticks often on half-submerged trees (often <i>Barringtonia</i>, <i>Avicennia</i> and <i>Acacia</i> species), typically laying two to four eggs. The nesting trees are either shared with those of egrets, cormorants and darters, or can be single-species colonies like in lowland Nepal. Nesting colonies are sometimes in highly disturbed areas such as inside villages and on trees located in crop fields. In lowland Nepal, 13 colonies found in an agricultural landscape had an average colony size of 52, ranging from 5 nests to 130 nests. The majority of these colonies were located on <i>Bombax ceiba</i> trees, with much fewer located on <i>Ficus religiosa</i> and <i>Dalbergia sissoo</i> tree species. Asian openbills preferred trees that were much taller and bigger than trees that were available on the landscape, and selectively used wild and native tree species entirely avoiding species that were important for resources such as fruits (e.g. <i>Mangifera indica</i>) despite such trees being much more common. Religious beliefs have secured important trees such as <i>Ficus</i> species, and agro-forestry has secured the most preferred species, <i>Bombax ceiba</i>, that Asian openbills prefer to locate colonies in lowland Nepal. The nests are close to each other leading to considerable aggressive interactions between birds on neighbouring nests. Both parents take turns in incubation, the eggs hatching after about 25 days. The chicks emerge with cream coloured down and are shaded by the loosely outspread and drooped wings of a parent.</p><p>Initiation of nests in lowland Nepal was highly synchronized, with colonies started during July and August. Breeding success at nests in these colonies was impacted by proximity of colonies to human habitation, and the progression of the breeding season. Colonies closer to human habitation had lower success, and colonies initiated later during the breeding season (when flooding of the rice fields had reduced to allow ripening of the crop) had lower success. Number of chicks that fledged from colonies located on trees in agricultural landscapes in lowland Nepal were similar to that observed in a protected, mangrove reserve in eastern India suggesting that agricultural areas are not always detrimental to large waterbirds such as Asian openbills.</p><p>Nesting openbills in Nepal took an average of 27 minutes to return to nests with food for nestlings and fledglings. The time taken to find food was most impacted by the location of wetlands around colonies, and the progression of the breeding season. Adults look the least time to return with food earlier in the season when the dominant rice crop was most flooded, and time increased as the rice ripened along with the drying out of the fields.</p><p>Like other storks, they are silent except for clattering produced by the striking of the male's bill against that of the female during copulation. They also produce low honking notes accompanied by up and down movements of the bill when greeting a partner arriving at the nest. Males may sometimes form polygynous associations, typically with two females which may lay their eggs in the same nest.</p>\n<h2><span id=\"Relationship_with_other_organisms\">Relationship with other organisms</span></h2>\n<p>Young birds at the nest are sometimes preyed on by imperial, steppe and greater spotted eagles. <i>Chaunocephalus ferox</i>, an intestinal parasite, is a trematode worm found in about 80% of the wild populations in Thailand while another species <i>Echinoparyphium oscitansi</i> has been described from Asian openbills in Thailand. Other helminth parasites such as <i>Thapariella anastomusa</i>, <i>T. oesophagiala</i> and  <i>T. udaipurensis</i> have been described from the oesophagus of storks.</p><p>In colonial India, sportsmen shot the openbill for meat, calling it the \"beef-steak bird\" (although this name was also used for the woolly-necked stork).</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Asian Openbill (Anastomus oscitans) video photos and sounds - Internet Bird Collection</li>\n<li>Asian Openbill <i>Anastomus oscitans</i> - Adult - Oriental Bird Images</li></ul> "
    },
    "asian palm swift": {
        "id": "a028",
        "name": "Asian Palm-swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Cypsiurus", "species":"balasiensis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian palm swift</b> (<i>Cypsiurus balasiensis</i>) is a small swift. It is very similar to the African palm swift, <i>Cypsiurus parvus</i>, and was formerly considered to be the same species.\n</p><p>It is a common resident breeder in tropical Asia from India to the Philippines. The down and feather nest is glued to the underside of a palm leaf with saliva, which is also used to secure the usually two or three eggs. This is a bird of open country and cultivation, which is strongly associated with oil palms.</p><p>This 13\u00a0cm long species is mainly pale brown in colour. It has long swept-back wings that resemble a crescent or a boomerang. The body is slender, and the tail is long and deeply forked, although it is usually held closed. The call is a loud shrill scream.</p><p>Sexes are similar, and young birds differ from adults mainly in their shorter tails. Asian palm swift has very short legs which it uses only for clinging to vertical surfaces, since swifts never settle voluntarily on the ground.</p><p>These swifts spend most of their lives in the air, living on the insects they catch in their beaks. Asian palm swifts often feed near the ground, and they drink on the wing.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li><cite id=\"CITEREFCompilers:_Stuart_Butchart,_Jonathan_Ekstrom2008\" class=\"citation web\">Compilers: Stuart Butchart, Jonathan Ekstrom (2008). \"<i>Asian Palm-swift - BirdLife Species Factsheet</i>\". <i>Evaluators: Jeremy Bird, Stuart Butchart</i>. BirdLife International<span>. Retrieved <span>May 15,</span> 2009</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Evaluators%3A+Jeremy+Bird%2C+Stuart+Butchart&amp;rft.atitle=Asian+Palm-swift+-+BirdLife+Species+Factsheet&amp;rft.date=2008&amp;rft.au=Compilers%3A+Stuart+Butchart%2C+Jonathan+Ekstrom&amp;rft_id=http%3A%2F%2Fwww.birdlife.org%2Fdatazone%2Fspecies%2Findex.html%3Faction%3DSpcHTMDetails.asp%26sid%3D1772m%3D0&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+palm+swift\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul> "
    },
    "asian pied starling": {
        "id": "a029",
        "name": "Asian Pied Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Gracupica", "species":"contra",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>pied myna</b> or <b>Asian pied starling</b> (<i>Gracupica contra</i>) is a species of starling found in the Indian subcontinent and Southeast Asia. They are usually found in small groups mainly on the plains and low foothills. They are often seen within cities and villages although they are not as bold as the common myna. They produce a range of calls made up of liquid notes. Several slight plumage variations exist in the populations and about five subspecies are named.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n\n<p>The species has been included in the genus <i>Sturnus</i> and <i>Sturnopastor</i> in the past but recent studies do not support its inclusion within <i>Sturnus</i> leading to the reinstatement of an older genus name <i>Gracupica</i>. It has been claimed that the species name \"contra\" is derived from an Indian name for it, although this has not been traced subsequently.</p>\n\n<p>The nominate subspecies (based on the species description given by Linnaeus in 1758) is found mainly along the Gangetic plains extending south into Andhra Pradesh and east to Bangladesh. The population in northeastern India (Sadiya to Tirap and the Naga Hills) was named as <i>sordida</i> (originally <i>Sturnus contra sordidus</i>) by Sidney Dillon Ripley in 1950. This form differs from the Indian form in having reduced streaking on the shoulders and nape. The populations in Manipur south to Myanmar and east to Yunnan have the white extending over the eye and are included in the subspecies <i>superciliaris</i> first described by Edward Blyth in 1863. The subspecies in Thailand, Laos and Cambodia is included in <i>floweri</i> ( Sharpe, 1897) while <i>jalla</i> described by Horsfield in 1821 is found on Sumatra, Java and Bali.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>This myna is strikingly marked in black and white and has a yellowish bill with a reddish bill base. The bare skin around the eye is reddish. The upper body, throat and breast are black while the cheek, lores, wing coverts and rump are contrastingly white. The sexes are similar in plumage but young birds have dark brown in place of black. The subspecies vary slightly in plumage, extent of streaking of the feathers and in measurements.\n</p><p>The flight is slow and butterfly-like on round wings.</p><p>Leucistic individuals have been recorded.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The species is found mainly in the plains but in the foothills up to about 700m above sea level. They are found mainly in areas with access to open water. Their main distribution in India is from the Gangetic plains extending south to the Krishna River. Their range is increasing, with populations establishing more recently in Pakistan, Rajkot, and Bombay (since 1953), possibly aided by trade in caged birds and accidental escape. Their westerward spread in India particularly in parts of Rajasthan has been aided by changes in irrigation and farming patterns, and the spread into Sumatra has been aided by deforestation. The species has also established itself in Dubai, UAE.</p><p>The habitat is lowland open areas with scattered trees near water, often near human habitation. This species is often seen at sewage farms and refuse tips.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n\n<p>These starlings are usually found in small groups, foraging mainly on the ground but perching on trees and buildings. Birds in a group call frequently with a wide repertoire that includes whistles, trills, buzzes, clicks, and warbling calls. Young birds taken into captivity have been trained to imitate tunes of other birds.\n</p><p>Both sexes sing. They forage in fields, lawns and on open ground feeding on grains, fruit, insects, earthworms and molluscs usually taken from the ground. Like many other starlings, they often use a prying or gaping action, piercing soil and then opening apart the bill to dislodge hidden food. The strong protractor muscles allow them to part a mat of grass and their eyes are positioned to obtain a binocular view of the space between the parted beak. They often feed in grazing land or among cattle.</p><p>The breeding season in India is spread from March to September. With the onset of breeding, the sizes of flocks decline and birds pair up. Courtship involves calling, fluffing of the feathers and head bobbing. The nest is a loose mass of straw formed into a dome with an entrance on the side and placed in a large tree (often banyan, mango, jackfruit, rosewood) or sometimes on man-made structures, often close to human habitation. Several pairs will breed in the same vicinity. The usual clutch is made up of about four to six glossy blue eggs. Each egg is laid with a day in between and incubation begins only after the third or fourth egg is laid. The eggs hatch after 14 to 15 days. The young are brooded for two weeks, the female staying at the nest during the night. Both parents feed the chicks until they fledge and leave after three weeks. More than one brood may be raised in a season.</p><p>An instance of interspecific feeding, where an adult of a common myna fed a young pied myna has been reported.</p><p>These mynas form communal roosts at night and jointly defend nesting areas.</p>\n<h2><span id=\"In_culture\">In culture</span></h2>\n<p>The ability of these mynas to mimic human voices made them popular as cagebirds. The Sema Nagas will not eat this bird as they believe it is the reincarnation of a human. They are considered to be generally beneficial because they eat many insects.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Ray, D (1972) Pied Myna <i>Sturnus contra</i> in Delhi. <i>Newsletter for Birdwatchers</i>. 12(10):11.</li>\n<li>Narang, ML; Lamba, BS (1976) On the feeding-time and feeding-area preference of Indian Pied Myna, <i>Sturnus contra</i> Linn. Newsl. Zool. Surv. India 2(3), 83\u201386.</li>\n<li>Gupta, AP (1982) About the distribution of birds. <i>Newsletter for Birdwatchers</i>. 22(2):10</li>\n<li>Saini, Harjeet K; Chawla, Geeta; Dhindsa, Manjit S (1995): Food of Pied Myna <i>Sturnus contra</i> in the agroecosystem of Punjab. Pavo 33(1&amp;2):47\u201362.</li>\n<li>Chawla, G (1993) Ecological studies on the Pied Myna (<i>Sturnus contra</i>) in an intensively cultivated area. M.Sc. Thesis, Punjab Agricultural University, Ludhiana.</li>\n<li><cite id=\"CITEREFGupta,_SKBR_Maiti1986\" class=\"citation journal\">Gupta, SK &amp; BR Maiti (1986). \"Study of atresia in the ovary during the annual reproductive cycle and nesting cycle of the pied myna\". <i>Journal of Morphology</i>. <b>190</b> (3): 285\u2013296. doi:10.1002/jmor.1051900305.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Journal+of+Morphology&amp;rft.atitle=Study+of+atresia+in+the+ovary+during+the+annual+reproductive+cycle+and+nesting+cycle+of+the+pied+myna&amp;rft.volume=190&amp;rft.issue=3&amp;rft.pages=285-296&amp;rft.date=1986&amp;rft_id=info%3Adoi%2F10.1002%2Fjmor.1051900305&amp;rft.au=Gupta%2C+SK&amp;rft.au=BR+Maiti&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFGupta_SKB._R._Maiti1987\" class=\"citation journal\">Gupta SK &amp; B. R. Maiti (1987). \"The male sex accessories in the annual reproductive cycle of the Pied Myna Sturnus contra contra\". <i>J. Yamashina Inst. Ornithol</i>. <b>19</b>: 45\u201355. doi:<span title=\"Freely accessible\">10.3312/jyio1952.19.45</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Yamashina+Inst.+Ornithol.&amp;rft.atitle=The+male+sex+accessories+in+the+annual+reproductive+cycle+of+the+Pied+Myna+Sturnus+contra+contra&amp;rft.volume=19&amp;rft.pages=45-55&amp;rft.date=1987&amp;rft_id=info%3Adoi%2F10.3312%2Fjyio1952.19.45&amp;rft.au=Gupta+SK&amp;rft.au=B.+R.+Maiti&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFIslam2001\" class=\"citation journal\">Islam, M.S. (2001). \"Southward Migration of Shorebirds in the Ganges Delta, Bangladesh\" <span>(PDF)</span>. <i>The Stilt</i>. <b>39</b> (31\u201336): 34.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Stilt&amp;rft.atitle=Southward+Migration+of+Shorebirds+in+the+Ganges+Delta%2C+Bangladesh&amp;rft.volume=39&amp;rft.issue=31%E2%80%9336&amp;rft.pages=34&amp;rft.date=2001&amp;rft.aulast=Islam&amp;rft.aufirst=M.S.&amp;rft_id=http%3A%2F%2Fwww.awsg.org.au%2Fstilt%2FStilt-39.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFTyagi,_A.K.Lamba,_B.S.\" class=\"citation book\">Tyagi, A.K.; Lamba, B.S. <i>A contribution to the breeding biology of two Indian mynas. Miscellaneous publication. Occasional paper no. 5</i> <span>(PDF)</span>. Calcutta: Zoological Survey of India.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=A+contribution+to+the+breeding+biology+of+two+Indian+mynas.+Miscellaneous+publication.+Occasional+paper+no.+5.&amp;rft.place=Calcutta&amp;rft.pub=Zoological+Survey+of+India&amp;rft.au=Tyagi%2C+A.K.&amp;rft.au=Lamba%2C+B.S.&amp;rft_id=http%3A%2F%2Ffaunaofindia.nic.in%2FPDFVolumes%2Foccpapers%2F055%2Findex.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Images and videos</li></ul> "
    },
    "asian plain martin": {
        "id": "a030",
        "name": "Asian Plain Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Riparia", "species":"chinensis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>grey-throated martin</b> or <b>Asian plain martin</b> (<i>Riparia chinensis</i>) is a small passerine bird in the <i>swallow</i> family.\n</p><p>The grey-throated martin is found in open habitats such as farmland, grassland and savannah, usually near water. It is found from Tajikistan,  Afghanistan and Indian subcontinent to southern China, Taiwan, and the northern Philippines. It was formerly considered a subspecies of the \"plain martin\", since renamed the brown-throated martin.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Rasmussen, P.C., and J.C. Anderton (2005). <i>Birds of South Asia. The Ripley Guide</i>. Volume 2: attributes and status. Smithsonian Institution and Lynx Edicions, Washington D.C. and Barcelona.</li></ul> "
    },
    "asian stubtail": {
        "id": "a031",
        "name": "Asian Stubtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Scotocercidae,
        "genus":"Urosphena", "species":"squameiceps",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian stubtail</b> (<i>Urosphena squameiceps</i>) is a bird in the family Cettiidae. The species was first described by Robert Swinhoe in 1863. It breeds in Korea, Manchuria and Japan and winters to southern China\u00a0and northern Southeast Asia. Its natural habitat is temperate forest.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>It is a small bird with a short tail.  Males and females are similar in color, as well as juveniles after fledging; they are brown all over with a paler underpart and a darker brown crest and eyeline.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>Breeding Asian stubtails reside in portions of northeastern Asia; non-breeding in parts of southeast Asia including Taiwan, southeastern China, Nepal and Philippines, preferring a habitat of undergrowth in evergreen broadleaf or lowland coniferous forest.</p>\n<h2><span id=\"Behavior\">Behavior</span></h2>\n<h3><span id=\"Voice\">Voice</span></h3>\n<p>Breeding males produce a high-pitched \"shee-shee-shee-shee\" or \"cee-cee-cee\", while both males and females make a call similar to \"chott-chott-chott\".\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p>\n\n<p><br></p> "
    },
    "asian woollyneck": {
        "id": "a032",
        "name": "Asian Woollyneck",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "genus":"Ciconia", "species":" ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>woolly-necked stork</b> or <b>whitenecked stork</b> (<i>Ciconia episcopus</i>) is a large wading bird in the stork family Ciconiidae.  It breeds singly, or in small loose colonies. It is distributed in a wide variety of habitats including marshes in forests, agricultural areas, and freshwater wetlands.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The woolly-necked stork was described by the French polymath Georges-Louis Leclerc, Comte de Buffon in 1780 in his <i>Histoire Naturelle des Oiseaux</i> from a specimen collected from the Coromandel Coast of India. The bird was also illustrated in a hand-coloured plate engraved by Fran\u00e7ois-Nicolas Martinet in the <i>Planches Enlumin\u00e9es D'Histoire Naturelle</i> which was produced under the supervision of Edme-Louis Daubenton to accompany Buffon's text.  Neither the plate caption nor Buffon's description included a scientific name but in 1783 the Dutch naturalist Pieter Boddaert coined the binomial name <i>Ardea episcopus</i> in his catalogue of the <i>Planches Enlumin\u00e9es</i>. The woolly-necked stork is now placed in the genus <i>Ciconia</i> that was erected by the French zoologist Mathurin Jacques Brisson in 1760. The genus name <i>Ciconia</i> is the Latin word for a \"stork\"; the specific epithet <i>episcopus</i> is Latin for \"bishop\".</p><p>Three subspecies are recognised:</p>\n<ul><li><i>C. e. microscelis</i> Gray, GR, 1848 \u2013 Africa south of the Sahara</li>\n<li><i>C. e. episcopus</i> (Boddaert, 1783) \u2013 India to Indochina, the Philippines and Malay Peninsula, north Sumatra</li>\n<li><i>C. e. neglecta</i> (Finsch, 1904) \u2013 south Sumatra, Java, Lesser Sunda Islands, Sulawesi</li></ul><p>The online edition of the <i>Handbook of the Birds of the World</i> treats the African race, <i>C. e. microscelis</i>, as a separate species, the African woolyneck, with the remaining two subspecies becoming the Asian woolyneck.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The woolly-necked stork is a medium-sized stork at 75\u201392\u00a0cm tall. The iris is deep crimson or wine-red. The stork is glistening black overall with a black \"skull cap\", a downy white neck which gives it its name. The lower belly and under-tail coverts are white, standing out from the rest of the dark coloured plumage. Feathers on the fore-neck are iridescent with a coppery-purple tinge. These feathers are elongated and can be erected during displays. The tail is deeply forked and is white, usually covered by the black long under tail coverts. It has long red legs and a heavy, blackish bill, though some specimens have largely dark-red bills with only the basal one-third being black. Sexes are alike. Juvenile birds are duller versions of the adult with a feathered forehead that is sometimes streaked black-and-white. The African birds are described as having the edges of the black cap diffused or with a jagged border compared to a sharp and clean border in the Asian birds. Sexes are identical, though males are thought to be larger. When the wings are opened either during displays or for flight, a narrow band of very bright unfeathered skin is visible along the underside of the forearm. This band has been variously described as being \"neon, orange-red\", \"like a red-gold jewel\", and \"almost glowing\" when seen at close range.</p><p>Small nestlings are pale grey with buffy down on the neck, and a black crown. At fledging age, the immature bird is identical to the adult except for a feathered forehead, much lesser iridescence on feathers, and much longer and fluffier feathers on the neck.</p><p>English common names for this species include Whitenecked Stork, Whiteheaded Stork, Bishop Stork, and the Parson-bird. More recently, the African and Asian populations are considered to be two different species, the African and the Asian Woolly-neck. This is based purely on geographical isolation, but there is no morphological or phylogenetic evidence yet to support this split.\n</p>\n\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>It is a widespread tropical species which breeds in Asia, from India to Indonesia, and throughout Africa. It is a resident breeder building nests on trees located on agricultural fields or wetlands, on natural cliffs, and on cell phone towers. They use a variety of freshwater wetlands including seasonal and perennial reservoirs and marshes, crop lands, irrigation canals and rivers. They are attracted to fires in grasslands and crop fields where they capture insects trying to escape the fire. They use ponds and marshes inside forests in both Africa and Asia, especially in south-east Asia where they use grassy and marshy areas in clearings in evergreen rainforests. In India, they are an uncommon species in coastal habitats. They use coastal areas in Africa also, with birds in Sulawasi observed to be eating sea snakes, and birds on the Kenya coast foraging in coral reefs and mudflats. In an agricultural landscape in north India, woolly-necked storks preferred fallow fields during the summer and monsoon seasons, and natural freshwater wetlands during the winter. Here, irrigation canals were preferentially used during winters when water levels were low, and birds avoided crop fields in all seasons. Assisted by construction of new irrigation canals, this species is spreading to arid areas like the Thar Desert in Rajasthan, India.</p><p>Individuals of this species have been sighted at altitudes of 3,790 m above sea level in China (Napahai wetland), and 3,540 m above sea level in Nepal (Annapurna Conservation Area).</p>\n\n<h2><span id=\"Behavior\">Behavior</span></h2>\n\n<p>Several calls by adult birds have been described including bisyllabic whistles given along with displays at the nest, and a fierce hissing sound when a bird was attacked by a trained falcon. The woolly-necked stork is a broad winged soaring bird, which relies on moving between thermals of hot air for sustained long distance flight. Like all storks, it flies with its neck outstretched. It has also been observed to 'roll, tumble and dive at steep angles' in the air with the wind through its quills making a loud noise. Adult birds have also been observed diving from nests before flying away abruptly in a 'bat-like flight'.</p><p>This species is largely seen as single birds, in pairs, or in small family groups of 4\u20135, and flocks are uncommon. In agricultural landscapes, the species occurs mostly as very small flocks (&lt; 5 birds), though flocks of over 10 birds occur commonly. Flocking is affected by different factors in different areas. In more arid areas, most of the flocks occur in the summer when few wetlands are remaining, whereas in areas with more water, flocks occur largely in winter after chicks have fledged from nests. They often associate with wintering stork species including the Black and White Storks.</p>\n\n<h3><span id=\"Diet\">Diet</span></h3>\n<p>The woolly-necked stork walks slowly and steadily on the ground seeking its prey, which like that of most of its relatives, consists of amphibians, reptiles and insects.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>Typically, a large stick nest is built on a tree, and two to five eggs form the typical clutch, with five eggs being very rare. Birds commonly use both forest trees and solitary trees in agricultural areas to build nests. In India, nests are increasingly being observed in urban areas on cell phone towers. Riverside cliffs are also used occasionally as nest sites.</p>\n<h2><span id=\"Conservation\">Conservation</span></h2>\n<p>The woolly-necked stork is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.\n</p>\n<h2><span id=\"Different_views_.26_aspects\"></span><span id=\"Different_views_&amp;_aspects\">Different views &amp; aspects</span></h2>\n<ul class=\"gallery mw-gallery-traditional\" style=\"max-width: 815px;\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li><i>Birds of The Gambia</i> by Barlow, Wacher and Disley, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a01-873403-32-1</li>\n<li><i>Birds of India</i> by Grimmett, Inskipp and Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Woolly-necked Stork <i>Ciconia episcopus</i> - BirdLife International</li>\n<li>Woolly-necked Stork videos and photos - Internet Bird Collection</li>\n<li>Woollynecked Stork - <i>The Atlas of Southern African Birds</i></li></ul> "
    },
    "baer s pochard": {
        "id": "b001",
        "name": "Baer's Pochard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Aythya", "species":"baeri ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p><b>Baer's pochard</b> (<i>Aythya baeri</i>) is a diving duck found in eastern Asia. It breeds in southeast Russia and northeast China, migrating in winter to southern China, Vietnam, Japan, and India. The name commemorates the Estonian naturalist Karl Ernst von Baer.</p><p>At 41\u201346\u00a0cm (16\u201318\u00a0in), it is similar in size and stance to its close relative, the ferruginous duck (<i>A. nyroca</i>), although the coloration of the drakes (males) is entirely different. Baer's pochard males are similar to those of the greater scaup (<i>A. marila</i>), but have a dark back and upper flanks; the white lower flanks and belly are conspicuous. The females of Baer's pochard and the ferruginous duck are quite similar, but that holds true for the females of almost all <i>Aythya</i> species. Eclipse males resemble females, but retain the white eye.</p><p>Formerly classified as a vulnerable species by the IUCN, recent research shows that its numbers are decreasing more and more rapidly. It was consequently uplisted to endangered status in 2008. In 2012, it was further uplisted to critically endangered. Between 1987 and 2007, there were only eleven reports of groups of 100+ birds in mainland China. A recent census by World Wildlife Fund (WWF) China of Hubei province found just 131 individuals on Liangzihu Lake, and only another three flocks of ten, eight, and three individuals at other sites. Hunting and wetland destruction are thought to be the causes of the decline.</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n<p>Baer's pochard breeds around lakes with rich aquatic vegetation, nesting in dense grass, flooded tussock meadows, or flooded shrubby meadows. In Liaoning, China, it is normally found in densely vegetated coastal wetlands, or around lakes and ponds surrounded by forest. In winter, it occurs on freshwater lakes and reservoirs.</p>\n<h2><span id=\"Footnotes\">Footnotes</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Baer's pochard <i>(Aythya baeri)</i> at ARKive</li>\n<li><cite class=\"citation web\">\"Aythya baeri\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Aythya+baeri&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3D750FE7083EC00313&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaer%27s+pochard\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Baer's pochard media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Baer%26%2339%3Bs+pochard+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fbaers-pochard-aythya-baeri&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaer%27s+pochard\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Baer's pochard photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Aythya baeri</i> at IUCN Red List maps</li>\n<li>Audio recordings of Baer's pochard on Xeno-canto.</li></ul> "
    },
    "baikal grasshopper warbler": {
        "id": "b002",
        "name": "Baikal Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "genus":"Locustella ", "species":"davidi ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Baikal bush warbler</b>, <b>Baikal grasshopper-warbler</b> or <b>David's bush warbler</b> (<i>Locustella davidi</i>) is a migratory species of Old World warbler in the family Locustellidae.</p><p>It breeds from the southern part of the Russian Far East (including the Lake Baikal region) to northeast China (southern Heilungkiang  south to southern Hopeh) and North Korea. It winters from southern China south to northern Thailand.</p><p>Its breeding habitat is taiga forests, especially in clearings or at streams.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<p>P.D. Round &amp; V. Loskot, A reappraisal of the taxonomy of the Spotted Bush-Warbler <i>Bradypterus thoracicus</i> in <i>Forktail</i> 10 (1995): 159-172\n</p><p><br></p>"
    },
    "baikal teal": {
        "id": "b003",
        "name": "Baikal Teal",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":" Sibirionetta", "species":"formosa ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n<p>The <b>Baikal teal</b> (<i>Sibirionetta formosa</i>), also called the <b>bimaculate duck</b> or <b>squawk duck</b>, is a dabbling duck that breeds in eastern Russia and winters in East Asia.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The first formal description of the Baikal teal was by the German naturalist Johann Gottlieb Georgi in 1775 under the binomial name <i>Anas formosa</i>. A molecular phylogentic study published in 2009 found that the genus <i>Anas</i> as then defined was non-monophyletic.  Based on this analysis the genus was split into four proposed genera with the Baikal teal placed in the resurrected genus <i>Sibirionetta</i> that had been introduced by the German zoologist Hans von Boetticher in 1929. The name <i>Sibirionetta</i> is derived from the Latin <i>sibiricus</i> for Siberia and the Ancient Greek <i>n\u0113tta</i> for a duck. The specific epithet <i>formosa</i> is from the Latin <i>formosus</i> for \"beautiful\".</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>At between 39 and 43 centimetres (15 and 17\u00a0in), this duck is slightly larger and longer-tailed than the common teal. The breeding male is unmistakable, with a striking green nape, yellow and black auriculars, neck, and throat. It has a dark crown, and its breast is light brown with dark spots. It has long dropping dark scapulars, and its grey sides are set off on the front and rear with white bars.\n</p><p>The Baikal teal has a height from 11.75 to 15.75 inches and a weighs an average of 1 pound.\n</p><p>The female looks similar to a female green-winged teal but with a longer tail, and a distinctive white spot at the base of the bill and a white throat that angles to the back of the eye. She also has a distinct light eyebrow bordered by a darker crown. The underwing is similar to the Green-winged Teal also, but has a darker leading edge.  The green speculum has an indistinct cinnamon-buff inner border. Some \"females\" have \"bridle\" markings on their faces, but it has been suggested that at least some of these bridled \"females,\" if not all, are in fact juvenile males. The juvenile has a plumage similar to that of the female and can be distinguished from the Common Teal by the pale loral spot.\n</p><p>In non-breeding (eclipse) plumage, the drake looks more like the female, but plumage is a much richer reddish-brown (rufous) colour.\n</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>It breeds within the forest zone of eastern Siberia from the Yenisey basin eastwards to Kamchatka, northern Koryak, eastern Magadan Oblast, northern Khabarovsk Krai, southeastern and northern Sakha east central Irkutsk Oblast, and northern Krasnoyarsk Krai. It is a migratory species, wintering in South Korea, Japan, Taiwan, northern and eastern China, from Beijing down the coast to the Vietnam border, and west to Yunnan then north to Chongqing and Henan.</p><p>It breeds in pools on the tundra edge and within swampy forests. In winter it is found on lowland fresh waters.\n</p>\n<h2><span id=\"Status\">Status</span></h2>\n<p>This species is classified as Least Concern on the IUCN Red List, though it was classified as Vulnerable before 2011 due to hunting and destruction of its wintering wetland habitats. These threats remain, but the Baikal teal is recovering, with increased numbers of wintering birds and some increase in habitat area. Based on the numbers of Baikal teal counted wintering in South Korea, the global population is estimated to be around 1.07\u00a0million individual adults around 2010, a major increase from the tens of thousands counted in the 1980s and few hundreds of thousands in the 2000s.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 235px\">\n\t\t<li class=\"gallerybox\" style=\"width: 235px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Images and movies of the Baikal teal <i>(Anas formosa)</i> on ARKive</li>\n<li>Baikal Teal from the Internet Bird Collection</li></ul> "
    },
    "baillon s crake": {
        "id": "b004",
        "name": "Baillon's Crake",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Zapornia ", "species":"pusilla ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p><b>Baillon's crake</b> (<i>Porzana pusilla</i>) or the <b>marsh crake</b>, is a small waterbird of the family Rallidae.\n</p>\n\n\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>Their breeding habitat is sedge beds in Europe, mainly in the east, and across the Palearctic. They used to breed in Great Britain up to the mid-19th century, but the western European population declined through drainage. There has been a recovery in north-western Europe in recent years, with the recolonisation of Germany and the Netherlands, and breeding suspected in Britain; an Irish record in 2012 was the first there since the 1850s. They nest in a dry location in wet sedge bogs, laying 4\u20138 eggs. This species is migratory, wintering in east Africa and south Asia.\n</p><p>It is also a resident breeder in Africa and Australasia. There is a single North American record of this species on Attu Island in September 2000.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>They are 16\u201318\u00a0cm (6.3\u20137.1\u00a0in) in length, and are similar to the only slightly larger little crake. Baillon's crake has a short straight bill, yellow or green without a red base. Adults have mainly brown upperparts with some white markings, and a blue-grey face and underparts. The rear flanks are barred black and white. They have green legs with long toes, and a short tail which is barred underneath.\n</p><p>Immature Baillon's crakes are similar to the adults, but have extensively barred underparts. The downy chicks are black, as with all rails.\n</p>\n\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n\n<p>These birds probe with their bill in mud or shallow water, also picking up food by sight. They mainly eat insects and aquatic animals.\n</p><p>Baillon's crakes are very secretive in the breeding season, and are then mostly heard rather than seen. They are then noisy birds, with a rattling call like that of the edible frog, or perhaps garganey. They can be easier to see on migration or when wintering.\n</p>\n<h2><span id=\"Taxonomy_and_nomenclature\">Taxonomy and nomenclature</span></h2>\n<p>This bird is named after French naturalist Louis Antoine Francois Baillon. The names <b>marsh crake</b> and <b>tiny crake</b> have previously been used to refer to this species. The genus name <i>Porzana</i> is derived from Venetian terms for small rails, and <i>pusillus</i> is Latin for \"very small\".</p>\n<h2><span id=\"Status\">Status</span></h2>\n<h3><span id=\"International\">International</span></h3>\n<p>The Baillon's crake is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.\n</p>\n<h3><span id=\"Australia\">Australia</span></h3>\n<p>Baillon's crakes are not listed as threatened on the Australian Environment Protection and Biodiversity Conservation Act 1999. However, their conservation status varies from state to state within Australia. For example:\n</p>\n<ul><li>The Baillon's crake is listed as threatened on the Victorian Flora and Fauna Guarantee Act (1988). Under this Act, an <i>Action Statement</i> for the recovery and future management of this species has not yet been prepared.</li>\n<li>On the 2007 advisory list of threatened vertebrate fauna in Victoria, the Baillon's crake is listed as vulnerable.</li></ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Baillon's crake species text in The Atlas of Southern African Birds</li>\n<li>BirdLife species factsheet for <i>Zapornia pusilla</i></li>\n<li><cite class=\"citation web\">\"Zapornia pusilla\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Zapornia+pusilla&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3D&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaillon%27s+crake\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Baillon's crake media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Baillon%26%2339%3Bs+crake+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fbaillons-crake-porzana-pusilla&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaillon%27s+crake\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Baillon's crake photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Zapornia pusilla</i> at IUCN Red List maps</li>\n<li>Audio recordings of Baillon's crake on Xeno-canto.</li></ul> "
    },
    "banded bay cuckoo": {
        "id": "b005",
        "name": "Banded Bay Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Cacomantis ", "species":"sonneratii ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>banded bay cuckoo</b> or <b>bay-banded cuckoo</b> (<i>Cacomantis sonneratii</i>) is a species of small cuckoo found in the Indian subcontinent and Southeast Asia. Like others in the genus they have a round nostril. They are usually founded in well wooded areas mainly in the lower hills. Males sing from exposed branches during the breeding season, which can vary with region. They are distinctive both in their calls as well as plumage with a white eyebrowed appearance and the rufous upperparts with regular dark bands and the whitish underside with fine striations.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The adults are bright rufous or bay on the head and back and are broadly barred with dark brown. The bill is long and slightly curved. A whitish supercilium is distinctive above a dark eye-line. The wing is darker and tail is graduated with a dark brown centre. The tail has a subterminal black band and white tips to the feathers. The sexes are alike. The iris is yellow and the bill is black while the base of the lower mandible is greenish grey. The tarsi are grey. The juvenile is similar but has a pale lower mandible and white fringes to the feathers of the upper body.</p><p>The overall length is about 22\u00a0cm making it about the same size as the syntopic <i>Cacomantis merulinus</i> and <i>Cacomantis variolosus</i>. The hepatic forms of those can be similar but supercilium, long beak and barred tail distinguish this species.</p>\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The species was originally classed in the genus <i>Cuculus</i> by John Latham. The type specimen came from Northeastern India. The species epithet is after the French naturalist and explorer Pierre Sonnerat.</p><p>Four subspecies are generally recognized:\n</p>\n<ul><li>the nominate form from India, Nepal, Thailand, Malay Peninsula</li>\n<li><i>C. s. musicus</i> Ljungh, 1804 (from Java, Bali)</li>\n<li><i>C. s. fasciolatus</i> M\u00fcller, 1843 (Sumatra)</li>\n<li><i>C. s. waiti</i> Baker, 1919 (Sri Lanka)</li></ul><p>Some sources also recognize <i>malayanus</i> (Chasen &amp; Kloss, 1931) from Peninsular Malaysia and <i>schlegeli</i> (Junge, 1948) from Sumatra, Borneo and Palawan (SW Philippines).\n</p>\n<h2><span id=\"Ecology_and_behaviour\">Ecology and behaviour</span></h2>\n<p>Like many other cuckoos, they are brood-parasitic and hosts recorded include the common iora, red-whiskered bulbul, white-bellied erpornis, scarlet minivet, bulbuls and small babblers (<i>Stachyris</i> spp.). The eggs resemble those of the hosts. The incubation and nesting are not well documented. Fledglings of the host are evicted.</p><p>Populations are often migratory or partially migratory. In India, they are found mainly during the monsoons.</p><p>They are found in well-wooded forests, mainly in hill areas. Insects are their primary diet. They capture insects by gleaning as well as by aerial sallying.</p><p>The breeding season varies widely from region to region. Near Bombay they are known to lay eggs from February to August, Assam from April to August while they seem to sing through much of the year in the Eastern Ghats. In Sri Lanka, young have been seen in June and October while adults sing from January to May in the Malay Peninsula.</p><p>The call of this species is distinctive. It is high-pitched four note whistle that has been transcribed as \"wee-ti wee-tee\" or \"smoke-yer-pepper\". The frequency starts at 2.4\u00a0kHz and each note falls in pitch with the strophe lasting a second.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li>\n<li>Calls from Xeno-Canto</li></ul>"
    },
    "bank myna": {
        "id": "b006",
        "name": "Bank Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Acridotheres", "species":"ginginianus ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n<p><b>Bank myna</b> (<i>Acridotheres ginginianus</i>) is a myna found in northern parts of South Asia. It is smaller but similar in colouration to the common myna but differs in having a brick red bare skin behind the eye in place of yellow. It is greyer on the underside and in this and in the presence of a slight tuft of feathers bears some resemblance to the jungle myna. They are found in flocks on the plains of northern and central India, often within towns and cities. Their range appears to be extending southwards in India. The name is derived from their habit of nesting almost exclusively in the earthen banks of rivers where they excavate holes and breed in large colonies.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The head is black on the crown and sides and the upper plumage is slaty grey while the underside is lighter grey with pale pink plumage towards the centre of the abdomen. The wing is black but has a wing patch at the base of the primaries and the tips of the outer tail feathers are pale pinkish buff. The naked skin behind the eye is brick red, the legs are yellow while the iris is deep red. The sexes are indistinguishable in the field. Young birds have a browner head and neck.</p><p>The species is evolutionarily closest to the common myna.</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n<p>The native range of the bank myna is almost restricted to the Indian subcontinent from the Indus valley in the West, to the Gangetic delta in the East and south of the lower foothills of the Himalayas, only rarely being found in sheltered valleys. They are found mainly in the vicinity of open water and their usual habitat is cultivated farmland and open country but flocks will often live within cities, in markets and railway stations. They make use of food scrap disposed by humans, even following catering vehicles at airports to standing aircraft.</p>\n\n<p>The distribution was formerly noted to be restricted north roughly of a line between Bombay and Balasore in Orissa, but the species may be expanding its range. They are also common in Pakistan in the districts of Sind and Punjab. A specimen from Kandahar was earlier considered the westernmost record a vagrant, but the birds have since established in the region. Although mainly resident, they make movements in response to food and weather. The species name of the bird is based on the name given by Latham from a description by Pierre Sonnerat who described <i>Le petit Martin de Gingi</i> in 1782, referring to Gingee near Pondicherry in southern India. Thomas C. Jerdon noted in 1863 that the species did not occur in southern India however the species was recorded in the region in 1914 at Vandalur near Madras. Records from further south in India are however increasing. Breeding colonies have been found in Assam.</p><p>These mynas have been introduced into Kuwait, where they have established in the wild. Flocks have also been found in the Maldives, Taiwan and Japan.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<p>Bank mynas are gregarious foraging in flocks, breeding colonially and roosting together in trees. They perch on livestock and live in crowded towns allowing close approach, often picking up scraps in markets and dumps. They are vociferous and use a wide range of calls that include clucks, croaks, screeches, whistles and warbling elements.</p><p>Bank mynas feed on grain, insects and fruits. Like the common myna, they sometimes follow grazing animals picking up disturbed insects or even ticks on the animals. They feed on ripening crops such as those of sorghum, grape and pearl millet. They feed on a variety of insects, including some that are crop pests such as <i>Achaea janata</i> whose caterpillars feed on castor.</p>\n\n<p>Bank mynas have a nesting season from April to July or August, most birds breeding in May and June. The nest is always built in earth walls, on the banks of rivers, embankments or the sides of open wells. They will sometimes make use of holes in brick walls. Nests have also been recorded between stacked bales of sugarcane stalks. They excavate the nest hole, the egg chamber sometimes 4 to 7 feet from the entrance. The nest is lined with grass, feathers and sometimes snake sloughs. About four of five pale sky blue or greenish-blue eggs is the usual clutch. Two broods may be raised in the same season. The eggs hatch after about 13 to 14 days. Nestlings open their eyes after about 5 days and fledge in about 21 days. About 38% of the eggs hatched into young that fledged in one study.</p><p>A species of coccidian parasite, <i>Isospora ginginiana</i>, and several species nematode (<i>Oxyspirura</i>, <i>Choanotaenia</i>, <i>Hymenolepis</i> sp.) have been described from the species.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n\n<ul><li><cite id=\"CITEREFDhindsa,_MS1980\" class=\"citation journal\">Dhindsa, MS (1980). \"Bank Myna <i>Acridotheres ginginianus</i> (Latham): A good predator of House-Flies, <i>Musca domestica</i> L.\". <i>Science &amp; Culture</i>. <b>46</b> (8): 294.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Science+%26+Culture&amp;rft.atitle=Bank+Myna+Acridotheres+ginginianus+%28Latham%29%3A+A+good+predator+of+House-Flies%2C+Musca+domestica+L.&amp;rft.volume=46&amp;rft.issue=8&amp;rft.pages=294&amp;rft.date=1980&amp;rft.au=Dhindsa%2C+MS&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFFawcus,_LR1943\" class=\"citation journal\">Fawcus, LR (1943). \"Note on the distribution of the Bank Myna in Eastern Bengal\". <i>Jour. Bengal Nat. Hist. Soc</i>. <b>17</b> (4): 119.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Jour.+Bengal+Nat.+Hist.+Soc.&amp;rft.atitle=Note+on+the+distribution+of+the+Bank+Myna+in+Eastern+Bengal&amp;rft.volume=17&amp;rft.issue=4&amp;rft.pages=119&amp;rft.date=1943&amp;rft.au=Fawcus%2C+LR&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFJior,_RSDhindsa,_Manjit_SToor,_HS1995\" class=\"citation journal\">Jior, RS; Dhindsa, Manjit S; Toor, HS (1995). \"Nests and nest contents of the Bank Myna <i>Acridotheres ginginianus</i>\". <i>Tigerpaper</i>. <b>22</b> (1): 25\u201328.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Tigerpaper&amp;rft.atitle=Nests+and+nest+contents+of+the+Bank+Myna+Acridotheres+ginginianus&amp;rft.volume=22&amp;rft.issue=1&amp;rft.pages=25-28&amp;rft.date=1995&amp;rft.au=Jior%2C+RS&amp;rft.au=Dhindsa%2C+Manjit+S&amp;rft.au=Toor%2C+HS&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFKhera,_SKalsi,RS1986\" class=\"citation journal\">Khera, S; Kalsi,RS (1986). \"Diurnal time budgets of the Bank Myna, <i>Acridotheres ginginianus</i> (Sturnidae) during prelaying, laying and incubation periods\". <i>Pavo</i>. <b>24</b> (1&amp;2): 25\u201332.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=Diurnal+time+budgets+of+the+Bank+Myna%2C+Acridotheres+ginginianus+%28Sturnidae%29+during+prelaying%2C+laying+and+incubation+periods&amp;rft.volume=24&amp;rft.issue=1%262&amp;rft.pages=25-32&amp;rft.date=1986&amp;rft.au=Khera%2C+S&amp;rft.au=Kalsi%2CRS&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFS_KheraR_S_Kalsi1986\" class=\"citation journal\">S Khera; R S Kalsi (1986). \"Waking and roosting behaviour of the Bank Myna, <i>Acridotheres ginginianus</i>, in Chandigarh and surrounding areas\". <i>Pavo</i>. <b>24</b> (1&amp;2): 55\u201368.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=Waking+and+roosting+behaviour+of+the+Bank+Myna%2C+Acridotheres+ginginianus%2C+in+Chandigarh+and+surrounding+areas&amp;rft.volume=24&amp;rft.issue=1%262&amp;rft.pages=55-68&amp;rft.date=1986&amp;rft.au=S+Khera&amp;rft.au=R+S+Kalsi&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFParasara,_UAParasharya,_BMYadav,DN1991\" class=\"citation journal\">Parasara, UA; Parasharya, BM; Yadav,DN (1991). \"Studies on the nestling food of the Bank Myna <i>Acridotheres ginginianus</i> (Latham)\". <i>Pavo</i>. <b>28</b> (1&amp;2): 37\u201342.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=Studies+on+the+nestling+food+of+the+Bank+Myna+Acridotheres+ginginianus+%28Latham%29&amp;rft.volume=28&amp;rft.issue=1%262&amp;rft.pages=37-42&amp;rft.date=1991&amp;rft.au=Parasara%2C+UA&amp;rft.au=Parasharya%2C+BM&amp;rft.au=Yadav%2CDN&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFParasharya,_BMDodia,_JFMathew,_KLYadav,_DN1996\" class=\"citation journal\">Parasharya, BM; Dodia, JF; Mathew, KL; Yadav, DN (1996). \"The role of birds in the natural regulation of <i>Helicoverpa armigera</i> Hubner in wheat\". <i>Pavo</i>. <b>34</b> (1&amp;2): 33\u201338.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=The+role+of+birds+in+the+natural+regulation+of+Helicoverpa+armigera+Hubner+in+wheat&amp;rft.volume=34&amp;rft.issue=1%262&amp;rft.pages=33-38&amp;rft.date=1996&amp;rft.au=Parasharya%2C+BM&amp;rft.au=Dodia%2C+JF&amp;rft.au=Mathew%2C+KL&amp;rft.au=Yadav%2C+DN&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul> "
    },
    "bar headed goose": {
        "id": "b007",
        "name": "Bar-headed Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anser ", "species":"indicus ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-headed goose</b> (<i>Anser indicus</i>) is a goose that breeds in Central Asia in colonies of thousands near mountain lakes and winters in South Asia, as far south as peninsular India. It lays three to eight eggs at a time in a ground nest. It is known for the extreme altitudes it reaches when migrating across the Himalayas.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The grey goose genus <i>Anser</i> has no other member indigenous to the Indian region, nor any at all to the Ethiopian, Australian, or Neotropical regions. Ludwig Reichenbach placed the bar-headed goose in the monotypic genus <i>Eulabeia</i> in 1852, though John Boyd's taxonomy treats both <i>Eulabeia</i> and the genus <i>Chen</i> as subgenera of <i>Anser</i>.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The bird is pale grey and is easily distinguished from any of the other grey geese of the genus <i>Anser</i> by the black bars on its head. It is also much paler than the other geese in this genus. In flight, its call is a typical goose honking. A mid-sized goose, it measures 71\u201376\u00a0cm (28\u201330\u00a0in) in total length and weighs 1.87\u20133.2\u00a0kg (4.1\u20137.1\u00a0lb).\n</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n\n\n<p>The summer habitat is high-altitude lakes where the bird grazes on short grass. The species has been reported as migrating south from Tibet, Kazakhstan, Mongolia and Russia before crossing the Himalaya. The bird has come to the attention of medical science in recent years as having been an early victim of the H5N1 virus, HPAI (highly pathogenic avian influenza), at Qinghai. It suffers predation from crows, foxes, ravens, sea eagles, gulls and others. The total population may, however, be increasing, but it is complex to assess population trends, as this species occurs over more than 2,500,000\u00a0km<sup>2</sup> (970,000\u00a0sq\u00a0mi).</p><p>\nThe bar-headed goose is one of the world's highest-flying birds, having been heard flying across Mount Makalu\u00a0\u2013 the fifth highest mountain on earth at 8,481\u00a0m (27,825\u00a0ft)\u00a0\u2013 and apparently seen over Mount Everest\u00a0\u2013 8,848\u00a0m (29,029\u00a0ft)\u00a0\u2013 although this is a second-hand report with no verification. This demanding migration has long puzzled physiologists and naturalists: \"there must be a good explanation for why the birds fly to the extreme altitudes... particularly since there are passes through the Himalaya at lower altitudes, and which are used by other migrating bird species.\" In fact, bar-headed geese had for a long time not been directly tracked (using GPS or satellite logging technology) flying higher than 6,540 metres (21,460\u00a0ft), and it is now believed that they do take the high passes through the mountains. The challenging northward migration from lowland India to breed in the summer on the Tibetan Plateau is undertaken in stages, with the flight across the Himalaya (from sea-level) being undertaken non-stop in as little as seven hours. Surprisingly, despite predictable tail winds that blow up the Himalayas (in the same direction of travel as the geese), bar-headed geese spurn these winds, waiting for them to die down overnight, when they then undertake the greatest rates of climbing flight ever recorded for a bird, and sustain these climbs rates for hours on end, according to research published in 2011.</p><p>The 2011 study found the geese peaking at an altitude of around 6,400\u00a0m (21,000\u00a0ft). In a 2012 study that tagged 91 geese and tracked their migration routes, it was determined that the geese spent 95% of their time below 5,784\u00a0m (18,976\u00a0ft), choosing to take a longer route through the Himalayas in order to utilize lower-altitude valleys and passes. Only 10 of the tagged geese were ever recorded above this altitude, and only one exceeded 6,500\u00a0m (21,300\u00a0ft), reaching 7,290\u00a0m (23,920\u00a0ft). All but one of these high-altitude flights were recorded at night, which along with the early morning, is the most common time of day for geese migration. The colder denser air during these times may be equivalent to an altitude hundreds of meters lower. It is suspected by the authors of these two studies that tales of the geese flying at 8,000\u00a0m (26,000\u00a0ft) are apocryphal. Bar headed geese have been observed flying at 23,000\u00a0ft.</p><p>The bar-headed goose migrates over the Himalayas to spend the winter in parts of South Asia (from Assam to as far south as Tamil Nadu. The modern winter habitat of the species is cultivated fields, where it feeds on barley, rice and wheat, and may damage crops. Birds from Kyrgyzstan have been seen to stopover in western Tibet and southern Tajikistan for 20 to 30 days before migrating farther south. Some birds may show high wintering site fidelity.</p>\n\n<p>They nest mainly on the Tibetan Plateau. Intraspecific brood parasitism is noticed with lower rank females attempting to lay their eggs in the nests of higher ranking females.</p><p>The bar-headed goose is often kept in captivity, as it is considered beautiful and breeds readily. Records in Great Britain are frequent, and almost certainly relate to escapes. However, the species has bred on several occasions in recent years, and around five pairs were recorded in 2002, the most recent available report of the Rare Birds Breeding Panel. It is possible that, owing to a combination of frequent migration, accidental escapes and deliberate introduction, the species is becoming gradually more established in Great Britain. The bird is sociable and causes no problems for other birds. The feral population is believed to be declining in Great Britain due to over-hunting.</p><p>The bar-headed goose has escaped or been deliberately released to Florida, USA, but there is no evidence that the population is breeding and may only persist due to continuing releases or escapes..[2]\n</p>\n<h2><span id=\"Physiology_and_morphology\">Physiology and morphology</span></h2>\n\n<p>The main physiological challenge of bar-headed geese is extracting oxygen from hypoxic air and transporting it to aerobic muscle fibres in order to sustain flight at high altitudes. Flight is very metabolically costly at high-altitudes because birds need to flap harder in thin air to generate lift. Studies have found that bar-headed geese breathe more deeply and efficiently under low-oxygen conditions, which serves to increase oxygen uptake from the environment. The haemoglobin of their blood has a higher affinity for oxygen than that of low-altitude geese, which has been attributed to a single amino acid point mutation. This mutation causes a conformational shift in the haemoglobin molecule from the low-oxygen to the high-oxygen affinity form. The left-ventricle of the heart, which is responsible for pumping oxygenated blood to the body via systemic circulation, has significantly more capillaries in bar-headed geese than in lowland birds, maintaining oxygenation of cardiac muscle cells and thereby cardiac output. Compared to lowland birds, mitochondria (the main site of oxygen consumption) in the flight muscle of bar-headed geese are significantly closer to the sarcolemma, decreasing the intracellular diffusion distance of oxygen from the capillaries to the mitochondria.\n</p><p>Bar-headed geese have a slightly larger wing area for their weight than other geese, which is believed to help them fly at high altitudes. While this decreases the power output required for flight in thin air, birds at high altitude still need to flap harder than lowland birds.</p>\n<h2><span id=\"Cultural_depiction\">Cultural depiction</span></h2>\n<p>The bar-headed goose has been suggested as being the model for the Hamsa of Indian mythology. Another interpretation suggests that the bar-headed goose is likely to be the <i>Kadamb</i> in ancient and medieval Sanskrit literature, whereas <i>Hamsa</i> generally refers to the swan.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"See_also\">See also</span></h2>\n<ul><li>Tsomoriri Wetland Conservation Reserve</li></ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Hawkes et al. (2011) The Trans-Himalayan flights of bar-headed geese (Anser indicus)</li></ul> "
    },
    "bar tailed treecreper": {
        "id": "b008",
        "name": "Bar-tailed Treecreeper",
        "order": order.PASSERIFORMES,
        "family": familyname.Certhiidae,
        "genus":"Certhia", "species":"himalayana ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-tailed treecreeper</b> (<i>Certhia himalayana</i>), or the <b>Himalayan treecreeper</b> is a species of bird in the family Certhiidae.  It is found primarily in the northern parts of the Indian subcontinent, particularly in the Himalayas, as well as in adjoining regions.  It is found in Afghanistan, India, Iran, Kazakhstan, Burma, Nepal, Tibet, Russia, Tajikistan, Turkmenistan, and Uzbekistan.\nIts natural habitats are boreal forests and temperate forests.\n</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The bar-tailed treecreeper has a flecked or striped feather pattern, usually in black, brown, white and red hues. This coloration allows the treecreeper to blend in with its forest surroundings quite well.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "bar throated minla": {
        "id": "b009",
        "name": "Bar-throared Minla",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Chrysominla", "species":"strigula",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-throated minla</b> or <b>chestnut-tailed minla</b> (<i>Actinodura strigula</i>), or even <b>bar-throated siva</b>, is a species of bird in the laughingthrush and babbler family Leiothrichidae. Traditionally, it has been placed in the genus <i>Minla</i> but is now placed in <i>Actinodura</i>.\n</p><p>The species is found in montane forest from India to Malaysia.\n</p><p>Eight subspecies have been described, of which six are widely accepted. The nominate subspecies, <i>Chrysominla strigula strigula</i>, is found from central Nepal through India, southern China and Bhutan. <i>C. s. simlaensis</i> is found in northern India and western Nepal, <i>C. s. yunnanensis</i> is found in north-eastern India, southern China, northern Burma, Laos and Vietnam, <i>C. s. castanicauda</i> is found in southern Burma and western and northern Thailand, <i>C. s. malayana</i> is found in Peninsular Malaysia and <i>C. s. traii</i> is restricted to central Vietnam.</p><p>The bar-throated minla occupies a range of montane forest habitats from 1,800\u20133,750\u00a0m (5,910\u201312,300\u00a0ft). The species is mainly resident but may move to lower altitudes during harsh winters, coming as low as 1,300\u00a0m (4,300\u00a0ft). Among the forest types in may occur in are evergreen broadleaf forest, mixed broadleaf and evergreen forest, pine forest, pine or oak and rhododendron forest, rhododendron or bamboo stands.</p><p>The diet of the bar-throated minla varies by season; during the summer months it is almost exclusively insectivorous, taking beetles, caterpillars and other insects. In the winter months it will also take berries, seeds, and nectar. It will join flocks of other babblers and yuhinas in the non-breeding season, and feeds from the canopy down to near the forest floor.  Two to four eggs are laid in a cup of grass, bamboo leaves, lichen and birch bark.</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 235px\">\n\t\t<li class=\"gallerybox\" style=\"width: 235px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li> Media related to <span>Actinodura strigula</span> at Wikimedia Commons</li></ul>"
    },
    "bar winged flycatcher shrike": {
        "id": "b010",
        "name": "Bar-winged Flycatcher-shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Vangidae,
        "genus":"Hemipus", "species":"picatus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-winged flycatcher-shrike</b> (<i>Hemipus picatus</i>) is a small passerine bird usually placed in the Vangidae. It is found in the forests of tropical southern Asia from the Himalayas and hills of southern India to Indonesia. Mainly insectivorous it is found hunting in the mid-canopy of forests, often joining mixed-species foraging flocks. They perch upright and have a distinctive pattern of black and white, males being more shiny black than the females. In some populations the colour of the back is brownish while others have a dark wash on the underside.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>The bar-winged flycatcher-shrike is black capped with black wings that contrast with the white of the body. A white slash across the wing and a white rump stand out in contrast. They sit upright on branches, flying around to glean insects. The nostril is hidden by hairs and the upper mandible of the beak has a curved tip. Males are velvety black while females tend to be greyish brown but the pattern varies across the geographic populations. Both males and females of the Himalayan <i>H. p. capitalis</i> have a brown back but the males have a black head. The Sri Lankan population <i>leggei</i> lacks sexual dimorphism in plumage. <i>H. p. intermedius</i> has only the females with a brownish back. The tail is black but the outer tail feathers are white while the non-central tail feathers are tipped with white.</p><p>The call is a rapid and high <i>tsit-it-it-it</i> or a <i>whriri-whirriri-whirriri</i> and sometimes a sharp <i>chip</i>. Male-female pairs of the subspecies <i>leggei</i> of Sri Lanka have been reported to duet with precision.</p><p>Young birds are said to have a broken pattern of white and grey giving the appearance of lichens.</p><p>The exact systematic family position is unclear but the genus <i>Hemipus</i> has been found to be closely related to the genus <i>Tephrodornis</i> and show affinities to the Malaconotidae of Africa.</p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n\n<p>The nominate race is found mainly in the Western Ghats of India but becoming very rare towards the Surat Dangs. They are also found in some parts of central and eastern India, extending into Bangladesh. The subspecies <i>capitalis</i> is found along the Himalayas from Simla, east to Manipur and Chittagong in India and extending into northern Thailand, Myanmar and Laos.</p><p>Subspecies <i>leggei</i> of Sri Lanka (southern Western Ghats populations included in older works) has the sexes indistinguishable. It is found in the hill forests of Sri Lanka.</p><p>Subspecies <i>intermedius</i> is found in Southeast Asia in Sumatra, Borneo, and parts of the Malay Peninsula. The brownish grey wash on the breast of females is darker, contrasting with the white of the abdomens. The back is darker brown than in other subspecies. The males also have darker breasts.</p><p>Other subspecies that have been described such as Walter Koelz's <i>pileatus</i> (described from the Lushai Hills) and <i>insulae</i> (from Sri Lanka) are not considered valid.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<p>This bird catches insects by gleaning foliage and making aerial sallies for flushed insects. It will associate with other small birds such as babblers, velvet-fronted nuthatch and white-eyes in feeding flocks. They move through the forest and rarely stick to a particular location.</p><p>The nesting season in Sri Lanka is mainly from February to August, March to May in India. The nest is a neat cup with rim held stiff by cobwebs binding it and the inside is lined with fine grass and fibre. Lichens cover the surface of the nest cup which is placed on the horizontal surface of a dry branch, often close to the tip of a dead branch or on a leafless tree making it appear like a knot in the wood. The usual clutch is 2 or 3 eggs which are pale greenish white and blotched with black and grey. The bird sitting at the nest appears as if it is casually perched. Both males and females incubate. The chicks at nest stay still with eyes closed and face the center of the nest while holding their bills high giving the appearance of a broken branch.</p><p>They have been said to be sensitive to forest degradation but some studies note that they are less sensitive and capable of persisting even in considerably disturbed forests.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Photographs and videos</li>\n<li>Calls</li></ul> "
    },
    "barn swallow": {
        "id": "b011",
        "name": "Barn Swallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Hirundo", "species":"rustica",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n\n\n</p>\n<p>The <b>barn swallow</b> (<i>Hirundo rustica</i>) is the most widespread species of swallow in the world. It is a distinctive passerine bird with blue upperparts and a long, deeply forked tail. It is found in Europe, Asia, Africa and the Americas. In Anglophone Europe it is just called the <b>swallow</b>; in Northern Europe it is the only common species called a \"swallow\" rather than a \"martin\".</p><p>There are six subspecies of barn swallow, which breed across the Northern Hemisphere. Four are strongly migratory, and their wintering grounds cover much of the Southern Hemisphere as far south as central Argentina, the Cape Province of South Africa, and northern Australia. Its huge range means that the barn swallow is not endangered, although there may be local population declines due to specific threats.\n</p><p>The barn swallow is a bird of open country that normally uses man-made structures to breed and consequently has spread with human expansion. It builds a cup nest from mud pellets in barns or similar structures and feeds on insects caught in flight. This species lives in close association with humans, and its insect-eating habits mean that it is tolerated by humans; this acceptance was reinforced in the past by superstitions regarding the bird and its nest. There are frequent cultural references to the barn swallow in literary and religious works due to both its living in close proximity to humans and its annual migration. The barn swallow is the national bird of Austria and Estonia.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The adult male barn swallow of the nominate subspecies <i>H. r. rustica</i> is 17\u201319\u00a0cm (6.7\u20137.5\u00a0in) long including 2\u20137\u00a0cm (0.79\u20132.76\u00a0in) of elongated outer tail feathers. It has a wingspan of 32\u201334.5\u00a0cm (12.6\u201313.6\u00a0in) and weighs 16\u201322\u00a0g (0.56\u20130.78\u00a0oz). It has steel blue upperparts and a rufous forehead, chin and throat, which are separated from the off-white underparts by a broad dark blue breast band. The outer tail feathers are elongated, giving the distinctive deeply forked \"swallow tail\". There is a line of white spots across the outer end of the upper tail. The female is similar in appearance to the male, but the tail streamers are shorter, the blue of the upperparts and breast band is less glossy, and the underparts paler. The juvenile is browner and has a paler rufous face and whiter underparts. It also lacks the long tail streamers of the adult.</p><p>The song of the male barn swallow is a cheerful warble, often ending with <i>su-seer</i> with the second note higher than the first but falling in pitch. Calls include <i>witt</i> or <i>witt-witt</i> and a loud <i>splee-plink</i> when excited (or trying to chase intruders away from the nest). The alarm calls include a sharp <i>siflitt</i> for predators like cats and a <i>flitt-flitt</i> for birds of prey like the hobby. This species is fairly quiet on the wintering grounds.</p><p>The distinctive combination of a red face and blue breast band render the adult barn swallow easy to distinguish from the African <i>Hirundo</i> species and from the welcome swallow (<i>Hirundo neoxena</i>) with which its range overlaps in Australasia. In Africa the short tail streamers of the juvenile barn swallow invite confusion with juvenile red-chested swallow (<i>Hirundo lucida</i>), but the latter has a narrower breast band and more white in the tail.</p>\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The barn swallow was described by Linnaeus in his <i>Systema Naturae</i> in 1758 as <i>Hirundo rustica</i>, characterised as <i>H. rectricibus, exceptis duabus intermediis, macula alba notat\u00ees</i>. <i>Hirundo</i> is the Latin word for \"swallow\"; <i>rusticus</i> means \"of the country\". This species is the only one of that genus to have a range extending into the Americas, with the majority of <i>Hirundo</i> species being native to Africa. This genus of blue-backed swallows is sometimes called the \"barn swallows\".</p><p>The <i>Oxford English Dictionary</i> dates the English common name \"barn swallow\" to 1851, though an earlier instance of the collocation in an English-language context is in Gilbert White's popular book <i>The Natural History of Selborne</i>, originally published in 1789:\n</p>\n<blockquote>\n<p>The swallow, though called the chimney-swallow, by no means builds altogether in chimnies  [<i>sic</i>], but often within barns and out-houses against the rafters\u00a0... In <i>Sweden</i> she builds in barns, and is called <i>ladusvala</i>, the barn-swallow.</p>\n</blockquote>\n<p>This suggests that the English name may be a calque on the Swedish term.\n</p><p>There are few taxonomic problems within the genus, but the red-chested swallow\u2014a resident of West Africa, the Congo basin, and Ethiopia\u2014was formerly treated as a subspecies of barn swallow. The red-chested swallow is slightly smaller than its migratory relative, has a narrower blue breast-band, and (in the adult) has shorter tail streamers. In flight, it looks paler underneath than barn swallow.</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n\n<p>Six subspecies of barn swallow are generally recognised. In eastern Asia, a number of additional or alternative forms have been proposed, including <i>saturata</i> by Robert Ridgway in 1883, <i>kamtschatica</i> by Benedykt Dybowski in 1883, <i>ambigua</i> by Erwin Stresemann and <i>mandschurica</i> by Wilhelm Meise in 1934. Given the uncertainties over the validity of these forms, this article follows the treatment of Turner and Rose.</p>\n<ul><li><i>H. r. rustica</i>, the nominate European subspecies, breeds in Europe and Asia, as far north as the Arctic Circle, south to North Africa, the Middle East and Sikkim, and east to the Yenisei River. It migrates on a broad front to winter in Africa, Arabia, and the Indian subcontinent. The barn swallows wintering in southern Africa are from across Eurasia to at least 91\u00b0E, and have been recorded as covering up to 11,660\u00a0km (7,250\u00a0mi) on their annual migration. The nominate European subspecies was the first to have its genome sequenced and published.</li>\n<li><i>H. r. transitiva</i> was described by Ernst Hartert in 1910. It breeds in the Middle East from southern Turkey to Israel and is partially resident, though some birds winter in East Africa. It has orange red underparts and a broken breast band.</li>\n<li><i>H. r. savignii</i>, the resident Egyptian subspecies, was described by James Stephens in 1817 and named for French zoologist Marie Jules C\u00e9sar Savigny. It resembles <i>transitiva</i>, which also has orange-red underparts, but <i>savignii</i> has a complete broad breast band and deeper red hue to the underparts.</li>\n<li><i>H. r. gutturalis</i>, described by Giovanni Antonio Scopoli in 1786, has whitish underparts and a broken breast band. Breast chestnut and lower underparts more pink-buff. The populations that breed in the central and eastern Himalayas have been included in this subspecies, although the primary breeding range is Japan and Korea. The east Asian breeders winter across tropical Asia from India and Sri Lanka east to Indonesia and New Guinea. Increasing numbers are wintering in Australia. It hybridises with <i>H. r. tytleri</i> in the Amur River area. It is thought that the two eastern Asia forms were once geographically separate, but the nest sites provided by expanding human habitation allowed the ranges to overlap. <i>H. r. gutturalis</i> is a vagrant to Alaska and Washington, but is easily distinguished from the North American breeding subspecies, <i>H. r. erythrogaster</i>, by the latter's reddish underparts.</li>\n<li><i>H. r. tytleri</i>, first described by Thomas Jerdon in 1864, and named for British soldier, naturalist and photographer Robert Christopher Tytler, has deep orange-red underparts and an incomplete breast band. The tail is also longer. It breeds in central Siberia south to northern Mongolia and winters from eastern Bengal east to Thailand and Malaysia.</li></ul>\n<ul><li><i>H. r. erythrogaster</i>, the North American subspecies described by Pieter Boddaert in 1783, differs from the European subspecies in having redder underparts and a narrower, often incomplete, blue breast band. It breeds throughout North America, from Alaska to southern Mexico, and migrates to the Lesser Antilles, Costa Rica, Panama and South America to winter. A few may winter in the southernmost parts of the breeding range. This subspecies funnels through Central America on a narrow front and is therefore abundant on passage in the lowlands of both coasts.</li></ul><p>The short wings, red belly and incomplete breast band of <i>H. r. tytleri</i> are also found in <i>H. r. erythrogaster</i>, and DNA analyses show that barn swallows from North America colonised the Baikal region of Siberia, a dispersal direction opposite to that for most changes in distribution between North America and Eurasia.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<h3><span id=\"Habitat_and_range\">Habitat and range</span></h3>\n\n\n<p>The preferred habitat of the barn swallow is open country with low vegetation, such as pasture, meadows and farmland, preferably with nearby water. This swallow avoids heavily wooded or precipitous areas and densely built-up locations. The presence of accessible open structures such as barns, stables, or culverts to provide nesting sites, and exposed locations such as wires, roof ridges or bare branches for perching, are also important in the bird's selection of its breeding range.</p><p>It breeds in the Northern Hemisphere from sea level to typically 2,700\u00a0m (8,900\u00a0ft), but to 3,000\u00a0m (9,800\u00a0ft) in the Caucasus and North America, and it is absent only from deserts and the cold northernmost parts of the continents. Over much of its range, it avoids towns, and in Europe is replaced in urban areas by the house martin. However, in Honsh\u016b, Japan, the barn swallow is a more urban bird, with the red-rumped swallow (<i>Cecropis daurica</i>) replacing it as the rural species.</p><p>In winter, the barn swallow is cosmopolitan in its choice of habitat, avoiding only dense forests and deserts. It is most common in open, low vegetation habitats, such as savanna and ranch land, and in Venezuela, South Africa and Trinidad and Tobago it is described as being particularly attracted to burnt or harvested sugarcane fields and the waste from the cane. In the absence of suitable roost sites, they may sometimes roost on wires where they are more exposed to predators. Individual birds tend to return to the same wintering locality each year and congregate from a large area to roost in reed beds. These roosts can be extremely large; one in Nigeria had an estimated 1.5 million birds. These roosts are thought to be a protection from predators, and the arrival of roosting birds is synchronised in order to overwhelm predators like African hobbies. The barn swallow has been recorded as breeding in the more temperate parts of its winter range, such as the mountains of Thailand and in central Argentina.</p><p>Migration of barn swallows between Britain and South Africa was first established on 23 December 1912 when a bird that had been ringed by James Masefield at a nest in Staffordshire, was found in Natal. As would be expected for a long-distance migrant, this bird has occurred as a vagrant to such distant areas as Hawaii, Bermuda, Greenland, Tristan da Cunha the Falkland Islands, and even Antarctica.</p>\n<h3><span id=\"Feeding\">Feeding</span></h3>\n\n<p>The barn swallow is similar in its habits to other aerial insectivores, including other swallow species and the unrelated swifts. It is not a particularly fast flier, with a speed estimated at about 11 metres per second (25\u00a0mph), up to 20 metres per second (45\u00a0mph) and a wing beat rate of approximately 5, up to 7\u20139 times each second.</p><p>The barn swallow typically feeds in open areas 7\u20138\u00a0m (23\u201326\u00a0ft) above shallow water or the ground often following animals, humans or farm machinery to catch disturbed insects, but it will occasionally pick prey items from the water surface, walls and plants. In the breeding areas, large flies make up around 70% of the diet, with aphids also a significant component. However, in Europe, the barn swallow consumes fewer aphids than the house or sand martins. On the wintering grounds, Hymenoptera, especially flying ants, are important food items. When egg-laying barn swallows hunt in pairs, but otherwise will form often large flocks.</p><p>The amount of food a clutch will get depends on the size of the clutch, with larger clutches getting more food on average. The timing of a clutch also determines the food given; later broods get food that is smaller in size compared to earlier broods. This is because larger insects are too far away from the nest to be profitable in terms of energy expenditure.</p><p>Isotope studies have shown that wintering populations may utilise different feeding habitats, with British breeders feeding mostly over grassland, whereas Swiss birds utilised woodland more. Another study showed that a single population breeding in Denmark actually wintered in two separate areas.</p><p>The barn swallow drinks by skimming low over lakes or rivers and scooping up water with its open mouth. This bird bathes in a similar fashion, dipping into the water for an instant while in flight.</p><p>Swallows gather in communal roosts after breeding, sometimes thousands strong. Reed beds are regularly favoured, with the birds swirling <i>en masse</i> before swooping low over the reeds. Reed beds are an important source of food prior to and whilst on migration; although the barn swallow is a diurnal migrant that can feed on the wing whilst it travels low over ground or water, the reed beds enable fat deposits to be established or replenished.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n\n\n\n<p>The male barn swallow returns to the breeding grounds before the females and selects a nest site, which is then advertised to females with a circling flight and song. Plumage may be used to advertise: in some populations, like in the subspecies <i>H. r. gutturalis</i>, darker ventral plumage in males is associated with higher breeding success. In other populations, the breeding success of the male is related to the length of the tail streamers, with longer streamers being more attractive to the female. Males with longer tail feathers are generally longer-lived and more disease resistant, females thus gaining an indirect fitness benefit from this form of selection, since longer tail feathers indicate a genetically stronger individual which will produce offspring with enhanced vitality. Males in northern Europe have longer tails than those further south; whereas in Spain the male's tail streamers are only 5% longer than the female's, in Finland the difference is 20%. In Denmark, the average male tail length increased by 9% between 1984 and 2004, but it is possible that climatic changes may lead in the future to shorter tails if summers become hot and dry.</p><p>Males with long streamers also have larger white tail spots, and since feather-eating bird lice prefer white feathers, large white tail spots without parasite damage again demonstrate breeding quality; there is a positive association between spot size and the number of offspring produced each season.</p><p>The breeding season of the barn swallow is variable; in the southern part of the range, the breeding season usually is from February or March to early to mid September, although some late second and third broods finish in October. In the northern part of the range, it usually starts late May to early June and ends the same time as the breeding season of the southernmost birds.</p><p>Both sexes defend the nest, but the male is particularly aggressive and territorial. Once established, pairs stay together to breed for life, but extra-pair copulation is common, making this species genetically polygamous, despite being socially monogamous. Males guard females actively to avoid being cuckolded. Males may use deceptive alarm calls to disrupt extrapair copulation attempts toward their mates.</p><p>As its name implies, the barn swallow typically nests inside accessible buildings such as barns and stables, or under bridges and wharves. Before man-made sites became common, it nested on cliff faces or in caves, but this is now rare. The neat cup-shaped nest is placed on a beam or against a suitable vertical projection. It is constructed by both sexes, although more often by the female, with mud pellets collected in their beaks and lined with grasses, feathers, algae or other soft materials. The nest building ability of the male is also sexually selected; females will lay more eggs and at an earlier date with males who are better at nest construction, with the opposite being true with males that are not. After building the nest, barn swallows may nest colonially where sufficient high-quality nest sites are available, and within a colony, each pair defends a territory around the nest which, for the European subspecies, is 4 to 8\u00a0m<sup>2</sup> (43 to 86\u00a0sq\u00a0ft) in size. Colony size tends to be larger in North America.</p><p>In North America at least, barn swallows frequently engage in a mutualist relationship with ospreys. Barn swallows will build their nest below an osprey nest, receiving protection from other birds of prey that are repelled by the exclusively fish-eating ospreys. The ospreys are alerted to the presence of these predators by the alarm calls of the swallows.</p><p>There are normally two broods, with the original nest being reused for the second brood and being repaired and reused in subsequent years. The female lays two to seven, but typically four or five, reddish-spotted white eggs. The clutch size is influenced by latitude, with clutch sizes of northern populations being higher on average than southern populations. The eggs are 20\u00a0mm \u00d7\u00a014\u00a0mm (0.79\u00a0in \u00d7\u00a00.55\u00a0in) in size, and weigh 1.9\u00a0g (0.067\u00a0oz), of which 5% is shell. In Europe, the female does almost all the incubation, but in North America the male may incubate up to 25% of the time. The incubation period is normally 14\u201319 days, with another 18\u201323 days before the altricial chicks fledge. The fledged young stay with, and are fed by, the parents for about a week after leaving the nest. Occasionally, first-year birds from the first brood will assist in feeding the second brood. Compared to those from early broods, juvenile barn swallows from late broods have been found to migrate at a younger age, fuel less efficiently during migration and have lower return rates the following year.</p><p>The barn swallow will mob intruders such as cats or accipiters that venture too close to their nest, often flying very close to the threat. Adult barn swallows have few predators, but some are taken by accipiters, falcons, and owls. Brood parasitism by cowbirds in North America or cuckoos in Eurasia is rare.</p><p>Hatching success is 90% and the fledging survival rate is 70\u201390%. Average mortality is 70\u201380% in the first year and 40\u201370% for the adult. Although the record age is more than 11 years, most survive less than four years. Barn swallow nestlings have prominent red gapes, a feature shown to induce feeding by parent birds. An experiment in manipulating brood size and immune system showed the vividness of the gape was positively correlated with T-cell\u2013mediated immunocompetence, and that larger brood size and injection with an antigen led to a less vivid gape.</p><p>The barn swallow has been recorded as hybridising with the cliff swallow (<i>Petrochelidon pyrrhonota</i>) and the cave swallow (<i>P. fulva</i>) in North America, and the house martin (<i>Delichon urbicum</i>) in Eurasia, the cross with the latter being one of the most common passerine hybrids.</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"Parasites_and_predators\">Parasites and predators</span></h2>\n\n<p>Barn swallows (and other small passerines) often have characteristic feather holes on their wing and tail feathers. These holes were suggested as being caused by avian lice such as <i>Machaerilaemus malleus</i> and <i>Myrsidea rustica</i>, although other studies suggest that they are mainly caused by species of <i>Brueelia</i>. Several other species of lice have been described from barn swallow hosts, including <i>Brueelia domestica</i> and <i>Philopterus microsomaticus</i>. The avian lice prefer to feed on white tail spots, and they are generally found more numerously on short-tailed males, indicating the function of unbroken white tail spots as a measure of quality. In Texas, the swallow bug (<i>Oeciacus vicarius</i>), which is common on species such as the cliff swallow, is also known to infest barn swallows.</p><p>Predatory bats such as the greater false vampire bat are known to prey on barn swallows. Swallows at their communal roosts attract predators and several falcon species make use of these opportunities. Falcon species confirmed as predators include the peregrine falcon and the African hobby.</p>\n<h2><span id=\"Status\">Status</span></h2>\n<p>The barn swallow has an enormous range, with an estimated global extent of 51,700,000\u00a0km<sup>2</sup> (20,000,000\u00a0sq\u00a0mi) and a population of 190 million individuals. The species is evaluated as least concern on the 2007 IUCN Red List, and has no special status under the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES), which regulates international trade in specimens of wild animals and plants.</p><p>This is a species that has greatly benefited historically from forest clearance, which has created the open habitats it prefers, and from human habitation, which have given it an abundance of safe man-made nest sites. There have been local declines due to the use of DDT in Israel in the 1950s, competition for nest sites with house sparrows in the US in the 19th century, and an ongoing gradual decline in numbers in parts of Europe and Asia due to agricultural intensification, reducing the availability of insect food. However, there has been an increase in the population in North America during the 20th century with the greater availability of nesting sites and subsequent range expansion, including the colonisation of northern Alberta.</p><p>A specific threat to wintering birds from the European populations is the transformation by the South African government of a light aircraft runway near Durban into an international airport for the 2010 FIFA World Cup. The roughly 250\u00a0m (270\u00a0yd) square Mount Moreland reed bed is a night roost for more than three million barn swallows, which represent 1% of the global population and 8% of the European breeding population. The reed bed lies on the flight path of aircraft using the proposed La Mercy airport, and there were fears that it would be cleared because the birds could threaten aircraft safety. However, following detailed evaluation, advanced radar technology will be installed to enable planes using the airport to be warned of bird movements and, if necessary, take appropriate measures to avoid the flocks.</p><p>Climate change may affect the barn swallow; drought causes weight loss and slow feather regrowth, and the expansion of the Sahara will make it a more formidable obstacle for migrating European birds. Hot dry summers will reduce the availability of insect food for chicks. Conversely, warmer springs may lengthen the breeding season and result in more chicks, and the opportunity to use nest sites outside buildings in the north of the range might also lead to more offspring.</p>\n<h2><span id=\"Relationship_with_humans\">Relationship with humans</span></h2>\n\n<p>The barn swallow is an attractive bird that feeds on flying insects and has therefore been tolerated by humans when it shares their buildings for nesting. As one of the earlier migrants, this conspicuous species is also seen as an early sign of summer's approach.</p><p>In the Old World, the barn swallow appears to have used man-made structures and bridges since time immemorial. An early reference is in Virgil's <i>Georgics</i> (29 BC), \"<i>Ante garrula quam tignis nidum suspendat hirundo</i>\" (Before the twittering swallow hangs its nest from the rafters).</p><p>Many cattle farmers believed that swallows spread <i>Salmonella</i> infections, however a study in Sweden showed no evidence of the birds being reservoirs of the bacteria.</p>\n<h3><span id=\"In_literature\">In literature</span></h3>\n<p>Many literary references are based on the barn swallow's northward migration as a symbol of spring or summer. The proverb about the necessity for more than one piece of evidence goes back at least to Aristotle's <i>Nicomachean Ethics</i>: \"For as one swallow or one day does not make a spring, so one day or a short time does not make a fortunate or happy man.\"</p><p>The barn swallow symbolises the coming of spring and thus love in the <i>Pervigilium Veneris</i>, a late Latin poem. In his poem \"The Waste Land\", T. S. Eliot quoted the line <i>\"Quando fiam uti chelidon [ut tacere desinam]?\"</i> (\"When will I be like the swallow, so that I can stop being silent?\") This refers to the myth of Philomela in which she turns into a nightingale, and her sister Procne into a swallow. On the other hand, an image of the assembly of swallows for their southward migration concludes John Keats's ode \"To Autumn\".\n</p><p>The swallow is cited in several of William Shakespeare's plays for the swiftness of its flight, with \"True hope is swift, and flies with swallow's wings\" from Act 5 of <i>Richard III</i>, and \"I have horse will follow where the game Makes way, and run like swallows o'er the plain.\" from the second act of <i>Titus Andronicus</i>. Shakespeare references the annual migration of the species in <i>The Winter's Tale</i>, Act 4: \"Daffodils, That come before the swallow dares, and take The winds of March with beauty\".\n</p><p>A swallow is the main character in Oscar Wilde's story, The Happy Prince.\n</p>\n<h3><span id=\"In_culture\">In culture</span></h3>\n\n<p>Gilbert White studied the barn swallow in detail in his pioneering work <i>The Natural History of Selborne</i>, but even this careful observer was uncertain whether it migrated or hibernated in winter. Elsewhere, its long journeys have been well observed, and a swallow tattoo is popular amongst nautical men as a symbol of a safe return; the tradition was that a mariner had a tattoo of this fellow wanderer after sailing 5,000\u00a0nmi (9,300\u00a0km; 5,800\u00a0mi). A second swallow would be added after 10,000\u00a0nmi (19,000\u00a0km; 12,000\u00a0mi) at sea. In the past, the tolerance for this beneficial insectivore was reinforced by superstitions regarding damage to the barn swallow's nest. Such an act might lead to cows giving bloody milk, or no milk at all, or to hens ceasing to lay. This may be a factor in the longevity of swallows' nests. Survival, with suitable annual refurbishment, for 10\u201315 years is regular, and one nest was reported to have been occupied for 48 years.</p><p>It is depicted as the <i>Martlet</i>, <i>Merlette</i> or <i>Merlot</i> in heraldry, where it represents younger sons who have no lands. It is also represented as lacking feet as this was a common belief at the time. As a result of a campaign by ornithologists, the barn swallow has been the national bird of Estonia since 23 June 1960.</p>\n<h4><span id=\"Barn_Swallows_on_Postage_Stamps\">Barn Swallows on Postage Stamps</span></h4>\n<p>Barn Swallows are one of the most depicted birds on postage stamps around the world.</p>\n<h2><span id=\"See_also\">See also</span></h2>\n\n<ul><li>Swallow migration versus hibernation</li></ul>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li><cite id=\"CITEREFSmiddy2010\" class=\"citation journal\">Smiddy, P (2010). \"Post-fledging roosting at the nest in juvenile barn swallows (<i>Hirundo rustica</i>)\". <i>Ir. Nat. J</i>. <b>31</b>: 44\u201346.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Ir.+Nat.+J.&amp;rft.atitle=Post-fledging+roosting+at+the+nest+in+juvenile+barn+swallows+%28Hirundo+rustica%29&amp;rft.volume=31&amp;rft.pages=44-46&amp;rft.date=2010&amp;rft.aulast=Smiddy&amp;rft.aufirst=P&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABarn+swallow\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>BirdLife species factsheet for <i>Hirundo rustica</i></li>\n<li>Audio recording of swallows High quality audio recording of a group of swallows</li>\n<li><cite class=\"citation web\">\"Barn swallow media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Barn+swallow+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fbarn-swallow-hirundo-rustica&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABarn+swallow\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>European Swallow (barn swallow) - Species text in The Atlas of Southern African Birds.</li>\n<li>Barn swallow - <i>Hirundo rustica</i> - USGS Patuxent Bird Identification InfoCenter</li>\n<li>Barn Swallow Species Account \u2013 Cornell Lab of Ornithology</li>\n<li>BirdLife species' status map for Europe (pdf).</li>\n<li>Ageing and sexing (PDF; 2.3 MB) by Javier Blasco-Zumeta &amp; Gerd-Michael Heinze</li>\n<li>Feathers of Barn swallow (Hirundo rustica)</li>\n<li>Barn swallow photo gallery at VIREO (Drexel University)</li></ul>"
    },
    "barred buttonquail": {
        "id": "b012",
        "name": "Barred Buttonquail",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turnix", "species":"suscitator",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n<p>The <b>barred buttonquail</b> or <b>common bustard-quail</b> (<i>Turnix suscitator</i>) is a buttonquail, one of a small family of birds which resemble, but are unrelated to, the true quails. This species is resident from India across tropical Asia to south China, Indonesia and the Philippines.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>A typical little buttonquail, rufous-brown above, rusty and buff below. Chin, throat and breast closely barred with black. Female larger and more richly coloured, with throat and middle of breast black. The blue-grey bill and legs, and yellowish white eyes are diagnostic, as are also the pale buff shoulder-patches on the wings when in flight. Absence of hind toe distinguishes Bustard and Button quails from true quails. Pairs, in scrub and grassland. The calls are a motorcycle-like <i>drr-r-r-r-r-r</i> and a loud <i>hoon- hoon-hoon</i>.</p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>The species occurs throughout India up to elevations of about 2500 m in the Himalayas, Sri Lanka, Bangladesh, Burma, Indonesia, the  Philippines and most of Southeast Asia.\nThere are four geographical races that differ somewhat in colour.</p><p>Within South Asia, it is known by many local names: Sansorai (Assam); Daoduma (Cachar); lnruibuma (Kacha Naga); Vohbubum (Kuki); Simokpho (Lepcha); linisk (Bhutea); Gulu, Gundra, Gundlu, Salui gundra (Hindi); Gulu (Bengal); Kalada - male, Pured - female (Telugu); Ankadik - male, Kurung kadik - female (Tamil); Durwa (Ratnagiri); Karechakki (Kannada); Bala watuwa (Sri Lanka).</p><p>Found in most habitats except dense forest and desert, in particular, scrub jungle, light deciduous forest and farmlands.\n</p><p>Widespread and common throughout its large range, the barred buttonquail is evaluated as Least Concern on the IUCN Red List of Threatened Species.\n</p>\n<h2><span id=\"Nesting\">Nesting</span></h2>\n\n<p>Differs from true quails chiefly in the female being polyandrous. The female is the brighter of the sexes, initiates courtship and builds the ground nest. She fights with other females for the possession of a cock, uttering a loud drumming drr-r-r-r-r as a challenge to rival hens and also to announce herself to a cock. Eggs when laid are left to be incubated by the cock who also tends the young, which can run as soon as they are hatched.\nThe hen goes off to acquire another husband, and perhaps yet another, and so on, evidently only one at a time.\n</p>\n<ul><li>Season: practically throughout the year, varying locally.</li>\n<li>Nest - a grass-lined scrape or depression in scrub jungle or crops, often arched over by surrounding grass. Eggs - 3 or 4, greyish white profusely speckled with reddish brown or blackish purple.</li></ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li><i>Birds of India</i> by Grimmett, Inskipp and Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>BirdLife Species Factsheet</li>\n<li>Barred buttonquail videos, photos &amp; sounds on the Internet Bird Collection</li></ul><p class=\"mw-empty-elt\">\n</p> "
    },
    "barred cuckoo dove": {
        "id": "b013",
        "name": "Barred Cuckoo-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Macropygia", "species":"unchall",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>barred cuckoo-dove</b> (<i>Macropygia unchall</i>) is a bird species in the family Columbidae. It is native to South and Southeast Asia, and listed as Least Concern on the IUCN Red List.</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n\n<p>German herpetologist Johann Georg Wagler first described the barred cuckoo-dove in 1827. It has three recognized subspecies:</p>\n<ul><li><i>M. u.\u00a0tusalia</i>\u00a0<small>(Blyth, 1843)</small></li>\n<li><i>M. u.\u00a0minor</i>\u00a0<small>(Swinhoe, 1870)</small></li>\n<li><i>M. u.\u00a0unchall</i>\u00a0<small>(Wagler, 1827)</small></li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>The barred cuckoo-dove has a buff coloured throat and forehead which becomes pinkish grey at the crown. measures 37 to 41\u00a0cm (15 to 16\u00a0in) in length, and weighs 153 to 182\u00a0g (5.4 to 6.4\u00a0oz).  Its iris is yellow or pale brown, the beak is black and short, and the feet are red. It has blackish brown upperparts. The back, mantle (between the nape and the starting of the back), rump, wing coverts, and scapulars have reddish brown fringes. The tail is blackish brown, and is heavily barred reddish brown.</p><p>It is similar to the little cuckoo-dove, but it is much larger and darker, and is black-barred on the mantle, breast, coverts, and tail.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The barred cuckoo-dove occurs from the Himalayas to Southeast Asia. It inhabits dense subtropical woodlands at altitudes of 800 to 3,000\u00a0m (2,600 to 9,800\u00a0ft) from sea level, on montane slopes. It prefers clearings and edges of old-growth forests and second growth forests.</p>\n<h2><span id=\"Behavior_and_ecology\">Behavior and ecology</span></h2>\n<p>The barred cuckoo-dove lives in small flocks.\nIt has a loud <i>kro-uum</i> or <i>u-va</i> vocalization, in which the second note is louder than the first.</p>\n<h2><span id=\"Status_and_conservation\">Status and conservation</span></h2>\n<p>Since 1998, the barred cuckoo-dove has been listed least concern on the IUCN Red List, because it has a large range\u2014more than 20,000\u00a0km<sup>2</sup>\u00a0(7,700\u00a0mi<sup>2</sup>) and the population trend is stable. Also, although its population numbers have not been determined, it is thought to comprise more than 10,000 individuals.</p>\n<h2><span id=\"Local_names\">Local names</span></h2>\n<p>The Lepcha people of Sikkim call it <i lang=\"lep\" title=\"Lepcha language text\">ka ar fo</i>.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li><cite class=\"citation web\">\"Barred cuckoo dove\" <span>(Audio)</span> (Recording). Xeno canto.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Barred+cuckoo+dove&amp;rft.pub=Xeno+canto&amp;rft_id=http%3A%2F%2Fwww.xeno-canto.org%2Fspecies%2FMacropygia-unchall&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABarred+cuckoo-dove\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite class=\"citation web\">\"Barred cuckoo-dove\u2014<i>Macropygia unchall</i>\". <i>Encyclopedia of Life</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Encyclopedia+of+Life&amp;rft.atitle=Barred+cuckoo-dove%E2%80%94Macropygia+unchall&amp;rft_id=http%3A%2F%2Fwww.eol.org%2Fpages%2F1049781%2Foverview&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABarred+cuckoo-dove\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Oriental Bird Images: <i>Barred Cuckoo Dove</i>  Selected images</li></ul>"
    },
    "bay woodpecker": {
        "id": "b014",
        "name": "Bay Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Blythipicus", "species":"pyrrhotis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bay woodpecker</b> (<i>Blythipicus pyrrhotis</i>) is a species of bird in the family Picidae.\n</p><p>It is found in Bangladesh, Bhutan, Cambodia, China, Hong Kong, India, Laos, Malaysia, Myanmar, Nepal, Thailand, and Vietnam. Its natural habitats are subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "bay backed shrike": {
        "id": "b015",
        "name": "Bay-backed Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "genus":"Lanius", "species":"vittatus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bay-backed shrike</b> (<i>Lanius vittatus</i>) is a member of the bird family Laniidae, the shrikes, resident in South Asia.\n</p>\n\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>It is smallish shrike at 17\u00a0cm, maroon-brown above with a pale rump and long black tail with white edges. The underparts are white, but with buff flanks.\nThe crown and nape are grey, with a typical shrike black bandit mask through the eye. There is a small white wing patch, and the bill and legs are dark grey.</p><p>Sexes are similar, but young birds are washed-out versions of the adults.</p>\n<h2><span id=\"Habits_and_habitat\">Habits and habitat</span></h2>\n<p>The bay-backed shrike has a characteristic upright \"shrike\" attitude perched on a bush, from which it sallies after lizards, large insects, small birds and rodents.</p><p>Prey may be impaled upon a sharp point, such as a thorn. Thus secured they can be ripped with the strong hooked bill, but its feet are not suited for tearing.</p><p>It is a widespread resident breeder in Afghanistan, Pakistan, Nepal and India, and has recently been recorded from Sri Lanka. It nests in bushes in scrubby areas and cultivation, laying 3-5 eggs.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Bay-Backed Shrike -- Bd Environment</li></ul><h2><span id=\"External_links\">External links</span></h2> "
    },
    "baya weaver": {
        "id": "b016",
        "name": "Baya Weaver",
        "order": order.PASSERIFORMES,
        "family": familyname.Ploceidae,
        "genus":"Ploceus", "species":"philippinus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>baya weaver</b> (<i>Ploceus philippinus</i>) is a weaverbird found across the Indian Subcontinent and Southeast Asia. <span lang=\"sa\" dir=\"ltr\">Flocks</span> of these birds are found in grasslands, cultivated areas, scrub and secondary growth and they are best known for their hanging retort shaped nests woven from leaves. These nest colonies are usually found on thorny trees or palm fronds and the nests are often built near water or hanging over water where predators cannot reach easily. They are widespread and common within their range but are prone to local, seasonal movements mainly in response to rain and food availability.\n</p><p>Among the population variations, five subspecies are recognized. The nominate race <i>philippinus</i> is found through much of mainland India while <i>burmanicus</i> is found eastwards into Southeast Asia. The population in southwest India is darker above and referred to as subspecies <i>travancoreensis</i>.</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>In 1760 the French zoologist Mathurin Jacques Brisson included a description of the baya weaver in his <i>Ornithologie</i> based on a specimen that he believed had been collected in Philippines. He used the French name <i>Le gros-bec des Philippines</i> and the Latin <i>Coccothraustes Philippensis</i>. Although Brisson coined Latin names, these do not conform to the binomial system and are not recognised by the International Commission on Zoological Nomenclature. When in 1766 the Swedish naturalist Carl Linnaeus updated his <i>Systema Naturae</i> for the twelfth edition, he added 240 species that had been previously described by Brisson. One of these was the baya weaver. Linnaeus included a brief description, coined the binomial name <i>Loxia philippina</i> and cited Brisson's work. It was subsequently realised that Brisson was mistaken in believing that his specimen came from the Philippines and the type locality was redesignated as Sri Lanka. This species is now placed in the genus <i>Ploceus</i> that was introduced by the French naturalist Georges Cuvier in 1816.</p><p>There are five subspecies:</p>\n<ul><li><i>P. p. philippinus</i> (Linnaeus, 1766) \u2013 Pakistan, India (except southwest and northeast), Sri Lanka and south Nepal</li>\n<li><i>P. p. travancoreensis</i> Ali &amp; Whistler, 1936 \u2013 southwest India</li>\n<li><i>P. p. burmanicus</i> Ticehurst, 1932 \u2013 Bhutan, northeast India and Bangladesh through Myanmar to southwest China</li>\n<li><i>P. p. angelorum</i> Deignan, 1956 \u2013 Thailand and south Laos</li>\n<li><i>P. p. infortunatus</i> Hartert, 1902 \u2013 south Vietnam, Malay Peninsula, Borneo and Sumatra, Java and Bali</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n\n\n<p>These are sparrow-sized (15\u00a0cm) and in their non-breeding plumage, both males and females resemble female house sparrows. They have a stout conical bill and a short square tail. Non-breeding males and females look very similar: dark brown streaked fulvous buff above, plain (unstreaked) whitish fulvous below, eyebrow long and buff coloured, bill is horn coloured and no mask. Breeding males have a bright yellow crown, dark brown mask, blackish brown bill, upper parts are dark brown streaked with yellow, with a yellow breast and cream buff below.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Baya weavers are social and gregarious birds. They forage in flocks for seeds, both on the plants and on the ground. Flocks fly in close formations, often performing complicated manoeuvres. They are known to glean paddy and other grain in harvested fields, and occasionally damage ripening crops and are therefore sometimes considered as pests. They roost in reed-beds bordering waterbodies. They depend on wild grasses such as Guinea grass (<i>Panicum maximum</i>) as well as crops like rice for both their food (feeding on seedlings in the germination stage as well as on early stages of grain) and nesting material. They also feed on insects (including butterflies), sometimes taking small frogs, geckos and molluscs, especially to feed their young. Their seasonal movements are governed by food availability. Their calls are a continuous <i>chit-chit-...</i> sometimes ending in a wheezy <i>cheee-eee-ee</i> that is produced by males in a chorus. A lower intensity call is produced in the non-breeding season.</p><p>They are occasionally known to descend to the ground and indulge in dust bathing.</p><p>In captivity, individuals are known to form stable <i>peck orders</i>.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>The breeding season of the baya weavers is during the monsoons. The breeding condition is initiated by environmental characters such as day length and comes to an end late in summer.  This post-reproductive \"photorefractoriness\", in which photoperiodic  birds cease to respond reproductively to the stimulation of long days, can end spontaneously without having been exposed to short days for 4-6 months unlike temperate birds. They nest in colonies typically of up to 20\u201330, close to the source of food, nesting material and water. Baya weavers are best known for the elaborately woven nests constructed by the males. These pendulous nests are retort-shaped, with a central nesting chamber and a long vertical tube that leads to a side entrance to the chamber. The nests are woven with long strips of paddy leaves, rough grasses and long strips torn from palm fronds. Each strip can be between 20 and 60\u00a0cm in length. A male bird is known to make up to 500 trips to complete a nest. The birds use their strong beaks to strip and collect the strands, and to weave and knot them while building their nests. The nests are often built hanging over water from palm trees and often suspended from thorny <i>Acacia</i>s and in some cases from telephone wires. Although the birds prefer thorny trees, they sometimes use avenue trees in urban areas. Nests are often located on the eastern side of the tree, where they are believed to provide shelter from the Southwest Monsoon; however, late breeders are more likely to build their nests in other orientations relative to the trunk of the nest tree. Abandoned nests are sometimes used by mice (<i>Mus booduga</i>) and other birds such as munias.</p>\n\n<p>Nests are built mainly in colonies but isolated nests are not unknown. Nests are often built from thorny <i>Acacia</i> or palm trees ( mainly <i>Phoenix sylvestris</i>) and hang over open water. Young males may build experimental nests among reeds. In Burma, birds often build nests under the eaves of buildings, but this habit is uncommon in India. The males take about 18 days to construct the complete nest with the intermediate \"helmet stage\" taking about 8 days. The nests are partially built before the males begin to display to passing females by flapping their wings and calling while hanging from their nests. The females inspect the nest and signal their acceptance of a male. Once a male and a female are paired, the male goes on to complete the nest by adding the entrance tunnel. Males are almost solely in charge of nest building, though their female partners may join in giving the finishing touches, particularly on the interiors. Females may modify the interiors or add blobs of mud. A study has found that nest location is more important than nest structure for the female when it selects the nest and mate. Females prefer nests high in trees, those over dry land, and those on thin branches.</p><p>Both males and females are polygamous. Males build many partial nests and begin courting females. The male finishes the nest only after finding a mate. The female lays about 2 to 4 white eggs and incubates them for about 14 to 17 days. Males may sometimes assist in feeding the chicks. The chicks leave the nest after about 17 days. After mating with a female the male typically court other females at other partially constructed nests. Intraspecific brood parasitism is known, that is, females may lay their eggs in the nests of others. Young birds leave the nest in a juvenal plumage which is replaced in their first moult after about four to six months. The young disperse to new locations not far from their nest and young have been located up to two kilometres away from their origin. Females are capable of breeding after a year while males take half a year longer. Prior to breeding they go through a prenuptial moult. Adults also go through a second moult after breeding and thus there are two moults each year. Histochemical studies have shown increased lipid metabolism in the crown region of male Baya during the breeding season. Lipids are known to be involved in the transport of the yellow carotenoid pigments that form the crown and are subsequently metabolized.</p><p>The nest, being suspended from thorny trees and overhanging water, is protected from many predators, but nest predation by crows is not unusual. Brood may also be destroyed by lizards such as <i>Calotes versicolor</i> or rodents such as <i>Vandeleuria oleracea</i> which may take over the nest. Nests may sometimes be taken over and used for nesting by munias and Indian silverbills (<i>Euodice malabarica</i>).</p>\n<ul class=\"gallery mw-gallery-packed\"><li class=\"gallerybox\" style=\"width: 162px\">\n\t\t<li class=\"gallerybox\" style=\"width: 162px\">\n\t\t<li class=\"gallerybox\" style=\"width: 105.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 162px\">\n\t\t<li class=\"gallerybox\" style=\"width: 110px\">\n\t\t<li class=\"gallerybox\" style=\"width: 183.33333333333px\">\n</ul><h2><span id=\"In_culture\">In culture</span></h2>\n<p>A widespread folk belief in India is that the baya sticks fireflies with mud to the nest walls to light up the interior of the nest at night. Clay, however is known to be used in the nests of baya weavers. Males alone have been seen to add blobs of mud and dung to the nest chamber prior to pairing with a female. It has been suggested that the clay may help to stabilise the nest in strong winds.</p><p>In earlier times, the baya weaver was trained by street performers in India for entertainment. They could pick up objects at the command of their trainers. They were trained to fire toy cannons, string beads, pick up coins and other objects. According to Edward Blyth \"the truth is, that the feats performed by trained Bayas are really very wonderful, and must be witnessed to be fully credited. Exhibitors carry them about, we believe, to all parts of the country; and the usual procedure is, when ladies are present, for the bird, on a sign from its master, to take a sweetmeat in its bill, and deposit it between a lady's lips, and repeat this offering to every lady present, the bird following the look and gesture of its master. A miniature cannon is then brought, which the bird loads with coarse grains of powder....\" Robert Tytler noted demonstrations where the bird would twirl a thin stick with fires at the ends over its head. These uses have been noted from the time of Akbar.\n</p>\n<blockquote class=\"templatequote\"><p>The baya is like a wild sparrow but yellow. It is extremely intelligent, obedient and docile. It will take small coins from the hand and bring them to its master, and will come to a call from a long distance. Its nests are so ingeniously constructed as to defy the rivalry of clever artificers.</p></blockquote>\n<h3><span id=\"Local_names\">Local names</span></h3>\n<p><i>T\u00fak\u00fara Sorai</i> (Assamese: \u099f\u09cb\u0995\u09cb\u09f0\u09be \u099a\u09f0\u09be\u0987); <i>baya</i>, <i>son-chiri</i> (Hindi); <i>bayya chirya</i> (Urdu: \u0628\u06cc\u0651\u0627 \u0686\u0691\u06cc\u0627 ); <i>\u0b2c\u0b3e\u0b5f\u0b3e \u0b1a\u0b22\u0b3c\u0b47\u0b07</i> (Odia); <i>sugaran</i> (Marathi); <i>tempua</i> (Malay); <i>sughari</i> (Gujarati); <i>\u09ac\u09be\u09ac\u09c1\u0987 (babui)</i> (Bengali); <i>parsupu pita</i>, <i>gijigadu</i>/<i>gijjigadu \u0c17\u0c3f\u0c1c\u0c3f\u0c17\u0c3e\u0c21\u0c41</i> (Telugu); <i>gijuga \u0c97\u0cbf\u0c9c\u0cc1\u0c97</i> (Kannada); <i>thukanam kuruvi, \u0d06\u0d31\u0d4d\u0d31\u0d15\u0d4d\u0d15\u0d41\u0d30\u0d41\u0d35\u0d3f</i> (Malayalam); <i>thukanan-kuruvi, </i> \u0ba4\u0bc2\u0b95\u0bcd\u0b95\u0ba3\u0bbe\u0b99\u0bcd\u0b95\u0bc1\u0bb0\u0bc1\u0bb5\u0bbf (Tamil); <i>wadu-kurulla</i>, <i>tatteh-kurulla</i>, <i>goiyan-kurulla</i> (Sinhala); <i>sa-gaung-gwet</i>, <i>sar-buu-daung \u1005\u102c\u1017\u1030\u1038\u1010\u1031\u102c\u1004\u103a\u1038</i> (Myanmar); <i>bijra</i> (Punjabi: \u0a2c\u0a3f\u0a1c\u0a5c\u0a3e ); <i>suyam</i> (Chota Nagpur), <i>bagra</i>(Maithili).\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u0938\u0941\u0917\u0943\u0939\u0903/\u091a\u091e\u094d\u091a\u0942\u0938\u0942\u091a\u0915\u0903) \n</p><p><br></p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Alexander, Horace (1972) Nest building of the Baya Weaver Bird. <i>Newsletter for Birdwatchers</i> . 12(9):12.</li>\n<li><cite id=\"CITEREFAli,_SalimAmbedkar,_Vijaykumar_C.1956\" class=\"citation journal\">Ali, Salim; Ambedkar, Vijaykumar C. (1956). \"Notes on the Baya Weaver Bird, <i>Ploceus philippinus</i> Linn\". <i>J. Bombay Nat. Hist. Soc</i>. <b>53</b> (3): 381\u2013389.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Notes+on+the+Baya+Weaver+Bird%2C+Ploceus+philippinus+Linn.&amp;rft.volume=53&amp;rft.issue=3&amp;rft.pages=381-389&amp;rft.date=1956&amp;rft.au=Ali%2C+Salim&amp;rft.au=Ambedkar%2C+Vijaykumar+C.&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F48180833&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFAmbedkar,_V.C.1978\" class=\"citation journal\">Ambedkar, V.C. (1978). \"Abnormal nests of the Baya Weaver Bird <i>Ploceus philippinus</i> (Linn.)\". <i>J. Bombay Nat. Hist. Soc</i>. <b>75</b> (Supplement): 1205\u20131211.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Abnormal+nests+of+the+Baya+Weaver+Bird+Ploceus+philippinus+%28Linn.%29&amp;rft.volume=75&amp;rft.issue=Supplement&amp;rft.pages=1205-1211&amp;rft.date=1978&amp;rft.au=Ambedkar%2C+V.C.&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F48297442&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFAmbedkar,_V._C.1958\" class=\"citation journal\">Ambedkar, V. C. (1958). \"Notes on the Baya: Breeding season 1957\". <i>J. Bombay Nat. Hist. Soc</i>. <b>55</b> (1): 100\u2013106.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Notes+on+the+Baya%3A+Breeding+season+1957&amp;rft.volume=55&amp;rft.issue=1&amp;rft.pages=100-106&amp;rft.date=1958&amp;rft.au=Ambedkar%2C+V.+C.&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F48068567&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Anon. (1981) Multiple Baya nests. <i>Newsletter for Birdwatchers</i> . 21(1):2-4.</li>\n<li><cite id=\"CITEREFDavis,_T._A.1985\" class=\"citation journal\">Davis, T. A. (1985). \"<span>\"</span>Blind\" or \"closed\" nests of Baya Weaverbird\". <i>J. Bombay Nat. Hist. Soc</i>. <b>82</b> (3): 658\u2013660.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=%22Blind%22+or+%22closed%22+nests+of+Baya+Weaverbird.&amp;rft.volume=82&amp;rft.issue=3&amp;rft.pages=658-660&amp;rft.date=1985&amp;rft.au=Davis%2C+T.+A.&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F50395358&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Davis, T. A. (1966) Nesting Behaviour of the Baya (<i>Ploceus philippinus</i>, L.). (Technical Report No. Nat 4/66.) Research and Training School, Indian Statistical Institute, Calcutta. 28 pages.</li>\n<li><cite id=\"CITEREFDewar,_Douglas1909\" class=\"citation journal\">Dewar, Douglas (1909). \"The nesting habits of the Baya\". <i>J. Bombay Nat. Hist. Soc</i>. <b>19</b> (3): 627\u2013634.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=The+nesting+habits+of+the+Baya&amp;rft.volume=19&amp;rft.issue=3&amp;rft.pages=627-634&amp;rft.date=1909&amp;rft.au=Dewar%2C+Douglas&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F5450041&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFKhacher,_Lavkumar1977\" class=\"citation journal\">Khacher, Lavkumar (1977). \"Note on the Baya Weaver bird <i>Ploceus philippinus</i> (Linn.)\". <i>J. Bombay Nat. Hist. Soc</i>. <b>74</b> (3): 533.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Note+on+the+Baya+Weaver+bird+Ploceus+philippinus+%28Linn.%29&amp;rft.volume=74&amp;rft.issue=3&amp;rft.pages=533&amp;rft.date=1977&amp;rft.au=Khacher%2C+Lavkumar&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F48239320&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Mathew,DN (1971) Ecology and biology of the Baya Weaver Bird <i>Ploceus philippinus</i>. Ph.D. Dissertation, University of Bombay, Bombay.</li>\n<li>Mohan, D. (1991) Common baya weaver bird - nest building habits. <i>Newsletter for Birdwatchers</i> . 31(9-10):2-4.</li>\n<li><cite id=\"CITEREFPunde,_A.B.1912\" class=\"citation journal\">Punde, A.B. (1912). \"Migration of the Baya (<i>Ploceus baya</i>)\". <i>J. Bombay Nat. Hist. Soc</i>. <b>21</b> (2): 675\u2013676.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Migration+of+the+Baya+%28Ploceus+baya%29&amp;rft.volume=21&amp;rft.issue=2&amp;rft.pages=675-676&amp;rft.date=1912&amp;rft.au=Punde%2C+A.B.&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F30151424&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Serrao, J.S. (1971) Nesting of the Baya Weaver Bird <i>Ploceus philippinus</i>. <i>Newsletter for Birdwatchers</i> . 11(10):11.</li>\n<li>Sharma, S.K. (1995) Nests of Baya used as filling fibre in southern Rajasthan. <i>Newsletter for Birdwatchers</i> . 35(3):57-58.</li>\n<li><cite id=\"CITEREFSharma,_Satish_Kumar1987\" class=\"citation journal\">Sharma, Satish Kumar (1987). \"Host plants used by Baya Weaver Bird (<i>Ploceus philippinus</i> Linn.) for nesting in eastern Rajasthan (Breeding period 1982)\". <i>J. Bombay Nat. Hist. Soc</i>. <b>84</b> (1): 218\u2013220.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Host+plants+used+by+Baya+Weaver+Bird+%28Ploceus+philippinus+Linn.%29+for+nesting+in+eastern+Rajasthan+%28Breeding+period+1982%29&amp;rft.volume=84&amp;rft.issue=1&amp;rft.pages=218-220&amp;rft.date=1987&amp;rft.au=Sharma%2C+Satish+Kumar&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F49081257&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFSharma,_Satish_Kumar_(1988)\" class=\"citation journal\">Sharma, Satish Kumar (1988). \"Buttressed nests of Baya Weaver Bird <i>Ploceus philippinus</i> (Linn.)\". <i>J. Bombay Nat. Hist. Soc</i>. <b>85</b> (2): 432.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Buttressed+nests+of+Baya+Weaver+Bird+Ploceus+philippinus+%28Linn.%29&amp;rft.volume=85&amp;rft.issue=2&amp;rft.pages=432&amp;rft.au=Sharma%2C+Satish+Kumar+%281988%29&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F48804993&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Sharma, Satish Kumar (1985) A study of qualitative aspect of abnormal nesting in Baya Weaver Bird the <i>Ploceus philippinus</i> and <i>P. benghalensis</i>. J. Southern Forest Ranger's College 61:50-54.</li>\n<li><cite id=\"CITEREFSharma,_Satish_Kumar1991\" class=\"citation journal\">Sharma, Satish Kumar (1991). \"Nests of Baya Weaver Birds <i>Ploceus philippinus</i> and wintering Arthropods\". <i>J. Bombay Nat. Hist. Soc</i>. <b>88</b> (2): 289\u2013290.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=Nests+of+Baya+Weaver+Birds+Ploceus+philippinus+and+wintering+Arthropods&amp;rft.volume=88&amp;rft.issue=2&amp;rft.pages=289-290&amp;rft.date=1991&amp;rft.au=Sharma%2C+Satish+Kumar&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F48673711&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFSharma,_Satish_Kumar1995\" class=\"citation journal\">Sharma, Satish Kumar (1995). \"A study of abnormal nests of Baya Weaver Bird <i>Ploceus philippinus</i> (Linn.) in Rajasthan\". <i>J. Bombay Nat. Hist. Soc</i>. <b>92</b> (1): 67\u201376.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Bombay+Nat.+Hist.+Soc.&amp;rft.atitle=A+study+of+abnormal+nests+of+Baya+Weaver+Bird+Ploceus+philippinus+%28Linn.%29+in+Rajasthan&amp;rft.volume=92&amp;rft.issue=1&amp;rft.pages=67-76&amp;rft.date=1995&amp;rft.au=Sharma%2C+Satish+Kumar&amp;rft_id=https%3A%2F%2Fbiodiversitylibrary.org%2Fpage%2F48613598&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaya+weaver\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Sidhartha, D. (1981) Baya nests in October. <i>Newsletter for Birdwatchers</i> . 21(1):8.</li>\n<li>Singh, T. G. M. (1980) An observation on the behaviour of Indian Baya (<i>Ploceus phillipinus</i>) in captivity during solar eclipses. Mayura 1(2):20-21.</li>\n<li>Stairmand, D.A. (1971) Pre-monsoon breeding of the Baya <i>Ploceus philippinus</i>. <i>Newsletter for Birdwatchers</i> . 11(9):12.</li>\n<li>Thapliyal, J. P.; Tewary, P. D. (1964) Effect of light on the pituitary, gonad and plumage pigmentation in the Avadavat (<i>Estrilda amandava</i>) and Baya Weaver (<i>Ploceus philippinus</i>). Proc. Zool. Soc. London 142, 67\u201371.</li>\n<li>Vardhani, B. P.; Rao, P. S.; Srimannarayana,G. (1992) The efficacy of certain plant extracts as repellents against House Sparrow, <i>Passer domesticus</i> and Baya Weaver Bird <i>Ploceus philippinus</i>. J. Appl. Zool. Res. 3(2):193-194.</li>\n<li>Letitia Landon refers to the baya in 'Kishen Kower' from 'The Zenana' - \"And the hues of the bayas like sunbeams combined;\" She describes them in a note as 'Small crested sparrows, with bright yellow breasts'.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Baya weaver media on the Internet Bird Collection</li></ul> "
    },
    "bean goose": {
        "id": "b017",
        "name": "Bean Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anser", "species":"fabalis",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bean goose</b> is a goose that breeds in northern Europe and Eurosiberia. It has two distinct varieties, one inhabiting taiga habitats and one inhabiting tundra. These are recognised as separate species by the American Ornithologists' Union and the IOC (taiga bean goose and tundra bean goose), but are considered a single species by other authorities, such as the British Ornithologists' Union. It is migratory and winters further south in Europe and Asia.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The length ranges from 68\u00a0to 90\u00a0cm (27\u201335\u00a0in), wingspan from 140\u00a0to 174\u00a0cm (55\u201369\u00a0in) and weight from 1.7\u20134\u00a0kg (3.7\u20138.8\u00a0lb). In the nominate subspecies, males average 3.2\u00a0kg (7.1\u00a0lb) and females average 2.84\u00a0kg (6.3\u00a0lb). The bill is black at the base and tip, with an orange band across the middle; the legs and feet are also bright orange.\n</p><p>The upper wing-coverts are dark brown, as in the white-fronted goose (<i>Anser albifrons</i>) and the lesser white-fronted goose (<i>A. erythropus</i>), but differing from these in having narrow white fringes to the feathers.\n</p><p>The voice is a loud honking, higher pitched in the smaller subspecies.\n</p><p>The closely related pink-footed goose (<i>A. brachyrhynchus</i>) has the bill short, bright pink in the middle, and the feet also pink, the upper wing-coverts being nearly of the same bluish-grey as in the greylag goose. In size and bill structure, it is very similar to <i>Anser fabalis rossicus</i>, and in the past was often treated as a sixth subspecies of bean goose.\n</p>\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The English and scientific names of the bean goose come from its habit in the past of grazing in bean field stubbles in winter. <i>Anser</i> is the Latin for \"goose\", and <i>fabalis</i> is derived from the Latin \n<i>faba</i>, a broad bean.</p>\n\n\n<p>There are five subspecies, with complex variation in body size and bill size and pattern; generally, size increases from north to south and from west to east. Some ornithologists (including AOU 2007) split them into two species based on breeding habitat, whether in forest bogs in the subarctic taiga, or on the arctic tundra. The taiga and tundra bean goose diverged about 2.5 million years ago and established secondary contact ca. 60,000 years ago, resulting in extensive gene flow.</p>\n<dl><dt>Taiga bean goose (<i>Anser fabalis</i> sensu stricto) (Latham, 1787)</dt></dl><ul><li><i>A. f. fabalis</i> (Latham, 1787). Scandinavia east to the Urals. Large; bill long and narrow, with broad orange band. <i>Anser fabalis fabalis</i> is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.</li>\n<li><i>A. f. johanseni</i> (Delacour, 1951). West Siberian taiga. Large; bill long and narrow, with narrow orange band.</li>\n<li><i>A. f. middendorffii</i> (Severtzov, 1873). East Siberian taiga. Very large; bill long and stout, with narrow orange band.</li></ul><dl><dt>Tundra bean goose (<i>Anser serrirostris</i>, if treated as a distinct species) (Gould, 1852)</dt></dl><ul><li><i>A. s. rossicus</i> (Buturlin, 1933). Northern Russian tundra east to the Taimyr Peninsula. Small; bill short and stubby, with narrow orange band. <i>Anser fabalis rossicus</i> is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.</li>\n<li><i>A. s. serrirostris</i> (Gould, 1852). East Siberian tundra. Large; bill long and stout, with narrow orange band.</li></ul><h2><span id=\"Distribution\">Distribution</span></h2>\n\n<p>The bean goose is a rare winter visitor to Britain. There are two regular wintering flocks of taiga bean goose, in the Yare Valley, Norfolk and the Avon Valley, Scotland. A formerly regular flock in Dumfries and Galloway no longer occurs there. The tundra bean goose has no regular wintering sites, but is found in small groups among other grey goose species \u2013 among the most regular localities are WWT Slimbridge, Gloucestershire and Holkham Marshes, Norfolk.\n</p><p>The Taiga bean geese <i>Anser fabalis fabalis</i> wintering in Europe are considered to migrate across three different flyways: Western, Central and Eastern; which has been confirmed by stable isotope analysis of their flight feathers.</p>"
    },
    "bearded vulture": {
        "id": "b018",
        "name": "Beaded Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Gypaetus", "species":"barbatus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bearded vulture</b> (<i>Gypaetus barbatus</i>), also known as the <b>lammergeier</b> (or <b>lammergeyer</b>) or <b>ossifrage</b>, is a bird of prey and the only member of the genus <i>Gypaetus</i>. Traditionally considered an Old World vulture, it actually forms a minor lineage of Accipitridae together with the Egyptian vulture (<i>Neophron percnopterus</i>), its closest living relative. It is not much more closely related to the Old World vultures proper than to, for example, hawks, and differs from the former by its feathered neck. Although dissimilar, the Egyptian and bearded vulture each have a lozenge-shaped tail\u2014unusual among birds of prey.\n</p><p>The bearded vulture is the only known vertebrate whose diet consists almost exclusively (70 to 90 percent) of bone.  It lives and breeds on crags in high mountains in southern Europe, the Caucasus, Africa, the Indian subcontinent, and Tibet, laying one or two eggs in mid-winter that hatch at the beginning of spring. Populations are residents.\n</p><p>The population of this species continues to decline. Until July 2014, it was classified by the IUCN Red List of Threatened Species as being of Least Concern; it has, however, since been reassessed as Near Threatened.\n</p>\n\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The lammergeier is sparsely distributed across a vast, considerable range. It can be found in mountainous regions from Europe east to Siberia (Palearctic) and Africa. It is found in the Pyrenees, the Alps, the Caucasus region, the Zagros Mountains, the Alborz, the Koh-i-Baba in Bamyan, Afghanistan, the Altai Mountains, the Himalayas, Ladakh in northern India, western and central China, Israel (Where although extinct as a breeder since 1981, single young birds have been reported in 2000, 2004 and 2016 ), and the Arabian Peninsula. In Africa, it is found in the Atlas Mountains, the Ethiopian Highlands and down from Sudan to northeastern Democratic Republic of the Congo, central Kenya and northern Tanzania. An isolated population inhabits the Drakensberg of South Africa.</p><p>This species is almost entirely associated with mountains and inselbergs with plentiful cliffs, crags, precipices, canyons and gorges. They are often found near alpine pastures and meadows, montane grassland and heath, steep-sided, rocky wadis, high steppe and are occasional around forests. They seem to prefer desolate, lightly-populated areas where predators who provide many bones, such as wolves and golden eagles, have healthy populations.\n</p><p>In Ethiopia, they are now common at refuse tips on the outskirts of small villages and towns. Although they occasionally descend to 300\u2013600\u00a0m (980\u20131,970\u00a0ft), bearded vultures are rare below an elevation of 1,000\u00a0m (3,300\u00a0ft) and normally reside above 2,000\u00a0m (6,600\u00a0ft) in some parts of their range. They are typically found around or above the tree line which are often near the tops of the mountains, at up to 2,000\u00a0m (6,600\u00a0ft) in Europe, 4,500\u00a0m (14,800\u00a0ft) in Africa and 5,000\u00a0m (16,000\u00a0ft) in central Asia. In southern Armenia they have been found to breed below 1,000\u00a0m (3,300\u00a0ft) if cliff availability permits. They even have been observed living at altitudes of 7,500\u00a0m (24,600\u00a0ft) on Mount Everest and been observed flying at a height of 24,000\u00a0ft (7,300\u00a0m).</p><p>During 1970s and 1980s the population of the bearded vulture in southern Africa declined however their distribution remained constant. The bearded vulture population occupies the highlands of Lesotho, Free State, Eastern Cape and Maloti-Drakensberg mountains in KwaZulu-Natal. Adult bearded vultures utilise areas with higher altitudes, with steep slopes and sharp points and within areas that are situated closer to their nesting sites . Adult bearded vultures are more likely to fly below 200m over Lesotho. Along the Drakensberg Escarpment from the area of Golden Gate Highlands National Park south into the northern part of the Eastern Cape there was the greatest densities of bearded vultures.\n</p><p>Abundance of bearded vultures is shown for eight regions within the species' range in southern Africa. The total population of bearded vultures in southern Africa is calculated as being 408 adult birds and 224 young birds of all age classes therefore giving an estimate of about 632 birds.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>This bird is 94\u2013125\u00a0cm (37\u201349\u00a0in) long with a wingspan of 2.31\u20132.83\u00a0m (7.6\u20139.3\u00a0ft). It weighs 4.5\u20137.8\u00a0kg (9.9\u201317.2\u00a0lb), with the nominate race averaging 6.21\u00a0kg (13.7\u00a0lb) and <i>G. b. meridionalis</i> of Africa averaging 5.7\u00a0kg (13\u00a0lb). In Eurasia, vultures found around the Himalayas tend to be slightly larger than those from other mountain ranges. Females are slightly larger than males. It is essentially unmistakable with other vultures or indeed other birds in flight due to its long, narrow wings, with the wing chord measuring 71.5\u201391\u00a0cm (28.1\u201335.8\u00a0in), and long, wedge-shaped tail, which measures 42.7\u201352\u00a0cm (16.8\u201320.5\u00a0in) in length. The tail is longer than the width of the wing. The tarsus is relatively small for the bird's size, at 8.8\u201310\u00a0cm (3.5\u20133.9\u00a0in). The proportions of the species have been compared to a falcon, scaled to an enormous size.</p><p>Unlike most vultures, the bearded vulture does not have a bald head. This species is relatively small headed, although its neck is powerful and thick. It has a generally elongated, slender shape, sometimes appearing bulkier due to the often hunched back of these birds. The gait on the ground is waddling and the feet are large and powerful. The adult is mostly dark gray, rusty and whitish in color. It is grey-blue to grey-black above. The creamy-coloured forehead contrasts against a black band across the eyes and lores and bristles under the chin, which form a black beard that give the species its English name. Bearded vultures are variably orange or rust of plumage on their head, breast and leg feathers but this is actually cosmetic. This colouration may come from dust-bathing, rubbing mud on its body or from drinking in mineral-rich waters. The tail feathers and wings are gray. The juvenile bird is dark black-brown over most of the body, with a buff-brown breast and takes five years to reach full maturity. The bearded vulture is silent, apart from shrill whistles in their breeding displays and a falcon-like <i>cheek-acheek</i> call made around the nest.</p>\n<ul class=\"gallery mw-gallery-packed\"><li class=\"gallerybox\" style=\"width: 225.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 162px\">\n\t\t<li class=\"gallerybox\" style=\"width: 160.66666666667px\">\n\t\t<li class=\"gallerybox\" style=\"width: 156.66666666667px\">\n\t\t<li class=\"gallerybox\" style=\"width: 94.666666666667px\">\n</ul><h3><span id=\"Physiology\">Physiology</span></h3>\n<p>The acid concentration of the bearded vulture stomach has been estimated to be of pH about 1. Large bones will be digested in about 24 hours, aided by slow mixing/churning of the stomach content. The high fat content of bone marrow makes the net energy value of bone almost as good as that of muscle, even if bone is less completely digested. A skeleton left on a mountain will dehydrate and become protected from bacterial degradation, and the bearded vulture can return to consume the remainder of a carcass even months after the soft parts have been consumed by other animals, larvae and bacteria.</p>"
    },
    "beautiful rosefinch": {
        "id": "b019",
        "name": "Beautiful Rosefince",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"pulcherrimus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Himalayan beautiful rosefinch</b> (<i>Carpodacus pulcherrimus</i>) is a true finch species (family Fringillidae). It is found in mid-western China and the northern Himalayas. Its natural habitats are temperate shrubland and subtropical or tropical high-altitude shrubland.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "bengal bushlark": {
        "id": "b020",
        "name": "Bengal Bushlark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Mirafra", "species":"assamica",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Bengal bush lark</b> (<i>Mirafra assamica</i>) or <b>Bengal lark</b> is a species of lark in the family Alaudidae found in southern Asia.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n\n<p>The differences within the genus <i>Mirafra</i> are often very subtle and confusing with many differences apparent only when specimens are examined in hand.\n</p><p>The Bengal bush lark was earlier classified into several races, the Bengal race <i>assamica</i> and the Madras race <i>affinis</i>. These were subsequently split, on the basis of diagnostic song and display characters, into the Jerdon's bush lark (<i>Mirafra affinis</i>) and <i>assamica</i> in the strict sense. Formerly, both the Burmese bush lark and Jerdon's bush lark were considered subspecies of the Bengal bush lark (as <i>M. a. microptera</i> and <i>M. a. affinis</i> respectively) until split to form a separate species. The alternate name \"<b>rufous-winged bush lark</b>\" may also be used to describe the red-winged lark. Another alternate name for the Bengal bush lark is the <b>rufous-winged lark</b>.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The Bengal bush lark is short-tailed and has a strong stout bill. It is not as long as the skylark, measuring about 15 centimetres in length. It is dark-streaked grey above, and buff below, with spotting on the breast and behind the eye. The wings are rufous.\n</p><p>The song of the Bengal bush lark is a repetition of thin disyllabic notes, delivered in a song-flight.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>The Bengal bush lark is a resident breeder in the Indian subcontinent and south-east Asia, and found in the countries of Bangladesh, Bhutan, India, Myanmar and Nepal, with an estimated global extent of occurrence of 100,000-1,000,000 square kilometres.</p><p>The Bengal bush lark is a common bird of dry, open, stony country often with sparse shrubs, and cultivated areas.\n</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>It nests on the ground, laying three or four speckled eggs. This lark feeds primarily on seeds and insects, especially the latter during the breeding season.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Species factsheet - BirdLife International</li></ul> "
    },
    "bengal florican": {
        "id": "b021",
        "name": "Bengal Florican",
        "order": order.OTIDIFORMES,
        "family": familyname.Otididae,
        "genus":"Houbaropsis", "species":"bengalensis",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>Bengal florican</b> (<i>Houbaropsis bengalensis</i>), also called <b>Bengal bustard</b>, is a bustard species native to the Indian subcontinent, Cambodia, and Vietnam. It is listed as Critically Endangered on the IUCN Red List because fewer than 1,000 individuals were estimated to be alive as of 2017. It is the only member of the genus <i>Houbaropsis</i>.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>Adult Bengal floricans range from 66\u201368\u00a0cm (26\u201327\u00a0in) in length and stand around 55\u00a0cm (22\u00a0in) tall. The male has black plumage from the head and neck to underparts. Its head carries a long lanky crest, and the neck has elongated display plumes. The upperside is buff with fine black vermiculations and black arrowhead markings, and there is a conspicuous large white patch from the wing coverts to the remiges. In flight, the male's wings appear entirely white except for the dark primary remiges. The feet and legs are yellow, the bill and irides are dark.</p><p>Females are larger than the males and have a buff-brown colour similar to the males' back, with a dark brown crown and narrow dark streaks down the side of the neck. Their wing coverts are lighter than the remiges and covered in fine dark barring. Immature birds look like females. Adult females weigh around 1.7\u20131.9\u00a0kg (3.7\u20134.2\u00a0lb) against a weight of 1.2\u20131.5\u00a0kg (2.6\u20133.3\u00a0lb) in males.</p><p>They are normally silent but when disturbed utters a metallic <i>chik-chik-chik</i> call. Displaying males croak and produce a strange deep humming.</p><p>The only bird even remotely similar to adult males of the Bengal florican is the lesser florican (<i>Sypheotides indica</i>). This is a smaller, slimmer-necked bustard overall, and its males have cheek-tufts of plumes with pennant-like tips rather than the crest, and a white band between neck and back. The females are similar, and young Bengal floricans can be easily mistaken for female lesser floricans. The latter has almost white wing coverts however, resembling the males' wing patch.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>It has two disjunct populations, one in the Indian subcontinent, another in Southeast Asia. The former occurs from Uttar Pradesh (India) through the Terai of Nepal to Assam (where it is called ulu mora) and Arunachal Pradesh in India, and historically to Bangladesh. The South East Asian population occurs in Cambodia and perhaps adjacent southern Vietnam. This species is mostly resident on its breeding grounds; around Tonl\u00e9 Sap in Cambodia however, the birds use grasslands near the lake to breed, and move away from the water in the wet season when the breeding grounds are flooded. Similarly, the Terai population seems to move to warmer lowland locations in winter. Migrations are not long-distance, however, and probably are restricted to a few dozen kilometers.</p><p>Bengal floricans live in open tall grassland habitats with scattered bushes. The most important grass species are satintails (<i>Imperata</i>, in particular Cogongrass <i>I. cylindrica</i>), sugarcane (<i>Saccharum</i>, in particular <i>S. munja</i> and Kans Grass <i>S. spontaneum</i>), as well as <i>Desmostachya bipinnata</i>. The birds are usually encountered in the early mornings and evenings and are most easily spotted in the breeding season from March to August, which is when most censuses of the population are conducted. Particular between March and May, when they give their stunning courtship display, males are far more conspicuous than the cryptically-coloured females, which moreover prefer high grassland rich in sugarcane.</p>\n<h3><span id=\"Status_and_conservation\">Status and conservation</span></h3>\n\n<p>Restricted to tiny fragments of grassland scattered across South and Southeast Asia, the Bengal florican is the world's rarest bustard. It is known to have become increasingly threatened by land conversion for intensive agriculture, particularly for dry season rice production. Poaching continues to be a problem in Southeast Asia, while the South Asian population is down to less than 350 adult birds, about 85% of which are found in India. Though more threatened, birds in Southeast Asia may number as many as in South Asia but more probably closer to or even less than 1,000 adults.</p><p>The population has decreased dramatically in past decades. It may be that in India the decline is coming to a halt and that stocks in Dibru-Saikhowa and Kaziranga National Parks and Dudhwa Tiger Reserve are safe at very low levels. Still, its global status is precarious and it was consequently uplisted from Endangered to Critically Endangered in the 2007 IUCN Red List.</p><p>In Cambodia, it is mostly found in Kampong Thom Province; lesser numbers are found in Siem Reap Province and remnants might persist in Banteay Meanchey, Battambang and Pursat Provinces. Its rate of decline there has accelerated in the early 21st century, and the bird's numbers in Southeast Asia might fall to effective extinction in the early 2010s. The government of Cambodia has taken a significant step towards protecting important habitat for the Bengal florican. Along with 350 square kilometres being designated as \"Integrated Farming and Biodiversity Areas\", where land-use practices are adapted to also benefit the Bengal florican, a public education program to inform schoolchildren about the bird has also been undertaken. At present, the species may persist in the Ang Trapaing Thmor Crane Sanctuary and perhaps Vietnam's Tr\u00e0m Chim National Park, but the South Asian population is not known with certainty from any protected areas.</p><p>In Nepal, it is essentially restricted to protected areas, namely Sukla Phanta Wildlife Reserve, Bardia and Chitwan National Parks. Since 1982, the Sukla Phanta and Bardia populations appear to have been stable, but the Chitwan population has declined. In 2001, 20\u201328 birds were estimated in Sukla Phanta, 6\u201310 birds in Bardia, and 6\u201322 birds in Chitwan. It used to be fairly common in the Koshi Tappu Wildlife Reserve but has not been recorded there since 1990, and has not been sighted around the Koshi Barrage since the 1980s. In spring 2007, 8\u20139 males were recorded in Sukla Phanta and 16\u201318 birds estimated; one male was sighted in Bardia and 2\u20134 estimated; five males were sighted in Chitwan and 10\u201314 estimated. The population in Nepal has declined by 56% since 1982 and by 30% since 2001. In spring 2011, 17 birds were recorded from nine different sites along a 39\u00a0km (24\u00a0mi) north-south stretch of the Koshi River. Seven were males and 10 were females. Only five individuals were recorded outside the reserve, two pairs north of Koshi Tappu, and one female seen twice near the Koshi Barrage area.</p><p>The courtship display of males has been discussed by many naturalists travelling British India, and in the modern era attracts tourists who provide revenue to locals. Studies indicate that the Bengal florican is not a particularly shy or hemerophobic species, its apparent intolerance of human settlements being chiefly due to its intolerance of land clearance for agriculture. Pastures and the traditional use of common land for villagers' tall-grass harvest (for construction and handicraft) actually seem to be tolerated quite well by the birds.</p><p>If firewood and timber is collected from grassland rather than from forests, human land use will even benefit the species. In particular, sal (<i>Shorea robusta</i>) and saj (<i>Terminalia elliptica</i>) have been identified as trees that encroach upon the florican's habitat in Nepal, and its decline in Bardia National Park is probably chiefly due to insufficient use of trees that overgrow grassland. A sustainable land-management technique that will bolster Bengal florican stocks consists of harvesting grass and particularly wood from changing tracts of land, leaving some areas unharvested each year and setting aside a few additional ones as reserve land, where grasses can grow tall for years until they are harvested. Controlled burning may be necessary when woodland encroachment is strong; it should take place before March so that the year's offspring are not harmed.\nA landscape ecology approach, integrating social, biological and physical environmental elements at scales compatible with management objectives, will be needed to effectively conserve Bengal floricans and their grassland habitats.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li>Grimmett, R; Inskipp, C. and T. (1998). <i>Birds of the Indian Subcontinent</i>. Christopher Helm, London. <small><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-7136-4004-9</small></li>\n<li>BirdLife International (BLI) (2007). [ 2006-2007 Red List status changes ]. Retrieved 2007-AUG-26.</li>\n<li>BirdLife International (BLI) (2009). Bengal Florican Species Factsheet. Retrieved 2009-JUN-11.</li>\n<li>Gray, T. N. E;  Collar, N. J; Davidson, P. J. A; Dolman, P. M; Evans, T. D; Fox, H. N; Chamnan H; Borey R; Hout, S. K; Van Zalinge R. N. (2009). Distribution, status and conservation of the Bengal Florican <i>Houbaropsis bengalensis</i> in Cambodia. Bird Conservation International (2009) 19: 1\u201314 PDF download</li></ul>"
    },
    "besra": {
        "id": "b022",
        "name": "Besra",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Accipiter", "species":"virgatus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n<p><br>\nThe <b>besra</b>, also called the <b>besra sparrowhawk</b> (<i>Accipiter virgatus</i>) is a bird of prey in the family Accipitridae.\n</p><p>The besra is a widespread resident breeder in dense forests throughout southern Asia, ranging from the Indian subcontinent eastwards across Southeast Asia and into East Asia. It nests in trees, building a new nest each year. It lays 2 to 5 eggs.\n</p><p>This bird is a medium-sized raptor (29 to 36\u00a0cm) with short broad wings and a long tail, both adaptations to fast maneuvering through dense vegetation. The normal flight of this species is a characteristic \"flap\u2013flap\u2013glide\".\n</p><p>This species is like a darker version of the widespread shikra with darker upperparts, strongly barred underwing, broader gular stripe and thin long legs and toes. The adult male besra has dark blue-grey upperparts, and is white, barred reddish brown below. The larger female is browner above than the male. The juvenile is dark brown above and white, barred with brown below. In all plumages have 3-4 equally sized dark bands on uppertail.\n</p><p>In winter, the besra will emerge into more open woodland including savannah and cultivation. Its hunting technique is similar to other small hawks such as the sparrowhawk and the sharp-shinned hawk, relying on surprise as it flies from a hidden perch or flicks over a bush to catch its prey unaware.\n</p><p>The prey is lizards, dragonflies, and small birds and mammals.\n</p>\n\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li><i>Birds of India</i> by Grimmett, Inskipp and Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li></ul> "
    },
    "black baza": {
        "id": "b023",
        "name": "Black Baza",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Aviceda", "species":"leuphotes",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black baza</b> (<i>Aviceda leuphotes</i>) is a small sized bird of prey found in the forests of the Northeast India, the eastern Himalayas, China and Southeast Asia. Many populations are migratory. The races in the Indian region are migratory, wintering in the south of the Peninsula and Sri Lanka. The black bazas have short, stout legs and feet with strong talons. A prominent crest is a feature of the bazas. They are found in dense forest often in small groups. They are also known to spend a lot of time perching on bare branches of tall trees rising above the forest canopy.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n\n<p>The bird was first described based on a specimen from Pondicherry under the name of <i>Falco leuphotes</i>. Several geographic races have been described including <i>wolfei</i> which is based on a single specimen from Sichuan and may belong to the nominate subspecies. The named forms include the following, but they have been questioned and further study has been called for.</p>\n<ul><li><i>A. l. syama</i> (Hodgson, 1837) from eastern Nepal, northeastern India to south China which winters in Indo-China and the Malaya Peninsula.</li>\n<li><i>A. l. leuphotes</i> (Dumont, 1820) was once claimed to breed in South-Western India, but no evidence exists and this is doubtful. It is said to breed in Burma and Thailand, in which case it would likely be the same as <i>syama</i>, although the population in this region has in the past been assigned the name of <i>burmana</i>.</li>\n<li><i>A. l. andamanica</i> (Abdulali &amp; Grubh, 1970) is endemic to the Andaman Islands (South Andaman I) and has completely white underparts lacking any chestnut bands.</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>The black baza is a small and distinctively coloured raptor; it ranges from 30 to 35\u00a0cm in length, a 66 to 80\u00a0cm wingspan and a weight of 168 to 224 g.  When perched, the upright crest and contrasting patterns make it difficult to misidentify. The male has white scapulars, secondary coverts and on the secondaries. The female has white only on the scapulars and more chestnut bands on the underside unlike the few bands in the male.</p><p>While flying, it is similar to a crow and is often seen in small groups or flocks during migration. During migration, they are gregarious at their roost. They are somewhat crepuscular and more active at dusk and in overcast weather.</p>\n\n<p>They feed mainly on insects by making aerial sallies. They may also pick insects off a leaf, the insects always seized with their feet. They have been observed to attempt capturing small birds such as wagtails by making dashes into flocks. They have been noted to join mixed-species foraging flocks. It has also been known to feed on the fruits of the oil palm. They are somewhat crepuscular in habit. The call is a \"chu-weep\" somewhat similar to the call of the large cuckoo-shrike. Other descriptions include a soft squeal or whistle and a shrill gull-like mewing.</p><p>Like others in the genus <i>Aviceda</i> they have two tooth like indentations on the edge of the upper bill. Birds are said to have a disagreeable odour which has been said to be \"bug-like\".</p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>This species is found in Southeast Asia and parts of South Asia. They are migratory in parts of their range. Migratory birds may be seen in large numbers at some locations such as Chumphon in Thailand where they account for nearly 40% of the raptors on passage. In some parts of Hong Kong, they have established themselves in recent times changing from summer visitors to residents in small numbers.</p><p>In southern India the species is regularly reported in winter mainly from the Western Ghats (breeding records have been questioned), Eastern Ghats (mainly on spring passage) and known to breed in northeastern India and Burma. Winter records of the species include stray occurrences in or near metropolitan areas such as the Guindy National Park in Chennai, near Trivandrum\nand Bangalore. More recent studies have suggested that the species may be a regular winter visitor in the eastern part of peninsular India, and not just a passage migrant. Individuals have also been noted at Point Calimere.</p><p>The birds in northeastern India begin to breed in April. Both sexes take part in nest building, incubation, brooding and feeding. The nest is a firm platform of thin sticks with a central depression and lined with grass, fiber and overlaid with green leaves. The eggs take about 26\u201327 days to hatch. Insects are the predominant food of the chicks.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Hussain, SA (1985) Comments on Mr Abdulali's note on Dr. Sugathan's paper on Avifauna of Point Calimere. J. Bombay Nat. Hist. Soc. 82(1):210\u2013212.</li>\n<li>Inglis, CM (1948) Plumage of the young of the Indian Black-crested Baza. Jour. Bengal Nat. Hist. Soc. 23(1):73\u201375.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li></ul> "
    },
    "black bittern": {
        "id": "b024",
        "name": "Black Bittern",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ixobrychus", "species":"flavicolinus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black bittern</b> (<i>Ixobrychus flavicollis</i>) is a bittern of Old World origin, breeding in tropical Asia from Bangladesh, Pakistan, India, and Sri Lanka east to China, Indonesia, and Australia. It is mainly resident, but some northern birds migrate short distances.\n</p>\n\n<p>This is a fairly large species at 58\u00a0cm (23\u00a0in) in length, being by some margin the largest bittern in the genus <i>Ixobrychus</i>. Compared to related species, it has a longish neck and long yellow bill. The adult is uniformly black above, with yellow neck sides. It is whitish below, heavily streaked with brown. The juvenile is like the adult, but dark brown rather than black.\n</p><p>Their breeding habitat is reed beds. They nest on platforms of reeds in shrubs, or sometimes in trees. Three to five eggs are laid. They can be difficult to see, given their skulking lifestyle and reed bed habitat, but tend to fly fairly frequently when the all black upperparts makes them unmistakable.\n</p><p>Black bitterns feed on insects, fish, and amphibians.\n</p>\n\n\n<h2><span id=\"Conservation_status\">Conservation status</span></h2>\n<h3><span id=\"Australia\">Australia</span></h3>\n<p>Black bitterns are not listed as threatened on the Australian Environment Protection and Biodiversity Conservation Act 1999.\n</p>\n<h3><span id=\"State_of_Victoria.2C_Australia\"></span><span id=\"State_of_Victoria,_Australia\">State of Victoria, Australia</span></h3>\n<ul><li>The black bittern is listed as <b>threatened</b> on the Victorian Flora and Fauna Guarantee Act (1988).  Under this act, an <i>Action Statement</i> for the recovery and future management of this species has not yet been prepared.</li>\n<li>On the 2007 advisory list of threatened vertebrate fauna in Victoria, the black bittern is listed as vulnerable.</li></ul><h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li><i>Birds of India</i> by Grimmett, Inskipp and Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li></ul>"
    },
    "black bulbul": {
        "id": "b025",
        "name": "Black Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "genus":"Hypsipetes", "species":"leucocephalus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black bulbul</b> (<i>Hypsipetes leucocephalus</i>), also known as the <b>Himalayan black bulbul</b> or <b>Asian black bulbul</b>, is a member of the bulbul family of passerine birds. It is found in southern Asia from  India east to southern China. It is the type species of the genus <i>Hypsipetes</i>, established by Nicholas Aylward Vigors in the early 1830s. There are a number of subspecies, mostly varying in the shade of the body plumage which ranges from grey to black, and some also occur in white-headed morphs, as also suggested by its specific epithet <i>leucocephalus</i>, literally \"white head\". The legs and bill are always rich orange-red.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n\n<p>The black bulbul was originally described in the genus Turdus and has also been considered as either conspecific with or as subspecies of the Malagasy bulbul. The common name 'black bulbul' is also used as an alternate name by the Malagasy bulbul. Formerly, the square-tailed bulbul was also classified as two subspecies of the black bulbul.\n</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Ten subspecies are currently recognized, although the reproductive isolation mechanisms such as vocalization and geographic distributions of these populations still remain to be studied:</p>\n<ul><li><i>H. l. psaroides</i> - <small>Vigors, 1831</small>: Originally described as a separate species. Found along the Himalayas from the Kunar Valley (north-eastern Afghanistan) and northern Pakistan through Arunachal Pradesh (northern India) and the central Himalayas to north-western Myanmar</li>\n<li><b>Assam black bulbul</b> (<i>H. l. nigrescens</i>) - <small>Baker, ECS, 1917</small>: Found in Assam and Manipur (north-eastern India), and the Chin Hills (western Myanmar)</li>\n<li><b>Burmese black bulbul</b> (<i>H. l. concolor</i>) - <small>Blyth, 1849</small>: Originally described as a separate species. Found from eastern Myanmar and southern Yunnan (southern China) through Indochina</li>\n<li><i>H. l. ambiens</i> - <small>(Mayr, 1942)</small>: Found in north-eastern Myanmar and western Yunnan (southern China)</li>\n<li><i>H. l. sinensis</i> - <small>(La Touche, 1922)</small>: Found in northern Yunnan (southern China)</li>\n<li><i>H. l. stresemanni</i> - <small>(Mayr, 1942)</small>: Members of this race have white heads. Found in central Yunnan (southern China)</li>\n<li><i>H. l. leucothorax</i> - <small>(Mayr, 1942)</small>: Members of this race have white heads. Found in central China</li>\n<li><i>H. l. leucocephalus</i> - <small>(Gmelin, JF, 1789)</small>: Members of this race have white heads. Found in south-eastern China</li>\n<li><i>H. l. nigerrimus</i> - <small>(Gould, 1863)</small>: Originally described as a separate species. Found in Taiwan</li>\n<li><i>H. l. perniger</i> - <small>R. Swinhoe, 1870</small>: Originally described as a separate species. Found on Hainan (off south-eastern China)</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n\n\n<p>The black bulbul is 24\u201325\u00a0cm (9.4\u20139.8\u00a0in) in length, with a long tail. The body plumage ranges from slate grey to shimmering black, depending on the race. The beak, legs, and feet are all orange and the head has a black fluffy crest. Sexes are similar in plumage, but young birds lack the crest, have whitish underparts with a grey breast band, and have a brown tint to the upperparts. They have a black streak behind the eye and on the ear coverts.</p>\n<h3><span id=\"Vocalisations\">Vocalisations</span></h3>\n<p>They can be quite noisy, making various loud cheeping, mewing and grating calls. The Himalayan form has been reported to make a call resembling a goat kid, throwing back its neck when calling.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This bulbul is found in broad-leaved forests, cultivation and gardens mainly in hilly areas, but Himalayan populations are known to sometimes descend into the adjoining plains in winter.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>It builds its nest in a tree or bush; the nest is a cup placed in a fork and made from grasses, dry leaves, mosses, lichens and cobwebs. The lining is made up of ferns, rootlets and other soft material. Both sexes participate in nest construction.  Two or three eggs form the usual clutch.\n</p>\n<h3><span id=\"Food_and_feeding\">Food and feeding</span></h3>\n<p>Black bulbuls feed mainly on seeds and insects, and they are often seen in small groups, either roosting or flying about in search of food. They are particularly fond of berries. They are known to feed on a wide range of berries including <i>Celtis</i>, <i>Rosa</i>, <i>Melia</i> and <i>Ehretia</i> in the Himalayas. They feed on the nectar of <i>Salmalia</i>, <i>Erythrina</i>, <i>Rhododendron</i> and other species. They make aerial sallies for insects.</p>\n\n<h2><span id=\"References\">References</span></h2> "
    },
    "black drongo": {
        "id": "b026",
        "name": "Black Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicrurus", "species":"macrocerus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b> black drongo</b> (<i>Dicrurus macrocercus</i>) is a small Asian passerine bird of the drongo family Dicruridae. It is a common resident breeder in much of tropical southern Asia from southwest Iran through India, Bangladesh and Sri Lanka east to southern China and Indonesia and accidental visitor of Japan. It is an all black bird with a distinctive forked tail and measures 28\u00a0cm (11\u00a0in) in length. It feeds on insects, and is common in open agricultural areas and light forest throughout its range, perching conspicuously on a bare perch or along power or telephone lines. The species is known for its aggressive behaviour towards much larger birds, such as crows, never hesitating to dive-bomb any bird of prey that invades its territory. This behaviour earns it the informal name of king crow. Smaller birds often nest in the well-guarded vicinity of a nesting black drongo. Previously grouped along with the African fork-tailed drongo (<i>Dicrurus adsimilis</i>), the Asian forms are now treated as a separate species with several distinct populations.\n</p><p>The black drongo has been introduced to some Pacific islands, where it has thrived and become abundant to the point of threatening and causing the extinction of native and endemic bird species there.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n\n<p>The black drongo was once considered a subspecies of the fork-tailed drongo (<i>Dicrurus adsimilis</i>), a close relative that diverged relatively recently. The two are now considered distinct species, with the fork-tailed drongo restricted to Africa and separated from the Asian range of the black drongo.</p><p>Seven subspecies have been named but the largely contiguous populations show clinal variation and intergrade with each other. Individuals from northern India (ssp. <i>albirictus</i>) are larger than those from the Sri Lankan population <i>minor</i> while those from the peninsular India (nominate subspecies) are intermediate in size. Race <i>cathoecus</i> is found in Thailand, Hong Kong and China. This race has a much smaller rictal spot and the wings are dark with a greenish gloss. In southern Siam a race <i>thai</i> is resident, but overlaps with wintering <i>cathoecus</i>. Race <i>javanus</i> is found on the islands of Java and Bali. Race <i>harterti</i> found in Formosa has the tail length less than the wing.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>This bird is glossy black with a wide fork to the tail. Adults usually have a small white spot at the base of the gape. The iris is dark brown (not crimson as in the similar ashy drongo). The sexes cannot be told apart in the field. Juveniles are brownish and may have some white barring or speckling towards the belly and vent, and can be mistaken for the white-bellied drongo. First-year birds have white tips to the feathers of the belly, while second-years have these white-tipped feathers restricted to the vent.</p><p>They are aggressive and fearless birds, and although only 28\u00a0cm (11\u00a0in) in length, they will attack much larger species that enter their nesting territory, including crows and birds of prey. This behaviour led to their former name of king crow. They fly with strong flaps of the wing and are capable of fast manoeuvres that enable them to capture flying insects. With short legs, they sit upright on thorny bushes, bare perches or electricity wires. They may also perch on grazing animals.</p><p>They are capable of producing a wide range of calls but a common call is a two note <i>tee-hee</i> call resembling that of the shikra (<i>Accipiter badius</i>).</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>The black drongo is found predominantly in open country and usually perches and hunts close to the ground. They are mostly aerial predators of insects but also glean from the ground or off vegetation. They are found as summer visitors to northeastern Afghanistan and northern Pakistan but are residents from the Indus Valley until Bangladesh and into India and Sri Lanka. Some populations show seasonal movements that are poorly understood while populations in Korea are known to be migratory. The black drongo can be found in savanna, fields, and urban habitats.\n</p><p>Black drongos were introduced just before the Second World War from Taiwan to the island of Rota to help in the control of insects. It is believed that they dispersed over the sea to the island of Guam in the 1950s. By 1967, they were the fourth most commonly seen birds in roadside counts on Guam and are today the most abundant bird there. Predation by and competition from black drongos have been suggested as factors in the decline of endemic bird species such as the Rota bridled white-eye and the Guam flycatcher.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<h3><span id=\"Food_and_foraging\">Food and foraging</span></h3>\n\n<p>Black drongos become active very early at dawn and roost later than many other birds. They feed mainly on insects such as grasshoppers, cicadas, termites, wasps, bees, ants, moths, beetles and dragonflies. They sometimes fly close to tree branches, attempting to disturb any insects that may be present. They congregate in fields being ploughed, picking up exposed caterpillars and beetle grubs. As many as 35 birds have been seen at such congregations. They are also attracted to fires in scrub and grasslands habitats where insects are disturbed. They appear to avoid flies. They associate with common mynas, cattle egrets and other birds that share a similar diet and habitat. Drongos benefit from this association and are more successful in their foraging. There is only partial overlap in the insect prey sought by mynas and drongos although in rare instances the drongos may rob prey from mynas. It is said that they imitate the call of the shikra so as to put mynas to flight and then to steal prey. Similar behaviour, using false alarm calls, has been noted in the fork-tailed drongo. There are some cases of the black drongo preying on small birds, reptiles, or maybe even bats. It has been suggested that they may feed on birds more intensively on migration. An individual on a migratory stop-over island in Korea caught several birds one after the other, killing them by striking at the back of the head and neck and feeding selectively on parts, especially the brain. They have also been on occasion seen feeding on fish Flowers of trees such as <i>Erythrina</i> and <i>Bombax</i> may be visited for water and nectar and they are sometimes known to feed on grains. They are only rarely known to take larger arthropods such as scorpions and centipedes. They feed on milkweed butterflies that are often avoided by other predators and are known to feed late in the evening or night, often on insects attracted to artificial lights.</p>\n<h3><span id=\"Nesting_and_breeding\">Nesting and breeding</span></h3>\n\n<p>Black drongos breed mainly in February and March in southern India, and until August in other parts of the country. Males and females sing in the mornings during the breeding season. Courtship can include aerobatic chases and they may lock their wings and beaks together, with the pair sometimes falling to the ground. Displays may be made on the ground. Pair bonds are retained for a whole breeding season. The nest is a cup made with a thin layer of sticks placed in the fork of branch, and is built in a week by both the male and female. Eggs are laid close to the first rains in April. The usual clutch is three or rarely four eggs laid in a cup nest placed in the fork of an outer branch of tree. Large leafy trees such as the jackfruit are preferred. The eggs are pale cream to red with spots and markings and are 26\u00a0mm (1.0\u00a0in) long and 19\u00a0mm (0.75\u00a0in) wide. The eggs are incubated by both parents and hatch after 14 to 15 days. Nestlings are brooded for the first five days, after which the young are capable of maintaining a fairly constant body temperature. A second clutch may be laid if the first is destroyed. Nests are sometimes built in telephone poles. A nesting territory of 0.003 to 0.012\u00a0km<sup>2</sup> (0.3 to 1.2\u00a0hectares) is maintained.</p><p>Helpers, offspring from the previous brood, have sometimes been noted to assist in feeding the fledglings at the nest of their parents. Cases of brood parasitism by the Asian koel have been noted. An average breeding success of 44% has been noted with the main cause of fledgling mortality being shortage of insect food which in turn was dependent on rainfall.</p>\n<h3><span id=\"Mobbing_and_proximity_nesting\">Mobbing and proximity nesting</span></h3>\n\n<p>Their habit of driving away predators from near their nests is believed to encourage other birds such as orioles, doves, pigeons, babblers, and especially bulbuls, to nest in the vicinity. In one study 18 of 40 nests had red-vented bulbuls nesting within 10 metres (33\u00a0ft). An abnormal case of interspecific feeding with a red-vented bulbul feeding the chicks of a black drongo at their nest has been recorded.</p>\n<p>They are so aggressive that they may sometimes land on large birds of prey and peck them when mobbing. It has been suggested that the Asian drongo-cuckoo (<i>Surniculus lugubris</i>) has evolved to mimic this species. The intensity of mobbing predators was studied in Java and observations showed that there was a significant increase in mobbing, during the nesting season, of some predators such as the Javan hawk-eagle but the black eagle, a nest predator is mobbed with equal intensity in all seasons. It has been suggested that this strategy may avoid giving away the location of nests during the breeding season.</p><h3><span id=\"Growth_and_development\">Growth and development</span></h3>\n<p>Young birds have a yellowish-red gape. The feather follicles appear on the fourth day and pin feathers emerge after a week. Nestlings increase in weight steadily until they are 12 days old. The eyes open on the eighth day, the iris reddish-black while the gape turns red. The young leave the nest after about 16 to 20 days after hatching. They do not have the fork in the tail until three weeks. The parents continue to feed and protect them for a month. Young birds may beg for food for longer, but are often ignored or chased away by the adults. Birds reach breeding condition in about two years.</p><p>Play behaviour has been observed with birds dropping a leaf in the air and catching it in mid-air and these may possibly help young birds acquire aerobatic skills.</p><p>In southern India, they moult their feathers from June to October. The wing moult begins in July with the first primary and proceeds towards the tenth. Secondaries are replaced from August after the primaries are at the third quill. The secondary moult is not orderly, the 8th and 7th being dropped earlier than the rest. The tail feathers are moulted centrifugally. Seasonal colour changes in the testicular tissues are caused by variation in melanin synthesis, with the dark pigmentation being lost during the breeding season.</p>\n<h3><span id=\"Parasites_and_diseases\">Parasites and diseases</span></h3>\n<p>Many ectoparasitic bird lice (<i>Myrsidea</i> spp. and <i>Menacanthus</i> spp.), endoparasitic cestodes and nematodes have been described from this species. However no predators or diseases are significant factors in adult mortality.</p>\n<h2><span id=\"Relation_to_humans\">Relation to humans</span></h2>\n<p>Their habit of preying on bees makes them a nuisance to bee-keepers, but farmers attract them to their fields using artificial perches in fields to encourage them to feed on pest insects.</p>\n<h3><span id=\"In_culture\">In culture</span></h3>\n<p>Being common, they have a wide range of local names. The older genus name of <i>Buchanga</i> was derived from the Hindi name of <i>Bhujanga</i>. Other local names include \"srigunting hitam\" in Indonesia, <i>Thampal</i> in Pakistan, <i>Gohalo</i>/<i>Kolaho</i> in Baluchistan, <i>Kalkalachi</i> in Sindhi, <i>Kotwal</i> (=policeman) in Hindi; <i>Finga</i> in Bengali; <i>Phenshu</i> in Assamese; <i>Cheiroi</i> in Manipuri; <i>Kosita</i>/ <i>Kalo koshi</i> in Gujarati; <i>Ghosia</i> in Marathi; <i>Kajalapati</i> in Oriya; <i>Kari kuruvi</i> (=charcoal bird), <i>Erettai valan</i> (=two tail) in Tamil; <i>Passala poli gadu</i> in Telugu; <i>Aanaranji</i> (=elephant snatcher) in Malayalam; <i>Kari bhujanga</i> in Kannada and <i>Kalu Kawuda</i> in Sinhalese. A superstition in central India is that cattle would lose their horn if a newly fledged bird alighted on it. It is held in reverence in parts of Punjab in the belief that it brought water to Husayn ibn Ali, revered by Sh\u012b\u2018a Muslims.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li><cite id=\"CITEREFBhujle_BV,_Nadkarni_VB1980\" class=\"citation journal\">Bhujle BV, Nadkarni VB (1980). \"Histological and histochemical observations on the adrenal gland of four species of birds, <i>Dicrurus macrocercus</i> (Viellot), <i>Centropus sinensis</i> (Stephens), <i>Sturnus pagodarum</i> (Gmelin) and <i>Columba livia</i> (Gmelin)\". <i>Zool. Beitrage</i>. <b>26</b> (2): 287\u2013295.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Zool.+Beitrage&amp;rft.atitle=Histological+and+histochemical+observations+on+the+adrenal+gland+of+four+species+of+birds%2C+Dicrurus+macrocercus+%28Viellot%29%2C+Centropus+sinensis+%28Stephens%29%2C+Sturnus+pagodarum+%28Gmelin%29+and+Columba+livia+%28Gmelin%29&amp;rft.volume=26&amp;rft.issue=2&amp;rft.pages=287-295&amp;rft.date=1980&amp;rft.au=Bhujle+BV%2C+Nadkarni+VB&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+drongo\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Lamba, BS (1963) The nidification of some common Indian birds. 3. The Black Drongo (<i>Dicrurus macrocercus</i> Viellot). Res. Bull. Panjab Univ. 14(1\u20132):1\u20139.</li>\n<li><cite id=\"CITEREFShukkur_EAA,_Joseph_KJ1980\" class=\"citation journal\">Shukkur EAA, Joseph KJ (1980). \"Annual rhythm in the Black Drongo <i>Dicrurus adsimilis</i> (family Dicruridae, Passeriformes, Aves)\". <i>Comparative Physiol. Ecol</i>. <b>5</b> (2): 76\u201377.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Comparative+Physiol.+Ecol.&amp;rft.atitle=Annual+rhythm+in+the+Black+Drongo+Dicrurus+adsimilis+%28family+Dicruridae%2C+Passeriformes%2C+Aves%29&amp;rft.volume=5&amp;rft.issue=2&amp;rft.pages=76-77&amp;rft.date=1980&amp;rft.au=Shukkur+EAA%2C+Joseph+KJ&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+drongo\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Shukkur, EAA (1978) Biology, Ecology and Behaviour of the Black Drongo (<i>Dicrurus adsimilis</i>). Thesis, University of Calicut.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Black drongo videos, photos &amp; sounds on the Internet Bird Collection</li></ul><p class=\"mw-empty-elt\">\n\n</p> "
    },
    "black eagle": {
        "id": "b027",
        "name": "Black Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Ictinaetus", "species":"malaiensis",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black eagle</b>. Like all eagles, it is in the family Accipitridae, and is the only member of the genus <i><b>Ictinaetus</b></i>. They soar over forests in the hilly regions of tropical and subtropical South and Southeast Asia, as well as southeastern China.  They hunt mammals and birds, particularly at their nests. They are easily identified by their widely splayed and long primary \"fingers\", the characteristic silhouette, slow flight and yellow ceres and legs that contrast with their dark feathers.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The species name is spelt <i>malayensis</i> in most publications but the original spelling used by Temminck in his description uses the spelling <i>malaiensis</i> according to a 2011 finding of some of the original covers of the part publications leading to taxonomists applying the principle of priority and rejecting any later spelling emendations.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The black eagle is a large but slender eagle, at about 75\u00a0cm (30\u00a0in) in length and 148 to 182\u00a0cm (4\u00a0ft 10\u00a0in to 6\u00a0ft 0\u00a0in) in wingspan. Despite its large appearance (it is one of the largest eagles in its range), known weights are relatively modest, at between 1,000 and 1,600\u00a0g (2.2 and 3.5\u00a0lb), about half the weight of the partially sympatric mountain hawk-eagle, the latter being of a similar total length. Adults have all-black plumage, with a yellow bill base (cere) and feet. The wings are long and pinched in at the innermost primaries giving a distinctive shape. The tail shows faint barring and upper tail covers are paler. When perched the wing tips reach till or exceed the tail tip. The wings are held in a shallow V (wings just above the horizontal plane) in flight. Seen on hot afternoons, scouring the treetops for a nest to maraud, this bird is easily spotted by its jet black colour, large size, and a characteristic slow flight, sometimes just above the canopy.</p><p>Sexes are similar, but young birds have a buff head, underparts and underwing coverts. The wing shape helps to distinguish this species from the dark form of changeable hawk-eagle, (<i>Nisaetus cirrhatus</i>). The tarsi are fully feathered and the toes are relatively stout and short with long claws (particularly on the inner toe) that are less strongly curved than in other birds of prey.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The black eagle breeds in tropical and subtropical Asia. Race <i>perniger</i> (Hodgson, 1836) is found in the Himalayan foothills west through Nepal into the Indian states of Himachal Pradesh and Jammu &amp; Kashmir, and in the forests of the Eastern and Western Ghats in peninsular India and Sri Lanka. The bird's westernmost extent is from Gujarat, especially in the forested areas in southern and eastern Gujarat. The species also extends into the Aravalli range of northwestern India. The nominate race <i>malaiensis</i> (Temminck, 1822) is found in Burma, southern China (Yunnan, Fujian) and Taiwan, into Southeast Asia. They are generally residents and no migrations have been observed. In a study in southern India, it was found to favour forests with good forest cover and was absent from areas where the cover was less than 50%.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>The courtship display involves steep dives with folded wings with swoops up in a U shape into a vertical stall. They build a platform nest, 3 to 4 feet wide, on a tall tree overlooking a steep valley. One or two white eggs which are blotched in brown and mauve may be laid during the nesting season between January and April. The nest site may be reused year after year.</p>\n<h3><span id=\"Food_and_feeding\">Food and feeding</span></h3>\n<p>The black eagle eats mammals (including bats, squirrels and other small mammals), birds and eggs. It is a prolific nest-predator and is known for its slow flight just over the canopy. The curved claws and wide gape allow it to pick up eggs of birds from nests as well as swiftlets from caves. Along with swallow-tailed kites they share the unique habit of carrying away an entire nest with nestlings to a feeding perch. Squirrels, macaques and many species of birds emit alarm calls when these birds are spotted soaring over the forest. The Indian giant squirrel has been noted as a prey of this species and young bonnet macaques may also fall prey to them.</p>\n<h3><span id=\"Threats_and_survival\">Threats and survival</span></h3>\n<p>It is not threatened but uncommon in large areas in its distribution. Shrinking of forested areas due to large-scale extraction has reduced its earlier range. \n</p>\n<h2><span id=\"Relationship_to_humans\">Relationship to humans</span></h2>\n<p>Due to this eagle's ability to remain aloft for long periods with minimal effort, the Lepcha people of India's Darjeeling district described it as a bird that never sat down, while the Soliga people's name (<i>Kaana Kattale )</i> recalls its black colour and its presence in relatively forested areas .</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li>\n<li>Notes on the species in Java</li>\n<li>Call and sonogram</li>\n<li>Video of pair bathing in stream near nesting site</li></ul><h3><span id=\"Historical_publications\">Historical publications</span></h3>\n<ul><li>Illustration and description (in French) by Temminck (<i>Pl. Col.</i> vol. 1, plate 117, pages 104\u2013105.)</li>\n<li>1836 original description of Nepalese race as <i>Aquila Pernigra</i> by B. H. Hodgson (now a subspecies <i>I. m. perniger</i>).</li>\n<li>1843 proposal of new genus <i>Heteropus</i> by Hodgson, separated from <i>Aquila</i> based on the unusual form of the black eagle's foot. With a footnote by Blyth noting that Jerdon had sent specimens to the museum labeled <i>Ictina\u00ebtus ovivorus</i>. Text and illustration.</li></ul>"
    },
    "black francolin": {
        "id": "b028",
        "name": "Black Francolin",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Francolinus", "species":"francolinus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black francolin</b> (<i>Francolinus francolinus</i>) is a gamebird in the pheasant family Phasianidae of the order Galliformes, gallinaceous birds. It was formerly known as the Black Partridge. It is the state bird of Haryana state, India (locally known as Kaala Teetar: \u0930\u0942\u092a\u092e \u0915\u093e\u0932\u093e \u0924\u0940\u0924\u0930).\n</p>\n\n\n<h2><span id=\"Identification\">Identification</span></h2>\n<p>The head of the black francolin is curved with brown iris eyes color and unique pattern of brown color crown and the throat color is black. It has a length range of 33 to 36\u00a0cm and weight approximate about 453 g (16\u00a0oz) and the size of black francolin is 9 to 16 inches. The primary color is black with black breast rufous belly, white spots on flanks and golden brown spots at the back of body. The flight pattern of black francolin is short, direct flight punctuated by glides with rounded wings, rounded tail narrow black and white bars.\n</p>\n<h3><span id=\"Black_francolin_male\">Black francolin male</span></h3>\n<p>The male black francolin is black with white patch on the cheek, a chestnut collar and white spots on the flanks. The back and wings are scalloped with shades of golden brown with sub-terminal tawny-buff bands and pale edges. Tail is black with narrow white or greyish bars. Legs are reddish-brown to red.\n</p>\n<h3><span id=\"Black_francolin_female\">Black francolin female</span></h3>\n<p>The female is mainly brown, but has a chestnut hind neck. The extent of the white spotting on the flanks varies substantially across the species' range and the depth of colour of the females similarly varies. The female has the upper plumage, wings and tail as in the male but the black is replaced by mottled brown and the brown bars on the lower back and tail are wider. Female is similar but dull with no cheek patch, and collar is replaced with a nuchal patch. Head and under parts are buff where the male shows black. Rump and upper tail coverts light brown.\n</p>\n\n\n<h2><span id=\"Habitat\">Habitat</span></h2>\n<p>Black francolins appear to be found in scrubby habitats with plenty of cultivated crops tall enough to offer shelter and open beneath to provide escape routes and easy travel. They prefer the areas of thick vegetation, usually near water. They are not forest birds but will frequent brush land and wood edges associated with grass land. They appear to be more closely associated to water than chukars are, and in drier areas.\n</p>\n<h2><span id=\"Breeding_and_nesting\">Breeding and nesting</span></h2>\n<p>Francolins normally nests in a tall grasslands from late March to May. The male may be seen standing on a rock or low tree attracting attention with its extraordinary creaking call. It may be heard all day long in April, during nesting, and less persistently in March and May as well as the summer months. Both parents tend chicks after hatching. Young stay with parents through their first winter. The most likely breeding locations Savanna, Grasslands, Scrub vegetation areas under the cultivated crops. They have a loud call during the breeding season. Males may also become aggressive during the breeding season, make sure there is plenty of cover and escape routes for the hen and it maybe necessary to house her separate and allow limited access for breeding only. They are generally monogamous in the wild and it is best to house only pair per aviary. Well planted aviaries with little surrounding traffic would be best for breeding. They are fairly winter hardy, but always provide some shelter during the coldest months breeds from late March to September depending on the \nrange.\n</p>\n<h2><span id=\"Avicultural_data\">Avicultural data</span></h2>\n\n<p>The normal Clutch size between 10 and 14 eggs and only the hen incubates the eggs, the incubation period is 18 to 19 days and the breeding season is April to June and the young ones will appear in April through October.\n</p><p>Forages (plant, leaves, and stem) on the ground and eats a wide variety of seeds and insects. May also eat small mealworms and wax worms, but be careful when feeding to chicks as they are prone to toe-picking. Food consists mainly of grain, grass seeds, fallen berries, shoots, tubers, termites, ants and insects.\n</p><p>The color of the egg is white-spotted olive or pale brown.\n</p><p>Black francolins are monogamous.\n</p>\n<h2><span id=\"Flight_pattern\">Flight pattern</span></h2>\n<p>The black francolin only flies when disturbed. It has a Pheasant's explosive flight, but prefers to creep away unseen.\n</p>\n<h2><span id=\"Voice\">Voice</span></h2>\n<p>The call of the black francolin, described as a loud ringing klik cheek-cheek-cheerakik or \"kik-kik-kik\",\" kwee-kweeeee-kwee\" can be heard in the mornings and evenings and almost all day during the breeding season. The male calls standing on an earth mound, bund, rock or a low tree branch and is soon joined by other birds answering from all directions. Similar species: gray francolin has grey-brown and buff body, buff instead of black throat, and lacks rufous collar.\n</p>\n<h2><span id=\"Range\">Range</span></h2>\n<p>It is a resident breeder from south-eastern Turkey eastwards through Iran to southwest Turkmenistan and northeast India. Its range was formerly more extensive, but over-hunting has reduced its distribution and numbers.  Fragmented populations occur in the western part of its range.  They have been introduced to the Caucasus, Guam, and Hawaiian Islands.  There are six recognized subspecies:\n</p>\n<ul><li><i>F. f. francolinus</i> (Linnaeus, 1766) - western black francolin - Cyprus, southern Turkey to Iraq and Iran</li>\n<li><i>F. f. arabistanicus</i> (Zarudny and Harms, 1913) - Iranian black francolin - southern Iraq and western Iran</li>\n<li><i>F. f. asiae</i> (Bonaparte, 1856) - Indian black francolin - northern India</li>\n<li><i>F. f. henrici</i> (Bonaparte, 1856) - South Persian black francolin - southern Pakistan to western India</li>\n<li><i>F. f. bogdanovi</i> (Zarudny, 1906) - southern Iran and Afghanistan to southern Pakistan</li>\n<li><i>F. f. melanonotus</i> (Hume, 1888) - eastern India to Sikkim and Bangladesh.</li></ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Informations and photos</li>\n<li>Photograph and description</li>\n<li>Avicultural data</li></ul>"
    },
    "black kite": {
        "id": "b029",
        "name": "Black Kite",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Milvus", "species":"migrans",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black kite</b> (<i>Milvus migrans</i>) is a medium-sized bird of prey in the family Accipitridae, which also includes many other diurnal raptors. It is thought to be the world's most abundant species of Accipitridae, although some populations have experienced dramatic declines or fluctuations. Current global population estimates run up to 6 million individuals. Unlike others of the group, black kites are opportunistic hunters and are more likely to scavenge. They spend much time soaring and gliding in thermals in search of food. Their angled wing and distinctive forked tail make them easy to identify. They are also vociferous with a shrill whinnying call. This kite is widely distributed through the temperate and tropical parts of Eurasia and parts of Australasia and Oceania, with the temperate region populations tending to be migratory. Several subspecies are recognized and formerly had their own English names. The European populations are small, but the South Asian population is very large.\n</p>\n\n\n<h2><span id=\"Systematics_and_taxonomy\">Systematics and taxonomy</span></h2>\n<p>The black kite was described by the French polymath Georges-Louis Leclerc, Comte de Buffon in his <i>Histoire Naturelle des Oiseaux</i> in 1770. The bird was also illustrated in a hand-coloured plate engraved by Fran\u00e7ois-Nicolas Martinet in the <i>Planches Enlumin\u00e9es D'Histoire Naturelle</i> which was produced under the supervision of Edme-Louis Daubenton to accompany Buffon's text. Neither the plate caption nor Buffon's description included a scientific name but in 1783 the Dutch naturalist Pieter Boddaert coined the binomial name <i>Falco migrans</i> in his catalogue of the <i>Planches Enlumin\u00e9es</i>. The type locality is France. The current genus <i>Milvus</i> was erected by the French naturalist Bernard Germain de Lac\u00e9p\u00e8de in 1799. <i>Milvus</i> is the Latin word for a red kite; the specific <i>migrans</i>  means \"migrating\" from the Latin <i>migrare</i> \"to migrate\".</p><p>The red kite has been known to hybridize with the black kite (in captivity where both species were kept together, and in the wild on the Cape Verde Islands).</p><p>Recent DNA studies suggest that the yellow-billed African races <i>parasitus</i> and <i>aegyptius</i> differ significantly from black kites in the Eurasian clade, and should be considered a separate allopatric species: yellow-billed kite, <i>M. aegyptius</i>. They occur throughout Africa except for the Congo basin and the Sahara Desert. There have been some suggestions that the black-eared kite (<i>M. m. lineatus</i>) should be elevated to full species status as <i>M. lineatus</i>, but this is not well supported.</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<ul><li><i>M. m. migrans</i> \u2013 <small>(Boddaert, 1783)</small>: <b>European black kite</b></li></ul><dl><dd>Breeds central, southern and eastern Europe, as well as the Maghreb region of Northwest Africa, to Tien Shan and south to northwest Pakistan. Winters in Sub-Saharan Africa. The head is whitish.</dd></dl><ul><li><i>M. m. lineatus</i> \u2013 <small>(J. E. Gray, 1831)</small>: <b>black-eared kite</b></li></ul><dl><dd>Siberia to Amurland S around Himalaya to N India, N Indochina and S China; Japan. Northern inland birds migrate to E Persian Gulf coast and S Asia in winter. This has a larger pale carpal patch.</dd></dl><ul><li><i>M. m. govinda</i> \u2013 <small>Sykes, 1832</small>: <b>small Indian kite</b> (formerly <b>pariah kite</b>)</li></ul><dl><dd>Eastern Pakistan east through tropical India and Sri Lanka to Indochina and Malay Peninsula. Resident. A dark brown kite found throughout the subcontinent. Can be seen circling and soaring in urban areas. Easily distinguished by the shallow forked tail. The name <i>pariah</i> originates from the Indian caste system and usage of this name is deprecated.</dd></dl><ul><li><i>M. m. affinis</i> \u2013 <small>Gould, 1838</small>: <b>fork-tailed kite</b></li></ul><dl><dd>Sulawesi and possibly Lesser Sunda Islands; Papua New Guinea except mountains; NE and E Australia.</dd></dl><ul><li><i>M. m. formosanus</i> \u2013 <small>Kuroda, 1920</small>: <b>Taiwan kite</b></li></ul><dl><dd>Taiwan and Hainan; resident.</dd></dl><ul class=\"gallery mw-gallery-packed\"><li class=\"gallerybox\" style=\"width: 197.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 198.66666666667px\">\n\t\t<li class=\"gallerybox\" style=\"width: 184px\">\n\t\t<li class=\"gallerybox\" style=\"width: 88.666666666667px\">\n</ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>Black kites can be distinguished from red kites by the slightly smaller size, less forked tail (visible in flight), and generally dark plumage without any rufous. The sexes are alike. The upper plumage is brown but the head and neck tend to be paler. The patch behind the eye appears darker. The outer flight feathers are black and the feathers have dark cross bars and are mottled at the base. The lower parts of the body are pale brown, becoming lighter towards the chin. The body feathers have dark shafts giving it a streaked appearance. The cere and gape are yellow, but the bill is black (unlike in the yellow-billed kite). The legs are yellow and the claws are black. They have a distinctive shrill whistle followed by a rapid whinnying call. Males and females have the same plumage but females are longer than males. Their wingspan is around 150\u00a0cm.</p><p><br></p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>The species is found in Europe, Asia, Africa and Australia. The temperate populations of this kite tend to be migratory while the tropical ones are resident. European and central Asian birds (subspecies <i>M. m. migrans</i> and <b>black-eared kite</b> <i>M. m. lineatus</i>, respectively) are migratory, moving to the tropics in winter, but races in warmer regions such as the Indian <i>M. m. govinda</i> (<b>small Indian/pariah kite</b>), or the Australasian <i>M. m. affinis</i> (<b>fork-tailed kite</b>), are resident. In some areas such as in the United Kingdom, the black kite occurs only as a wanderer on migration. These birds are usually of the nominate race, but in November 2006 a juvenile of the eastern <i>lineatus</i>, not previously recorded in western Europe, was found in Lincolnshire.</p><p>The species is not found in the Indonesian archipelago between the South East Asian mainland and the Wallace Line. Vagrants, most likely of the black-eared kite, on occasion range far into the Pacific, out to the Hawaiian islands.</p><p>In India, the population of <i>M. m. govinda</i> is particularly large especially in areas of high human population. Here the birds avoid heavily forested regions. A survey in 1967 in the 150 square kilometres of the city of New Delhi produced an estimate of about 2200 pairs or roughly 15 per square kilometre. Another survey in 2013 estimated 150 pairs for every 10 square kilometres.</p><p>Vagrants from Australia occasionally reach New Zealand, however, only one individual has persisted there (currently ~21 years old).</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<h3><span id=\"Food_and_foraging\">Food and foraging</span></h3>\n<p>Black kites are most often seen gliding and soaring on thermals as they search for food. The flight is Buoyancy and the bird glides with ease, changing directions easily. They will swoop down with their legs lowered to snatch small live prey, fish, household refuse and carrion, for which behaviour they are known in British military slang as the shite-hawk. They are opportunist hunters and have been known to take birds, bats, and rodents. They are attracted to smoke and fires, where they seek escaping prey. It has been claimed in native Australian beliefs, that kites spread fires by picking and dropping burning twigs so as to flush prey. The Indian populations are well adapted to living in cities and are found in densely populated areas. Large numbers may be seen soaring in thermals over cities. In some places, they will readily swoop and snatch food held by humans. Black kites in Spain prey on nestling waterfowl especially during summer to feed their young. Predation of nests of other pairs of black kites has also been noted. Kites have also been seen to tear and carry away the nests of baya weavers in an attempt to obtain eggs or chicks.</p>\n<h3><span id=\"Flocking_and_roosting\">Flocking and roosting</span></h3>\n<p>In winter, kites form large communal roosts. Flocks may fly about before settling at the roost. When migrating, the black kite has a greater propensity to form large flocks than other migratory raptors, particularly prior to making a crossing across water. In India, the subspecies <i>govinda</i> shows large seasonal fluctuations with the highest numbers seen from July to October, after the monsoons, and it has been suggested that they make local movements in response to high rainfall.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3><p>\nThe breeding season of black kites in India begins in winter (mainly January and February), the young birds fledging before the monsoons. The nest is a rough platform of twigs and rags placed in a tree. Nest sites may be reused in subsequent years. European birds breed in summer. Birds in the Italian Alps tended to build their nest close to water in steep cliffs or tall trees. Nest orientation may be related to wind and rainfall. The nests may sometimes be decorated with bright materials such as white plastic and a study in Spain suggests that they may have a role in signalling to keep away other kites. After pairing, the male frequently copulates with the female. Unguarded females may be approached by other males, and extra pair copulations are frequent. Males returning from a foraging trip will frequently copulate on return, as this increases the chances of his sperm fertilizing the eggs rather than a different male. Both the male and female take part in nest building, incubation and care of chicks. The typical clutch size is 2 or sometimes 3 eggs. The incubation period varies from 30\u201334 days. Chicks of the Indian population stayed at the nest for nearly two months. Chicks hatched later in European populations appeared to fledge faster. The care of young by the parents also rapidly decreased with the need for adults to migrate. Siblings show aggression to each other and often the weaker chick may be killed, but parent birds were found to preferentially feed the smaller chicks in experimentally altered nests. Newly hatched young have down (prepennae) which are sepia on the back and black around the eye and buff on the head, neck and underparts. This is replaced by brownish-gray second down (preplumulae). After 9\u201312 days, the second down appears on the whole body except the top of the head. Body feathers begin to appear after 18 to 22 days. The feathers on the head become noticeable from the 24th to 29th day. The nestlings initially feed on food fallen at the bottom of the nest and begin to tear flesh after 33\u201339 days. They are able to stand on their legs after 17\u201319 days and begin flapping their wings after 27\u201331 days. After 50 days, they begin to move to branches next to the nest. Birds are able to breed after their second year. Parent birds guard their nest and will dive aggressively at intruders. Humans who intrude the nest appear to be recognized by birds and singled out for dive attacks.</p>\n<h3><span id=\"Mortality_factors\">Mortality factors</span></h3>\n<p>Black-eared kites in Japan were found to accumulate nearly 70% of mercury accumulated from polluted food in the feathers, thus excreting it in the moult process. Black kites often perch on electric wires and are frequent victims of electrocution. Their habit of swooping to pick up dead rodents or other roadkill leads to collisions with vehicles. Instances of mass poisoning as a result of feeding on poisoned voles in agricultural fields have been noted. They are also a major nuisance at some airports, where their size makes them a significant birdstrike hazard.</p><p>As a large raptorial bird, the black kite has few natural predators. However, they do have a single serious predator: the Eurasian eagle-owl (<i>Bubo bubo</i>). The eagle-owl freely picks off kites of any age from the nestling stage to adulthood and were noted to precipitously decrease kite breeding success when nesting within kilometres of the kites in the Italian Alps. Like most bird species, they have parasites, several species of endoparasitic trematodes are known and some Digenea species that are transmitted via fishes.</p><p>Birds with abnormal development of a secondary upper mandible have been recorded in <i>govinda</i> and <i>lineatus</i>.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li><cite id=\"CITEREFDesaiMalhotra1982\" class=\"citation journal\">Desai, J.H.; Malhotra, A.K. (1982). \"Annual gonadal cycle of Black Kite Milvus migrans govinda\". <i>Journal of the Yamashina Institute for Ornithology</i>. <b>14</b> (2\u20133): 143\u2013150. doi:<span title=\"Freely accessible\">10.3312/jyio1952.14.143</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Journal+of+the+Yamashina+Institute+for+Ornithology&amp;rft.atitle=Annual+gonadal+cycle+of+Black+Kite+Milvus+migrans+govinda&amp;rft.volume=14&amp;rft.issue=2%E2%80%933&amp;rft.pages=143-150&amp;rft.date=1982&amp;rft_id=info%3Adoi%2F10.3312%2Fjyio1952.14.143&amp;rft.aulast=Desai&amp;rft.aufirst=J.H.&amp;rft.au=Malhotra%2C+A.K.&amp;rft_id=https%3A%2F%2Fwww.jstage.jst.go.jp%2Farticle%2Fjyio1952%2F14%2F2-3%2F14_2-3_143%2F_pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+kite\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFHardy1985\" class=\"citation journal\">Hardy, J. (1985). \"Black Kite capturing small passerines\". <i>Australasian Raptor Association News</i>. <b>6</b>: 14.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Australasian+Raptor+Association+News&amp;rft.atitle=Black+Kite+capturing+small+passerines&amp;rft.volume=6&amp;rft.pages=14&amp;rft.date=1985&amp;rft.aulast=Hardy&amp;rft.aufirst=J.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+kite\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFAmerican_Ornithologists'_Union2000\" class=\"citation journal\">American Ornithologists' Union (2000). \"Forty-second supplement to the American Ornithologists' Union Check-list of North American Birds\". <i>Auk</i>. <b>117</b> (3): 847\u2013858. doi:<span title=\"Freely accessible\">10.1642/0004-8038(2000)117[0847:FSSTTA]2.0.CO;2</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Auk&amp;rft.atitle=Forty-second+supplement+to+the+American+Ornithologists%27+Union+Check-list+of+North+American+Birds&amp;rft.volume=117&amp;rft.issue=3&amp;rft.pages=847-858&amp;rft.date=2000&amp;rft_id=info%3Adoi%2F10.1642%2F0004-8038%282000%29117%5B0847%3AFSSTTA%5D2.0.CO%3B2&amp;rft.au=American+Ornithologists%27+Union&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+kite\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFCrochet2005\" class=\"citation journal\">Crochet, Pierre-Andr\u00e9 (2005). \"Recent DNA studies of kites\". <i>Birding World</i>. <b>18</b> (12): 486\u2013488.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Birding+World&amp;rft.atitle=Recent+DNA+studies+of+kites&amp;rft.volume=18&amp;rft.issue=12&amp;rft.pages=486-488&amp;rft.date=2005&amp;rft.aulast=Crochet&amp;rft.aufirst=Pierre-Andr%C3%A9&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+kite\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFForsman2003\" class=\"citation journal\">Forsman, Dick (2003). \"Identification of Black-eared Kite\". <i>Birding World</i>. <b>16</b> (4): 156\u2013160.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Birding+World&amp;rft.atitle=Identification+of+Black-eared+Kite&amp;rft.volume=16&amp;rft.issue=4&amp;rft.pages=156-160&amp;rft.date=2003&amp;rft.aulast=Forsman&amp;rft.aufirst=Dick&amp;rft_id=http%3A%2F%2Fwww.birdforum.net%2Fattachment.php%3Fattachmentid%3D430354%26d%3D1361903404&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+kite\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Black Kite species text in The Atlas of Southern African Birds</li>\n<li>Ageing and sexing (PDF; 4.9 MB) by Javier Blasco-Zumeta &amp; Gerd-Michael Heinze</li>\n<li>BirdLife species factsheet for <i>Milvus migrans</i></li>\n<li><cite class=\"citation web\">\"Milvus migrans\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Milvus+migrans&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3DC1C255AA01C58664&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+kite\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Black kite media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Black+kite+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fblack-kite-milvus-migrans&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+kite\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Black kite photo gallery at VIREO (Drexel University)</li>\n<li>Audio recordings of Black kite on Xeno-canto.</li></ul> "
    },
    "black redstart": {
        "id": "b030",
        "name": "Black Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"ochruros",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black redstart</b> (<i><b>Phoenicurus ochruros</b></i>) is a small passerine bird in the redstart genus <i>Phoenicurus</i>. Like its relatives, it was formerly classed as a member of the thrush family (Turdidae), but is now known to be an Old World flycatcher (Muscicapidae). Other common names are <b>Tithy's redstart</b>, <b>blackstart</b> and <b>black redtail</b>.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The first formal description of the black redstart was by the German naturalist Samuel Gottlieb Gmelin in 1774 under the binomial name <i>Mottacilla ochruros</i>. The genus <i>Phoenicurus</i> was introduced by the English naturalist Thomas Forster in 1817. Both parts of the scientific name are from Ancient Greek and refer to the colour of the tail. The genus name <i>Phoenicurus</i> is from <i>phoinix</i>, \"red\", and <i>-ouros</i> -\"tailed\", and the specific <i>ochruros</i> is from <i>okhros</i>, \"pale yellow\" and <i>-ouros</i>.</p><p>The black redstart is a member of a temperate Eurasian clade which also includes the Daurian redstart, Hodgson's redstart, the white-winged redstart, and maybe Przevalski's redstart. The present species' ancestors diverged from about 3 million years ago (mya) (Late Pliocene) onwards and spread throughout much of Palearctic from 1.5 mya onward. It is not very closely related to the common redstart. As these are separated by different behaviour and ecological requirements and have not evolved fertilisation barriers, the two European species can nonetheless produce apparently fertile and viable hybrids.</p><p>There are a number of subspecies which differ mainly in underpart colours of the adult males; different authorities accept between five and seven subspecies. They can be separated into three major groups, according to morphology, biogeography, and mtDNA cytochrome <i>b</i> sequence data.</p>\n\n<p><b><i>P. o. phoenicuroides</i> group</b>. Basal central and eastern Asian forms which diverged from the ancestral stock as the species slowly spread west (<abbr title=\"circa\">c.</abbr> 3\u20131.5 mya). Females and juveniles light grey brown.\n</p>\n<ul><li><i>Phoenicurus ochruros phoenicuroides</i>. Tian Shan eastwards to Mongolia. Small; adult males have lower breast, belly and flanks deep rufous, pale wing-patch absent, sometimes white forehead. Overall quite similar to a much darker common redstart with black chest. Females and juveniles are similar to common redstart but have an overall sandier, paler colour and often a distinct buff eye-ring.</li>\n<li><i>Phoenicurus ochruros murinus</i>. Altai, Tuva, northern China and western Mongolia. Distinguished from the previous Turkestan subspecies by the absence of any contrast in the colour of the head, nape and back, all of which are concolorous dark grey.</li>\n<li><i>Phoenicurus ochruros rufiventris</i>. Turkmenistan eastwards through Pamir and Alay Mountains to Himalaya. Usually large; adult males like <i>P. o. phoenicuroides</i>, but darker overall, with black back and rufous-chestnut underside. Females with rufous tinge to underside. Exact limits with <i>P. o. phoenicuroides</i> unresolved.\n<ul><li><i>Phoenicurus ochruros xerophilus</i>. China east of and between ranges of preceding two. Large; colour pattern like <i>P. o. phoenicuroides</i> but paler. Included in <i>P. o. rufiventris</i> by many authorities.</li></ul></li></ul>\n<p><b><i>P. o. ochruros</i> group</b>. Western Asian forms, whose lineage separated from the <i>gibraltariensis</i> group c. 1.5\u20130.5 mya. Females and juveniles intermediate.\n</p>\n<ul><li><i>Phoenicurus ochruros ochruros</i>. Eastern Turkey, Alborz, and Caucasus. Small, somewhat intermediate between <i>P. o. phoenicuroides</i> and <i>P. o. gibraltariensis</i>. Generally like latter, but rufous underside, pale wing patch weakly developed.</li>\n<li><i>Phoenicurus ochruros semirufus</i>. Levant. Small; adult males somewhat similar to <i>rufiventris</i> except in size. Black areas extensive.</li></ul>\n<p><b><i>P. o. gibraltariensis</i> group</b>. European population, which formed as a distinct subspecies probably during the last ice age. Females and juveniles dark grey.\n</p>\n<ul><li><i>Phoenicurus ochruros gibraltariensis</i>. Western Europe east to the Crimea and western Turkey. Neck, upper back and shoulders dark slate grey to black in adult males, lighter than face and neck, pale wing patch strongly developed.\n<ul><li><i>Phoenicurus ochruros aterrimus</i>. Iberia and Morocco. Neck, upper back and shoulders black in adult males. Wide intergradation with <i>P. o. gibraltariensis</i> and treated as a synonym of it by many authorities.</li></ul></li></ul><h2><span id=\"Description\">Description</span></h2>\n<p>\nThe black redstart is 13\u201314.5\u00a0cm (5.1\u20135.7\u00a0in) in length and 12\u201320\u00a0g (0.42\u20130.71\u00a0oz) in weight, similar to the common redstart. The adult male is overall dark grey to black on the upperparts and with a black breast; the lower rump and tail are orange-red, with the two central tail feathers dark red-brown. The belly and undertail are either blackish-grey (western subspecies; see Taxonomy and systematics, above) or orange-red (eastern subspecies); the wings are blackish-grey with pale fringes on the secondaries forming a whitish panel (western subspecies) or all blackish (eastern subspecies). The female is grey (western subspecies) to grey-brown (eastern subspecies) overall except for the orange-red lower rump and tail, greyer than the common redstart; at any age the grey axillaries and underwing coverts are also distinctive (in the common redstart these are buff to orange-red). One-year-old males are similar to females but blacker; the whitish wing panel of the western subspecies does not develop until the second year.</p>\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>It is a widespread breeder in south and central Europe and Asia and north-west Africa, from Great Britain and Ireland (where local) south to Morocco, east to central China. It is resident in the milder parts of its range, but north-eastern birds migrate to winter in southern and western Europe and Asia, and north Africa. It nests in crevices or holes in buildings.</p><p>In Britain, it is most common as a passage and winter visitor, with only 20\u201350 pairs breeding. On passage it is fairly common on the east and south coasts, and in winter on the coasts of Wales and western and southern England, with a few also at inland sites. Migrant black redstarts arrive in Britain in October or November and either move on or remain to winter, returning eastward in March or April. They also winter on the south and east coasts of Ireland.</p><p>The species originally inhabited stony ground in mountains, particularly cliffs, but since about 1900 has expanded to include similar urban habitats including bombed areas during and after World War II, and large industrial complexes that have the bare areas and cliff-like buildings it favours; in Great Britain, most of the small breeding population nests in such industrial areas. It will catch passing insects in flight, and migrants often hunt in coastal tide-wrack for flies or tiny crustaceans. Its quick ducks of head and body are robin-like, and its tail is often flicked. The male has a rattling song and a <i>tick</i> call.\n</p><p>Eastern race birds are very rare vagrants in western Europe.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>The black redstart is socially monogamous. A male pairs with a female to rear young, guards her against other males, and mates with other females.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>BirdLife species factsheet for <i>Phoenicurus ochruros</i></li>\n<li><cite class=\"citation web\">\"Black redstart media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Black+redstart+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fblack-redstart-phoenicurus-ochruros&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+redstart\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Black redstart photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Phoenicurus ochruros</i> at IUCN Red List maps</li>\n<li><i>Phoenicurus ochruros</i> in the Flickr: Field Guide Birds of the World</li>\n<li>Black redstart media from ARKive</li></ul> "
    },
    "black strok": {
        "id": "b031",
        "name": "Black stork",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "genus":"Ciconia", "species":"nigra",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n\n</p>\n<p>The <b>black stork</b> (<i>Ciconia nigra</i>) is a large bird in the stork family Ciconiidae. It was first described by Carl Linnaeus in the 10th edition of his <i>Systema Naturae</i>. Measuring on average 95 to 100\u00a0cm (37 to 39\u00a0in) from beak tip to end of tail with a 145-to-155\u00a0cm (57-to-61\u00a0in) wingspan, the adult black stork has mainly black plumage, with white underparts, long red legs and a long pointed red beak. A widespread but uncommon species, it breeds in scattered locations across Europe (predominantly in Portugal and Spain, and central and eastern parts), and east across the Palearctic to the Pacific Ocean. It is a long-distance migrant, with European populations wintering in tropical Sub-Saharan Africa, and Asian populations in the Indian subcontinent. When migrating between Europe and Africa, it avoids crossing the Mediterranean Sea and detours via the Levant in the east or the Strait of Gibraltar in the west. An isolated, non-migratory, population occurs in Southern Africa.\n</p><p>Unlike the closely related white stork, the black stork is a shy and wary species. It is seen singly or in pairs, usually in marshy areas, rivers or inland waters. It feeds on amphibians, small fish and insects, generally wading slowly in shallow water stalking its prey. Breeding pairs usually build nests in large forest trees\u2014most commonly deciduous but also coniferous\u2014which can be seen from long distances, as well as on large boulders, or under overhanging ledges in mountainous areas. The female lays two to five greyish-white eggs, which become soiled over time in the nest. Incubation takes 32 to 38 days,\u00a0with both sexes sharing duties, and fledging takes 60 to 71 days.\n</p><p>The black stork is considered to be a species of least concern by the International Union for Conservation of Nature, but its actual status is uncertain. Despite its large range, it is nowhere abundant, and it appears to be declining in parts of its range, such as in India, China and parts of Western Europe, though increasing in others such as the Iberian Peninsula. Various conservation measures have been taken for the black stork, like the Conservation Action Plan for African black storks by Wetlands International. It is also protected under the African-Eurasian Waterbird Agreement and the Convention on International Trade in Endangered Species of Wild Fauna and Flora.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_etymology\">Taxonomy and etymology</span></h2>\n<p>English naturalist Francis Willughby wrote about the black stork in the 17th century, having seen one in Frankfurt. He named it <i>Ciconia nigra</i>, from the Latin words for \"stork\" and \"black\" respectively. It was one of the many species originally described by Swedish zoologist Carl Linnaeus in the landmark 1758 10th edition of his <i>Systema Naturae</i>, where it was given the binomial name of <i>Ardea nigra</i>. It was moved to the new genus <i>Ciconia</i> by French zoologist Mathurin Jacques Brisson two years later. The word <i>stork</i> is derived from the Old English word <i>storc</i>, thought to be related to the Old High German <i>storah</i>, meaning \"stork\", and the Old English <i>stearc</i>, meaning \"stiff\".</p>\n\n<p>The black stork is a member of the genus <i>Ciconia</i>, or typical storks, a group of seven extant species, characterised by straight bills and mainly black and white plumage. The black stork was long thought to be most closely related to the white stork (<i>C. ciconia</i>). However, genetic analysis via DNA\u2013DNA hybridization and mitochondrial cytochrome b DNA by Beth Slikas in 1997 found that it was basal (an early offshoot) in the genus <i>Ciconia</i>. Fossil remains have been recovered from Miocene beds on Rusinga and Maboko Islands in Kenya, which are indistinguishable from the white and black storks.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The black stork is a large bird, measuring between 95 and 100\u00a0cm (37 and 39\u00a0in) in length with a 145-to-155\u00a0cm (57-to-61\u00a0in) wingspan, and weighing around 3\u00a0kg (6.6\u00a0lb). Standing as tall as 102\u00a0cm (40\u00a0in), it has long red legs, a long neck and a long, straight, pointed red beak. It bears some resemblance to Abdim's stork (<i>C. abdimii</i>), which can be distinguished by its much smaller build, predominantly green bill, legs and feet, and white rump and lower back. The plumage is black with a purplish green sheen, except for the white lower breast, belly, armpits, axillaries and undertail coverts. The breast feathers are long and shaggy, forming a ruff which is used in some courtship displays. The black stork has brown irises, and bare red skin around its eyes. The sexes are identical in appearance, except that males are larger than females on average. Moulting takes place in spring, with the iridescent sheen brighter in new plumage. It walks slowly and steadily on the ground and like all storks, it flies with its neck outstretched.</p><p>The juvenile resembles the adult in plumage, but the areas corresponding to the adult black feathers are browner and less glossy. The scapulars, wing and upper tail coverts have pale tips. The legs, bill and bare skin around the eyes are greyish green. It could possibly be confused with the juvenile yellow-billed stork, but the latter has paler wings and mantle, a longer bill and white under the wings.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>During the summer, the black stork is found from Eastern Asia (Siberia and northern China) west to Central Europe, reaching Estonia in the north, Poland, Lower Saxony and Bavaria in Germany, the Czech Republic, Hungary, Italy and Greece in the south, with an outlying population in the central-southwest region of the Iberian Peninsula (Extremadura and surrounding provinces of Spain, plus Portugal). It is migratory, wintering in tropical Africa and Asia, although certain populations of black storks are sedentary or dispersive. An isolated population exists in Southern Africa, where the species is more numerous in the east, in eastern South Africa and Mozambique, and is also found in Zimbabwe, Swaziland, Botswana and less commonly Namibia.</p><p>Most of the black storks that summer in Europe migrate to Africa, with those from western Germany and points west heading south via the Iberian Peninsula and the rest via Turkey and the Levant. Those flying via Spain spend winter in the Fal\u00e9m\u00e9 River basin of eastern Senegal, Guinea, southern Mauritania, Ivory Coast, Sierra Leone and western and central Mali, while those flying via the Sinai end up in northern Ethiopia, the Kotto River basin in the Central African Republic, the Mbokou river basin in Chad and northeastern Nigeria. Black storks summering in western Asia migrate to northern and northeastern India, ranging mainly from Punjab south to Karnataka, and Africa. They are occasional visitors to Sri Lanka. Those summering further east in eastern Russia and China winter mainly in southern China, and occasionally in Hong Kong, Myanmar, northern Thailand, and Laos. They were first recorded in western Myanmar in 1998.</p><p>The black stork prefers more wooded areas than the better-known white stork, and breeds in large marshy wetlands with interspersed coniferous or broadleaved woodlands, but also inhabits hills and mountains with sufficient networks of creeks. It usually inhabits ponds, rivers, edges of lakes, estuaries and other freshwater wetlands. The black stork does inhabit more agricultural areas in the Caspian lowlands, but even here it avoids close contact with people. Its wintering habitat in India comprises reservoirs or rivers with nearby scrub or forest, which provide trees that black storks can roost in at night. In southern Africa it is found in shallow water in rivers or lakes, or swamps, but is occasionally encountered on dry land.</p><p>After disappearing from Belgium before the onset of the 20th century, it has returned to breed in the Belgian Ardennes, Luxembourg and Burgundy, France, by 2000. It appears to be increasing in numbers in Spain and Portugal, where the population was estimated at 405 to 483 pairs in 2006. The black stork is a rare vagrant to the British Isles, turning up in the warmer months\u2014particularly in spring\u2014generally in the south and east. Sightings have become more common since the 1970s as its breeding range moves northwards. It has been recorded in Scotland six times between 1946 and 1983, including from Shetland, Orkney and the Highlands, as well as the Scottish Borders (Peebles). It is not abundant in the western parts of its distribution, but more densely inhabits eastern Transcaucasia. Further east, it has been recorded from locations across Iran, though little is known about its habits there; breeding has been recorded from near Aliabad in Fars province, Khabr National Park in Kerman province, Karun river in Khuzestan province, Qaranqu River in East Azarbaijan province, and Aliabad river in Razavi Khorasan province. The population has declined in Iran due to draining of wetlands. East of the Ural Mountains, the black stork is patchily found in forested and mountainous areas up to 60\u00b0\u201263\u00b0 N across Siberia to the Pacific Ocean. South of Siberia, it breeds in Xinjiang, northwestern China, northern Mongolia south to the Altai Mountains, and northeastern China south to the vicinity of Beijing. In the Korean Peninsula, the black stork is an uncommon summer visitor, no longer breeding in the south since 1966. Birds have been seen in the northeast but it is not known whether they breed there. Similarly it has been seen in the summer in Afghanistan, but its breeding status is uncertain.</p>\n<h3><span id=\"Migration\">Migration</span></h3>\n\n<p>Migration takes place from early August to October, with a major exodus in September. Some of the Iberian populations, and also those in southern Africa, are essentially non-migratory, though they may wander freely in the non-breeding areas. A broad-winged soaring bird, the black stork is assisted by thermals of hot air for long-distance flight, although is less dependent on them than is the white stork. Since thermals only form over land, the black stork, together with large raptors, must cross the Mediterranean at the narrowest points, and many black storks travel south through the Bosphorus, as well as the Sinai and Gibraltar. The trip is around 5,667\u00a0km (3,521\u00a0mi) via the western route and 7,000\u00a0km (4,300\u00a0mi) via the eastern route, with satellite tracking yielding an average travel time of 37 and 80 days respectively. The western route goes over the Rock of Gibraltar or over the Bay of Gibraltar, generally on a southwesterly track that takes them to the central part of the strait, from where they reach Morocco. Many birds fly around the Sahara next to the coast. About 10% of the western storks choose the passage Sicily \u2013 Cap Bon, Tunisia.</p><p>Spain contains several important areas\u2014Monfrag\u00fce National Park, Sierra de Gredos Regional Park, National Hunting Reserve in C\u00edjara, Natural Park of the Sierra Hornachuelos and Do\u00f1ana National Park\u2014where black storks stop over on the western migration route. Pesticide use has threatened birdlife in nearby Do\u00f1ana. Further south, Lake Faguibine in Mali is another stopover point but it has been affected by drought in recent years.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<p>A wary species, the black stork avoids contact with people. It is generally found alone or in pairs, or in flocks of up to a hundred birds when migrating, or during winter.</p><p>The black stork has a wider range of calls than the white stork, its main call being a <i>chee leee</i>, which sounds like a loud inhalation. It makes a hissing call as a warning or threat. Displaying males produce a long series of wheezy raptor-like squealing calls rising in volume and then falling. It rarely indulges in mutual bill-clattering when adults meet at the nest. Adults will do so as part of their mating ritual or when angered. The young clatter their bills when aroused.</p><p>The <i>up-down display</i> is used for a number of interactions with other members of the species. Here a stork positions its body horizontally and quickly bobs its head up from down-facing to around 30 degrees above horizontal and back again, while displaying the white segments of its plumage prominently, and this is repeated several times. The display is used as a greeting between birds, and\u2014more vigorously\u2014as a threat display. The species' solitary nature means that this threat display is rarely witnessed.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n\n\n\n<p>The black stork breeds between April and May in the Northern Hemisphere, with eggs usually laid in late April. In southern Africa, breeding takes place in the months between September and March, possibly to take advantage of abundant water prey rendered easier to catch as the rivers dry up and recede\u2014from April and May in Zimbabwe, Botswana and northern South Africa, and as late as July further south.</p><p>Pairs in courtship have aerial displays that appear to be unique among the storks. Paired birds soared in parallel, usually over the nest territory early in the mornings or late afternoons with one bird splaying the white undertail coverts to the sides of the narrowed black tail and the pair calls to each other. These courtship flights are difficult to see due to the densely forested habitat in which they breed. The nest is large, constructed from sticks and twigs, and sometimes also large branches, at an elevation of 4\u201325\u00a0m (13\u201382\u00a0ft). The black stork prefers to construct its nest in forest trees with large canopies where the nest can be built far from the main trunk\u2014generally in places far from human disturbance. For the most part, deciduous trees are chosen for nesting sites, though conifers are used as well. A 2003 field study in Estonia found that the black stork preferred oak (<i>Quercus robur</i>), European aspen (<i>Populus tremula</i>), and to a lesser extent Scots pine (<i>Pinus sylvestris</i>), and ignored Norway spruce (<i>Picea abies</i>), in part due to the canopy structure of the trees. Trees with nests averaged around 25.6\u00a0\u00b1\u00a05.2 metres (84\u00a0\u00b1\u00a017\u00a0ft) high and had a diameter at breast height of 66\u00a0\u00b1\u00a020 centimetres (26.0\u00a0\u00b1\u00a07.9\u00a0in). Furthermore, 90% of the trees chosen were at least 80 years old, highlighting the importance of conserving old-growth forests. A 2004 field study of nesting sites in Dadia-Lefkimi-Soufli National Park in north-eastern Greece found that it preferred the Calabrian pine (<i>Pinus brutia</i>), which had large side branches that allowed it to build the nest away from the trunk, as well as black pine (<i>Pinus nigra</i>) and to a lesser extent Turkey oak (<i>Quercus cerris</i>). It chose the largest trees in an area, generally on steeper ground and near streams. Trees chosen were on average over 90 years old. In the Iberian peninsula it nests in pine and cork oak (<i>Quercus suber</i>).</p><p>\nIn steeply mountainous areas such as parts of Spain, South Africa and the Carpathian Mountains it nests on cliffs, on large boulders, in caves and under overhanging ledges. The black stork's solitary nests are usually at least 1\u00a0km (0.6\u00a0mi) apart, even where the species is numerous. Although newly constructed nests may be significantly smaller, older nests can be 1\u20132\u00a0m (3.3\u20136.6\u00a0ft) in diameter. In southern Africa, the black stork may occupy the nests of other bird species such as\u00a0hamerkop (<i>Scopus umbretta</i>)\u00a0or Verreaux's eagle (<i>Aquila verreauxi</i>) and commonly reuses them in successive years. They are repaired with earth and grass, and lined with leaves, moss, grass, animal fur, paper, clay and rags.</p><p> In a clutch, there are two to five, or rarely even six large oval grey-white eggs, which become soiled during incubation. They can be 64\u201370\u00a0mm (2.5\u20132.8\u00a0in) long and 50\u201353\u00a0mm (2.0\u20132.1\u00a0in) wide, averaging about 68\u00a0mm (2.7\u00a0in) in length and 52\u00a0mm (2.0\u00a0in) in width.\u00a0The eggs are laid with an interval of two days. Hatching is asynchronous, and takes place at the end of May. Incubation\u00a0takes 32 to 38 days,\u00a0with both sexes sharing duties, which commence after the first or second egg is laid. The young start flying by the end of July. Fledging takes 60 to 71 days, after which the young joins the adults at their feeding grounds. However, for another two weeks, the young continue to return to the nest, to be fed and to roost at night.</p><p>At least one adult remains in the nest for two to three weeks after hatching to protect the young. Both parents feed the young by regurgitating onto the floor of the nest. Black stork parents have been known to kill one of their fledglings, generally the weakest, in times of food shortage to reduce brood size and hence increase the chance of survival of the remaining nestlings. Stork nestlings do not attack each other, and their parents' method of feeding them (disgorging large amounts of food at once) means that stronger siblings cannot outcompete weaker ones for food directly, hence parental infanticide is an efficient way of reducing brood size. This behaviour has only rarely been observed in the species, although the shyness of the species and difficulties in studying its nesting habits mean that it might not be an uncommon phenomenon.</p><p>Ringing recovery studies in Europe suggests that nearly 20% of chicks reach the breeding stage, around 3 years, and about 10% live beyond 10 years and about 5% beyond 20 years. Captive individuals have lived for as long as 36 years.</p>\n<h3><span id=\"Feeding\">Feeding</span></h3>\n<p>The black stork mainly eats fish, including small cyprinids, pikes, roaches, eels, budds, perches, burbots, sticklebacks and muddy loaches (<i>Misgurnus</i> and <i>Cobitis</i>). It may feed on amphibians, small reptiles, crabs, mammals and birds, and invertebrates such as snails, molluscs, earthworms, and insects like water beetles and their larvae.</p><p>Foraging for food takes place mostly in fresh water, though the black stork may look for food on dry land at times. The black stork wades patiently and slowly in shallow water, often alone or in a small group if food is plentiful. It has been observed shading the water with its wings while hunting. In India, it often forages in mixed species flocks with the white stork, woolly-necked stork (<i>Ciconia episcopus</i>), demoiselle crane (<i>Grus virgo</i>) and bar-headed goose (<i>Anser indicus</i>). The black stork also follows large mammals such as deer and livestock, presumably to eat the invertebrates and small animals flushed by their presence.</p>\n<h3><span id=\"Parasites_and_symbionts\">Parasites and symbionts</span></h3>\n<p>More than 12 species of parasitic helminth have been recorded from black storks with <i>Cathaemasia hians</i> and <i>Dicheilonema ciconiae</i> reported to be the most dominant. The juvenile black stork, although having a less diverse helminth population, is parasitized more frequently than the adult. A species of <i>Corynebacterium</i>\u2014<i>C. ciconiae</i>\u2014was isolated and described from the trachea of healthy black storks, and is thought to be part of the natural flora of the species. A herpes virus is known from black storks. Birdlice that have been recorded on the species include <i>Neophilopterus tricolor, Colpocephalum nigrae,</i> and <i>Ardeicola maculatus.</i> A diverse array of predatory mesostigmatid mites\u2014particularly the genera <i>Dendrolaelaps</i> and <i>Macrocheles</i>\u2014have been recovered from black stork nests. Their role is unknown, though they could prey on parasitic arthropods.</p>\n<h2><span id=\"Status_and_conservation\">Status and conservation</span></h2>\n<p>Since 1998, the black stork has been rated as a species of\u00a0least concern\u00a0on the\u00a0IUCN Red List\u00a0of Endangered Species. This is because it has a large range\u2014more than 20,000\u00a0km<sup>2</sup>\u00a0(7,700\u00a0mi<sup>2</sup>)\u2014and because its population is thought not to have declined by 30% over ten years or three generations and thus is not a rapid enough decline to warrant a vulnerable rating. Even so, the state of the population overall is unclear, and although it is widespread, it is not abundant anywhere. Black stork numbers have declined for many years in western Europe, and the species has already been extirpated from Scandinavia. The population in India\u2014a major wintering ground\u2014is declining. Previously a regular winter visitor to the Mai Po Marshes, it is now seldom seen there, and appears to be in decline in China overall. Its habitat is changing rapidly in much of eastern Europe and Asia. Various conservation measures have been taken, including Wetlands International's Conservation Action Plan for African black storks, which focuses on improving the wintering conditions of the birds which breed in Europe. It is protected by the Agreement on the Conservation of African-Eurasian Migratory Waterbirds (AEWA) and the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES).</p><p>Hunters threaten the black stork in some countries of southern Europe and Asia, such as Pakistan, and breeding populations may have been eliminated there. The black stork vanished from the Ticino River valley in northern Italy, with hunting a likely contributor. In 2005, black storks were released into the Parco Lombardo del Ticino in an attempt to re-establish the species there.</p>\n<h2><span id=\"Notes\">Notes</span></h2>\n\n<h2><span id=\"References\">References</span></h2>\n\n<h3><span id=\"Cited_texts\">Cited texts</span></h3>\n<ul><li><cite id=\"CITEREFCramp1977\" class=\"citation book\">Cramp, Stanley, ed. (1977). <i>Handbook of the Birds of Europe, the Middle East, and North Africa: The Birds of the Western Palearctic</i>. Volume 1: Ostrich to Ducks. Oxford: Oxford University Press. ISBN\u00a0<bdi>978-0-19-857358-6</bdi>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Handbook+of+the+Birds+of+Europe%2C+the+Middle+East%2C+and+North+Africa%3A+The+Birds+of+the+Western+Palearctic&amp;rft.place=Oxford&amp;rft.pub=Oxford+University+Press&amp;rft.date=1977&amp;rft.isbn=978-0-19-857358-6&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+stork\"></span><span>CS1 maint: ref=harv (link)</span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Ageing and sexing (PDF) by Javier Blasco-Zumeta &amp; Gerd-Michael Heinze</li>\n<li><cite class=\"citation web\">\"Black stork media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Black+stork+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fblack-stork-ciconia-nigra&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack+stork\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Black stork photo gallery at VIREO (Drexel University)</li>\n<li>Audio recordings of Black stork on Xeno-canto.</li></ul>"
    },
    "black and yellow grosbeak": {
        "id": "b032",
        "name": "Black-and-yellow Grosbeak",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Mycerobas", "species":"icterioides",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-and-yellow grosbeak</b> (<i>Mycerobas icterioides</i>) is a species of finch native to the northern parts of the Indian subcontinent, primarily the lower and middle Himalayas. It is in the family Fringillidae.\n</p><p>The species ranges across Afghanistan, India, Nepal, and Pakistan where its natural habitat is temperate forests.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"Phylogeny\">Phylogeny</span></h2>\n<p>Eophona genus goes together with Mycerobas genus. Both genera form a single phylogenetic group.</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p>"
    },
    "black backed forktail": {
        "id": "b033",
        "name": "Black-backed Forktail",
        "order": order.PASSERIFORMES,
        "family": "Muscicapidae",
        "genus":"Encurus", "species":"immaculatus",
        "nepali": " ",
        "details": " "
    },
    "black bellied tern": {
        "id": "b034",
        "name": "Black-bellied Tern",
        "order": order.CHARADRIIFORMES,
        "family":familyname.Laridae,
        "genus":"Sterna", "species":"acuticauda",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-bellied tern</b> (<i>Sterna acuticauda</i>) is a tern found near large rivers in the Indian subcontinent, its range extending from Pakistan, Nepal and India to Myanmar. It has become very scarce in the eastern part of its range and the International Union for Conservation of Nature has assessed its conservation status as being endangered.\n</p><p>They have a black belly in the summer and a deep forked tail. They can sometimes resemble whiskered terns (<i>Chlidonias hybrida</i>), but the deeper fork of the tail and the black on the lower belly distinguish them from the shallow fork and black closer to the breast on the whiskered tern. Considering that sequence analysis supports moving the similar black-fronted tern (<i>\"Sterna\" albostriata</i>) into <i>Chlidonias</i>, this species might also be better placed in that genus, but no research has yet been conducted.</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The black-bellied tern grows to a length of 32 to 35\u00a0cm (13 to 14\u00a0in). In the breeding plumage, the crown and nape are black and the upper parts are pale grey. The throat is white and the breast pale grey, gradually darkening to a black belly. The wings are long, slender and pointed and the tail is deeply forked with sharply pointed tips. The bill and feet are yellow or orange and the iris is reddish brown. Outside the breeding season, the belly is whitish, the tail is reduced in length and the bill has a dark tip.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The species occurs mostly in Pakistan, Nepal, India and Bangladesh, with a separate range in Myanmar. Its typical habitat is lowland rivers and marshes, and sometimes ditches and pools, at altitudes of up to about 730\u00a0m (2,400\u00a0ft). It is an entirely inland species and is not found on the coast.</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n<p>The black-bellied tern has long wings but its flight is slow, with much flapping. It feeds on insects and small fish, skimming over the surface of the water and ground to pick up insects, and plunging obliquely into the water to feed on crustaceans, tadpoles and fish. Breeding takes place from February to April, the nesting site usually being a flat sandy location near a river or lake, a sand spit or a sandy island. It does not nest colonially but may nest with other birds such as river terns (<i>Sterna aurantia</i>), pratincoles (<i>Glareola</i> spp.) and Indian skimmers (<i>Rynchops albicollis</i>).</p>\n<h2><span id=\"Status\">Status</span></h2>\n<p><i>S. acuticauda</i> is classified as being endangered by the International Union for Conservation of Nature. The rationale behind this is that the riverine habitats in which it breeds are under threat in much of southeastern Asia and, although it has an extensive range, it is believed to be extinct in southern China, Nepal, Thailand, Laos, Cambodia and Vietnam. Only in Pakistan, India and Bangladesh are there larger populations, and even in these countries, this bird is thought to be seriously declining, and there may be fewer than one thousand mature individuals in existence. The threats it faces include the degradation of the islands and sandspits on which it breeds, the collection of eggs for food, predation of eggs and chicks by dogs, cats and crows, flooding of nesting sites by the construction of river dams, competition for fish by local fishermen, entanglement in nets, disturbance, extraction of water, sand and gravel dredging and pollution.</p>\n<h2><span id=\"References\">References</span></h2> "
    },
    "black breasted parrotbill": {
        "id": "b035",
        "name": "Black-breasted Parrotbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Paradoxornis", "species":"flavirostris",
        "nepali": " ",
        "details": " "
    },
    "black breasted weaver": {
        "id": "b036",
        "name": "Black-breasted Weaver",
        "order": order.PASSERIFORMES,
        "family": familyname.Ploceidae,
        "genus":"Ploceus", "species":"benghalensis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black-breasted weaver</b>, also known as the <b>Bengal weaver</b> or <b>black-throated weaver</b> (<i>Ploceus benghalensis</i>), is a weaver resident in the northern river plains of the Indian subcontinent.  Like the other weavers, the males build an enclosed nest from reeds and mud, and visiting females select a mate at least partially based on the quality of the nest.\n</p>\n\n\n\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>Resident or local migrant, endemic to South Asia. Species is described as 'common' in at least parts of its range.</p><p>It is found throughout northern part of Indian subcontinent.\n</p><p>Local Names: Hindi: <span lang=\"hi\">Sarbo baya</span>, Bengali: <span lang=\"bn\">\u0995\u09be\u09b2\u09cb\u09ac\u09c1\u0995 \u09ac\u09be\u09ac\u09c1\u0987 (Kalo-buk babui), \u09ac\u09be\u0982\u09b2\u09be \u09ac\u09be\u09ac\u09c1\u0987 (Bangla babui), \u09b6\u09b0 \u09ac\u09be\u099c\u09be (Shor baJa), \u0995\u09be\u09a8\u09cd\u09a4\u09be\u0993\u09af\u09bc\u09be\u09b2\u09be \u09ac\u09be\u09af\u09bc\u09be (Kantawala baya)</span>.\n</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>It is sparrow-sized with a length of about 15\u00a0cm.\n</p>\n<ul><li>Appearance: The male in breeding plumage has a brilliant golden-yellow crown and a variable amount of black on the head and breast; some males have an entirely black head (apart from the yellow crown) and breast, while others have a white throat or an entirely white face with a black band separating it from the fulvous-white underparts. In the non-breeding male and female, the crown is brown like the rest of the upperpart plumage, and the black pectoral band is less developed. It has a prominent supercilium, a spot behind ear, and narrow moustachial streaks, which are pale yellow. Flocks frequent cultivation and the reedy margins of tanks and jheels (shallow lakes), or extensive tall grass areas.</li>\n<li>Behaviour: It is polygynous and colonial, and on the whole similar to that of the baya and streaked weavers.</li>\n<li>Courtship: Male constructs the nest single-handedly, with a group of females visiting it during late construction stage, jumping on the <i>helmets</i>, tugging and testing, presumably for strength.  If a female appears interested, the male bows low before her, presenting his golden crown to her. He flaps his wings deliberately and sings softly <i>tsi-tsisik-tsisik-tsik-tsik</i>, like the chirp of a cricket or the subdued squeaking of an unoiled bicycle wheel. Once the female agrees and permits copulation, he quickly completes the rest of the nest, and she lays her eggs inside. He immediately commences a second nest nearby to attract other females, and occasionally a third nest, or very rarely a fourth. Nests not accepted by females may be torn down by the builder himself.</li></ul><h2><span id=\"Nesting\">Nesting</span></h2>\n\n<ul><li>Season: June to September</li>\n<li>Nest: Similar to the streaked weaver; somewhat smaller and normally with shorter entrance tubes. Built in reed-beds in marsh, often <i>moonj</i> or  <i>kans</i> (<i>Saccharum spontaneum</i>), with some of the growing reeds incorporated into the dome as support.  Entrance tube is somewhat shorter than Baya weavers (up to about 25\u00a0cm).  At the 'helmet' stage of construction a quantity of wet mud or cowdung is daubed thickly along the edge, with bright coloured scarlet or orange flowers or flower petals (<i>Lantana, Lagerstroemia</i>) incorporated; observations suggest that this is part of the courtship rituals and exercise a direct influence on the reactions of the visiting female, both for this species and the streaked weaver.</li>\n<li>Colony: Singly or in scattered groups of 4 or 5; sometimes larger colonies.</li>\n<li>Eggs: 3 or 4, white, indistinguishable from those of the other two weavers.</li></ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Black-throated Weaver -  Species text in Weaver Watch.</li></ul> "
    },
    "black browed reed warbler": {
        "id": "b037",
        "name": "Black-browed Reed-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "genus":"Acrocephalus", "species":"bistrigiceps",
        "nepali": " ",
        "details": " It was formerly included in the \"Old World warbler\" assemblage. The species was first described by Robert Swinhoe in 1860. \n</p><p>It is found from eastern Mongolia and south-eastern Russia to eastern China and Japan.</p><p>The black-browed reed warbler is similar and closely related to the more common and widespread Eurasian reed warbler. The bird spends its time foraging close to the ground inside undisturbed reed beds.  Like many other wetland birds, it is of conservation concern owing to habitat loss-destruction of native marsh vegetation and its replacement by rice paddies and fishponds.</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "black capped kingfisher": {
        "id": "b038",
        "name": "Black-capped Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "genus":"Halcyon", "species":"pileata",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-capped kingfisher</b> (<i>Halcyon pileata</i>) is a tree kingfisher which is widely distributed in tropical Asia from India east to China, Korea and Southeast Asia. This most northerly of the tree kingfishers is resident over much of its range, but northern populations are migratory, wintering south of their range in Sri Lanka, Thailand, Borneo and Java. It is distinctive in having a black cap that contrasts with the whitish throat, purple-blue wings and the coral red bill. The species is mainly found in coastal and mangrove habitats but can sometimes be found far inland.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The black-capped kingfisher was described by the French polymath Georges-Louis Leclerc, Comte de Buffon in his <i>Histoire Naturelle des Oiseaux</i> in 1780. The bird was also illustrated in a hand-coloured plate engraved by Fran\u00e7ois-Nicolas Martinet in the <i>Planches Enlumin\u00e9es D'Histoire Naturelle</i>, which was produced under the supervision of Edme-Louis Daubenton to accompany Buffon's text.  Neither the plate caption nor Buffon's description included a scientific name, but in 1783 the Dutch naturalist Pieter Boddaert coined the binomial name <i>Alcedo pileata</i> in his catalogue of the <i>Planches Enlumin\u00e9es</i>. The type locality is China. The present genus <i>Halcyon</i> was introduced by the English naturalist and artist William John Swainson in 1821. <i>Halcyon</i> is a name for a bird in Greek mythology  generally associated with the kingfisher. The specific epithet <i>pileata</i> is from the Latin <i>pileatus</i> meaning '-capped'. The species is monotypic.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>This kingfisher is about 28 centimetres (11\u00a0in) long. The adult has purple-blue wings and back, black head and shoulders, white neck collar and throat, and rufous underparts. The large bill and legs are bright red. In flight, large white patches or \"mirrors\" at the base of the primaries are visible on the blue and black wings. Sexes are similar, but juveniles are a duller version of the adult and show streaks on the throat. The call of this kingfisher is a cackling <i>ki-ki-ki-ki-ki</i>.\n</p><p>Usually seen on coastal waters and especially in mangroves, it is easily disturbed. It perches conspicuously and dives to catch fish, and also feeds on large insects. The flight of the black-capped kingfisher is rapid and direct, the short rounded wings whirring.\n</p><p>The breeding season is in summer. The nest is a tunnel in an earth bank. A single clutch of 4-5 round, white eggs is typical.</p><p>A subspecies <i>palawanensis</i> has been described, but the species is considered to be monotypic with no clear plumage differences across its range.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The species is found mainly near the coast in mangrove forests and along estuaries and rivers. The distribution ranges from India (including the Andaman and Nicobar Islands where they occur even on remote islands like Narcondam), Sri Lanka, Kansu, Shansi, Korea, Malay Peninsula, Thailand, Burma, Ryukyu Islands, Hainan, Philippines (Palawan, Balabac, Basilan, Tawi Tawi), Borneo, Sumatra east to Sulawesi where it occurs only in winter.  Vagrants in winter have been recorded in Pakistan, while movements related to rainfall may lead to their being found far inland and away from their usual distribution.</p>\n<h2><span id=\"In_culture\">In culture</span></h2>\n<p>Like many other kingfishers, this species was much sought for the blue feathers for their use in the millinery trade. Feathers were used in making fans in China. In Hong Kong, their feathers were cut and glued over ornaments used by women.</p>\n<h2><span id=\"References\">References</span></h2> "
    },
    "black chinned babbler": {
        "id": "b039",
        "name": "Black-chinned Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Cyanoderma", "species":"pyrrhops",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n\n<p>The <b>black-chinned babbler</b> (<i>Stachyridopsis pyrrhops</i>) is a babbler species in the family Timaliidae. It occurs in the foothills of the Himalayas from the Murree Hills in Pakistan to eastern Nepal. It inhabits subtropical and temperate forest at 245\u20132,750\u00a0m (804\u20139,022\u00a0ft) altitudes. It is listed as Least Concern on the IUCN Red List.</p><p>It is biscuit-coloured, has a black chin and a buffy grey crown. It is 10\u00a0cm (3.9\u00a0in) long and weighs 8\u201312\u00a0g (0.28\u20130.42\u00a0oz).</p><p><i>Stachyris pyrrhops</i> was the scientific name proposed by Edward Blyth in 1844 who described a greenish olivaceous babbler with a black chin and black lores from Nepal.\nIt was later placed in the genus <i>Stachyridopsis</i>.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li><cite id=\"CITEREFBirdLife_International2019\" class=\"citation web\">BirdLife International (2019). \"Black-chinned Babbler <i>Cyanoderma pyrrhops</i>\".</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Black-chinned+Babbler+Cyanoderma+pyrrhops&amp;rft.date=2019&amp;rft.au=BirdLife+International&amp;rft_id=http%3A%2F%2Fdatazone.birdlife.org%2Fspecies%2Ffactsheet%2Fblack-chinned-babbler-cyanoderma-pyrrhops&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-chinned+babbler\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul>\n<p><br></p> "
    },
    "black chinned yuhina": {
        "id": "b040",
        "name": "Black-chinned Yuhina",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "genus":"Yuhina", "species":"nigrimenta",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-chinned yuhina</b> (<i>Yuhina nigrimenta</i>) is a bird species in the white-eye family Zosteropidae.\n</p><p>It is found in the Indian subcontinent from the Himalayas eastwards to contiguous hilly regions of Southeast Asia. The species ranges across Bangladesh, Bhutan, Cambodia, India, Laos, Myanmar, Nepal, Tibet and Thailand. Its natural habitats are subtropical or tropical moist lowland forests, as well as subtropical or tropical moist montane forests.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Collar, N. J. &amp; Robson, C. 2007. Family Timaliidae (Babblers)  pp.\u00a070 \u2013 291 in; del Hoyo, J., Elliott, A. &amp; Christie, D.A. eds. <i>Handbook of the Birds of the World</i>, Vol. 12. Picathartes to Tits and Chickadees. Lynx Edicions, Barcelona.</li></ul>\n<p><br></p>"
    },
    "black crested bulbul": {
        "id": "b041",
        "name": "Black-crested Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "genus":"Pycnonotus", "species":"flaviventris",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n\n<p>The <b>black-crested bulbul</b> (<i>Pycnonotus flaviventris</i>) is a member of the bulbul family of passerine birds. It is found from the Indian subcontinent to southeast Asia.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The black-crested bulbul was originally described in the genus <i>Vanga</i>. Until 2008, the black-crested bulbul was considered as conspecific with the black-capped, ruby-throated, flame-throated and Bornean bulbuls.</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Eight subspecies are recognized:</p>\n<ul><li><b>Black-crested yellow bulbul</b> (<i>P. f. flaviventris</i>) - <small>(Tickell, 1833)</small>: Found from Nepal, northern and eastern India to southern China and central Myanmar</li>\n<li><i>P. f. vantynei</i> - <small>Deignan, 1948</small>: Found from eastern and southern Myanmar to southern China and northern Indochina</li>\n<li><i>P. f. xanthops</i> - <small>Deignan, 1948</small>: Found in south-eastern Myanmar and western Thailand</li>\n<li><i>P. f. auratus</i> - <small>Deignan, 1948</small>: Found in north-eastern Thailand and western Laos</li>\n<li><i>P. f. johnsoni</i> - <small>(Gyldenstolpe, 1913)</small>: Originally described as a separate species. Found in central and eastern Thailand, southern Indochina</li>\n<li><i>P. f. elbeli</i> - <small>Deignan, 1954</small>: Found on islands off south-eastern Thailand</li>\n<li><i>P. f. negatus</i> - <small>Deignan, 1954</small>: Found in southern Myanmar and south-western Thailand</li>\n<li><i>P. f. caecilii</i> - <small>Deignan, 1948</small>: Found on the northern Malay Peninsula</li></ul><h2><span id=\"Description\">Description</span></h2>\n<p>The black-crested bulbul is generally about 19\u00a0cm in length. As the name suggests, the head of this bulbul is black while the rest of its body is different shades of yellow. Both the male and female are similar in plumage. One can make out a younger bird by its slightly duller coloring.\n</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This is a bird of forest and dense scrub.\n</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>It builds its nest in a bush; two to four eggs is a typical clutch. The black-crested bulbul feeds on fruit and insects.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<ul><li><i>Birds of India</i> by Grimmett, Inskipp and Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li>\n<li>Rasmussen, P.C., and J.C. Anderton (2005). <i>Birds of South Asia. The Ripley Guide. Volume 2: Attributes and Status.</i> Smithsonian Institution and Lynx Edicions, Washington D.C. and Barcelona.</li></ul>\n<p><br></p>"
    },
    "black crowned night heron": {
        "id": "b042",
        "name": "Black-crowned Night-heron",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "genus":"Nycticorax", "species":"nycticorax",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n\n<p>The <b>black-crowned night heron</b> (<i>Nycticorax nycticorax</i>), or <b>black-capped night heron</b>, commonly shortened to just <b>night heron</b> in Eurasia, is a medium-sized heron found throughout a large part of the world, except in the coldest regions and Australasia (where it is replaced by the closely related rufous night heron, with which it has hybridized in the area of contact).\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>Adults are approximately 64\u00a0cm (25\u00a0in) long and weigh 800\u00a0g (28\u00a0oz). They have a black crown and back with the remainder of the body white or grey, red eyes, and short yellow legs. They have pale grey wings and white under parts. Two or three long white plumes, erected in greeting and courtship displays, extend from the back of the head. The sexes are similar in appearance although the males are slightly larger. Black-crowned night herons do not fit the typical body form of the heron family. They are relatively stocky with shorter bills, legs, and necks than their more familiar cousins, the egrets and \"day\" herons. Their resting posture is normally somewhat hunched but when hunting they extend their necks and look more like other wading birds.\n</p><p>Immature birds have dull grey-brown plumage on their heads, wings, and backs, with numerous pale spots. Their underparts are paler and streaked with brown. The young birds have orange eyes and duller yellowish-green legs. They are very noisy birds in their nesting colonies, with calls that are commonly transcribed as <i>quok</i> or <i>woc</i>.\n</p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>The breeding habitat is fresh and salt-water wetlands throughout much of the world. The subspecies <i>N. n. hoactli</i> breeds in North and South America from Canada as far south as northern Argentina and Chile, <i>N. n. obscurus</i> in southernmost South America, <i>N. n. falklandicus</i> in the Falkland Islands, and the nominate race <i>N. n. nycticorax</i> in Europe, Asia and Africa. Black-crowned night herons nest in colonies on platforms of sticks in a group of trees, or on the ground in protected locations such as islands or reedbeds. Three to eight eggs are laid.\n</p><p>This heron is migratory in the northernmost part of its range, but otherwise resident (even in the cold Patagonia). The North American population winters in Mexico, the southern United States, Central America, and the West Indies, and the Old World birds winter in tropical Africa and southern Asia.\n</p><p>A colony of the herons has regularly summered at the National Zoo in Washington, D.C. for more than a century.</p>\n<h3><span id=\"Status_in_Great_Britain\">Status in Great Britain</span></h3>\n<p>There are two archaeological specimens of the black-crowned night heron in Great Britain. The oldest is from the Roman London Wall and the more recent from the Royal Navy's late medieval victualling yards in Greenwich  It appears in the London poulterers price lists as the Brewe, a bird which was thought to have been the Eurasian whimbrel or Glossy ibis,  which has now been shown to refer to the black-crowned night heron, derived from the medieval French <i>Bihoreau</i>.   Black-crowned night heron may have bred in the far wetter and wider landscape of pre-modern Britain.  They were certainly imported for the table so the bone specimens themselves do not prove they were part of the British avifauna.  In modern times the Black-crowned Night Heron is a vagrant and feral breeding colonies were established at Edinburgh Zoo from 1950 into the 21st Century and at Great Witchingham in Norfolk where there were 8 pairs in 2003 but breeding was not repeated in 2004 or 2005. A pair of adults were seen with two recently fledged juveniles in Somerset in 2017, which is the first proven breeding record of wild black-crowned night herons in Great Britain.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<p>These birds stand still at the water's edge and wait to ambush prey, mainly at night or early morning. They primarily eat small fish, crustaceans, frogs, aquatic insects, small mammals, and small birds. They are among the seven heron species observed to engage in bait fishing; luring or distracting fish by tossing edible or inedible buoyant objects into water within their striking range \u2013 a rare example of tool use among birds. During the day they rest in trees or bushes. <i>N. n. hoactli</i> is more gregarious outside the breeding season than the nominate race.\n</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"Parasites\">Parasites</span></h2>\n<p>A thorough study performed by J. Sitko and P. Heneberg in the Czech Republic in 1962\u20132013 suggested that the central European black-crowned night herons host 8 helminth species. The dominant species consisted of <i>Neogryporhynchus cheilancristrotus</i> (62% prevalence), <i>Contracaecum microcephalum</i> (55% prevalence) and <i>Opistorchis longissimus</i> (10% prevalence). The mean number of helminth species recorded per host individual reached 1.41. In Ukraine, other helminth species are often found in black-crowned night herons too, namely <i>Echinochasmus beleocephalus</i>, <i>Echinochasmus ruficapensis</i>, <i>Clinostomum complanatum</i> and <i>Posthodiplostomum cuticola</i>.</p>\n<h2><span id=\"Etymology\">Etymology</span></h2>\n<p><i>Nycticorax</i> means \"night raven\" and derives from the Ancient Greek <i>nuktos</i> \"night\" and <i>korax</i>, \"raven\". It refers to the largely nocturnal feeding habits and croaking crow-like call of this species.</p><p>In the Falkland Islands, the bird is called \"quark\", which is an onomatopoeia similar to its name in many other languages, like \"qua-bird\" in English, \"kwak\" in Dutch and West Frisian, \"kvako\u0161 no\u010dn\u00ed\" in Czech, \"\u043a\u0432\u0430\u043a\" in Ukrainian, \"\u043a\u0432\u0430\u043a\u0432\u0430\" in Russian, \"v\u1ea1c\" in Vietnamese, \"kowak-malam\" in Indonesian, and \"waqwa\" in Quechua.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li>Black-crowned night heron on Animal Diversity Web</li>\n<li><cite id=\"CITEREFStilesSkutch1990\" class=\"citation book\">Stiles, F. Gary; Skutch, Alexander F. (1990). <i>A Guide to the Birds of Costa Rica</i>. Cornell University Press. ISBN\u00a0<bdi>978-0-8014-9600-4</bdi>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=A+Guide+to+the+Birds+of+Costa+Rica&amp;rft.pub=Cornell+University+Press&amp;rft.date=1990&amp;rft.isbn=978-0-8014-9600-4&amp;rft.aulast=Stiles&amp;rft.aufirst=F.+Gary&amp;rft.au=Skutch%2C+Alexander+F.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-crowned+night+heron\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFHancock1999\" class=\"citation book\">Hancock, James (1999). <i>Herons and Egrets of the World</i>. Academic Press. ISBN\u00a0<bdi>978-0-12-322725-6</bdi>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Herons+and+Egrets+of+the+World&amp;rft.pub=Academic+Press&amp;rft.date=1999&amp;rft.isbn=978-0-12-322725-6&amp;rft.aulast=Hancock&amp;rft.aufirst=James&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-crowned+night+heron\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFSibley2000\" class=\"citation book\">Sibley, David (2000). <span title=\"Free registration required\"><i>The Sibley Guide to Birds</i></span>. Knopf. ISBN\u00a0<bdi>978-0-679-45122-8</bdi>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=The+Sibley+Guide+to+Birds&amp;rft.pub=Knopf&amp;rft.date=2000&amp;rft.isbn=978-0-679-45122-8&amp;rft.aulast=Sibley&amp;rft.aufirst=David&amp;rft_id=https%3A%2F%2Farchive.org%2Fdetails%2Fsibleyguidetobir00sibl_0&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-crowned+night+heron\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li><cite id=\"CITEREFBlasco-ZumetaHeinze\" class=\"citation web\">Blasco-Zumeta, Javier; Heinze, Gerd-Michael. \"Black-crowned night heron\" <span>(PDF)</span>. <i>Identification Atlas of Aragon's Birds</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Identification+Atlas+of+Aragon%27s+Birds&amp;rft.atitle=Black-crowned+night+heron&amp;rft.aulast=Blasco-Zumeta&amp;rft.aufirst=Javier&amp;rft.au=Heinze%2C+Gerd-Michael&amp;rft_id=http%3A%2F%2Fblascozumeta.com%2Fwp-content%2Fuploads%2Faragon-birds%2Fnon-passeriformes%2F037.nightheron-nnycticorax.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-crowned+night+heron\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Black-crowned Night-Heron Species Account \u2013 Cornell Lab of Ornithology</li>\n<li>Black-crowned night-heron - <i>Nycticorax nycticorax</i> - USGS Patuxent Bird Identification InfoCenter</li>\n<li>Blackcrowned Night Heron - <i>The Atlas of Southern African Birds</i></li>\n<li>Black-crowned Night-Heron <i>Nycticorax nycticorax</i> - eNature.com</li>\n<li>Field Guide on Flickr</li>\n<li>Images and information of the black-crowned night heron from Portugal</li>\n<li><cite class=\"citation web\">\"Black-crowned night-heron media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Black-crowned+night-heron+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fblack-crowned-night-heron-nycticorax-nycticorax&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-crowned+night+heron\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Black-crowned night-heron photo gallery at VIREO (Drexel University)</li></ul> "
    },
    "black eared shrike babbler": {
        "id": "b043",
        "name": "Black-eared Shrike-babbler",
        "order": "Passeriformes",
        "family": "Vireonidae",
        "genus":"Pteruthius", "species":"melanotis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-eared shrike-babbler</b> (<i>Pteruthius melanotis</i>) is a bird species in the vireo family, Vireonidae. It was traditionally considered as an aberrant Old World babbler and formerly placed in the family Timaliidae.  It was long noted that their habits resembled those of vireos, but this was previously ascribed to the result of convergent evolution. It is found in Southeast Asia from the Himalayas to western Malaysia. Its natural habitat is subtropical or tropical moist montane forests.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-packed-hover\"><li class=\"gallerybox\" style=\"width: 227.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 227.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 227.33333333333px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li>Collar, N. J. &amp; Robson, C. 2007. Family Timaliidae (Babblers)  pp.\u00a070 \u2013 291 in; del Hoyo, J., Elliott, A. &amp; Christie, D.A. eds. <i>Handbook of the Birds of the World</i>, Vol. 12. Picathartes to Tits and Chickadees. Lynx Edicions, Barcelona.</li></ul>\n<p><br></p> "
    },
    "black faced bunting": {
        "id": "b044",
        "name": "Black-faced Bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "genus":"Emberiza", "species":"spodocephala",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n\n<p>The <b> black-faced bunting</b> (<i>Emberiza spodocephala</i>) is a passerine bird in the bunting family Emberizidae, a group now separated by most modern authors from the finches, Fringillidae.\n</p><p>The genus name <i>Emberiza</i> is from Old German <i>Embritz</i>, a bunting. The specific <i>spodocephala</i> is from Ancient Greek <i>spodos</i>, \"ashes\", and <i>kephalos</i>, \"headed\".</p><p>It breeds in southern Siberia across to northern China and northern Japan. It is migratory, wintering in north-east India, southern China and northern south-east Asia. It is a very rare vagrant to western Europe.</p><p>The black-faced bunting breeds in dense undergrowth along streams and rivers in the taiga zone, and lays four or five eggs in a ground or tree nest. Its natural food consists of seeds, and when feeding young, insects. It winters close to water in agricultural or other open bushy habitats.\n</p><p>This bird's general appearance and terrestrial feeding habits give the impression of a dunnock with a bunting's bill. It is similar in size to a reed bunting at about 16\u00a0cm long. The breeding male has a dark grey head with a mix of yellow green and black between the bill and eye. The upperparts are brown and heavily streaked with black, except on the rump. The rump is brown and the tail is also a dark brown. The underparts are yellowish white with some fine dark brown flank streaks. The stout bill is pink.\n</p><p>Females and young birds have a weaker head pattern, with olive-grey cheeks and a weak creamy white supercilium. The underparts are creamy yellow heavily streaked with dark brown.\n</p><p>The bird's call is like a <i>tzii</i> or <i>tzee</i>. It sound very \"metallic\" and it is a very short and not exactly a song at all. It nests on trees or on the ground and lays about four to five eggs.\n</p>\n<h2><span id=\"References\">References</span></h2>"
    },
    "black faced laughingthrush": {
        "id": "b045",
        "name": "Back-faced Laughingthrush",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "genus":"Trochalopteron", "species":"affine",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-faced laughingthrush</b> (<i>Trochalopteron affine</i>) is a bird species in the family Leiothrichidae. \n</p>\n\n<p>It is found in the Eastern Himalayas.  Its range extends from eastern Nepal eastwards to Arunachal Pradesh in India and further to Myanmar, along with Bhutan and southeastern Tibet.  Small disjunct populations also exist in continental Southeast Asia.\n</p>\n<h2><span id=\"References\">References</span></h2>\n<ul><li>BirdLife International 2004.  Garrulax affinis.   2006 IUCN Red List of Threatened Species.   Retrieved 25 July 2007.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Black-faced laughingthrush videos on the Internet Bird Collection</li>\n<li>Images at ADW</li></ul>"
    },
    "black faced warbler": {
        "id": "b046",
        "name": "Black-faced Wabler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Abroscopus", "species":"schisticeps",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-faced warbler</b> (<i>Abroscopus schisticeps</i>) is a species of bush warbler (family Cettiidae). It was formerly included in the \"Old World warbler\" assemblage.\n</p><p>It is found in Bhutan, China, India, Myanmar, Nepal, and Vietnam. Its natural habitats are subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest.\n</p>\n<ul class=\"gallery mw-gallery-packed\"><li class=\"gallerybox\" style=\"width: 197.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 175.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 197.33333333333px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p>\n\n<p><br></p> "
    },
    "black headed bunting": {
        "id": "b047",
        "name": "Black-headed bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "genus":"Emberiza", "species":"melanocephala",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-headed bunting</b> (<i>Emberiza melanocephala</i>) is a passerine bird in the bunting family Emberizidae. It breeds in south-east Europe east to Iran and migrates in winter mainly to India, with some individuals moving further into south-east Asia. Like others in its family, it is found in open grassland habitats where they fly in flocks in search of grains and seed. Adult males are well marked with yellow underparts, chestnut back and a black head. Adult females in breeding plumage look like duller males. In other plumages, they can be hard to separate from the closely related red-headed bunting and natural hybridization occurs between the two species in the zone of overlap of their breeding ranges in northern Iran.\n</p>\n\n\n\n<h2><span id=\"Etymology\">Etymology</span></h2>\n<p>The genus name <i>Emberiza</i> is from Old German <i>Embritz</i>, a bunting, and the specific <i>melanocephala</i> is from Ancient Greek <i>melas</i>, \"black\", and <i>kephale</i> \"head\".</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>This bird is 15\u00a0cm long, larger than reed bunting, and long-tailed. The breeding male has bright yellow underparts, chestnut upperparts and a black hood. The female is a washed-out version of the male, with paler underparts, a grey-brown back and a greyish head. The juvenile is similar but the vent is yellow, and both can be difficult to separate from the corresponding plumages of the closely related red-headed bunting although the black-headed tends to have the cheeks darker than the throat. First year males have a grey crown and the back has patches of chestnut and grey. First year females can be difficult to separate from female red-headed buntings although having more streaking on the crown than on the lower back. The vent is yellow.</p><p>The black- and red-headed buntings represent sister species which forms a clade along with the crested bunting.</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n<p>The black-headed bunting breeds in open scrubby areas including agricultural land. In winter they move to Asia and large flocks are found in agricultural fields and grasslands. The longest migration noted from a ringed individual is about 7,000\u00a0km. Another ringed bird was determined to have flown 1,000\u00a0km in seven days. Males form pure flocks during migration and arrive in the winter quarters well before the females. The winter range within India is mainly in western and northern India extending south to northern Karnataka. In winter they form large communal roosts in thorny acacia trees, often joining other species such as the yellow-throated sparrow.</p><p>The main breeding zone extends from south-eastern Europe to central Asia. The wintering grounds are mainly in India although vagrants have been found wintering as far east as Japan, China, Hong Kong, Thailand, Laos, South Korea and Malaysia. Summer vagrants may occur as far north in Europe as Norway.\n</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n \n<p>The black-headed bunting is found in flocks as it forages on grasslands for seeds. They breed in summer, building a nest in a low bush or on the ground. The nest is a cup made of dry grass and lined with hair. The clutch consists of four to six eggs. The eggs hatch after about 13 days and the chicks fledge after about 10 days. Its natural food consists of insects when feeding young, and otherwise seeds. In Bulgaria, the collapse of the drying cotton thistle (<i>Onopordum acanthium</i>) stems on which the birds build their nests has caused high mortality; this is thought to be an example of an ecological trap. In northern Iran, there is a region of range overlap with the red-headed bunting and natural hybrids are common although molecular data indicates that there is considerable genetic divergence between the two species.</p><p>Like the red-headed bunting but unlike many other <i>Emberiza</i> buntings, it has two moults in a year. It undergoes one moult in the winter quarters prior to migrating back to the breeding region, and another after breeding. Young birds fledge with a soft plumage and then moult into a juvenile plumage before migrating and then assume an adult plumage after moulting in their winter quarters.</p><p>In winter their call is a single note tweet or soft <i>zrit</i>. The song consists of a loud series of strophes each made up a high harsh notes that accelerate into a jangling mix with some clear slurred notes interspersed before stopping abruptly.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Photographs, videos and sound recordings on the Internet Bird Collection</li></ul> "
    },
    "black headed cuckooshrike": {
        "id": "b048",
        "name": "Black-headed cuckooshrike",
        "order": "Passeriformes",
        "family": "Campephagidae",
        "genus":"Lalage", "species":"melanoptera",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black-headed cuckooshrike</b> (<i>Lalage melanoptera</i>) is a species of cuckooshrike found in the Indian Subcontinent and Southeast Asia.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2> "
    },
    "black headed gull": {
        "id": "b049",
        "name": "Black-headed Gull",
        "order": "Charadriiformes",
        "family": "Laridae",
        "genus":"Larus", "species":"ridibundus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-headed gull </b> (<i>Chroicocephalus ridibundus</i>) is a small gull that breeds in much of  the Palearctic including Europe and also in coastal eastern Canada. Most of the population is migratory and winters further south, but some birds reside in the milder westernmost areas of Europe. Some black-headed gulls also spend the winter in northeastern North America, where it was formerly known as the common black-headed gull. As is the case with many gulls, it was previously placed in the genus <i>Larus</i>.\n</p><p>The genus name <i> Chroicocephalus</i> is from Ancient Greek <i>khroizo</i>, \"to colour\", and <i>kephale</i>, \"head\". The specific <i>ridibundus</i> is Latin for \"laughing\", from <i>ridere</i> \"to laugh\".</p><p>The black-headed gull displays a variety of compelling behaviours and adaptations. Some of these include removing eggshells from ones nest after hatching, begging coordination between siblings, differences between sexes, conspecific brood parasitism, and extra-pair paternity. They are an overwintering species, found in a variety of different habitats.</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>This gull is 38\u201344\u00a0cm (15\u201317\u00a0in) long with a 94\u2013105\u00a0cm (37\u201341\u00a0in) wingspan. In flight, the white leading edge to the wing is a good field mark. The summer adult has a chocolate-brown head (not black, although does look black from a distance), pale grey body, black tips to the primary wing feathers, and red bill and legs. The hood is lost in winter, leaving just two dark spots. Immature birds have a mottled pattern of brown spots over most of the body. It breeds in colonies in large reed beds or marshes, or on islands in lakes, nesting on the ground. Like most gulls, it is highly gregarious in winter, both when feeding or in evening roosts. It is not a pelagic species and is rarely seen at sea far from coasts.\n</p><p>The black-headed gull is a bold and opportunistic feeder. It eats insects, fish, seeds, worms, scraps, and carrion in towns, or invertebrates in ploughed fields with equal relish. It is a noisy species, especially in colonies, with a familiar \"kree-ar\" call. Its scientific name means <i>laughing gull</i>.\n</p><p>This species takes two years to reach maturity. First-year birds have a black terminal tail band, more dark areas in the wings, and, in summer, a less fully developed dark hood. Like most gulls, black-headed gulls are long-lived birds, with a maximum age of at least 32.9 years recorded in the wild, in addition to an anecdote now believed of dubious authenticity regarding a 63-year-old bird.</p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>To be found over much of Europe, except Spain, Italy and Greece. It is also found in across the Palearctic to Japan and E China. It is an occasional visitor to the east coast of North America.\n</p><p>And also in some Caribbean islands.\n</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<h3><span id=\"Eggshell_removal\">Eggshell removal</span></h3>\n<p>Eggshell removal is a behaviour seen in birds once the chicks have hatched, observed mostly to reduce risk of predation. Removing the eggshell acts as a way of camouflage to avoid predators seeing the nest. The further away egg shells are from the nest, the lower the predation risk. Black-headed gull eggs experience predation from different species of birds, foxes, stoats, and even other black-headed gulls. Although mothers show some form of aggressiveness when a predator is near, in the first 30 minutes, wet chicks can be easily taken by other black-headed gulls after hatching when the parents of the wet chick are distracted.</p><p>Black headed gulls also carry away other objects that do not belong in the nest. The removal of eggshells and other objects is important not only in the incubation period but also during the first few days after the eggs hatch. However, the removal process seems to increase as time goes on. The removal is done by both the male and female parents, normally lasts a few seconds and is done three times a year.</p><p>A black-headed gull is able to differentiate an egg shell from an egg by acknowledging its thin, serrated, white, edge. Therefore, the weight of the egg or eggshell does not play a role when determining its value.</p>\n<h4><span id=\"Earlier_eggshell_removal_hypotheses\">Earlier eggshell removal hypotheses</span></h4>\n<p>Other hypotheses have attempted to explain the survival value of black-headed gulls removing their eggshells from the nest, including:</p>\n<ol><li>The sharp edges of the shells after hatching could harm the chicks</li>\n<li>The eggshell could somehow intrude during the brooding</li>\n<li>The eggshell could slip over the unhatched egg, creating a double shell</li>\n<li>Some of the moist organic material left from the shell could lead to a production of bacteria and mould</li></ol><h3><span id=\"Breeding\">Breeding</span></h3>\n<h4><span id=\"Begging_coordination_between_siblings\">Begging coordination between siblings</span></h4>\n<p>Black-headed gulls feed their young by regurgitating it onto the ground, rather than into each chick one at a time. The parents tend to accommodate their regurgitation amounts for how intense the nest begging is, from both an individual chick or a group of chicks begging together. Chicks who are siblings, have learned this behaviour and begin synchronizing their begging signals to decrease the costs as an individual and increase the benefits as a whole. The rate of parental food regurgitation to chicks increases with begging intensity.</p><p>The amount and response of begging signals differs throughout the nestling period. Usually, there is 3-5 begging events/hour, each lasting around one minute. High intensity begging behaviour appears at the end of the first week in the nest, but the coordination between multiple chicks emerge during the last week of the nestling period. The more siblings present, the more they coordinate their begging while decreasing the number of begging.</p>\n<h4><span id=\"Sex_differences\">Sex differences</span></h4>\n<p>Male chicks have less of a chance of survival when compared to female chicks. Black-headed gulls are a sexually size-dimorphic species, so the larger sex is at a disadvantage when the amount of food sources are low.</p><p>Male birds are more likely to be born in the first egg and female birds are more likely to be born in the third. The position of a female black-headed gull in response to the food available when laying the eggs can predict the offsprings characteristics.</p>\n<h4><span id=\"Conspecific_brood_parasitism\">Conspecific brood parasitism</span></h4>\n<p>Conspecific brood parasitism is a behaviour that occurs when females lay their eggs in another females nest, of the same species. It can reduce the cost of incubation and nestling young by passing it on to another bird. Black-headed gulls usually lay three egg clutches, and the first two are normally larger than the third. The third egg normally has the lowest survival rate, while the first or second are usually the parasitic eggs.</p><p>Most of the egg dumping occurs within the beginning of the egg laying period. The parasitic eggs being laid in another conspecifics nest increases the chance of hatching and may occur because of nest desertion or a nest being taken over by another bird.</p><p>Multiple eggs in a nest from different mothers may also result from intra-specific nest parasitism, joint female nesting, and nest takeover. Intra-specific nest parasitism is a disadvantage to the hosts because the female could end up taking care of the parasitic chicks over her own and therefore neglecting them and reducing their fitness. Another disadvantage for the host is that incubating more chicks than their own takes up more energy.</p>\n<h4><span id=\"Extra-pair_paternity\">Extra-pair paternity</span></h4>\n<p>The rate of extra-pair paternity (EPP) has a large variation between populations of black-headed gulls. It is primarily a context-dependent strategy, meaning not all black headed gulls experience this behaviour. The variation between populations of extra-pair paternity can be explained by the variation it has on the advantages and disadvantages it has on a female, as well, as the variation in pressure on a females choice.</p><p>The differences in the rate of EPP may be determined by multiple different factors: life history traits, ecological factors or different behavioural strategies of males.</p>\n<h4><span id=\"Central.E2.80.93periphery_gradient_within_colonies\"></span><span id=\"Central\u2013periphery_gradient_within_colonies\">Central\u2013periphery gradient within colonies</span></h4>\n<p>Egg-laying can be earlier in Black-headed Gulls nesting in the centre of the colony, with central pairs tending to lay larger eggs, which have a higher hatching success, than pairs nesting at the periphery of the colony. Centrally nesting individuals have also been found to be in better condition and have higher genetic quality.</p>\n<h3><span id=\"Walking_displays\">Walking displays</span></h3>\n<p>Black-headed gulls display both head-bobbing walking (HBW) and non-bobbing walking (NBW). Head-bobbing walking is expressed by a hold phase and a thrust phase. The hold phase in black-headed gulls occurs mainly during the single support phase and is when the bird balances its head to equal the environment. Head-bobbing walking occurs during a seeking type foraging by walking through water and includes benefits such as enhancing motion and pattern detection and gathering depth information from motion parallax during the thrust phase. Non-bobbing walking occurs when black-headed gulls are displaying a waiting behaviour while foraging on flat surfaces.</p>\n<h2><span id=\"Uses\">Uses</span></h2>\n\n<p>The eggs of the black-headed gull are considered a delicacy by some in the UK and are eaten hard boiled.</p>\n<h2><span id=\"Synchronization\">Synchronization</span></h2>\n<p>Observations on the behavior of black-headed gulls show that black-headed gulls individuals synchronize their activity with other black-headed gulls neighbors. Synchronization in black-headed gulls groups is dependent on the distance between the black-headed gulls members.</p><p><br></p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Black-headed gull stamps from many countries at bird-stamps.org</li>\n<li>Ageing and sexing (PDF; 2.0 MB) by Javier Blasco-Zumeta &amp; Gerd-Michael Heinze</li>\n<li>Feathers of Black-headed Gull (Larus ridibundus) at Ornithos.de</li>\n<li>BirdLife species factsheet for <i>Larus ridibundus</i></li>\n<li><cite class=\"citation web\">\"Chroicocephalus ridibundus\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Chroicocephalus+ridibundus&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3DFB02DD9658CC1EC6&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-headed+gull\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Common black-headed gull media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Common+black-headed+gull+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fcommon-black-headed-gull-larus-ridibundus&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-headed+gull\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Black-headed gull photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Larus ridibundus</i> at IUCN Red List maps</li>\n<li>Audio recordings of Black-headed gull on Xeno-canto.</li>\n<li><i>Chroicocephalus ridibundus</i> in the Flickr: Field Guide Birds of the World</li>\n<li>Black-headed gull media from ARKive </li></ul>"
    },
    "black headed ibis": {
        "id": "b050",
        "name": "Black-headed Ibis",
        "order": "Otidiformes",
        "family": "Threskiornithidae",
        "genus":"Therskiornis", "species":"melanocephalus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-headed ibis</b> (<i>Threskiornis melanocephalus</i>), also known as the <b>Oriental white ibis</b>, <b>Indian white ibis</b>, and <b>black-necked ibis</b>, is a species of wading bird of the ibis family Threskiornithidae which breeds in the South- and Southeast Asia from India to the west and as far east as Japan. It is the only native ibis species in its range that has an overall white plumage with a black neck and head. The down-curved beak and legs are also black. Though often referred to as a wetland species, the black-headed ibis forages in a range of natural and man-made habitats. This species of ibis nests only during the rainy season (or monsoon).\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The black-headed ibis is one of several large waterbird species in south and south-east Asia, with adults measuring 65\u201376\u00a0cm in length. The white plumage is starkly contrasted against a conspicuous naked black neck and head, and black down-curved beak. Tails of adults bear light grey ornamental feathers that turn jet black during the breeding season. During the breeding season, bare patches under the wing turn blood-red. The head of some breeding adults gain a blueish tinge, or very rarely have a pink or bright red patch behind the neck. Some breeding adults also develop tufts of white feathers behind the neck, and rarely also get a yellowish colouration on the breast and back. Sexes are identical but juveniles are identifiable from adults in having greyish feathering on the neck and speckled brown-grey feathering on the wings and back. Like storks and spoonbills, it lacks a true voice-producing mechanism and is silent except for ventriloquistic grunts uttered by pairs at the nest.</p>\n<h2><span id=\"Distribution_range_and_habitat\">Distribution range and habitat</span></h2>\n<p>Black-headed ibis are native to the following countries: Bangladesh, Cambodia, China, Hong Kong, India, Indonesia, Malaysia, Myanmar, Nepal, Pakistan, Philippines, Russian Federation, Sri Lanka, Thailand and Viet Nam. They are migratory or vagrant in Japan, Republic of Korea, Lao People's Democratic Republic and Mongolia. The species is a widespread breeding bird in India, Sri Lanka, Nepal and Myanmar, and has declined considerably to few locations or breeding colonies in Cambodia, Indonesia, Malaysia, Thailand, and Viet Nam. The most rapid decline in recent times is suspected to be the population in Sumatra.</p><p>The black-headed ibis is very versatile being able to use a large variety of natural and man-made habitats. These include freshwater and salt-water marshes, lakes and ponds, as also rice fields, freshly ploughed crop fields, irrigation canals, riversides, reservoirs, urban lakes, open sewage gutters, grazing lots, and garbage dumping sites. Ibis alter use of varied preferred foraging habitats by season in agricultural landscapes such as in south-western Uttar Pradesh in India. In summer, they largely use and prefer natural marshes and fallow fields, but in the monsoon, spread out more evenly to also use a variety of agricultural fields. In landscapes that have more forests and rocky hills as in southern Rajasthan, wetlands are the preferred habitats year-round. Open sewage lines are used more during the dry summers, and ibis increase the use of grazing lands during the monsoon.\n</p><p>It nests in heronry colonies near wetlands. It builds a platform nest of sticks, lined with grass and threads. </p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 200px\">\n\t\t<li class=\"gallerybox\" style=\"width: 200px\">\n\t\t<li class=\"gallerybox\" style=\"width: 200px\">\n\t\t<li class=\"gallerybox\" style=\"width: 200px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li>Grimmett, Inskipp and Inskipp; <i>Birds of India</i>. <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li></ul> "
    },
    "black headed jay": {
        "id": "b051",
        "name": "Black-headed Jay",
        "order": "Passeriformes",
        "family": "Corvidae",
        "genus":"Garrulus", "species":"lanceolatus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black-headed jay</b> or <b>lanceolated jay</b> (<i>Garrulus lanceolatus</i>) is roughly the same size as its close relative the Eurasian jay, but a little more slender overall except for the bill which is slightly shorter and thicker. The top of the head is black and it has a more obvious crest too and a longer tail.\n</p>\n\n<p>It ranges from eastern Afghanistan eastwards, across the Himalayas, from India to Nepal and Bhutan. It occurs in wooded country with large areas of open ground rather than dense forest. It also occurs in some cultivated areas and even near villages as long as there are enough trees and scrubland nearby.\n</p><p>It feeds both on the ground and in trees, and takes virtually the same wide range of plant and animal foods as its close relative, including eggs and nestlings, as well as scraps near human habitation.\n</p><p>It nests in trees and suitable bushes and in this resembles the Eurasian jay in every respect. There are usually 3\u20135 eggs incubated over 16 days. Both parents feed the young.\n</p><p>The voice is very similar to its close relative too and is most often a loud screech but with longer pauses between.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Avibase</li></ul>"
    },
    "black headed shrike babbler": {
        "id": "b052",
        "name": "Black-headed Shrike-babbler",
        "order": "Passeriformes",
        "family": "Vireonidae",
        "genus":"Pteruthius", "species":"rufiventer",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-headed shrike-babbler</b> (<i>Pteruthius rufiventer</i>) is a bird species traditionally placed with the Old World babblers in the family Timaliidae. However, it might be one of the few Eurasian vireos (Vireonidae).\n</p>\n\n<p>It is found in an area that ranges from eastern Nepal to northwestern Vietnam. Its natural habitat is subtropical or tropical moist montane forests.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p>"
    },
    "black hooded oriole": {
        "id": "b053",
        "name": "Black-hooded Oriole",
        "order": "Passeriformes",
        "family": "Oriolidae",
        "genus":"Oriolus", "species":"xanthornus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-hooded oriole</b> (<i>Oriolus xanthornus</i>) is a member of the oriole family of passerine birds and is a resident breeder in tropical southern Asia from India and Sri Lanka east to Indonesia.\n</p><p>It is a bird of open woodland and cultivation. The nest is built in a tree, and contains two eggs. Its food is insects and fruit, especially figs, found in the tree canopies where they spend much of their time.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The black-hooded oriole was formally described by the Swedish naturalist Carl Linnaeus in 1758 in the tenth edition of his <i>Systema Naturae</i> under the binomial name <i>Coracias xanthornus</i>. Linnaeus was confused by the similar appearance of the unrelated New World orioles and the Old World orioles. In his entry for <i>Coracias xanthornus</i> he cited a descriptions of birds occurring in Jamaica by Mark Catesby and Patrick Browne as well as an illustration by George Edwards of a bird occurring in Bengal. Linnaeus specified the habitat as \"America\" but Bengal is now the recognised type location. Also in the 10th edition Linnaeus listed <i>Sturnus luteolus</i> among the starlings and cited another illustration by Edwards. He renamed this species as <i>Oriolus melanocephalus</i> in the  12th edition of 1766. All three binomial names are now believed to refer to the black-hooded oriole.</p><p>The current genus <i>Oriolus</i> was erected by Linnaeus in 1766 in the twelfth edition of his <i>Systema Naturae</i>. The name is from Medieval Latin <i>oryolus</i> for the Eurasian golden oriole which in turm comes from the Latin word <i>aureolus</i> for \"golden\". The specific epithet <i>xanthornus</i> is from the Ancient Greek <i>xanthos</i> \"yellow\" and <i>ornis</i> \"bird\".</p><p>Alternate names for the black-hooded oriole include the Asian black-headed oriole, black-headed oriole, Indian black-headed oriole and Oriental black-headed oriole.\n</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Five subspecies are recognized:</p>\n<ul><li><i>O. x. xanthornus</i> - <small>(Linnaeus, 1758)</small>: Found from northern India to northern Malay Peninsula and Indochina</li>\n<li><i>O. x. maderaspatanus</i> - <small>Franklin, 1831</small>: Originally described as a separate species. Found in central and southern India</li>\n<li><i>O. x. ceylonensis</i> - <small>Bonaparte, 1850</small>: Originally described as a separate species. Found in Sri Lanka</li>\n<li><i>O. x. reubeni</i> - <small>Abdulali, 1977</small>: Found on the Andaman Islands</li>\n<li><i>O. x. tanakae</i> - <small>Kuroda, 1925</small>: Found on north-eastern Borneo</li></ul><h2><span id=\"Description\">Description</span></h2>\n<p>The male is striking, with the typical oriole black and yellow colouration. The plumage is predominantly yellow, with a solid black hood, and black also in the wings and tail centre.\n</p><p>The female black-hooded oriole is a drabber bird with greenish underparts, but still has the black hood. Young birds are like the female, but have dark streaking on the underparts, and their hood is not solidly black, especially on the throat.\n</p><p>The black head of this species is an obvious distinction from the Indian golden oriole, which is a summer visitor to northern India. Orioles can be shy, and even the male may be difficult to see in the dappled yellow and green leaves of the canopy.\n</p><p>The black-hooded oriole's flight is somewhat like a thrush, strong and direct with some shallow dips over longer distances.\n</p><p>While foraging the species uses foliage-gleening, wood-gleening, or sallying methods.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"Relationship_to_humans\">Relationship to humans</span></h2>\n<p>The black hooded oriole lives in common contact with humans in rural and urban India.\n</p><p>A folk tale from Bengal has it that an unfortunate girl of a merchant family was tortured by her mother-in-law. Troubled by various incidents she smeared herself with turmeric paste and covered herself with a sooty earthen pot and killed herself. A goddess resurrected her as a black hooded oriole and a Bengali name for the bird is \"benebou\" or merchant's wife while another name is \"haldi pakhi\" or turmeric bird.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Xeno-canto: audio recordings of the black-hooded oriole</li></ul>"
    },
    "black lored tit": {
        "id": "b054",
        "name": "Black-lored Tit",
        "order": "Passeriformes",
        "family": "Paridae",
        "genus":"Machlolophus", "species":"xanthogenys",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Himalayan black-lored tit</b> (<i>Machlolophus xanthogenys</i>), also known as simply <b>black-lored tit</b>, is a passerine bird in the tit family Paridae. The yellow-cheeked tit is probably its closest relative, and it may also be related to the yellow tit. These three tits almost certainly form a distinct lineage, as indicated by morphology, and mtDNA cytochrome <i>b</i> sequence analysis (Gill <i>et al.</i>, 2005).\n</p><p><i>Lore</i> in the bird's common name refers to the area between eye and bill.</p><p>This species is a resident breeder along the Himalayas in the Indian Subcontinent.\n</p><p>It is an active and agile feeder, taking insects and spiders from the forest canopy, and sometimes fruit.\n</p><p>It uses woodpecker or barbet holes for nesting, and will also excavate its own hole or use man-made sites.\n</p><p>The Himalayan black-lored tit was formerly one of the many species in the genus <i>Parus</i> but was moved to <i>Machlolophus</i> after a molecular phylogenetic analysis published in 2013 showed that the members of the new genus formed a distinct clade.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Gill, Frank B.; Slikas, Beth &amp; Sheldon, Frederick H. (2005): Phylogeny of titmice (Paridae): II. Species relationships based on sequences of the mitochondrial cytochrome-<i>b</i> gene. <i>Auk</i> <b>122</b>: 121\u2013143. DOI: 10.1642/0004-8038(2005)122[0121:POTPIS]2.0.CO;2 HTML abstract</li>\n<li>Grimmett, Richard; Inskipp, Carol, Inskipp, Tim &amp; Byers, Clive (1999): <i>Birds of India, Pakistan, Nepal, Bangladesh, Bhutan, Sri Lanka, and the Maldives</i>. Princeton University Press, Princeton, N.J.. <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li>\n<li>Harrap, Simon &amp; Quinn, David (1996): <i>Tits, Nuthatches &amp; Treecreepers</i>. Christopher Helm, London. <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-7136-3964-4</li>\n<li>Rasmussen, P.C., and J.C. Anderton. 2005. Birds of South Asia. The Ripley guide. Volume 2: attributes and status. Smithsonian Institution and Lynx Edicions, Washington D.C. and Barcelona.</li></ul>\n<p><br></p> "
    },
    "black naped monarch": {
        "id": "b055",
        "name": "Black-naped Monarch",
        "order": "Passeriformes",
        "family": "Monarchidae",
        "genus":"Hypothymis", "species":"azurea",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-naped monarch</b> or <b>black-naped blue flycatcher</b> (<i>Hypothymis azurea</i>) is a slim and agile passerine bird belonging to the family of monarch flycatchers found in southern and south-eastern Asia. They are sexually dimorphic, with the male having a distinctive black patch on the back of the head and a narrow black half collar (\"necklace\"), while the female is duller with olive brown wings and lacking the black markings on the head. They have a call that is similar to that of the Asian paradise flycatcher, and in tropical forest habitats, pairs may join mixed-species foraging flocks. Populations differ slightly in plumage colour and sizes.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The black-naped monarch was described by the French polymath Georges-Louis Leclerc, Comte de Buffon in 1779 in his <i>Histoire Naturelle des Oiseaux</i>. The bird was also illustrated in a hand-coloured plate engraved by Fran\u00e7ois-Nicolas Martinet in the <i>Planches Enlumin\u00e9es D'Histoire Naturelle</i> which was produced under the supervision of Edme-Louis Daubenton to accompany Buffon's text.  Neither the plate caption nor Buffon's description included a scientific name but in 1783 the Dutch naturalist Pieter Boddaert coined the binomial name <i>Muscicapa azurea</i> in his catalogue of the <i>Planches Enlumin\u00e9es</i>. Buffon specified that his specimen had been collected in the Philippines, but in 1939 the American ornithologist James L. Peters restricted the type locality to Manila on the island of Luzon. The black-naped monarch is now placed in the genus <i>Hypothymis</i> was introduced by the German zoologist Friedrich Boie in 1826 with the black-naped monarch as the type species. The genus name is from the Ancient Greek <i>hupothumis</i>, the name of an unidentified bird mentioned by the playwright Aristophanes. The specific epithet <i>azurea</i> is from the Medieval Latin <i>azureus</i> meaning \"azure-coloured\" or \"azure-blue\".</p><p>Alternate names for the black-naped monarch include black-naped blue monarch and black-naped monarch flycatcher. Some authorities  separate two former subspecies, <i>H. a. blasii</i> (Banggai Island) and <i>H. a. puella</i> (Sulawesi), and place them as subspecies of the pale-blue monarch (<i>Hypothymis puella</i>).</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Twenty-three subspecies are recognized:</p>\n<ul><li><i>H. a. styani</i> - <small>(Hartlaub, 1899)</small>: Originally described as a separate species in the genus <i>Ficedula</i>, found from India and Nepal to southeast China and Vietnam. The abdomen is whitish in males.</li>\n<li><i>H. a. oberholseri</i> - <small>Stresemann, 1913</small>: Found in Taiwan</li>\n<li><i>H. a. ceylonensis</i> - <small>Sharpe, 1879</small>: Originally described as a separate species, found in Sri Lanka. The males lack the black necklace.</li>\n<li><i>H. a. tytleri</i> - <small>(Beavan, 1867)</small>: Originally described as a separate species in the genus <i>Myiagra</i>. Found in the Andaman Islands. The abdomen of males is blue.</li>\n<li><i>H. a. idiochroa</i> - <small>Oberholser, 1911</small>: Found on Car Nicobar (northern Nicobar Islands). The abdomen of males is white tinged with blue.</li>\n<li><i>H. a. nicobarica</i> - <small>Bianchi, 1907</small>: Found on southern Nicobar Islands. The abdomen of males is white tinged with blue.</li>\n<li><i>H. a. montana</i> - <small>Riley, 1929</small>: Found in northern and central Thailand</li>\n<li><i>H. a. galerita</i> - <small>(Deignan, 1956), 1929</small>: Found in southwest and southeast Thailand</li>\n<li><i>H. a. forrestia</i> - <small>Oberholser, 1911</small>: Found in Mergui Archipelago (off western Myanmar)</li>\n<li><i>H. a. prophata</i> - <small>Oberholser, 1911</small>: Found on Malay Peninsula, Sumatra and Borneo</li>\n<li><i>H. a. javana</i> - <small>Chasen &amp; Kloss, 1929</small>: Found on Java and Bali (Indonesia)</li>\n<li><i>H. a. penidae</i> - <small>Meise, 1942</small>: Found on Nusa Penida (near Bali in the Lesser Sundas)</li>\n<li><i>H. a. karimatensis</i> - <small>Chasen &amp; Kloss, 1932</small>: Found on Karimata Island (off western Borneo)</li>\n<li><i>H. a. opisthocyanea</i> - <small>Oberholser, 1911</small>: Found on Anambas Islands (in the South China Sea)</li>\n<li><i>H. a. gigantoptera</i> - <small>Oberholser, 1911</small>: Found on Natuna Besar (Natuna Islands, South China Sea)</li>\n<li><i>H. a. consobrina</i> - <small>Richmond, 1902</small>: Originally described as a separate species, found on Simeulue (off north-western Sumatra)</li>\n<li><i>H. a. leucophila</i> - <small>Oberholser, 1911</small>: Found on Siberut (off western Sumatra)</li>\n<li><i>H. a. richmondi</i> - <small>Oberholser, 1911</small>: Found on Enggano Island (off south-western Sumatra)</li>\n<li><i>H. a. abbotti</i> - <small>Richmond, 1902</small>: Originally described as a separate species, found on Reusam and Babi Islands (off north-western Sumatra)</li>\n<li><i>H. a. symmixta</i> - <small>Stresemann, 1913</small>: Found on western and central Lesser Sundas</li>\n<li><b>Philippine black-naped monarch</b> (<i>H. a. azurea</i>) - <small>(Boddaert, 1783)</small>: Also known as the <b>black-capped monarch</b> and <b>Philippine black-naped blue monarch</b>. Found in Philippines (except Camiguin Sur Island)</li>\n<li><i>H. a. aeria</i> - <small>Bangs &amp; Peters, JL, 1927</small>: Originally described as a separate species, found on Maratua Island (off eastern Borneo)</li>\n<li><i>H. a. catarmanensis</i> - <small>Rand &amp; Rabor, 1969</small>: Found on Camiguin Sur Island (southern Philippines)</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>The adult male black-naped monarch is about 16\u00a0cm long, and is mainly pale azure blue apart from a whitish lower belly.  It has a black nape and a narrow black gorget. The female is duller and lacks the black markings. Its wings and back are grey-brown. However, several geographically separated breeding populations differ in the extent and shade of markings. The Indian peninsula  has subspecies <i>H. a. styani</i> (which subsumes <i>H. a. sykesi</i> of Stuart Baker), in which males have very distinct black markings and a whitish abdomen. Males of the Sri Lankan race <i>H. a. ceylonensis</i> lack the black nape and gorget and the shade is more purplish. The subspecies of the Andaman Islands, <i>H. a. tytleri</i>, has the underparts blue grey. The form on Car Nicobar Island, <i>H. a. idiochroa</i>, has a greyish white belly, while <i>H. a. nicobarica</i> from the southern Nicobars has a smaller and finer bill. The colour of the gape is yellowish to green.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The black-naped monarch breeds across tropical southern Asia from India and Sri Lanka east to Indonesia and the Philippines. This species is usually found in thick forests and other well-wooded habitats.\n</p><p>The calls are a sharp and abrupt <i>skrip</i>.\nThe main breeding season in India is in summer from May to July. Two to three eggs are laid in a cup nest placed in the fork of a tree. The nest is decorated with spider-egg cases.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<p>The black-naped monarch has short legs and sits very upright whilst perched prominently, like a shrike. It is insectivorous, often hunting by flycatching. When alarmed or alert, the nape feathers are raised into a pointed crest. They join mixed-species foraging flocks, being among the most significant members of such flocks in the Western Ghats, and are active in the understory of forest canopies. A study in Sri Lanka showed that they are affected by human disturbance causing them to recede from disturbed edges by about 75 m.</p><p>Although they are largely residents, local seasonal movements are known. The breeding season in India is March to August and the nest is a neat cup placed in a fork. The cup is lined with filaments of webbing and fungi including those of the genus <i>Marasmius</i> which are known to produce antibiotics and may benefit the birds by protecting the young from infection. The nest is built by the female while the male guards. The typical clutch is three eggs, which both parents incubate and both feed the young, which hatch after about 12 days.</p><p>The webs of large spiders such as <i>Nephila maculata</i> have been known to trap the bird. An astrovirus was detected in a black-naped monarch in Cambodia, a virus that was earlier unknown from passerines. The feather mite <i>Proterothrix hypothymis</i> (Pterodectinae: Protophyllodidae) has been described from black-naped monarchs in Vietnam.</p>\n\n\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Photos and videos</li>\n<li>Hua-Hsiang Chen (2009). \"A Preliminary Study on Nest Site Selection and Nest Success of the Black-naped Blue Monarch (<i>Hypothymis azurea</i>) in Linnei Township and Douliu hilly area, Yunlin County\". Thesis. Taiwan. <span>(in Chinese)</span></li></ul> "
    },
    "black naped oriole": {
        "id": "b056",
        "name": "Black-naped Oriole",
        "order": "Passeriformes",
        "family": "Oriolidae",
        "genus":"Oriolus", "species":"chinensis",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black-naped oriole</b> (<i>Oriolus chinensis</i>) is a passerine bird in the oriole family that is found in many parts of Asia. There are several distinctive populations within the wide distribution range of this species and in the past the slender-billed oriole (<i>Oriolus tenuirostris</i>) was included as a subspecies. Unlike the Indian golden oriole which only has a short and narrow eye-stripe, the black-naped oriole has the stripe broadening and joining at the back of the neck. Males and females are very similar although the wing lining of the female is more greenish. The bill is pink and is stouter than in the golden oriole.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>In 1760 the French zoologist Mathurin Jacques Brisson included a description of the black-naped oriole in his <i>Ornithologie</i> based on a specimen that he mistakenly believed had been collected in the former French colony of Cochinchina in what is now southern Vietnam. He used the French name <i>Le loriot de la Cochinchine</i> and the Latin <i>Oriolus Cochinsinensis</i>. Although Brisson coined Latin names, these do not conform to the binomial system and are not recognised by the International Commission on Zoological Nomenclature. When in 1766 the Swedish naturalist Carl Linnaeus updated his <i>Systema Naturae</i> for the twelfth edition, he added 240 species that had been previously described by Brisson. One of these was the black-naped oriole. Linnaeus included a brief description, coined the current binomial name <i>Oriolus chinensis</i> and cited Brisson's work. The type location was subsequently corrected to Manila in the Philippines.</p><p>The evolutionary history of this group of orioles is complex and there may be more cryptic species within the group. The subspecies are very closely related and the group forms a clade in which the Eurasian oriole and Indian golden oriole are also nested.</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Twenty subspecies are recognized:</p>\n<ul><li><i>O. c. diffusus</i> - <small>Sharpe, 1877</small>: Originally described as a separate species. Found in the eastern Palearctic</li>\n<li><i>O. c. andamanensis</i> - <small>Beavan, 1867</small>: Originally described as a separate species. Found on the Andaman Islands</li>\n<li><i>O. c. macrourus</i> - <small>Blyth, 1846</small>: Originally described as a separate species. Found on the Nicobar Islands</li>\n<li><i>O. c. maculatus</i> - <small>Vieillot, 1817</small>: Originally described as a separate species. Found on the Malay Peninsula, Sumatra, Belitung, Bangka Island, Nias, Java, Bali and Borneo</li>\n<li><i>O. c. mundus</i> - <small>Richmond, 1903</small>: Originally described as a separate species. Found on Simeulue and Nias Is.</li>\n<li><i>O. c. sipora</i> - <small>Chasen &amp; Kloss, 1926</small>: Found on Sipora (off western Sumatra)</li>\n<li><i>O. c. richmondi</i> - <small>Oberholser, 1912</small>: Found on Siberut and Pagi Island (off western Sumatra)</li>\n<li><i>O. c. lamprochryseus</i> - <small>Oberholser, 1917</small>: Found on Masalembu and Keramian Islands (Java Sea)</li>\n<li><i>O. c. insularis</i> - <small>Vorderman, 1893</small>: Originally described as a separate species. Found on Sapudi, Raas and Kangean Islands (northeast of Java)</li>\n<li><i>O. c. melanisticus</i> - <small>Meyer, AB &amp; Wiglesworth, 1894</small>: Originally described as a separate species. Found on Talaud Islands (south of the Philippines)</li>\n<li><i>O. c. sangirensis</i> - <small>Meyer, AB &amp; Wiglesworth, 1898</small>: Found on the Sangihe Islands (off north-eastern Sulawesi)</li>\n<li><i>O. c. formosus</i> - <small>Cabanis, 1872</small>: Originally described as a separate species. Found on Siau, Tahulandang, Ruang, Biaro and Mayu Islands (off north-eastern Sulawesi)</li>\n<li><i>O. c. celebensis</i> - <small>(Walden, 1872)</small>: Originally described as a separate species. Found on Sulawesi and nearby islands</li>\n<li><i>O. c. frontalis</i> - <small>Wallace, 1863</small>: Originally described as a separate species. Found on Banggai and Sula Islands (east of Sulawesi)</li>\n<li><i>O. c. stresemanni</i> - <small>Neumann, 1939</small>: Found on Peleng (off eastern Sulawesi)</li>\n<li><i>O. c. boneratensis</i> - <small>Meyer, AB &amp; Wiglesworth, 1896</small>: Originally described as a separate species. Found on Bonerate, Djampea and Kalao Islands (Selayar Islands)</li>\n<li><i>O. c. broderipi</i> - <small>Bonaparte, 1850</small>: Originally described as a separate species. Found on Lombok, Sumba, Sumbawa, Flores, and Alor Island (Lesser Sunda Islands)</li>\n<li><i>O. c. chinensis</i> - <small>Linnaeus, 1766</small>: Found on Palawan, Luzon, Mindoro and satellite islands (western and northern Philippines)</li>\n<li><i>O. c. yamamurae</i> - <small>Kuroda Sr, 1927</small>: Found on the Visayan Islands, Mindanao and Basilan (central and southern Philippines)</li>\n<li><i>O. c. suluensis</i> - <small>Sharpe, 1877</small>: Found in the Sulu Archipelago (south-western Philippines)</li></ul>\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>The black-naped oriole is medium-sized and overall golden with a strong pinkish bill and a broad black mask and nape. The adult male has the central tail feathers tipped yellow and the lateral ones are more broadly yellow. The female has the mantle colour more greenish or olive. The juvenile has a streaked underside. The nestling has dull greenish with brown streaks. The head and nape are more yellowish and the undertail coverts are yellow. Several variations exist in the populations that have been separated as subspecies.</p><p>The subspecies in the Andamans, <i>O. c. andamanensis</i> has all black wings while <i>O. c. macrourus</i> of the Nicobars has a very broad nape band so that only the top of the head is yellow. The wings are all black with a yellow primary covert patch. The calls of the Andaman and the Nicobar subspecies are said to be quite different, the latter having a more modulated call note. In the Southeast Asian populations some geographic trends include a reduction of yellow on the forehead and a decreased brightness in the yellow plumage from north to south. Females from southern populations are more greenish on the back and tail and there are no yellow spots on the tips of the secondaries as in northern populations.</p><p>The usual call is a nasal <i>niee</i> or <i>myaa</i> and the song (<i>diffusus</i>) is a fluty <i>iwee wee wee-leeow</i>. They have a dipping flight.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>Subspecies <i>diffusus</i> breeds in eastern Siberia, Ussuriland, northeastern China, Korea and northern Vietnam and is widespread across India during winter, mainly in the northeastern parts and in the peninsular region and also found in Bangladesh. The population in the Andaman and Nicobar Islands are resident. In winter, populations breeding in eastern Asia spend the winter in the tropical areas of Southeast Asia such as Thailand and Myanmar. Subspecies <i>diffusus</i> is an uncommon migrant in many parts of South India and very rare migrant to Sri Lanka and are most regularly seen in the Western Ghats. In Singapore they are believed to have established as breeders only in the 1920s and are today common even within gardens in the city. In the 1880s they were considered rare. At the present time, orioles are fairly common in Singapore.\n</p><p>The black-naped oriole is found in forests, gardens and plantations. It feeds on berries and insects in the canopy.\n</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n\n<p>Black-naped orioles have been recorded to feed on a range of berries including <i>Trema orientalis</i>, <i>Ficus</i> and others apart from insects. It has been suggested that they may have aided in the dispersal of <i>Ficus</i> species into the island of Krakatoa where they were also among the early pioneer species. In India it has been noted to take nectar from large flowers such as those of <i>Salmalia</i> and <i>Erythrina</i>. They can sometimes be nest predators on smaller birds. The breeding season is April to June (January\u2013March in the Nicobars) and the nest is a deep cup in a fork of a tree. The eggs, two to three, are salmon pink with reddish spots and darker blotches The nests are often built in the vicinity of the nest of a black drongo. Two or three nests may be built by the female and one is finally chosen for laying eggs. Males may sometimes sit beside the unused nests. Incubation is by the female alone and the eggs hatch after 14 to 16 days and the chicks fledge after another two weeks. Females stay closer to the nest, taking part in nest sanitation by removal of fecal sacs, driving away predators and feeding the young. The males take a more active role in feeding and guarding. Eurasian tree sparrows and black bulbuls may sometimes use abandoned nests. Nest predators include crows, treepies and hawks. In many parts of Southeast Asia, they are trapped and sold in the bird trade.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Pictures and media</li>\n<li>Peregrine falcon preying on black-naped oriole</li></ul>"
    },
    "black naped woodpecker": {
        "id": "b057",
        "name": "Black-naped Woodpecker",
        "order": "Piciformes",
        "family": "Picidae",
        "genus":"Picus", "species":"canus",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>grey-headed woodpecker</b> (<i>Picus canus</i>), also known as the <b>grey-faced woodpecker</b>, is a Eurasian member of the woodpecker family, Picidae. Along with the more commonly found European green woodpecker and the Iberian green woodpecker, it is one of three closely related sister species found in Europe. Its distribution stretches across large parts of the central and Eastern Palaearctic, all the way to the Pacific Ocean.\n</p><p>The grey-headed woodpecker is more demanding than the European green woodpecker in terms of its habitat. It prefers old mixed coniferous forest with a high proportion of dead trees, feeding primarily on ants, although not being as exclusively dependent on this group as the green woodpecker. The grey-headed woodpecker's nest is typically excavated into dead or severely damaged trees.\n</p><p>In the majority of areas for which population numbers are available, the grey-headed woodpecker is in decline. IUCN's <i>Least Concern</i> rating is primarily based on the large distribution of the species.</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The grey-headed woodpecker was formally described by the German naturalist Johann Friedrich Gmelin in 1788 in the 13th edition of the <i>Systema Naturae</i> under the current binomial name <i>Picus canus</i>. The type locality is Norway. The specific epithet <i>canus</i> is the Latin for \"grey\".</p><p>Eleven subspecies are recognised.</p>\n<ul><li><i>P. c. canus</i> Gmelin, JF, 1788 \u2013 north and central Europe to west Siberia</li>\n<li><i>P. c. jessoensis</i> Stejneger, 1886 \u2013 east Siberia to northeast China, Korea and north Japan (includes <i>griseoviridis</i>)</li>\n<li><i>P. c. kogo</i> (Bianchi, 1906) \u2013 central China</li>\n<li><i>P. c. guerini</i> (Malherbe, 1849) \u2013 north central and east central China</li>\n<li><i>P. c. sobrinus</i> Peters, JL, 1948 \u2013 southeast China and northeast Vietnam</li>\n<li><i>P. c. tancolo</i> (Gould, 1863) \u2013 Hainan Island (off southeast China) and Taiwan</li>\n<li><i>P. c. sordidior</i> (Rippon, 1906) \u2013 southeast Tibet and southwest China to northeast Myanmar</li>\n<li><i>P. c. sanguiniceps</i> Baker, ECS, 1926 \u2013 northeast Pakistan to north India and west Nepal</li>\n<li><i>P. c. hessei</i> Gyldenstolpe, 1916 \u2013 Nepal and northeast India to Myanmar and Indochina</li>\n<li><i>P. c. robinsoni</i> (Ogilvie-Grant, 1906) \u2013 west Malaysia</li>\n<li><i>P. c. dedemi</i> (van Oort, 1911) \u2013 Sumatra</li></ul><p>The subspecies <i>P. c. guerini</i> and <i>P. c. dedemi</i> are sometimes recognised as separate species, the black-naped woodpecker and the Sumatran woodpecker.</p><p>There is evidence for hybridisation between grey-headed and European green woodpeckers. However, these seem extremely rare. It appears that the female partner was invariably a grey-headed woodpecker. Nothing has been reported concerning the fertility of such hybrid offspring. Their plumage resembles a grey-headed woodpecker more closely, but with a red parting on the head, a reddish nape and a brighter iris, while some were conspicuous for their dark coloration.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The grey-headed woodpecker is 25\u201326\u00a0cm (9.8\u201310.2\u00a0in) in length, has a wingspan of 38\u201340\u00a0cm (15\u201316\u00a0in) and weighs around 125\u00a0g (4.4\u00a0oz). The male of the nominate subspecies has a grey head with a red forecrown. There is a black line across the lores and a narrow black moustache stripe. The back, <dfn id=\"\"><span title=\"See entry at: Glossary of bird terms \u00a7\u2006scapulars\">scapulars</span></dfn> and wing <dfn id=\"\"><span title=\"See entry at: Glossary of bird terms \u00a7\u2006coverts\">coverts</span></dfn> are green. The breast and underbody are pale grey. The folded primaries are barred brown-black on grey-white. The female lacks the red forecrown but has fine black streaks on the crown. The widely distributed <i>Picus canus jessoensis</i> is very similar to the nominate subspecies but is slightly greyer and less green. The Chinese subspecies <i>Picus canus guerini</i> has a black nape patch and a greenish underbody. The subspecies <i>Picus canus hessei</i> is similar to <i>guerini</i> but is more golden green above and a deeper green below. The race on the island of Sumatra, <i>Picus canus dedemi</i>, differs markedly from the other subspecies in having reddish rather than green above, and red, green and grey below. It has a black crown and nape. Specimens of the more widespread of the two Eastern subspecies, <i>P. c. jessoensis</i>, are usually a little larger and heavier than individuals from the type locality. On average, it is somewhat smaller and lighter than the European green woodpecker. In the field, this distinction in size is difficult to make. Its size is approximately that of a Eurasian collared dove.\n</p><p>Grey-headed woodpeckers have uniformly olive green upperparts, transitioning across the neck to a light grey, the head being that latter colour. The typical woodpecker markings are small and not particularly conspicuous. It has a grey head with black moustache, and the male has a red crown. It has a shorter neck, slimmer bill and slightly rounder head than the green woodpecker.</p>\n<h3><span id=\"Sounds\">Sounds</span></h3>\n<p>Calls made by the European green woodpecker and grey-headed woodpecker resemble each other. The far-carrying territorial song of the grey-headed woodpecker is more melodic and cleaner than the explosive \"laughter\" of the green woodpecker. The call series consists of ten to fifteen utterances of declining pitch and gradual slowing. The verse may appear melancholic and \"dying\". The territorial song of females is similar, but somewhat quieter, less melodious, but more croaky and often shorter.</p><p>Besides these partner-specific vocalisations, aggressive noises can be heard from both sexes, but more often the male. Typical are individual, sharp <i>kuek</i> sounds that may, with increasing irritation, be placed in sequence and be continued as <i>kek</i>. A single <i>kuek</i> may also be a predator warning, as begging nestlings will immediately fall silent if this call is made by either parent. Individual drumming activity by grey-headed woodpeckers can be quite varied, but they drum on more occasions than European green woodpeckers. Drumming frequence can be 20 Hertz, with a \"drum roll\" lasting up to 40 beats, or two seconds. Both sexes drum, but the female less often than the male, and usually more quietly and shorter. Grey-headed woodpeckers often continue to use the same well-resonating drum sites for years \u2013 these can even be at a considerable distance from the nest. Grey-headed woodpeckers often use metal covers on masts and roofs as drumming substrate due to their favourable resonance characteristics.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The grey-headed woodpecker is found in wide parts of Central, Northern and Eastern Europe, as well as a wide belt south of the boreal coniferous forests across Asia all the way to the Pacific coast, Sakhalin and Hokkaid\u014d. Its northern limit is at the border between closed coniferous and mixed forest; the southern limit is where tree steppe transitions to treeless shrubby steppe. In East Asia, the species is most differentiated, and south of Manchuria covers the Korean Peninsula, as well as large parts of eastern China and Farther India, the mountain forests of the Malay Peninsula.</p><p>In Europe, the type subspecies breeds within a wide belt from western France to the Urals. It has settled medium latitudes of Scandinavia as well as Central, Eastern and Southern Europe. There is contradictory information regarding its occurrence in Turkey. Most likely, several hundred pairs breed in Mittelgebirge habitats of the Pontic Mountains. The species is absent from the North German Plain, British Isles, Iberian Peninsula, and Mediterranean islands. In Italy, it is confined to the northernmost parts.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>Grey-headed woodpeckers breed in May and lay five to ten eggs which are brought up by both parents. The young hatch after 15\u201317 days, and fledge in 24\u201325 days.</p>\n<h3><span id=\"Food_and_feeding\">Food and feeding</span></h3>\n\n<p>The grey-headed woodpecker is a somewhat less specialised ant hunter than the European green woodpecker. In its foraging strategy it is intermediate between many <i>Dendrocopos</i> species on the one hand, and the often ant-specific members of the genus <i>Picus</i>. This reduced ant specialisation of the grey-headed woodpecker allows it to be sympatric with European green woodpeckers and even to breed at about 100 meters from them.</p><p>Nonetheless, ants and their immatures make up the lion's share of the grey-headed woodpecker's diet, particularly in spring and summer. Wood ants of the genus <i>Formica</i> as well as members of <i>Lasius</i> and Myrmicinae such as <i>Myrmica</i> spp. predominate, and with termites may make up 90% of the diet. Besides those, caterpillars, crickets, bark and wood beetle larvae, flies, spiders and lice are part of the diet. In late autumn and early winter, grey-headed woodpeckers switch to including significant amounts of vegetable matter, such as berries and other fruits, in their diets on a regular basis.</p>\n\n<h2><span id=\"Conservation_status\">Conservation status</span></h2>\n<p>The grey-headed woodpecker is difficult to record, as isolated breeding pairs don't often call. These are therefore easily overlooked, and population records have corresponding gaps. It is probable that European populations, especially at the north-western margin of the range, have receded in numbers and distribution. Since the 1990s, populations seem to be recovering as a result of mild winters. Globally, there is a slight reduction in population numbers, but insufficiently so for an elevated threat status. The species is therefore considered safe.</p><p>The observation of stable or slightly increasing populations in Europe may, however, be based solely on greater effort in recording the species. The overall European population is estimated at 180,000 to 320,000 breeding pairs. Key populations are found in European parts of Russia as well as Romania. Germany has around 15,000 pairs, Austria approximately 2,500 and Switzerland some 1,500. There are no summary figures for populations outside Europe.\n</p><p>As the grey-headed woodpecker prefers undisturbed and ancient forests with natural cohort structure as well as riparian forests for breeding, the destruction of such habitat is the greatest threat to the species.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Gorman, Gerard (2004): Woodpeckers of Europe: A Study of the European Picidae. Bruce Coleman, UK. <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a01-872842-05-4.</li></ul><h2><span id=\"Sources\">Sources</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r886047268\">\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li> Media related to <i>Picus canus</i> at Wikimedia Commons</li>\n<li> Data related to <i>Picus canus</i> at Wikispecies</li>\n<li>Xeno-canto: audio recordings of the grey-headed woodpecker</li></ul>"
    },
    "black necked crane": {
        "id": "b058",
        "name": "Black-necked crane",
        "order": "Gruiformes",
        "family": "Gruidae",
        "genus":"Grus", "species":"nigricollis",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-necked crane</b> (<i>Grus nigricollis</i>) is a medium-sized crane in Asia that breeds on the Tibetan Plateau and remote parts of India and Bhutan. It is 139\u00a0cm (55\u00a0in) long with a 235\u00a0cm (7.8\u00a0ft) wingspan, and it weighs 5.5\u00a0kg (12\u00a0lbs). It is whitish-gray, with a black head, red crown patch, black upper neck and legs, and white patch to the rear of the eye. It has black primaries and secondaries. Both sexes are similar. Some populations are known to make seasonal movements. It is revered in Buddhist traditions and culturally protected across much of its range. A festival in Bhutan celebrates the bird while the Indian union territory of Jammu and Kashmir considers it as the state bird.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>This medium-sized crane is mostly grey with a black head and neck. The lores and crown are naked and dull red. A small patch of white feathers are present below and behind the eye. The tail is black and makes it easy to distinguish at a distance from the similar looking common crane which has grey tail.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n\n<p>The black-necked crane summers mainly in the high altitude Tibetan Plateau. The breeding areas are alpine meadows, lakeside and riverine marshes and river valleys. They also make use of barley and wheat fields in these areas. Wintering areas tend to be in sheltered valleys or lower altitudes. The largest populations are in China with smaller numbers extending into Vietnam, Bhutan and India. Small populations have been noted in northern Sikkim. A small group of 20 to 40 was once known to regularly visit the Subansiri area in the Apa Tani valley until 1975 and vagrants have been recorded in Nepal.</p><p>In 1996 there were about 4,000 of the birds, most of whom spent their winters in Tibet in the valleys of the Nyanga, Lhasa and Pengbo rivers and the middle reaches of the Yarlung Tsangpo.\nThe Hutoushan Reservoir in the Pengbo valley is an important winter resting place, with a 96 square kilometres (37 sq mi) Linzhou Black-necked Crane Preservation Zone established in 1993.\nBlack-necked cranes also winter in small numbers in two valleys of western Arunachal Pradesh, India. These are Sangti and Zemithang.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2><p>\nBlack-necked cranes forage on the ground in small groups, often with one bird acting as a sentinel. In winter, the groups arrive and leave the feeding grounds together, but may split into family groups, each group keeping their own small feeding territories in a big marshes or fields. They spend nearly 75% of the day foraging with peak feeding in the early morning and late afternoon. While foraging, they keep walking and they also walk long distances between the feeding spots. In this manner, they cover several kilometers a day while foraging. They feed on the tubers of sedges, plant roots, earthworms, insects and other invertebrates, frogs and other small vertebrates. They may also feed on fallen grains of barley, oats and buckwheat and will sometimes dig up and feed on potatoes, carrots and turnips. Their loud trumpeting calls are similar to those of other cranes.</p><p>\nThese birds are very wary, but in some areas they are accustomed to the local people who do not disturb them. These cranes appear to be able to distinguish people in traditional dress and are especially wary of others.</p><p>Like many other crane species, they are believed to form long-lasting pair bonds and dancing displays are made during the breeding season. The breeding birds are territorial and will chase away any intruders of the same species immediately, though they are generally tolerant of other species. The nest site is usually a pre-existing mud island inside a large shallow wetland, sometimes shared along with bar-headed goose. The nest varies from a scantily lined scratch in the ground to a structure made of grass, rushes and weeds with a depression in the centre, sometimes the eggs laid directly on the grass without any structure. Eggs are laid mainly in May and June. One or two eggs. The birds are relatively more wary when the young ones are small. Till the time when the young ones are able to fly, the family kept moving around the nesting location, but later the family started traveling far and wide in the course of a day. Though the young ones are able to forage independently, usually they accompany the parents during foraging. Short, subdued nasal \"kurrr\" calls are used by the family to keep in contact and also by adults to indicate availability of food to juveniles. The adults were found to feed the young ones mainly with fish in Ladakh, adults fishing like herons. They are endangered because of the hunters.\n</p><h2><span id=\"Status_and_threats\">Status and threats</span></h2>\n\n<p>The estimated population of the black-necked crane is between 8800 and 11000 individuals. These birds are legally protected in China, India and Bhutan. However habitat modification, drying of lakes and agriculture are threats to the populations. In many areas, dogs belonging to herders are a major threat to young birds. An incident of leopards preying on the roosting cranes during the night has been recorded from the Phobjika valley of Bhutan. In Bhutan Collisions with power lines has been another cause of mortality in some areas. Eggs may also be preyed on by ravens that may use the opportunity provided when humans disturb the parents. The drying of wetlands can cause increased accessibility of the nests leading to predation while a rise in the water level can submerge nests. Loss and degradation of habitat are the main threats facing the black-necked cranes. The problems are most serious in the wintering areas, where wetlands are extensively affected by human activity including irrigation, dam construction, draining, and grazing pressure. In Tibet, widespread changes in traditional agricultural practices have reduced the availability of waste barley and spring wheat.</p><p>Populations in Bhutan are well protected both culturally and legally although some disturbance from tourism exists.</p><p>The black-necked crane is evaluated as Vulnerable on the IUCN Red List of Threatened Species. It is listed on Appendix I of CITES.\n</p>\n\n<h2><span id=\"See_also\">See also</span></h2>\n<ul><li>Black-necked cranes in Bhutan</li></ul><h2><span id=\"References\">References</span></h2>\n<p>This article incorporates text from the ARKive fact-file \"Black-necked crane\" under the Creative Commons Attribution-ShareAlike 3.0 Unported License and the GFDL.\n</p>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Black-necked crane media from ARKive </li>\n<li>BirdLife Species Factsheet</li>\n<li>Black-necked Crane (<i>Grus nigricollis</i>) from <i>Cranes of the World</i> (1983) by Paul Johnsgard</li></ul> \n \n\n<p><br></p> "
    },
    "black necked grebe": {
        "id": "b059",
        "name": "Black-necked Grebe",
        "order": "Podicipediformes",
        "family": "Podicipedidae",
        "genus":"Podiceps", "species":"nigricollis",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n\n\n</p>\n<p>The <b>black-necked grebe</b> (<i>Podiceps nigricollis</i>), known in North America as the <b>eared grebe</b>, is a member of the grebe family of water birds. It was described in 1831 by Christian Ludwig Brehm. There are currently three accepted subspecies, including the nominate subspecies. Its breeding plumage features a distinctive ochre-coloured plumage which extends behind its eye and over its ear coverts. The rest of the upper parts, including the head, neck, and breast, are coloured black to blackish brown. The flanks are tawny rufous to maroon-chestnut, and the abdomen is white. When in its non-breeding plumage, this bird has greyish-black upper parts, including the top of the head and a vertical stripe on the back of the neck. The flanks are also greyish-black. The rest of the body is a white or whitish colour. The juvenile has more brown in its darker areas. The subspecies <i>californicus</i> can be distinguished from the nominate by the former's usually longer bill. The other subspecies, <i>P. n. gurneyi</i>, can be differentiated by its greyer head and upper parts and by its smaller size. <i>P. n. gurneyi</i> can also be told apart by its lack of a non-breeding plumage. This species is present in parts of Africa, Eurasia, and the Americas.\n</p><p>The black-necked grebe uses multiple foraging techniques. Insects, which make up the majority of this bird's diet, are caught either on the surface of the water or when they are in flight. It occasionally practices foliage gleaning. This grebe dives to catch crustaceans, molluscs, tadpoles, and small frogs and fish. When moulting at saline lakes, this bird feeds mostly on brine shrimp. The black-necked grebe makes a floating cup nest on an open lake. The nest cup is covered with a disc. This nest is located both in colonies and by itself. During the breeding season, which varies depending on location, this species will lay one (sometimes two) clutch of three to four eggs. The number of eggs is sometimes larger due to conspecific brood parasitism. After a 21-day incubation period, the eggs hatch, and then the nest is deserted. After about 10 days, the parents split up the chicks between themselves. After this, the chicks become independent in about 10 days, and fledge in about three weeks.\n</p><p>Although it generally avoids flight, the black-necked grebe travels as far as 6,000 kilometres (3,700\u00a0mi) during migration. In addition, it becomes flightless for two months after completing a migration to reach an area where it can safely moult. During this moult, the grebe can double in weight. The migrations to reach these areas are dangerous, sometimes with thousands of grebe deaths. In spite of this, it is classified as a least concern species by the International Union for the Conservation of Nature (IUCN). It is likely that this is the most numerous grebe in the world. There are potential threats to it, such as oil spills, but these are not likely to present a major risk to the overall population.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>This species was first described by Carl Ludwig Hablitz in 1783 as <i>Colymbus caspicus</i>, from a bird in Bandar-e Anzali. This was originally thought to be a synonym for the horned grebe, until Erwin Stresemann discovered that the description applied more to the black-necked grebe in 1948. Before this, the earliest description was thought to be by Christian Ludwig Brehm in 1831, who gave this bird its current scientific name of <i>Podiceps nigricollis</i> from a German bird. To resolve this, the International Commission on Zoological Nomenclature suppressed the name <i>C. caspicus</i>. The genus name <i>Dytes</i> is sometimes used for this species, a placement which was formalized by Robert Ridgway in 1881.</p><p>This bird is closely related to the silvery grebe and the Junin grebe. The extinct Colombian grebe is sometimes considered to be a subspecies of this species, in addition to three other extant subspecies:</p>\n<ul><li><i>P. n. nigricollis</i> \u2013 <small>(Brehm, CL, 1831)</small>: nominate, is found from western Europe to western temperate Asia (wintering to the south and west), in central and eastern Asia, and in eastern Africa</li>\n<li><i>P. n. gurneyi</i> \u2013 <small>(Roberts, 1919)</small>: is found in southern Africa</li>\n<li><i>P. n. californicus</i> \u2013 <small>(Heermann, 1854)</small>: is found from southwestern Canada through the western U.S. It winters as far south as Guatemala</li></ul><p>The generic name, <i>Podiceps</i>, comes from two Latin words: <i>podicis</i>, meaning \"vent\" or \"anus\" and <i>pes</i> meaning \"foot\". This is a reference to the attachment point of the bird's legs\u2014at the extreme back end of its body. The specific epithet <i>nigricollis</i> is Latin for \"black-necked\": <i>niger</i> means \"black\" and <i>collis</i> means \"neck\". The subspecies epithet <i>californicus</i> comes from \"California\", while <i>gurneyi</i> comes from the name of British ornithologist John Henry Gurney Sr.</p><p>\"Black-necked grebe\" has been designated the official name by the International Ornithological Committee (IOC). Both common names for this species refer to features visible when the bird is in its breeding plumage; in such plumage, it has an all-black neck and a spray of golden plumes on each side of its head. The name \"eared grebe\" is nearly a century older than the name \"black-necked grebe\". The latter was first used in 1912 by Ernst Hartert, in an effort to bring the common name of the species in line with its scientific name. The name \"eared grebe\" is still used in North America to refer to this bird.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The black-necked grebe usually measures between 28 and 34 centimetres (11 and 13\u00a0in) in length and weighs 265 to 450 grams (9.3 to 15.9\u00a0oz). The nominate subspecies in breeding plumage has the head, neck, breast, and upper parts coloured black to blackish brown, with the exception of the ochre-coloured fan of feathers extending behind the eye over the eye-coverts and sides of the nape. This eye is mostly red, with a narrow and paler yellow ring on the inner parts of the eye and an orange-yellow to pinkish-red <dfn id=\"\"><span title=\"See entry at: Glossary of bird terms \u00a7\u2006orbital ring\">orbital ring</span></dfn>. The thin, upturned bill, on the other hand, is black, and is connected to the eye by a blackish line starting at the <dfn id=\"\"><span title=\"See entry at: Glossary of bird terms \u00a7\u2006gape\">gape</span></dfn>. Sometimes, the foreneck can be found to be mostly tinged brown. The <dfn id=\"\"><span title=\"See entry at: Glossary of bird terms \u00a7\u2006upperwing\">upperwing</span></dfn> is blackish to drab brown in colour and has a white patch formed by the secondaries and part of the inner primaries. The flanks are coloured tawny rufous to maroon-chestnut and have the occasional blackish fleck. The <dfn id=\"\"><span title=\"See entry at: Glossary of bird terms \u00a7\u2006underwing\">underwing</span></dfn> and abdomen is white, with an exception to the former being the dark tertials and the mostly pale grey-brown outer primaries. The legs are a dark greenish grey. The sexes are similar.</p><p>In non-breeding plumage, the nominate has greyish-black upper parts, cap, nape, and hindneck, with the colour on the upper portion of the latter being contained in a vertical stripe. The dark colour of the cap reaches below the eye and can be seen, diffused, to the ear-coverts. Behind the ear-coverts on the sides of the neck, there are white ovals. The rest of the neck is grey to brownish-grey in colour and has white that varies in amount. The breast is white, and the abdomen is whitish. The flanks are coloured in a mix of blackish-grey with white flecks. The colour of the bill when not breeding differs from that of the breeding plumage, with the former being significantly more grey.</p>\n\n<p>The juvenile black-necked grebe is similar to the non-breeding adult. There are differences, however, including the fact that the dark areas are usually more brownish in the juvenile, with less black. The <dfn id=\"\"><span title=\"See entry at: Glossary of bird terms \u00a7\u2006lores\">lores</span></dfn> are often tinged pale grey, with whitish marks behind the eye. On the sides of the head and upper neck, there is a buffy or tawny tinge. The chick is downy and has a blackish-grey head with stripes and spots that are white or pale buff-grey. The throat and foreneck are largely pale. The upper parts are mostly dark grey in colour, and the abdomen is white.</p><p>The subspecies <i>californicus</i> usually has a longer bill compared to the nominate, and has brown-grey inner primaries during the breeding season. When not breeding, the nominate has diffuse and pale lores less often than <i>Podiceps nigricollis californicus</i>. The other subspecies, <i>P. n. gurneyi</i>, is the smallest of the three subspecies, in addition to having a greyer head and upper parts. The adult of this subspecies also has a rufous-brown tinge on its lesser wing-coverts. It also lacks a non-breeding plumage, in addition to the tufts on the side of its head being paler.</p>\n<h3><span id=\"Vocalizations\">Vocalizations</span></h3>\n<p>When breeding, the black-necked grebe gives a quiet \"ooeek\" that ascends in pitch from an already high pitch. This call is also used as a territorial call, in addition to a low and fast trill, which itself is also used during courtship. Another call is a short \"puuii\" or \"wit\". This grebe is silent when it is not the breeding season and when it is feeding or resting.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This species breeds in vegetated areas of freshwater lakes across Europe, Asia, Africa, northern South America and the southwest and western United States. After breeding, this bird migrates to saline lakes to moult. Then, after completing the moult and waiting for sometimes several months, it migrates to winter in places such as the south-western Palearctic and the eastern parts of both Africa and Asia. It also winters in southern Africa, another place where it breeds. In the Americas, it winters as far south as Guatemala, although the wintering population there is mainly restricted to islands in the Gulf of California, the Salton Sea, and Baja California. When not breeding, its habitat is primarily saline lakes and coastal estuaries.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<p>This grebe is highly gregarious, usually forming large colonies when breeding and large flocks when not.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>This species builds its floating nest in the usually shallow water of open lakes. The nest itself is anchored to the lake by plants. It is built by both the male and the female and made out of plant matter. Most of it is submerged, with the bottom of the shallow cup usually being level with the water. Above the cup, there is a flat disc. This grebe nests both in colonies and by itself. When it does not nest by itself, it will often nest in mixed-species colonies made up of  black-headed gulls, ducks, and various other waterbirds. The space between the nests in these colonies is often 1 to 2 metres (3.3 to 6.6\u00a0ft). Whether it nests in colonies or not has an effect on the dimensions of the nest. When the bird is not in a colony, the nest has an average diameter of 28 centimetres (11\u00a0in), although this can vary, with nests ranging from about 20 centimetres (8\u00a0in) to over 30 centimetres (12\u00a0in). This is compared to nests in colonies, which have an average diameter of about 25.5 centimetres (10\u00a0in). It is suggested that rarely some pairs of this grebe will steward over multiple nests when in colonies.</p>\n\n<p>Pair formation in the black-necked grebe usually starts during pauses in the migration to the breeding grounds, although it occasionally occurs before, in wintering pairs. This pair formation continues after this grebe has arrived to its breeding grounds. Courtship occurs when it arrives at the breeding lake. The displays are performed in the middle of the lake. There is no territory involved in courting; individuals used the whole area of the lake. When advertising for a mate, a black-necked grebe will approach other black-necked grebes with its body fluffed out and its neck erect. It closes its beak to perform a call, <i>poo-eee-chk</i>, with the last note only barely audible. Courtship generally stops at the start of nesting.</p><p>In the Northern Hemisphere, this bird breeds from April to August. In east Africa, the breeding season is at least from January to February, while in southern Africa, the breeding season is from October to April.</p><p>The black-necked grebe is socially monogamous. Conspecific or intraspecific brood parasitism, where the female lays eggs in the nest of others of their own species is common with nearly 40% of nests being parasitized on average. In terms of territory, this grebe will defend only its nest site.</p>\n\n<p>This grebe lays a clutch, and sometimes two clutches, of three to four chalky greenish or bluish eggs. Nests that have been parasitized, however, will have two more eggs on average, even though the number the host lays is about the same no matter if it has been parasitized or not. The eggs, although initially immaculate, do get stained by plant matter that the nest is built out of. The eggs measure 45 by 30 millimetres (1.8 by 1.2\u00a0in) on average and are incubated by both parents for about 21 days. The laying date of the eggs is somewhat synchronized, with birds in small colonies having the laying dates spread out by just a few days, compared to large colonies, where the laying date is spread out over more than 10 days.</p><p>After the chicks hatch, the birds will desert their nest. Even though the young can swim and dive during this time, they rarely do, instead staying on the parents' backs for four days after hatching. This behaviour is present in all grebes, and is likely to have evolved because it reduces travel costs, specifically those back to the nest to brood the chicks and give them food. After about 10 days, the parents split the chicks up, with each parent taking care of about half of the brood. After this split, the chicks are independent in about 10 days, and fledge in about three weeks.</p><p>When disturbed while incubating, this bird usually (just under 50% of the time) partly covers its eggs with nest material when the disruption is not sudden, but a bird with an incomplete clutch usually does not attempt to cover the eggs. When the disruption is sudden, on the other hand, the black-necked grebe usually (just under 50% of the time) does not cover its eggs. In comparison, other species of grebes cover up their eggs when leaving the nest. Predation is usually not the primary cause of egg loss, with most nesting failures occurring after the chicks have hatched. A major cause of this is the chilling of the young.</p>\n<h3><span id=\"Feeding\">Feeding</span></h3>\n\n<p>The black-necked grebe forages mainly by diving from the water, with dives usually lasting less than 30 seconds. These dives are usually shorter in time when in more shallow water. In between dives, this grebe rests for an average of 15 seconds. When feeding on brine shrimp at hypersaline lakes, it likely uses its large tongue to block the oral cavity. It is hypothesized that it then crushes prey against its palate to remove excess water. It also forages by gleaning foliage, plucking objects off of the surface of water, having its head submerged while swimming, and sometimes capturing flying insects.</p><p>This grebe eats mostly insects, of both adult and larval stages, as well as crustaceans, molluscs, tadpoles, and small frogs and fish. When moulting at lakes with high salinity, although, this bird feeds mostly on brine shrimp. The behaviour of black-necked grebes changes in response to the availability of brine shrimp; bodies of water with more shrimp have more grebes, and grebes spend more time foraging when the amount of shrimp and the water temperature decreases.</p><p>The young are fed one at a time by the parents, with one bird carrying the young while the other feeds it. The young take food by grabbing it, with their beaks, from their parents, or by grabbing food dropped into the water. When a young bird cannot grab the food, then the adults submerge their bill into the water and shake their bill to break up the food.</p>\n<h3><span id=\"Moult_and_migration\">Moult and migration</span></h3>\n<p>When breeding is over, the black-necked grebe usually partakes in a moult migration to saline lakes. It especially prefers lakes with large numbers of invertebrate prey, so it can fatten up while moulting and before going on its winter migration. Some birds, although, moult when on the breeding grounds, but most do not moult until the end of the moult migration. This migration is dangerous, with hundreds and sometimes thousands of birds being killed by snowstorms when traveling to places such as Mono Lake.</p><p>When it finishes its moult migration, this bird moults its remiges between August and September, which makes it unable to fly. This moult is preceded by an increase in weight. During the moult, the breast muscles atrophy. When the moult is completed, this grebe continues to gain weight, often more than doubling its original weight. This additional fat is used to power the black-necked grebe's overnight fall migration to its wintering grounds. The fat is most concentrated in the abdomen, second most in the thorax, and least in the chest. This bird usually starts its migration earlier when shrimp is more abundant and when the moulting lake is at a higher than average temperature. It generally leaves on a clear night with lower than average surface temperatures.</p>\n<h3><span id=\"Movement\">Movement</span></h3>\n\n<p>This grebe is one of the most inefficient fliers among birds. Generally, it avoids flying at all costs and reserves long-distance flight exclusively for migration. This is combined with the fact that this bird is flightless for two months of the year during its moult. However, when migrating, it travels as much as 6,000 kilometres (3,700 miles) to reach rich feeding areas that are exploited by few other species. In flight, the shape of this grebe is like a loon: straight neck, legs trailing, and wings beating often.</p><p>When diving, this bird pulls its head back and then arches it forward into the water, with the body following and a slight springing. The legs start moving only after they are underwater. When swimming on the surface of the water, the body of this grebe is relatively high, although none of the underparts are seen. The neck is held straight up in a relaxed manner, with the bill being held forward and parallel to the water. Each of the feet perform strong alternating strokes.</p>\n<h2><span id=\"Disease\">Disease</span></h2>\n<p>Large-scaled deaths (such as 150,000 birds on the Salton Sea in 1992) from erysipelas, avian cholera, avian botulism, and West Nile virus have been recorded in the past. In 2013 at the Great Salt Lake, for example, there was an outbreak of West Nile virus that could be the largest recorded in birds in the US. The cause of the outbreak and modes of transmission are unknown, but there has been speculation about the latter. Since West Nile virus is able to survive in brine shrimp and, for a temporary time, the water of the Great Salt Lake around the temperature it was when the die-off happened. Thus, it is likely that grebes could become infected by eating diseased shrimp or being in contaminated water. It is also theorized that West Nile virus could be transmitted among grebes through contact with the excrement of an infected grebe. Avian cholera, another disease that can cause large scale die-offs in this grebe, can be brought on by unknown biotoxins, pathogens, and problems with feather waterproofing.</p>\n<h2><span id=\"Status\">Status</span></h2>\n<p>As of 2016, the black-necked grebe is classified as least concern by the International Union for Conservation of Nature (IUCN). The trend of the population is uncertain, as some populations are decreasing, whereas others are stable, have an uncertain trend, or are increasing. The justification for the current classification of this species is its very large population (estimated around 3.9\u20134.2 million individuals) combined with a large estimated extent of occurrence (about 155 million km<sup>2</sup> (60 million sq mi)). This grebe is probably the most numerous grebe in the world.</p><p>Unknown biotoxins, pathogens, and the impairment of feather waterproofing can lead to hypothermia and avian cholera. Since this grebe usually winters on the coast, it is also vulnerable to oil pollution. Large-scale disease, such as avian cholera, could threaten the species. These and other factors, such as human disturbance, including collisions with power transmission lines, contribute to declining populations in certain areas. This species used to be threatened in North America by the millinery industry, which helped facilitate the hunting of the birds, and egg collectors. Although this is true, this grebe is hunted in the Gilan Province in Iran, for both commercial and recreational purposes. However, there is no evidence suggesting that these threats could result in a significant risk for the overall population.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Bibliography\">Bibliography</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Eared Grebe Species Account \u2013 Cornell Lab of Ornithology</li></ul>"
    },
    "black necked stork": {
        "id": "b060",
        "name": "Black-necked Stork",
        "order": "Otidiformes",
        "family": "Ciconiidae",
        "genus":"Ephippiorhynchus", "species":"asiaticus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>black-necked stork</b> (<i>Ephippiorhynchus asiaticus</i>) is a tall long-necked wading bird in the stork family. It is a resident species across the Indian Subcontinent and Southeast Asia with a disjunct population in Australia. It lives in wetland habitats and certain crops such as rice and wheat where it forages for a wide range of animal prey. Adult birds of both sexes have a heavy bill and are patterned in white and glossy blacks, but the sexes differ in the colour of the iris. In Australia, it is sometimes called a jabiru although that name refers to a stork species found in the Americas. It is one of the few storks that is strongly territorial when feeding.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n\n<p>First described by John Latham as <i>Mycteria asiatica</i>, this species was later placed in the genus <i>Xenorhynchus</i> based on morphology. Based on behavioural similarities, Kahl suggested the placement of the species in the genus <i>Ephippiorhynchus</i>, which then included a single species, the saddle-billed stork. This placement of both the black-necked stork and saddle-billed stork in the same genus was later supported by osteological and behavioural data, and DNA-DNA hybridisation and cytochrome\u2013<i>b</i> data. The genera <i>Xenorhynchus</i> and <i>Ephippiorhynchus</i> were both erected at the same time, and as first revisor, Kahl selected the latter as the valid genus for the two species. This and the saddle-billed stork <i>Ephippiorhynchus senegalensis</i> are the only stork species that show marked sexual dimorphism in iris colour.</p><p>Two subspecies are recognized <i>E. a. asiaticus</i> of the Oriental region and <i>E. a. australis</i> of south New Guinea and Australia. Charles Lucien Bonaparte erected the genus <i>Xenorhynchus</i> in 1855 and placed two species in it, <i>X. indica</i> and <i>X. australis</i>. This treatment was carried on into later works. James Lee Peters in his 1931 work treated them as subspecies. In 1989, McAllan and Bruce again suggested the elevation of the two subspecies into two species: <i>E. asiaticus</i> or the green-necked stork of the Oriental region, and <i>E. australis</i> or the black-necked stork of the Australian and New Guinean region. This recommendation was based on the disjunct distributions and differences in the iridescent colouration of the neck which the authors suggested might reflect different behavioural displays. This recommendation has not been followed and a subsequent study did not find consistent differences in the colours. Analysis of the cytochrome b mitochondrial sequences however showed significant genetic divergence. The genetic distance of a stork presumed to be <i>Ephippiorhynchus asiaticus asiaticus</i> from a confirmed individual of <i>E. a. australis</i> was 2.1%, much greater than the genetic distances between individual storks of the same species. The conservative treatment as two subspecies has been followed in the Australian faunal list by Christidis and Boles.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The black-necked stork is a large bird, 129\u2013150\u00a0cm (51\u201359\u00a0in) tall having a 230-centimetre (91\u00a0in) wingspan. The only published weight for this species was a single specimen at 4,100\u00a0g (9.0\u00a0lb), but this is nearly 35% less than the mean body mass of the closely related saddle-billed stork, which also attains a similar stature. Therefore, this specimen of black-necked stork could have been at the low end of sizes attainable or perhaps somewhat malnourished. The plumage patterns are conspicuous with younger birds differing from adults. Adults have a glossy bluish-black iridescent head, neck, secondary flight feathers and tail; a coppery-brown crown; a bright white back and belly; bill black with a slightly concave upper edge; and bright red legs. The sexes are identical but the adult female has a yellow iris while the adult male has it brown. Juveniles younger than six months have a brownish iris; a distinctly smaller and straighter beak; a fluffy appearance; brown head, neck, upper back, wings and tail; a white belly; and dark legs. Juveniles older than six months have a mottled appearance especially on the head and neck where the iridescence is partly developed; dark-brown outer primaries; white inner primaries that forms a shoulder patch when the wings are closed; a heavy beak identical in size to adults but still straighter; and dark to pale-pink legs. Like most storks, the black-necked stork flies with the neck outstretched, not retracted like a heron. In flight it appears spindly and a black bar running through the white wings (the somewhat similar looking migratory black stork has an all black wing) with black neck and tail make it distinctive.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>In India, the species is widespread in the west, central highlands, and northern Gangetic plains extending east into the Assam valley, but rare in peninsular India and Sri Lanka. This distinctive stork is an occasional straggler in southern and eastern Pakistan, and is a confirmed breeding species in central lowland Nepal. It extends into Southeast Asia, through New Guinea and into the northern half of Australia. Compared to other large waterbirds like cranes, spoonbills and other species of storks, black-necked storks are least abundant in locations with a high diversity of waterbird species.</p><p>The largest population of this species occurs in Australia, where it is found from the Ashburton River, near Onslow, Western Australia, across northern Australia to north-east New South Wales. It extends inland in the Kimberley area to south of Halls Creek; in the Northern Territory to Hooker Creek and Daly Waters; and in Queensland inland to the Boulia area and the New South Wales border, with some records as far south as the north-west plains of New South Wales, along the coast of Sydney and formerly bred near the Shoalhaven River. It is rare along the south-east extremity of its range, but common throughout the north. An estimated 1800 occur in the Alligator Rivers region of the Northern Territory, with overall numbers during surveys being low in all seasons. A combination of aerial surveys and ground counts in the middle Fly River floodplain, Papua New Guinea during estimated 317 (December 1994) and 249 (April 1995) storks.</p><p>The largest known breeding population occurs in the largely agricultural landscape of south-western Uttar Pradesh in India. Densities of about 0.099 birds per square kilometre have been estimated in this region made up of a mosaic of cultivated fields and wetlands. About six pairs were found to use the 29 square kilometres of the Keoladeo National Park. One breeding pair has been observed in Bhagalpur district, western Bihar.</p><p>In Sri Lanka, the species is a rare breeding resident, with 4\u20138 breeding pairs in Ruhuna National Park. It is exceedingly rare, and possibly no longer breeding in Bangladesh and Thailand.</p><p>Black-necked storks forage in a variety of natural and artificial wetland habitats. They frequently use freshwater, natural wetland habitats such as lakes, ponds, marshes, flooded grasslands, oxbow lakes, swamps, rivers and water meadows. Freshwater, artificial wetland habitats used by these storks include flooded fallow and paddy fields, wet wheat fields, irrigation storage ponds and canals, sewage ponds, and dry floodplains. Small numbers are also seen in Indian coastal wetland habitats, including in mangrove creeks and marshes. In cultivated areas, they prefer natural wetlands to forage in, though flooded rice paddies are preferentially used during the monsoon, likely due to excessive flooding of lakes and ponds. Nests are usually on trees located in secluded parts of large marshes or in cultivated fields as in India and lowland Nepal.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>This large stork has a dance-like display. A pair stalk up to each other face to face, extending their wings and fluttering the wing tips rapidly and advancing their heads until they meet. They then clatter their bills and walk away. The display lasts for a minute and may be repeated several times.</p>\n\n<p>Nest building in India commences during the peak of the monsoon with most of the nests initiated during September \u2013 November, with few new nests built afterwards until January. They nest on large trees, sometimes isolated in large marshes, or in agricultural landscapes, on which they build a platform. On agricultural landscapes, human disturbance can cause nesting adults to abandon nests in some locations, but storks in other locations nest successfully. The nest is large, as much as 3 to 6 feet across and made up of sticks, branches and lined with rushes, water-plants and sometimes with a mud plaster on the edges. Nests may be reused year after year. The usual clutch is four eggs which are dull white in colour and broad oval in shape, but varies from one to five eggs. The exact incubation period is not known but is expected to be about 30 days. The chicks hatch with white down which is replaced by a darker grey down on the neck within a week. The scapular feathers emerge first followed by the primaries. The young birds make a <i>chack</i> sound followed by a repeated <i>wee-wee-wee</i> calls. Adult birds take turns at the nest and when one returns to relieve the other, they perform a greeting display with open wings and an up and down movement of the head. Food is brought for the young chicks by the adults and regurgitated onto the nest platform. Adults stop feeding the young at the nest and begin to show aggression towards the chicks after they are about 3 or 4 months old. The young birds may stay on nearby for about a year but disperse soon. Typically one to three chicks fledge from successful nests, but up to five chicks fledge in years with high rainfall. The number of stork pairs that succeed in raising chicks, and the average size of fledged broods, are related to monsoonal and post-monsoon rainfall, improving in years with higher rainfall.</p><p>At the nest trees, which are typically tall with large boles and a wide-canopy, the birds in Bharatpur competed with Indian white-backed vultures sometimes failing to nest due to the vultures. While many wetland birds are flushed by birds of prey, these storks are not usually intimidated and can be quite aggressive to other large water-birds such as herons and cranes. Adults aggressively defend small depressions of deep water against egrets and herons (at Malabanjbanjdju in Kakadu National Park, Australia), and drying wetland patches against waterbirds such as spoonbills and woolly-necked storks (at Dudhwa National Park, Uttar Pradesh, India).\n</p>\n\n<p>The black-necked stork is a carnivore and its diet includes water-birds such as coots,, , darters,  little grebes, northern shoveller, pheasant-tailed jacana, and a range of aquatic vertebrates including fish, amphibians, reptiles and invertebrates such as crabs and molluscs. They also prey on the eggs and hatchlings of turtles. In the Chambal River valley they have been observed to locate nests of <i>Kachuga dhongoka</i> buried under sand (presumably by moistness of the freshly covered nest) and prey on the eggs of the turtle. In Australia, they also forage at night feeding on emerging nestlings of marine turtles. Stomach content analyses of nine storks in Australia showed their diet to contain crabs, molluscs, insects (grasshoppers and beetles), amphibians, reptiles and birds. The storks had also consumed a small piece of plastic, pebbles, cattle dung, and plant material. In well-protected wetlands, both in Australia and India, black-necked storks feed almost exclusively on fish but in the agriculture-dominated landscape of Uttar Pradesh in India they feed on a wider range of prey that include frogs and molluscs; storks obtained fish in wetlands, frogs from roadside ditches and molluscs from irrigation canals.</p><p>They sometimes soar in the heat of the day or rest on their hocks. When disturbed, they may stretch out their necks. Their drinking behaviour involves bending down with open bill and scooping up water with a forward motion followed by raising the bill to swallow water. They sometimes carry water in their bill to chicks at the nest or even during nest building or egg stages.</p><p>Like other storks, they are quite mute except at nest where they make bill-clattering sounds. The sounds produced are of a low-pitch and resonant and ends with a short sigh. Juveniles fledged from the nests can occasionally call using a mildly-warbling, high-pitched series of whistles, accompanied with open, quivering wings. These calls and behaviour are directed at adult birds and are a display to solicit food, particularly in drought years when younger birds are apparently unable to find food on their own easily.</p><p>Black-necked storks are largely non-social and are usually seen as single birds, pairs and family groups. Flocks of up to 15 storks have been observed in Australia and India, and form due to local habitat conditions such as drying out of wetlands.</p><p>The black-necked stork is the type-host for a species of ectoparasitic Ischnoceran bird louse, <i>Ardeicola asiaticus</i>  and a species of endoparasitic trematode <i>Dissurus xenorhynchi</i>.</p>\n<h2><span id=\"Status_and_conservation\">Status and conservation</span></h2>\n<p>The black-necked stork is widely scattered and nowhere found in high densities, making it difficult for populations to be reliably estimated. The Sri Lankan population has been estimated to be about 50 birds while the species has become very rare in Thailand, Myanmar, Laos and Cambodia. They may be extinct in the Sundaic region. The combined South and South-east Asian population is placed at less than 1000 birds. A 2011 study found the population in south-western Uttar Pradesh to be stable, although population growth rates may decline with an increase in the number of dry years or land use changes that permanently remove the number of breeding pairs. The Australian population has been optimistically estimated at about 20,000 birds while a more conservative estimate suggests about 10,000 birds. They are threatened by habitat destruction, the draining of shallow wetlands, disturbance at nests, overfishing, pollution, collision with electricity wires and hunting. Few breeding populations with high breeding success are known primarily due to lack of field work. It is evaluated as near threatened on the IUCN Red List.</p>\n<h2><span id=\"In_culture\">In culture</span></h2>\n\n<p>The Mir Shikars, traditional bird hunters of Bihar, India had a ritual practice that required a young man to capture a black-necked stork \"Loha Sarang\" alive before he could marry. A procession would locate a bird and the bridegroom-to-be would try to catch the bird with a limed stick. The cornered bird was a ferocious adversary. The ritual was stopped in the 1920s after a young man was killed in the process. Young birds have been known to be taken from the nest for meat in Assam.</p><p>In Australia, an aboriginal creation myth describes the origin of the bill of the \"jabiru\" from a spear that went through the head of a bird. The Binbinga people often consider the meat of the bird as taboo and eating its meat would cause an unborn child to cause the death of its mother. The jabiru is known as \"karinji\" and is the totem of a group known as the Karinji people.</p><p>The difference in iris colour among the sexes was noted in 1865 by A D Bartlett, the superintendent in charge of the collection at the Zoological Society of London. The similarity in this aspect with the African saddle-billed stork was noted by Bartlett and commented on by J. H. Gurney. Charles Darwin who corresponded with Bartlett was well aware of this and used it as one of the examples of sexual dimorphism among birds. John Gould in his handbook to the birds of Australia noted that the meat of the bird \"...\u00a0has a fishy flavour, too over-powerful to admit of its being eaten by any one but a hungry explorer.\"</p>\n\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Maheswaran, G. and Rahmani, A. R. (2002) Foraging behaviour and feeding success of the black-necked stork (<i>Ephippiorhychus asiaticus</i>) in Dudwa National Park, Uttar Pradesh, India. J. Zool. 258: 189\u2013195.</li>\n<li>Maheswaran, G. (1998) Ecology and behaviour of Black-necked Stork (<i>Ephippiorhynchus asiaticus</i> Latham, 1790) in Dudwa National Park, Uttar Pradesh. PhD thesis, Centre of Wildlife and Ornithology, Aligarh Muslim University, Aligarh, India.</li>\n<li>Farah Ishtiaq, S\u00e1lim Javed, Malcolm C. Coulter, Asad R. Rahmani 2010 Resource Partitioning in Three Sympatric Species of Storks in Keoladeo National Park, India. Waterbirds 33(1):41\u201349</li>\n<li><cite id=\"CITEREFMaheshwaran_G,_Rahmani_AR2008\" class=\"citation journal\">Maheshwaran G, Rahmani AR (2008). \"Foraging technique and prey-handling time in black-necked stork (<i>Ephippiorhynchus asiaticus</i>)\". <i>Integrative Zoology</i>. <b>3</b> (4): 274\u2013279. doi:10.1111/j.1749-4877.2008.00101.x.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Integrative+Zoology&amp;rft.atitle=Foraging+technique+and+prey-handling+time+in+black-necked+stork+%28Ephippiorhynchus+asiaticus%29&amp;rft.volume=3&amp;rft.issue=4&amp;rft.pages=274-279&amp;rft.date=2008&amp;rft_id=info%3Adoi%2F10.1111%2Fj.1749-4877.2008.00101.x&amp;rft.au=Maheshwaran+G%2C+Rahmani+AR&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABlack-necked+stork\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Birds in my backyard, Australia</li>\n<li>New South Wales, Australia</li>\n<li>Images and videos</li>\n<li>3D specimen</li>\n<li>BirdLife Species Factsheet</li></ul> "
    },
    "black rumped flameback": {
        "id": "b061",
        "name": "Black-rumped Flameback",
        "order": "Piciformes",
        "family": "Picidae",
        "genus":"Dinopium", "species":"benghalense",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>black-rumped flameback</b> (<i>Dinopium benghalense</i>), also known as the <b>lesser golden-backed woodpecker</b> or <b>lesser goldenback</b>, is a woodpecker found widely distributed in the Indian subcontinent.  It is one of the few woodpeckers that are seen in urban areas.  It has a characteristic rattling-whinnying call and an undulating flight. It is the only golden-backed woodpecker with a black throat and a black rump.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The black-rumped flameback was described and illustrated by two pre-Linnaean English naturalists from a dried specimen that had been brought to London. In 1738 Eleazar Albin included the bird as the \"Bengall Woodpecker\" in his <i>A Natural History of Birds</i> and in 1751 George Edwards included the \"Spotted Indian Woodpecker\" in his <i>A Natural History of Uncommon Birds</i>. The black-rumped flameback was formally described by the Swedish naturalist Carl Linnaeus in 1758 in the tenth edition of his <i>Systema Naturae</i> under the binomial name <i>Picus benghalensis</i>. He cited the earlier descriptions by Albin and Edwards. This woodpecker is now placed in the genus <i>Dinopium</i> that was introduced by the French polymath Constantine Samuel Rafinesque in 1814.</p><p>Five subspecies are recognised:</p>\n<ul><li>The nominate subspecies (<i>D. b. benghalense</i>) is found across India in the low elevations up to about 1000\u00a0m.</li>\n<li>The race in the arid northwestern India and Pakistan, <i>D. b. dilutum</i> (Blyth, 1852), has pale yellow upperparts, a long crest and whiter underparts than the nominate race of the Gangetic plains. The upperparts have less spots. It prefers to breed in old gnarled tamarisks, <i>Acacia</i> and <i>Dalbergia</i> trunks.</li>\n<li>The Southern Peninsular form, <i>D. b. puncticolle</i> (Malherbe, 1845), has a black throat with small triangular white spots and bright golden-yellow upperparts.</li>\n<li>The subspecies found in the Western Ghats is separated as <i>D. b. tehminae</i> (Whistler &amp; Kinnear, 1934), (named after the wife of Salim Ali) and is more olive above, has fine spots on the black throat and the wing-covert spots are not distinct.</li>\n<li>The northern Sri Lankan race, <i>D. b. jaffnense</i> (Whistler, 1944), has a shorter beak.</li></ul><p>The Sri Lankan red-backed flameback (<i>Dinopium psarodes</i>) was formerly treated as a subspecies of the black-rumped flameback. It has a crimson back and all the dark markings are blacker and more extensive. It sometimes intergrades with <i>D. b. jaffnense</i> near Puttalam, Kekirawa and Trincomalee.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The black-rumped flameback is a large species at 26\u201329\u00a0cm in length. It has a typical woodpecker shape, and the golden yellow wing coverts are distinctive. The rump is black and not red as in the greater flameback. The underparts are white with dark chevron markings. The black throat finely marked with white immediately separates it from other golden backed woodpeckers in the Indian region. The head is whitish with a black nape and throat, and there is a greyish eye patch. Unlike the greater flameback it has no dark moustachial stripes.</p><p>The adult male has a red crown and crest. Females have a black forecrown spotted with white, with red only on the rear crest. Young birds are like the female, but duller.</p>\n\n<p>Like other woodpeckers, this species has a straight pointed bill, a stiff tail to provide support against tree trunks, and zygodactyl feet, with two toes pointing forward, and two backward. The long tongue can be darted forward to capture insects.</p><p>The black-rumped flameback is the only golden-backed woodpecker with both a black throat and a black rump.</p><p>Leucistic birds have been recorded. Two specimens of male birds from the northern Western Ghats have been noted to have red-tipped feathers on the malar region almost forming a malar stripe. A female specimen from Lucknow has been noted to have grown an abnormal downcurved hoopoe-like bill.</p>\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This flameback is found mainly on the plains going up to an elevation of about 1200m in Pakistan, India south of the Himalayas and east till the western Assam valley and Meghalaya, Bangladesh and Sri Lanka. It is associated with open forest and cultivation. They are often seen in urban areas with wooded avenues. It is somewhat rare in the Kutch and desert region of Rajasthan.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>This species is normally seen in pairs or small parties and sometimes joins mixed-species foraging flocks. They forage from the ground to the canopy. They feed on insects mainly beetle larvae from under the bark, visit termite mounds and sometimes feed on nectar. As they make hopping movements around branches, they often conceal themselves from potential predators. They adapt well in human-modified habitats making use of artificial constructions fallen fruits and even food scraps.</p><p>The breeding season varies with weather and is between February and July. They frequently drum during the breeding season. The nest hole is usually excavated by the birds and has a horizontal entrance and descends into a cavity. Sometimes birds may usurp the nest holes of other birds. Nests have also been noted in mud embankments. The eggs are laid inside the unlined cavity. The normal clutch is three and the eggs are elongate and glossy white. The eggs hatch after about 11 days of incubation. The chicks leave the nest after about 20 days.</p>\n<h2><span id=\"In_culture\">In culture</span></h2>\n<p>In Sri Lanka these woodpeckers go by the generic name of <i>k\u00e6ralaa</i> in Sinhala. In some parts of the island, it is also called <i>kottoruwa</i> although it more often refers to barbets. This bird appears in a 4.50 rupee Sri Lankan postal stamp. It also appears in a 3.75 Taka postal stamp from Bangladesh.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Photos and videos</li></ul>"
    },
    "black tailed godwit": {
        "id": "b062",
        "name": "Black-tailed Godwit",
        "order": "Gruiformes",
        "family": "Rallidae",
        "genus":"Limosa", "species":"limosa",
        "nepali": " ",
        "details": " "
    },
    "black throated accentor": {
        "id": "b063",
        "name": "Black-throated Accentor",
        "order": "Passeriformes",
        "family": "Prunellidae",
        "genus":"Prunella", "species":"atrogularis",
        "nepali": " ",
        "details": " "
    },
    "black throated parrotbill": {
        "id": "b064",
        "name": "Black-throated Parrotbill",
        "order": "Passeriformes",
        "family": "Sylviidae",
        "genus":"Suthora", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "black throated prinia": {
        "id": "b065",
        "name": "Black-throated Prinia",
        "order": "Passeriformes",
        "family": "Cisticolidae",
        "genus":"Prinia", "species":"atrogularis",
        "nepali": " ",
        "details": " "
    },
    "black throated sunbird": {
        "id": "b066",
        "name": "Black-throated Sunbird",
        "order": "Passeriformes",
        "family": "Nectariniidae",
        "genus":"Aethopyga", "species":"saturata",
        "nepali": " ",
        "details": " "
    },
    "black throated thrush": {
        "id": "b067",
        "name": "Black-throated Thrush",
        "order": "Passeriformes",
        "family": "Turdidae",
        "genus":"Turdus", "species":"atrogularis",
        "nepali": " ",
        "details": " "
    },
    "black trailed crake": {
        "id": "b068",
        "name": "Black-trailed Crake",
        "order": "Gruiformes",
        "family": "Rallidae",
        "genus":"Zapornia", "species":"bicolor",
        "nepali": " ",
        "details": " "
    },
    "black winged cuckooshrike": {
        "id": "b069",
        "name": "Black-winged Cuckooshrike",
        "order": "Passeriformes",
        "family": "Campephagidae",
        "genus":"Lalage", "species":"melaschistos",
        "nepali": " ",
        "details": " "
    },
    "black winged kite": {
        "id": "b070",
        "name": "Black-winged Kite",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus":"Elanus", "species":"caeruleus",
        "nepali": " ",
        "details": " "
    },
    "black winged snowfinch": {
        "id": "b071",
        "name": "Black-winged Snowfinch",
        "order": "Passeriformes",
        "family": "Passeridae",
        "genus":"Montifrigilla", "species":"adamsi",
        "nepali": " ",
        "details": " "
    },
    "black winged stilt": {
        "id": "b072",
        "name": "Black-winged Stilt",
        "order": "Charadriiformes",
        "family": "Recurvirostridae",
        "genus":"Himantopus", "species":"himantopus",
        "nepali": " ",
        "details": " "
    },
    "blackish breasted babbler": {
        "id": "b073",
        "name": "Blakish-breasted Babbler",
        "order": "Passeriformes",
        "family": "Timaliidae",
        "genus":"Stachyris", "species":"humei",
        "nepali": " ",
        "details": " "
    },
    "blanford s rosefinch": {
        "id": "b074",
        "name": "Blanford's Rosefinch",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "genus":"Agraphospiza", "species":"rubescens",
        "nepali": " ",
        "details": " "
    },
    "blood phesant": {
        "id": "b075",
        "name": "Blood Phesant",
        "order": "Galliformes",
        "family": "Phasianidae",
        "genus":"Ithaginis", "species":"cruentus",
        "nepali": " ",
        "details": " "
    },
    "blosson headed parakeet": {
        "id": "b076",
        "name": "Blosson-headed Parakeet",
        "order": "Psittaciformes",
        "family": "Psittacidae",
        "genus":"Psittacula", "species":"roseata",
        "nepali": " ",
        "details": " "
    },
    "blue rock thrush": {
        "id": "b077",
        "name": "Blue Rock-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Monticola", "species":"solitarius",
        "nepali": " ",
        "details": " "
    },
    "blue whistling thrush": {
        "id": "b078",
        "name": "Blue Whistling-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Myophonus", "species":"caeruleus",
        "nepali": " ",
        "details": " "
    },
    "blue bearded bee eater": {
        "id": "b079",
        "name": "Blue-bearded Bee-eater",
        "order": "Coraciiformes",
        "family": "Meropidae",
        "genus":"Nyctyornis", "species":"athertoni",
        "nepali": " ",
        "details": " "
    },
    "blue capped redstart": {
        "id": "b080",
        "name": "Blue-cpped REdstart",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Phoenicurus", "species":"coeruleocephala",
        "nepali": " ",
        "details": " "
    },
    "blue capped rock thrush": {
        "id": "b081",
        "name": "Blue-capped Rock-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Monticola", "species":"cinclorhyncha",
        "nepali": " ",
        "details": " "
    },
    "blue eared barbet": {
        "id": "b082",
        "name": "Blue-eared Barbet",
        "order": "Piciformes",
        "family": "Megalaimidae",
        "genus":"Psilopogon", "species":"cyanotis",
        "nepali": " ",
        "details": " "
    },
    "blue eared kingfisher": {
        "id": "b083",
        "name": "Blue-eared Kingfisher",
        "order": "Coraciiformes",
        "family": "Alcedinidae",
        "genus":"Alcedo", "species":"meninting",
        "nepali": " ",
        "details": " "
    },
    "blue fronted redstart": {
        "id": "b084",
        "name": "Blue-fronted Redstart",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Phoenicurus", "species":"frontalis",
        "nepali": " ",
        "details": " "
    },
    "blue naped pitta": {
        "id": "b085",
        "name": "Blue-naped Pitta",
        "order": "Passeriformes",
        "family": "Pittidae",
        "genus":"Hydronis", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "blue tailed bee eater": {
        "id": "b086",
        "name": "Blue-tailed Bee-eater",
        "order": "Coraciiformes",
        "family": "Meropidae",
        "genus":"Merops", "species":"philippinus",
        "nepali": " ",
        "details": " "
    },
    "blue throated barbet": {
        "id": "b087",
        "name": "Blue-throared Barbet",
        "order": "Piciformes",
        "family": "Megalaimidae",
        "genus":"Psilopogon", "species":"asiaticus",
        "nepali": " ",
        "details": " "
    },
    "blue throated blue flycatcher": {
        "id": "b088",
        "name": "Blue-throated Blue-flycatcher",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Cyornis", "species":"rubeculoides",
        "nepali": " ",
        "details": " "
    },
    "blue winged laughingthrush": {
        "id": "b089",
        "name": "Blue-winged Laughingthrush",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "genus":"Trochalopteron", "species":"squamatum",
        "nepali": " ",
        "details": " "
    },
    "blue winged minla": {
        "id": "b090",
        "name": "Blue-winged Minla",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "genus":"Siva", "species":"cyanouroptera",
        "nepali": " ",
        "details": " "
    },
    "bluethroat": {
        "id": "b091",
        "name": "Bluethroat",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Cyanecuula", "species":"svecica",
        "nepali": " ",
        "details": " "
    },
    "blunt winged warbler": {
        "id": "b092",
        "name": "Blunt-winged Warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "genus":"Acrocephalus", "species":"concinens",
        "nepali": " ",
        "details": " "
    },
    "blyth s kingfisher": {
        "id": "b093",
        "name": "Blyth's Kingfisher",
        "order": "Coraciiformes",
        "family": "Alcedinidae",
        "genus":"Alcedo", "species":"hercules",
        "nepali": " ",
        "details": " "
    },
    "blyth s leaf warbler": {
        "id": "b094",
        "name": "Blyth's Leaf-warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Phylloscopus", "species":"reguloides",
        "nepali": " ",
        "details": " "
    },
    "blyth s pipit": {
        "id": "b095",
        "name": "Blyth's Pipit",
        "order": "Passeriformes",
        "family": "Motacillidae",
        "genus":"Anthus", "species":"godlewskii",
        "nepali": " ",
        "details": " "
    },
    "blyth s reed warbler": {
        "id": "b096",
        "name": "Blyth's Reed-warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "genus":"Acrocephalus", "species":"dumetorum",
        "nepali": " ",
        "details": " "
    },
    "bohemian waxwing": {
        "id": "b097",
        "name": "Bohemian Waxwing",
        "order": "Passeriformes",
        "family": "Bombycillidae",
        "genus":"Bombycilla", "species":"garrulus",
        "nepali": " ",
        "details": " "
    },
    "bonelli s eagle": {
        "id": "b098",
        "name": "Bonelli's Eagle",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus":"Aquilla", "species":"fasciata",
        "nepali": " ",
        "details": " "
    },
    "booted eagle": {
        "id": "b099",
        "name": "Booted Eagle",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus":"Hieraaetus", "species":"pennatus",
        "nepali": " ",
        "details": " "
    },
    "booted warbler": {
        "id": "b100",
        "name": "Booted Warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "genus":"Iduna", "species":"caligata",
        "nepali": " ",
        "details": " "
    },
    "brahminy kite": {
        "id": "b101",
        "name": "Brahminy Kite",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus":"Haliastur", "species":"indus",
        "nepali": " ",
        "details": " "
    },
    "brahminy starling": {
        "id": "b102",
        "name": "Brahminy Starling",
        "order": "Passeriformes",
        "family": "Sturnidae",
        "genus":"Sturnia", "species":"pagodarum",
        "nepali": " ",
        "details": " "
    },
    "brambling": {
        "id": "b103",
        "name": "Brambling",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "genus":"Fringilla", "species":"montifringilla",
        "nepali": " ",
        "details": " "
    },
    "brandt s mountain finch": {
        "id": "b104",
        "name": "Brandt's Mountain-finch",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "genus":"Leucosticte", "species":"brandti",
        "nepali": " ",
        "details": " "
    },
    "bristled grassbird": {
        "id": "b105",
        "name": "Bristled Grassbird",
        "order": "Passeriformes",
        "family": "Locustellidae",
        "genus":"Chaetornis", "species":"striata",
        "nepali": " ",
        "details": " "
    },
    "broad billed warbler": {
        "id": "b106",
        "name": "Broad-billed Warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Tickellia", "species":"hodgsoni",
        "nepali": " ",
        "details": " "
    },
    "broen headed gull": {
        "id": "b107",
        "name": "Brown-headed Gull",
        "order": "Charadriiformes",
        "family": "Laridae",
        "genus":"Larus", "species":"brunnicephalus",
        "nepali": " ",
        "details": " "
    },
    "bronze drongo": {
        "id": "b108",
        "name": "Bronzed Drongo",
        "order": "Passeriformes",
        "family": "Dicruridae",
        "genus":"Dicrurus", "species":"aeneus",
        "nepali": " ",
        "details": " "
    },
    "bronze winged jacana": {
        "id": "b109",
        "name": "Bronze-winged Jacana",
        "order": "Charadriiformes",
        "family": "Jacanidae",
        "genus":"Metopidius", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "brown accentor": {
        "id": "b110",
        "name": "Brown Accentor",
        "order": "Passeriformes",
        "family": "Prunellidae",
        "genus":"Prunella", "species":"fulvescens",
        "nepali": " ",
        "details": " "
    },
    "brown boobook": {
        "id": "b111",
        "name": "Brown Boobook",
        "order": "Strigiformes",
        "family": "Strigidae",
        "genus":"Ninox", "species":"scutulata",
        "nepali": " ",
        "details": " "
    },
    "brown bullfinch": {
        "id": "b112",
        "name": "Brown Bullfinch",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "genus":"Pyrrhula", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "brown crake": {
        "id": "b113",
        "name": "Brown Crake",
        "order": "Gruifirmes",
        "family": "Rallidae",
        "genus":"Zapornia", "species":"akool",
        "nepali": " ",
        "details": " "
    },
    "brown dipper": {
        "id": "b114",
        "name": "Brown Dipper",
        "order": "Passeriformes",
        "family": "Cinclidae",
        "genus":"Cinclus", "species":"pallasii",
        "nepali": " ",
        "details": " "
    },
    "brown fish owl": {
        "id": "b115",
        "name": "Brown Fish-owl",
        "order": "Strigiformes",
        "family": "Strigidae",
        "genus":"Ketupa", "species":"zeylonensis",
        "nepali": " ",
        "details": " "
    },
    "brown grasshopper warbler": {
        "id": "b116",
        "name": "Brown Grasshopper-warbler",
        "order": "Passeriformes",
        "family": "Locustellidae",
        "genus":"Locustella", "species":"luteoventris",
        "nepali": " ",
        "details": " "
    },
    "brown parrotbill": {
        "id": "b117",
        "name": "Brown Parrotbill",
        "order": "Passeriformes",
        "family": "Sylviidae",
        "genus":"Cholornis", "species":"unicolor",
        "nepali": " ",
        "details": " "
    },
    "brown rockchat": {
        "id": "b118",
        "name": "Brown Rockchat",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Oenanthe", "species":"fusca",
        "nepali": " ",
        "details": " "
    },
    "brown shrike": {
        "id": "b119",
        "name": "Brown Shrike",
        "order": "Passeriformes",
        "family": "Laniidae",
        "genus":"Lanius", "species":"cristatus",
        "nepali": " ",
        "details": " "
    },
    "brown wood owl": {
        "id": "b120",
        "name": "Brown Wood-owl",
        "order": "Strigiformes",
        "family": "Strigidae",
        "genus":"Strix", "species":"leptogrammica",
        "nepali": " ",
        "details": " "
    },
    "brown breasted flycatcher": {
        "id": "b121",
        "name": "Brown-breasted Flycatcher",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Muscicapa", "species":"muttui",
        "nepali": " ",
        "details": " "
    },
    "brown fronted woodpecker": {
        "id": "b122",
        "name": "Brown-fronted Woodpecker",
        "order": "Piciformes",
        "family": "Picidae",
        "genus":"Leiopicus", "species":"auriceps",
        "nepali": " ",
        "details": " "
    },
    "brown headed barbet": {
        "id": "b123",
        "name": "Brown-headed Barbet",
        "order": "Piciformes",
        "family": "Megalaimidae",
        "genus":"Psilopogon", "species":"zeylanicus",
        "nepali": " ",
        "details": " "
    },
    "brownish flanked bush warbler": {
        "id": "b124",
        "name": "Brownish-flanked Bush-warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Horornis", "species":"fortipes",
        "nepali": " ",
        "details": " "
    },
    "buff barred warbler": {
        "id": "b125",
        "name": "Buff-barred Warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Phylloscopus", "species":"pulcher",
        "nepali": " ",
        "details": " "
    },
    "buff bellied pipit": {
        "id": "b126",
        "name": "Buff-bellied Pipit",
        "order": "Passeriformes",
        "family": "Motacillidae",
        "genus":"Anthus", "species":"rubescens",
        "nepali": " ",
        "details": " "
    },
    "caspian tern": {
        "id": "c001",
        "name": "Caspian Tern",
        "order": "Charadriiformes",
        "family": "Laridae",
        "genus":"Hydroprogne", "species":"caspia",
        "nepali": " ",
        "details": " "
    },
    "cattle egret": {
        "id": "c002",
        "name": "Cattle Egret",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "genus":"Bubulcus", "species":"ibis",
        "nepali": " ",
        "details": " "
    },
    "changeable hawk eagle": {
        "id": "c003",
        "name": "Changeable Hawk-eagle",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus":"Nisaetus", "species":"cirrhatus",
        "nepali": " ",
        "details": " "
    },
    "cheer plesant": {
        "id": "c004",
        "name": "Cheer Pleasant",
        "order": "Galliformes",
        "family": "Phasianidae",
        "genus":"Catreus", "species":"wallichii",
        "nepali": " ",
        "details": " "
    },
    "chestnu bellied rock thrush": {
        "id": "c005",
        "name": "Chestnut-bellied Rock-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Monticola", "species":"rufiventris",
        "nepali": " ",
        "details": " "
    },
    "chestnut bunting": {
        "id": "c006",
        "name": "Chestnut Bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "genus":"Emberiza", "species":"rutila",
        "nepali": " ",
        "details": " "
    },
    "chestnut munia": {
        "id": "c007",
        "name": "Chestnut Munia",
        "order": "Passeriformes",
        "family": "Estrildidae",
        "genus":"Lonchura", "species":"atricapilla",
        "nepali": " ",
        "details": " "
    },
    "chestnut thrush": {
        "id": "c008",
        "name": "Chestnut Thrush",
        "order": "Passeriformes",
        "family": "Turdidae",
        "genus":"Turdus", "species":"rubrocanus",
        "nepali": " ",
        "details": " "
    },
    "chestnut eared bunting": {
        "id": "c009",
        "name": "Chestnut-eared bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "genus":"Emberiza", "species":"fucata",
        "nepali": " ",
        "details": " "
    },
    "chestnut bellied nuthatch": {
        "id": "c010",
        "name": "Chestnut-bellied Nuthatch",
        "order": "Passeriformes",
        "family": "Sittidae",
        "genus":"Sitta", "species":"cinnamoventris",
        "nepali": " ",
        "details": " "
    },
    "chestnut capped babbler": {
        "id": "c011",
        "name": "Chestnut-capped Babbler",
        "order": "Passeriformes",
        "family": "Timaliidae",
        "genus":"Timalia", "species":"pileata",
        "nepali": " ",
        "details": " "
    },
    "chestnut crowned bush warbler": {
        "id": "c012",
        "name": "Chestnut-crowned Bush-warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Cettia", "species":"major",
        "nepali": " ",
        "details": " "
    },
    "chestnut crowned laughingthrush": {
        "id": "c013",
        "name": "Chestnut-crowned Laughingthrush",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "genus":"Trochalopteron", "species":"erythrocephalum",
        "nepali": " ",
        "details": " "
    },
    "chestnut crowned warbler": {
        "id": "c014",
        "name": "Chestnut-crowned Warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Phylloscopus", "species":"castaniceps",
        "nepali": " ",
        "details": " "
    },
    "chestnut headed bee eater": {
        "id": "c015",
        "name": "Chestnut-headed Bee-eater",
        "order": "Coraciformes",
        "family": "Meropidae",
        "genus":"Merops", "species":"leschenaulti",
        "nepali": " ",
        "details": " "
    },
    "chestnut headed tesia": {
        "id": "c016",
        "name": "Chestnut-headed Tesia",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "genus":"Cettia", "species":"castaneocoronata",
        "nepali": " ",
        "details": " "
    },
    "chestnut shouldered bush sparrow": {
        "id": "c017",
        "name": "Chestnut-shouldered Bush-sparrow",
        "order": "Passeriformes",
        "family": "Passeridae",
        "genus":"Gymnoris", "species":"xanthocollis",
        "nepali": " ",
        "details": " "
    },
    "chestnut tailed starling": {
        "id": "c018",
        "name": "Chestnut-tailed Starling",
        "order": "Passeriformes",
        "family": "Sturnidae",
        "genus":"Sturnia", "species":"malabarica",
        "nepali": " ",
        "details": " "
    },
    "chestnut winged cuckoo": {
        "id": "c019",
        "name": "Chestnut-winged Cuckoo",
        "order": "Cuculiforms",
        "family": "Cuculidae",
        "genus":"Clamator", "species":"coromandus",
        "nepali": " ",
        "details": " "
    },
    "chinese grasshopper warbler": {
        "id": "c020",
        "name": "Chinese Grasshopper-warbler",
        "order": "Passeriformes",
        "family": "Locustellidae",
        "genus":"Locustella", "species":"tacsanowskia",
        "nepali": " ",
        "details": " "
    },
    "chinese rubythroat": {
        "id": "c021",
        "name": "Chinese Rubythroat",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "genus":"Calliope", "species":"tschebaiewi",
        "nepali": " ",
        "details": " "
    },
    "chinese spot billed duck": {
        "id": "c022",
        "name": "Chinese Spot-billed Duck",
        "order": "Anseriformes",
        "family": "Anatidae",
        "genus":"Anas", "species":"zonorhyncha",
        "nepali": " ",
        "details": " "
    },
    "chukar": {
        "id": "c023",
        "name": "Chukar",
        "order": "Galliformes",
        "family": "Phasianidae",
        "genus":"Alectoris", "species":"chukar",
        "nepali": " ",
        "details": " "
    },
    "cinereous vulture": {
        "id": "c024",
        "name": "Cinerouse Vulture",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "genus":"Aegypius", "species":"monachus",
        "nepali": " ",
        "details": " "
    },
    "cinnamon bittern": {
        "id": "c025",
        "name": "Cinnamon Bittern",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "genus":"Ixobrychus", "species":"cinnamomeus",
        "nepali": " ",
        "details": " "
    },
    "citrine wagtail": {
        "id": "c026",
        "name": "Citrine Wagtail",
        "order": "Passeriformes",
        "family": "Motacillidae",
        "genus":"Motacilla", "species":"citreola",
        "nepali": " ",
        "details": " "
    },
    "clamorous reed warbler": {
        "id": "c027",
        "name": "Clamorous Reed-warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "genus":"Acrocephalus", "species":"stentoreus",
        "nepali": " ",
        "details": " "
    },
    "coal tit": {
        "id": "c028",
        "name": "Coal Tit",
        "order": "Passeriformes",
        "family": "Paridae",
        "genus":"Periparus", "species":"ater",
        "nepali": " ",
        "details": " "
    },
    "collard scops owl": {
        "id": "c029",
        "name": "Collard Scops-owl",
        "order": "Strigiformes",
        "family": "Strigidae",
        "genus":"Otus", "species":"lettia",
        "nepali": " ",
        "details": " "
    },
    "collared falconet": {
        "id": "c030",
        "name": "Collared Falconet",
        "order": "Cariamiformes",
        "family": "Falconidae",
        "genus":"Microhierax", "species":"caerulescens",
        "nepali": " ",
        "details": " "
    },
    "collared groasbeak": {
        "id": "c031",
        "name": "Collared Groasbeak",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "genus":"Mycerobas", "species":"affinis",
        "nepali": " ",
        "details": " "
    },
    "collared owlet": {
        "id": "c032",
        "name": "Collared Owlet",
        "order": "Strigiformes",
        "family": "Strigiformes",
        "genus":"Glaucidium", "species":"brodiei",
        "nepali": " ",
        "details": " "
    },
    "collared sand martin": {
        "id": "c033",
        "name": "Collared Sand Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Riparia", "species":"riparia",
        "nepali": " ",
        "details": " "
    },
    "common babbler": {
        "id": "c034",
        "name": "Common Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Argya", "species":"caudata",
        "nepali": " ",
        "details": " "
    },
    "common barn owl": {
        "id": "c035",
        "name": "Common barn owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Tytonidae,
        "genus":"Tyto", "species":"alba",
        "nepali": " ",
        "details": " "
    },
    "common buttonquail": {
        "id": "c036",
        "name": "Common Buttonquail",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Turnicidae,
        "genus":"Turnix", "species":"sylvaticus",
        "nepali": " ",
        "details": " "
    },
    "common chaffinch": {
        "id": "c037",
        "name": "Common Chaffinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Fringilla", "species":"coelebs",
        "nepali": " ",
        "details": " "
    },
    "cmmon coot": {
        "id": "c038",
        "name": "Common Coot",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Fulica", "species":"atra",
        "nepali": " ",
        "details": " "
    },
    "common crane": {
        "id": "c039",
        "name": "Common Crane",
        "order": order.GRUIFORMES,
        "family": familyname.Gruidae,
        "genus":"Grus", "species":"grus",
        "nepali": " ",
        "details": " "
    },
    "common cuckoo": {
        "id": "c040",
        "name": "Common Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Cuculus", "species":"canorus",
        "nepali": " ",
        "details": " "
    },
    "common goldeneye": {
        "id": "c041",
        "name": "Common Goldeneye",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Bucephala", "species":"clangula",
        "nepali": " ",
        "details": " "
    },
    "common grasshopper warbler": {
        "id": "c042",
        "name": "Common Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "genus":"Locustella", "species":"naevia",
        "nepali": " ",
        "details": " "
    },
    "common green magpie": {
        "id": "c043",
        "name": "Common Green Magpie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Cissa", "species":"chinensis",
        "nepali": " ",
        "details": " "
    },
    "common greenshank": {
        "id": "c044",
        "name": "Common Greenshank",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Tringa", "species":"nebularia",
        "nepali": " ",
        "details": " "
    },
    "common hawk cuckoo": {
        "id": "c045",
        "name": "Common Hawk-cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Hierococcyx", "species":"varius",
        "nepali": " ",
        "details": " "
    },
    "common hill myna": {
        "id": "c046",
        "name": "Common Hill Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Gracula", "species":"religiosa",
        "nepali": " ",
        "details": " "
    },
    "common hoopoe": {
        "id": "c047",
        "name": "Common Hoopoe",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Upupidae,
        "genus":"Upupa", "species":"epops",
        "nepali": " ",
        "details": " "
    },
    "common iora": {
        "id": "c048",
        "name": "Common Iora",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "genus":"Aegithina", "species":"tiphia",
        "nepali": " ",
        "details": " "
    },
    "common kestrel": {
        "id": "c049",
        "name": "Common Kestrel",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Flaco", "species":"tinnunculus",
        "nepali": " ",
        "details": " "
    },
    "common kingfisher": {
        "id": "c050",
        "name": "Common Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "genus":"Alcedo", "species":"atthis",
        "nepali": " ",
        "details": " "
    },
    "common linnet": {
        "id": "c051",
        "name": "Common Linnet",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Linaria", "species":"cannabina",
        "nepali": " ",
        "details": " "
    },
    "common moorhen": {
        "id": "c052",
        "name": "Common Moorhen",
        "order":order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Gallinula", "species":"chloropus",
        "nepali": " ",
        "details": " "
    },
    "common myna": {
        "id": "c053",
        "name": "Common Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Acridotheres", "species":"tristis",
        "nepali": " ",
        "details": " "
    },
    "common pochard": {
        "id": "c054",
        "name": "Common Pochard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Aythya", "species":"ferina",
        "nepali": " ",
        "details": " "
    },
    "common quail": {
        "id": "c055",
        "name": "Common Quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Coturnix", "species":"coturnix",
        "nepali": " ",
        "details": " "
    },
    "common raven": {
        "id": "c056",
        "name": "Common Raven",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Corvus", "species":"corax",
        "nepali": " ",
        "details": " "
    },
    "common redshank": {
        "id": "c057",
        "name": "Common Redshank",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Tringa", "species":"totanus",
        "nepali": " ",
        "details": " "
    },
    "common rosefinch": {
        "id": "c058",
        "name": "Common Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"erythrinus",
        "nepali": " ",
        "details": " "
    },
    "common sandpiper": {
        "id": "c059",
        "name": "Common Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Actitis", "species":"hypoleucos",
        "nepali": " ",
        "details": " "
    },
    "common shelduck": {
        "id": "c060",
        "name": "Common Shelduck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Tadorna", "species":"tardona",
        "nepali": " ",
        "details": " "
    },
    "common snipe": {
        "id": "c061",
        "name": "Common Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Gallinago", "species":"gallinago",
        "nepali": " ",
        "details": " "
    },
    "common starling": {
        "id": "c062",
        "name": "Common Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Sturnus", "species":"vulgaris",
        "nepali": " ",
        "details": " "
    },
    "common stonechat": {
        "id": "c063",
        "name": "Common Stonechat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Saxoicola", "species":"torquatus",
        "nepali": " ",
        "details": " "
    },
    "common swift": {
        "id": "c064",
        "name": "Common Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Apus", "species":"apus",
        "nepali": " ",
        "details": " "
    },
    "common tailorbird": {
        "id": "c065",
        "name": "Common Tailorbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Orthotomus", "species":"sutorius",
        "nepali": " ",
        "details": " "
    },
    "common teal": {
        "id": "c066",
        "name": "Common Teal",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anas", "species":"crecca",
        "nepali": " ",
        "details": " "
    },
    "common tern": {
        "id": "c067",
        "name": "Common Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Sterna", "species":"hirundo",
        "nepali": " ",
        "details": " "
    },
    "common woodpigeon": {
        "id": "c068",
        "name": "Common Woodpigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Columba", "species":"palumbus",
        "nepali": " ",
        "details": " "
    },
    "common woodshrike": {
        "id": "c069",
        "name": "Common Woodshrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Vangidae,
        "genus":"Tephrodornis", "species":"pondicerianus",
        "nepali": " ",
        "details": " "
    },
    "coppersmith barbet": {
        "id": "c70",
        "name": "Coppersmith Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "genus":"Psilopogon", "species":"haemacephalus",
        "nepali": " ",
        "details": " "
    },
    "coral billed scimitar babbler": {
        "id": "c071",
        "name": "Coral-billed Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Pmatorhinus", "species":"ferruginosus",
        "nepali": " ",
        "details": " "
    },
    "cotton pygmy goose": {
        "id": "c072",
        "name": "Cotton Pygmy-goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Nettapus", "species":"coromandelianus",
        "nepali": " ",
        "details": " "
    },
    "creasted serpent eagle": {
        "id": "c073",
        "name": "Creasted Serpant-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Spilornis", "species":"cheela",
        "nepali": " ",
        "details": " "
    },
    "crested bunting": {
        "id": "c074",
        "name": "Crested Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"lathami",
        "nepali": " ",
        "details": " "
    },
    "crested goshawk": {
        "id": "c075",
        "name": "Crested Goshawk",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Accipiter", "species":"trivigatus",
        "nepali": " ",
        "details": " "
    },
    "crested kingfisher": {
        "id": "c076",
        "name": "Crested Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "genus":"Megaceryle", "species":"lugubris",
        "nepali": " ",
        "details": " "
    },
    "crested lark": {
        "id": "c077",
        "name": "Crested Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Galerida", "species":"cristata",
        "nepali": " ",
        "details": " "
    },
    "crested treeswift": {
        "id": "c078",
        "name": "Crested Treeswift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Hemiprocnidae,
        "genus":"Hemiprocne", "species":"cornata",
        "nepali": " ",
        "details": " "
    },
    "crimson sunbird": {
        "id": "c079",
        "name": "Crimson Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Aethopyga", "species":"siparaja",
        "nepali": " ",
        "details": " "
    },
    "crimson browed finch": {
        "id": "c080",
        "name": "Crimson-browed Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"subhimachalus",
        "nepali": " ",
        "details": " "
    },
    "crow billied drongo": {
        "id": "c081",
        "name": "Crow-billed Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "genus":"Dicrurus", "species":"annectens",
        "nepali": " ",
        "details": " "
    },
    "curlew sandpiper": {
        "id": "c082",
        "name": "Curlew Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"ferruginea",
        "nepali": " ",
        "details": " "
    },
    "darjeeling woodpecker": {
        "id": "d001",
        "name": "Darjeeling Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Dendrocopos", "species":"darhellensis",
        "nepali": " ",
        "details": " "
    },
    "dark breasted rosefinch": {
        "id": "d002",
        "name": "Dark-breasted Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Procarduelis", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "dark rumped rosefinch": {
        "id": "d003",
        "name": "Dark-rumped Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"edwardsii",
        "nepali": " ",
        "details": " "
    },
    "dark sided flycatcher": {
        "id": "d004",
        "name": "Dark-sided Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Muscicapa", "species":"sibirica",
        "nepali": " ",
        "details": " "
    },
    "dark sided thrush": {
        "id": "d005",
        "name": "Dark-sided Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Zoothera", "species":"marginata",
        "nepali": " ",
        "details": " "
    },
    "daurian redstart": {
        "id": "d006",
        "name": "Daurian Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"auroreus",
        "nepali": " ",
        "details": " "
    },
    "demoiselle crane": {
        "id": "d007",
        "name": "Demoiselle Crane",
        "order": order.GRUIFORMES,
        "family": familyname.Gruidae,
        "genus":"Anthropoides", "species":"virgo",
        "nepali": " ",
        "details": " "
    },
    "desert wheatear": {
        "id": "d008",
        "name": "Desert Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Oenanthe", "species":"deserti",
        "nepali": " ",
        "details": " "
    },
    "dunlin": {
        "id": "d009",
        "name": "Dunlin",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"alpina",
        "nepali": " ",
        "details": " "
    },
    "dusky thrush": {
        "id": "d010",
        "name": "Dusky Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"eunomus",
        "nepali": " ",
        "details": " "
    },
    "dusky warbler": {
        "id": "d011",
        "name": "Dusky Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"fuscatus",
        "nepali": " ",
        "details": " "
    },
    "dusty eagle owl": {
        "id": "d012",
        "name": "Dusky Eagle-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Tytonidae,
        "genus":"Bubo", "species":"coromandus",
        "nepali": " ",
        "details": " "
    },
    "easter marsh harrier": {
        "id": "e001",
        "name": "Eastern Marsh-harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Circus", "species":"spilonotus",
        "nepali": " ",
        "details": " "
    },
    "eastern goldfinch": {
        "id": "e002",
        "name": "Eastern Goldfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carduelis", "species":"caniceps",
        "nepali": " ",
        "details": " "
    },
    "eastern grass owl": {
        "id": "e003",
        "name": "Eastern Grass-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Tytonidae,
        "genus":"Tyto", "species":"longimembris",
        "nepali": " ",
        "details": " "
    },
    "eastern imperial eagle": {
        "id": "e004",
        "name": "Eastern Imperial Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Aquila", "species":"heliaca",
        "nepali": " ",
        "details": " "
    },
    "eastern orphean warbler": {
        "id": "e005",
        "name": "Eastern Orphean Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Sylvia", "species":"crassirostris",
        "nepali": " ",
        "details": " "
    },
    "egyptian vulture": {
        "id": "e006",
        "name": "Egyptian Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Neophron", "species":"percnopterus",
        "nepali": " ",
        "details": " "
    },
    "estern water rail": {
        "id": "e007",
        "name": "Eastern Water Rail",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Rallus", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "eurasian bittern": {
        "id": "e008",
        "name": "Eurasian Bittern",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Botaurus", "species":"stellaris",
        "nepali": " ",
        "details": " "
    },
    "eurasian collared dove": {
        "id": "e009",
        "name": "Eurasian Collared-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Streptopelia", "species":"decaocto",
        "nepali": " ",
        "details": " "
    },
    "eurasian crag martin": {
        "id": "e010",
        "name": "Eurasian Crag Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Ptyonoprogne", "species":"rupestris",
        "nepali": " ",
        "details": " "
    },
    "eurasian curlew": {
        "id": "e011",
        "name": "Eurasian Curlew",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Numenius", "species":"arquata",
        "nepali": " ",
        "details": " "
    },
    "eurasian eagle owl": {
        "id": "e012",
        "name": "Eurasian Eagle-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Bubo", "species":"bubo",
        "nepali": " ",
        "details": " "
    },
    "eurasian hobby": {
        "id": "e013",
        "name": "Eurasian Hobby",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"subbuteo",
        "nepali": " ",
        "details": " "
    },
    "eurasian oystercatcher": {
        "id": "e014",
        "name": "Eurasian Oystercatcher",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Haematopodidae,
        "genus":"Haematopus", "species":"ostralegus",
        "nepali": " ",
        "details": " "
    },
    "eurasian siskin": {
        "id": "e015",
        "name": "Eurasian Siskin",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Spinus", "species":"spinus",
        "nepali": " ",
        "details": " "
    },
    "eurasian skylark": {
        "id": "e016",
        "name": "Eurasian Skylark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Alauda", "species":"arvensis",
        "nepali": " ",
        "details": " "
    },
    "eurasian sparrowhawk": {
        "id": "e017",
        "name": "Eurasian Sparrowhawk",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Accipiter", "species":"nisus",
        "nepali": " ",
        "details": " "
    },
    "eurasian spoonbill": {
        "id": "e018",
        "name": "Eurasian Spoonbill",
        "order": order.OTIDIFORMES,
        "family": familyname.Threskiornithidae,
        "genus":"Platalea", "species":"leucorodia",
        "nepali": " ",
        "details": " "
    },
    "eurasian tree sparrow": {
        "id": "e019",
        "name": "Eurasian Tree Sparrow",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "genus":"Passer", "species":"montanus",
        "nepali": " ",
        "details": " "
    },
    "eurasian wigeon": {
        "id": "e020",
        "name": "Eurasian Wigeon",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Mareca", "species":"penelope",
        "nepali": " ",
        "details": " "
    },
    "eurasian wookcock": {
        "id": "e021",
        "name": "Eurasian Woodcock",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Scolopax", "species":"rusticola",
        "nepali": " ",
        "details": " "
    },
    "eurasian wryneck": {
        "id": "e022",
        "name": "Eurasian Wryneck",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Jynx", "species":"torquilla",
        "nepali": " ",
        "details": " "
    },
    "eversmann s redstart": {
        "id": "e023",
        "name": "Eversmann's Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"erythronotus",
        "nepali": " ",
        "details": " "
    },
    "eyebrowed thrush": {
        "id": "e024",
        "name": "Eyebrowed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"obscurus",
        "nepali": " ",
        "details": " "
    },
    "falcated duck": {
        "id": "f001",
        "name": "Falcated Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Mareca", "species":"falcata",
        "nepali": " ",
        "details": " "
    },
    "ferruginous duck": {
        "id": "f002",
        "name": "Ferruginous Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Aythya", "species":"nyroca",
        "nepali": " ",
        "details": " "
    },
    "ferruginous flycatcher": {
        "id": "f003",
        "name": "Ferruginous Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Muscicapa", "species":"ferruginea",
        "nepali": " ",
        "details": " "
    },
    "finn s weaver": {
        "id": "f004",
        "name": "Finn's Weaver",
        "order": order.PASSERIFORMES,
        "family":familyname.Ploceidae,
        "genus":"Ploceus", "species":"margarhynchus",
        "nepali": " ",
        "details": " "
    },
    "fire breasted flowerpecker": {
        "id": "f005",
        "name": "Fire-breasted Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicaeum", "species":"ignipectus",
        "nepali": " ",
        "details": " "
    },
    "fire capped tit": {
        "id": "f006",
        "name": "Fire-capped Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Cephalopyrus", "species":"flammiceps",
        "nepali": " ",
        "details": " "
    },
    "fire tailed myzornis": {
        "id": "f007",
        "name": "Fire-tailed Myzornis",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Myzornis", "species":"pyrrhoura",
        "nepali": " ",
        "details": " "
    },
    "fire tailed sunbird": {
        "id": "f008",
        "name": "Fire-tailed Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Aethopyga", "species":"ignicauda",
        "nepali": " ",
        "details": " "
    },
    "forest wagtail": {
        "id": "f009",
        "name": "Forest Wagtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Dendronanthus", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "fork tailed drongo cuckoo": {
        "id": "f010",
        "name": "Fork-tailed Drongo-cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Surniculus", "species":"dicruroides",
        "nepali": " ",
        "details": " "
    },
    "fulvous parrotbill": {
        "id": "f011",
        "name": "Fulvous Parrotbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Suthora", "species":"fulvifrons",
        "nepali": " ",
        "details": " "
    },
    "fulvous whistling duck": {
        "id": "f012",
        "name": "Fulvous Whistling-duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Dendrocygna", "species":"bicolor",
        "nepali": " ",
        "details": " "
    },
    "fulvous breasted woodpecker": {
        "id": "f013",
        "name": "Fulvous-breasted Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Dendrocopos", "species":"macei",
        "nepali": " ",
        "details": " "
    },
    "gadwall": {
        "id": "g001",
        "name": "Gadwall",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Mareca", "species":"strepera",
        "nepali": " ",
        "details": " "
    },
    "garganey": {
        "id": "g002",
        "name": "Garganey",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Spatula", "species":"querquedula",
        "nepali": " ",
        "details": " "
    },
    "glossy ibis": {
        "id": "g003",
        "name": "Glossy Ibis",
        "order": order.OTIDIFORMES,
        "family": familyname.Threskiornithidae,
        "genus":"Plegadis", "species":"falcinellus",
        "nepali": " ",
        "details": " "
    },
    "gold naped finch": {
        "id": "g004",
        "name": "Gold-naped Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Pyrrhoplectes", "species":"epauletta",
        "nepali": " ",
        "details": " "
    },
    "golden babbler": {
        "id": "g005",
        "name": "Golden Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Cyanoderma", "species":"chrysaeum",
        "nepali": " ",
        "details": " "
    },
    "golden bush robin": {
        "id": "g006",
        "name": "Golden Bush-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Tarsiger", "species":"chrysaeus",
        "nepali": " ",
        "details": " "
    },
    "golden eagle": {
        "id": "g007",
        "name": "Golden Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Aquila", "species":"chrysaetos",
        "nepali": " ",
        "details": " "
    },
    "golden breasted fulvetta": {
        "id": "g008",
        "name": "Golden-breasted Fulvetta",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Lioparus", "species":"chrysotis",
        "nepali": " ",
        "details": " "
    },
    "golden fronted leafbird": {
        "id": "g009",
        "name": "Golden-fronted Leafbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Chloropseidae,
        "genus":"Chloropsis", "species":"aurifrons",
        "nepali": " ",
        "details": " "
    },
    "golden headed cisticola": {
        "id": "g010",
        "name": "Golden-headed Cisticola",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Cisticola", "species":"exilis",
        "nepali": " ",
        "details": " "
    },
    "golden throated barbet": {
        "id": "g011",
        "name": "Golden-throated Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "genus":"Psilopogon", "species":"franklinii",
        "nepali": " ",
        "details": " "
    },
    "goldrest": {
        "id": "g012",
        "name": "Goldcrest",
        "order": order.PASSERIFORMES,
        "family": familyname.Regulidae,
        "genus":"Regulus", "species":"regulus",
        "nepali": " ",
        "details": " "
    },
    "goosander": {
        "id": "g013",
        "name": "Goosander",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Mergus", "species":"merganser",
        "nepali": " ",
        "details": " "
    },
    "gould s shortwing": {
        "id": "g014",
        "name": "Gould's Shortwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Heteroxenicus", "species":"stellatus",
        "nepali": " ",
        "details": " "
    },
    "gould s sunbird": {
        "id": "g015",
        "name": "Gould's Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Aethopyga", "species":"gouldiae",
        "nepali": " ",
        "details": " "
    },
    "graceful prinia": {
        "id": "g016",
        "name": "Graceful Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"gracilis",
        "nepali": " ",
        "details": " "
    },
    "grandala": {
        "id": "g017",
        "name": "Grandala",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Grandala", "species":"coelicolor",
        "nepali": " ",
        "details": " "
    },
    "great barbet": {
        "id": "g018",
        "name": "Great Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "genus":"Psilopogon", "species":"virens",
        "nepali": " ",
        "details": " "
    },
    "great cormorant": {
        "id": "g019",
        "name": "Great Cormorant",
        "order": order.SULIFORMES,
        "family": familyname.Phalacrocoracidae,
        "genus":"sPhalacrocorax", "species":"carbo",
        "nepali": " ",
        "details": " "
    },
    "great created grebe": {
        "id": "g020",
        "name": "Great Crested Grebe",
        "order": order.PODICIPEDIFORMES,
        "family": familyname.Podicipedidae,
        "genus":"Podiceps", "species":"cristatus",
        "nepali": " ",
        "details": " "
    },
    "great grey shrike": {
        "id": "g021",
        "name": "Great Grey Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "genus":"Lanius", "species":"excubitor",
        "nepali": " ",
        "details": " "
    },
    "great hornbill": {
        "id": "g022",
        "name": "Great Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "genus":"Buceros", "species":"bicornis",
        "nepali": " ",
        "details": " "
    },
    "great myna": {
        "id": "g023",
        "name": "Great Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Acridotheres", "species":"grandis",
        "nepali": " ",
        "details": " "
    },
    "great parrotbill": {
        "id": "g024",
        "name": "Great Parrotbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Conostoma", "species":"aemodium",
        "nepali": " ",
        "details": " "
    },
    "great rosefinch": {
        "id": "g025",
        "name": "Great Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"rubicilla",
        "nepali": " ",
        "details": " "
    },
    "great thick knee": {
        "id": "g026",
        "name": "Great Thick-knee",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Burhinidae,
        "genus":"Esacus", "species":"recurvirostris",
        "nepali": " ",
        "details": " "
    },
    "great tit": {
        "id": "g027",
        "name": "Great Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Parus", "species":"major",
        "nepali": " ",
        "details": " "
    },
    "great white egret": {
        "id": "g028",
        "name": "Great White Egret",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ardea", "species":"alba",
        "nepali": " ",
        "details": " "
    },
    "great white pelican": {
        "id": "g029",
        "name": "Great White Pelican",
        "order": order.PELECANIFORMES,
        "family": familyname.Pelecanidae,
        "genus":"Pelecanus", "species":"onocrotalus",
        "nepali": " ",
        "details": " "
    },
    "great staty woodpecker": {
        "id": "g030",
        "name": "Great Slaty Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Mulleripicus", "species":"pulverulentus",
        "nepali": " ",
        "details": " "
    },
    "greater adjutant": {
        "id": "g031",
        "name": "Greater Adjutant",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "genus":"Leptoptilos", "species":"dubius",
        "nepali": " ",
        "details": " "
    },
    "greater coucal": {
        "id": "g032",
        "name": "Greater Coucal",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Centropus", "species":"sinensis",
        "nepali": " ",
        "details": " "
    },
    "greater flameback": {
        "id": "g033",
        "name": "Greater Flameback",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Chrysocolaptes", "species":"guttacristatus",
        "nepali": " ",
        "details": " "
    },
    "greater flamingo": {
        "id": "g034",
        "name": "Greater Flamingo",
        "order": order.PHOENICOPTERIFORMES,
        "family": familyname.Phoenicopteridae,
        "genus":"Phoenicopterus", "species":"roseus",
        "nepali": " ",
        "details": " "
    },
    "greater necklaced laughingthrush": {
        "id": "g035",
        "name": "Greater Necklaced Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"pectoralis",
        "nepali": " ",
        "details": " "
    },
    "greater painted snipe": {
        "id": "g036",
        "name": "Greater Painted-snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Rostratulidae,
        "genus":"Rostratula", "species":"benghalensis",
        "nepali": " ",
        "details": " "
    },
    "greater racquet tailed drongo": {
        "id": "g037",
        "name": "Greater Racquet-tailed Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "genus":"Dicrurus", "species":"paradiseus",
        "nepali": " ",
        "details": " "
    },
    "greater sandplover": {
        "id": "g038",
        "name": "Greater Sandplover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Charadrius", "species":"leschenaultii",
        "nepali": " ",
        "details": " "
    },
    "greater scaup": {
        "id": "g039",
        "name": "Greater Scaup",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Aythya", "species":"marila",
        "nepali": " ",
        "details": " "
    },
    "greater short toed lark": {
        "id": "g040",
        "name": "Greater Short-toed Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Calandrella", "species":"branchydactyla",
        "nepali": " ",
        "details": " "
    },
    "greater spotted eagle": {
        "id": "g041",
        "name": "Greater Spotted Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Clanga", "species":"clanga",
        "nepali": " ",
        "details": " "
    },
    "greater white fronted goose": {
        "id": "g042",
        "name": "Greater White-fronted Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anser", "species":"albifrons",
        "nepali": " ",
        "details": " "
    },
    "greater yellownape": {
        "id": "g043",
        "name": "Greater Yellownape",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Chrysophlegma", "species":"flavinucha",
        "nepali": " ",
        "details": " "
    },
    "green cochoa": {
        "id": "g044",
        "name": "Green Cochoa",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Cochoa", "species":"viridis",
        "nepali": " ",
        "details": " "
    },
    "green sandpiper": {
        "id": "g045",
        "name": "Green Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Tringa", "species":"ochropus",
        "nepali": " ",
        "details": " "
    },
    "green shrike babbler": {
        "id": "g046",
        "name": "Green Shrike-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Vireonidae,
        "genus":"Pteruthius", "species":"xanthochlorus",
        "nepali": " ",
        "details": " "
    },
    "green warbler": {
        "id": "g047",
        "name": "Green Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"nitidus",
        "nepali": " ",
        "details": " "
    },
    "green backed herono": {
        "id": "g048",
        "name": "Green-backed Herono",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Butorides", "species":"virescens",
        "nepali": " ",
        "details": " "
    },
    "green backed tit": {
        "id": "g049",
        "name": "Green-backed Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"PArus", "species":"monticolus",
        "nepali": " ",
        "details": " "
    },
    "green billed malkoha": {
        "id": "g050",
        "name": "Green-billed Malkoha",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Phaenicophaeus", "species":"tristis",
        "nepali": " ",
        "details": " "
    },
    "green crowned warbler": {
        "id": "g051",
        "name": "Green-crowned Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"burkii",
        "nepali": " ",
        "details": " "
    },
    "green tailed sunbird": {
        "id": "g052",
        "name": "Green-tailed Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Aethopyga", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "greenish warbler": {
        "id": "g053",
        "name": "Greenish Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"trochiloides",
        "nepali": " ",
        "details": " "
    },
    "grey bushchat": {
        "id": "g054",
        "name": "Grey Bushchat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Saxicola", "species":"ferreus",
        "nepali": " ",
        "details": " "
    },
    "grey heron": {
        "id": "g055",
        "name": "Grey Heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ardea", "species":"cinerea",
        "nepali": " ",
        "details": " "
    },
    "grey nightjar": {
        "id": "g056",
        "name": "Grey Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "genus":"Caprimulgus", "species":"jotaka",
        "nepali": " ",
        "details": " "
    },
    "grey plover": {
        "id": "g057",
        "name": "Grey Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Pluvialis", "species":"squatarola",
        "nepali": " ",
        "details": " "
    },
    "grey treepie": {
        "id": "g058",
        "name": "Grey Treepie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Dendrocitta", "species":"formosae",
        "nepali": " ",
        "details": " "
    },
    "grey wagtail": {
        "id": "g059",
        "name": "Grey Wagtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Motacilla", "species":"cinerea",
        "nepali": " ",
        "details": " "
    },
    "grey francolin": {
        "id": "g060",
        "name": "Grey Francolin",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Francolinus", "species":"pondicerianus",
        "nepali": " ",
        "details": " "
    },
    "grey backed shrike": {
        "id": "g061",
        "name": "Grey-backed Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "genus":"Lanius", "species":"tephronotus",
        "nepali": " ",
        "details": " "
    },
    "grey bellied cuckoo": {
        "id": "g062",
        "name": "Grey-bellied Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Cacomantis", "species":"passerinus",
        "nepali": " ",
        "details": " "
    },
    "grey bellied tesia": {
        "id": "g063",
        "name": "Grey-bellied Tesia",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Tesia", "species":"cyaniventer",
        "nepali": " ",
        "details": " "
    },
    "grey breasted prinia": {
        "id": "g064",
        "name": "Grey-breasted Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"hodgsonii",
        "nepali": " ",
        "details": " "
    },
    "grey browed broadbill": {
        "id": "g065",
        "name": "Grey-browed Broadbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Eurylaimidae,
        "genus":"Serilophus", "species":"rubropygius",
        "nepali": " ",
        "details": " "
    },
    "grey capped emerald dove": {
        "id": "g066",
        "name": "Grey-capped Emerald Dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Chalcophaps", "species":"indica",
        "nepali": " ",
        "details": " "
    },
    "grey cheeked warbler": {
        "id": "g067",
        "name": "Grey-cheeked Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"poliogenys",
        "nepali": " ",
        "details": " "
    },
    "grey chinned minivet": {
        "id": "g068",
        "name": "Grey-chinned Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"solaris",
        "nepali": " ",
        "details": " "
    },
    "grey cpped woodpecker": {
        "id": "g069",
        "name": "Grey-capped Woodpeker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Picoides", "species":"canicapillus",
        "nepali": " ",
        "details": " "
    },
    "grey crested tit": {
        "id": "g070",
        "name": "Grey-crested Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Lophophanes", "species":"dichrous",
        "nepali": " ",
        "details": " "
    },
    "grey crowned prinia": {
        "id": "g071",
        "name": "Grey-crowned Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"cinereocapilla",
        "nepali": " ",
        "details": " "
    },
    "grey headed bullfinch": {
        "id": "g072",
        "name": "Grey-headed Bullfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Pyrrhula", "species":"erythaca",
        "nepali": " ",
        "details": " "
    },
    "grey headed canary flycatcher": {
        "id": "g073",
        "name": "Grey-headed Canary-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Stenostiridae,
        "genus":"Culicicapa", "species":"ceylonensis",
        "nepali": " ",
        "details": " "
    },
    "grey headed fish eagle": {
        "id": "g074",
        "name": "Grey-headed Fish-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Icthyophaga", "species":"ichthyaetus",
        "nepali": " ",
        "details": " "
    },
    "grey headed lapwing": {
        "id": "g075",
        "name": "Grey-headed Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Vanellus", "species":"cinereus",
        "nepali": " ",
        "details": " "
    },
    "grey hooded warbler": {
        "id": "g076",
        "name": "Grey-headed Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"xanthoschistos",
        "nepali": " ",
        "details": " "
    },
    "grey necked bunting": {
        "id": "g077",
        "name": "Grey-necked Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"buchanani",
        "nepali": " ",
        "details": " "
    },
    "grey sided bush warbler": {
        "id": "g078",
        "name": "Grey-sided Bush-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Cettia", "species":"brunnifrons",
        "nepali": " ",
        "details": " "
    },
    "grey sided laughingthrush": {
        "id": "g079",
        "name": "Grey-sided Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"caerulatus",
        "nepali": " ",
        "details": " "
    },
    "grey sided thrush": {
        "id": "g080",
        "name": "Grey-sided Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"feae",
        "nepali": " ",
        "details": " "
    },
    "grey throated babbler": {
        "id": "g081",
        "name": "Grey-throated Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Stachyris", "species":"nigriceps",
        "nepali": " ",
        "details": " "
    },
    "grey winged blackbird": {
        "id": "g082",
        "name": "Grey-winged Blackbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"boulboul",
        "nepali": " ",
        "details": " "
    },
    "greylag goose": {
        "id": "g083",
        "name": "Greylag Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anser", "species": "anser",
        "nepali": " ",
        "details": " "
    },
    "griffon vulture": {
        "id": "g084",
        "name": "Griffon Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Gyps", "species":"fulvus",
        "nepali": " ",
        "details": " "
    },
    "ground tit": {
        "id": "g085",
        "name": "Ground Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Pseudopodoces", "species":"humilis",
        "nepali": " ",
        "details": " "
    },
    "gul billed tern": {
        "id": "g086",
        "name": "Gull-billed Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Gelochelidon", "species":"nilotica",
        "nepali": " ",
        "details": " "
    },
    "hair crested drongo": {
        "id": "h001",
        "name": "Hair-crested Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "genus":"Dicrurus", "species":"hottentottus",
        "nepali": " ",
        "details": " "
    },
    "hen harrier": {
        "id": "h002",
        "name": "Hen Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Circus", "species":"cyaneus",
        "nepali": " ",
        "details": " "
    },
    "hil partridge": {
        "id": "h003",
        "name": "Hill Partridge",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Arborophila", "species":"torqueola",
        "nepali": " ",
        "details": " "
    },
    "hill pigeon": {
        "id": "h004",
        "name": "Hill Pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Columba", "species":"rupestris",
        "nepali": " ",
        "details": " "
    },
    "himalayan bulbul": {
        "id": "h005",
        "name": "Himalayan Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "genus":"Pycnonotus", "species":"leucogenys",
        "nepali": " ",
        "details": " "
    },
    "himalayan bush robin": {
        "id": "h006",
        "name": "Himalayan Bush-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Tarsiger", "species":"rufilatus",
        "nepali": " ",
        "details": " "
    },
    "himalayan buzzard": {
        "id": "h007",
        "name": "Himalayan Buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Buteo", "species":"refectus",
        "nepali": " ",
        "details": " "
    },
    "himalayan cutia": {
        "id": "h008",
        "name": "Himalayan Cutia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Cutia", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "himalayan flameback": {
        "id": "h009",
        "name": "Himalayan Flameback",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Dinopium", "species":"shorii",
        "nepali": " ",
        "details": " "
    },
    "himalayan grasshopper warbler": {
        "id": "h010",
        "name": "Himalayan Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "genus":"Locustella", "species":"kashmirensis",
        "nepali": " ",
        "details": " "
    },
    "himalayan griffon": {
        "id": "h011",
        "name": "Himalayan Griffon",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Gyps", "species":"himalayensis",
        "nepali": " ",
        "details": " "
    },
    "himalayan monal": {
        "id": "h012",
        "name": "Himalayan Monal",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Lophophorus", "species":"impejanus",
        "nepali": " ",
        "details": " "
    },
    "himalayan owl": {
        "id": "h013",
        "name": "Himalayan Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Strix", "species":"nivicolum",
        "nepali": " ",
        "details": " "
    },
    "himalayan rubythroat": {
        "id": "h014",
        "name": "Himalayan Rubythroat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Calliope", "species":"pectoralis",
        "nepali": " ",
        "details": " "
    },
    "himalayan shortwing": {
        "id": "h015",
        "name": "Himalayan Shortwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Brachypteryx", "species":"cruralis",
        "nepali": " ",
        "details": " "
    },
    "himalayan snowcock": {
        "id": "h016",
        "name": "Himalayan Snowcock",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Tetraogallus", "species":"himalayensis",
        "nepali": " ",
        "details": " "
    },
    "himalayan swiftlet": {
        "id": "h017",
        "name": "Himalayan Swiftlet",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Aerodramus", "species":"brevirostris",
        "nepali": " ",
        "details": " "
    },
    "himalayan white browed rosefinch": {
        "id": "h018",
        "name": "Himalayan White-browed Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Tarsiger", "species":"rufilatus",
        "nepali": " ",
        "details": " "
    },
    "himalayan woodpecker": {
        "id": "h019",
        "name": "Himalayan Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Dendrocopos", "species":"himalayensis",
        "nepali": " ",
        "details": " "
    },
    "hoary throated barwing": {
        "id": "h020",
        "name": "Hoary-throated Barwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Sibia", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "hodgso s treecreeper": {
        "id": "h021",
        "name": "Hodgson's Treecreeper",
        "order": order.PASSERIFORMES,
        "family": familyname.Certhiidae,
        "genus":"Certhia", "species":"hodgsoni",
        "nepali": " ",
        "details": " "
    },
    "hodgson s redstart": {
        "id": "h022",
        "name": "Hodgson's Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"hodgsoni",
        "nepali": " ",
        "details": " "
    },
    "horned lark": {
        "id": "h023",
        "name": "Horned Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Eremophilla", "species":"alpestris",
        "nepali": " ",
        "details": " "
    },
    "horsfield s bushlark": {
        "id": "h024",
        "name": "Horsfield's bushlark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Mirafra", "species":"javanica",
        "nepali": " ",
        "details": " "
    },
    "house crow": {
        "id": "h025",
        "name": "House Crow",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Corvus", "species":"splendens",
        "nepali": " ",
        "details": " "
    },
    "house sparrow": {
        "id": "h026",
        "name": "House Sparrow",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "genus":"Passer", "species":"domesticus",
        "nepali": " ",
        "details": " "
    },
    "house swift": {
        "id": "h027",
        "name": "House Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Apus", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "hume s bush warbler": {
        "id": "h028",
        "name": "Hume's Bush-warbler", 
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Horornis", "species":"brunnescens",
        "nepali": " ",
        "details": " "
    },
    "hume s lark": {
        "id": "h029",
        "name": "Hume's Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Calandrella", "species":"acutirostris",
        "nepali": " ",
        "details": " "
    },
    "hume s leaf warbler": {
        "id": "h030",
        "name": "Hume's Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"humei",
        "nepali": " ",
        "details": " "
    },
    "ibisbill": {
        "id": "i001",
        "name": "Isibill",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Ibidorhynchidae,
        "genus":"Ibidorhyncha", "species":"struthersii",
        "nepali": " ",
        "details": " "
    },
    "immediate egret": {
        "id": "i002",
        "name": "Intermediate Egret",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ardea", "species":"intermedia",
        "nepali": " ",
        "details": " "
    },
    "indian blue robin": {
        "id": "i003",
        "name": "Indian Blue Robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Larvivora", "species":"brunnea",
        "nepali": " ",
        "details": " "
    },
    "indian cormorant": {
        "id": "i004",
        "name": "Indian Cormorant",
        "order": order.SULIFORMES,
        "family": familyname.Phalacrocoracidae,
        "genus":"Phalacrocorax", "species":"fuscicollis",
        "nepali": " ",
        "details": " "
    },
    "indian courser": {
        "id": "i005",
        "name": "Indian Courser",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Glareolidae,
        "genus":"Cursorius", "species":"coromandelicus",
        "nepali": " ",
        "details": " "
    },
    "indian cuckoo": {
        "id": "i006",
        "name": "Indian Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Cuculus", "species":"micropterus",
        "nepali": " ",
        "details": " "
    },
    "indian cuckooshrike": {
        "id": "i007",
        "name": "Indian Cuckooshrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Coracina", "species":"macei",
        "nepali": " ",
        "details": " "
    },
    "indian golden oriole": {
        "id": "i008",
        "name": "Indian Golden Oriole",
        "order": order.PASSERIFORMES,
        "family": familyname.Oriolidae,
        "genus":"Oriolus", "species":"kundoo",
        "nepali": " ",
        "details": " "
    },
    "indian grass bibbler": {
        "id": "i009",
        "name": "Indian Grass-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "genus":"Graminicola", "species":"benghalensis",
        "nepali": " ",
        "details": " "
    },
    "indian grey hornbill": {
        "id": "i010",
        "name": "Indian Grey Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "genus":"Ocyceros", "species":"birostris",
        "nepali": " ",
        "details": " "
    },
    "indian nightjar": {
        "id": "i011",
        "name": "Indian Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "genus":"Caprimulgus", "species":"asiaticus",
        "nepali": " ",
        "details": " "
    },
    "indian nuthatch": {
        "id": "i012",
        "name": "Indian Nuthatch",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "genus":"Sitta", "species":"castanea",
        "nepali": " ",
        "details": " "
    },
    "indian paradise flycatcher": {
        "id": "i013",
        "name": "Indian Paradise-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Monarchidae,
        "genus":"Terpsiphone", "species":"paradisi",
        "nepali": " ",
        "details": " "
    },
    "indian peafowl": {
        "id": "i014",
        "name": "Indian Peafowl",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Pavo", "species":"cristatus",
        "nepali": " ",
        "details": " "
    },
    "indian pitta": {
        "id": "i015",
        "name": "Indian Pitta",
        "order": order.PASSERIFORMES,
        "family": familyname.Pittidae,
        "genus":"Pitta", "species":"brachyura",
        "nepali": " ",
        "details": " "
    },
    "indian pond heron": {
        "id": "i016",
        "name": "Indian Pond-heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ardeola", "species":"grayii",
        "nepali": " ",
        "details": " "
    },
    "indian pygmy woodpecker": {
        "id": "i017",
        "name": "Indian Pygmy Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Picoides", "species":"nanus",
        "nepali": " ",
        "details": " "
    },
    "indian robin": {
        "id": "i018",
        "name": "Indian Robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Saxicoloides", "species":"fulicatus",
        "nepali": " ",
        "details": " "
    },
    "indian roller": {
        "id": "i019",
        "name": "Indian Roller",
        "order": order.CORACIIFORMES,
        "family": familyname.Coraciidae,
        "genus":"Coracias", "species":"benghalensis",
        "nepali": " ",
        "details": " "
    },
    "indian scops owl": {
        "id": "i020",
        "name": "Indian Scops-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Otus", "species":"bakkamoena",
        "nepali": " ",
        "details": " "
    },
    "indian silverbill": {
        "id": "i021",
        "name": "Indian Silverbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Estrildidae,
        "genus":"Euodice", "species":"malabarica",
        "nepali": " ",
        "details": " "
    },
    "indian skimmer": {
        "id": "i022",
        "name": "Indian Skimmer",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Rynchops", "species":"albicollis",
        "nepali": " ",
        "details": " "
    },
    "indian spot billed duck": {
        "id": "i023",
        "name": "Indian Spot-billed Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anas", "species":"poecilorhyncha",
        "nepali": " ",
        "details": " "
    },
    "indian spotted eagle": {
        "id": "i024",
        "name": "Indian Spotted Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Clanga", "species":"hastata",
        "nepali": " ",
        "details": " "
    },
    "indian thick knee": {
        "id": "i025",
        "name": "Indian Thick-knee",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Burhinidae,
        "genus":"Burhinus", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "indian vulture": {
        "id": "i026",
        "name": "Indian Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Gyps", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "indochinese roller": {
        "id": "i027",
        "name": "Indochinese Roller",
        "order": order.CORACIIFORMES,
        "family": familyname.Coraciidae,
        "genus":"Coracias", "species":"affinis",
        "nepali": " ",
        "details": " "
    },
    "isabelline shrike": {
        "id": "i028",
        "name": "Isabelline Shrike",
        "order": order.PASSERIFORMES,
        "family":familyname.Laniidae,
        "genus":"Lanius", "species":"isabellinus",
        "nepali": " ",
        "details": " "
    },
    "isabelline wheatear": {
        "id": "i029",
        "name": "Isabelline Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Oenanthe", "species":"islabellina",
        "nepali": " ",
        "details": " "
    },
    "jack snipe": {
        "id": "j001",
        "name": "Jack Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Lymnocryptes", "species":"minimus",
        "nepali": " ",
        "details": " "
    },
    "jacobin cuckoo": {
        "id": "j002",
        "name": "Jacobin Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Clamator", "species":"jacobinus",
        "nepali": " ",
        "details": " "
    },
    "jerdon s babbler": {
        "id": "j003",
        "name": "Jerdon's Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Chrysomma", "species":"altirostre",
        "nepali": " ",
        "details": " "
    },
    "jerdon s baza": {
        "id": "j004",
        "name": "Jerdon's Baza",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Aviceda", "species":"jerdoni",
        "nepali": " ",
        "details": " "
    },
    "jerdon s bushchat": {
        "id": "j005",
        "name": "Jerdon's Bushchat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Saxicola", "species":"jerdoni",
        "nepali": " ",
        "details": " "
    },
    "jungle babbler": {
        "id": "j006",
        "name": "Jungle Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Turdoides", "species":"striata",
        "nepali": " ",
        "details": " "
    },
    "jungle bush quail": {
        "id": "j007",
        "name": "Jungle Bush-quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Perdicula", "species":"asiatica",
        "nepali": " ",
        "details": " "
    },
    "jungle myna": {
        "id": "j008",
        "name": "Jungle Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Acridotheres", "species":"fuscus",
        "nepali": " ",
        "details": " "
    },
    "jungle owlet": {
        "id": "j009",
        "name": "Jungle Owlet",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Glaucidium", "species":"radiatum",
        "nepali": " ",
        "details": " "
    },
    "jungle prinia": {
        "id": "j010",
        "name": "Jungle Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"sylvatica",
        "nepali": " ",
        "details": " "
    },
    "kalij pleasant": {
        "id": "k001",
        "name": "Kalij Pheasant",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Lophura", "species":"leucomelanos",
        "nepali": " ",
        "details": " "
    },
    "kashmir flycatcher": {
        "id": "k002",
        "name": "Kashmir Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"subrubra ",
        "nepali": " ",
        "details": " "
    },
    "kashmir nuthatch": {
        "id": "k003",
        "name": "Kashmir Nuthatch",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "genus":"Sitta", "species":"cashmirensis",
        "nepali": " ",
        "details": " "
    },
    "kentish plover": {
        "id": "k004",
        "name": "Kentish plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Charadrius", "species":"alexandrinus",
        "nepali": " ",
        "details": " "
    },
    "koklass phesant": {
        "id": "k005",
        "name": "Koklass Pheasant",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Pucrasia", "species":"macrolopha",
        "nepali": " ",
        "details": " "
    },
    "lagger falcon": {
        "id": "l001",
        "name": "Laggar Falcon",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Falco", "species":"jugger",
        "nepali": " ",
        "details": " "
    },
    "lanceolated warbler": {
        "id": "l002",
        "name": "Lanceolated Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "genus":"Locustella", "species":"lanceolata",
        "nepali": " ",
        "details": " "
    },
    "large grey babbler": {
        "id": "l003",
        "name": "Large ggrey Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Argya", "species":"malcolmi",
        "nepali": " ",
        "details": " "
    },
    "large hawk cuckoo": {
        "id": "l004",
        "name": "Large Hawk-cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Hierococcyx", "species":"sparverioides",
        "nepali": " ",
        "details": " "
    },
    "large niltava": {
        "id": "l005",
        "name": "Large Niltava",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Niltava", "species":"grandis",
        "nepali": " ",
        "details": " "
    },
    "large woodshrike": {
        "id": "l006",
        "name": "Large Woodshrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Vangidae,
        "genus":"Tephrodornis", "species":"virgatus",
        "nepali": " ",
        "details": " "
    },
    "large billed crow": {
        "id": "l007",
        "name": "Large-billed Crow",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Corvus", "species":"macrorhynchos",
        "nepali": " ",
        "details": " "
    },
    "large billed leaf warbler": {
        "id": "l008",
        "name": "Large-billed Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"magnirostris",
        "nepali": " ",
        "details": " "
    },
    "large tailed nightjar": {
        "id": "l009",
        "name": "Large-tailed Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "genus":"Caprimulgus", "species":"macrurus",
        "nepali": " ",
        "details": " "
    },
    "laughing dove": {
        "id": "l010",
        "name": "Laughing Dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Spilopelia", "species":"senegalensis",
        "nepali": " ",
        "details": " "
    },
    "lemon rumped leaf warbler": {
        "id": "l011",
        "name": "Lemon-rumped Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"chloronotus",
        "nepali": " ",
        "details": " "
    },
    "lesser adjutant": {
        "id": "l012",
        "name": "Lesser Adjutant",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "genus":"Leptoptilos", "species":"javanicus",
        "nepali": " ",
        "details": " "
    },
    "lesser black blacked gull": {
        "id": "l013",
        "name": "Lesser Black-backed Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Larus", "species":"fuscus",
        "nepali": " ",
        "details": " "
    },
    "lesser coucal": {
        "id": "l014",
        "name": "Lesser Coucal",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Centropus", "species":"bengalensis",
        "nepali": " ",
        "details": " "
    },
    "lesser cuckoo": {
        "id": "l015",
        "name": "Lesser Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Cuculus", "species":"poliocephalus",
        "nepali": " ",
        "details": " "
    },
    "lesser fish eagle": {
        "id": "l016",
        "name": "Lesser Fish-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Icthyophaga", "species":"humilis",
        "nepali": " ",
        "details": " "
    },
    "lesser florican": {
        "id": "l017",
        "name": "Lesser Florican",
        "order": order.OTIDIFORMES,
        "family": familyname.Otididae,
        "genus":"Sypheotides", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "lesser kestrel": {
        "id": "l018",
        "name": "Lesser Kestrel",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"naumanni",
        "nepali": " ",
        "details": " "
    },
    "lesser necklaced laughingthrush": {
        "id": "l019",
        "name": "Lesser Necklaced Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"monileger",
        "nepali": " ",
        "details": " "
    },
    "lesser racquet tailed drongo": {
        "id": "l020",
        "name": "Lesser Racquet-tailed Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "genus":"Dicrurus", "species":"remifer",
        "nepali": " ",
        "details": " "
    },
    "lesser sandplover": {
        "id": "l021",
        "name": "Lesser Sandplover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Charadrius", "species":"mongolus",
        "nepali": " ",
        "details": " "
    },
    "lesser shortwing": {
        "id": "l022",
        "name": "Lesser Shortwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Brachypteryx", "species":"leucophris",
        "nepali": " ",
        "details": " "
    },
    "lesser whistling duck": {
        "id": "l023",
        "name": "Lesser Whistling-duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Dendrocygna", "species":"javanica",
        "nepali": " ",
        "details": " "
    },
    "lesser whitethroat": {
        "id": "l024",
        "name": "Lesser Whitethroat",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Sylvia", "species":"curruca",
        "nepali": " ",
        "details": " "
    },
    "lesser yellownape": {
        "id": "l025",
        "name": "Lesser Yellownape",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Picus", "species":"chlorolophus",
        "nepali": " ",
        "details": " "
    },
    "lineated barbet": {
        "id": "l026",
        "name": "Lineated Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "genus":"Psilopogon", "species":"lineatus",
        "nepali": " ",
        "details": " "
    },
    "little bunting": {
        "id": "l027",
        "name": "Little Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"pusilla",
        "nepali": " ",
        "details": " "
    },
    "little cormorant": {
        "id": "l028",
        "name": "Little Cormorant",
        "order": order.SULIFORMES,
        "family": familyname.Phalacrocoracidae,
        "genus":"Microcarbo", "species":"niger",
        "nepali": " ",
        "details": " "
    },
    "little egret": {
        "id": "l029",
        "name": "Little Egret",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Egretta", "species":"garzetta",
        "nepali": " ",
        "details": " "
    },
    "little forktail": {
        "id": "l030",
        "name": "Little Forktail",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Enicurus", "species":"scouleri",
        "nepali": " ",
        "details": " "
    },
    "little grebe": {
        "id": "l031",
        "name": "Little Grebe",
        "order": order.PODICIPEDIFORMES,
        "family": familyname.Podicipedidae,
        "genus":"Tachybaptus", "species":"ruficollis",
        "nepali": " ",
        "details": " "
    },
    "little owlet": {
        "id": "l032",
        "name": "Little Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Anthene", "species":"noctua",
        "nepali": " ",
        "details": " "
    },
    "little pied flycatcher": {
        "id": "l033",
        "name": "Little Pied Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"westermanni",
        "nepali": " ",
        "details": " "
    },
    "little pratincole": {
        "id": "l034",
        "name": "Little Pratincole",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Glareolidae,
        "genus":"Glareola", "species":"lactea",
        "nepali": " ",
        "details": " "
    },
    "little ringed plover": {
        "id": "l035",
        "name": "Little Ringled Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Charadrius", "species":"dubius",
        "nepali": " ",
        "details": " "
    },
    "little spiderhunter": {
        "id": "l036",
        "name": "Little Spiderhunter",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Arachnothera", "species":"longirostra",
        "nepali": " ",
        "details": " "
    },
    "little stint": {
        "id": "l037",
        "name": "Little Stint",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"minuta",
        "nepali": " ",
        "details": " "
    },
    "little tern": {
        "id": "l038",
        "name": "Little Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Sternula", "species":"albifrons",
        "nepali": " ",
        "details": " "
    },
    "long billed wren babbler": {
        "id": "l039",
        "name": "Long-billed Wren-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "genus":"Rimator", "species":"malacoptilus",
        "nepali": " ",
        "details": " "
    },
    "long billed pipit": {
        "id": "l040",
        "name": "Long-billed Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"similis",
        "nepali": " ",
        "details": " "
    },
    "long billed plover": {
        "id": "l041",
        "name": "Long-billed Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Charadrius", "species":"placidus",
        "nepali": " ",
        "details": " "
    },
    "long billed thrush": {
        "id": "l042",
        "name": "Long-billed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Zoothera", "species":"monticola",
        "nepali": " ",
        "details": " "
    },
    "long legged buzzard": {
        "id": "l043",
        "name": "Long-legged Buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Buteo", "species":"rufinus",
        "nepali": " ",
        "details": " "
    },
    "long tailed broadbill": {
        "id": "l044",
        "name": "Long-tailed Broadbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Eurylaimidae,
        "genus":"Psarisomus", "species":"dalhousiae",
        "nepali": " ",
        "details": " "
    },
    "long tailed duck": {
        "id": "l045",
        "name": "Long-tailed Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Clangula", "species":"hyemalis",
        "nepali": " ",
        "details": " "
    },
    "long tailed minivet": {
        "id": "l046",
        "name": "Long-tailed Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"ethologus",
        "nepali": " ",
        "details": " "
    },
    "long tailed shrike": {
        "id": "l047",
        "name": "Long-tailed Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "genus":"Lanius", "species":"schach",
        "nepali": " ",
        "details": " "
    },
    "long tailed sibia": {
        "id": "l048",
        "name": "Long-tailed Sibia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Heterophasia", "species":"picaoides",
        "nepali": " ",
        "details": " "
    },
    "long tailed thrush": {
        "id": "l045",
        "name": "Long-tailed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Zoothera", "species":"dixoni",
        "nepali": " ",
        "details": " "
    },
    "long toed stint": {
        "id": "l046",
        "name": "Long-toed Stint",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"subminuta",
        "nepali": " ",
        "details": " "
    },
    "malay night heron": {
        "id": "m001",
        "name": "Malay Night-heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Gorsachius", "species":"melanolophus",
        "nepali": " ",
        "details": " "
    },
    "mallard": {
        "id": "m002",
        "name": "Mallard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anas", "species":"platyrhynchos",
        "nepali": " ",
        "details": " "
    },
    "mandarin duck": {
        "id": "m003",
        "name": "Mandarin Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Aix", "species":"galericulata",
        "nepali": " ",
        "details": " "
    },
    "maroon oriole": {
        "id": "m004",
        "name": "Maroon Oriole",
        "order": order.PASSERIFORMES,
        "family": familyname.Oriolidae,
        "genus":"Oriolus", "species":"traillii",
        "nepali": " ",
        "details": " "
    },
    "maroon backed accentor": {
        "id": "m005",
        "name": "Maroon-backed accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "genus":"Prunella", "species":"immaculata",
        "nepali": " ",
        "details": " "
    },
    "marsh sandpiper": {
        "id": "m006",
        "name": "Marsh Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Tringa", "species":"stagnatilis",
        "nepali": " ",
        "details": " "
    },
    "merlin": {
        "id": "m007",
        "name": "Merlin",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"columbarius",
        "nepali": " ",
        "details": " "
    },
    "mew gull": {
        "id": "m008",
        "name": "Mew Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Larus", "species":"canus",
        "nepali": " ",
        "details": " "
    },
    "mistle thrush": {
        "id": "m009",
        "name": "Mistle Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"viscivorus",
        "nepali": " ",
        "details": " "
    },
    "mongolian finch": {
        "id": "m010",
        "name": "Mongolian Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Bucanetes", "species":"mongolicus",
        "nepali": " ",
        "details": " "
    },
    "montagu s harrier": {
        "id": "m011",
        "name": "Montagu's Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Circus", "species":"pygargus",
        "nepali": " ",
        "details": " "
    },
    "mottled wood owl": {
        "id": "m012",
        "name": "Mottled Wood Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Strix", "species":"ocellata",
        "nepali": " ",
        "details": " "
    },
    "mountain bulbul": {
        "id": "m013",
        "name": "Mountain Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "genus":"Ixos", "species":"mcclellandii",
        "nepali": " ",
        "details": " "
    },
    "mountain imperial pigeon": {
        "id": "m014",
        "name": "Mountain Imperial-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Ducula", "species":"badia",
        "nepali": " ",
        "details": " "
    },
    "mountain scops owl": {
        "id": "m015",
        "name": "Montain Scops-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Otus", "species":"spilocephalus",
        "nepali": " ",
        "details": " "
    },
    "mountain tailorbird": {
        "id": "m016",
        "name": "Mountain Tailorbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Scotocercidae,
        "genus":"Phyllergates", "species":"cucullatus",
        "nepali": " ",
        "details": " "
    },
    "mountian hawk eagle": {
        "id": "m017",
        "name": "Mountain Hawk Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Nisaetus", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "moustached warbler": {
        "id": "m018",
        "name": "Moustached Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "genus":"Acrocephalus", "species":"melanopogon",
        "nepali": " ",
        "details": " "
    },
    "nepal cupwing": {
        "id": "n001",
        "name": "Nepal Cupwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Pnoepygidae,
        "genus":"Pnoepyga", "species":"immaculata",
        "nepali": " ",
        "details": " "
    },
    "nepal fulvetta": {
        "id": "n002",
        "name": "Nepal Fulvetta",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Alcippe", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "nepal house martin": {
        "id": "n003",
        "name": "Nepal House Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Delichon", "species":"nipalense",
        "nepali": " ",
        "details": " "
    },
    "noerthern shoveler": {
        "id": "n004",
        "name": "Northern Shoveler",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Spatula", "species":"clypeata",
        "nepali": " ",
        "details": " "
    },
    "norther pintail": {
        "id": "n005",
        "name": "Northern Pintail",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Anas", "species":"acuta",
        "nepali": " ",
        "details": " "
    },
    "northern goshawk": {
        "id": "n006",
        "name": "Northern Goshawk",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Accipiter", "species":"gentilis",
        "nepali": " ",
        "details": " "
    },
    "northern house martin": {
        "id": "n007",
        "name": "Northern House Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Delichon", "species":"urbicum",
        "nepali": " ",
        "details": " "
    },
    "northern lapwing": {
        "id": "n008",
        "name": "Northern Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Vanellus", "species":"vanellus",
        "nepali": " ",
        "details": " "
    },
    "northern long eared owl": {
        "id": "n009",
        "name": "Northern Long-eared Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Asio", "species":"otus",
        "nepali": " ",
        "details": " "
    },
    "northern wheatear": {
        "id": "n010",
        "name": "Northern Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Oenanthe", "species":"oenanthe",
        "nepali": " ",
        "details": " "
    },
    "northern wren": {
        "id": "n011",
        "name": "Northern Wren",
        "order": order.PASSERIFORMES,
        "family": familyname.Troglodytidae,
        "genus":"Troglodytes", "species":"troglodytes",
        "nepali": " ",
        "details": " "
    },
    "olive backed pipit": {
        "id": "o001",
        "name": "Olive-backed Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"hodgsoni",
        "nepali": " ",
        "details": " "
    },
    "orange bellied leafbird": {
        "id": "o002",
        "name": "Orange-bellied Leafbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Chloropseidae,
        "genus":"Chloropsis", "species":"hardwickii",
        "nepali": " ",
        "details": " "
    },
    "orange breasted green dove": {
        "id": "o003",
        "name": "Orange-breasted Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Treron", "species":"bicinctus",
        "nepali": " ",
        "details": " "
    },
    "orange headed thrush": {
        "id": "o004",
        "name": "Orange-headed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Geokichla", "species":"citrina",
        "nepali": " ",
        "details": " "
    },
    "oriental cuckoo": {
        "id": "o005",
        "name": "Oriental Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Cuculus", "species":"saturatus",
        "nepali": " ",
        "details": " "
    },
    "oriental darter": {
        "id": "o006",
        "name": "Oriental Darter",
        "order": order.SULIFORMES,
        "family": familyname.Anhingidae,
        "genus":"Anhinga", "species":"melanogaster",
        "nepali": " ",
        "details": " "
    },
    "oriental dollarbird": {
        "id": "o007",
        "name": "Oriental Dollarbird",
        "order": order.CORACIIFORMES,
        "family": familyname.Coraciidae,
        "genus":"Eurystomus", "species":"orientalis",
        "nepali": " ",
        "details": " "
    },
    "oriental hobby": {
        "id": "o008",
        "name": "Oriental Hobby",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"severus",
        "nepali": " ",
        "details": " "
    },
    "oriental honey buzzard": {
        "id": "o009",
        "name": "Oriental Honey-buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Pernis", "species":"ptilorhynchus",
        "nepali": " ",
        "details": " "
    },
    "oriental magpie robin": {
        "id": "o010",
        "name": "Oriental Magpie-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Copsychus", "species":"saularis",
        "nepali": " ",
        "details": " "
    },
    "oriental pied hornbill": {
        "id": "o011",
        "name": "Oriental Pied Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "genus":"Anthracoceros", "species":"albirostris",
        "nepali": " ",
        "details": " "
    },
    "oriental reed warbler": {
        "id": "o012",
        "name": "Oriental Reed-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "genus":"Acrocephalus", "species":"orientalis",
        "nepali": " ",
        "details": " "
    },
    "oriental scops owl": {
        "id": "o013",
        "name": "Oriental Scops-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Otus", "species":"sunia",
        "nepali": " ",
        "details": " "
    },
    "oriental skylark": {
        "id": "o014",
        "name": "Oriental Skylark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Alauda", "species":"gulgula",
        "nepali": " ",
        "details": " "
    },
    "oriental turtle dove": {
        "id": "o015",
        "name": "Oriental Turtle-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Streptopelia", "species":"orientalis",
        "nepali": " ",
        "details": " "
    },
    "oriental white eye": {
        "id": "o16",
        "name": "Oriental White-eye",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "genus":"Zosterops", "species":"palpebrosus",
        "nepali": " ",
        "details": " "
    },
    "orienteal pratincole": {
        "id": "o017",
        "name": "Oriental Pratincole",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Glareolidae,
        "genus":"Glareola", "species":"maldivarum",
        "nepali": " ",
        "details": " "
    },
    "osprey": {
        "id": "o018",
        "name": "Osprey",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Pandion", "species":"haliaetus",
        "nepali": " ",
        "details": " "
    },
    "pacific golden plover": {
        "id": "p001",
        "name": "Pacific Golden Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Pluvialis", "species":"fulva",
        "nepali": " ",
        "details": " "
    },
    "pacific swift": {
        "id": "p002",
        "name": "Pacific Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Apus", "species":"pacificus",
        "nepali": " ",
        "details": " "
    },
    "paddyfield pipit": {
        "id": "p003",
        "name": "Paddyfield Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"rufulus",
        "nepali": " ",
        "details": " "
    },
    "paddyfield warbler": {
        "id": "p004",
        "name": "Paddyfield Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "genus":"Acrocephalus", "species":"agricola",
        "nepali": " ",
        "details": " "
    },
    "painted stork": {
        "id": "p005",
        "name": "Painted Strok",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "genus":"Myceteria", "species":"leucocephala",
        "nepali": " ",
        "details": " "
    },
    "pale blue flycatcher": {
        "id": "p006",
        "name": "Pale Blue-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Cyornis", "species":"unicolor",
        "nepali": " ",
        "details": " "
    },
    "pale sand martin": {
        "id": "p007",
        "name": "Pale Sand Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Riparia", "species":"diluta",
        "nepali": " ",
        "details": " "
    },
    "pale billed flowerpecker": {
        "id": "p008",
        "name": "Pale-billed Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicaeum", "species":"erthrorhynchos",
        "nepali": " ",
        "details": " "
    },
    "pale chinned flycatcher": {
        "id": "p009",
        "name": "Pale-chinned Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Cyornis", "species":"unicolor",
        "nepali": " ",
        "details": " "
    },
    "pale footed bush warbler": {
        "id": "p010",
        "name": "Pale-footed Bush-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Hemitesia", "species":"pallidipes",
        "nepali": " ",
        "details": " "
    },
    "pale headed woodpecker": {
        "id": "p011",
        "name": "Pale-headed Wookpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Gecinulus", "species":"grantia",
        "nepali": " ",
        "details": " "
    },
    "pallas s fish eagle": {
        "id": "p012",
        "name": "Pallas's Fish Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Haliaeetus", "species":"leucoryphus",
        "nepali": " ",
        "details": " "
    },
    "pallas s grasshopper warbler": {
        "id": "p013",
        "name": "Pallas's Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "genus":"Locustella", "species":"certhiola",
        "nepali": " ",
        "details": " "
    },
    "pallas s gull": {
        "id": "p014",
        "name": "Pallas's Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Larus", "species":"ichthyaetus",
        "nepali": " ",
        "details": " "
    },
    "pallid harrier": {
        "id": "p015",
        "name": "Pallid Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Circus", "species":"macrourus",
        "nepali": " ",
        "details": " "
    },
    "peregrine falcon": {
        "id": "p016",
        "name": "Peregrine Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"peregrinus",
        "nepali": " ",
        "details": " "
    },
    "pheasant tailed jacana": {
        "id": "p017",
        "name": "Pheasant-tailed Jacana",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Jacanidae,
        "genus":"Hydrophasianus", "species":"chirurgus",
        "nepali": " ",
        "details": " "
    },
    "pied avocet": {
        "id": "p018",
        "name": "Pied Avocet",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Recurvirostridae,
        "genus":"Recurvirostra", "species":"avosetta",
        "nepali": " ",
        "details": " "
    },
    "pied bushchat": {
        "id": "p019",
        "name": "Pied Bushchat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Saxicola", "species":"caprata",
        "nepali": " ",
        "details": " "
    },
    "pied harrier": {
        "id": "p020",
        "name": "Pied Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Circus", "species":"melanoleucos",
        "nepali": " ",
        "details": " "
    },
    "pied kingfisher": {
        "id": "p021",
        "name": "Pied Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "genus":"Ceryle", "species":"rudis",
        "nepali": " ",
        "details": " "
    },
    "pied thrush": {
        "id": "p022",
        "name": "Pied Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Geokichla", "species":"wardii",
        "nepali": " ",
        "details": " "
    },
    "pied wheatear": {
        "id": "p023",
        "name": "Pied Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Oenanthe", "species":"pleschanka",
        "nepali": " ",
        "details": " "
    },
    "pin striped tit babbler": {
        "id": "p024",
        "name": "Pin-striped Tit-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Mixornis", "species":"gularis",
        "nepali": " ",
        "details": " "
    },
    "pin tailed green pigeon": {
        "id": "p025",
        "name": "Pin-tailed Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Treron", "species":"apicauda",
        "nepali": " ",
        "details": " "
    },
    "pine bunting": {
        "id": "p026",
        "name": "Pine Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"leucocephalos",
        "nepali": " ",
        "details": " "
    },
    "pink browed rosefinch": {
        "id": "p027",
        "name": "Pink-browed Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"rodochroa",
        "nepali": " ",
        "details": " "
    },
    "pink headed duck": {
        "id": "p028",
        "name": "Pink-headed Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Rhodonessa", "species":"caryophyllacea",
        "nepali": " ",
        "details": " "
    },
    "pintail snipe": {
        "id": "p029",
        "name": "Pintail Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Gallinago", "species":"stenura",
        "nepali": " ",
        "details": " "
    },
    "plain flowerpecker": {
        "id": "p030",
        "name": "Plain Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicaeum", "species":"minullum",
        "nepali": " ",
        "details": " "
    },
    "plain mountain finch": {
        "id": "p031",
        "name": "Plain Mountain-finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Leucosticte", "species":"nemoricola",
        "nepali": " ",
        "details": " "
    },
    "plain prinia": {
        "id": "p032",
        "name": "Plain Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"inornata",
        "nepali": " ",
        "details": " "
    },
    "plain backed snowfinch": {
        "id": "p033",
        "name": "Plain-backed Snowfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "genus":"Pyrgilauda", "species":"blanfordi",
        "nepali": " ",
        "details": " "
    },
    "plain crowned jay": {
        "id": "p034",
        "name": "Plain-crowned Jay",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Garrulus", "species":"bispecularis",
        "nepali": " ",
        "details": " "
    },
    "plaintive cuckoo": {
        "id": "p035",
        "name": "Plaintive Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Cacomantiss", "species":"merulinus",
        "nepali": " ",
        "details": " "
    },
    "plum headed parakeet": {
        "id": "p036",
        "name": "Plum-headed Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "genus":"Psittacula", "species":"cyanocephala",
        "nepali": " ",
        "details": " "
    },
    "plumbeous water redstart": {
        "id": "p037",
        "name": "Plumbeous Water-redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"fuliginosus",
        "nepali": " ",
        "details": " "
    },
    "puff throated babbler": {
        "id": "p038",
        "name": "Puff-throated Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "genus":"Pellorneum", "species":"ruficeps",
        "nepali": " ",
        "details": " "
    },
    "purple cochoa": {
        "id": "p039",
        "name": "Purple Cochoa",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Cochoa", "species":"purpurea",
        "nepali": " ",
        "details": " "
    },
    "purple heron": {
        "id": "p040",
        "name": "Purple Heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ardea", "species":"purpurea",
        "nepali": " ",
        "details": " "
    },
    "purple sunbird": {
        "id": "p041",
        "name": "Purple Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Cinnyris", "species":"asiaticus",
        "nepali": " ",
        "details": " "
    },
    "purple swamphen": {
        "id": "p042",
        "name": "Purple Swamphen",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Porphyrio", "species":"porphyrio",
        "nepali": " ",
        "details": " "
    },
    "purple backed starling": {
        "id": "p043",
        "name": "Purple-backed Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Agropsar", "species":"sturninus",
        "nepali": " ",
        "details": " "
    },
    "pygmy blue flycatcher": {
        "id": "p044",
        "name": "Pygmy Blue-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"hodgsoni",
        "nepali": " ",
        "details": " "
    },
    "pygmy cupwing": {
        "id": "p045",
        "name": "Pygmy Cupwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Pnoepygidae,
        "genus":"Pnoepyga", "species":"pusilla",
        "nepali": " ",
        "details": " "
    },
    "radde s warbler": {
        "id": "r001",
        "name": "Radde's Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"schwarzi",
        "nepali": " ",
        "details": " "
    },
    "rain quail": {
        "id": "r002",
        "name": "Rain Quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Coturnix", "species":"coromandelica",
        "nepali": " ",
        "details": " "
    },
    "red avadavat": {
        "id": "r003",
        "name": "Red Avadavat",
        "order": order.PASSERIFORMES,
        "family": familyname.Ploceidae,
        "genus":"Amandava", "species":"amandava",
        "nepali": " ",
        "details": " "
    },
    "red crossbill": {
        "id": "r004",
        "name": "Red Crossbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Loxia", "species":"curvirostra",
        "nepali": " ",
        "details": " "
    },
    "red junglefowl": {
        "id": "r005",
        "name": "Red Junglefowl",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Gallus", "species":"gallus",
        "nepali": " ",
        "details": " "
    },
    "red knot": {
        "id": "r006",
        "name": "Red Knot",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"canutus",
        "nepali": " ",
        "details": " "
    },
    "red turtle dove": {
        "id": "r007",
        "name": "Red Turtle-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Streptopelia", "species":"tranquebarica",
        "nepali": " ",
        "details": " "
    },
    "red billed blue magpie": {
        "id": "r008",
        "name": "Red-billed Blue Magpie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Urocissa", "species":"ethroryncha",
        "nepali": " ",
        "details": " "
    },
    "red billed chough": {
        "id": "r009",
        "name": "Red-billed Chough",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Pyrrhocorax", "species":"pyrrhocorax",
        "nepali": " ",
        "details": " "
    },
    "red billed leiothrix": {
        "id": "r010",
        "name": "Red-billed Leiothrix",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Leiothrix", "species":"lutea",
        "nepali": " ",
        "details": " "
    },
    "red breasted flycatcher": {
        "id": "r011",
        "name": "Red-breasted Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"parva",
        "nepali": " ",
        "details": " "
    },
    "red breasted merganser": {
        "id": "r012",
        "name": "Red-breasted Merganser",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Mergus", "species":"serrator",
        "nepali": " ",
        "details": " "
    },
    "red breated parakeet": {
        "id": "r013",
        "name": "Red-breasted Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "genus":"Psittacula", "species":"alexandri",
        "nepali": " ",
        "details": " "
    },
    "red creted pochard": {
        "id": "r014",
        "name": "Red-crested Pochard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Netta", "species":"rufina",
        "nepali": " ",
        "details": " "
    },
    "red faced liocichla": {
        "id": "r015",
        "name": "Red-faced Liocichla",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Liocichla", "species":"phoenicea",
        "nepali": " ",
        "details": " "
    },
    "red fronted rosefinch": {
        "id": "r016",
        "name": "Ref-fronted Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"puniceus",
        "nepali": " ",
        "details": " "
    },
    "red fronted serin": {
        "id": "r017",
        "name": "Red-fronted Serin",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Serinus", "species":"pusillus",
        "nepali": " ",
        "details": " "
    },
    "red headed bullfinch": {
        "id": "r018",
        "name": "Red-headed Bullfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Pyrrhula", "species":"erythrocephala",
        "nepali": " ",
        "details": " "
    },
    "red headed bunting": {
        "id": "r019",
        "name": "Red-headed Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"bruniceps",
        "nepali": " ",
        "details": " "
    },
    "red headed falcon": {
        "id": "r020",
        "name": "Red-headed Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"chicquera",
        "nepali": " ",
        "details": " "
    },
    "red headed tit": {
        "id": "r021",
        "name": "Red-headed Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "genus":"Aegithalos", "species":"iredalei",
        "nepali": " ",
        "details": " "
    },
    "red headed trogon": {
        "id": "r022",
        "name": "Red-headed Trogon",
        "order": order.TROGONIFORMES,
        "family": familyname.Trogonidae,
        "genus":"Harpactes", "species":"erythrocephalus",
        "nepali": " ",
        "details": " "
    },
    "red headed vulture": {
        "id": "r023",
        "name": "Red-headed Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Sarcogyps", "species":"calvus",
        "nepali": " ",
        "details": " "
    },
    "red naped ibis": {
        "id": "r024",
        "name": "Red-naped Ibis",
        "order": order.OTIDIFORMES,
        "family": familyname.Threskiornithidae,
        "genus":"Pseudibis", "species":"papillosa",
        "nepali": " ",
        "details": " "
    },
    "red necked phalarope": {
        "id": "r025",
        "name": "Red-necked Phalarope",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Phalaropus", "species":"lobatus",
        "nepali": " ",
        "details": " "
    },
    "red rumped swallow": {
        "id": "r026",
        "name": "Red-rumped Swallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Cecropis", "species":"daurica",
        "nepali": " ",
        "details": " "
    },
    "red tailed minla": {
        "id": "r027",
        "name": "Red-tailed minla",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Minla", "species":"ignotincta",
        "nepali": " ",
        "details": " "
    },
    "red tailed wheatear": {
        "id": "r028",
        "name": "Red-tailed Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Oenanthe", "species":"chrysopygia",
        "nepali": " ",
        "details": " "
    },
    "red throated flycatcher": {
        "id": "r029",
        "name": "Red-throated Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"albicilla",
        "nepali": " ",
        "details": " "
    },
    "red throated loon": {
        "id": "r030",
        "name": "Red-throated Loon",
        "order": order.GALLIFORMES,
        "family": familyname.Gaviidae,
        "genus":"Gavia", "species":"stellata",
        "nepali": " ",
        "details": " "
    },
    "red throated pipit": {
        "id": "r031",
        "name": "Red-throated Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"cervinus",
        "nepali": " ",
        "details": " "
    },
    "red vented bulbul": {
        "id": "r032",
        "name": "Red-vented Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "genus":"Pycnonotus", "species":"cafer",
        "nepali": " ",
        "details": " "
    },
    "red wattled lapwing": {
        "id": "r033",
        "name": "Red-wattled Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Vanellus", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "red whiskered bulbul": {
        "id": "r034",
        "name": "Red-whiskered Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "genus":"Pycnonotus", "species":"jocosus",
        "nepali": " ",
        "details": " "
    },
    "reed bunting": {
        "id": "r035",
        "name": "Reed Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Schoeniclus", "species":"schoeniclus",
        "nepali": " ",
        "details": " "
    },
    "richard s pipit": {
        "id": "r036",
        "name": " Richard's Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"richardi",
        "nepali": " ",
        "details": " "
    },
    "river lapwing": {
        "id": "r037",
        "name": "River Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Vanellus", "species":"duvaucelii",
        "nepali": " ",
        "details": " "
    },
    "river tern": {
        "id": "r038",
        "name": "River Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Sterna", "species":"aurantia",
        "nepali": " ",
        "details": " "
    },
    "robin accentor": {
        "id": "r039",
        "name": "Robin Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "genus":"Prunella", "species":"rubeculoides",
        "nepali": " ",
        "details": " "
    },
    "rock bunting": {
        "id": "r040",
        "name": "Rock Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"cia",
        "nepali": " ",
        "details": " "
    },
    "rock dove": {
        "id": "r041",
        "name": "Rock Dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Columba", "species":"livia",
        "nepali": " ",
        "details": " "
    },
    "rock eagle owl": {
        "id": "r042",
        "name": "Rock Eagle-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Bubo", "species":"bengalensis",
        "nepali": " ",
        "details": " "
    },
    "rose ringed parakeet": {
        "id": "r043",
        "name": "Rose-ringed Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "genus":"Psittacula", "species":"roseus",
        "nepali": " ",
        "details": " "
    },
    "rosy minivet": {
        "id": "r044",
        "name": "Rosy Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"roseus",
        "nepali": " ",
        "details": " "
    },
    "rosy pipit": {
        "id": "r045",
        "name": "Rosy Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"roseatus",
        "nepali": " ",
        "details": " "
    },
    "rosy starling": {
        "id": "r046",
        "name": "Rosy Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Pastor", "species":"roseus",
        "nepali": " ",
        "details": " "
    },
    "ruby cheeked sunbird": {
        "id": "r047",
        "name": "Ruby-cheeked Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Chalcoparia", "species":"singalensis",
        "nepali": " ",
        "details": " "
    },
    "ruddy kingfisher": {
        "id": "r048",
        "name": "Ruddy Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "genus":"Halcyon", "species":"coromanda",
        "nepali": " ",
        "details": " "
    },
    "ruddy shelduck": {
        "id": "r049",
        "name": "Ruddy Shelduck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Tadorna", "species":"ferruginea",
        "nepali": " ",
        "details": " "
    },
    "ruddy turnstone": {
        "id": "r050",
        "name": "Ruddy Turnstone",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Areanaria", "species":"interpres",
        "nepali": " ",
        "details": " "
    },
    "ruddy breasted crake": {
        "id": "r051",
        "name": "Ruddy-breasted Crake",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Zapornia", "species":"fusca",
        "nepali": " ",
        "details": " "
    },
    "ruff": {
        "id": "r052",
        "name": "Ruff",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"pugnax",
        "nepali": " ",
        "details": " "
    },
    "rufous sibia": {
        "id": "r053",
        "name": "Rufous Sibia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Heterophasia", "species":"capistrata",
        "nepali": " ",
        "details": " "
    },
    "rufous treepie": {
        "id": "r054",
        "name": "Rufous Treepie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Dendrocitta", "species":"vagabunda",
        "nepali": " ",
        "details": " "
    },
    "rufous woodpecker": {
        "id": "r055",
        "name": "Rufous Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Micropternus", "species":"brachyurus",
        "nepali": " ",
        "details": " "
    },
    "rufous backed sibia": {
        "id": "r056",
        "name": "Rufous-backed Sibia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Leioptila", "species":"annectens",
        "nepali": " ",
        "details": " "
    },
    "rufous belied niltava": {
        "id": "r057",
        "name": "Rufous Bellied Niltava",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Niltava", "species":"sundara",
        "nepali": " ",
        "details": " "
    },
    "rufous bellied eagle": {
        "id": "r058",
        "name": "Rufous Bellied Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Lophotriorchis", "species":"kienerii",
        "nepali": " ",
        "details": " "
    },
    "rufous bellied woodpecker": {
        "id": "r059",
        "name": "Rufous-bellied Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Dendrocopos", "species":"hyperythrus",
        "nepali": " ",
        "details": " "
    },
    "rufous breasted accentor": {
        "id": "r060",
        "name": "Rufous-breasted Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "genus":"Prunella", "species":"strophiata",
        "nepali": " ",
        "details": " "
    },
    "rufous breasted bush robin": {
        "id": "r061",
        "name": "Rufous-breasted Bush-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Tarsinger", "species":"hyperythrus",
        "nepali": " ",
        "details": " "
    },
    "rufous capped babbler": {
        "id": "r062",
        "name": "Rufous-capped Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Cyanoderma", "species":"ruficeps",
        "nepali": " ",
        "details": " "
    },
    "rufous chinned laughingthrush": {
        "id": "r063",
        "name": "Rufous-chinned Laughungthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"rufogularis",
        "nepali": " ",
        "details": " "
    },
    "rufous faced warbler": {
        "id": "r064",
        "name": "Rufous-faced Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Abroscopus", "species":"albogularis",
        "nepali": " ",
        "details": " "
    },
    "rufous fronted tit": {
        "id": "r065",
        "name": "Rufous-fronted Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "genus":"Aegithalos", "species":"iouschistos",
        "nepali": " ",
        "details": " "
    },
    "rufous gorgeted flycatcher": {
        "id": "r066",
        "name": "Rufous-gorgeted Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"strophiata",
        "nepali": " ",
        "details": " "
    },
    "rufous naped tit": {
        "id": "r067",
        "name": "Rufous-naped Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Periparus", "species":"rufonuchalis",
        "nepali": " ",
        "details": " "
    },
    "rufous necked hornbill": {
        "id": "r068",
        "name": "Rufous-necked Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "genus":"Aceros", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "rufous necked laughingthrush": {
        "id": "r069",
        "name": "Rufous-necked Laughinthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"ruficollis",
        "nepali": " ",
        "details": " "
    },
    "rufous necked snowfinch": {
        "id": "r070",
        "name": "Rufous-necked Snowfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "genus":"Pyrgilauda", "species":"ruficollis",
        "nepali": " ",
        "details": " "
    },
    "rufous tailed lark": {
        "id": "r071",
        "name": "Rufous-tailed Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Ammomanes", "species":"phoenicura",
        "nepali": " ",
        "details": " "
    },
    "rufous tailed rock thrush": {
        "id": "r072",
        "name": "Rufous-tailed Rock-thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Monticola", "species":"saxatilis",
        "nepali": " ",
        "details": " "
    },
    "rufous throated partridge": {
        "id": "r073",
        "name": "Rufous-throated Partridge",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Arborophila", "species":"rufogularis",
        "nepali": " ",
        "details": " "
    },
    "rufous throated thrush": {
        "id": "r074",
        "name": "Rufous-throated Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"ruficollis",
        "nepali": " ",
        "details": " "
    },
    "rufous throated wren babbler": {
        "id": "r075",
        "name": "Rufous-throated Wren-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Spelaeornis", "species":"caudatus",
        "nepali": " ",
        "details": " "
    },
    "rufous vented tit": {
        "id": "r076",
        "name": "Rufous-vented Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Periparus", "species":"rubidiventris",
        "nepali": " ",
        "details": " "
    },
    "rufous vented yuhina": {
        "id": "r077",
        "name": "Rufous-vented Yuhina",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "genus":"Yuhina", "species":"occipitalis",
        "nepali": " ",
        "details": " "
    },
    "rufous winged fulvetta": {
        "id": "r078",
        "name": "Rufous-winged Fulvetta",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "genus":"Schoeniparus", "species":"castaneceps",
        "nepali": " ",
        "details": " "
    },
    "russet sparrow": {
        "id": "r079",
        "name": "Russet Sparrow",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "genus":"Passer", "species":"cinnamomeus",
        "nepali": " ",
        "details": " "
    },
    "rustic bunting": {
        "id": "r080",
        "name": "Rustic Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"rustica",
        "nepali": " ",
        "details": " "
    },
    "rusty cheeked scimitar babbler": {
        "id": "r081",
        "name": "Rusty-cheeked Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Erythrogenys", "species":"erthrogenys",
        "nepali": " ",
        "details": " "
    },
    "rusty flanked treecreeper": {
        "id": "r082",
        "name": "Rusty-flanked Treecreeper",
        "order": order.PASSERIFORMES,
        "family": familyname.Certhiidae,
        "genus":"Certhia", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "rusty fronted barwing": {
        "id": "r083",
        "name": "Rusty-fronted Barwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Actinodura", "species":"egertoni",
        "nepali": " ",
        "details": " "
    },
    "rusty tailed flycatcher": {
        "id": "r084",
        "name": "Rusty-tailed Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"ruficauda",
        "nepali": " ",
        "details": " "
    },
    "saker falcon": {
        "id": "s001",
        "name": "Saker Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "genus":"Falco", "species":"cherrug",
        "nepali": " ",
        "details": " "
    },
    "sand lark": {
        "id": "s002",
        "name": "Sand Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Alaudala", "species":"raytal",
        "nepali": " ",
        "details": " "
    },
    "sanderling": {
        "id": "s003",
        "name": "Sanderling",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"alba",
        "nepali": " ",
        "details": " "
    },
    "sapphire flycatcher": {
        "id": "s004",
        "name": "Sapphire Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"sapphira",
        "nepali": " ",
        "details": " "
    },
    "sarus crane": {
        "id": "s005",
        "name": "Sarus Crane",
        "order": order.GRUIFORMES,
        "family": familyname.Gruidae,
        "genus":"Antigone", "species":"antigone",
        "nepali": " ",
        "details": " "
    },
    "satyr tragopan": {
        "id": "s006",
        "name": "Satyr Tragopan",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Tragopan", "species":"satyra",
        "nepali": " ",
        "details": " "
    },
    "savanna nightjar": {
        "id": "s007",
        "name": "Savanna Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "genus":"Caprimulgus", "species":"affinis",
        "nepali": " ",
        "details": " "
    },
    "scaly laughingthrush": {
        "id": "s008",
        "name": "Scaly Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Trochalopteron", "species":"subunicolor",
        "nepali": " ",
        "details": " "
    },
    "scaly thrush": {
        "id": "s009",
        "name": "Scaly Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Zoothera", "species":"dauma",
        "nepali": " ",
        "details": " "
    },
    "scaly bellied woodpecker": {
        "id": "s010",
        "name": "Scaly-bellied Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Picus", "species":"squamatus",
        "nepali": " ",
        "details": " "
    },
    "scaly breasted cupwing": {
        "id": "s011",
        "name": "Scaly-breasted Cupwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Pnoepygidae,
        "genus":"Pnoepgya", "species":"albiventer",
        "nepali": " ",
        "details": " "
    },
    "scaly breasted munia": {
        "id": "s012",
        "name": "Scaly-breasted Munia",
        "order": order.PASSERIFORMES,
        "family": familyname.Estrildidae,
        "genus":"Lonchura", "species":"punctulata",
        "nepali": " ",
        "details": " "
    },
    "scarlet finch": {
        "id": "s013",
        "name": "Scarlet Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"sipahi",
        "nepali": " ",
        "details": " "
    },
    "scarlet minivet": {
        "id": "s014",
        "name": "Scarlet Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"flammeus",
        "nepali": " ",
        "details": " "
    },
    "scarlet backed flowerpecker": {
        "id": "s015",
        "name": "Scarlet-backed Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicaeum", "species":"cruentatum",
        "nepali": " ",
        "details": " "
    },
    "scarlet breasted woodpecker": {
        "id": "s016",
        "name": "Scarlet-breasted Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Dryobates", "species":"cathpharius",
        "nepali": " ",
        "details": " "
    },
    "shikra": {
        "id": "s017",
        "name": "Shikra",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Accipiter", "species":"badius",
        "nepali": " ",
        "details": " "
    },
    "short toed snake eagle": {
        "id": "s018",
        "name": "Short-toed Snake-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Circaetus", "species":"gallicus",
        "nepali": " ",
        "details": " "
    },
    "short billed minivet": {
        "id": "s019",
        "name": "Short-billed Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"brevirostris",
        "nepali": " ",
        "details": " "
    },
    "short eared owl": {
        "id": "s020",
        "name": "Short-eared Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Asio", "species":"flammeus",
        "nepali": " ",
        "details": " "
    },
    "siberian blue robin": {
        "id": "s021",
        "name": "Siberian Blue Robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Larvivora", "species":"cyane",
        "nepali": " ",
        "details": " "
    },
    "siberian chiffchaff": {
        "id": "s022",
        "name": "Siberian Chiffchaff",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"tristis",
        "nepali": " ",
        "details": " "
    },
    "siberian rubythroat": {
        "id": "s023",
        "name": "Siberian Rubythroat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Calliope", "species":"calliope",
        "nepali": " ",
        "details": " "
    },
    "sikkim treecreeper": {
        "id": "s024",
        "name": "Sikkim Treecreeper",
        "order": order.PASSERIFORMES,
        "family":familyname.Certhiidae,
        "genus":"Certhia", "species":"discolor",
        "nepali": " ",
        "details": " "
    },
    "silver backed needletail": {
        "id": "s025",
        "name": "Silver-backed Needletail",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Hirundapus", "species":"cochinchinensis",
        "nepali": " ",
        "details": " "
    },
    "silver eared mesia": {
        "id": "s026",
        "name": "Silver-eared Mesia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Leiothrix", "species":"argentauris",
        "nepali": " ",
        "details": " "
    },
    "sirkeer malkoha": {
        "id": "s027",
        "name": "Sirkeer Malkoha",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Taccocua", "species":"leschenaultii",
        "nepali": " ",
        "details": " "
    },
    "slatey legged crake": {
        "id": "s028",
        "name": "Slaty-legged Crake",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Rallina", "species":"eurizonoides",
        "nepali": " ",
        "details": " "
    },
    "slaty backed flycatcher": {
        "id": "s029",
        "name": "Slaty-backed Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"erithacus",
        "nepali": " ",
        "details": " "
    },
    "slaty backed forktail": {
        "id": "s030",
        "name": "Slaty-backed Forktail",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Enicurus", "species":"schistaceus",
        "nepali": " ",
        "details": " "
    },
    "slaty bellied tesia": {
        "id": "s031",
        "name": "Slaty-bellied Tesia",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Tesia", "species":"olivea",
        "nepali": " ",
        "details": " "
    },
    "slaty blue flycatcher": {
        "id": "s032",
        "name": "Slaty-blue Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"tricolor",
        "nepali": " ",
        "details": " "
    },
    "slaty breasted rail": {
        "id": "s033",
        "name": "Slaty-breasted Rail",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Lewinia", "species":"striata",
        "nepali": " ",
        "details": " "
    },
    "slaty headed parakeet": {
        "id": "s034",
        "name": "Slaty-headed Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "genus":"Psittacula", "species":"himalayana",
        "nepali": " ",
        "details": " "
    },
    "slender billed babbler": {
        "id": "s035",
        "name": "Slender-billed Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Chatarrhaea", "species":"longirostris",
        "nepali": " ",
        "details": " "
    },
    "slender billed gull": {
        "id": "s036",
        "name": "Slender-billed Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Larus", "species":"genei",
        "nepali": " ",
        "details": " "
    },
    "slender billed oriole": {
        "id": "s037",
        "name": "Slender-billed Oriole",
        "order": order.PASSERIFORMES,
        "family": familyname.Oriolidae,
        "genus":"Oriolus", "species":"tenuirostris",
        "nepali": " ",
        "details": " "
    },
    "slender billed scimitar babbler": {
        "id": "s038",
        "name": "Slender-billed Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Pomatorhinus", "species":"superciliaris",
        "nepali": " ",
        "details": " "
    },
    "slender billed vulture": {
        "id": "s039",
        "name": "Slender-billed Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Gyps", "species":"tenuirostris",
        "nepali": " ",
        "details": " "
    },
    "small minivet": {
        "id": "s040",
        "name": "Small Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"cinnamomeus",
        "nepali": " ",
        "details": " "
    },
    "small niltava": {
        "id": "s041",
        "name": "Small Niltava",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Niltava", "species":"macgrigoriae",
        "nepali": " ",
        "details": " "
    },
    "smew": {
        "id": "s042",
        "name": "Smew",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Mergellus", "species":"albellus",
        "nepali": " ",
        "details": " "
    },
    "smoky warbler": {
        "id": "s043",
        "name": "Smoky Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"fuligiventer",
        "nepali": " ",
        "details": " "
    },
    "snow partridge": {
        "id": "s044",
        "name": "Snow Partridge",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Lerwa", "species":"lerwa",
        "nepali": " ",
        "details": " "
    },
    "snow pigeon": {
        "id": "s045",
        "name": "Snow Pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Columba", "species":"leuconota",
        "nepali": " ",
        "details": " "
    },
    "snowy browed flycatcher": {
        "id": "s046",
        "name": "Snowy-browed Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"hyperythra",
        "nepali": " ",
        "details": " "
    },
    "solitary snipe": {
        "id": "s047",
        "name": "Solitary Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Gallinago", "species":"solitaria",
        "nepali": " ",
        "details": " "
    },
    "sooty tern": {
        "id": "s048",
        "name": "Sooty Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Onychoprion", "species":"fuscatus",
        "nepali": " ",
        "details": " "
    },
    "southern nutcraker": {
        "id": "s049",
        "name": "Southern Nutcracker",
        "order": order.PASSERIFORMES,
        "family": familyname.Coraciidae,
        "genus":"Nucifraga", "species":"hemispila",
        "nepali": " ",
        "details": " "
    },
    "spactacled finch": {
        "id": "s050",
        "name": "Spectacled Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Callacanthis", "species":"burtoni",
        "nepali": " ",
        "details": " "
    },
    "spanish sparrow": {
        "id": "s051",
        "name": "Spanish Sparrow",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "genus":"Passer", "species":"hispaniolensis",
        "nepali": " ",
        "details": " "
    },
    "speckled piculet": {
        "id": "s052",
        "name": "Speckled Piculet",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Picumnus", "species":"innominatus",
        "nepali": " ",
        "details": " "
    },
    "speckled woodpigeon": {
        "id": "s053",
        "name": "Speckled Woodpigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Columba", "species":"hodgsonii",
        "nepali": " ",
        "details": " "
    },
    "spiny babbler": {
        "id": "s054",
        "name": "Spiny Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Acanthoptila", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "spot bellied eagle owl": {
        "id": "s055",
        "name": "Spot-bellied Eagle-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Bubo", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "spot billed pelican": {
        "id": "s056",
        "name": "Spot-bellied Pelican",
        "order": order.PELECANIFORMES,
        "family": familyname.Pelecanidae,
        "genus":"Pelecanus", "species":"philippensis",
        "nepali": " ",
        "details": " "
    },
    "spot winged grosbeak": {
        "id": "s057",
        "name": "Spot-winged Grosbeak",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Mycerobas", "species":"melanozanthos",
        "nepali": " ",
        "details": " "
    },
    "spot winged rosefinch": {
        "id": "s058",
        "name": "Spot-winged Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"rodopeplus",
        "nepali": " ",
        "details": " "
    },
    "spot winged starling": {
        "id": "s059",
        "name": "Spot-winged Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Saroglossa", "species":"spilopterus",
        "nepali": " ",
        "details": " "
    },
    "spotted crake": {
        "id": "s060",
        "name": "Spotted Crake",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Porzana", "species":"porzana",
        "nepali": " ",
        "details": " "
    },
    "spotted elachura": {
        "id": "s061",
        "name": "Spotted Elachura",
        "order": order.PASSERIFORMES,
        "family": familyname.Elachuridae,
        "genus":"Elachura", "species":"formosa",
        "nepali": " ",
        "details": " "
    },
    "spotted forktail": {
        "id": "s062",
        "name": "Spotted Forktail",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Enicurus", "species":"maculatus",
        "nepali": " ",
        "details": " "
    },
    "spotted grasshopper warbler": {
        "id": "s063",
        "name": "Soptted Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "genus":"Locustella", "species":"thoracica",
        "nepali": " ",
        "details": " "
    },
    "spotted laughingthrush": {
        "id": "s064",
        "name": "Spotted Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"thoracica",
        "nepali": " ",
        "details": " "
    },
    "spotted owlet": {
        "id": "s065",
        "name": "Spotted Owlet",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Athene", "species":"brama",
        "nepali": " ",
        "details": " "
    },
    "spotted redshank": {
        "id": "s066",
        "name": "Spotted Redshank",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Tringa", "species":"erythropus",
        "nepali": " ",
        "details": " "
    },
    "steppe eagle": {
        "id": "s067",
        "name": "Steppe Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Aquila", "species":"nipalensis",
        "nepali": " ",
        "details": " "
    },
    "stork billed kingfisher": {
        "id": "s068",
        "name": "Strok-billed Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "genus":"Pelargopsis", "species":"capensis",
        "nepali": " ",
        "details": " "
    },
    "streak breasted scimitar babbler": {
        "id": "s069",
        "name": "Streak-breasted Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Pomatirhinus", "species":"ruficollis",
        "nepali": " ",
        "details": " "
    },
    "streak throated swallow": {
        "id": "s070",
        "name": "Streak-throated Swallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Petrochelidon", "species":"fluvicola",
        "nepali": " ",
        "details": " "
    },
    "streak throated woodpecker": {
        "id": "s071",
        "name": "Streak-throated Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Picus", "species":"xanthopygaeus",
        "nepali": " ",
        "details": " "
    },
    "streaked laughingthrush": {
        "id": "s072",
        "name": "Streaked Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Trochalopteron", "species":"lineatum",
        "nepali": " ",
        "details": " "
    },
    "streaked rosefinch": {
        "id": "s073",
        "name": "Streaked Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"rubicilloides",
        "nepali": " ",
        "details": " "
    },
    "streaked spiderhunter": {
        "id": "s074",
        "name": "Streaked Spiderhunter",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "genus":"Arachnothera", "species":"magna",
        "nepali": " ",
        "details": " "
    },
    "streaked weaver": {
        "id": "s075",
        "name": "Streaked Weaver",
        "order": order.PASSERIFORMES,
        "family": familyname.Ploceidae,
        "genus":"Ploceus", "species":"manyar",
        "nepali": " ",
        "details": " "
    },
    "striated babbler": {
        "id": "s076",
        "name": "Striated Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Argya", "species":"earlei",
        "nepali": " ",
        "details": " "
    },
    "striated bulbul": {
        "id": "s077",
        "name": "Striated Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "genus":"Pycnonotus", "species":"striatus",
        "nepali": " ",
        "details": " "
    },
    "striated grassbird": {
        "id": "s078",
        "name": "Striated Graassbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "genus":"Megalurus", "species":"palustris",
        "nepali": " ",
        "details": " "
    },
    "striated laughingthrush": {
        "id": "s079",
        "name": "Striataed Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Grammatoptila", "species":"striata",
        "nepali": " ",
        "details": " "
    },
    "striated prinia": {
        "id": "s080",
        "name": "Striated Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"crinigera",
        "nepali": " ",
        "details": " "
    },
    "stripe throated yuhina": {
        "id": "s081",
        "name": "Stripe-throated Yuhina",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "genus":"Yuhina", "species":"gularis",
        "nepali": " ",
        "details": " "
    },
    "sulphur bellied warbler": {
        "id": "s082",
        "name": "Suplphur-bellied Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"griseolus",
        "nepali": " ",
        "details": " "
    },
    "sultan tit": {
        "id": "s083",
        "name": "Sultan Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Melanochlora", "species":"sultanea",
        "nepali": " ",
        "details": " "
    },
    "swamp francolin": {
        "id": "s084",
        "name": "Swamp Francolin",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Francolinus", "species":"gularis",
        "nepali": " ",
        "details": " "
    },
    "swamp grass babbler": {
        "id": "s085",
        "name": "Swamp Grass-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "genus":"Laticilla", "species":"cinerascens",
        "nepali": " ",
        "details": " "
    },
    "swinhoe s minivet": {
        "id": "s086",
        "name": "Swinhoe's Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "genus":"Pericrocotus", "species":"cantonensis",
        "nepali": " ",
        "details": " "
    },
    "sykes s nightjar": {
        "id": "s087",
        "name": "Sykes's Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "genus":"Caprimulgus", "species":"mahrattensis",
        "nepali": " ",
        "details": " "
    },
    "tawny eagle": {
        "id": "t001",
        "name": "Tawny Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Aquila", "species":"rapax",
        "nepali": " ",
        "details": " "
    },
    "tawny fish owl": {
        "id": "t002",
        "name": "Tawny Fish-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "genus":"Ketupa", "species":"flavipes",
        "nepali": " ",
        "details": " "
    },
    "tawny pipit": {
        "id": "t003",
        "name": "Tawny Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"campestris",
        "nepali": " ",
        "details": " "
    },
    "tawny bellied babbler": {
        "id": "t004",
        "name": "Tawny-bellied Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Dumetia", "species":"hyperythra",
        "nepali": " ",
        "details": " "
    },
    "temminck s stint": {
        "id": "t005",
        "name": "Temminck's Stint",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Calidris", "species":"temminckii",
        "nepali": " ",
        "details": " "
    },
    "terek sandpiper": {
        "id": "t006",
        "name": "Terek Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Xenus", "species":"cinereus",
        "nepali": " ",
        "details": " "
    },
    "thick billed flowerpecker": {
        "id": "t007",
        "name": "Thick-billed Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicaeum", "species":"agile",
        "nepali": " ",
        "details": " "
    },
    "thick billed green pigeon": {
        "id": "t008",
        "name": "Thick-billed Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Treron", "species":"curvirostra",
        "nepali": " ",
        "details": " "
    },
    "thick billed warbler": {
        "id": "t009",
        "name": "Thick-billed Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "genus":"Arundinax", "species":"aedon",
        "nepali": " ",
        "details": " "
    },
    "tibetan blackbird": {
        "id": "t010",
        "name": "Tibetan Blackbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"maximus",
        "nepali": " ",
        "details": " "
    },
    "tibetan lark": {
        "id": "t011",
        "name": "Tibetan Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "genus":"Melanocorypha", "species":"maxima",
        "nepali": " ",
        "details": " "
    },
    "tibetan partridge": {
        "id": "t012",
        "name": "Tibetan Partridge",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Perdix", "species":"hodgsoniae",
        "nepali": " ",
        "details": " "
    },
    "tibetan sandgrouse": {
        "id": "t013",
        "name": "Tibetan Sandgrouse",
        "order": order.PTEROCLIFORMES,
        "family": familyname.Pteroclidae,
        "genus":"Syrrhaptes", "species":"tibetanus",
        "nepali": " ",
        "details": " "
    },
    "tibetan siskin": {
        "id": "t014",
        "name": "Tibetan Siskin",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Spinus", "species":"thibetanus",
        "nepali": " ",
        "details": " "
    },
    "tibetan snowcock": {
        "id": "t015",
        "name": "Tibetan Snowcock",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "genus":"Tetraogallus", "species":"tibetanus",
        "nepali": " ",
        "details": " "
    },
    "tickell s blue flycatcher": {
        "id": "t016",
        "name": "Tickell's Blue-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Cyornis", "species":"tickelliae",
        "nepali": " ",
        "details": " "
    },
    "tickell s leaf warbler": {
        "id": "t017",
        "name": "Tickell's Leaf Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"affinis",
        "nepali": " ",
        "details": " "
    },
    "tickell s thrush": {
        "id": "t018",
        "name": "Tickell's Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"unicolor",
        "nepali": " ",
        "details": " "
    },
    "tree pipit": {
        "id": "t019",
        "name": "Tree Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"trivialis",
        "nepali": " ",
        "details": " "
    },
    "tricolored munia": {
        "id": "t020",
        "name": "Tricolored Munia",
        "order": order.PASSERIFORMES,
        "family": familyname.Estrildidae,
        "genus":"Lonchura", "species":"malacca",
        "nepali": " ",
        "details": " "
    },
    "tufted duck": {
        "id": "t021",
        "name": "Tufted Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Aythya", "species":"fuligula",
        "nepali": " ",
        "details": " "
    },
    "tundra swan": {
        "id": "t022",
        "name": "Tundra Swan",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Cygnus", "species":"columbianus",
        "nepali": " ",
        "details": " "
    },
    "twite": {
        "id": "t023",
        "name": "Twite",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Linaria", "species":"flavirostris",
        "nepali": " ",
        "details": " "
    },
    "tytler s leaf warbler": {
        "id": "t024",
        "name": "Tytler's Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"tytleri",
        "nepali": " ",
        "details": " "
    },
    "ultramarine flycatcher": {
        "id": "u001",
        "name": "Ultramarine Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Ficedula", "species":"superciliaris",
        "nepali": " ",
        "details": " "
    },
    "upland buzzard": {
        "id": "u002",
        "name": "Upland Buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Buteo", "species":"hemilasius",
        "nepali": " ",
        "details": " "
    },
    "upland pipit": {
        "id": "u003",
        "name": "Upland Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"sylvanus",
        "nepali": " ",
        "details": " "
    },
    "variable wheatear": {
        "id": "v001",
        "name": "Variable Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Oenanthe", "species":"picata",
        "nepali": " ",
        "details": " "
    },
    "variegated laughingthrush": {
        "id": "v002",
        "name": "Variegated Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Trochalopteron", "species":"variegatum",
        "nepali": " ",
        "details": " "
    },
    "velvet fronted nuthatch": {
        "id": "v003",
        "name": "Velvet-fronted Nuthatch",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "genus":"Sitta", "species":"frontalis",
        "nepali": " ",
        "details": " "
    },
    "verditer flycatcher": {
        "id": "v004",
        "name": "Verditer Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Eumyias", "species":"thalassinus",
        "nepali": " ",
        "details": " "
    },
    "vernal hanging parrot": {
        "id": "v005",
        "name": "Vernal Hanging-parrot",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "genus":"Loriculus", "species":"vernalis",
        "nepali": " ",
        "details": " "
    },
    "vinaceous rosefinch": {
        "id": "v006",
        "name": "Vinaceous Rosefinch ",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Carpodacus", "species":"vinaceus",
        "nepali": " ",
        "details": " "
    },
    "wallcreeper": {
        "id": "w001",
        "name": "Wallcreeper",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "genus":"Tichodroma", "species":"muraria",
        "nepali": " ",
        "details": " "
    },
    "water pipit": {
        "id": "w002",
        "name": "Water Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Anthus", "species":"spinoletta",
        "nepali": " ",
        "details": " "
    },
    "watercock": {
        "id": "w003",
        "name": "Watercock",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Gallicrex", "species":"cinerea",
        "nepali": " ",
        "details": " "
    },
    "wedge tailed green pigeon": {
        "id": "w004",
        "name": "Wedge-tailed Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Treron", "species":"sphenurus",
        "nepali": " ",
        "details": " "
    },
    "western hooded pitta": {
        "id": "w005",
        "name": "Western Hooded Pitta",
        "order": order.PASSERIFORMES,
        "family": familyname.Pittidae,
        "genus":"Pitta", "species":"sordida",
        "nepali": " ",
        "details": " "
    },
    "western crowned leaf warbler": {
        "id": "w006",
        "name": "Western Crowned Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"occipitalis",
        "nepali": " ",
        "details": " "
    },
    "western koel": {
        "id": "w007",
        "name": "Western Koel",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Eudynamys", "species":"scolopaceus",
        "nepali": " ",
        "details": " "
    },
    "western marsh harrier": {
        "id": "w008",
        "name": "Western Marsh-harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Circus", "species":"aeruginosus",
        "nepali": " ",
        "details": " "
    },
    "western spotted dove": {
        "id": "w009",
        "name": "Western Spotted Dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Spilopelia", "species":"suratensis",
        "nepali": " ",
        "details": " "
    },
    "western water rail": {
        "id": "w010",
        "name": "Western Water Rail",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Rallus", "species":"aquaticus",
        "nepali": " ",
        "details": " "
    },
    "western yellow wagtail": {
        "id": "w011",
        "name": "Western Yellow Wagtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Motacilla", "species":"flava",
        "nepali": " ",
        "details": " "
    },
    "whimbrel": {
        "id": "w012",
        "name": "Whimbrel",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Numenius", "species":"phaeopus",
        "nepali": " ",
        "details": " "
    },
    "whiskered tern": {
        "id": "w013",
        "name": "Whiskered Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "genus":"Chlidonias", "species":"hybrida",
        "nepali": " ",
        "details": " "
    },
    "whiskered yuhina": {
        "id": "w014",
        "name": "Whiskered Yuhina",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "genus":"Yuhina", "species":"flavicollis",
        "nepali": " ",
        "details": " "
    },
    "whistler s warbler": {
        "id": "w015",
        "name": "Whistler's Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"whistleri",
        "nepali": " ",
        "details": " "
    },
    "whistling hawk cuckoo": {
        "id": "w016",
        "name": "Whistling Hawk-cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "genus":"Hierococcyx", "species":"nisicolor",
        "nepali": " ",
        "details": " "
    },
    "white stork": {
        "id": "w017",
        "name": "White Strok",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "genus":"Ciconia", "species":"ciconia",
        "nepali": " ",
        "details": " "
    },
    "white wagtail": {
        "id": "w018",
        "name": "White Wagtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "genus":"Motacilla", "species":"alba",
        "nepali": " ",
        "details": " "
    },
    "white backed thrush": {
        "id": "w019",
        "name": "White-backed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"kessleri",
        "nepali": " ",
        "details": " "
    },
    "white bellied drongo": {
        "id": "w020",
        "name": "White-bellied Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "genus":"Dicrurus", "species":"caerulescens",
        "nepali": " ",
        "details": " "
    },
    "white bellied erponis": {
        "id": "w021",
        "name": "White-bellied Erponis",
        "order": order.PASSERIFORMES,
        "family": familyname.Vireonidae,
        "genus":"Erponis", "species":"zantholeuca",
        "nepali": " ",
        "details": " "
    },
    "white bellied heron": {
        "id": "w022",
        "name": "White-bellied Heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ardea", "species":"insignis",
        "nepali": " ",
        "details": " "
    },
    "white bellied redstart": {
        "id": "w023",
        "name": "White-bellied Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Hodgsonius", "species":"phaenicuroides",
        "nepali": " ",
        "details": " "
    },
    "white breasted kingfisher": {
        "id": "w024",
        "name": "White-breasted Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "genus":"Halcyon", "species":"smyrnensis",
        "nepali": " ",
        "details": " "
    },
    "white breasted waterhen": {
        "id": "w025",
        "name": "White-breasted Waterhen",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "genus":"Amaurornis", "species":"phoenicurus",
        "nepali": " ",
        "details": " "
    },
    "white browed bush robin": {
        "id": "w026",
        "name": "White-browed Bush-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Tarsiger", "species":"indicus",
        "nepali": " ",
        "details": " "
    },
    "white browed fantail": {
        "id": "w027",
        "name": "White-browed Fantail",
        "order": order.PASSERIFORMES,
        "family": familyname.Rhipiduridae,
        "genus":"Rhipidura", "species":"aureola",
        "nepali": " ",
        "details": " "
    },
    "white browed fulvetta": {
        "id": "w028",
        "name": "White-browed Fulvetta",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Fulvetta", "species":"vinipectus",
        "nepali": " ",
        "details": " "
    },
    "white browed scimitar babbler": {
        "id": "w029",
        "name": "White-browed Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "genus":"Pomatorhinus", "species":"schisticeps",
        "nepali": " ",
        "details": " "
    },
    "white browed shrike babbler": {
        "id": "w030",
        "name": "White-browed Shrike-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Vireonidae,
        "genus":"Pteruthius", "species":"aeralatus",
        "nepali": " ",
        "details": " "
    },
    "white browed tit warbler": {
        "id": "w031",
        "name": "White-browed Tit-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "genus":"Leptopoecile", "species":"sophiae",
        "nepali": " ",
        "details": " "
    },
    "white browed wagtail": {
        "id": "w032",
        "name": "White-browed Wagtail",
        "order": order.PASSERIFORMES,
        "family":familyname.Motacillidae,
        "genus":"Motacilla", "species":"maderaspatensis",
        "nepali": " ",
        "details": " "
    },
    "white browned piculet": {
        "id": "w033",
        "name": "White-browned Piculet",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Sasia", "species":"ochracea",
        "nepali": " ",
        "details": " "
    },
    "white capped bunting": {
        "id": "w034",
        "name": "White-capped Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"stewarti",
        "nepali": " ",
        "details": " "
    },
    "white capped water redstart": {
        "id": "w035",
        "name": "White-capped Water-redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"leucocephalus",
        "nepali": " ",
        "details": " "
    },
    "white cheeked nuthatch": {
        "id": "w036",
        "name": "White-cheeked Nuthatch",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "genus":"Sitta", "species":"leucopsis",
        "nepali": " ",
        "details": " "
    },
    "white collared blackbird": {
        "id": "w037",
        "name": "White-collared Blackbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "genus":"Turdus", "species":"albocinctus",
        "nepali": " ",
        "details": " "
    },
    "white crested laughingthrush": {
        "id": "w038",
        "name": "White-cresyed Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"leucolophus",
        "nepali": " ",
        "details": " "
    },
    "white eyed buzzard": {
        "id": "w039",
        "name": "White-eyed Buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Butastur", "species":"teesa",
        "nepali": " ",
        "details": " "
    },
    "white gorgeted flycatcher": {
        "id": "w040",
        "name": "White-gorgeted Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Anthipes", "species":"monileger",
        "nepali": " ",
        "details": " "
    },
    "white hooded babbler": {
        "id": "w041",
        "name": "White-hooded Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "genus":"Gampsorhynchus", "species":"rufulus",
        "nepali": " ",
        "details": " "
    },
    "white naped woodpecker": {
        "id": "w042",
        "name": "White-naped Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Chrysocolaptes", "species":"festivus",
        "nepali": " ",
        "details": " "
    },
    "white naped yuhina": {
        "id": "w043",
        "name": "White-naped Yuhina",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "genus":"Yuhina", "species":"bakeri",
        "nepali": " ",
        "details": " "
    },
    "white rumped munia": {
        "id": "w044",
        "name": "White-rumped Munia",
        "order": order.PASSERIFORMES,
        "family": familyname.Estrildidae,
        "genus":"Lonchura", "species":"striata",
        "nepali": " ",
        "details": " "
    },
    "white rumped shama": {
        "id": "w045",
        "name": "White-rumped Shama",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Kittacincla", "species":"malabarica",
        "nepali": " ",
        "details": " "
    },
    "white rumped snowfinch": {
        "id": "w046",
        "name": "White-rumped Snowfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "genus":"Onychostruthus", "species":"taczanowskii",
        "nepali": " ",
        "details": " "
    },
    "white rumped spinetail": {
        "id": "w047",
        "name": "White-rumped Spinetail",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Zoonavena", "species":"sylvatica",
        "nepali": " ",
        "details": " "
    },
    "white rumped vulture": {
        "id": "w048",
        "name": "White-rumped Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Gyps", "species":"bengalensis",
        "nepali": " ",
        "details": " "
    },
    "white shouldered starling": {
        "id": "w049",
        "name": "White-shouldered Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "genus":"Sturnia", "species":"sinensis",
        "nepali": " ",
        "details": " "
    },
    "white tailed blue robin": {
        "id": "w050",
        "name": "White-tailed Blue Robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Myiomela", "species":"leucura",
        "nepali": " ",
        "details": " "
    },
    "white tailed lapwing": {
        "id": "w051",
        "name": "White-tailed Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Vanellus", "species":"leucurus",
        "nepali": " ",
        "details": " "
    },
    "white tailed nuthatch": {
        "id": "w052",
        "name": "White-tailed Nuthatch",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "genus":"Sitta", "species":"himalayensis",
        "nepali": " ",
        "details": " "
    },
    "white tailed sea eagle": {
        "id": "w053",
        "name": "White-tailed Sea-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "genus":"Haliaeetus", "species":"albicilla",
        "nepali": " ",
        "details": " "
    },
    "white tailed stonechat": {
        "id": "w054",
        "name": "White-tailed Stonechat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Saxicola", "species":"leucura",
        "nepali": " ",
        "details": " "
    },
    "white throated bulbul": {
        "id": "w055",
        "name": "White-throated Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Alophoixus", "species":"flaveolus",
        "nepali": " ",
        "details": " "
    },
    "white throated bushchat": {
        "id": "w056",
        "name": "White-throated Bushchat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Saxicola", "species":"insignis",
        "nepali": " ",
        "details": " "
    },
    "white throated dipper": {
        "id": "w057",
        "name": "White-throated Dipper",
        "order": order.PASSERIFORMES,
        "family": familyname.Cinclidae,
        "genus":"Cinclus", "species":"cinclus",
        "nepali": " ",
        "details": " "
    },
    "white throated fantail": {
        "id": "w058",
        "name": "White-throated Fantail",
        "order": order.PASSERIFORMES,
        "family": familyname.Rhipiduridae,
        "genus":"Rhipidura", "species":"albicollis",
        "nepali": " ",
        "details": " "
    },
    "white throated laughingthrush": {
        "id": "w059",
        "name": "White-throated Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "genus":"Garrulax", "species":"albogularis",
        "nepali": " ",
        "details": " "
    },
    "white throated needletail": {
        "id": "w060",
        "name": "White-throated Needletail",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "genus":"Hirundapus", "species":"caudacutus",
        "nepali": " ",
        "details": " "
    },
    "white throated redstart": {
        "id": "w061",
        "name": "White-throated Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"schisticeps",
        "nepali": " ",
        "details": " "
    },
    "white throated tit": {
        "id": "w062",
        "name": "White-throated Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "genus":"Aegithalos", "species":"niveogularis",
        "nepali": " ",
        "details": " "
    },
    "white winged grosbeak": {
        "id": "w063",
        "name": "White-winged Grosbeak",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Mycerobas", "species":"carnipes",
        "nepali": " ",
        "details": " "
    },
    "white winged redstart": {
        "id": "w064",
        "name": "White-winged Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "genus":"Phoenicurus", "species":"erythrogastrus",
        "nepali": " ",
        "details": " "
    },
    "white winged tern": {
        "id": "w065",
        "name": "White-winged Tern",
        "order": order.CHARADRIIFORMES,
        "family":familyname.Laridae,
        "genus":"Chlidonias", "species":"leucopterus",
        "nepali": " ",
        "details": " "
    },
    "whooper swan": {
        "id": "w066",
        "name": "Whooper Swan",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "genus":"Cygnus", "species":"cygnus",
        "nepali": " ",
        "details": " "
    },
    "wire tailed swallow": {
        "id": "w067",
        "name": "Wire-tailed Swallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "genus":"Hirundo", "species":"smithii",
        "nepali": " ",
        "details": " "
    },
    "wood sandpiper": {
        "id": "w068",
        "name": "Wood Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Tringa", "species":"glareola",
        "nepali": " ",
        "details": " "
    },
    "wood snipe": {
        "id": "w069",
        "name": "Wood Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "genus":"Gallinago", "species":"nemoricola",
        "nepali": " ",
        "details": " "
    },
    "yellow billed blue magpie": {
        "id": "y001",
        "name": "Yellow-billed Blue Magpie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Urocissa", "species":"flavirostris",
        "nepali": " ",
        "details": " "
    },
    "yellow bittern": {
        "id": "y002",
        "name": "Yellow Bittern",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "genus":"Ixobrychus", "species":"sinensis",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied fairy fantail": {
        "id": "y003",
        "name": "Yellow-bellied Fairy-fantail",
        "order": order.PASSERIFORMES,
        "family": familyname.Stenostiridae,
        "genus":"Chelidorhynx", "species":"hypoxanthus",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied flowerpecker": {
        "id": "y004",
        "name": "Yellow-bellied Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicaeum", "species":"melanozanthum",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied prinia": {
        "id": "y005",
        "name": "Yellow-bellied Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Prinia", "species":"flaviventris",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied warbler": {
        "id": "y006",
        "name": "Yellow-bellied Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Abroscopus", "species":"superciliaris",
        "nepali": " ",
        "details": " "
    },
    "yellow billed chough": {
        "id": "y007",
        "name": "Yellow-billed Chough",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "genus":"Pyrrhocorax", "species":"graculus",
        "nepali": " ",
        "details": " "
    },
    "yellow breasted bunting": {
        "id": "y008",
        "name": "Yellow-breasted Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"aureola",
        "nepali": " ",
        "details": " "
    },
    "yellow breasted greenfinch": {
        "id": "y009",
        "name": "Yellow-breasted Greenfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "genus":"Chloris", "species":"spinoides",
        "nepali": " ",
        "details": " "
    },
    "yellow browed tit": {
        "id": "y010",
        "name": "Yellow-browed Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Sylviparus", "species":"modestus",
        "nepali": " ",
        "details": " "
    },
    "yellow browed warbler": {
        "id": "y011",
        "name": "Yellow-browed Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"inornatus",
        "nepali": " ",
        "details": " "
    },
    "yellow cheeked tit": {
        "id": "y012",
        "name": "Yellow-cheeked Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "genus":"Machlolophus", "species":"spilonotus",
        "nepali": " ",
        "details": " "
    },
    "yellow crowned woodpecker": {
        "id": "y013",
        "name": "Yellow-crowned Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "genus":"Leiopicus", "species":"mahrattensis",
        "nepali": " ",
        "details": " "
    },
    "yellow eyed babbler": {
        "id": "y014",
        "name": "Yellow-eyed Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "genus":"Chrysomma", "species":"sinense",
        "nepali": " ",
        "details": " "
    },
    "yellow footed green pigeon": {
        "id": "y015",
        "name": "Yellow-footed Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "genus":"Treron", "species":"phoenicopterus",
        "nepali": " ",
        "details": " "
    },
    "yellow legged buttonquail": {
        "id": "y016",
        "name": "Yellow-legged Buttonquail",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Turnicidae,
        "genus":"Turnix", "species":"tanki",
        "nepali": " ",
        "details": " "
    },
    "yellow rumped honeyguide": {
        "id": "y017",
        "name": "Yellow-rumped Honeyguide",
        "order": order.PICIFORMES,
        "family": familyname.Indicatoridae,
        "genus":"Indicator", "species":"xanthonotus",
        "nepali": " ",
        "details": " "
    },
    "yellow vented flowerpecker": {
        "id": "y018",
        "name": "Yellow-vented Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "genus":"Dicaeum", "species":"chrysorrheum",
        "nepali": " ",
        "details": " "
    },
    "yellow vented warbler": {
        "id": "y019",
        "name": "Yellow-vented Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "genus":"Phylloscopus", "species":"cantator",
        "nepali": " ",
        "details": " "
    },
    "yellow wattled lapwing": {
        "id": "y020",
        "name": "Yellow-wattled Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "genus":"Vanellus", "species":"malabaricus",
        "nepali": " ",
        "details": " "
    },
    "yellowhammer": {
        "id": "y021",
        "name": "Yellowhammer" ,
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "genus":"Emberiza", "species":"citrinella",
        "nepali": " ",
        "details": " "
    },
    "zitting cisticola": {
        "id": "z001",
        "name": "Zitting Cisticola",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "genus":"Cisticola", "species":"juncidis",
        "nepali": " ",
        "details": " "
    },



}
