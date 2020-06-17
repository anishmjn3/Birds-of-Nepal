
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
        "scientific name": "Malacocincla abbotti",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p><b>Abbott's babbler</b> (<i>Malacocincla abbotti</i>) is a species of bird in the family Pellorneidae. It is widely distributed along the Himalayas in South Asia and extending into the forests of Southeast Asia. They are short-tailed and stout birds which forage in pairs in dense undergrowth close to the ground and their presence is indicated by their distinctive calls.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>Abbott's babbler was described by the English zoologist Edward Blyth in 1845 and given the binomial name <i>Malacocincla abbotti</i>. The genus name <i>Malacocincla</i> combines the Ancient Greek <i>malakos</i> meaning \"soft\" with modern Latin <i>cinclus</i>, meaning \"thrush\"; referring to the birds' full and drooping plumage. The specific name <i>abbotti</i> was chosen by Blyth to honour the specimen collector, Lieutenant Colonel J. R. Abbott (1811\u20131888) who served in British India as Assistant Commissioner of the Arakan from 1837 to 1845. Blyth erected the new genus <i>Malacocincla</i> for this species but subsequent workers placed the species in <i>Turdinus</i> and <i>Trichastoma</i>. A revision reinstated its placement in <i>Malacocincla</i> in 1985. A 2001 study confirmed the cohesiveness of the <i>Trichastoma</i> group but a 2012 study shows that <i>M. abbotti</i> and <i>M. sepiaria</i> are in a clade along with Napothera while <i>M. cinereiceps</i> and <i>M. malaccensis</i> fall into a different clade along with the genus <i>Trichastoma</i> and several species of <i>Pellorneum</i>. An isolated population occurs in the Visakhapatnam Ghats, well separated from the nearest main distribution along the Himalayas and was named after Indian ornithologist K.S.R. Krishna Raju by Dillon Ripley and Bruce Beehler in 1985. The nominate population is from southern Myanmar and extends to southern Tenasserim and northwestern Malaya including the Langkawi Islands. Several other populations of this widespread species have been named as subspecies and not all are recognized. The population in the eastern Himalayas from eastern Nepal to Sikkim and Assam was named as <i>amabile</i> but is now considered within the nominate subspecies. Others include <i>altera</i> (central Laos and Annam), <i>williamsoni</i> (eastern Thailand and northwestern Cambodia), <i>obscurior</i> (coastal southeastern Thailand), <i>olivaceum</i> (Peninsular Thailand and Malaya), <i>sirense</i> (Borneo, Pulau Mata Siri) and <i>baweanum</i> (Bawean Island).</p><p>Eight subspecies are recognised:</p>\n<ul><li><i>M. a. abbotti</i> Blyth, 1845 \u2013 east Himalayas to central Malay Peninsula</li>\n<li><i>M. a. krishnarajui</i> Ripley &amp; Beehler, 1985 \u2013 east India</li>\n<li><i>M. a. williamsoni</i> Deignan, 1948 \u2013 east Thailand to south Vietnam</li>\n<li><i>M. a. obscurior</i> Deignan, 1948 \u2013 east Thailand and southwest Cambodia</li>\n<li><i>M. a. altera</i> (Sims, 1957) \u2013 central Laos and central Vietnam</li>\n<li><i>M. a. olivacea</i> (Strickland, 1847) \u2013 south Malay Peninsula and Sumatra</li>\n<li><i>M. a. concreta</i> B\u00fcttikofer, 1895 \u2013 Borneo and Belitung Island</li>\n<li><i>M. a. baweana</i> Oberholser, 1917 \u2013 Bawean Island (north of Java)</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>The adult Abbott's babbler is a nondescript, brown, short-tailed, babbler that moves about in the low vegetation often near streams and in the vicinity of tree ferns and tangled vegetation. The throat is grey-white while the center of the belly is white and the flanks are olive. The undertail coverts are rusty-colored. The sexes are alike. It has a short tail and heavy bill; it is drab olive-brown with bright rusty lower flanks and vent, a greyish-white throat and breast and variable pale grey supercilium and lores. Juvenile birds have dark rufescent-brown crowns and upperparts. The calls are distinctive. The subspecies <i>M. a. krishnarajui</i> of the Eastern Ghats has a darker russet tail and rump than the Himalayan nominate subspecies. Specimens measure 12\u201313\u00a0cm (4.7\u20135.1\u00a0in) in length, with a head of 39\u201344\u00a0mm (1.5\u20131.7\u00a0in) and tail of 55\u201361\u00a0mm (2.2\u20132.4\u00a0in).</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>In South Asia, Abbott's babbler is resident from Nepal to Arunachal Pradesh and the Assam Valley in India, south throughout the South Assam hills, including Meghalaya and south through the Lushai Hills. It is also resident in east and south Bangladesh (around Jessore and Khulna), and the Eastern Ghats in North-east Andhra Pradesh and Odisha. It occurs up to 600\u00a0m (2000\u00a0ft), 275\u00a0m (900\u00a0ft) in Nepal. It is widely distributed across Southeast Asia.</p><p>It is common across much of its large range. It is seen in the understory of broadleaved evergreen forest, forest edge, secondary growth and scrub. In Singapore, they have been noted as being tolerant to disturbance and adapting to secondary growth and disturbed forest.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Abbott's babbler usually moves around in pairs close to the ground. They breed from April to July (summer monsoon), with the nest being a carefully placed but bulky cup low in palms or other undergrowth. A study in Thailand found that most nests are placed in spiny palms and rattans. The usual clutch is 3 to 5 eggs which are bright salmon with dark blotches and red lines. When disturbed at the nest, the bird slip over the edge and fly with laboured wing beats and then hop out of sight. More than one brood may be raised in a season.</p><p>Their distinctive calls consists of three or four notes with the a drop on the middle note. The antiphonal duet of a male and female has the male leading with a \"poor'ol bear\" followed by the females \"dear dear\". The tunes may however change over time. The birds tend to remain within a well marked area and do not wander widely. The song is a variable short series of around three to four notes of rich, fluty, liquid, slurred, short whistled notes; these are sometimes delivered haltingly and sometimes rapidly. The evening group song consists of a recurrent sputtering <i>churrr</i> sound, which is low and slurred; ending with a sharp <i>chreep</i>. Calls include soft mewing notes, and a pulsing, purring trill when agitated.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Call recordings on Xeno-Canto</li>\n<li>Images and videos</li></ul>"
    },
    "aberrant bush warbler": {
        "id": "a002",
        "name": "Aberrant Bush-wabler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": "Horornis flavoliceus",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>aberrant bush warbler</b> (<i>Horornis flavolivaceus</i>) is a species in the bush warbler family, Cettiidae. It was formerly included in the \"Old World warbler\" assemblage.\n</p><p>It is found in central and southern China, and the northern extremes of Myanmar and Vietnam. It occurs in the countries of Bhutan, China, India, Indonesia, Laos, Malaysia, Myanmar, Nepal, Philippines, Thailand, Timor-Leste and Vietnam and also may occur in northeastern and southeastern Bangladesh.</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p>\n\n<p><br></p>"
    },
    "african comb duck": {
        "id": "a003",
        "name": "African Comb Duck",
        "order": order.ANSERIFORME,
        "family": familyname.Anatidae,
        "scientific name": "Sarkidiornis melanotos",
        "nepali": " ",
        "details": "p class=\"mw-empty-elt\">\n</p>\n<p>The <b>knob-billed duck</b> (<i>Sarkidiornis melanotos</i>), or <b>African comb duck</b>, is a duck found in tropical wetlands in Sub-Saharan Africa, Madagascar and south Asia from Pakistan to Laos and extreme southern China.\n</p><p>Most taxonomic authorities split this species and the comb duck from each other. The supposed extinct \"Mauritian comb duck\" is based on misidentified remains of the Mauritian shelduck (<i>Alopochen mauritianus</i>); this was realized as early as 1897, but the mistaken identity can still occasionally be found in recent sources.\n</p>\n\n\n<h2><span id=\"Description_and_systematics\">Description and systematics</span></h2>\n<p>This common species is unmistakable. It is one of the largest species of duck. Length can range from 56 to 76\u00a0cm (22 to 30\u00a0in), wingspan ranges from 116 to 145\u00a0cm (46 to 57\u00a0in) and weight from 1.03 to 2.9\u00a0kg (2.3 to 6.4\u00a0lb). Adults have a white head freckled with dark spots, and a pure white neck and underparts. The upperparts are glossy blue-black upperparts, with bluish and greenish iridescence especially prominent on the secondaries (lower arm feathers). The male is much larger than the female, and has a large black knob on the bill. Young birds are dull buff below and on the face and neck, with dull brown upperparts, top of the head and eyestripe. Knob-billed ducks are generally larger in size when compared to comb ducks, and flanks are usually lighter (light grey, in females sometimes whitish).\n</p><p>Immature knob-billed ducks look like a large greyish female of the cotton pygmy goose (<i>Nettapus coromandelicus</i>) and may be difficult to tell apart if no other birds are around to compare size and hue. However, knob-billed ducks in immature plumage are rarely seen without adults nearby and thus they are usually easily identified too.</p><p>The knob-billed duck is silent except for a low croak when flushed.</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><p>Uncertainty surrounds the correct systematic placement of this species. Initially, it was placed in the dabbling duck subfamily Anatinae. Later, it was assigned to the \"perching ducks\", a paraphyletic assemblage of waterfowl most of which are intermediate between dabbling ducks and shelducks. As the \"perching ducks\" were split up, the knob-billed duck was moved to the Tadorninae or shelduck subfamily.</p><p>Analysis of mtDNA sequences of the cytochrome <i>b</i> and NADH dehydrogenase subunit 2 genes, however, suggests that it is a quite basal member of the Anatidae, vindicating the earliest placement. But its closest living relatives cannot be resolved to satisfaction without further study.</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n<p>It breeds in still freshwater swamps and lakes in the tropics. It is largely resident, apart from dispersion in the wet season.</p><p>This duck feeds on vegetation by grazing or dabbling and to a lesser extent on small fish, invertebrates, and seeds. It can become a problem to rice farmers. Knob-billed ducks often perch in trees. They are typically seen in flocks, small in the wet season, up to 100 in the dry season. Sometimes they separate according to sex.</p><p>The knob-billed duck is declining in numbers locally, but due to its wide range it is not considered globally threatened by the IUCN. It is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> applies.\n</p>\n<h3><span id=\"Reproduction\">Reproduction</span></h3>\n<p>African birds breed during and after the rainy season and may not breed if the rain is scanty. Knob-billed ducks nest mainly in tree holes, also in tall grass.\n</p><p>Males may have two mates at once or up to five in succession. They defend the females and young but not the nest sites.\n</p><p>Females lay 7 to 15 yellowish-white eggs.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Species text in The Atlas of Southern African Birds.</li></ul>"
    },
    "alexandrine parakeet": {
        "id": "a004",
        "name": "Alexandrine Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "scientific name": "Psittacula eupatria",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Alexandrine parakeet</b> (<i>Psittacula eupatria</i>), also known as the <b>Alexandrine parrot</b>, is a medium-sized parrot in the genus Psittacula of the family Psittacidae. It is named after Alexander the Great, who transported numerous birds from Punjab to various European and Mediterranean countries and regions, where they were prized by the royalty, nobility and warlords.</p><p>The Alexandrine parakeet has established feral populations in Spain, England, Belgium, the Netherlands, Germany, Turkey, Saudi Arabia, Bahrain, Qatar, the United Arab Emirates, Iran, Hong Kong where it lives alongside feral populations of its close relative, the rose-ringed parakeet (<i>Psittacula krameri</i>).</p>\n\n\n<h2><span id=\"Taxonomy_and_etymology\">Taxonomy and etymology</span></h2>\n<p>The Alexandrine parakeet was first described by French zoologist Mathurin Jacques Brisson as <i>Psittaca Ginginiana</i> or \"La Perruche de Gingi\" (The Gingi's Parakeet) in 1760; after the town of Gingee in southeastern India, which was a French outpost then. The birds may, however, merely have been held in captivity there. Carl Linnaeus redescribed the Alexandrine parakeet in 1766 as <i>Psittacus eupatria</i>.</p>\n\n<p>The genus name <i>Psittacula</i> is a diminutive of the Latin word <i>psittacus</i> meaning \"parrot\", and the specific name <i>eupatria</i> is derived from the Ancient Greek words <i>eu-</i> meaning \"well\" and <i>patri\u00e1</i> meaning \"descent\".</p>\n<h2><span id=\"Phylogeny\">Phylogeny</span></h2>\n<p>Genetic analysis of the mitochondrial cytochrome b sequences of <i>Psittacula</i> parakeets has shown that the Alexandrine parakeet diverged from the lineage that gave rise to the rose-ringed parakeet (<i>Psittacula krameri</i>) and the Mauritius parakeet (<i>Psittacula eques</i>) about 5 million years ago.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The Alexandrine parakeet is one of the largest parakeets, measuring 56 to 62\u00a0cm (22 to 24\u00a0in) from the top of the head to the tip of the tail and weighing 200 to 300\u00a0g (7.1 to 10.6\u00a0oz). The tail measures 28 to 35\u00a0cm (11 to 14\u00a0in). It is predominantly green with a light blue-grey sheen on the cheeks and nape (back of the neck), yellow-green abdomen, red patch on the shoulders and massive red beak with yellow tips. The upperside of the tail passes from green at the top to blue further down, and is yellow at the tip. The underside of the tail is yellow.</p><p>Adults are sexually dimorphic. Adult males have a black stripe across their lower cheeks and a pink band on their nape. Adult females lack both a black stripe across their lower cheeks and a pink band on their nape. The young are similar in appearance to adult females but have shorter tails.</p>\n<h2><span id=\"Subspecies\">Subspecies</span></h2>\n<p>Five subspecies of the Alexandrine parakeet are currently recognized. Information on the distribution and plumage differences of the different subspecies is given below.</p>\n\n<h2><span id=\"Ecology_and_behaviour\">Ecology and behaviour</span></h2>\n<p>The Alexandrine parakeet lives in forests, woodlands, agricultural lands and mangrove forests at elevations of up to 900 m (3,000 ft). It eats a variety of wild and cultivated seeds, buds, fruits and nuts. Flocks can cause extensive damage to ripening fruits and grain crops like maize and jowar. It usually lives in small flocks, but forms larger groups in areas where food is abundant or at communal roosts.</p>\n\n<p>The Alexandrine parakeet has a variety of calls, including a ringing <i>trrrieuw</i>, loud <i>kree-aar</i> or <i>keeak</i>, deep <i>klak-klak-klak-klak</i> and resonant <i>gr-aak</i>. Its calls are usually deeper, harsher and more resonant than those of the rose-ringed parakeet. Its voice becomes harsher when alarmed, and it shrieks loudly when mobbing predators. Flocks occasionally excitedly vocalize together. It is known to imitate human speech in captivity.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n\n<p>Alexandrine parakeets breed from November to April in their native range. They usually nest in tree hollows, but sometimes use tree holes excavated by themselves or cracks in buildings. Females lay 2 to 4 white, blunt oval-shaped eggs, measuring 27 to 34\u00a0mm (1.1 to 1.3\u00a0in). The average incubation period is 24 days. The chicks fledge at about 7 weeks of age, and are dependent on their parents until 3 to 4 months of age.</p>\n<h2><span id=\"Aviculture\">Aviculture</span></h2>\n<p>Alexandrine parakeets are relatively popular pet birds due to their long lifespan in captivity, playful behaviour and ability to mimic human speech. Alexander the Great is thought to have kept one as a pet. They are one of the most sought-after cage birds in the Indian market. According to CITES trade data, at least 57,772 Alexandrine parakeets were imported into countries outside their native range between 1981 and 2014.</p>\n<h2><span id=\"Conservation\">Conservation</span></h2>\n<p>The Alexandrine parakeet is listed as near threatened by the International Union for Conservation of Nature (IUCN) because of its steep population decline in its native range due to habitat loss, persecution and excessive capture to cater to the demands of the illegal wildlife trade. It is sporadic in South India, uncommon in Bangladesh, and declining in North Bengal and certain parts of Sri Lanka. It has suffered the greatest population declines in the Sindh and Punjab provinces of Pakistan, Laos, northwestern and southwestern Cambodia, and Thailand.</p><p>The sale of Alexandrine parakeets is banned in Pakistan, but they can be found being openly sold in the markets of Lahore and Rawalpindi. Their sale is also banned in India, and yet they are sold in broad daylight in urban bird markets, suggesting that the Indian government is allocating insufficient resources for their protection.</p>\n<h2><span id=\"Culture\">Culture</span></h2>\n\n<p>Sri Lanka, Vietnam, Thailand, Mongolia and Iran have issued postage stamps depicting the Alexandrine parakeet.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li class=\"mw-empty-elt\">\n<li>Alexandrine Parakeet (Psittacula eupatria) | Parrot Encyclopedia by the World Parrot Trust</li>\n<li class=\"mw-empty-elt\">\n<li><i>Birds of the Indian Subcontinent</i> by Richard Grimmett, Carol Inskipp and Tim Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a01408127636</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li class=\"mw-empty-elt\">\n<li>Wildscreen Arkive: Alexandrine parakeet (Psittacula eupatria) Gallery and fact sheet</li>\n<li class=\"mw-empty-elt\">\n<li>Oriental Bird Images: <i>Alexandrine parakeet</i> Selected images</li></ul> "
    },
    "alpine acentor": {
        "id": "a005",
        "name": "Alpine Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "scientific name": "Prunella collaris",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>alpine accentor</b> (<i>Prunella collaris</i>) is a small passerine bird in the family Prunellidae.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Alpine accentor was described by the Austria naturalist Giovanni Antonio Scopoli in 1769. He coined the binomial name <i>Sturnus collaris</i> and specified the type locality as the Carinthia region of southern Austria. The specific epithet is from the Latin <i>collaris</i> \"of the neck\". This species is now placed in the genus <i>Prunella</i> that was introduced by the French ornithologist Louis Vieillot in 1816. The Alpine accentor, along with the Altai accentor is sometimes separated from the other accentors, into the genus <i>Laiscopus</i>.</p><p>The word \"accentor\" is from post-classical Latin and means a person who sings with another. The genus name <i>Prunella</i> is from the German <i>Braunelle</i>, \"dunnock\", a diminutive of <i>braun</i>, \"brown\".</p><p>Nine subspecies are recognised:</p>\n<ul><li><i>P. c. collaris</i> (Scopoli, 1769) \u2013 southwest Europe to Slovenia and the Carpathians, northwest Africa</li>\n<li><i>P. c. subalpina</i> (Brehm, CL, 1831) \u2013 Croatia to Bulgaria and Greece, Crete and southwest Turkey</li>\n<li><i>P. c. montana</i> (Hablizl, 1783) \u2013 north and east Turkey to the Caucasus and Iran</li>\n<li><i>P. c. rufilata</i> (Severtzov, 1879) \u2013 northeast Afghanistan and north Pakistan through the mountains of central Asia to west China</li>\n<li><i>P. c. whymperi</i> (Baker, ECS, 1915) \u2013 west Himalayas</li>\n<li><i>P. c. nipalensis</i> (Blyth, 1843) \u2013 central and east Himalayas to southcentral China and north Myanmar</li>\n<li><i>P. c. tibetana</i> (Bianchi, 1905) \u2013 east Tibet</li>\n<li><i>P. c. erythropygia</i> (R. Swinhoe, 1870) \u2013 east Kazakhstan and southcentral Siberia to northeast Siberia, Japan, Korea and northeast China</li>\n<li><i>P. c. fennelli</i> Deignan, 1964 \u2013 Taiwan</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>This is a robin-sized bird at 15\u201317.5\u00a0cm in length, slightly larger than its relative, the dunnock. It has a streaked brown back, somewhat resembling a house sparrow, but adults have a grey head and red-brown spotting on the underparts. It has an insectivore's fine pointed bill.\n</p><p>Sexes are similar, although the male may be contrasted in appearance. Young birds have browner heads and underparts.\n</p>\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>It is found throughout the mountains of southern temperate Europe, Lebanon and Asia at heights above 2000\u00a0m. It is mainly resident, wintering more widely at lower latitudes, but some birds wander as rare vagrants as far as Great Britain.\n</p><p>It is a bird of bare mountain areas with some low vegetation.\n</p>\n<h2><span id=\"Breeding\">Breeding</span></h2>\n<p>It builds a neat nest low in a bush or rock crevice, laying 3-5 unspotted sky-blue eggs.\n</p><p>The mating system is of particular interest.  Home ranges are occupied by breeding groups of 3 or 4 males with 3 or 4 females.  These are unrelated birds which have a socially polygynandrous mating system.  Males have a dominance hierarchy, with the alpha males being generally older than subordinates.  Females seek matings with all the males, although the alpha male may defend her against matings from lower ranking males.  In turn, males seek matings with all the females.  DNA fingerprinting has been used to show that, within broods, there is often mixed paternity, although the female is always the true mother of the nestlings raised within her nest.  Males will provide food to chicks at several nests within the group, depending on whether they have mated with the female or not - males only provide care when they are likely to be the true fathers of the chicks.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li><cite id=\"CITEREFCramp1988\" class=\"citation book\">Cramp, Stanley;  et al., eds. (1988). \"<i>Prunella collaris</i> Alpine Accentor\". <i>Handbook of the Birds of Europe the Middle East and North Africa. The Birds of the Western Palearctic. Volume V: Tyrant Flycatchers to Thrushes</i>. Oxford: Oxford University Press. pp.\u00a0574\u2013585. ISBN\u00a0<bdi>978-0-19-857508-5</bdi>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Prunella+collaris+Alpine+Accentor&amp;rft.btitle=Handbook+of+the+Birds+of+Europe+the+Middle+East+and+North+Africa.+The+Birds+of+the+Western+Palearctic.+Volume+V%3A+Tyrant+Flycatchers+to+Thrushes&amp;rft.place=Oxford&amp;rft.pages=574-585&amp;rft.pub=Oxford+University+Press&amp;rft.date=1988&amp;rft.isbn=978-0-19-857508-5&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFDaviesHartleyHatchwellDesrochers1995\" class=\"citation journal\">Davies, N.B.; Hartley, I.R.; Hatchwell, B.J.; Desrochers, A.; Skeer, J.; Nebel, D. (1995). \"The polygynandrous mating system of the alpine accentor <i>Prunella collaris</i>. I. Ecological causes and reproductive conflicts\". <i>Animal Behaviour</i>. <b>49</b> (3): 769\u2013788. doi:10.1016/0003-3472(95)80209-6.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Animal+Behaviour&amp;rft.atitle=The+polygynandrous+mating+system+of+the+alpine+accentor+Prunella+collaris.+I.+Ecological+causes+and+reproductive+conflicts&amp;rft.volume=49&amp;rft.issue=3&amp;rft.pages=769-788&amp;rft.date=1995&amp;rft_id=info%3Adoi%2F10.1016%2F0003-3472%2895%2980209-6&amp;rft.aulast=Davies&amp;rft.aufirst=N.B.&amp;rft.au=Hartley%2C+I.R.&amp;rft.au=Hatchwell%2C+B.J.&amp;rft.au=Desrochers%2C+A.&amp;rft.au=Skeer%2C+J.&amp;rft.au=Nebel%2C+D.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFHartleyDaviesHatchwellDesrochers1995\" class=\"citation journal\">Hartley, I.R.; Davies, N.B.; Hatchwell, B.J.; Desrochers, A.; Nebel, D.; Burke, T. (1995). \"The polygynandrous mating system of the alpine accentor <i>Prunella collaris</i>. II. Multiple paternity and parental effort\". <i>Animal Behaviour</i>. <b>49</b> (3): 789\u2013803. doi:10.1016/0003-3472(95)80210-X.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Animal+Behaviour&amp;rft.atitle=The+polygynandrous+mating+system+of+the+alpine+accentor+Prunella+collaris.+II.+Multiple+paternity+and+parental+effort&amp;rft.volume=49&amp;rft.issue=3&amp;rft.pages=789-803&amp;rft.date=1995&amp;rft_id=info%3Adoi%2F10.1016%2F0003-3472%2895%2980210-X&amp;rft.aulast=Hartley&amp;rft.aufirst=I.R.&amp;rft.au=Davies%2C+N.B.&amp;rft.au=Hatchwell%2C+B.J.&amp;rft.au=Desrochers%2C+A.&amp;rft.au=Nebel%2C+D.&amp;rft.au=Burke%2C+T.&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFDaviesHartleyHatchwellLangmore1996\" class=\"citation journal\">Davies, N.B.; Hartley, I.R.; Hatchwell, B.J.; Langmore, N.E. (1996). \"Female control of copulations to maximise male help: a comparison of polygynandrous alpine accentors <i>Prunella collaris</i> and dunnocks <i>Prunella modularis</i>\" <span>(PDF)</span>. <i>Animal Behaviour</i>. <b>51</b> (1): 27\u201347. doi:10.1006/anbe.1996.0003.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Animal+Behaviour&amp;rft.atitle=Female+control+of+copulations+to+maximise+male+help%3A+a+comparison+of+polygynandrous+alpine+accentors+Prunella+collaris+and+dunnocks+Prunella+modularis&amp;rft.volume=51&amp;rft.issue=1&amp;rft.pages=27-47&amp;rft.date=1996&amp;rft_id=info%3Adoi%2F10.1006%2Fanbe.1996.0003&amp;rft.aulast=Davies&amp;rft.aufirst=N.B.&amp;rft.au=Hartley%2C+I.R.&amp;rft.au=Hatchwell%2C+B.J.&amp;rft.au=Langmore%2C+N.E.&amp;rft_id=http%3A%2F%2Fwww.avibirds.com%2Fpdf%2FH%2FHeggemus1.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAlpine+accentor\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Alpine accentor videos, photos &amp; sounds on the Internet Bird Collection</li>\n<li>Xeno-canto: audio recordings of the Alpine accentor</li></ul> "
    },
    "alpine swift": {
        "id": "a006",
        "name": "Alpine Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "scientific name": "Tachymarptis melba",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Alpine swift</b> (<i>Tachymarptis melba</i>) formerly <i>Apus melba</i>, is a species of swift. The genus name is from the Ancient Greek <i>takhus</i>, \"fast\", and <i>marptis</i>, \"seizer\". The specific name <i>melba</i> comes from \u2018melano-alba\u2019 or \u2018mel-alba\u2019; Eigenhuis &amp; Swaab (1992) posited that \u2018melba\u2019 might be a short form for \u2018melano-alba\u2019 or \u2018mel-alba\u2019 (Gr. melas, melanos = black; L. albus = white). Linnaeus certainly referred to these two colors in his diagnosis.</p><p>Alpine swifts breed in mountains from southern Europe to the Himalaya. Like common swifts, they are strongly migratory, and winter much further south in southern Africa.\n</p><p>Swifts have very short legs which are used for clinging to vertical surfaces. They never settle voluntarily on the ground, spending most of their lives in the air living on the insects they catch in their beaks. Alpine swift are able to stay aloft in the air for up to seven months at a time, even drinking water \"on the wing\".\n</p>\n\n\n<h2><span id=\"Description_and_biology\">Description and biology</span></h2>\n<p>The bird is superficially similar to a large barn swallow or house martin. It is, however, completely unrelated to those passerine species, since swifts are in the order Apodiformes. The resemblances between the groups are due to convergent evolution, reflecting similar life styles.\n</p><p>Swifts have very short legs which they use only for clinging to vertical surfaces. The scientific name Apodidae comes from the Ancient Greek <i>\u03b1\u03c0\u03bf\u03c5\u03c2, apous</i>, meaning \"without feet\". They never settle voluntarily on the ground.\n</p><p>Alpine swifts breed in mountains from southern Europe to the Himalaya. Like common swifts, they are strongly migratory, and winter much further south in southern Africa. They wander widely on migration, and are regularly seen in much of southern Europe, Salford and Asia. The species seems to have been much more widespread during the last ice age, with a large colony breeding, for example in the Late Pleistocene Cave No 16, Bulgaria, around 18,000\u201340,000 years ago. The same situation has been found for Komarowa Cave near Cz\u0119stochowa, Poland during a period about 20,000\u201340,000 years ago.</p>\n\n<p>These apodiformes build their nests in colonies in a suitable cliff hole or cave, laying two or three eggs. Swifts will return to the same sites year after year, rebuilding their nests when necessary, and pairing for life. Young swifts in the nest can drop their body temperature and become torpid if bad weather prevents their parents from catching insects nearby. They have adapted well to urban conditions, frequently nesting in old buildings in towns around the Mediterranean, where large, low-flying flocks are a familiar feature in summer. Alpine swifts have a short forked tail and very long swept-back wings that resemble a crescent or a boomerang but may (as in the image) be held stretched straight out. Their flight is slower and more powerful than that of their smaller relatives, with a call that is a drawn-out twittering (listen at right).\n</p><p>Alpine swifts are readily distinguished from the common swifts by their larger size and their white belly and throat. They are around twice as big as most other swifts in their range, about 20 to 23\u00a0cm (7.9 to 9.1\u00a0in) in length, with a wingspan of 57\u00a0cm (22\u00a0in) and a weight of around 100\u00a0g (3.5\u00a0oz). By comparison, the common swift has a wingspan of around 42\u00a0cm (17\u00a0in). They're largely dark brown in colour with a dark neck band that separates the white throat from the white belly.\nJuveniles are similar to adults, but their feathers are pale edged.</p>\n<h2><span id=\"Life_on_the_wing\">Life on the wing</span></h2>\n<p>Alpine swifts spend most of their lives in the air, living on the insects they catch in their beaks. They drink on the wing, but roost on vertical cliffs or walls. A study published in 2013 showed Alpine swifts can spend over six months flying without having to land. All vital physiological processes, including sleep, can be performed while in air.\n</p><p>In 2011, Felix Liechti and his colleagues at the Swiss Ornithological Institute attached electronic tags that log movement to six alpine swifts and it was discovered that the birds could stay aloft in the air for more than 200 days straight.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Ageing and sexing (PDF; 2.3 MB) by Javier Blasco-Zumeta &amp; Gerd-Michael Heinze</li>\n<li>Alpine swift - Species text in The Atlas of Southern African Birds</li></ul>\n<p>.\n</p> "
    },
    "alpine thrush": {
        "id": "a007",
        "name": "Alpine Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>alpine thrush</b> (<i>Zoothera mollissima</i>) is a species of bird in the thrush family.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The alpine thrush was formerly known as the <b>plain-backed thrush</b> until split into the Sichuan thrush and the newly discovered Himalayan thrush.\n</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>It is found from the north-western Himalayas to southern China. Its natural habitats are subtropical or tropical high-altitude shrubland and subtropical or tropical high-altitude grassland.\n</p>\n\n\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Details of alpine thrush</li></ul>\n<p><br></p> "
    },
    "altai acentor": {
        "id": "a008",
        "name": "Altai Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "scientific name": "",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The  <b>Altai accentor</b> (<i>Prunella himalayana</i>) is a species of bird in the family Prunellidae. It is also known as the <b>rufous-streaked accentor</b> or <b>Himalayan accentor</b>. It breeds in the Altai Mountains of western mongolia; it winters in the southern Tian Shan and Himalayan ranges.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Altai accentor was described by the English zoologist Edward Blyth in 1842 and given the binomial name <i>Accentor himalayanus</i>. The Altai accentor is now placed in the genus <i>Prunella</i> that was introduced by the French ornithologist Louis Vieillot in 1816. The species is monotypic.</p><p>This species, along with the alpine accentor, is sometimes separated from the other accentors, into the genus <i>Laiscopus</i>.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Xeno-canto: audio recordings of the Altai accentor</li></ul>\n<p><br></p>"
    },
    "amur falcon": {
        "id": "a009",
        "name": "Amur Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Amur falcon</b> (<i>Falco amurensis</i>) is a small raptor of the falcon family. It breeds in south-eastern Siberia and Northern China before migrating in large flocks across India and over the Arabian Sea to winter in Southern Africa\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>Males are characteristically dark sooty grey above with rufous thighs and vent. In flight, the wing lining is white, contrasting with the dark wing feathers. Adult males of the closely related red-footed falcon have a dark grey wing lining. In Africa, males can be confused with melanistic Gabar goshawks, but the chestnut on the vent is distinctive. Also, there may be some superficial resemblance to the sooty falcon and the grey kestrel, but those two species both have yellow feet and cere. The wings are long as in most falcons (with a span of 63\u201371\u00a0cm) and at rest the wing tip reaches or extends just beyond the tail-tip.</p><p>Females can be more difficult to identify as they share a pattern common to many falcons, but are distinctive in having an orange eye-ring, a red cere and reddish orange feet. Juveniles can be confused only with those of the red-footed falcon, but lack the buffy underwing coverts.\n</p>\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Amur falcon was long considered a subspecies or morph of the red-footed falcon, but it is nowadays considered distinct. Nonetheless, it is the red-footed falcon's closest relative; their relationship to other falcons is more enigmatic. They appear morphologically somewhat intermediate between kestrels and hobbies and DNA sequence data has been unable to further resolve this question, mainly due to lack of comprehensive sampling.</p><p>The genus name <i>Falco</i> is Late Latin and derives from <i>falx</i>, <i>falcis</i>, a sickle, referencing the claws of the bird. The species name <i> amurensis </i> is from Amurland in south-eastern Siberia.</p>\n\n<h2><span id=\"Distribution_and_migration\">Distribution and migration</span></h2>\n<p>The Amur falcon breeds in east Asia from the Transbaikalia, Amurland, and northern Mongolian region to parts of North Korea. They migrate in a broad front through India and Sri Lanka, sometimes further east over Thailand and Cambodia and then over the Arabian Sea, sometimes in passage on the Maldives and other islands to reach southern Africa. Birds going over India are thought to be aided by strong winds blowing westward. These winds are strong at an altitude of about 3000m and the birds are thought to fly at a height of above 1000m during migration. The route taken to return to their breeding grounds runs slightly more northward. Because of its tendency to wander long distances over the ocean while migrating, this falcon has been found in locations far outside its normal range, such as in Italy, Sweden, Tristan da Cunha, St. Helena and the United Kingdom.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<h3><span id=\"Foraging_and_food\">Foraging and food</span></h3>\n<p>The Amur falcon feeds mainly late in the evening or early in the morning capturing a wide range of insects in the air or on the ground. They capture most of their prey in flight, sometimes by hovering, but will also pick prey by alighting on the ground. The winter diet appears to be almost entirely made up of insects but they take small birds, mammals  and amphibians to feed their young in their breeding range. The rains in Africa produce swarms of termites, locusts, ants and beetles that provide ample food. Their migration over the Arabian Sea coincides with the timing of the migration of dragonflies (<i>Pantala flavescens</i>) and these are thought to provide food during the most arduous part of their migration route.</p>\n<h3><span id=\"Nesting\">Nesting</span></h3>\n\n<p>During migration they stay in open forest or grasslands, roosting colonially on exposed perches or wires. Their breeding habitat is open wooded country with marshes. The breeding season is May to June and several pairs may nest close together. Abandoned nest platforms belonging to birds of prey or corvids and even tree hollows are re-used for nesting. Three or four eggs are laid (at two day intervals). Both parents take turns to incubate and feed the chicks which hatch after about a month. The young birds leave the nest after about a month.</p>\n<h3><span id=\"Parasites\">Parasites</span></h3>\n<p>The Amur falcon hosts three species of lice, <i>Degeeriella rufa</i>, <i>Colpocephalum subzerafae</i>, and <i>Laembothrion tinnunculi</i>.</p>\n<h2><span id=\"Status_and_conservation\">Status and conservation</span></h2>\n<p>The wide breeding range and large population size of the Amur falcon have led to the species being assessed as being of least concern. The flocking behaviour during migration and the density at which they occur, however, expose them to hunting and other threats. During their migration from their breeding area to the winter quarters, they are plump and are hunted for food in parts of northeastern India as well as in eastern Africa.\nIn 2012, mass trapping and capture of migrating Amur falcons in Nagaland (India) was reported in the media and a successful campaign was begun to prevent their killing. As part of this campaign, three birds were fitted with 5 gm satellite transmitters that allowed them to be tracked during their migration.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li>Adventures in Nagaland and Satellite tracks of three individuals</li>\n<li>How to make 2.5 billion termites disappear? A case for protecting the Amur falcon, <i>Ornithological Observations,</i> an open-content, electronic journal published by <i>BirdLife South Africa</i> and the Animal Demography Unit at the <i>University of Cape Town</i></li>\n<li>The Great migration of Amur Falcon, <i>The Morung Express</i></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Atlas of Southern African Birds.</li>\n<li>Global Raptor Information Network</li>\n<li> Media related to <span>Falco amurensis</span> at Wikimedia Commons</li>\n<li> Data related to Falco amurensis at Wikispecies</li></ul> "
    },
    "ashy bulbul": {
        "id": "a010",
        "name": "Ashy Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy bulbul</b> (<i>Hemixos flavala</i>) is a species of songbird in the bulbul family, Pycnonotidae. It is found on the Indian subcontinent and in Southeast Asia. Its natural habitats are subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest.\n</p>\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>Formerly, some authorities classified the ashy bulbul in the genera <i>Hypsipetes</i> and <i>Microscelis</i>.\n</p>\n\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Five subspecies are currently recognized:</p>\n<ul><li><i>H. f. flavala</i> - <small>Blyth, 1845</small>: Found in the eastern Himalayas, north-eastern Bangladesh, north-western Myanmar and southern China</li>\n<li><i>H. f. hildebrandi</i> - <small>Hume, 1874</small>: Found in eastern Myanmar and north-western Thailand</li>\n<li><i>H. f. davisoni</i> - <small>Hume, 1877</small>: Found in south-eastern Myanmar and south-western Thailand</li>\n<li><i>H. f. bourdellei</i> - <small>Delacour, 1926</small>: Found in southern China, eastern Thailand, northern and central Laos</li>\n<li><i>H. f. remotus</i> - <small>(Deignan, 1957)</small>: Found in southern Indochina</li></ul><h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "ashy drongo": {
        "id": "a011",
        "name": "Ashy Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy drongo</b> (<i>Dicrurus leucophaeus</i>) is a species of bird in the drongo family Dicruridae. It is found widely distributed across South and Southeast Asia with several populations that vary in the shade of grey, migration patterns and in the size or presence of  white patches around the eye.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The adult ashy drongo is mainly dark grey, and the tail is long and deeply forked, There are a number of subspecies varying in the shade of the grey plumage. Some subspecies have white markings on the head. Young birds are dull brownish grey.\n</p><p>Subspecies <i>longicaudatus</i> of India (which includes <i>beavani</i> of the Himalayas that winters on the peninsula, with one breeding population in central India that Vaurie separates as <i>longicaudatus</i> in the restricted sense) is very dark and almost like the black drongo although this bird is slimmer and has a somewhat longer and less-splayed tail. It is found in more tall forest habitat, has dark grey underside lacking the sheen of black drongo. The iris is crimson and there is no white rictal spot. Subspecies <i>leucogenis</i> and <i>salangensis</i> have a white eye-patch as do several of the island forms that breed further south. The calls are a little more nasal and twangy than that of the black drongo.</p><p><br></p>\n\n\n\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>The ashy drongo breeds in the hills of tropical southern Asia from eastern Afghanistan east to southern China, Ryukyu Islands in southern Japan (particularly Okinawa) and Indonesia. Many populations in the northern part of its range are migratory. Charles Vaurie described subspecies <i>beavani</i> (after Robert Cecil Beavan) as the population that breeds along the Himalayas that wintered in peninsular India. However, later workers include this as part of <i>longicaudatus</i> which also has a population that breeds in central India. In winter, the species is particularly fond of hill forests. E. C. Stuart Baker described <i>stevensi</i> which Vaurie considered as being either <i>beavani</i> or <i>hopwoodi</i> of the eastern Himalayas. To the east of the range of <i>hopwoodi</i> is <i>mouhouti</i> of Thailand and Myanmar. To the north of this range are <i>leucogenis</i> and <i>salangensis</i> (both migratory mainly to areas further south but also known from Nagaland) while <i>bondi</i> is found to the south. Along the southeast Asian island chain, there are number of insular populations including <i>periophthalmus</i>, <i>ryukyuensis</i>, <i>batakensis</i>, <i>phaedrus</i>, <i>siberu</i> and <i>nigrescens</i>. The nominate form is said to be found on Simalur, Java, Bali, Lombok, Palawan, and Balabac Islands.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>The ashy drongo has short legs and sits very upright while perched prominently, often high on a tree. It is insectivorous and forages by making aerial sallies but sometimes gleans from tree trunks. They are found singly, in pairs or small groups. During migration they fly in small flocks.</p><p>A common call that they make is described as <i>drangh gip</i> or <i>gip-gip-drangh</i>. They can imitate the calls of other birds and are capable of imitating the whistling notes of a common iora.</p><p>The breeding season is May to June with a clutch of three or four reddish or brown eggs laid in a loose cup nest in a tree.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Ashy drongo videos, photos &amp; sounds on the Internet Bird Collection</li></ul> "
    },
    "ashy minivet": {
        "id": "a012",
        "name": "Ashy Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy minivet</b> (<i>Pericrocotus divaricatus</i>) is a passerine bird of eastern Asia belonging to the minivet genus <i>Pericrocotus</i> in the cuckooshrike family Campephagidae. While most of the minivets have shades of yellow, orange and red in their plumage, this species has only greys, whites and blacks. The male is distinctive with a white face and black nape although females can be confused with the female of the brown-rumped minivet. They forage in the canopy, often along with other minivets and join mixed-species foraging flocks.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>It is 18.5\u201320\u00a0cm long. The male is grey above and whitish below. It has a black cap with a white forehead and there is a white band across the flight-feathers. The outer tail feathers are white. The bill and feet are black. The female's cap is grey apart from a black band between the bill and eye and a narrow white band above it. The call is a high-pitched, metallic trill. It is considered as closely related to <i>Pericrocotus roseus</i> and <i>Pericrocotus cantonensis</i> but differs in moult pattern. It is one of the few passerine birds that moult their primaries twice in a year and is the longest distance migrant among the minivets.</p><p>It breeds in south-east Siberia, north-east China, Korea and Japan. Birds in the Ry\u016bky\u016b Islands of southern Japan are commonly considered to be a separate species\u2014Ryukyu minivet (<i>P. tegimae</i>). The ashy minivet is a long distance migrant, wintering in South and South-east Asia as far south as Sumatra, Borneo and the Philippines. It is found in forest as well as in more open areas with scattered trees. It forages in the tree canopy for insects sometimes joining mixed-species foraging flocks. Migrant birds can often be seen in large flocks.\n</p><p>The status of the species is considered to be secure and is considered as a \"least concern\" species by the IUCN. Populations of the species on the Amami Island was found to have increased from 1985\u20132001.</p><p>In the South Asian region, they are considered rare. They were first noted on the Indian mainland only in 1965 although they had been reported in 1897 from the Andaman Islands. It has since been reported with greater regularity.</p><p>Four to seven eggs are laid. These are incubated for 17 to 18 days.\n</p>\n<h2><span id=\"Notes\">Notes</span></h2>\n\n<h2><span id=\"References\">References</span></h2>\n<ul><li>Brazil, Mark A. (1991) <i>The Birds of Japan</i>, Christopher Helm, London.</li>\n<li>MacKinnon, John &amp; Phillipps, Karen (2000) <i>A Field Guide to the Birds of China</i>, Oxford University Press, Oxford.</li>\n<li>Robson, Craig (2002) <i>A Field Guide to the Birds of South-East Asia</i>. New Holland, London.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Photographs and videos</li>\n<li>Calls</li></ul> "
    },
    "ashy prinia": {
        "id": "a013",
        "name": "Ashy Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy prinia</b> or <b>ashy wren-warbler</b> (<i>Prinia socialis</i>) is a small warbler in the family Cisticolidae. This prinia is a resident breeder in the Indian Subcontinent, ranging across most of India, Nepal, Bangladesh, Bhutan, Sri Lanka and western Myanmar. It is a common bird in urban gardens and farmland in many parts of India and its small size, distinctive colours and upright tail make it easy to identify. The northern populations have a rufous rump and back and have a distinct breeding and non-breeding plumage while other populations lack such variation.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>These 13\u201314\u00a0cm long warblers have short rounded wings and longish graduated cream tail tipped with black subterminal spots. The tail is usually held upright and the strong legs are used for clambering about and hopping on the ground. They have a short black bill. The crown is grey and the underparts are rufous in most plumages. In breeding plumage, adults of the northern population are ash grey above, with a black crown and cheek with no supercilium and coppery brown wings. In non-breeding season, this population has a short and narrow white supercilium and the tail is longer. They are found singly or in pairs in shrubbery and will often visit the ground.</p><p>In winter, the northern subspecies, <i> P. s. stewartii</i> Blyth, 1847, has warm brown upperparts and a longer tail and has seasonal variation in plumage. The other races retain summer plumage all year round. West Bengal and eastwards has race <i>inglisi</i> Whistler &amp; Kinnear, 1933 which is darker slaty above than the nominate race of the Peninsula and deeper rufous on the flanks with a finer and shorter beak. The distinctive endemic race in Sri Lanka, <i> P. s. brevicauda</i> Legge, 1879, has a shorter tail and has the juveniles with yellowish underparts apart from a distinct call.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This passerine bird is found in dry open grassland, open woodland, scrub and in home gardens in many cities. The northern limits of the species are along the Himalayan foothills extending into the upper Indus river system. The species is absent from the dry desert zone of the west of India and extends east into Burma. The Sri Lankan population is found mainly in the lowlands but going up into the hills to about 1600 m.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Like most warblers, the ashy prinia is insectivorous. The song is a repetitive <i>tchup, tchup, tchup</i> or <i>zeet-zeet-zeet</i>. Another call is a nasal <i>tee-tee-tee</i>. It also makes a sound like \"electric sparks\" during its fluttery flight, which is thought to be produced by the wings (however, one author suggests that it is made by the beak).</p>\n<blockquote class=\"templatequote\"><p>\nIt is most easily distinguished by the loud snapping noise it makes during flight. How this noise is produced we do not know for certain. Reid was of opinion that the bird snapped its long tail. What exactly this means I do not know. Jesse believes that the sound is produced by the bird's mandibles. I have spent much time in watching the bird, and am inclined to think that the noise is caused by the beating of the wings against the tail. This last is constantly being wagged and jerked, and it seems to me that the wings beat against it as the bird flits about. When doves and pigeons fly, their wings frequently meet, causing a flapping sound. I am of opinion that something similar occurs when the ashy wren-warbler takes to its wings.</p></blockquote>\n\n<p>The non-migratory genus <i>Prinia</i> shows biannual moult, which is rare among passerines. A moult occurs in spring (April to May) and another moult occurs in autumn (October to November). Biannual moult is theorized to be favoured when ectoparasite loads are very high, however no investigations have been made. <i>Prinia socialis</i> moults some remiges twice a year and is termed to have a partially biannual moult, however some authors describe <i>P. socialis socialis</i> as having two complete moults.</p><p>Birds stay in pairs but roost singly on the branch of a small tree or shrub.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>The song is sung from the top of a bush and males make fluttery display flights with the tail held up. The ashy prinia builds its nest close to the ground in a shrub or tall grass. Several types of nests have been described, including a flimsy cup made by sewing several large leaves, an oblong purse-like structure with grass stems inside it, and a flimsy ball of grass. The usual nest is built low in a bush and consists of leaves stitched together with webs, lined with hair and having an entrance on the side. It lays 3 to 5 glossy, somewhat oval-shaped eggs. They vary in colour from brick-red to rich chestnut. The broad end of the egg is generally darker than the remainder of the shell, and exhibits a cap or zone. The eggs measure 0.6 to 0.68 inches in length, and 0.45 to 0.5 in breadth. They hatch in about 12 days.</p><p>The breeding season varies with locality and has been recorded around the year, but mostly after the monsoons. In north India it is mainly June to September and in Sri Lanka mainly December to March or August to October. Breeding season is during May to June in the Nilgiris. The species is believed to be monogamous, and both the male and the female take part in incubation and feeding, though to varying extents. Parents may spend more time at the nest during cool days. The eggs hatch in about 12 days. Plaintive and grey-bellied cuckoos are known to be brood parasites of this species. When the nest is threatened by predators such as cats, adults have been observed feigning injury.</p><p>Rare cases of birds reusing material from a nest to build a nest at a new location have been noted.</p>\n\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Balachandran, S; Rosalind, Lima (1992) Southern Ashy Wren-Warbler <i>Prinia socialis socialis</i> Sykes in Pt. Calimere Wildlife Sanctuary, Tamil Nadu. J. Bombay Nat. Hist. Soc. 89(3):377.</li>\n<li>Jairamdas, Arjun (1977) Three nests of Ashy Wren Warbler \u2013 diary of one season. <i>Newsletter for Birdwatchers</i> . 17(2):4\u20136.</li>\n<li>Subramanya, S.; Veeresh, G. K. (1998) Nesting of two insectivorous birds in the rice fields of Bangalore. Chap. 4. In: Birds in Agricultural Ecosystem. (Eds: Dhindsa, MS; Rao, P Syamsunder; Parasharya, BM) Society for Applied Ornithology, Hyderabad, 10\u201317.</li>\n<li>Ajmeri, R. M.; Das, A. R. K.; Sasikumar, M. (1961) An unusual nest of the Ashy Wren-warbler (<i>Prinia socialis</i>). <i>Newsletter for Birdwatchers</i> . 1(4):1.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li></ul> "
    },
    "ashy wood pigeon": {
        "id": "a014",
        "name": "Ashy Woodpigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy wood pigeon</b> (<i>Columba pulchricollis</i>) is a species of bird in the family Columbidae, found in temperate forests of southeastern Asia.\n</p>\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The ashy wood pigeon has a wide range throughout Southeast Asia, able to be found in Bhutan, northern India, southern Tibet, southern China, northern Laos, northern to mid Myanmar, northernThailand, and Taiwan. While the world population is unknown, the Taiwan population is estimated to be anywhere from 10,000 to 100,000 breeding pairs.</p>\n<h2><span id=\"Nesting\">Nesting</span></h2>\n<p>Clutches usually consist of one single white egg, although double egg clutches have been recorded. This pigeon incubates its eggs for approximately 21\u201323 days. Young birds fledge at about 28 days from being hatched.</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "ashy woodswallow": {
        "id": "a015",
        "name": "Ashy Woodswallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": "",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy woodswallow</b> (<i>Artamus fuscus</i>) sometimes also called the <b>ashy swallow-shrike</b> is a woodswallow which is found in south Asia. Like other woodswallows, it has a short curve bill and a short square tail and long wings. It is usually seen perched in groups, high on powerlines, tall bare trees and most often in areas with a predominance of tall palm trees.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>This stocky woodswallow has an ashy grey upperparts with a darker head and a narrow pale band on the rump. The underside is pinkish grey and the short slaty black tail is tipped in white. The finch-like bill is silvery. In flight the long wing looks very broad at the base giving it a very triangular outline. The first primary is very short. The legs are short and the birds usually perch on high vantage points from which they make aerial sallies. There are no geographic variations in plumage and no subspecies have been designated.</p><p>Males and females are indistinguishable in the field, however an old report suggests that the sexes differ in the colour of the inside of the mouth. Young birds appear barred on the underside.</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n\n<p>Woodswallows are found in a range of habitats from the plains to about 2000 m, over cultivated areas, in forest clearings and often in areas with tall palm trees. The species is widely distributed across Bangladesh, India, Nepal, Sri Lanka, Thailand, Myanmar, Laos, Malaysia and China. They are absent in the very arid regions of western India. They have been recorded on the island of Maldives.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Ashy woodswallows are usually seen in small groups. Several birds may sit huddled side-by-side on the bare branches of a tall tree, sometimes preening each other. They also perch on high vantage points such as powerlines and pylons. From their perches, they make aerial sallies, flapping and gliding to capture insects in the air. Insects may be caught in the beak, transferred and held in their feet, torn up with their bill and swallowed without returning to the perch. They may also return to the perch with prey to feed and will sometimes sit on the ground and have been known to visit bird baths. Although mainly feeding on insects, they may take nectar from flowers of trees such as <i>Erythrina</i>. They have been recorded feeding on toxic butterflies of the family Danaiidae such as <i>Euploea core</i> which are avoided by other birds.</p><p>The breeding season in India is March to June, the nest is a shallow cup placed at some height such as at the base of the frond of a tall palm or a hollow atop a street lighting post. The usual clutch consists of 2\u20133 greenish white eggs with brown spots. Both parents take part in nest building, incubation and feeding the young. They will mob larger birds such as crows and birds of prey that approach too close to the nesting birds. The song consists of a varied combination of wheezy notes that may include imitations of the calls of other birds. The usual call is shrill nasal <i>chewk</i>.</p><p>They make seasonal movements, possibly in response to rainfall.</p><p>The woodswallows, Artamidae, are among the few perching birds that have special feathers called powder down that break up into fine dust that is spread by the birds onto their body when preening. Powder down is also found in the egrets. Members of the family have a brush-tipped tongue. They also have some of the thoracic vertebrae fused into a structure called the notarium.</p><p>A species of ectoparasitic birdlouse, <i>Menacanthus elbeli</i>, and a mite that lives inside the feather quill have been described from hosts of this species. Other organisms associated with the species include endoparasitic trematodes <i>Plagiorchis dactylopharynx</i>, <i>Papillatrema echinata</i> and <i>Stomylotrema travassosi</i>.</p>\n\n<h2><span id=\"References\">References</span></h2>"
    },
    "ashy headed green pigeon": {
        "id": "a016",
        "name": "Ashy-headed Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy-headed green pigeon</b> (<i>Treron phayrei</i>) is a pigeon in the genus <i>Treron</i>. It is found from Nepal and northeast India to southwest China, Myanmar, Thailand, Laos, and Vietnam. Many authorities split the species from the pompadour green pigeon complex. It has been added in the Red List of IUCN in 2014.\n</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n\n<p>The ashy-headed green pigeon usually occur singly or in small groups. Its flight is fast and direct, with the regular beats and an occasional sharp flick of the wings that are characteristic of pigeons in general. It eats the seeds and fruits of a wide variety of plants.  It builds a stick nest in a tree and lays two white eggs.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Collar, N.J. 2011. Species limits in some Philippine birds including the Greater Flameback Chrysocolaptes lucidus. Forktail number 27: 29\u201338.</li>\n<li>Rasmussen, P.C., and J.C. Anderton. 2005. Birds of South Asia: the Ripley guide. Lynx Edicions and Smithsonian Institution.</li></ul>"
    },
    "ashy crowned sparrow lark": {
        "id": "a017",
        "name": "Ashy-crowned Sparrow-lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy-crowned sparrow-lark</b> (<i>Eremopterix griseus</i>) is a small sparrow-sized member of the lark family. It is found in the plains in open land with bare ground, grass and scrub across South Asia. The males are well marked with a contrasting black-and-white face pattern, while females are sandy brown, looking similar to a female sparrow. Males are easily detected during the breeding season by the long descending whistle that accompanies their undulating and dive-bombing flight displays.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The ashy-crowned sparrow-lark was originally placed in the genus <i>Alauda</i>. This species is also known by the following alternate names: <b>ash-crowned sparrow-lark</b>, <b>ashy-crowned finch-lark</b>, <b>black-bellied finch-lark</b>, and <b>black-bellied sparrow-lark</b>.\n</p>\n<h3><span id=\"Subspecies\">Subspecies</span></h3>\n<p>Although some subspecies <i>ceylonensis</i> (from Sri Lanka) and <i>siccata</i> (from Gujarat) have been named, variations are mostly clinal and they are treated as a monotypic species.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>Sparrow sized with a finch-like bill and short legs, these birds are usually seen sitting on the ground, and although they will sometimes perch on wires they do not perch in trees or bushes. The male is sandy brown overall with a black belly, chin, lower lores and eye stripe. The top of the head is ashy (although the base of these crown feathers are dark) unlike the dark brown to black in the black-crowned sparrow-lark which partly overlaps with the range of this species in the arid zone of India and Pakistan. The female is pale brown and very similar to a female house sparrow, although the legs are much shorter and appearing stockier and shorter-necked.</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n\n \n<p>This species is restricted to below 1000 metres elevation and is found from south of the Himalayas to Sri Lanka extending to the Indus river system in the west and to Assam in the east. It is found in stubble, scrub, waste land, riverside sand and tidal flats on the coast. They avoid the interior of the desert zone, a habitat that is more likely to be used by the black-crowned sparrow-lark. The two species overlap partly in range, although they are rarely seen together in the same locations. During the monsoon season, they withdraw from heavy rainfall regions.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>These larks are found in pairs or small groups and form larger flocks in winter. They forage on the ground for seeds and insects. When disturbed they will sometimes crouch and take to flight. They will take fallen grain in fields. They roost at night on the ground, making small depressions in the soil.</p><p>The breeding is irregular and spread out although they breed before the rains mainly during February to September in southern India and May to June in Sri Lanka. The display of the male consists of a song flight that involves soaring up with some chirruping calls and then diving with partly closed wings and then rising up in a glide. This undulating flight is accompanied by a long low whistle at each dive and at the tip of each rise by a sharp <i>chilp</i> note. The display ends with the male descending at an angle and landing on a small mound or clod before repeating the performance after a few minutes. The nest is a compact depression under a tuft of grass in the ground lined with grass and hair with some pebbles arranged on the edge. The usual clutch is two or three eggs and both males and female incubate the eggs. The eggs hatch after about 13 or 14 days and both parents take turns to feed the young although the female is more active.</p><p>In most birds, the right ovary is not fully developed; however, a study found 6 out of 150 specimens had traces of a right ovary although the oviduct was absent.</p>\n<h2><span id=\"In_culture\">In culture</span></h2>\n<p>The name in some Hindi dialects for the bird is <i>dabhak churi</i>, which means \"crouching sparrow\". In British India, it was shot for the table and termed as 'ortolan'.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Shivanarayan, N (1978) Damage to Sorghum by Ashycrowned Finch-Lark. <i>Newsletter for Birdwatchers</i> . 18(3):10.</li>\n<li>Shukla, RN; Shrivastava, M (1985): Some observations on nests and nesting behavior of three birds. <i>Comparative Physiol. Ecol.</i> 10(2):77-78.</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li></ul>"
    },
    "ashy throated warbler": {
        "id": "a018",
        "name": "Ashy-throated Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>ashy-throated warbler</b> (<i>Phylloscopus maculipennis</i>) is a species of leaf warbler (family Phylloscopidae). It was formerly included in the \"Old World warbler\" assemblage.\n</p><p>It is found in Bhutan, China, India, Laos, Myanmar, Nepal, Pakistan, Thailand, and Vietnam. Its natural habitats are temperate forests and subtropical or tropical moist lowland forests.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "asian barred owlet": {
        "id": "a019",
        "name": "Asian Barred Owlet",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian barred owlet</b> (<i>Glaucidium cuculoides</i>) is a species of true owl, resident in northern parts of the Indian Subcontinent and parts of Southeast Asia. It ranges across north central and northeast India, Nepal Bhutan, north Bangladesh, and southeast Asia (Myanmar, Thailand, Cambodia, Laos, Vietnam). Its natural habitat is temperate forest.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<p> Media related to <span>Glaucidium cuculoides</span> at Wikimedia Commons<br> Data related to Glaucidium cuculoides at Wikispecies\n</p>\n<ul><li>BirdLife species factsheet for <i>Glaucidium cuculoides</i></li>\n<li><cite class=\"citation web\">\"Glaucidium cuculoides\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Glaucidium+cuculoides&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3D75E76449583F8EA4&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+barred+owlet\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Asian barred owlet media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Asian+barred+owlet+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fasian-barred-owlet-glaucidium-cuculoides&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+barred+owlet\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Asian barred owlet photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Glaucidium cuculoides</i> at IUCN Red List maps</li>\n<li>Audio recordings of Asian barred owlet on Xeno-canto.</li></ul>\n<p><br></p> "
    },
    "asian blue quail": {
        "id": "a020",
        "name": "Asian Blue Quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n\n<p>The <b>king quail</b> (<i>Excalfactoria chinensis</i>), also known as the <b>blue-breasted quail</b>, <b>Asian blue quail</b>, <b>Chinese painted quail</b>, or <b>Chung-Chi</b>, is a species of Old World quail in the family Phasianidae. This species is the smallest \"true quail\", ranging in the wild from southeastern Asia to Oceania with 10 different subspecies. A failed attempt was made to introduce this species to New Zealand by the Otago Acclimatisation Society in the late 1890s. It is quite common in aviculture worldwide, where it is sometimes misleadingly known as the \"<b>button quail</b>\", which is the name of an only very distantly related family of birds, the buttonquails.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The male king quail comes in many colors, including blue, brown, silver, maroon, dark brown &amp; almost black. They have orange feet which are hard and able to withstand a continuous life on the ground like many other game birds. The female is similar to the male but cannot come in shades of blue. They can live up to 13 years in captivity but only 3-6 on average.  In the wild they may live only 1.5 years. The eggs of king quail are a light, creamy-brown colour and slightly pointed at the 'top'; roughly ovular in shape.\n</p>\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>There are six subspecies recognized:</p>\n<ul><li><i>E. c. chinensis</i> <small>(Linnaeus, 1766)</small>: Found from India and Sri Lanka to Malaya, Indochina, southeastern China and Taiwan</li>\n<li><b>Nicobar blue-breasted quail</b> (<i>E. c. trinkutensis</i> <small>Richmond, 1902</small>): Found on Andaman and Nicobar Islands</li>\n<li><i>E. c. lineata</i> <small>(Scopoli, 1786)</small>: Found in the Philippines, Borneo, Lesser Sundas, Sulawesi and Sula Islands</li>\n<li><i>E. c. lepida</i> <small>Hartlaub, 1879</small>: Found in the Bismarck Archipelago</li>\n<li><i>E. c. australis</i> <small>Gould, 1865</small>: Found in eastern Australia</li>\n<li><i>E. c. colletti</i> <small>Mathews, 1912</small>: Found in northern Australia</li></ul><h2><span id=\"Reproduction\">Reproduction</span></h2>\n\n<p>Clutch size varies anywhere from 5 to 13 eggs. Before incubation starts all the eggs composing the clutch will be laid. In captivity, the ideal number of eggs in a clutch is 6 to 8. The chicks hatch after about 16 days.\n</p>\n<h2><span id=\"Conservation_status\">Conservation status</span></h2>\n<h3><span id=\"Australia\">Australia</span></h3>\n<p>King quail are not listed as threatened on the Australian Environment Protection and Biodiversity Conservation Act 1999.\n</p>\n<h4><span id=\"State_of_Victoria.2C_Australia\"></span><span id=\"State_of_Victoria,_Australia\">State of Victoria, Australia</span></h4>\n<p>This species is listed as threatened on the Victorian Flora and Fauna Guarantee Act (1988). Under this Act, an <i>Action Statement</i> for the recovery and future management of this species has not been prepared.</p><p>On the 2007 advisory list of threatened vertebrate fauna in Victoria, this species is listed as endangered.</p>\n<h2><span id=\"Aviculture\">Aviculture</span></h2>\n<p>This quail has been very popular to keep and breed for many years; numerous mutations have been developed. They are quite hardy once they have adjusted to their surroundings and will keep the bottom of an aviary spotless. A great advantage of these quails is that they will live exclusively on the ground, &amp; will not interfere with other birds. The cost of purchasing and maintaining them is very little. They have been known to become hand-tame.\n</p><p>They may be housed in pairs to quartets in a planted aviary, kept singly in bird cages, or in colonies in large flights. Males may compete, as may females. Suspension cages do not work well for this species of quail because of their smaller feet; a much finer size floor wire would need to be employed.</p><p>Females will lay an egg a day if kept on the proper diet. Nesting sites can be as spartan as a quiet corner or a depression in the ground against a wall. Preferably, a clump of long grass, tea tree branches, or pile of loose herbage should be provided. Often a hen will lay eggs on the aviary floor without the use of a nest. This is a sign that the birds are not content with the existing facilities and the provision of a sheltered nest site may result in a nest being built. The cock usually selects the nest site. The nest is a simple scrape in the ground, lined with grasses  and is built by the hen with some assistance from the cock. The eggs measuring 25 x 19mm are variable in colour form the palest of browns to dark olive and peppered with fine black spots. Clutch size varies from 4-13, but occasionally a hen will be found incubating upwards of 20 eggs. It is usually a combined clutch from a number of hens and due to the difficulties of turning and covering a clutch of that size, hatchability is often poor. It may be better to remove some of the eggs and artificially incubate them or foster them.</p><p>The species usually breed year round; incubation times are from 18\u201323 days before chicks hatch. The hen bird will care for the chicks until around 4 weeks of age where they should be separated from parent birds into a separate aviary. \n</p>\n<h3><span id=\"Hybrids_and_mutations\">Hybrids and mutations</span></h3>\n<p>Hybrids of king quail and brown quail are known.\n</p><p>Silvers and cinnamon are the most common colour varieties. Pied, albino, and charcoals are becoming more common. Mutations can be combined.\n</p><p>Occasional cock-feathered hens appear: This is not a mutation as such, but one of a few conditions which has affected normal hormonal balances. It is most often seen when a hen has an ovarian cyst, or growth. They usually stop laying eggs, but can live for a number of years happily just looking like a male. In one case a silver hen was kept for many years by herself, moulted into cock plumage, and laid only extremely pale green shelled eggs for a few seasons before passing of old age.</p>\n<h2><span id=\"Diet\">Diet</span></h2>\n<p>In the wild, the diet of king quails consists of small bugs, seed and various grasses that are available at the time. In aviculture, all birds should be fed a variety of seeds as well as a healthy range of fruit and vegetables. During breeding, hens should be fed calcium-rich food sources such as shell grit to prevent egg binding. Newly hatched chicks should be fed high protein chick crumb mixed in with a little water. Other sources of protein include mealworms and various bugs.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>BirdLife Species Factsheet</li>\n<li>ITIS Standard Report Page: Coturnix chinensis taxonomic details (includes subspecies)</li></ul> "
    },
    "asian brown flycatcher": {
        "id": "a021",
        "name": "Asian Brown Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian brown flycatcher</b>  (<i>Muscicapa dauurica</i>) is a small passerine bird in the flycatcher family Muscicapidae. The word <i>Muscicapa</i> comes from the Latin <i>musca</i>, a fly and <i>capere</i>, to catch. The specific <i>dauurica</i> refers to Dauria, an area of south-eastern Siberia named after a local nomadic tribe.</p><p>This is an insectivorous species which breeds in Japan, eastern Siberia and the Himalayas. It is migratory and winters in tropical southern Asia from southern  India and Sri Lanka east to Indonesia.\n</p><p>The correct specific epithet for this species is disputed.</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>This species is 13\u00a0cm (5.1\u00a0in) long, including the cocked tail. It is similar in shape to the larger spotted flycatcher, but is relatively longer-tailed. The dark bill is relatively large and broad-based.\nThe adult has grey-brown upperparts, which become greyer as the plumage ages, and whitish underparts with brown-tinged flanks. Young birds have scaly brown upperparts, head and breast.\n</p>\n<h2><span id=\"Geographical_variation\">Geographical variation</span></h2>\n\n \n<p>Although usually treated as monotypic if the brown-streaked flycatcher is not included, Rasmussen and Anderton, in <i>Birds of South Asia. The Ripley Guide</i> argue that populations in the Indian subcontinent and the Andaman Islands should be regarded as a separate subspecies, <i>poonensis</i>, from the nominate race which occupies most of the species' range. They describe <i>poonensis</i> as paler and browner above, with a deeper bill, and mostly pale lower mandible, a more mottled throat, breast and flanks (in fresh plumage), less contrastingly white \"spectacles\" and throat, and perhaps a more rounded wing.</p>\n\n\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<p>Asian brown flycatcher is a common bird found in open woodland and cultivated areas. It nests in a hole in a tree, laying four eggs which are incubated by the female.\n</p><p>The male Asian brown flycatcher sings a simple melodic song during courtship.\n</p><p>This bird is parasitised by the chewing louse <i>Philopterus davuricae.</i>\n</p>\n<h2><span id=\"Vagrancy\">Vagrancy</span></h2>\n<p>The Asian brown flycatcher is an extremely rare vagrant to Western Europe. Records have come from Britain, Denmark, and Sweden, and in addition, there are unproven claims from Ireland, Faeroe, and Norway.</p>\n<h2><span id=\"Britain\">Britain</span></h2>\n<p>On 3 October 2007 a first winter brown flycatcher was discovered at Flamborough Head, East Riding of Yorkshire which attracted hundreds of birdwatchers during its stay which lasted until dusk of the following day. This looks set to become the first accepted record. A previous record, on Fair Isle, on 1\u20132 July 1992  was regarded by the BOURC as not definitely of wild origin. A bird had also been claimed on Holy Island, Northumberland on 9 September 1956, but the identification was not accepted with beyond doubt.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n<ul><li><cite id=\"CITEREFAlstr\u00f6mHirschfeld1991\" class=\"citation journal\">Alstr\u00f6m, Per; Hirschfeld, Erik (1991). \"Field identification of Brown, Siberian and Grey-streaked Flycatchers\". <i>Birding World</i>. <b>4</b> (8): 271\u2013278.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Birding+World&amp;rft.atitle=Field+identification+of+Brown%2C+Siberian+and+Grey-streaked+Flycatchers&amp;rft.volume=4&amp;rft.issue=8&amp;rft.pages=271-278&amp;rft.date=1991&amp;rft.aulast=Alstr%C3%B6m&amp;rft.aufirst=Per&amp;rft.au=Hirschfeld%2C+Erik&amp;rft_id=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F269392252_Field_identification_of_Brown_Siberian_and_Grey-streaked_Flycatchers&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+brown+flycatcher\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFBradshawJepsonLindsey1991\" class=\"citation journal\">Bradshaw, C.; Jepson, P.J.; Lindsey, N.J. (1991). \"Identification of brown flycatchers\" <span>(PDF)</span>. <i>British Birds</i>. <b>84</b> (12): 527\u2013542.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=British+Birds&amp;rft.atitle=Identification+of+brown+flycatchers&amp;rft.volume=84&amp;rft.issue=12&amp;rft.pages=527-542&amp;rft.date=1991&amp;rft.aulast=Bradshaw&amp;rft.aufirst=C.&amp;rft.au=Jepson%2C+P.J.&amp;rft.au=Lindsey%2C+N.J.&amp;rft_id=https%3A%2F%2Fbritishbirds.co.uk%2Fwp-content%2Fuploads%2Farticle_files%2FV84%2FV84_N12%2FV84_N12_P527_542_A151.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+brown+flycatcher\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFLeader2010\" class=\"citation journal\">Leader, P.J. (2010). \"Brown, Siberian and Grey-streaked Flycatchers: identification and ageing\" <span>(PDF)</span>. <i>British Birds</i>. <b>103</b>: 658\u2013671.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=British+Birds&amp;rft.atitle=Brown%2C+Siberian+and+Grey-streaked+Flycatchers%3A+identification+and+ageing&amp;rft.volume=103&amp;rft.pages=658-671&amp;rft.date=2010&amp;rft.aulast=Leader&amp;rft.aufirst=P.J.&amp;rft_id=https%3A%2F%2Fwww.britishbirds.co.uk%2Fwp-content%2Fuploads%2F2014%2F05%2FV103_N11_P658%25e2%2580%2593671_A.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+brown+flycatcher\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul> "
    },
    "asian emerald cuckoo": {
        "id": "a022",
        "name": "Asian Emerald Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian emerald cuckoo</b> (<i>Chrysococcyx maculatus</i>) is a species of cuckoo in the family Cuculidae. It is found in Bangladesh, Bhutan, Cambodia, China, India, Indonesia, Laos, Malaysia, Myanmar, Nepal, Sri Lanka, Thailand, and Vietnam. Its natural habitats are subtropical or tropical moist lowland forests and subtropical or tropical moist montane forest.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The Asian emerald cuckoo grows to a length of about 18\u00a0cm (7\u00a0in). The adult male has  an iridescent dark green head, upper parts and upper breast, a white lower breast and a green barred belly. Bare skin round the eye is orange and the beak is orange/yellow tipped with black. The adult female has coppery-green upper parts, rusty brown crown and nape and green-barred underparts. Both sexes show a white band on the underwing when in flight. The underparts of the juvenile male lack the white lower breast and are more heavily barred. The voice is a \u201cchweek\u201d uttered while flying, and various whistled twitters.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This cuckoo has a breeding range that extends from the Himalayas eastwards to Myanmar, China and northern Thailand. Further south it is a vagrant or migrant in northern India, Sri Lanka, Malaysia and Sumatra; it is not known to breed in these areas. It frequents forests and woodland margins.</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n<p>The Asian emerald cuckoo mainly forages in the upper levels of the canopy where it feeds on insects and other small invertebrates, including ants, caterpillars and bugs. It is a brood parasite, the females laying their eggs in the nests of other birds, such as the crimson sunbird (<i>Aethopyga siparaja</i>) and the little spiderhunter (<i>Arachnothera longirostra</i>).</p>\n<h2><span id=\"Status\">Status</span></h2>\n<p><i>C. maculatus</i> has a very wide range but is generally an uncommon species. No particular threats have been recognised and the population is believed to be stable, so the International Union for Conservation of Nature has assessed its conservation status as being of \"least concern\".</p>\n<h2><span id=\"References\">References</span></h2> "
    },
    "asian fairy bluebird": {
        "id": "a023",
        "name": "Asian Fairy-bluebird",
        "order": order.PASSERIFORMES,
        "family": familyname.Irenidae,
        "scientific name": "",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian fairy-bluebird</b> (<i>Irena puella</i>) is a medium-sized, arboreal passerine bird.\n</p><p>This fairy-bluebird is found in forests across tropical southern Asia, Indochina, the Greater Sundas and Palawan. Two or three eggs are laid in a small cup nest in a tree. It was described by British ornithologist John Latham in 1790. The only other member of the genus and family is the Philippine fairy-bluebird, <i>I. cyanogastra</i>, which replaces the Asian fairy-bluebird in most of the Philippines. Both species are considered as sacred to the Tagalog people as they are perceived as tigmamanukan omens.\n</p><p>The adult Asian fairy bluebird is about 24 to 27 centimetres (9.4 to 10.6\u00a0in). The male has glossy, iridescent blue upperparts, and black underparts and flight feathers. The female and first year male are entirely dull blue-green.\n</p><p>The Asian fairy bluebird eats fruits, nectar and some insects. Its call is a liquid two note <i>glue-it</i>.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>The Asian fairy bluebird measures 24 to 27 centimetres (9.4 to 10.6\u00a0in) in length. The iris is crimson and eyelids pinkish; the bill, legs and claws are black, and mouth a flesh- colour. Marked sexual dimorphism is evident. The male is a shining ultramarine-blue with lilac reflections on its upper plumage, lesser wing coverts, and under tail coverts, while the sides of its head and the whole lower plumage are deep black; greater wing-coverts, quills, and tail black, and some of the coverts tipped with blue, and the middle tail-feathers glossed with blue.\n</p><p>The upper plumage, the lesser wing coverts, and the lower tail coverts of the female are brownish blue, with the edges of the feathers brighter. The middle tail feathers and the outer webs of all the others, except the outer pair, like the upper plumage, and remainder of tail dark brown. primaries and secondaries dark brown. The greater wing coverts, primary coverts, and tertiaries dark brown, with a blue tinge on the outer webs. Sides of the head and whole lower plumage blue, very similar to the upper parts. The young resemble the female. The male changes into adult plumage in March, the change taking place without a moult. The feathers of the upper parts first become fringed with bright blue, then the tail coverts change, and finally the lower plumage changes. Young birds with the lower plumage mixed black and dull blue, and the upper plumage like that of the adult are frequently seen.\n</p><p>There are several subspecies, including <i>I. cyanea malayensis</i> from the Malay Peninsula, where the male differs in having the undertail coverts longer, nearly reaching to the tip of the tail.\n</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The Asian fairy bluebird is found in Sri Lanka and the western coast of India from Travancore up to the latitude of Belgaum and Sawantwadi; Sikkim and the lower ranges of the Himalayas to Dibrugarh in Assam; the Khasi Hills; Cachar; Manipur; Bangladesh; Arrakan; Bago and Taninthayi Division in Burma; the Andaman and Nicobar Islands. In southeast Asia it occurs throughout most of Indochina (including Peninsular Malaysia), Sumatra, Borneo, Java, Palawan, and on smaller nearby islands. In the Indian part of its range this species is confined to the evergreen forests of the hills and plains, but elsewhere it is regular in various types of humid and deciduous forests from lowlands up to about 1,600 metres (5,200\u00a0ft). The species has been reported to be more frequent in mature rainforests and in rustic cardamom plantations under native shade trees than in coffee plantations.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>This bird is common in most of the tracts it frequents, going about in small parties or in pairs.\n</p>\n\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>It breeds from February to April, constructing a shallow cup-shaped nest, sometimes of moss and sometimes of small twigs, in a sapling or small tree. The eggs, which are generally two in number, are greenish white marked with brown, and measure about 1.14\u00a0cm by .77\u00a0cm.</p>\n<h3><span id=\"Feeding\">Feeding</span></h3>\n<p>It feeds principally on fruit and is generally found on the larger forest-trees.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Asian fairy bluebird videos, photos &amp; sounds on the Internet Bird Collection</li></ul> "
    },
    "asian glossy starling": {
        "id": "a024",
        "name": "Asian Glossy Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian glossy starling</b> (<i>Aplonis panayensis</i>) is a species of starling in the family Sturnidae. It is found in Bangladesh, Brunei, India, Indonesia, Malaysia, Myanmar, the Philippines, Singapore, Taiwan (introduced) and Thailand. Its natural habitats are subtropical or tropical moist lowland forest and subtropical or tropical mangrove forest. There is also a huge number of this species inhabiting towns and cities, where they take refuge in abandoned buildings and trees. They often move in large groups and are considered one of the noisiest species of birds.\n</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "asian green bee eater": {
        "id": "a025",
        "name": "Asian Green Bee-eater",
        "order": order.CORACIIFORMES,
        "family": familyname.Meropidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>green bee-eater</b> (<i>Merops orientalis</i>), also known as <b>little green bee-eater</b>, is a near passerine bird in the bee-eater family. It is resident but prone to seasonal movements and is found widely distributed across sub-Saharan Africa from Senegal and the Gambia to Ethiopia, the Nile valley, western Arabia and Asia through India to Vietnam. They are mainly insect eaters and they are found in grassland, thin scrub and forest often quite far from water. Several regional plumage variations are known and several subspecies have been named.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The green bee-eater was first described by the English ornithologist John Latham in 1801 using its current binomial name. Several populations have been designated as subspecies:</p>\n<ul><li><i>M. o. viridissimus</i> is found from Senegal to northern Ethiopia (has more green on the throat, crown and nape with long streamers)</li>\n<li><i>M. o. cleopatra</i> from the Nile Valley to northern Sudan</li>\n<li><i>M. o. flavoviridis</i> from northern Chad to Sudan</li>\n<li><i>M. o. muscatensis</i> on the Arabian plateau (more yellowish green with narrow gorget on throat)</li>\n<li><i>M. o. cyanophrys</i> found in Israel and the Arabian region (includes <i>meccanus</i>)</li>\n<li><i>M. o. beludschicus</i>(=<i>M. o. biludschicus</i>) Iran to Pakistan (paler colours with a blue throat)</li>\n<li><i>M. o. orientalis</i> in India and Sri Lanka (has head and neck tinged with rufous).</li>\n<li><i>M. o. ferrugeiceps</i> (=<i>birmanus</i>) in northeastern India, Myanmar, Thailand and Vietnam (has rufous crown, mane and mantle). I</li>\n<li><i>M. o. ceylonicus</i> in Sri Lanka has the nape and hindneck with more pronounced golden brown sheen often included within the nominate race</li></ul><p>A study of species within the genus <i>Merops</i> based on plumage characteristics found that most of the subspecies of <i>M. o. orientalis</i> grouping together with the most similar species being <i>Merops leschenaulti</i> and subspecies <i>M. o. ferrugeiceps</i> appeared closer to that group.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>Like other bee-eaters, this species is a richly coloured, slender bird. It is about 9\u00a0inches (16\u201318\u00a0cm) long with about 2\u00a0inches made up by the elongated central tail-feathers. The sexes are not visually distinguishable. The entire plumage is bright green and tinged with blue especially on the chin and throat. The crown and upper back are tinged with golden rufous. The flight feathers are rufous washed with green and tipped with blackish. A fine black line runs in front of and behind the eye. The iris is crimson and the bill is black while the legs are dark grey. The feet are weak with the three toes joined at the base. Southeast Asian birds have rufous crown and face, and green underparts, whereas Arabian <i>beludschicus</i> has a green crown, blue face and bluish underparts. The wings are green and the beak is black. The elongated tail feathers are absent in juveniles. Sexes are alike.</p><p>The calls is a nasal trill <i>tree-tree-tree-tree</i>, usually given in flight.</p><p>Leucistic individuals have been noted.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>This is an abundant and fairly tame bird, familiar throughout its range. It is a bird which breeds in open country with bushes. In Africa and Arabia it is found in arid areas, but is more diverse in its habitats further east.  This species often hunts from low perches, maybe only a metre or less high. It readily makes use of fence wires and electric wires. Unlike some other bee-eaters, they can be found well away from water.</p><p>They are mostly seen in the plains but can sometimes be found up to 5000 or 6000 feet in the Himalayas. They are resident in the lowlands of South Asia but some populations move seasonally but the patterns are not clear, moving away to drier regions in the rainy season and to warmer regions in winter. In parts of Pakistan, they are summer visitors.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<p>Like other species in the genus, bee-eaters predominantly eat insects, especially bees, wasps and ants, which are caught in the air by sorties from an open perch. Before swallowing prey, a bee-eater removes stings and breaks the exoskeleton of the prey by repeatedly thrashing it on the perch. Migration is not known but they make seasonal movements in response to rainfall. These birds are somewhat sluggish in the mornings and may be found huddled next to each other on wires sometimes with their bills tucked in their backs well after sunrise. They sand-bathe more frequently than other bee-eater species and will sometimes bathe in water by dipping into water in flight. They are usually seen in small groups and often roost communally in large numbers (200-300). The birds move excitedly at the roost site and call loudly, often explosively dispersing before settling back to the roost tree.\nThe little green bee-eater is also becoming common in urban and sub-urban neighborhoods, and has been observed perching on television antennae, only to launch into a brief, zig-zag flight formation to catch an insect, then return to the same perch and consume the meal. This behaviour is generally observed between the hours of 7:00 and 8:00am, and after 4:00pm.\n</p>\n\n<p>The breeding season is from March to June. Unlike many bee-eaters, these are often solitary nesters, making a tunnel in a sandy bank. The breeding pairs are often joined by helpers. They nest in hollows in vertical mud banks. The nest tunnel that they construct can run as much as 5 feet long and the 3-5 eggs are laid on the bare ground in the cavity at the end of the tunnel. The eggs are very spherical and glossy white. Clutch size varies with rainfall and insect food density. Both sexes incubate. The eggs hatch asynchronously with an incubation period of about 14 days and the chicks grow fledge in 3 to 4 weeks and in the fledging stage show a reduction in body weight.from Sde Boker, Israel|left]]A study suggested that green bee-eaters may be capable of interpreting the behaviour of human observers. They showed an ability to predict whether a human at a particular location would be capable of spotting the nest entrance and then behaved appropriately to avoid giving away the nest location. The ability to look at a situation from another's point of view was previously believed to be possessed only by primates.</p><p>Riverside habitats were found to support high populations in southern India (157 birds per square kilometre) dropping off too 101 per km\u00b2 in agricultural areas and 43-58 per square km near human habitations.</p><p>They feed on flying insects and can sometimes be nuisance to bee-keepers. The preferred prey was mostly beetles followed by hymenopterans. Orthopterans appear to be avoided. They are sometimes known to take crabs. Like most other birds they regurgitate the hard parts of their prey as pellets.</p><p>An endoparasitic nematode (<i>Torquatoides balanocephala</i>) sometimes infects their gizzard. A protozoal parasite in their blood, <i>Haemoproteus manwelli</i>, has been described from India.</p>\n<ul class=\"gallery mw-gallery-packed\"><li class=\"gallerybox\" style=\"width: 272px\">\n\t\t<li class=\"gallerybox\" style=\"width: 485.33333333333px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li></ul>\n<p>Template:Https://youtu.be/5q7TMPFOTz4\n</p> "
    },
    "asian house martin": {
        "id": "a026",
        "name": "Asian House Matin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>Asian house martin</b> (<i>Delichon dasypus</i>) is a migratory passerine bird of the swallow family Hirundinidae. It has mainly blue-black upperparts, other than its white rump, and has pale grey underparts. Its three subspecies breed in the Himalayas and in central and eastern Asia, and spend the winter lower in the mountains or in Southeast Asia. This species is locally abundant and is expanding northward in Siberia, so there are no concerns about its conservation status.\n</p><p>This martin breeds in colonies, building mud nests under an overhang on a vertical cliff or the wall of a building. Both sexes build the nest, incubate the three or four white eggs and feed the chicks. The Asian house martin feeds on small insects taken in flight, usually caught high in the air. The presence of terrestrial springtails and Lepidoptera larvae in its diet indicates that food is sometime picked from the ground.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Asian house martin was first formally described from a bird collected in Borneo by French naturalist and ornithologist Charles Lucien Bonaparte in 1850 as <i>Chelidon dasypus</i>, shortly before it was moved to the new genus <i>Delichon</i> by British entomologist Frederic Moore and American naturalist Thomas Horsfield in 1854. <i>Delichon</i> is an anagram of the Ancient Greek term <i>\u03c7\u03b5\u03bb\u03b9\u03b4\u03ce\u03bd</i> (<i>chel\u012bd\u014dn</i>), meaning \"swallow\", and <i>dasypus</i> is from Greek <i>\u03b4\u03b1\u03c3\u03cd\u03c0\u03bf\u03c5\u03c2</i> \"rough-legged\". This martin's closest relatives are the two other members of the genus <i>Delichon</i>, the Nepal house martin and the common house martin.\nThere are three subspecies:</p>\n<ul><li><i>D. d. dasypus</i>, the nominate subspecies described by Bonaparte, which breeds in eastern Russia and nearby islands</li>\n<li><i>D. d. cashmeriensis</i>, the Himalayan and central Asian form described by English ornithologist John Gould in 1858 from a Kashmiri specimen obtained by Andrew Leith Adams</li>\n<li><i>D. d. nigrimentalis</i>, the form which is found in the south east of the breeding range, was described by German ornithologist Ernst Hartert in 1910 from a specimen taken in Fujian, southeast China.</li></ul>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The adult Asian house martin of the nominate subspecies is 12\u00a0cm (4.7\u00a0in) long, dark steel blue above with a contrasting white rump, grey-washed white underparts, and a slightly forked tail. The tail and upperwings are brownish-black, and the underwings are grey-brown. The legs and feet are brownish-pink and covered with white feathers, the eyes are brown, and the bill is black. There are few differences in appearance between the sexes, although the male is somewhat whiter below than the female, especially in fresh plumage. The juvenile bird is less glossy and has dark brown upperparts, sometimes with a brownish wash to the rump, and grey-white underparts.</p><p><i>D. d. cashmiriensis</i> has brighter blue upperparts and a whiter rump than the slightly larger nominate race. The third, smallest, race is <i>D. d. nigrimentalis</i>.  All three subspecies can be distinguished from the similar Nepal house martin by the latter species' black chin, black undertail coverts and much squarer tail. The Asian house martin is more similar to the common house martin, but is darker underneath and has a less deeply forked tail. Confusion is most likely between adult male Asian house martins, which have paler underparts, and the eastern race of common house martin, <i>D. urbicum lagopodum</i> which has a less forked tail than the western subspecies, although it still shows a more pronounced fork than Asian.</p><p>This species\u2019 song is a rippling metallic trill, and is a sibilant twitter, and call is a dry metallic cheep, often with two or three syllables. It is similar to that of common house martin, but more rasping.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The nominate subspecies of the Asian house martin, <i>D. d. dasypus</i>, breeds in the southeast of Russia, the Kuril Islands, Japan and sometimes Korea. It migrates through eastern China to winter in the Malay Peninsula, Borneo, the Philippines, Java and Sumatra; a few birds remain around hot springs in Japan. <i>D. d. cashmeriensis</i> breeds in the Himalayas from Afghanistan east to Sikkim and northwards into Tibet and western and central China. It is found between 1,500\u20135,000\u00a0m (4,900\u201316,400\u00a0ft) altitude, although mainly in the 2,400\u20134,000\u00a0m (7,900\u201313,100\u00a0ft) range. This martin is a short-range migrant, mainly wintering at lower altitudes in the foothills of the Himalayas, but with some birds on the plains of North-eastern India and North-eastern and South-eastern Bangladesh, and smaller numbers further afield in Myanmar and northern Thailand. The third race, <i>D. d. nigrimentalis</i>, breeds in southeastern China and southern Siberia. Its wintering grounds are unknown, but birds in Taiwan just move to lower altitudes in winter. Non-breeding Asian house martin have been recorded as far west as the United Arab Emirates. The range of <i>D. d. cashmeriensis</i> overlaps with that of the Nepal house martin, although they breed at somewhat different altitudes. The height separation and the small differences in appearance seem sufficient to prevent interbreeding.</p><p>The preferred habitat of the Asian house martin is valleys and gorges in mountainous areas or coastal cliffs, where natural caves or crevices provide nest sites. It will also breed on large man-made sites like temples, hotels or power stations. This martin tends to move to lower altitude open or hilly country in its wintering areas, although it has been recorded at up to 2,565\u00a0m (8,415\u00a0ft) in Thailand.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n\n<p>The Asian house martin is a cliff nester, breeding in colonies sited under an overhang on a vertical cliff, usually with the nests not touching. It also frequently nests on large buildings such as temples and bridges, but not to the same extent as the common house martin. The nest is a deep mud cone lined with grasses or feathers. Unlike its relatives, the Asian house martin frequently does not complete the enclosure of its nest, leaving it open instead like a deeper version of a barn swallow nest. A Russian study found half the nests in its Baikal research area to be of the open type, and the Himalayan subspecies <i>D. d. cashmiriensis</i> has also been recorded as building a shallow cup nest.</p><p>The normal clutch is three or four (occasionally up to six) plain white eggs averaging 20.2\u00a0mm \u00d7\u00a014.1\u00a0mm (0.80\u00a0in \u00d7\u00a00.56\u00a0in) and weighing 2.1\u00a0g (0.074\u00a0oz). The incubation and fledging times are unknown, but are probably similar to those of the common house martin, which has an incubation period of 14 to 16 days until the eggs hatch, and a further 22 to 32 days to fledging. Both sexes build the nest, incubate the eggs and feed the chicks.</p>\n<h3><span id=\"Feeding\">Feeding</span></h3>\n<p>This martin feeds on insects taken in flight. As with its relatives it tends to feed high in the air, taking mostly small flies, aphid and Hymenoptera such as winged ants. A wide range of other insects are caught, including Lepidoptera, beetles and lacewings. The presence in the diet of terrestrial springtails and Lepidoptera larvae indicate that food is sometime picked from the ground.</p>\n<h3><span id=\"Predators_and_parasites\">Predators and parasites</span></h3>\n<p>Birds often carry parasites, both external lice and fleas, and internal blood parasites. The Asian house martin is a host of the house martin flea <i>Ceratophyllus hirundinis</i>, and has recently been shown to carry signs of avian malaria. The predators of this martin appear to be little studied, but are presumably similar to those of the common house martin, namely fast flying falcons such as Oriental hobby which can chase down their prey in flight.</p>\n<h2><span id=\"Conservation_status\">Conservation status</span></h2>\n<p>The Asian house martin has a large range that does not appear to be contracting, and its numbers appear to be stable, although the total population is unknown. Since the range is more than 20,000 square kilometres (7,700\u00a0sq\u00a0mi), and there are more 10,000 mature individuals, in the absence of any large decline in distribution or numbers the species does not appear to meet the criteria to be considered vulnerable, and is currently evaluated as Least Concern. This species is locally abundant and appears to be expanding its range northwards in southern Siberia.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2> "
    },
    "asian openbill": {
        "id": "a027",
        "name": "Asian Openbill",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n</p>\n<p>The <b>Asian openbill</b> or <b>Asian openbill stork</b> (<i>Anastomus oscitans</i>) is a large wading bird in the stork family Ciconiidae. This distinctive stork is found mainly in the Indian subcontinent and Southeast Asia. It is greyish or white with glossy black wings and tail and the adults have a gap between the arched upper mandible and recurved lower mandible. Young birds are born without this gap which is thought to be an adaptation that aids in the handling of snails, their main prey. Although resident within their range, they make long distance movements in response to weather and food availability.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The Asian openbill was described by the French polymath Georges-Louis Leclerc, Comte de Buffon in 1780 in his <i>Histoire Naturelle des Oiseaux</i> from a specimen collected in Pondichery, India. The bird was also illustrated in a hand-coloured plate engraved by Fran\u00e7ois-Nicolas Martinet in the <i>Planches Enlumin\u00e9es D'Histoire Naturelle</i> which was produced under the supervision of Edme-Louis Daubenton to accompany Buffon's text.  Neither the plate caption nor Buffon's description included a scientific name but in 1783 the Dutch naturalist Pieter Boddaert coined the binomial name <i>Ardea oscitans</i> in his catalogue of the <i>Planches Enlumin\u00e9es</i>. The Asian openbill is now placed in the genus <i>Anastomus</i> that was erected by the French naturalist Pierre Bonnaterre in 1791. The genus name <i>Anastomus</i> is from the Ancient Greek \u03b1\u03bd\u03b1\u03c3\u03c4\u03bf\u03bc\u03bf\u03c9 <i>anastomo\u014d</i> meaning \"to furnish with a mouth\" or \"with mouth wide-opened\". The specific epithet <i>oscitans</i> is the Latin word for \"yawning\".</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The Asian openbill stork is predominantly greyish (non-breeding season) or white (breeding season) with glossy black wings and tail that have a green or purple sheen. The name is derived from the distinctive gap formed between the recurved lower and arched upper mandible of the beak in adult birds. Young birds do not have this gap. The cutting edges of the mandible have a fine brush like structure that is thought to give them better grip on the shells of snails. The tail consists of twelve feathers and the preen gland has a tuft. The mantle is black and the bill is horn-grey. At a distance, they can appear somewhat like a white stork or Oriental stork. The short legs are pinkish to grey, reddish prior to breeding. Non-breeding birds have a smoky grey wings and back instead of white. Young birds are brownish-grey and have a brownish mantle. Like other storks, the Asian openbill is a broad-winged soaring bird, which relies on moving between thermals of hot air for sustained flight. They are usually found in flocks but single birds are not uncommon. Like all storks, it flies with its neck outstretched. It is relatively small for a stork and stands at 68\u00a0cm height (81\u00a0cm long).</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n<p>The usual foraging habitats are inland wetlands and are only rarely seen along river banks and tidal flats. On agricultural landscapes, birds forage in crop fields, irrigation canals, and in seasonal marshes. Birds may move widely in response to habitat conditions. Young birds also disperse widely after fledging. Individuals ringed at Bharatpur in India have been recovered 800\u00a0km east and a bird ringed in Thailand has been recovered 1500\u00a0km west in Bangladesh. Storks are regularly disoriented by lighthouses along the southeast coast of India on overcast nights between August and September. The species is very rare in the Sind and Punjab regions of Pakistan, but widespread and common in India, Sri Lanka, Nepal, Bangladesh, Myanmar, Thailand and Cambodia.</p>\n<h2><span id=\"Food_and_foraging\">Food and foraging</span></h2>\n\n<p>During the warmer part of the day, Asian Openbills soar on thermals and have a habit of descending rapidly into their feeding areas. Groups may forage together in close proximity in shallow water or marshy ground on which they may walk with a slow and steady gait. The Asian openbill feeds mainly on large molluscs, especially <i>Pila</i> species, and they separate the shell from the body of the snail using the tip of the beak. The tip of the lower mandible of the beak is often twisted to the right. This tip is inserted into the opening of the snail and the body is extracted with the bill still under water. Jerdon noted that they were able to capture snails even when blindfolded. The exact action being difficult to see, led to considerable speculation on the method used. Sir Julian Huxley examined the evidence from specimens and literature and came to the conclusion that the bill gap was used like a nutcracker. He held the rough edges of the bill as being the result of wear and tear from such actions. Subsequent studies have dismissed this idea and the rough edge of the bill has been suggested as being an adaptation to help handle hard and slippery shells. They forage for prey by holding their bill tips slightly apart and make rapid vertical jabs in shallow water often with the head and neck partially submerged. The gap in the bill is not used for handling snail shells and forms only with age. Young birds that lack a gap are still able to forage on snails. It has been suggested that the gap allows the tips to strike at a greater angle to increases the force that the tips can apply on snail shells. Smaller snails are often swallowed whole or crushed.  They also feed on water snakes, frogs and large insects. When foraging on agricultural landscapes with a variety of habitats, Asian openbills preferentially use natural marshes and lakes (especially in the monsoon and winter), and irrigation canals (especially in the summer) as foraging habitat.</p>\n<h2><span id=\"Breeding\">Breeding</span></h2>\n\n<p>The breeding season is after the rains, during July to September in northern India and Nepal, and November to March in southern India and Sri Lanka. They may skip breeding in drought years. The Asian openbill breeds colonially, building a rough platform of sticks often on half-submerged trees (often <i>Barringtonia</i>, <i>Avicennia</i> and <i>Acacia</i> species), typically laying two to four eggs. The nesting trees are either shared with those of egrets, cormorants and darters, or can be single-species colonies like in lowland Nepal. Nesting colonies are sometimes in highly disturbed areas such as inside villages and on trees located in crop fields. In lowland Nepal, 13 colonies found in an agricultural landscape had an average colony size of 52, ranging from 5 nests to 130 nests. The majority of these colonies were located on <i>Bombax ceiba</i> trees, with much fewer located on <i>Ficus religiosa</i> and <i>Dalbergia sissoo</i> tree species. Asian openbills preferred trees that were much taller and bigger than trees that were available on the landscape, and selectively used wild and native tree species entirely avoiding species that were important for resources such as fruits (e.g. <i>Mangifera indica</i>) despite such trees being much more common. Religious beliefs have secured important trees such as <i>Ficus</i> species, and agro-forestry has secured the most preferred species, <i>Bombax ceiba</i>, that Asian openbills prefer to locate colonies in lowland Nepal. The nests are close to each other leading to considerable aggressive interactions between birds on neighbouring nests. Both parents take turns in incubation, the eggs hatching after about 25 days. The chicks emerge with cream coloured down and are shaded by the loosely outspread and drooped wings of a parent.</p><p>Initiation of nests in lowland Nepal was highly synchronized, with colonies started during July and August. Breeding success at nests in these colonies was impacted by proximity of colonies to human habitation, and the progression of the breeding season. Colonies closer to human habitation had lower success, and colonies initiated later during the breeding season (when flooding of the rice fields had reduced to allow ripening of the crop) had lower success. Number of chicks that fledged from colonies located on trees in agricultural landscapes in lowland Nepal were similar to that observed in a protected, mangrove reserve in eastern India suggesting that agricultural areas are not always detrimental to large waterbirds such as Asian openbills.</p><p>Nesting openbills in Nepal took an average of 27 minutes to return to nests with food for nestlings and fledglings. The time taken to find food was most impacted by the location of wetlands around colonies, and the progression of the breeding season. Adults look the least time to return with food earlier in the season when the dominant rice crop was most flooded, and time increased as the rice ripened along with the drying out of the fields.</p><p>Like other storks, they are silent except for clattering produced by the striking of the male's bill against that of the female during copulation. They also produce low honking notes accompanied by up and down movements of the bill when greeting a partner arriving at the nest. Males may sometimes form polygynous associations, typically with two females which may lay their eggs in the same nest.</p>\n<h2><span id=\"Relationship_with_other_organisms\">Relationship with other organisms</span></h2>\n<p>Young birds at the nest are sometimes preyed on by imperial, steppe and greater spotted eagles. <i>Chaunocephalus ferox</i>, an intestinal parasite, is a trematode worm found in about 80% of the wild populations in Thailand while another species <i>Echinoparyphium oscitansi</i> has been described from Asian openbills in Thailand. Other helminth parasites such as <i>Thapariella anastomusa</i>, <i>T. oesophagiala</i> and  <i>T. udaipurensis</i> have been described from the oesophagus of storks.</p><p>In colonial India, sportsmen shot the openbill for meat, calling it the \"beef-steak bird\" (although this name was also used for the woolly-necked stork).</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Asian Openbill (Anastomus oscitans) video photos and sounds - Internet Bird Collection</li>\n<li>Asian Openbill <i>Anastomus oscitans</i> - Adult - Oriental Bird Images</li></ul> "
    },
    "asian palm swift": {
        "id": "a028",
        "name": "Asian Palm-swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian palm swift</b> (<i>Cypsiurus balasiensis</i>) is a small swift. It is very similar to the African palm swift, <i>Cypsiurus parvus</i>, and was formerly considered to be the same species.\n</p><p>It is a common resident breeder in tropical Asia from India to the Philippines. The down and feather nest is glued to the underside of a palm leaf with saliva, which is also used to secure the usually two or three eggs. This is a bird of open country and cultivation, which is strongly associated with oil palms.</p><p>This 13\u00a0cm long species is mainly pale brown in colour. It has long swept-back wings that resemble a crescent or a boomerang. The body is slender, and the tail is long and deeply forked, although it is usually held closed. The call is a loud shrill scream.</p><p>Sexes are similar, and young birds differ from adults mainly in their shorter tails. Asian palm swift has very short legs which it uses only for clinging to vertical surfaces, since swifts never settle voluntarily on the ground.</p><p>These swifts spend most of their lives in the air, living on the insects they catch in their beaks. Asian palm swifts often feed near the ground, and they drink on the wing.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li><cite id=\"CITEREFCompilers:_Stuart_Butchart,_Jonathan_Ekstrom2008\" class=\"citation web\">Compilers: Stuart Butchart, Jonathan Ekstrom (2008). \"<i>Asian Palm-swift - BirdLife Species Factsheet</i>\". <i>Evaluators: Jeremy Bird, Stuart Butchart</i>. BirdLife International<span>. Retrieved <span>May 15,</span> 2009</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Evaluators%3A+Jeremy+Bird%2C+Stuart+Butchart&amp;rft.atitle=Asian+Palm-swift+-+BirdLife+Species+Factsheet&amp;rft.date=2008&amp;rft.au=Compilers%3A+Stuart+Butchart%2C+Jonathan+Ekstrom&amp;rft_id=http%3A%2F%2Fwww.birdlife.org%2Fdatazone%2Fspecies%2Findex.html%3Faction%3DSpcHTMDetails.asp%26sid%3D1772m%3D0&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsian+palm+swift\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul> "
    },
    "asian pied starling": {
        "id": "a029",
        "name": "Asian Pied Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>pied myna</b> or <b>Asian pied starling</b> (<i>Gracupica contra</i>) is a species of starling found in the Indian subcontinent and Southeast Asia. They are usually found in small groups mainly on the plains and low foothills. They are often seen within cities and villages although they are not as bold as the common myna. They produce a range of calls made up of liquid notes. Several slight plumage variations exist in the populations and about five subspecies are named.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n\n<p>The species has been included in the genus <i>Sturnus</i> and <i>Sturnopastor</i> in the past but recent studies do not support its inclusion within <i>Sturnus</i> leading to the reinstatement of an older genus name <i>Gracupica</i>. It has been claimed that the species name \"contra\" is derived from an Indian name for it, although this has not been traced subsequently.</p>\n\n<p>The nominate subspecies (based on the species description given by Linnaeus in 1758) is found mainly along the Gangetic plains extending south into Andhra Pradesh and east to Bangladesh. The population in northeastern India (Sadiya to Tirap and the Naga Hills) was named as <i>sordida</i> (originally <i>Sturnus contra sordidus</i>) by Sidney Dillon Ripley in 1950. This form differs from the Indian form in having reduced streaking on the shoulders and nape. The populations in Manipur south to Myanmar and east to Yunnan have the white extending over the eye and are included in the subspecies <i>superciliaris</i> first described by Edward Blyth in 1863. The subspecies in Thailand, Laos and Cambodia is included in <i>floweri</i> ( Sharpe, 1897) while <i>jalla</i> described by Horsfield in 1821 is found on Sumatra, Java and Bali.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>This myna is strikingly marked in black and white and has a yellowish bill with a reddish bill base. The bare skin around the eye is reddish. The upper body, throat and breast are black while the cheek, lores, wing coverts and rump are contrastingly white. The sexes are similar in plumage but young birds have dark brown in place of black. The subspecies vary slightly in plumage, extent of streaking of the feathers and in measurements.\n</p><p>The flight is slow and butterfly-like on round wings.</p><p>Leucistic individuals have been recorded.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The species is found mainly in the plains but in the foothills up to about 700m above sea level. They are found mainly in areas with access to open water. Their main distribution in India is from the Gangetic plains extending south to the Krishna River. Their range is increasing, with populations establishing more recently in Pakistan, Rajkot, and Bombay (since 1953), possibly aided by trade in caged birds and accidental escape. Their westerward spread in India particularly in parts of Rajasthan has been aided by changes in irrigation and farming patterns, and the spread into Sumatra has been aided by deforestation. The species has also established itself in Dubai, UAE.</p><p>The habitat is lowland open areas with scattered trees near water, often near human habitation. This species is often seen at sewage farms and refuse tips.</p>\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n\n<p>These starlings are usually found in small groups, foraging mainly on the ground but perching on trees and buildings. Birds in a group call frequently with a wide repertoire that includes whistles, trills, buzzes, clicks, and warbling calls. Young birds taken into captivity have been trained to imitate tunes of other birds.\n</p><p>Both sexes sing. They forage in fields, lawns and on open ground feeding on grains, fruit, insects, earthworms and molluscs usually taken from the ground. Like many other starlings, they often use a prying or gaping action, piercing soil and then opening apart the bill to dislodge hidden food. The strong protractor muscles allow them to part a mat of grass and their eyes are positioned to obtain a binocular view of the space between the parted beak. They often feed in grazing land or among cattle.</p><p>The breeding season in India is spread from March to September. With the onset of breeding, the sizes of flocks decline and birds pair up. Courtship involves calling, fluffing of the feathers and head bobbing. The nest is a loose mass of straw formed into a dome with an entrance on the side and placed in a large tree (often banyan, mango, jackfruit, rosewood) or sometimes on man-made structures, often close to human habitation. Several pairs will breed in the same vicinity. The usual clutch is made up of about four to six glossy blue eggs. Each egg is laid with a day in between and incubation begins only after the third or fourth egg is laid. The eggs hatch after 14 to 15 days. The young are brooded for two weeks, the female staying at the nest during the night. Both parents feed the chicks until they fledge and leave after three weeks. More than one brood may be raised in a season.</p><p>An instance of interspecific feeding, where an adult of a common myna fed a young pied myna has been reported.</p><p>These mynas form communal roosts at night and jointly defend nesting areas.</p>\n<h2><span id=\"In_culture\">In culture</span></h2>\n<p>The ability of these mynas to mimic human voices made them popular as cagebirds. The Sema Nagas will not eat this bird as they believe it is the reincarnation of a human. They are considered to be generally beneficial because they eat many insects.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n<ul><li>Ray, D (1972) Pied Myna <i>Sturnus contra</i> in Delhi. <i>Newsletter for Birdwatchers</i>. 12(10):11.</li>\n<li>Narang, ML; Lamba, BS (1976) On the feeding-time and feeding-area preference of Indian Pied Myna, <i>Sturnus contra</i> Linn. Newsl. Zool. Surv. India 2(3), 83\u201386.</li>\n<li>Gupta, AP (1982) About the distribution of birds. <i>Newsletter for Birdwatchers</i>. 22(2):10</li>\n<li>Saini, Harjeet K; Chawla, Geeta; Dhindsa, Manjit S (1995): Food of Pied Myna <i>Sturnus contra</i> in the agroecosystem of Punjab. Pavo 33(1&amp;2):47\u201362.</li>\n<li>Chawla, G (1993) Ecological studies on the Pied Myna (<i>Sturnus contra</i>) in an intensively cultivated area. M.Sc. Thesis, Punjab Agricultural University, Ludhiana.</li>\n<li><cite id=\"CITEREFGupta,_SKBR_Maiti1986\" class=\"citation journal\">Gupta, SK &amp; BR Maiti (1986). \"Study of atresia in the ovary during the annual reproductive cycle and nesting cycle of the pied myna\". <i>Journal of Morphology</i>. <b>190</b> (3): 285\u2013296. doi:10.1002/jmor.1051900305.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Journal+of+Morphology&amp;rft.atitle=Study+of+atresia+in+the+ovary+during+the+annual+reproductive+cycle+and+nesting+cycle+of+the+pied+myna&amp;rft.volume=190&amp;rft.issue=3&amp;rft.pages=285-296&amp;rft.date=1986&amp;rft_id=info%3Adoi%2F10.1002%2Fjmor.1051900305&amp;rft.au=Gupta%2C+SK&amp;rft.au=BR+Maiti&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFGupta_SKB._R._Maiti1987\" class=\"citation journal\">Gupta SK &amp; B. R. Maiti (1987). \"The male sex accessories in the annual reproductive cycle of the Pied Myna Sturnus contra contra\". <i>J. Yamashina Inst. Ornithol</i>. <b>19</b>: 45\u201355. doi:<span title=\"Freely accessible\">10.3312/jyio1952.19.45</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=J.+Yamashina+Inst.+Ornithol.&amp;rft.atitle=The+male+sex+accessories+in+the+annual+reproductive+cycle+of+the+Pied+Myna+Sturnus+contra+contra&amp;rft.volume=19&amp;rft.pages=45-55&amp;rft.date=1987&amp;rft_id=info%3Adoi%2F10.3312%2Fjyio1952.19.45&amp;rft.au=Gupta+SK&amp;rft.au=B.+R.+Maiti&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFIslam2001\" class=\"citation journal\">Islam, M.S. (2001). \"Southward Migration of Shorebirds in the Ganges Delta, Bangladesh\" <span>(PDF)</span>. <i>The Stilt</i>. <b>39</b> (31\u201336): 34.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Stilt&amp;rft.atitle=Southward+Migration+of+Shorebirds+in+the+Ganges+Delta%2C+Bangladesh&amp;rft.volume=39&amp;rft.issue=31%E2%80%9336&amp;rft.pages=34&amp;rft.date=2001&amp;rft.aulast=Islam&amp;rft.aufirst=M.S.&amp;rft_id=http%3A%2F%2Fwww.awsg.org.au%2Fstilt%2FStilt-39.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFTyagi,_A.K.Lamba,_B.S.\" class=\"citation book\">Tyagi, A.K.; Lamba, B.S. <i>A contribution to the breeding biology of two Indian mynas. Miscellaneous publication. Occasional paper no. 5</i> <span>(PDF)</span>. Calcutta: Zoological Survey of India.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=A+contribution+to+the+breeding+biology+of+two+Indian+mynas.+Miscellaneous+publication.+Occasional+paper+no.+5.&amp;rft.place=Calcutta&amp;rft.pub=Zoological+Survey+of+India&amp;rft.au=Tyagi%2C+A.K.&amp;rft.au=Lamba%2C+B.S.&amp;rft_id=http%3A%2F%2Ffaunaofindia.nic.in%2FPDFVolumes%2Foccpapers%2F055%2Findex.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3APied+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Images and videos</li></ul> "
    },
    "asian plain martin": {
        "id": "a030",
        "name": "Asian Plain Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>grey-throated martin</b> or <b>Asian plain martin</b> (<i>Riparia chinensis</i>) is a small passerine bird in the <i>swallow</i> family.\n</p><p>The grey-throated martin is found in open habitats such as farmland, grassland and savannah, usually near water. It is found from Tajikistan,  Afghanistan and Indian subcontinent to southern China, Taiwan, and the northern Philippines. It was formerly considered a subspecies of the \"plain martin\", since renamed the brown-throated martin.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Rasmussen, P.C., and J.C. Anderton (2005). <i>Birds of South Asia. The Ripley Guide</i>. Volume 2: attributes and status. Smithsonian Institution and Lynx Edicions, Washington D.C. and Barcelona.</li></ul> "
    },
    "asian stubtail": {
        "id": "a031",
        "name": "Asian Stubtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Scotocercidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Asian stubtail</b> (<i>Urosphena squameiceps</i>) is a bird in the family Cettiidae. The species was first described by Robert Swinhoe in 1863. It breeds in Korea, Manchuria and Japan and winters to southern China\u00a0and northern Southeast Asia. Its natural habitat is temperate forest.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>It is a small bird with a short tail.  Males and females are similar in color, as well as juveniles after fledging; they are brown all over with a paler underpart and a darker brown crest and eyeline.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>Breeding Asian stubtails reside in portions of northeastern Asia; non-breeding in parts of southeast Asia including Taiwan, southeastern China, Nepal and Philippines, preferring a habitat of undergrowth in evergreen broadleaf or lowland coniferous forest.</p>\n<h2><span id=\"Behavior\">Behavior</span></h2>\n<h3><span id=\"Voice\">Voice</span></h3>\n<p>Breeding males produce a high-pitched \"shee-shee-shee-shee\" or \"cee-cee-cee\", while both males and females make a call similar to \"chott-chott-chott\".\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p>\n\n<p><br></p> "
    },
    "asian woollyneck": {
        "id": "a032",
        "name": "Asian Woollyneck",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>woolly-necked stork</b> or <b>whitenecked stork</b> (<i>Ciconia episcopus</i>) is a large wading bird in the stork family Ciconiidae.  It breeds singly, or in small loose colonies. It is distributed in a wide variety of habitats including marshes in forests, agricultural areas, and freshwater wetlands.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The woolly-necked stork was described by the French polymath Georges-Louis Leclerc, Comte de Buffon in 1780 in his <i>Histoire Naturelle des Oiseaux</i> from a specimen collected from the Coromandel Coast of India. The bird was also illustrated in a hand-coloured plate engraved by Fran\u00e7ois-Nicolas Martinet in the <i>Planches Enlumin\u00e9es D'Histoire Naturelle</i> which was produced under the supervision of Edme-Louis Daubenton to accompany Buffon's text.  Neither the plate caption nor Buffon's description included a scientific name but in 1783 the Dutch naturalist Pieter Boddaert coined the binomial name <i>Ardea episcopus</i> in his catalogue of the <i>Planches Enlumin\u00e9es</i>. The woolly-necked stork is now placed in the genus <i>Ciconia</i> that was erected by the French zoologist Mathurin Jacques Brisson in 1760. The genus name <i>Ciconia</i> is the Latin word for a \"stork\"; the specific epithet <i>episcopus</i> is Latin for \"bishop\".</p><p>Three subspecies are recognised:</p>\n<ul><li><i>C. e. microscelis</i> Gray, GR, 1848 \u2013 Africa south of the Sahara</li>\n<li><i>C. e. episcopus</i> (Boddaert, 1783) \u2013 India to Indochina, the Philippines and Malay Peninsula, north Sumatra</li>\n<li><i>C. e. neglecta</i> (Finsch, 1904) \u2013 south Sumatra, Java, Lesser Sunda Islands, Sulawesi</li></ul><p>The online edition of the <i>Handbook of the Birds of the World</i> treats the African race, <i>C. e. microscelis</i>, as a separate species, the African woolyneck, with the remaining two subspecies becoming the Asian woolyneck.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The woolly-necked stork is a medium-sized stork at 75\u201392\u00a0cm tall. The iris is deep crimson or wine-red. The stork is glistening black overall with a black \"skull cap\", a downy white neck which gives it its name. The lower belly and under-tail coverts are white, standing out from the rest of the dark coloured plumage. Feathers on the fore-neck are iridescent with a coppery-purple tinge. These feathers are elongated and can be erected during displays. The tail is deeply forked and is white, usually covered by the black long under tail coverts. It has long red legs and a heavy, blackish bill, though some specimens have largely dark-red bills with only the basal one-third being black. Sexes are alike. Juvenile birds are duller versions of the adult with a feathered forehead that is sometimes streaked black-and-white. The African birds are described as having the edges of the black cap diffused or with a jagged border compared to a sharp and clean border in the Asian birds. Sexes are identical, though males are thought to be larger. When the wings are opened either during displays or for flight, a narrow band of very bright unfeathered skin is visible along the underside of the forearm. This band has been variously described as being \"neon, orange-red\", \"like a red-gold jewel\", and \"almost glowing\" when seen at close range.</p><p>Small nestlings are pale grey with buffy down on the neck, and a black crown. At fledging age, the immature bird is identical to the adult except for a feathered forehead, much lesser iridescence on feathers, and much longer and fluffier feathers on the neck.</p><p>English common names for this species include Whitenecked Stork, Whiteheaded Stork, Bishop Stork, and the Parson-bird. More recently, the African and Asian populations are considered to be two different species, the African and the Asian Woolly-neck. This is based purely on geographical isolation, but there is no morphological or phylogenetic evidence yet to support this split.\n</p>\n\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>It is a widespread tropical species which breeds in Asia, from India to Indonesia, and throughout Africa. It is a resident breeder building nests on trees located on agricultural fields or wetlands, on natural cliffs, and on cell phone towers. They use a variety of freshwater wetlands including seasonal and perennial reservoirs and marshes, crop lands, irrigation canals and rivers. They are attracted to fires in grasslands and crop fields where they capture insects trying to escape the fire. They use ponds and marshes inside forests in both Africa and Asia, especially in south-east Asia where they use grassy and marshy areas in clearings in evergreen rainforests. In India, they are an uncommon species in coastal habitats. They use coastal areas in Africa also, with birds in Sulawasi observed to be eating sea snakes, and birds on the Kenya coast foraging in coral reefs and mudflats. In an agricultural landscape in north India, woolly-necked storks preferred fallow fields during the summer and monsoon seasons, and natural freshwater wetlands during the winter. Here, irrigation canals were preferentially used during winters when water levels were low, and birds avoided crop fields in all seasons. Assisted by construction of new irrigation canals, this species is spreading to arid areas like the Thar Desert in Rajasthan, India.</p><p>Individuals of this species have been sighted at altitudes of 3,790 m above sea level in China (Napahai wetland), and 3,540 m above sea level in Nepal (Annapurna Conservation Area).</p>\n\n<h2><span id=\"Behavior\">Behavior</span></h2>\n\n<p>Several calls by adult birds have been described including bisyllabic whistles given along with displays at the nest, and a fierce hissing sound when a bird was attacked by a trained falcon. The woolly-necked stork is a broad winged soaring bird, which relies on moving between thermals of hot air for sustained long distance flight. Like all storks, it flies with its neck outstretched. It has also been observed to 'roll, tumble and dive at steep angles' in the air with the wind through its quills making a loud noise. Adult birds have also been observed diving from nests before flying away abruptly in a 'bat-like flight'.</p><p>This species is largely seen as single birds, in pairs, or in small family groups of 4\u20135, and flocks are uncommon. In agricultural landscapes, the species occurs mostly as very small flocks (&lt; 5 birds), though flocks of over 10 birds occur commonly. Flocking is affected by different factors in different areas. In more arid areas, most of the flocks occur in the summer when few wetlands are remaining, whereas in areas with more water, flocks occur largely in winter after chicks have fledged from nests. They often associate with wintering stork species including the Black and White Storks.</p>\n\n<h3><span id=\"Diet\">Diet</span></h3>\n<p>The woolly-necked stork walks slowly and steadily on the ground seeking its prey, which like that of most of its relatives, consists of amphibians, reptiles and insects.</p>\n<h3><span id=\"Breeding\">Breeding</span></h3>\n<p>Typically, a large stick nest is built on a tree, and two to five eggs form the typical clutch, with five eggs being very rare. Birds commonly use both forest trees and solitary trees in agricultural areas to build nests. In India, nests are increasingly being observed in urban areas on cell phone towers. Riverside cliffs are also used occasionally as nest sites.</p>\n<h2><span id=\"Conservation\">Conservation</span></h2>\n<p>The woolly-necked stork is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.\n</p>\n<h2><span id=\"Different_views_.26_aspects\"></span><span id=\"Different_views_&amp;_aspects\">Different views &amp; aspects</span></h2>\n<ul class=\"gallery mw-gallery-traditional\" style=\"max-width: 815px;\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li><i>Birds of The Gambia</i> by Barlow, Wacher and Disley, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a01-873403-32-1</li>\n<li><i>Birds of India</i> by Grimmett, Inskipp and Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Woolly-necked Stork <i>Ciconia episcopus</i> - BirdLife International</li>\n<li>Woolly-necked Stork videos and photos - Internet Bird Collection</li>\n<li>Woollynecked Stork - <i>The Atlas of Southern African Birds</i></li></ul> "
    },
    "baer s pochard": {
        "id": "b001",
        "name": "Baer's Pochard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p><b>Baer's pochard</b> (<i>Aythya baeri</i>) is a diving duck found in eastern Asia. It breeds in southeast Russia and northeast China, migrating in winter to southern China, Vietnam, Japan, and India. The name commemorates the Estonian naturalist Karl Ernst von Baer.</p><p>At 41\u201346\u00a0cm (16\u201318\u00a0in), it is similar in size and stance to its close relative, the ferruginous duck (<i>A. nyroca</i>), although the coloration of the drakes (males) is entirely different. Baer's pochard males are similar to those of the greater scaup (<i>A. marila</i>), but have a dark back and upper flanks; the white lower flanks and belly are conspicuous. The females of Baer's pochard and the ferruginous duck are quite similar, but that holds true for the females of almost all <i>Aythya</i> species. Eclipse males resemble females, but retain the white eye.</p><p>Formerly classified as a vulnerable species by the IUCN, recent research shows that its numbers are decreasing more and more rapidly. It was consequently uplisted to endangered status in 2008. In 2012, it was further uplisted to critically endangered. Between 1987 and 2007, there were only eleven reports of groups of 100+ birds in mainland China. A recent census by World Wildlife Fund (WWF) China of Hubei province found just 131 individuals on Liangzihu Lake, and only another three flocks of ten, eight, and three individuals at other sites. Hunting and wetland destruction are thought to be the causes of the decline.</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n<p>Baer's pochard breeds around lakes with rich aquatic vegetation, nesting in dense grass, flooded tussock meadows, or flooded shrubby meadows. In Liaoning, China, it is normally found in densely vegetated coastal wetlands, or around lakes and ponds surrounded by forest. In winter, it occurs on freshwater lakes and reservoirs.</p>\n<h2><span id=\"Footnotes\">Footnotes</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Baer's pochard <i>(Aythya baeri)</i> at ARKive</li>\n<li><cite class=\"citation web\">\"Aythya baeri\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Aythya+baeri&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3D750FE7083EC00313&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaer%27s+pochard\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Baer's pochard media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Baer%26%2339%3Bs+pochard+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fbaers-pochard-aythya-baeri&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaer%27s+pochard\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Baer's pochard photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Aythya baeri</i> at IUCN Red List maps</li>\n<li>Audio recordings of Baer's pochard on Xeno-canto.</li></ul> "
    },
    "baikal grasshopper warbler": {
        "id": "b002",
        "name": "Baikal Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Baikal bush warbler</b>, <b>Baikal grasshopper-warbler</b> or <b>David's bush warbler</b> (<i>Locustella davidi</i>) is a migratory species of Old World warbler in the family Locustellidae.</p><p>It breeds from the southern part of the Russian Far East (including the Lake Baikal region) to northeast China (southern Heilungkiang  south to southern Hopeh) and North Korea. It winters from southern China south to northern Thailand.</p><p>Its breeding habitat is taiga forests, especially in clearings or at streams.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<p>P.D. Round &amp; V. Loskot, A reappraisal of the taxonomy of the Spotted Bush-Warbler <i>Bradypterus thoracicus</i> in <i>Forktail</i> 10 (1995): 159-172\n</p><p><br></p>"
    },
    "baikal teal": {
        "id": "b003",
        "name": "Baikal Teal",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n<p>The <b>Baikal teal</b> (<i>Sibirionetta formosa</i>), also called the <b>bimaculate duck</b> or <b>squawk duck</b>, is a dabbling duck that breeds in eastern Russia and winters in East Asia.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The first formal description of the Baikal teal was by the German naturalist Johann Gottlieb Georgi in 1775 under the binomial name <i>Anas formosa</i>. A molecular phylogentic study published in 2009 found that the genus <i>Anas</i> as then defined was non-monophyletic.  Based on this analysis the genus was split into four proposed genera with the Baikal teal placed in the resurrected genus <i>Sibirionetta</i> that had been introduced by the German zoologist Hans von Boetticher in 1929. The name <i>Sibirionetta</i> is derived from the Latin <i>sibiricus</i> for Siberia and the Ancient Greek <i>n\u0113tta</i> for a duck. The specific epithet <i>formosa</i> is from the Latin <i>formosus</i> for \"beautiful\".</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>At between 39 and 43 centimetres (15 and 17\u00a0in), this duck is slightly larger and longer-tailed than the common teal. The breeding male is unmistakable, with a striking green nape, yellow and black auriculars, neck, and throat. It has a dark crown, and its breast is light brown with dark spots. It has long dropping dark scapulars, and its grey sides are set off on the front and rear with white bars.\n</p><p>The Baikal teal has a height from 11.75 to 15.75 inches and a weighs an average of 1 pound.\n</p><p>The female looks similar to a female green-winged teal but with a longer tail, and a distinctive white spot at the base of the bill and a white throat that angles to the back of the eye. She also has a distinct light eyebrow bordered by a darker crown. The underwing is similar to the Green-winged Teal also, but has a darker leading edge.  The green speculum has an indistinct cinnamon-buff inner border. Some \"females\" have \"bridle\" markings on their faces, but it has been suggested that at least some of these bridled \"females,\" if not all, are in fact juvenile males. The juvenile has a plumage similar to that of the female and can be distinguished from the Common Teal by the pale loral spot.\n</p><p>In non-breeding (eclipse) plumage, the drake looks more like the female, but plumage is a much richer reddish-brown (rufous) colour.\n</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>It breeds within the forest zone of eastern Siberia from the Yenisey basin eastwards to Kamchatka, northern Koryak, eastern Magadan Oblast, northern Khabarovsk Krai, southeastern and northern Sakha east central Irkutsk Oblast, and northern Krasnoyarsk Krai. It is a migratory species, wintering in South Korea, Japan, Taiwan, northern and eastern China, from Beijing down the coast to the Vietnam border, and west to Yunnan then north to Chongqing and Henan.</p><p>It breeds in pools on the tundra edge and within swampy forests. In winter it is found on lowland fresh waters.\n</p>\n<h2><span id=\"Status\">Status</span></h2>\n<p>This species is classified as Least Concern on the IUCN Red List, though it was classified as Vulnerable before 2011 due to hunting and destruction of its wintering wetland habitats. These threats remain, but the Baikal teal is recovering, with increased numbers of wintering birds and some increase in habitat area. Based on the numbers of Baikal teal counted wintering in South Korea, the global population is estimated to be around 1.07\u00a0million individual adults around 2010, a major increase from the tens of thousands counted in the 1980s and few hundreds of thousands in the 2000s.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 235px\">\n\t\t<li class=\"gallerybox\" style=\"width: 235px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Images and movies of the Baikal teal <i>(Anas formosa)</i> on ARKive</li>\n<li>Baikal Teal from the Internet Bird Collection</li></ul> "
    },
    "baillon s crake": {
        "id": "b004",
        "name": "Baillon's Crake",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p><b>Baillon's crake</b> (<i>Porzana pusilla</i>) or the <b>marsh crake</b>, is a small waterbird of the family Rallidae.\n</p>\n\n\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>Their breeding habitat is sedge beds in Europe, mainly in the east, and across the Palearctic. They used to breed in Great Britain up to the mid-19th century, but the western European population declined through drainage. There has been a recovery in north-western Europe in recent years, with the recolonisation of Germany and the Netherlands, and breeding suspected in Britain; an Irish record in 2012 was the first there since the 1850s. They nest in a dry location in wet sedge bogs, laying 4\u20138 eggs. This species is migratory, wintering in east Africa and south Asia.\n</p><p>It is also a resident breeder in Africa and Australasia. There is a single North American record of this species on Attu Island in September 2000.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>They are 16\u201318\u00a0cm (6.3\u20137.1\u00a0in) in length, and are similar to the only slightly larger little crake. Baillon's crake has a short straight bill, yellow or green without a red base. Adults have mainly brown upperparts with some white markings, and a blue-grey face and underparts. The rear flanks are barred black and white. They have green legs with long toes, and a short tail which is barred underneath.\n</p><p>Immature Baillon's crakes are similar to the adults, but have extensively barred underparts. The downy chicks are black, as with all rails.\n</p>\n\n<h2><span id=\"Behaviour\">Behaviour</span></h2>\n\n<p>These birds probe with their bill in mud or shallow water, also picking up food by sight. They mainly eat insects and aquatic animals.\n</p><p>Baillon's crakes are very secretive in the breeding season, and are then mostly heard rather than seen. They are then noisy birds, with a rattling call like that of the edible frog, or perhaps garganey. They can be easier to see on migration or when wintering.\n</p>\n<h2><span id=\"Taxonomy_and_nomenclature\">Taxonomy and nomenclature</span></h2>\n<p>This bird is named after French naturalist Louis Antoine Francois Baillon. The names <b>marsh crake</b> and <b>tiny crake</b> have previously been used to refer to this species. The genus name <i>Porzana</i> is derived from Venetian terms for small rails, and <i>pusillus</i> is Latin for \"very small\".</p>\n<h2><span id=\"Status\">Status</span></h2>\n<h3><span id=\"International\">International</span></h3>\n<p>The Baillon's crake is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.\n</p>\n<h3><span id=\"Australia\">Australia</span></h3>\n<p>Baillon's crakes are not listed as threatened on the Australian Environment Protection and Biodiversity Conservation Act 1999. However, their conservation status varies from state to state within Australia. For example:\n</p>\n<ul><li>The Baillon's crake is listed as threatened on the Victorian Flora and Fauna Guarantee Act (1988). Under this Act, an <i>Action Statement</i> for the recovery and future management of this species has not yet been prepared.</li>\n<li>On the 2007 advisory list of threatened vertebrate fauna in Victoria, the Baillon's crake is listed as vulnerable.</li></ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Baillon's crake species text in The Atlas of Southern African Birds</li>\n<li>BirdLife species factsheet for <i>Zapornia pusilla</i></li>\n<li><cite class=\"citation web\">\"Zapornia pusilla\". <i>Avibase</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Avibase&amp;rft.atitle=Zapornia+pusilla&amp;rft_id=https%3A%2F%2Favibase.bsc-eoc.org%2Fspecies.jsp%3Flang%3DEN%26avibaseid%3D&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaillon%27s+crake\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"> </li>\n<li><cite class=\"citation web\">\"Baillon's crake media\". <i>Internet Bird Collection</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Internet+Bird+Collection&amp;rft.atitle=Baillon%26%2339%3Bs+crake+media&amp;rft_id=http%3A%2F%2Fwww.hbw.com%2Fibc%2Fspecies%2Fbaillons-crake-porzana-pusilla&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABaillon%27s+crake\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Baillon's crake photo gallery at VIREO (Drexel University)</li>\n<li>Interactive range map of <i>Zapornia pusilla</i> at IUCN Red List maps</li>\n<li>Audio recordings of Baillon's crake on Xeno-canto.</li></ul> "
    },
    "banded bay cuckoo": {
        "id": "b005",
        "name": "Banded Bay Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>banded bay cuckoo</b> or <b>bay-banded cuckoo</b> (<i>Cacomantis sonneratii</i>) is a species of small cuckoo found in the Indian subcontinent and Southeast Asia. Like others in the genus they have a round nostril. They are usually founded in well wooded areas mainly in the lower hills. Males sing from exposed branches during the breeding season, which can vary with region. They are distinctive both in their calls as well as plumage with a white eyebrowed appearance and the rufous upperparts with regular dark bands and the whitish underside with fine striations.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The adults are bright rufous or bay on the head and back and are broadly barred with dark brown. The bill is long and slightly curved. A whitish supercilium is distinctive above a dark eye-line. The wing is darker and tail is graduated with a dark brown centre. The tail has a subterminal black band and white tips to the feathers. The sexes are alike. The iris is yellow and the bill is black while the base of the lower mandible is greenish grey. The tarsi are grey. The juvenile is similar but has a pale lower mandible and white fringes to the feathers of the upper body.</p><p>The overall length is about 22\u00a0cm making it about the same size as the syntopic <i>Cacomantis merulinus</i> and <i>Cacomantis variolosus</i>. The hepatic forms of those can be similar but supercilium, long beak and barred tail distinguish this species.</p>\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n<p>The species was originally classed in the genus <i>Cuculus</i> by John Latham. The type specimen came from Northeastern India. The species epithet is after the French naturalist and explorer Pierre Sonnerat.</p><p>Four subspecies are generally recognized:\n</p>\n<ul><li>the nominate form from India, Nepal, Thailand, Malay Peninsula</li>\n<li><i>C. s. musicus</i> Ljungh, 1804 (from Java, Bali)</li>\n<li><i>C. s. fasciolatus</i> M\u00fcller, 1843 (Sumatra)</li>\n<li><i>C. s. waiti</i> Baker, 1919 (Sri Lanka)</li></ul><p>Some sources also recognize <i>malayanus</i> (Chasen &amp; Kloss, 1931) from Peninsular Malaysia and <i>schlegeli</i> (Junge, 1948) from Sumatra, Borneo and Palawan (SW Philippines).\n</p>\n<h2><span id=\"Ecology_and_behaviour\">Ecology and behaviour</span></h2>\n<p>Like many other cuckoos, they are brood-parasitic and hosts recorded include the common iora, red-whiskered bulbul, white-bellied erpornis, scarlet minivet, bulbuls and small babblers (<i>Stachyris</i> spp.). The eggs resemble those of the hosts. The incubation and nesting are not well documented. Fledglings of the host are evicted.</p><p>Populations are often migratory or partially migratory. In India, they are found mainly during the monsoons.</p><p>They are found in well-wooded forests, mainly in hill areas. Insects are their primary diet. They capture insects by gleaning as well as by aerial sallying.</p><p>The breeding season varies widely from region to region. Near Bombay they are known to lay eggs from February to August, Assam from April to August while they seem to sing through much of the year in the Eastern Ghats. In Sri Lanka, young have been seen in June and October while adults sing from January to May in the Malay Peninsula.</p><p>The call of this species is distinctive. It is high-pitched four note whistle that has been transcribed as \"wee-ti wee-tee\" or \"smoke-yer-pepper\". The frequency starts at 2.4\u00a0kHz and each note falls in pitch with the strophe lasting a second.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Internet Bird Collection</li>\n<li>Calls from Xeno-Canto</li></ul>"
    },
    "bank myna": {
        "id": "b006",
        "name": "Bank Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n<p><b>Bank myna</b> (<i>Acridotheres ginginianus</i>) is a myna found in northern parts of South Asia. It is smaller but similar in colouration to the common myna but differs in having a brick red bare skin behind the eye in place of yellow. It is greyer on the underside and in this and in the presence of a slight tuft of feathers bears some resemblance to the jungle myna. They are found in flocks on the plains of northern and central India, often within towns and cities. Their range appears to be extending southwards in India. The name is derived from their habit of nesting almost exclusively in the earthen banks of rivers where they excavate holes and breed in large colonies.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The head is black on the crown and sides and the upper plumage is slaty grey while the underside is lighter grey with pale pink plumage towards the centre of the abdomen. The wing is black but has a wing patch at the base of the primaries and the tips of the outer tail feathers are pale pinkish buff. The naked skin behind the eye is brick red, the legs are yellow while the iris is deep red. The sexes are indistinguishable in the field. Young birds have a browner head and neck.</p><p>The species is evolutionarily closest to the common myna.</p>\n<h2><span id=\"Habitat_and_distribution\">Habitat and distribution</span></h2>\n<p>The native range of the bank myna is almost restricted to the Indian subcontinent from the Indus valley in the West, to the Gangetic delta in the East and south of the lower foothills of the Himalayas, only rarely being found in sheltered valleys. They are found mainly in the vicinity of open water and their usual habitat is cultivated farmland and open country but flocks will often live within cities, in markets and railway stations. They make use of food scrap disposed by humans, even following catering vehicles at airports to standing aircraft.</p>\n\n<p>The distribution was formerly noted to be restricted north roughly of a line between Bombay and Balasore in Orissa, but the species may be expanding its range. They are also common in Pakistan in the districts of Sind and Punjab. A specimen from Kandahar was earlier considered the westernmost record a vagrant, but the birds have since established in the region. Although mainly resident, they make movements in response to food and weather. The species name of the bird is based on the name given by Latham from a description by Pierre Sonnerat who described <i>Le petit Martin de Gingi</i> in 1782, referring to Gingee near Pondicherry in southern India. Thomas C. Jerdon noted in 1863 that the species did not occur in southern India however the species was recorded in the region in 1914 at Vandalur near Madras. Records from further south in India are however increasing. Breeding colonies have been found in Assam.</p><p>These mynas have been introduced into Kuwait, where they have established in the wild. Flocks have also been found in the Maldives, Taiwan and Japan.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<p>Bank mynas are gregarious foraging in flocks, breeding colonially and roosting together in trees. They perch on livestock and live in crowded towns allowing close approach, often picking up scraps in markets and dumps. They are vociferous and use a wide range of calls that include clucks, croaks, screeches, whistles and warbling elements.</p><p>Bank mynas feed on grain, insects and fruits. Like the common myna, they sometimes follow grazing animals picking up disturbed insects or even ticks on the animals. They feed on ripening crops such as those of sorghum, grape and pearl millet. They feed on a variety of insects, including some that are crop pests such as <i>Achaea janata</i> whose caterpillars feed on castor.</p>\n\n<p>Bank mynas have a nesting season from April to July or August, most birds breeding in May and June. The nest is always built in earth walls, on the banks of rivers, embankments or the sides of open wells. They will sometimes make use of holes in brick walls. Nests have also been recorded between stacked bales of sugarcane stalks. They excavate the nest hole, the egg chamber sometimes 4 to 7 feet from the entrance. The nest is lined with grass, feathers and sometimes snake sloughs. About four of five pale sky blue or greenish-blue eggs is the usual clutch. Two broods may be raised in the same season. The eggs hatch after about 13 to 14 days. Nestlings open their eyes after about 5 days and fledge in about 21 days. About 38% of the eggs hatched into young that fledged in one study.</p><p>A species of coccidian parasite, <i>Isospora ginginiana</i>, and several species nematode (<i>Oxyspirura</i>, <i>Choanotaenia</i>, <i>Hymenolepis</i> sp.) have been described from the species.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"Other_sources\">Other sources</span></h2>\n\n<ul><li><cite id=\"CITEREFDhindsa,_MS1980\" class=\"citation journal\">Dhindsa, MS (1980). \"Bank Myna <i>Acridotheres ginginianus</i> (Latham): A good predator of House-Flies, <i>Musca domestica</i> L.\". <i>Science &amp; Culture</i>. <b>46</b> (8): 294.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Science+%26+Culture&amp;rft.atitle=Bank+Myna+Acridotheres+ginginianus+%28Latham%29%3A+A+good+predator+of+House-Flies%2C+Musca+domestica+L.&amp;rft.volume=46&amp;rft.issue=8&amp;rft.pages=294&amp;rft.date=1980&amp;rft.au=Dhindsa%2C+MS&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFFawcus,_LR1943\" class=\"citation journal\">Fawcus, LR (1943). \"Note on the distribution of the Bank Myna in Eastern Bengal\". <i>Jour. Bengal Nat. Hist. Soc</i>. <b>17</b> (4): 119.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Jour.+Bengal+Nat.+Hist.+Soc.&amp;rft.atitle=Note+on+the+distribution+of+the+Bank+Myna+in+Eastern+Bengal&amp;rft.volume=17&amp;rft.issue=4&amp;rft.pages=119&amp;rft.date=1943&amp;rft.au=Fawcus%2C+LR&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFJior,_RSDhindsa,_Manjit_SToor,_HS1995\" class=\"citation journal\">Jior, RS; Dhindsa, Manjit S; Toor, HS (1995). \"Nests and nest contents of the Bank Myna <i>Acridotheres ginginianus</i>\". <i>Tigerpaper</i>. <b>22</b> (1): 25\u201328.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Tigerpaper&amp;rft.atitle=Nests+and+nest+contents+of+the+Bank+Myna+Acridotheres+ginginianus&amp;rft.volume=22&amp;rft.issue=1&amp;rft.pages=25-28&amp;rft.date=1995&amp;rft.au=Jior%2C+RS&amp;rft.au=Dhindsa%2C+Manjit+S&amp;rft.au=Toor%2C+HS&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFKhera,_SKalsi,RS1986\" class=\"citation journal\">Khera, S; Kalsi,RS (1986). \"Diurnal time budgets of the Bank Myna, <i>Acridotheres ginginianus</i> (Sturnidae) during prelaying, laying and incubation periods\". <i>Pavo</i>. <b>24</b> (1&amp;2): 25\u201332.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=Diurnal+time+budgets+of+the+Bank+Myna%2C+Acridotheres+ginginianus+%28Sturnidae%29+during+prelaying%2C+laying+and+incubation+periods&amp;rft.volume=24&amp;rft.issue=1%262&amp;rft.pages=25-32&amp;rft.date=1986&amp;rft.au=Khera%2C+S&amp;rft.au=Kalsi%2CRS&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFS_KheraR_S_Kalsi1986\" class=\"citation journal\">S Khera; R S Kalsi (1986). \"Waking and roosting behaviour of the Bank Myna, <i>Acridotheres ginginianus</i>, in Chandigarh and surrounding areas\". <i>Pavo</i>. <b>24</b> (1&amp;2): 55\u201368.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=Waking+and+roosting+behaviour+of+the+Bank+Myna%2C+Acridotheres+ginginianus%2C+in+Chandigarh+and+surrounding+areas&amp;rft.volume=24&amp;rft.issue=1%262&amp;rft.pages=55-68&amp;rft.date=1986&amp;rft.au=S+Khera&amp;rft.au=R+S+Kalsi&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFParasara,_UAParasharya,_BMYadav,DN1991\" class=\"citation journal\">Parasara, UA; Parasharya, BM; Yadav,DN (1991). \"Studies on the nestling food of the Bank Myna <i>Acridotheres ginginianus</i> (Latham)\". <i>Pavo</i>. <b>28</b> (1&amp;2): 37\u201342.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=Studies+on+the+nestling+food+of+the+Bank+Myna+Acridotheres+ginginianus+%28Latham%29&amp;rft.volume=28&amp;rft.issue=1%262&amp;rft.pages=37-42&amp;rft.date=1991&amp;rft.au=Parasara%2C+UA&amp;rft.au=Parasharya%2C+BM&amp;rft.au=Yadav%2CDN&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite id=\"CITEREFParasharya,_BMDodia,_JFMathew,_KLYadav,_DN1996\" class=\"citation journal\">Parasharya, BM; Dodia, JF; Mathew, KL; Yadav, DN (1996). \"The role of birds in the natural regulation of <i>Helicoverpa armigera</i> Hubner in wheat\". <i>Pavo</i>. <b>34</b> (1&amp;2): 33\u201338.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pavo&amp;rft.atitle=The+role+of+birds+in+the+natural+regulation+of+Helicoverpa+armigera+Hubner+in+wheat&amp;rft.volume=34&amp;rft.issue=1%262&amp;rft.pages=33-38&amp;rft.date=1996&amp;rft.au=Parasharya%2C+BM&amp;rft.au=Dodia%2C+JF&amp;rft.au=Mathew%2C+KL&amp;rft.au=Yadav%2C+DN&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABank+myna\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li></ul> "
    },
    "bar headed goose": {
        "id": "b007",
        "name": "Bar-headed Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-headed goose</b> (<i>Anser indicus</i>) is a goose that breeds in Central Asia in colonies of thousands near mountain lakes and winters in South Asia, as far south as peninsular India. It lays three to eight eggs at a time in a ground nest. It is known for the extreme altitudes it reaches when migrating across the Himalayas.\n</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The grey goose genus <i>Anser</i> has no other member indigenous to the Indian region, nor any at all to the Ethiopian, Australian, or Neotropical regions. Ludwig Reichenbach placed the bar-headed goose in the monotypic genus <i>Eulabeia</i> in 1852, though John Boyd's taxonomy treats both <i>Eulabeia</i> and the genus <i>Chen</i> as subgenera of <i>Anser</i>.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The bird is pale grey and is easily distinguished from any of the other grey geese of the genus <i>Anser</i> by the black bars on its head. It is also much paler than the other geese in this genus. In flight, its call is a typical goose honking. A mid-sized goose, it measures 71\u201376\u00a0cm (28\u201330\u00a0in) in total length and weighs 1.87\u20133.2\u00a0kg (4.1\u20137.1\u00a0lb).\n</p>\n<h2><span id=\"Ecology\">Ecology</span></h2>\n\n\n<p>The summer habitat is high-altitude lakes where the bird grazes on short grass. The species has been reported as migrating south from Tibet, Kazakhstan, Mongolia and Russia before crossing the Himalaya. The bird has come to the attention of medical science in recent years as having been an early victim of the H5N1 virus, HPAI (highly pathogenic avian influenza), at Qinghai. It suffers predation from crows, foxes, ravens, sea eagles, gulls and others. The total population may, however, be increasing, but it is complex to assess population trends, as this species occurs over more than 2,500,000\u00a0km<sup>2</sup> (970,000\u00a0sq\u00a0mi).</p><p>\nThe bar-headed goose is one of the world's highest-flying birds, having been heard flying across Mount Makalu\u00a0\u2013 the fifth highest mountain on earth at 8,481\u00a0m (27,825\u00a0ft)\u00a0\u2013 and apparently seen over Mount Everest\u00a0\u2013 8,848\u00a0m (29,029\u00a0ft)\u00a0\u2013 although this is a second-hand report with no verification. This demanding migration has long puzzled physiologists and naturalists: \"there must be a good explanation for why the birds fly to the extreme altitudes... particularly since there are passes through the Himalaya at lower altitudes, and which are used by other migrating bird species.\" In fact, bar-headed geese had for a long time not been directly tracked (using GPS or satellite logging technology) flying higher than 6,540 metres (21,460\u00a0ft), and it is now believed that they do take the high passes through the mountains. The challenging northward migration from lowland India to breed in the summer on the Tibetan Plateau is undertaken in stages, with the flight across the Himalaya (from sea-level) being undertaken non-stop in as little as seven hours. Surprisingly, despite predictable tail winds that blow up the Himalayas (in the same direction of travel as the geese), bar-headed geese spurn these winds, waiting for them to die down overnight, when they then undertake the greatest rates of climbing flight ever recorded for a bird, and sustain these climbs rates for hours on end, according to research published in 2011.</p><p>The 2011 study found the geese peaking at an altitude of around 6,400\u00a0m (21,000\u00a0ft). In a 2012 study that tagged 91 geese and tracked their migration routes, it was determined that the geese spent 95% of their time below 5,784\u00a0m (18,976\u00a0ft), choosing to take a longer route through the Himalayas in order to utilize lower-altitude valleys and passes. Only 10 of the tagged geese were ever recorded above this altitude, and only one exceeded 6,500\u00a0m (21,300\u00a0ft), reaching 7,290\u00a0m (23,920\u00a0ft). All but one of these high-altitude flights were recorded at night, which along with the early morning, is the most common time of day for geese migration. The colder denser air during these times may be equivalent to an altitude hundreds of meters lower. It is suspected by the authors of these two studies that tales of the geese flying at 8,000\u00a0m (26,000\u00a0ft) are apocryphal. Bar headed geese have been observed flying at 23,000\u00a0ft.</p><p>The bar-headed goose migrates over the Himalayas to spend the winter in parts of South Asia (from Assam to as far south as Tamil Nadu. The modern winter habitat of the species is cultivated fields, where it feeds on barley, rice and wheat, and may damage crops. Birds from Kyrgyzstan have been seen to stopover in western Tibet and southern Tajikistan for 20 to 30 days before migrating farther south. Some birds may show high wintering site fidelity.</p>\n\n<p>They nest mainly on the Tibetan Plateau. Intraspecific brood parasitism is noticed with lower rank females attempting to lay their eggs in the nests of higher ranking females.</p><p>The bar-headed goose is often kept in captivity, as it is considered beautiful and breeds readily. Records in Great Britain are frequent, and almost certainly relate to escapes. However, the species has bred on several occasions in recent years, and around five pairs were recorded in 2002, the most recent available report of the Rare Birds Breeding Panel. It is possible that, owing to a combination of frequent migration, accidental escapes and deliberate introduction, the species is becoming gradually more established in Great Britain. The bird is sociable and causes no problems for other birds. The feral population is believed to be declining in Great Britain due to over-hunting.</p><p>The bar-headed goose has escaped or been deliberately released to Florida, USA, but there is no evidence that the population is breeding and may only persist due to continuing releases or escapes..[2]\n</p>\n<h2><span id=\"Physiology_and_morphology\">Physiology and morphology</span></h2>\n\n<p>The main physiological challenge of bar-headed geese is extracting oxygen from hypoxic air and transporting it to aerobic muscle fibres in order to sustain flight at high altitudes. Flight is very metabolically costly at high-altitudes because birds need to flap harder in thin air to generate lift. Studies have found that bar-headed geese breathe more deeply and efficiently under low-oxygen conditions, which serves to increase oxygen uptake from the environment. The haemoglobin of their blood has a higher affinity for oxygen than that of low-altitude geese, which has been attributed to a single amino acid point mutation. This mutation causes a conformational shift in the haemoglobin molecule from the low-oxygen to the high-oxygen affinity form. The left-ventricle of the heart, which is responsible for pumping oxygenated blood to the body via systemic circulation, has significantly more capillaries in bar-headed geese than in lowland birds, maintaining oxygenation of cardiac muscle cells and thereby cardiac output. Compared to lowland birds, mitochondria (the main site of oxygen consumption) in the flight muscle of bar-headed geese are significantly closer to the sarcolemma, decreasing the intracellular diffusion distance of oxygen from the capillaries to the mitochondria.\n</p><p>Bar-headed geese have a slightly larger wing area for their weight than other geese, which is believed to help them fly at high altitudes. While this decreases the power output required for flight in thin air, birds at high altitude still need to flap harder than lowland birds.</p>\n<h2><span id=\"Cultural_depiction\">Cultural depiction</span></h2>\n<p>The bar-headed goose has been suggested as being the model for the Hamsa of Indian mythology. Another interpretation suggests that the bar-headed goose is likely to be the <i>Kadamb</i> in ancient and medieval Sanskrit literature, whereas <i>Hamsa</i> generally refers to the swan.</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"See_also\">See also</span></h2>\n<ul><li>Tsomoriri Wetland Conservation Reserve</li></ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Hawkes et al. (2011) The Trans-Himalayan flights of bar-headed geese (Anser indicus)</li></ul> "
    },
    "bar tailed treecreper": {
        "id": "b008",
        "name": "Bar-tailed Treecreeper",
        "order": order.PASSERIFORMES,
        "family": familyname.Certhiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-tailed treecreeper</b> (<i>Certhia himalayana</i>), or the <b>Himalayan treecreeper</b> is a species of bird in the family Certhiidae.  It is found primarily in the northern parts of the Indian subcontinent, particularly in the Himalayas, as well as in adjoining regions.  It is found in Afghanistan, India, Iran, Kazakhstan, Burma, Nepal, Tibet, Russia, Tajikistan, Turkmenistan, and Uzbekistan.\nIts natural habitats are boreal forests and temperate forests.\n</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The bar-tailed treecreeper has a flecked or striped feather pattern, usually in black, brown, white and red hues. This coloration allows the treecreeper to blend in with its forest surroundings quite well.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "bar throated minla": {
        "id": "b009",
        "name": "Bar-throared Minla",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-throated minla</b> or <b>chestnut-tailed minla</b> (<i>Actinodura strigula</i>), or even <b>bar-throated siva</b>, is a species of bird in the laughingthrush and babbler family Leiothrichidae. Traditionally, it has been placed in the genus <i>Minla</i> but is now placed in <i>Actinodura</i>.\n</p><p>The species is found in montane forest from India to Malaysia.\n</p><p>Eight subspecies have been described, of which six are widely accepted. The nominate subspecies, <i>Chrysominla strigula strigula</i>, is found from central Nepal through India, southern China and Bhutan. <i>C. s. simlaensis</i> is found in northern India and western Nepal, <i>C. s. yunnanensis</i> is found in north-eastern India, southern China, northern Burma, Laos and Vietnam, <i>C. s. castanicauda</i> is found in southern Burma and western and northern Thailand, <i>C. s. malayana</i> is found in Peninsular Malaysia and <i>C. s. traii</i> is restricted to central Vietnam.</p><p>The bar-throated minla occupies a range of montane forest habitats from 1,800\u20133,750\u00a0m (5,910\u201312,300\u00a0ft). The species is mainly resident but may move to lower altitudes during harsh winters, coming as low as 1,300\u00a0m (4,300\u00a0ft). Among the forest types in may occur in are evergreen broadleaf forest, mixed broadleaf and evergreen forest, pine forest, pine or oak and rhododendron forest, rhododendron or bamboo stands.</p><p>The diet of the bar-throated minla varies by season; during the summer months it is almost exclusively insectivorous, taking beetles, caterpillars and other insects. In the winter months it will also take berries, seeds, and nectar. It will join flocks of other babblers and yuhinas in the non-breeding season, and feeds from the canopy down to near the forest floor.  Two to four eggs are laid in a cup of grass, bamboo leaves, lichen and birch bark.</p>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 235px\">\n\t\t<li class=\"gallerybox\" style=\"width: 235px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li> Media related to <span>Actinodura strigula</span> at Wikimedia Commons</li></ul>"
    },
    "bar winged flycatcher shrike": {
        "id": "b010",
        "name": "Bar-winged Flycatcher-shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Vangidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bar-winged flycatcher-shrike</b> (<i>Hemipus picatus</i>) is a small passerine bird usually placed in the Vangidae. It is found in the forests of tropical southern Asia from the Himalayas and hills of southern India to Indonesia. Mainly insectivorous it is found hunting in the mid-canopy of forests, often joining mixed-species foraging flocks. They perch upright and have a distinctive pattern of black and white, males being more shiny black than the females. In some populations the colour of the back is brownish while others have a dark wash on the underside.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>The bar-winged flycatcher-shrike is black capped with black wings that contrast with the white of the body. A white slash across the wing and a white rump stand out in contrast. They sit upright on branches, flying around to glean insects. The nostril is hidden by hairs and the upper mandible of the beak has a curved tip. Males are velvety black while females tend to be greyish brown but the pattern varies across the geographic populations. Both males and females of the Himalayan <i>H. p. capitalis</i> have a brown back but the males have a black head. The Sri Lankan population <i>leggei</i> lacks sexual dimorphism in plumage. <i>H. p. intermedius</i> has only the females with a brownish back. The tail is black but the outer tail feathers are white while the non-central tail feathers are tipped with white.</p><p>The call is a rapid and high <i>tsit-it-it-it</i> or a <i>whriri-whirriri-whirriri</i> and sometimes a sharp <i>chip</i>. Male-female pairs of the subspecies <i>leggei</i> of Sri Lanka have been reported to duet with precision.</p><p>Young birds are said to have a broken pattern of white and grey giving the appearance of lichens.</p><p>The exact systematic family position is unclear but the genus <i>Hemipus</i> has been found to be closely related to the genus <i>Tephrodornis</i> and show affinities to the Malaconotidae of Africa.</p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n\n<p>The nominate race is found mainly in the Western Ghats of India but becoming very rare towards the Surat Dangs. They are also found in some parts of central and eastern India, extending into Bangladesh. The subspecies <i>capitalis</i> is found along the Himalayas from Simla, east to Manipur and Chittagong in India and extending into northern Thailand, Myanmar and Laos.</p><p>Subspecies <i>leggei</i> of Sri Lanka (southern Western Ghats populations included in older works) has the sexes indistinguishable. It is found in the hill forests of Sri Lanka.</p><p>Subspecies <i>intermedius</i> is found in Southeast Asia in Sumatra, Borneo, and parts of the Malay Peninsula. The brownish grey wash on the breast of females is darker, contrasting with the white of the abdomens. The back is darker brown than in other subspecies. The males also have darker breasts.</p><p>Other subspecies that have been described such as Walter Koelz's <i>pileatus</i> (described from the Lushai Hills) and <i>insulae</i> (from Sri Lanka) are not considered valid.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n\n<p>This bird catches insects by gleaning foliage and making aerial sallies for flushed insects. It will associate with other small birds such as babblers, velvet-fronted nuthatch and white-eyes in feeding flocks. They move through the forest and rarely stick to a particular location.</p><p>The nesting season in Sri Lanka is mainly from February to August, March to May in India. The nest is a neat cup with rim held stiff by cobwebs binding it and the inside is lined with fine grass and fibre. Lichens cover the surface of the nest cup which is placed on the horizontal surface of a dry branch, often close to the tip of a dead branch or on a leafless tree making it appear like a knot in the wood. The usual clutch is 2 or 3 eggs which are pale greenish white and blotched with black and grey. The bird sitting at the nest appears as if it is casually perched. Both males and females incubate. The chicks at nest stay still with eyes closed and face the center of the nest while holding their bills high giving the appearance of a broken branch.</p><p>They have been said to be sensitive to forest degradation but some studies note that they are less sensitive and capable of persisting even in considerably disturbed forests.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Photographs and videos</li>\n<li>Calls</li></ul> "
    },
    "barn swallow": {
        "id": "b011",
        "name": "Barn Swallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n\n\n\n</p>\n<p>The <b>barn swallow</b> (<i>Hirundo rustica</i>) is the most widespread species of swallow in the world. It is a distinctive passerine bird with blue upperparts and a long, deeply forked tail. It is found in Europe, Asia, Africa and the Americas. In Anglophone Europe it is just called the <b>swallow</b>; in Northern Europe it is the only common species called a \"swallow\" rather than a \"martin\".</p><p>There are six subspecies of barn swallow, which breed across the Northern Hemisphere. Four are strongly migratory, and their wintering grounds cover much of the Southern Hemisphere as far south as central Argentina, the Cape Province of South Africa, and northern Australia. Its huge range means that the barn swallow is not endangered, although there may be local population declines due to specific threats.\n</p><p>The barn swallow is a bird of open country that normally uses man-made structures to breed and consequently has spread with human expansion. It builds a cup nest from mud pellets in barns or similar structures and feeds on insects caught in flight. This species lives in close association with humans, and its insect-eating habits mean that it is tolerated by humans; this acceptance was reinforced in the past by superstitions regarding the bird and its nest. There are frequent cultural references to the barn swallow in literary and religious works due to both its living in close proximity to humans and its annual migration. The barn swallow is the national bird of Austria and Estonia.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>The adult male barn swallow of the nominate subspecies <i>H. r. rustica</i> is 17\u201319\u00a0cm (6.7\u20137.5\u00a0in) long including 2\u20137\u00a0cm (0.79\u20132.76\u00a0in) of elongated outer tail feathers. It has a wingspan of 32\u201334.5\u00a0cm (12.6\u201313.6\u00a0in) and weighs 16\u201322\u00a0g (0.56\u20130.78\u00a0oz). It has steel blue upperparts and a rufous forehead, chin and throat, which are separated from the off-white underparts by a broad dark blue breast band. The outer tail feathers are elongated, giving the distinctive deeply forked \"swallow tail\". There is a line of white spots across the outer end of the upper tail. The female is similar in appearance to the male, but the tail streamers are shorter, the blue of the upperparts and breast band is less glossy, and the underparts paler. The juvenile is browner and has a paler rufous face and whiter underparts. It also lacks the long tail streamers of the adult.</p><p>The song of the male barn swallow is a cheerful warble, often ending with <i>su-seer</i> with the second note higher than the first but falling in pitch. Calls include <i>witt</i> or <i>witt-witt</i> and a loud <i>splee-plink</i> when excited (or trying to chase intruders away from the nest). The alarm calls include a sharp <i>siflitt</i> for predators like cats and a <i>flitt-flitt</i> for birds of prey like the hobby. This species is fairly quiet on the wintering grounds.</p><p>The distinctive combination of a red face and blue breast band render the adult barn swallow easy to distinguish from the African <i>Hirundo</i> species and from the welcome swallow (<i>Hirundo neoxena</i>) with which its range overlaps in Australasia. In Africa the short tail streamers of the juvenile barn swallow invite confusion with juvenile red-chested swallow (<i>Hirundo lucida</i>), but the latter has a narrower breast band and more white in the tail.</p>"
    },
    "barred buttonquail": {
        "id": "b012",
        "name": "Barred Buttonquail",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n\n<p>The <b>barred buttonquail</b> or <b>common bustard-quail</b> (<i>Turnix suscitator</i>) is a buttonquail, one of a small family of birds which resemble, but are unrelated to, the true quails. This species is resident from India across tropical Asia to south China, Indonesia and the Philippines.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n\n\n<p>A typical little buttonquail, rufous-brown above, rusty and buff below. Chin, throat and breast closely barred with black. Female larger and more richly coloured, with throat and middle of breast black. The blue-grey bill and legs, and yellowish white eyes are diagnostic, as are also the pale buff shoulder-patches on the wings when in flight. Absence of hind toe distinguishes Bustard and Button quails from true quails. Pairs, in scrub and grassland. The calls are a motorcycle-like <i>drr-r-r-r-r-r</i> and a loud <i>hoon- hoon-hoon</i>.</p>\n<h2><span id=\"Distribution\">Distribution</span></h2>\n<p>The species occurs throughout India up to elevations of about 2500 m in the Himalayas, Sri Lanka, Bangladesh, Burma, Indonesia, the  Philippines and most of Southeast Asia.\nThere are four geographical races that differ somewhat in colour.</p><p>Within South Asia, it is known by many local names: Sansorai (Assam); Daoduma (Cachar); lnruibuma (Kacha Naga); Vohbubum (Kuki); Simokpho (Lepcha); linisk (Bhutea); Gulu, Gundra, Gundlu, Salui gundra (Hindi); Gulu (Bengal); Kalada - male, Pured - female (Telugu); Ankadik - male, Kurung kadik - female (Tamil); Durwa (Ratnagiri); Karechakki (Kannada); Bala watuwa (Sri Lanka).</p><p>Found in most habitats except dense forest and desert, in particular, scrub jungle, light deciduous forest and farmlands.\n</p><p>Widespread and common throughout its large range, the barred buttonquail is evaluated as Least Concern on the IUCN Red List of Threatened Species.\n</p>\n<h2><span id=\"Nesting\">Nesting</span></h2>\n\n<p>Differs from true quails chiefly in the female being polyandrous. The female is the brighter of the sexes, initiates courtship and builds the ground nest. She fights with other females for the possession of a cock, uttering a loud drumming drr-r-r-r-r as a challenge to rival hens and also to announce herself to a cock. Eggs when laid are left to be incubated by the cock who also tends the young, which can run as soon as they are hatched.\nThe hen goes off to acquire another husband, and perhaps yet another, and so on, evidently only one at a time.\n</p>\n<ul><li>Season: practically throughout the year, varying locally.</li>\n<li>Nest - a grass-lined scrape or depression in scrub jungle or crops, often arched over by surrounding grass. Eggs - 3 or 4, greyish white profusely speckled with reddish brown or blackish purple.</li></ul><h2><span id=\"References\">References</span></h2>\n\n<ul><li><i>Birds of India</i> by Grimmett, Inskipp and Inskipp, <link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\">ISBN\u00a00-691-04910-6</li></ul><h2><span id=\"External_links\">External links</span></h2>\n<ul><li>BirdLife Species Factsheet</li>\n<li>Barred buttonquail videos, photos &amp; sounds on the Internet Bird Collection</li></ul><p class=\"mw-empty-elt\">\n</p> "
    },
    "barred cuckoo dove": {
        "id": "b013",
        "name": "Barred Cuckoo-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>barred cuckoo-dove</b> (<i>Macropygia unchall</i>) is a bird species in the family Columbidae. It is native to South and Southeast Asia, and listed as Least Concern on the IUCN Red List.</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n\n<p>German herpetologist Johann Georg Wagler first described the barred cuckoo-dove in 1827. It has three recognized subspecies:</p>\n<ul><li><i>M. u.\u00a0tusalia</i>\u00a0<small>(Blyth, 1843)</small></li>\n<li><i>M. u.\u00a0minor</i>\u00a0<small>(Swinhoe, 1870)</small></li>\n<li><i>M. u.\u00a0unchall</i>\u00a0<small>(Wagler, 1827)</small></li></ul><h2><span id=\"Description\">Description</span></h2>\n\n<p>The barred cuckoo-dove has a buff coloured throat and forehead which becomes pinkish grey at the crown. measures 37 to 41\u00a0cm (15 to 16\u00a0in) in length, and weighs 153 to 182\u00a0g (5.4 to 6.4\u00a0oz).  Its iris is yellow or pale brown, the beak is black and short, and the feet are red. It has blackish brown upperparts. The back, mantle (between the nape and the starting of the back), rump, wing coverts, and scapulars have reddish brown fringes. The tail is blackish brown, and is heavily barred reddish brown.</p><p>It is similar to the little cuckoo-dove, but it is much larger and darker, and is black-barred on the mantle, breast, coverts, and tail.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The barred cuckoo-dove occurs from the Himalayas to Southeast Asia. It inhabits dense subtropical woodlands at altitudes of 800 to 3,000\u00a0m (2,600 to 9,800\u00a0ft) from sea level, on montane slopes. It prefers clearings and edges of old-growth forests and second growth forests.</p>\n<h2><span id=\"Behavior_and_ecology\">Behavior and ecology</span></h2>\n<p>The barred cuckoo-dove lives in small flocks.\nIt has a loud <i>kro-uum</i> or <i>u-va</i> vocalization, in which the second note is louder than the first.</p>\n<h2><span id=\"Status_and_conservation\">Status and conservation</span></h2>\n<p>Since 1998, the barred cuckoo-dove has been listed least concern on the IUCN Red List, because it has a large range\u2014more than 20,000\u00a0km<sup>2</sup>\u00a0(7,700\u00a0mi<sup>2</sup>) and the population trend is stable. Also, although its population numbers have not been determined, it is thought to comprise more than 10,000 individuals.</p>\n<h2><span id=\"Local_names\">Local names</span></h2>\n<p>The Lepcha people of Sikkim call it <i lang=\"lep\" title=\"Lepcha language text\">ka ar fo</i>.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li><cite class=\"citation web\">\"Barred cuckoo dove\" <span>(Audio)</span> (Recording). Xeno canto.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Barred+cuckoo+dove&amp;rft.pub=Xeno+canto&amp;rft_id=http%3A%2F%2Fwww.xeno-canto.org%2Fspecies%2FMacropygia-unchall&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABarred+cuckoo-dove\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li><cite class=\"citation web\">\"Barred cuckoo-dove\u2014<i>Macropygia unchall</i>\". <i>Encyclopedia of Life</i>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Encyclopedia+of+Life&amp;rft.atitle=Barred+cuckoo-dove%E2%80%94Macropygia+unchall&amp;rft_id=http%3A%2F%2Fwww.eol.org%2Fpages%2F1049781%2Foverview&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ABarred+cuckoo-dove\"></span><link rel=\"mw-deduplicated-inline-style\" href=\"mw-data:TemplateStyles:r951705291\"></li>\n<li>Oriental Bird Images: <i>Barred Cuckoo Dove</i>  Selected images</li></ul>"
    },
    "bay woodpecker": {
        "id": "b014",
        "name": "Bay Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bay woodpecker</b> (<i>Blythipicus pyrrhotis</i>) is a species of bird in the family Picidae.\n</p><p>It is found in Bangladesh, Bhutan, Cambodia, China, Hong Kong, India, Laos, Malaysia, Myanmar, Nepal, Thailand, and Vietnam. Its natural habitats are subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "bay backed shrike": {
        "id": "b015",
        "name": "Bay-backed Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bay-backed shrike</b> (<i>Lanius vittatus</i>) is a member of the bird family Laniidae, the shrikes, resident in South Asia.\n</p>\n\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>It is smallish shrike at 17\u00a0cm, maroon-brown above with a pale rump and long black tail with white edges. The underparts are white, but with buff flanks.\nThe crown and nape are grey, with a typical shrike black bandit mask through the eye. There is a small white wing patch, and the bill and legs are dark grey.</p><p>Sexes are similar, but young birds are washed-out versions of the adults.</p>\n<h2><span id=\"Habits_and_habitat\">Habits and habitat</span></h2>\n<p>The bay-backed shrike has a characteristic upright \"shrike\" attitude perched on a bush, from which it sallies after lizards, large insects, small birds and rodents.</p><p>Prey may be impaled upon a sharp point, such as a thorn. Thus secured they can be ripped with the strong hooked bill, but its feet are not suited for tearing.</p><p>It is a widespread resident breeder in Afghanistan, Pakistan, Nepal and India, and has recently been recorded from Sri Lanka. It nests in bushes in scrubby areas and cultivation, laying 3-5 eggs.</p>\n<h2><span id=\"References\">References</span></h2>\n\n<ul><li>Bay-Backed Shrike -- Bd Environment</li></ul><h2><span id=\"External_links\">External links</span></h2> "
    },
    "baya weaver": {
        "id": "b016",
        "name": "Baya Weaver",
        "order": order.PASSERIFORMES,
        "family": familyname.Ploceidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>baya weaver</b> (<i>Ploceus philippinus</i>) is a weaverbird found across the Indian Subcontinent and Southeast Asia. <span lang=\"sa\" dir=\"ltr\">Flocks</span> of these birds are found in grasslands, cultivated areas, scrub and secondary growth and they are best known for their hanging retort shaped nests woven from leaves. These nest colonies are usually found on thorny trees or palm fronds and the nests are often built near water or hanging over water where predators cannot reach easily. They are widespread and common within their range but are prone to local, seasonal movements mainly in response to rain and food availability.\n</p><p>Among the population variations, five subspecies are recognized. The nominate race <i>philippinus</i> is found through much of mainland India while <i>burmanicus</i> is found eastwards into Southeast Asia. The population in southwest India is darker above and referred to as subspecies <i>travancoreensis</i>.</p>\n\n\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>In 1760 the French zoologist Mathurin Jacques Brisson included a description of the baya weaver in his <i>Ornithologie</i> based on a specimen that he believed had been collected in Philippines. He used the French name <i>Le gros-bec des Philippines</i> and the Latin <i>Coccothraustes Philippensis</i>. Although Brisson coined Latin names, these do not conform to the binomial system and are not recognised by the International Commission on Zoological Nomenclature. When in 1766 the Swedish naturalist Carl Linnaeus updated his <i>Systema Naturae</i> for the twelfth edition, he added 240 species that had been previously described by Brisson. One of these was the baya weaver. Linnaeus included a brief description, coined the binomial name <i>Loxia philippina</i> and cited Brisson's work. It was subsequently realised that Brisson was mistaken in believing that his specimen came from the Philippines and the type locality was redesignated as Sri Lanka. This species is now placed in the genus <i>Ploceus</i> that was introduced by the French naturalist Georges Cuvier in 1816.</p><p>There are five subspecies:</p>\n<ul><li><i>P. p. philippinus</i> (Linnaeus, 1766) \u2013 Pakistan, India (except southwest and northeast), Sri Lanka and south Nepal</li>\n<li><i>P. p. travancoreensis</i> Ali &amp; Whistler, 1936 \u2013 southwest India</li>\n<li><i>P. p. burmanicus</i> Ticehurst, 1932 \u2013 Bhutan, northeast India and Bangladesh through Myanmar to southwest China</li>\n<li><i>P. p. angelorum</i> Deignan, 1956 \u2013 Thailand and south Laos</li>\n<li><i>P. p. infortunatus</i> Hartert, 1902 \u2013 south Vietnam, Malay Peninsula, Borneo and Sumatra, Java and Bali</li></ul><h2><span id=\"Description\">Description</span></h2>\n\n\n\n<p>These are sparrow-sized (15\u00a0cm) and in their non-breeding plumage, both males and females resemble female house sparrows. They have a stout conical bill and a short square tail. Non-breeding males and females look very similar: dark brown streaked fulvous buff above, plain (unstreaked) whitish fulvous below, eyebrow long and buff coloured, bill is horn coloured and no mask. Breeding males have a bright yellow crown, dark brown mask, blackish brown bill, upper parts are dark brown streaked with yellow, with a yellow breast and cream buff below.</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>Baya weavers are social and gregarious birds. They forage in flocks for seeds, both on the plants and on the ground. Flocks fly in close formations, often performing complicated manoeuvres. They are known to glean paddy and other grain in harvested fields, and occasionally damage ripening crops and are therefore sometimes considered as pests. They roost in reed-beds bordering waterbodies. They depend on wild grasses such as Guinea grass (<i>Panicum maximum</i>) as well as crops like rice for both their food (feeding on seedlings in the germination stage as well as on early stages of grain) and nesting material. They also feed on insects (including butterflies), sometimes taking small frogs, geckos and molluscs, especially to feed their young. Their seasonal movements are governed by food availability. Their calls are a continuous <i>chit-chit-...</i> sometimes ending in a wheezy <i>cheee-eee-ee</i> that is produced by males in a chorus. A lower intensity call is produced in the non-breeding season.</p><p>They are occasionally known to descend to the ground and indulge in dust bathing.</p><p>In captivity, individuals are known to form stable <i>peck orders</i>"
    },
    "bean goose": {
        "id": "b017",
        "name": "Bean Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bean goose</b> is a goose that breeds in northern Europe and Eurosiberia. It has two distinct varieties, one inhabiting taiga habitats and one inhabiting tundra. These are recognised as separate species by the American Ornithologists' Union and the IOC (taiga bean goose and tundra bean goose), but are considered a single species by other authorities, such as the British Ornithologists' Union. It is migratory and winters further south in Europe and Asia.\n</p>\n\n\n<h2><span id=\"Description\">Description</span></h2>\n<p>The length ranges from 68\u00a0to 90\u00a0cm (27\u201335\u00a0in), wingspan from 140\u00a0to 174\u00a0cm (55\u201369\u00a0in) and weight from 1.7\u20134\u00a0kg (3.7\u20138.8\u00a0lb). In the nominate subspecies, males average 3.2\u00a0kg (7.1\u00a0lb) and females average 2.84\u00a0kg (6.3\u00a0lb). The bill is black at the base and tip, with an orange band across the middle; the legs and feet are also bright orange.\n</p><p>The upper wing-coverts are dark brown, as in the white-fronted goose (<i>Anser albifrons</i>) and the lesser white-fronted goose (<i>A. erythropus</i>), but differing from these in having narrow white fringes to the feathers.\n</p><p>The voice is a loud honking, higher pitched in the smaller subspecies.\n</p><p>The closely related pink-footed goose (<i>A. brachyrhynchus</i>) has the bill short, bright pink in the middle, and the feet also pink, the upper wing-coverts being nearly of the same bluish-grey as in the greylag goose. In size and bill structure, it is very similar to <i>Anser fabalis rossicus</i>, and in the past was often treated as a sixth subspecies of bean goose.\n</p>\n<h2><span id=\"Taxonomy\">Taxonomy</span></h2>\n<p>The English and scientific names of the bean goose come from its habit in the past of grazing in bean field stubbles in winter. <i>Anser</i> is the Latin for \"goose\", and <i>fabalis</i> is derived from the Latin \n<i>faba</i>, a broad bean.</p>\n\n\n<p>There are five subspecies, with complex variation in body size and bill size and pattern; generally, size increases from north to south and from west to east. Some ornithologists (including AOU 2007) split them into two species based on breeding habitat, whether in forest bogs in the subarctic taiga, or on the arctic tundra. The taiga and tundra bean goose diverged about 2.5 million years ago and established secondary contact ca. 60,000 years ago, resulting in extensive gene flow.</p>\n<dl><dt>Taiga bean goose (<i>Anser fabalis</i> sensu stricto) (Latham, 1787)</dt></dl><ul><li><i>A. f. fabalis</i> (Latham, 1787). Scandinavia east to the Urals. Large; bill long and narrow, with broad orange band. <i>Anser fabalis fabalis</i> is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.</li>\n<li><i>A. f. johanseni</i> (Delacour, 1951). West Siberian taiga. Large; bill long and narrow, with narrow orange band.</li>\n<li><i>A. f. middendorffii</i> (Severtzov, 1873). East Siberian taiga. Very large; bill long and stout, with narrow orange band.</li></ul><dl><dt>Tundra bean goose (<i>Anser serrirostris</i>, if treated as a distinct species) (Gould, 1852)</dt></dl><ul><li><i>A. s. rossicus</i> (Buturlin, 1933). Northern Russian tundra east to the Taimyr Peninsula. Small; bill short and stubby, with narrow orange band. <i>Anser fabalis rossicus</i> is one of the species to which the <i>Agreement on the Conservation of African-Eurasian Migratory Waterbirds</i> (AEWA) applies.</li>\n<li><i>A. s. serrirostris</i> (Gould, 1852). East Siberian tundra. Large; bill long and stout, with narrow orange band.</li></ul><h2><span id=\"Distribution\">Distribution</span></h2>\n\n<p>The bean goose is a rare winter visitor to Britain. There are two regular wintering flocks of taiga bean goose, in the Yare Valley, Norfolk and the Avon Valley, Scotland. A formerly regular flock in Dumfries and Galloway no longer occurs there. The tundra bean goose has no regular wintering sites, but is found in small groups among other grey goose species \u2013 among the most regular localities are WWT Slimbridge, Gloucestershire and Holkham Marshes, Norfolk.\n</p><p>The Taiga bean geese <i>Anser fabalis fabalis</i> wintering in Europe are considered to migrate across three different flyways: Western, Central and Eastern; which has been confirmed by stable isotope analysis of their flight feathers.</p>"
    },
    "bearded vulture": {
        "id": "b018",
        "name": "Beaded Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " <p class=\"mw-empty-elt\">\n</p>\n<p>The <b>bearded vulture</b> (<i>Gypaetus barbatus</i>), also known as the <b>lammergeier</b> (or <b>lammergeyer</b>) or <b>ossifrage</b>, is a bird of prey and the only member of the genus <i>Gypaetus</i>. Traditionally considered an Old World vulture, it actually forms a minor lineage of Accipitridae together with the Egyptian vulture (<i>Neophron percnopterus</i>), its closest living relative. It is not much more closely related to the Old World vultures proper than to, for example, hawks, and differs from the former by its feathered neck. Although dissimilar, the Egyptian and bearded vulture each have a lozenge-shaped tail\u2014unusual among birds of prey.\n</p><p>The bearded vulture is the only known vertebrate whose diet consists almost exclusively (70 to 90 percent) of bone.  It lives and breeds on crags in high mountains in southern Europe, the Caucasus, Africa, the Indian subcontinent, and Tibet, laying one or two eggs in mid-winter that hatch at the beginning of spring. Populations are residents.\n</p><p>The population of this species continues to decline. Until July 2014, it was classified by the IUCN Red List of Threatened Species as being of Least Concern; it has, however, since been reassessed as Near Threatened.\n</p>\n\n\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n<p>The lammergeier is sparsely distributed across a vast, considerable range. It can be found in mountainous regions from Europe east to Siberia (Palearctic) and Africa. It is found in the Pyrenees, the Alps, the Caucasus region, the Zagros Mountains, the Alborz, the Koh-i-Baba in Bamyan, Afghanistan, the Altai Mountains, the Himalayas, Ladakh in northern India, western and central China, Israel (Where although extinct as a breeder since 1981, single young birds have been reported in 2000, 2004 and 2016 ), and the Arabian Peninsula. In Africa, it is found in the Atlas Mountains, the Ethiopian Highlands and down from Sudan to northeastern Democratic Republic of the Congo, central Kenya and northern Tanzania. An isolated population inhabits the Drakensberg of South Africa.</p><p>This species is almost entirely associated with mountains and inselbergs with plentiful cliffs, crags, precipices, canyons and gorges. They are often found near alpine pastures and meadows, montane grassland and heath, steep-sided, rocky wadis, high steppe and are occasional around forests. They seem to prefer desolate, lightly-populated areas where predators who provide many bones, such as wolves and golden eagles, have healthy populations.\n</p><p>In Ethiopia, they are now common at refuse tips on the outskirts of small villages and towns. Although they occasionally descend to 300\u2013600\u00a0m (980\u20131,970\u00a0ft), bearded vultures are rare below an elevation of 1,000\u00a0m (3,300\u00a0ft) and normally reside above 2,000\u00a0m (6,600\u00a0ft) in some parts of their range. They are typically found around or above the tree line which are often near the tops of the mountains, at up to 2,000\u00a0m (6,600\u00a0ft) in Europe, 4,500\u00a0m (14,800\u00a0ft) in Africa and 5,000\u00a0m (16,000\u00a0ft) in central Asia. In southern Armenia they have been found to breed below 1,000\u00a0m (3,300\u00a0ft) if cliff availability permits. They even have been observed living at altitudes of 7,500\u00a0m (24,600\u00a0ft) on Mount Everest and been observed flying at a height of 24,000\u00a0ft (7,300\u00a0m).</p><p>During 1970s and 1980s the population of the bearded vulture in southern Africa declined however their distribution remained constant. The bearded vulture population occupies the highlands of Lesotho, Free State, Eastern Cape and Maloti-Drakensberg mountains in KwaZulu-Natal. Adult bearded vultures utilise areas with higher altitudes, with steep slopes and sharp points and within areas that are situated closer to their nesting sites . Adult bearded vultures are more likely to fly below 200m over Lesotho. Along the Drakensberg Escarpment from the area of Golden Gate Highlands National Park south into the northern part of the Eastern Cape there was the greatest densities of bearded vultures.\n</p><p>Abundance of bearded vultures is shown for eight regions within the species' range in southern Africa. The total population of bearded vultures in southern Africa is calculated as being 408 adult birds and 224 young birds of all age classes therefore giving an estimate of about 632 birds.</p>\n<h2><span id=\"Description\">Description</span></h2>\n\n<p>This bird is 94\u2013125\u00a0cm (37\u201349\u00a0in) long with a wingspan of 2.31\u20132.83\u00a0m (7.6\u20139.3\u00a0ft). It weighs 4.5\u20137.8\u00a0kg (9.9\u201317.2\u00a0lb), with the nominate race averaging 6.21\u00a0kg (13.7\u00a0lb) and <i>G. b. meridionalis</i> of Africa averaging 5.7\u00a0kg (13\u00a0lb). In Eurasia, vultures found around the Himalayas tend to be slightly larger than those from other mountain ranges. Females are slightly larger than males. It is essentially unmistakable with other vultures or indeed other birds in flight due to its long, narrow wings, with the wing chord measuring 71.5\u201391\u00a0cm (28.1\u201335.8\u00a0in), and long, wedge-shaped tail, which measures 42.7\u201352\u00a0cm (16.8\u201320.5\u00a0in) in length. The tail is longer than the width of the wing. The tarsus is relatively small for the bird's size, at 8.8\u201310\u00a0cm (3.5\u20133.9\u00a0in). The proportions of the species have been compared to a falcon, scaled to an enormous size.</p><p>Unlike most vultures, the bearded vulture does not have a bald head. This species is relatively small headed, although its neck is powerful and thick. It has a generally elongated, slender shape, sometimes appearing bulkier due to the often hunched back of these birds. The gait on the ground is waddling and the feet are large and powerful. The adult is mostly dark gray, rusty and whitish in color. It is grey-blue to grey-black above. The creamy-coloured forehead contrasts against a black band across the eyes and lores and bristles under the chin, which form a black beard that give the species its English name. Bearded vultures are variably orange or rust of plumage on their head, breast and leg feathers but this is actually cosmetic. This colouration may come from dust-bathing, rubbing mud on its body or from drinking in mineral-rich waters. The tail feathers and wings are gray. The juvenile bird is dark black-brown over most of the body, with a buff-brown breast and takes five years to reach full maturity. The bearded vulture is silent, apart from shrill whistles in their breeding displays and a falcon-like <i>cheek-acheek</i> call made around the nest.</p>\n<ul class=\"gallery mw-gallery-packed\"><li class=\"gallerybox\" style=\"width: 225.33333333333px\">\n\t\t<li class=\"gallerybox\" style=\"width: 162px\">\n\t\t<li class=\"gallerybox\" style=\"width: 160.66666666667px\">\n\t\t<li class=\"gallerybox\" style=\"width: 156.66666666667px\">\n\t\t<li class=\"gallerybox\" style=\"width: 94.666666666667px\">\n</ul><h3><span id=\"Physiology\">Physiology</span></h3>\n<p>The acid concentration of the bearded vulture stomach has been estimated to be of pH about 1. Large bones will be digested in about 24 hours, aided by slow mixing/churning of the stomach content. The high fat content of bone marrow makes the net energy value of bone almost as good as that of muscle, even if bone is less completely digested. A skeleton left on a mountain will dehydrate and become protected from bacterial degradation, and the bearded vulture can return to consume the remainder of a carcass even months after the soft parts have been consumed by other animals, larvae and bacteria.</p>"
    },
    "beautiful rosefinch": {
        "id": "b019",
        "name": "Beautiful Rosefince",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Himalayan beautiful rosefinch</b> (<i>Carpodacus pulcherrimus</i>) is a true finch species (family Fringillidae). It is found in mid-western China and the northern Himalayas. Its natural habitats are temperate shrubland and subtropical or tropical high-altitude shrubland.\n</p>\n<h2><span id=\"References\">References</span></h2>\n\n\n<p><br></p> "
    },
    "bengal bushlark": {
        "id": "b020",
        "name": "Bengal Bushlark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": "<p class=\"mw-empty-elt\">\n</p>\n<p>The <b>Bengal bush lark</b> (<i>Mirafra assamica</i>) or <b>Bengal lark</b> is a species of lark in the family Alaudidae found in southern Asia.\n</p>\n\n\n<h2><span id=\"Taxonomy_and_systematics\">Taxonomy and systematics</span></h2>\n\n<p>The differences within the genus <i>Mirafra</i> are often very subtle and confusing with many differences apparent only when specimens are examined in hand.\n</p><p>The Bengal bush lark was earlier classified into several races, the Bengal race <i>assamica</i> and the Madras race <i>affinis</i>. These were subsequently split, on the basis of diagnostic song and display characters, into the Jerdon's bush lark (<i>Mirafra affinis</i>) and <i>assamica</i> in the strict sense. Formerly, both the Burmese bush lark and Jerdon's bush lark were considered subspecies of the Bengal bush lark (as <i>M. a. microptera</i> and <i>M. a. affinis</i> respectively) until split to form a separate species. The alternate name \"<b>rufous-winged bush lark</b>\" may also be used to describe the red-winged lark. Another alternate name for the Bengal bush lark is the <b>rufous-winged lark</b>.</p>\n<h2><span id=\"Description\">Description</span></h2>\n<p>The Bengal bush lark is short-tailed and has a strong stout bill. It is not as long as the skylark, measuring about 15 centimetres in length. It is dark-streaked grey above, and buff below, with spotting on the breast and behind the eye. The wings are rufous.\n</p><p>The song of the Bengal bush lark is a repetition of thin disyllabic notes, delivered in a song-flight.</p>\n<h2><span id=\"Distribution_and_habitat\">Distribution and habitat</span></h2>\n\n<p>The Bengal bush lark is a resident breeder in the Indian subcontinent and south-east Asia, and found in the countries of Bangladesh, Bhutan, India, Myanmar and Nepal, with an estimated global extent of occurrence of 100,000-1,000,000 square kilometres.</p><p>The Bengal bush lark is a common bird of dry, open, stony country often with sparse shrubs, and cultivated areas.\n</p>\n<h2><span id=\"Behaviour_and_ecology\">Behaviour and ecology</span></h2>\n<p>It nests on the ground, laying three or four speckled eggs. This lark feeds primarily on seeds and insects, especially the latter during the breeding season.\n</p>\n<h2><span id=\"Gallery\">Gallery</span></h2>\n<ul class=\"gallery mw-gallery-traditional\"><li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n\t\t<li class=\"gallerybox\" style=\"width: 155px\">\n</ul><h2><span id=\"References\">References</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<ul><li>Species factsheet - BirdLife International</li></ul> "
    },
    "bengal florican": {
        "id": "b021",
        "name": "Bengal Florican",
        "order": order.OTIDIFORMES,
        "family": familyname.Otididae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "besra": {
        "id": "b022",
        "name": "Besra",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black baza": {
        "id": "b023",
        "name": "Black Baa",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black bittern": {
        "id": "b024",
        "name": "Black Bittern",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black bulbul": {
        "id": "b025",
        "name": "Black Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black drongo": {
        "id": "b026",
        "name": "Black Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black eagle": {
        "id": "b027",
        "name": "Black Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black francolin": {
        "id": "b028",
        "name": "Black Francolin",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black kite": {
        "id": "b029",
        "name": "Black Kite",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black redstart": {
        "id": "b030",
        "name": "Black Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": "",
        "nepali": " ",
        "details": " "
    },
    "black strok": {
        "id": "b031",
        "name": "Black strok",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black and yellow grosbeak": {
        "id": "b032",
        "name": "Black-and-yellow Grosbeak",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black backed forktail": {
        "id": "b033",
        "name": "Black-backed Forktail",
        "order": order.PASSERIFORMES,
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black bellied tern": {
        "id": "b034",
        "name": "Black-bellied Tern",
        "order": order.CHARADRIIFORMES,
        "family":familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black breasted parrotbill": {
        "id": "b035",
        "name": "Black-breasted Parrotbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black breasted weaver": {
        "id": "b036",
        "name": "Black-breasted Weaver",
        "order": order.PASSERIFORMES,
        "family": familyname.Ploceidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black browed reed warbler": {
        "id": "b037",
        "name": "Black-browed Reed-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black capped kingfisher": {
        "id": "b038",
        "name": "Black-capped Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black chinned babbler": {
        "id": "b039",
        "name": "Black-chinned Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black chinned yuhina": {
        "id": "b040",
        "name": "Black-chinned Yuhina",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black crested bulbul": {
        "id": "b041",
        "name": "Black-crested Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black crowned night heron": {
        "id": "b042",
        "name": "Black-crowned Night-heron",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black eared shrike babbler": {
        "id": "b043",
        "name": "Black-eared Shrike-babbler",
        "order": "Passeriformes",
        "family": "Vireonidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black faced bunting": {
        "id": "b044",
        "name": "Black-faced Bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black faced laughingthrush": {
        "id": "b045",
        "name": "Back-faced Laughingthrush",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black faced warbler": {
        "id": "b046",
        "name": "Black-faced Wabler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black headed bunting": {
        "id": "b047",
        "name": "Black-headed bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black headed cuckooshrike": {
        "id": "b048",
        "name": "Black-headed cuckooshrike",
        "order": "Passeriformes",
        "family": "Campephagidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black headed gull": {
        "id": "b049",
        "name": "Black-headed Gull",
        "order": "Charadriiformes",
        "family": "Laridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black headed ibis": {
        "id": "b050",
        "name": "Black-headed Ibis",
        "order": "Otidiformes",
        "family": "Threskiornithidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black headed jay": {
        "id": "b051",
        "name": "Black-headed Jay",
        "order": "Passeriformes",
        "family": "Corvidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black headed shrike babbler": {
        "id": "b052",
        "name": "Black-headed Shrike-babbler",
        "order": "Passeriformes",
        "family": "Vireonidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black hooded oriole": {
        "id": "b053",
        "name": "Black-hooded Oriole",
        "order": "Passeriformes",
        "family": "Oriolidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black lored tit": {
        "id": "b054",
        "name": "Black-lored Tit",
        "order": "Passeriformes",
        "family": "Paridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black naped monarch": {
        "id": "b055",
        "name": "Black-naped Monarch",
        "order": "Passeriformes",
        "family": "Monarchidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black naped oriole": {
        "id": "b056",
        "name": "Black-naped Oriole",
        "order": "Passeriformes",
        "family": "Oriolidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black naped woodpecker": {
        "id": "b057",
        "name": "Black-naped Woodpecker",
        "order": "Piciformes",
        "family": "Picidae",
        "scientific name": "Picus guerini",
        "nepali": " ",
        "details": " "
    },
    "black necked crane": {
        "id": "b058",
        "name": "Black-necked crane",
        "order": "Gruiformes",
        "family": "Gruidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black necked grebe": {
        "id": "b059",
        "name": "Black-necked Grebe",
        "order": "Podicipediformes",
        "family": "Podicipedidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black necked stork": {
        "id": "b060",
        "name": "Black-necked Stork",
        "order": "Otidiformes",
        "family": "Ciconiidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black rumped flameback": {
        "id": "b061",
        "name": "Black-rumped Flameback",
        "order": "Piciformes",
        "family": "Picidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black tailed godwit": {
        "id": "b062",
        "name": "Black-tailed Godwit",
        "order": "Gruiformes",
        "family": "Rallidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black throated accentor": {
        "id": "b063",
        "name": "Black-throated Accentor",
        "order": "Passeriformes",
        "family": "Prunellidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black throated parrotbill": {
        "id": "b064",
        "name": "Black-throated Parrotbill",
        "order": "Passeriformes",
        "family": "Sylviidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black throated prinia": {
        "id": "b065",
        "name": "Black-throated Prinia",
        "order": "Passeriformes",
        "family": "Cisticolidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black throated sunbird": {
        "id": "b066",
        "name": "Black-throated Sunbird",
        "order": "Passeriformes",
        "family": "Nectariniidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black throated thrush": {
        "id": "b067",
        "name": "Black-throated Thrush",
        "order": "Passeriformes",
        "family": "Turdidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black trailed crake": {
        "id": "b068",
        "name": "Black-trailed Crake",
        "order": "Gruiformes",
        "family": "Rallidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black winged cuckooshrike": {
        "id": "b069",
        "name": "Black-winged Cuckooshrike",
        "order": "Passeriformes",
        "family": "Campephagidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black winged kite": {
        "id": "b070",
        "name": "Black-winged Kite",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black winged snowfinch": {
        "id": "b071",
        "name": "Black-winged Snowfinch",
        "order": "Passeriformes",
        "family": "Passeridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "black winged stilt": {
        "id": "b072",
        "name": "Black-winged Stilt",
        "order": "Charadriiformes",
        "family": "Recurvirostridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blackish breasted babbler": {
        "id": "b073",
        "name": "Blakish-breasted Babbler",
        "order": "Passeriformes",
        "family": "Timaliidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blanford s rosefinch": {
        "id": "b074",
        "name": "Blanford's Rosefinch",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blood phesant": {
        "id": "b075",
        "name": "Blood Phesant",
        "order": "Galliformes",
        "family": "Phasianidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blosson headed parakeet": {
        "id": "b076",
        "name": "Blosson-headed Parakeet",
        "order": "Psittaciformes",
        "family": "Psittacidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue rock thrush": {
        "id": "b077",
        "name": "Blue Rock-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue whistling thrush": {
        "id": "b078",
        "name": "Blue Whistling-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue bearded bee eater": {
        "id": "b079",
        "name": "Blue-bearded Bee-eater",
        "order": "Coraciiformes",
        "family": "Meropidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue capped redstart": {
        "id": "b080",
        "name": "Blue-cpped REdstart",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue capped rock thrush": {
        "id": "b081",
        "name": "Blue-capped Rock-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue eared barbet": {
        "id": "b082",
        "name": "Blue-eared Barbet",
        "order": "Piciformes",
        "family": "Megalaimidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue eared kingfisher": {
        "id": "b083",
        "name": "Blue-eared Kingfisher",
        "order": "Coraciiformes",
        "family": "Alcedinidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue fronted redstart": {
        "id": "b084",
        "name": "Blue-fronted Redstart",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue naped pitta": {
        "id": "b085",
        "name": "Blue-naped Pitta",
        "order": "Passeriformes",
        "family": "Pittidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue tailed bee eater": {
        "id": "b086",
        "name": "Blue-tailed Bee-eater",
        "order": "Coraciiformes",
        "family": "Meropidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue throated barbet": {
        "id": "b087",
        "name": "Blue-throared Barbet",
        "order": "Piciformes",
        "family": "Megalaimidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue throated blue flycatcher": {
        "id": "b088",
        "name": "Blue-throated Blue-flycatcher",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue winged laughingthrush": {
        "id": "b089",
        "name": "Blue-winged Laughingthrush",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blue winged minla": {
        "id": "b090",
        "name": "Blue-winged Minla",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "bluethroat": {
        "id": "b091",
        "name": "Bluethroat",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blunt winged warbler": {
        "id": "b092",
        "name": "Blunt-winged Warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blyth s kingfisher": {
        "id": "b093",
        "name": "Blyth's Kingfisher",
        "order": "Coraciiformes",
        "family": "Alcedinidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blyth s leaf warbler": {
        "id": "b094",
        "name": "Blyth's Leaf-warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blyth s pipit": {
        "id": "b095",
        "name": "Blyth's Pipit",
        "order": "Passeriformes",
        "family": "Motacillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "blyth s reed warbler": {
        "id": "b096",
        "name": "Blyth's Reed-warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "bohemian waxwing": {
        "id": "b097",
        "name": "Bohemian Waxwing",
        "order": "Passeriformes",
        "family": "Bombycillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "bonelli s eagle": {
        "id": "b098",
        "name": "Bonelli's Eagle",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "booted eagle": {
        "id": "b099",
        "name": "Booted Eagle",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "booted warbler": {
        "id": "b100",
        "name": "Booted Warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brahminy kite": {
        "id": "b101",
        "name": "Brahminy Kite",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brahminy starling": {
        "id": "b102",
        "name": "Brahminy Starling",
        "order": "Passeriformes",
        "family": "Sturnidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brambling": {
        "id": "b103",
        "name": "Brambling",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brandt s mountain finch": {
        "id": "b104",
        "name": "Brandt's Mountain-finch",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "bristled grassbird": {
        "id": "b105",
        "name": "Bristled Grassbird",
        "order": "Passeriformes",
        "family": "Locustellidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "broad billed warbler": {
        "id": "b106",
        "name": "Broad-billed Warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "broen headed gull": {
        "id": "b107",
        "name": "Brown-headed Gull",
        "order": "Charadriiformes",
        "family": "Laridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "bronze drongo": {
        "id": "b108",
        "name": "Bronzed Drongo",
        "order": "Passeriformes",
        "family": "Dicruridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "bronze winged jacana": {
        "id": "b109",
        "name": "Bronze-winged Jacana",
        "order": "Charadriiformes",
        "family": "Jacanidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown accentor": {
        "id": "b110",
        "name": "Brown Accentor",
        "order": "Passeriformes",
        "family": "Prunellidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown boobook": {
        "id": "b111",
        "name": "Brown Boobook",
        "order": "Strigiformes",
        "family": "Strigidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown bullfinch": {
        "id": "b112",
        "name": "Brown Bullfinch",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown crake": {
        "id": "b113",
        "name": "Brown Crake",
        "order": "Gruifirmes",
        "family": "Rallidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown dipper": {
        "id": "b114",
        "name": "Brown Dipper",
        "order": "Passeriformes",
        "family": "Cinclidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown fish owl": {
        "id": "b115",
        "name": "Brown Fish-owl",
        "order": "Strigiformes",
        "family": "Strigidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown grasshopper warbler": {
        "id": "b116",
        "name": "Brown Grasshopper-warbler",
        "order": "Passeriformes",
        "family": "Locustellidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown parrotbill": {
        "id": "b117",
        "name": "Brown Parrotbill",
        "order": "Passeriformes",
        "family": "Sylviidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown rockchat": {
        "id": "b118",
        "name": "Brown Rockchat",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown shrike": {
        "id": "b119",
        "name": "Brown Shrike",
        "order": "Passeriformes",
        "family": "Laniidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown wood owl": {
        "id": "b120",
        "name": "Brown Wood-owl",
        "order": "Strigiformes",
        "family": "Strigidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown breasted flycatcher": {
        "id": "b121",
        "name": "Brown-breasted Flycatcher",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown fronted woodpecker": {
        "id": "b122",
        "name": "Brown-fronted Woodpecker",
        "order": "Piciformes",
        "family": "Picidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brown headed barbet": {
        "id": "b123",
        "name": "Brown-headed Barbet",
        "order": "Piciformes",
        "family": "Megalaimidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "brownish flanked bush warbler": {
        "id": "b124",
        "name": "Brownish-flanked Bush-warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "buff barred warbler": {
        "id": "b125",
        "name": "Buff-barred Warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "buff bellied pipit": {
        "id": "b126",
        "name": "Buff-bellied Pipit",
        "order": "Passeriformes",
        "family": "Motacillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "caspian tern": {
        "id": "c001",
        "name": "Caspian Tern",
        "order": "Charadriiformes",
        "family": "Laridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "cattle egret": {
        "id": "c002",
        "name": "Cattle Egret",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "changeable hawk eagle": {
        "id": "c003",
        "name": "Changeable Hawk-eagle",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "cheer plesant": {
        "id": "c004",
        "name": "Cheer Pleasant",
        "order": "Galliformes",
        "family": "Phasianidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnu bellied rock thrush": {
        "id": "c005",
        "name": "Chestnut-bellied Rock-thrush",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut bunting": {
        "id": "c006",
        "name": "Chestnut Bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut munia": {
        "id": "c007",
        "name": "Chestnut Munia",
        "order": "Passeriformes",
        "family": "Estrildidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut thrush": {
        "id": "c008",
        "name": "Chestnut Thrush",
        "order": "Passeriformes",
        "family": "Turdidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut eared bunting": {
        "id": "c009",
        "name": "Chestnut-eared bunting",
        "order": "Passeriformes",
        "family": "Emberizidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut bellied nuthatch": {
        "id": "c010",
        "name": "Chestnut-bellied Nuthatch",
        "order": "Passeriformes",
        "family": "Sittidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut capped babbler": {
        "id": "c011",
        "name": "Chestnut-capped Babbler",
        "order": "Passeriformes",
        "family": "Timaliidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut crowned bush warbler": {
        "id": "c012",
        "name": "Chestnut-crowned Bush-warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut crowned laughingthrush": {
        "id": "c013",
        "name": "Chestnut-crowned Laughingthrush",
        "order": "Passeriformes",
        "family": "Leiotrichidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut crowned warbler": {
        "id": "c014",
        "name": "Chestnut-crowned Warbler",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut headed bee eater": {
        "id": "c015",
        "name": "Chestnut-headed Bee-eater",
        "order": "Coraciformes",
        "family": "Meropidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut headed tesia": {
        "id": "c016",
        "name": "Chestnut-headed Tesia",
        "order": "Passeriformes",
        "family": "Phylloscopidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut shouldered bush sparrow": {
        "id": "c017",
        "name": "Chestnut-shouldered Bush-sparrow",
        "order": "Passeriformes",
        "family": "Passeridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut tailed starling": {
        "id": "c018",
        "name": "Chestnut-tailed Starling",
        "order": "Passeriformes",
        "family": "Sturnidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chestnut winged cuckoo": {
        "id": "c019",
        "name": "Chestnut-winged Cuckoo",
        "order": "Cuculiforms",
        "family": "Cuculidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chinese grasshopper warbler": {
        "id": "c020",
        "name": "Chinese Grasshopper-warbler",
        "order": "Passeriformes",
        "family": "Locustellidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chinese rubythroat": {
        "id": "c021",
        "name": "Chinese Rubythroat",
        "order": "Passeriformes",
        "family": "Muscicapidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chinese spot billed duck": {
        "id": "c022",
        "name": "Chinese Spot-billed Duck",
        "order": "Anseriformes",
        "family": "Anatidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "chukar": {
        "id": "c023",
        "name": "Chukar",
        "order": "Galliformes",
        "family": "Phasianidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "cinereous vulture": {
        "id": "c024",
        "name": "Cinerouse Vulture",
        "order": "Accipitriformes",
        "family": "Accipitridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "cinnamon bittern": {
        "id": "c025",
        "name": "Cinnamon Bittern",
        "order": "Pelecaniformes",
        "family": "Ardeidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "citrine wagtail": {
        "id": "c026",
        "name": "Citrine Wagtail",
        "order": "Passeriformes",
        "family": "Motacillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "clamorous reed warbler": {
        "id": "c027",
        "name": "Clamorous Reed-warbler",
        "order": "Passeriformes",
        "family": "Acrocephalidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "coal tit": {
        "id": "c028",
        "name": "Coal Tit",
        "order": "Passeriformes",
        "family": "Paridae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "collard scops owl": {
        "id": "c029",
        "name": "Collard Scops-owl",
        "order": "Strigiformes",
        "family": "Strigidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "collared falconet": {
        "id": "c030",
        "name": "Collared Falconet",
        "order": "Cariamiformes",
        "family": "Falconidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "collared groasbeak": {
        "id": "c031",
        "name": "Collared Groasbeak",
        "order": "Passeriformes",
        "family": "Fringillidae",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "collared owlet": {
        "id": "c032",
        "name": "Collared Owlet",
        "order": "Strigiformes",
        "family": "Strigiformes",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "collared sand martin": {
        "id": "c033",
        "name": "Collared Sand Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common babbler": {
        "id": "c034",
        "name": "Common Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common barn owl": {
        "id": "c035",
        "name": "Common barn owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Tytonidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common buttonquail": {
        "id": "c036",
        "name": "Common Buttonquail",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Turnicidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common chaffinch": {
        "id": "c037",
        "name": "Common Chaffinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "cmmon coot": {
        "id": "c038",
        "name": "Common Coot",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common crane": {
        "id": "c039",
        "name": "Common Crane",
        "order": order.GRUIFORMES,
        "family": familyname.Gruidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common cuckoo": {
        "id": "c040",
        "name": "Common Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common goldeneye": {
        "id": "c041",
        "name": "Common Goldeneye",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common grasshopper warbler": {
        "id": "c042",
        "name": "Common Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common green magpie": {
        "id": "c043",
        "name": "Common Green Magpie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common greenshank": {
        "id": "c044",
        "name": "Common Greenshank",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common hawk cuckoo": {
        "id": "c045",
        "name": "Common Hawk-cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common hill myna": {
        "id": "c046",
        "name": "Common Hill Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common hoopoe": {
        "id": "c047",
        "name": "Common Hoopoe",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Upupidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common iora": {
        "id": "c048",
        "name": "Common Iora",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common kestrel": {
        "id": "c049",
        "name": "Common Kestrel",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common kingfisher": {
        "id": "c050",
        "name": "Common Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common linnet": {
        "id": "c051",
        "name": "Common Linnet",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common moorhen": {
        "id": "c052",
        "name": "Common Moorhen",
        "order":order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common myna": {
        "id": "c053",
        "name": "Common Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common pochard": {
        "id": "c054",
        "name": "Common Pochard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common quail": {
        "id": "c055",
        "name": "Common Quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common raven": {
        "id": "c056",
        "name": "Common Raven",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common redshank": {
        "id": "c057",
        "name": "Common Redshank",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common rosefinch": {
        "id": "c058",
        "name": "Common Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common sandpiper": {
        "id": "c059",
        "name": "Common Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common shelduck": {
        "id": "c060",
        "name": "Common Shelduck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common snipe": {
        "id": "c061",
        "name": "Common Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common starling": {
        "id": "c062",
        "name": "Common Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common stonechat": {
        "id": "c063",
        "name": "Common Stonechat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common swift": {
        "id": "c064",
        "name": "Common Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common tailorbird": {
        "id": "c065",
        "name": "Common Tailorbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common teal": {
        "id": "c066",
        "name": "Common Teal",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common tern": {
        "id": "c067",
        "name": "Common Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common woodpigeon": {
        "id": "c068",
        "name": "Common Woodpigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "common woodshrike": {
        "id": "c069",
        "name": "Common Woodshrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Vangidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "coppersmith barbet": {
        "id": "c70",
        "name": "Coppersmith Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "coral billed scimitar babbler": {
        "id": "c071",
        "name": "Coral-billed Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "cotton pygmy goose": {
        "id": "c072",
        "name": "Cotton Pygmy-goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "creasted serpent eagle": {
        "id": "c073",
        "name": "Creasted Serpant-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crested bunting": {
        "id": "c074",
        "name": "Crested Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crested goshawk": {
        "id": "c075",
        "name": "Crested Goshawk",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crested kingfisher": {
        "id": "c076",
        "name": "Crested Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crested lark": {
        "id": "c077",
        "name": "Crested Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crested treeswift": {
        "id": "c078",
        "name": "Crested Treeswift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Hemiprocnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crimson sunbird": {
        "id": "c079",
        "name": "Crimson Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crimson browed finch": {
        "id": "c080",
        "name": "Crimson-browed Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "crow billied drongo": {
        "id": "c081",
        "name": "Crow-billed Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "curlew sandpiper": {
        "id": "c082",
        "name": "Curlew Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "darjeeling woodpecker": {
        "id": "d001",
        "name": "Darjeeling Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dark breasted rosefinch": {
        "id": "d002",
        "name": "Dark-breasted Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dark rumped rosefinch": {
        "id": "d003",
        "name": "Dark-rumped Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dark sided flycatcher": {
        "id": "d004",
        "name": "Dark-sided Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dark sided thrush": {
        "id": "d005",
        "name": "Dark-sided Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "daurian redstart": {
        "id": "d006",
        "name": "Daurian Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "demoiselle crane": {
        "id": "d007",
        "name": "Demoiselle Crane",
        "order": order.GRUIFORMES,
        "family": familyname.Gruidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "desert wheatear": {
        "id": "d008",
        "name": "Desert Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dunlin": {
        "id": "d009",
        "name": "Dunlin",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dusky thrush": {
        "id": "d010",
        "name": "Dusky Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dusky warbler": {
        "id": "d011",
        "name": "Dusky Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "dusty eagle owl": {
        "id": "d012",
        "name": "Dusky Eagle-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Tytonidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "easter marsh harrier": {
        "id": "e001",
        "name": "Eastern Marsh-harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eastern goldfinch": {
        "id": "e002",
        "name": "Eastern Goldfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eastern grass owl": {
        "id": "e003",
        "name": "Eastern Grass-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Tytonidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eastern imperial eagle": {
        "id": "e004",
        "name": "Eastern Imperial Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eastern orphean warbler": {
        "id": "e005",
        "name": "Eastern Orphean Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "egyptian vulture": {
        "id": "e006",
        "name": "Egyptian Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "estern water rail": {
        "id": "e007",
        "name": "Eastern Water Rail",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian bittern": {
        "id": "e008",
        "name": "Eurasian Bittern",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian collared dove": {
        "id": "e009",
        "name": "Eurasian Collared-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian crag martin": {
        "id": "e010",
        "name": "Eurasian Crag Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian curlew": {
        "id": "e011",
        "name": "Eurasian Curlew",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian eagle owl": {
        "id": "e012",
        "name": "Eurasian Eagle-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian hobby": {
        "id": "e013",
        "name": "Eurasian Hobby",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian oystercatcher": {
        "id": "e014",
        "name": "Eurasian Oystercatcher",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Haematopodidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian siskin": {
        "id": "e015",
        "name": "Eurasian Siskin",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian skylark": {
        "id": "e016",
        "name": "Eurasian Skylark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian sparrowhawk": {
        "id": "e017",
        "name": "Eurasian Sparrowhawk",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian spoonbill": {
        "id": "e018",
        "name": "Eurasian Spoonbill",
        "order": order.OTIDIFORMES,
        "family": familyname.Threskiornithidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian tree sparrow": {
        "id": "e019",
        "name": "Eurasian Tree Sparrow",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian wigeon": {
        "id": "e020",
        "name": "Eurasian Wigeon",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian wookcock": {
        "id": "e021",
        "name": "Eurasian Woodcock",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eurasian wryneck": {
        "id": "e022",
        "name": "Eurasian Wryneck",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eversmann s redstart": {
        "id": "e023",
        "name": "Eversmann's Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "eyebrowed thrush": {
        "id": "e024",
        "name": "Eyebrowed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "falcated duck": {
        "id": "f001",
        "name": "Falcated Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ferruginous duck": {
        "id": "f002",
        "name": "Ferruginous Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ferruginous flycatcher": {
        "id": "f003",
        "name": "Ferruginous Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "finn s weaver": {
        "id": "f004",
        "name": "Finn's Weaver",
        "order": order.PASSERIFORMES,
        "family":familyname.Ploceidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fire breasted flowerpecker": {
        "id": "f005",
        "name": "Fire-breasted Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fire capped tit": {
        "id": "f006",
        "name": "Fire-capped Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fire tailed myzornis": {
        "id": "f007",
        "name": "Fire-tailed Myzornis",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fire tailed sunbird": {
        "id": "f008",
        "name": "Fire-tailed Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "forest wagtail": {
        "id": "f009",
        "name": "Forest Wagtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fork tailed drongo cuckoo": {
        "id": "f010",
        "name": "Fork-tailed Drongo-cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fulvous parrotbill": {
        "id": "f011",
        "name": "Fulvous Parrotbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fulvous whistling duck": {
        "id": "f012",
        "name": "Fulvous Whistling-duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "fulvous breasted woodpecker": {
        "id": "f013",
        "name": "Fulvous-breasted Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "gadwall": {
        "id": "g001",
        "name": "Gadwall",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "garganey": {
        "id": "g002",
        "name": "Garganey",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "glossy ibis": {
        "id": "g003",
        "name": "Glossy Ibis",
        "order": order.OTIDIFORMES,
        "family": familyname.Threskiornithidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "gold naped finch": {
        "id": "g004",
        "name": "Gold-naped Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "golden babbler": {
        "id": "g005",
        "name": "Golden Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "golden bush robin": {
        "id": "g006",
        "name": "Golden Bush-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "golden eagle": {
        "id": "g007",
        "name": "Golden Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "golden breasted fulvetta": {
        "id": "g008",
        "name": "Golden-breasted Fulvetta",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "golden fronted leafbird": {
        "id": "g009",
        "name": "Golden-fronted Leafbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Chloropseidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "golden headed cisticola": {
        "id": "g010",
        "name": "Golden-headed Cisticola",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "golden throated barbet": {
        "id": "g011",
        "name": "Golden-throated Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "goldrest": {
        "id": "g012",
        "name": "Goldcrest",
        "order": order.PASSERIFORMES,
        "family": familyname.Regulidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "goosander": {
        "id": "g013",
        "name": "Goosander",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "gould s shortwing": {
        "id": "g014",
        "name": "Gould's Shortwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "gould s sunbird": {
        "id": "g015",
        "name": "Gould's Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "graceful prinia": {
        "id": "g016",
        "name": "Graceful Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grandala": {
        "id": "g017",
        "name": "Grandala",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great barbet": {
        "id": "g018",
        "name": "Great Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great cormorant": {
        "id": "g019",
        "name": "Great Cormorant",
        "order": order.SULIFORMES,
        "family": familyname.Phalacrocoracidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great created grebe": {
        "id": "g020",
        "name": "Great Crested Grebe",
        "order": order.PODICIPEDIFORMES,
        "family": familyname.Podicipedidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great grey shrike": {
        "id": "g021",
        "name": "Great Grey Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great hornbill": {
        "id": "g022",
        "name": "Great Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great myna": {
        "id": "g023",
        "name": "Great Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great parrotbill": {
        "id": "g024",
        "name": "Great Parrotbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great rosefinch": {
        "id": "g025",
        "name": "Great Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great thick knee": {
        "id": "g026",
        "name": "Great Thick-knee",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Burhinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great tit": {
        "id": "g027",
        "name": "Great Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great white egret": {
        "id": "g028",
        "name": "Great White Egret",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great white pelican": {
        "id": "g029",
        "name": "Great White Pelican",
        "order": order.PELECANIFORMES,
        "family": familyname.Pelecanidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "great staty woodpecker": {
        "id": "g030",
        "name": "Great Slaty Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater adjutant": {
        "id": "g031",
        "name": "Greater Adjutant",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater coucal": {
        "id": "g032",
        "name": "Greater Coucal",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater flameback": {
        "id": "g033",
        "name": "Greater Flameback",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater flamingo": {
        "id": "g034",
        "name": "Greater Flamingo",
        "order": order.PHOENICOPTERIFORMES,
        "family": familyname.Phoenicopteridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater necklaced laughingthrush": {
        "id": "g035",
        "name": "Greater Necklaced Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater painted snipe": {
        "id": "g036",
        "name": "Greater Painted-snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Rostratulidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater racquet tailed drongo": {
        "id": "g037",
        "name": "Greater Racquet-tailed Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater sandplover": {
        "id": "g038",
        "name": "Greater Sandplover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater scaup": {
        "id": "g039",
        "name": "Greater Scaup",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater short toed lark": {
        "id": "g040",
        "name": "Greater Short-toed Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater spotted eagle": {
        "id": "g041",
        "name": "Greater Spotted Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater white fronted goose": {
        "id": "g042",
        "name": "Greater White-fronted Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greater yellownape": {
        "id": "g043",
        "name": "Greater Yellownape",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green cochoa": {
        "id": "g044",
        "name": "Green Cochoa",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green sandpiper": {
        "id": "g045",
        "name": "Green Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green shrike babbler": {
        "id": "g046",
        "name": "Green Shrike-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Vireonidae
        ,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green warbler": {
        "id": "g047",
        "name": "Green Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green backed herono": {
        "id": "g048",
        "name": "Green-backed Herono",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green backed tit": {
        "id": "g049",
        "name": "Green-backed Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green billed malkoha": {
        "id": "g050",
        "name": "Green-billed Malkoha",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green crowned warbler": {
        "id": "g051",
        "name": "Green-crowned Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "green tailed sunbird": {
        "id": "g052",
        "name": "Green-tailed Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greenish warbler": {
        "id": "g053",
        "name": "Greenish Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey bushchat": {
        "id": "g054",
        "name": "Grey Bushchat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey heron": {
        "id": "g055",
        "name": "Grey Heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey nightjar": {
        "id": "g056",
        "name": "Grey Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey plover": {
        "id": "g057",
        "name": "Grey Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey treepie": {
        "id": "g058",
        "name": "Grey Treepie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey wagtail": {
        "id": "g059",
        "name": "Grey Wagtail",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey francolin": {
        "id": "g060",
        "name": "Grey Francolin",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey backed shrike": {
        "id": "g061",
        "name": "Grey-backed Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey bellied cuckoo": {
        "id": "g062",
        "name": "Grey-bellied Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey bellied tesia": {
        "id": "g063",
        "name": "Grey-bellied Tesia",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey breasted prinia": {
        "id": "g064",
        "name": "Grey-breasted Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey browed broadbill": {
        "id": "g065",
        "name": "Grey-browed Broadbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Eurylaimidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey capped emerald dove": {
        "id": "g066",
        "name": "Grey-capped Emerald Dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey cheeked warbler": {
        "id": "g067",
        "name": "Grey-cheeked Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey chinned minivet": {
        "id": "g068",
        "name": "Grey-chinned Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey cpped woodpecker": {
        "id": "g069",
        "name": "Grey-capped Woodpeker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey crested tit": {
        "id": "g070",
        "name": "Grey-crested Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey crowned prinia": {
        "id": "g071",
        "name": "Grey-crowned Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey headed bullfinch": {
        "id": "g072",
        "name": "Grey-headed Bullfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey headed canary flycatcher": {
        "id": "g073",
        "name": "Grey-headed Canary-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Stenostiridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey headed fish eagle": {
        "id": "g074",
        "name": "Grey-headed Fish-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey headed lapwing": {
        "id": "g075",
        "name": "Grey-headed Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey hooded warbler": {
        "id": "g076",
        "name": "Grey-headed Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey necked bunting": {
        "id": "g077",
        "name": "Grey-necked Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey sided bush warbler": {
        "id": "g078",
        "name": "Grey-sided Bush-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey sided laughingthrush": {
        "id": "g079",
        "name": "Grey-sided Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey sided thrush": {
        "id": "g080",
        "name": "Grey-sided Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey throated babbler": {
        "id": "g081",
        "name": "Grey-throated Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "grey winged blackbird": {
        "id": "g082",
        "name": "Grey-winged Blackbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "greylag goose": {
        "id": "g083",
        "name": "Greylag Goose",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "griffon vulture": {
        "id": "g084",
        "name": "Griffon Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ground tit": {
        "id": "g085",
        "name": "Ground Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "gul billed tern": {
        "id": "g086",
        "name": "Gull-billed Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hair crested drongo": {
        "id": "h001",
        "name": "Hair-crested Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hen harrier": {
        "id": "h002",
        "name": "Hen Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hil partridge": {
        "id": "h003",
        "name": "Hill Partridge",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hill pigeon": {
        "id": "h004",
        "name": "Hill Pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan bulbul": {
        "id": "h005",
        "name": "Himalayan Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan bush robin": {
        "id": "h006",
        "name": "Himalayan Bush-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan buzzard": {
        "id": "h007",
        "name": "Himalayan Buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan cutia": {
        "id": "h008",
        "name": "Himalayan Cutia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan flameback": {
        "id": "h009",
        "name": "Himalayan Flameback",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan grasshopper warbler": {
        "id": "h010",
        "name": "Himalayan Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan griffon": {
        "id": "h011",
        "name": "Himalayan Griffon",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan monal": {
        "id": "h012",
        "name": "Himalayan Monal",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan owl": {
        "id": "h013",
        "name": "Himalayan Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan rubythroat": {
        "id": "h014",
        "name": "Himalayan Rubythroat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan shortwing": {
        "id": "h015",
        "name": "Himalayan Shortwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan snowcock": {
        "id": "h016",
        "name": "Himalayan Snowcock",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan swiftlet": {
        "id": "h017",
        "name": "Himalayan Swiftlet",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan white browed rosefinch": {
        "id": "h018",
        "name": "Himalayan White-browed Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "himalayan woodpecker": {
        "id": "h019",
        "name": "Himalayan Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hoary throated barwing": {
        "id": "h020",
        "name": "Hoary-throated Barwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hodgso s treecreeper": {
        "id": "h021",
        "name": "Hodgson's Treecreeper",
        "order": order.PASSERIFORMES,
        "family": familyname.Certhiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hodgson s redstart": {
        "id": "h022",
        "name": "Hodgson's Redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "horned lark": {
        "id": "h023",
        "name": "Horned Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "horsfield s bushlark": {
        "id": "h024",
        "name": "Horsfield's bushlark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "house crow": {
        "id": "h025",
        "name": "House Crow",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "house sparrow": {
        "id": "h026",
        "name": "House Sparrow",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "house swift": {
        "id": "h027",
        "name": "House Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hume s bush warbler": {
        "id": "h028",
        "name": "Hume's Bush-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hume s lark": {
        "id": "h029",
        "name": "Hume's Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "hume s leaf warbler": {
        "id": "h030",
        "name": "Hume's Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ibisbill": {
        "id": "i001",
        "name": "Isibill",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Ibidorhynchidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "immediate egret": {
        "id": "i002",
        "name": "Intermediate Egret",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian blue robin": {
        "id": "i003",
        "name": "Indian Blue Robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian cormorant": {
        "id": "i004",
        "name": "Indian Cormorant",
        "order": order.SULIFORMES,
        "family": familyname.Phalacrocoracidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian courser": {
        "id": "i005",
        "name": "Indian Courser",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Glareolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian cuckoo": {
        "id": "i006",
        "name": "Indian Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian cuckooshrike": {
        "id": "i007",
        "name": "Indian Cuckooshrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian golden oriole": {
        "id": "i008",
        "name": "Indian Golden Oriole",
        "order": order.PASSERIFORMES,
        "family": familyname.Oriolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian grass bibbler": {
        "id": "i009",
        "name": "Indian Grass-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian grey hornbill": {
        "id": "i010",
        "name": "Indian Grey Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian nightjar": {
        "id": "i011",
        "name": "Indian Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian nuthatch": {
        "id": "i012",
        "name": "Indian Nuthatch",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian paradise flycatcher": {
        "id": "i013",
        "name": "Indian Paradise-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Monarchidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian peafowl": {
        "id": "i014",
        "name": "Indian Peafowl",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian pitta": {
        "id": "i015",
        "name": "Indian Pitta",
        "order": order.PASSERIFORMES,
        "family": familyname.Pittidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian pond heron": {
        "id": "i016",
        "name": "Indian Pond-heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian pygmy woodpecker": {
        "id": "i017",
        "name": "Indian Pygmy Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian robin": {
        "id": "i018",
        "name": "Indian Robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian roller": {
        "id": "i019",
        "name": "Indian Roller",
        "order": order.CORACIIFORMES,
        "family": familyname.Coraciidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian scops owl": {
        "id": "i020",
        "name": "Indian Scops-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian silverbill": {
        "id": "i021",
        "name": "Indian Silverbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Estrildidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian skimmer": {
        "id": "i022",
        "name": "Indian Skimmer",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian spot billed duck": {
        "id": "i023",
        "name": "Indian Spot-billed Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian spotted eagle": {
        "id": "i024",
        "name": "Indian Spotted Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian thick knee": {
        "id": "i025",
        "name": "Indian Thick-knee",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Burhinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indian vulture": {
        "id": "i026",
        "name": "Indian Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "indochinese roller": {
        "id": "i027",
        "name": "Indochinese Roller",
        "order": order.CORACIIFORMES,
        "family": familyname.Coraciidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "isabelline shrike": {
        "id": "i028",
        "name": "Isabelline Shrike",
        "order": order.PASSERIFORMES,
        "family":familyname.Laniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "isabelline wheatear": {
        "id": "i029",
        "name": "Isabelline Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jack snipe": {
        "id": "j001",
        "name": "Jack Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jacobin cuckoo": {
        "id": "j002",
        "name": "Jacobin Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jerdon s babbler": {
        "id": "j003",
        "name": "Jerdon's Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jerdon s baza": {
        "id": "j004",
        "name": "Jerdon's Baza",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jerdon s bushchat": {
        "id": "j005",
        "name": "Jerdon's Bushchat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jungle babbler": {
        "id": "j006",
        "name": "Jungle Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jungle bush quail": {
        "id": "j007",
        "name": "Jungle Bush-quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jungle myna": {
        "id": "j008",
        "name": "Jungle Myna",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jungle owlet": {
        "id": "j009",
        "name": "Jungle Owlet",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "jungle prinia": {
        "id": "j010",
        "name": "Jungle Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "kalij pleasant": {
        "id": "k001",
        "name": "Kalij Pheasant",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "kashmir flycatcher": {
        "id": "k002",
        "name": "Kashmir Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "kashmir nuthatch": {
        "id": "k003",
        "name": "Kashmir Nuthatch",
        "order": order.PASSERIFORMES,
        "family": familyname.Sittidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "kentish plover": {
        "id": "k004",
        "name": "Kentish plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "koklass phesant": {
        "id": "k005",
        "name": "Koklass Pheasant",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lagger falcon": {
        "id": "l001",
        "name": "Laggar Falcon",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lanceolated warbler": {
        "id": "l002",
        "name": "Lanceolated Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "large grey babbler": {
        "id": "l003",
        "name": "Large ggrey Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "large hawk cuckoo": {
        "id": "l004",
        "name": "Large Hawk-cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "large niltava": {
        "id": "l005",
        "name": "Large Niltava",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "large woodshrike": {
        "id": "l006",
        "name": "Large Woodshrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Vangidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "large billed crow": {
        "id": "l007",
        "name": "Large-billed Crow",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "large billed leaf warbler": {
        "id": "l008",
        "name": "Large-billed Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "large tailed nightjar": {
        "id": "l009",
        "name": "Large-tailed Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "laughing dove": {
        "id": "l010",
        "name": "Laughing Dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lemon rumped leaf warbler": {
        "id": "l011",
        "name": "Lemon-rumped Leaf-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser adjutant": {
        "id": "l012",
        "name": "Lesser Adjutant",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser black blacked gull": {
        "id": "l013",
        "name": "Lesser Black-backed Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser coucal": {
        "id": "l014",
        "name": "Lesser Coucal",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser cuckoo": {
        "id": "l015",
        "name": "Lesser Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser fish eagle": {
        "id": "l016",
        "name": "Lesser Fish-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser florican": {
        "id": "l017",
        "name": "Lesser Florican",
        "order": order.OTIDIFORMES,
        "family": familyname.Otididae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser kestrel": {
        "id": "l018",
        "name": "Lesser Kestrel",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser necklaced laughingthrush": {
        "id": "l019",
        "name": "Lesser Necklaced Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser racquet tailed drongo": {
        "id": "l020",
        "name": "Lesser Racquet-tailed Drongo",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicruridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser sandplover": {
        "id": "l021",
        "name": "Lesser Sandplover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser shortwing": {
        "id": "l022",
        "name": "Lesser Shortwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser whistling duck": {
        "id": "l023",
        "name": "Lesser Whistling-duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser whitethroat": {
        "id": "l024",
        "name": "Lesser Whitethroat",
        "order": order.PASSERIFORMES,
        "family": familyname.Sylviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lesser yellownape": {
        "id": "l025",
        "name": "Lesser Yellownape",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "lineated barbet": {
        "id": "l026",
        "name": "Lineated Barbet",
        "order": order.PICIFORMES,
        "family": familyname.Megalaimidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little bunting": {
        "id": "l027",
        "name": "Little Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little cormorant": {
        "id": "l028",
        "name": "Little Cormorant",
        "order": order.SULIFORMES,
        "family": familyname.Phalacrocoracidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little egret": {
        "id": "l029",
        "name": "Little Egret",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little forktail": {
        "id": "l030",
        "name": "Little Forktail",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little grebe": {
        "id": "l031",
        "name": "Little Grebe",
        "order": order.PODICIPEDIFORMES,
        "family": familyname.Podicipedidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little owlet": {
        "id": "l032",
        "name": "Little Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little pied flycatcher": {
        "id": "l033",
        "name": "Little Pied Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little pratincole": {
        "id": "l034",
        "name": "Little Pratincole",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Glareolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little ringed plover": {
        "id": "l035",
        "name": "Little Ringled Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little spiderhunter": {
        "id": "l036",
        "name": "Little Spiderhunter",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little stint": {
        "id": "l037",
        "name": "Little Stint",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "little tern": {
        "id": "l038",
        "name": "Little Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long billed wren babbler": {
        "id": "l039",
        "name": "Long-billed Wren-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long billed pipit": {
        "id": "l040",
        "name": "Long-billed Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long billed plover": {
        "id": "l041",
        "name": "Long-billed Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long billed thrush": {
        "id": "l042",
        "name": "Long-billed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long legged buzzard": {
        "id": "l043",
        "name": "Long-legged Buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long tailed broadbill": {
        "id": "l044",
        "name": "Long-tailed Broadbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Eurylaimidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long tailed duck": {
        "id": "l045",
        "name": "Long-tailed Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long tailed minivet": {
        "id": "l046",
        "name": "Long-tailed Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long tailed shrike": {
        "id": "l047",
        "name": "Long-tailed Shrike",
        "order": order.PASSERIFORMES,
        "family": familyname.Laniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long tailed sibia": {
        "id": "l048",
        "name": "Long-tailed Sibia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long tailed thrush": {
        "id": "l045",
        "name": "Long-tailed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "long toed stint": {
        "id": "l046",
        "name": "Long-toed Stint",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "malay night heron": {
        "id": "m001",
        "name": "Malay Night-heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mallard": {
        "id": "m002",
        "name": "Mallard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mandarin duck": {
        "id": "m003",
        "name": "Mandarin Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "maroon oriole": {
        "id": "m004",
        "name": "Maroon Oriole",
        "order": order.PASSERIFORMES,
        "family": familyname.Oriolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "maroon backed accentor": {
        "id": "m005",
        "name": "Maroon-backed accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "marsh sandpiper": {
        "id": "m006",
        "name": "Marsh Sandpiper",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "merlin": {
        "id": "m007",
        "name": "Merlin",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mew gull": {
        "id": "m008",
        "name": "Mew Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mistle thrush": {
        "id": "m009",
        "name": "Mistle Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mongolian finch": {
        "id": "m010",
        "name": "Mongolian Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "montagu s harrier": {
        "id": "m011",
        "name": "Montagu's Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mottled wood owl": {
        "id": "m012",
        "name": "Mottled Wood Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mountain bulbul": {
        "id": "m013",
        "name": "Mountain Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mountain imperial pigeon": {
        "id": "m014",
        "name": "Mountain Imperial-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mountain scops owl": {
        "id": "m015",
        "name": "Montain Scops-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mountain tailorbird": {
        "id": "m016",
        "name": "Mountain Tailorbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Scotocercidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "mountian hawk eagle": {
        "id": "m017",
        "name": "Mountain Hawk Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "moustached warbler": {
        "id": "m018",
        "name": "Moustached Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "nepal cupwing": {
        "id": "n001",
        "name": "Nepal Cupwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Pnoepygidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "nepal fulvetta": {
        "id": "n002",
        "name": "Nepal Fulvetta",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "nepal house martin": {
        "id": "n003",
        "name": "Nepal House Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "noerthern shoveler": {
        "id": "n004",
        "name": "Northern Shoveler",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "norther pintail": {
        "id": "n005",
        "name": "Northern Pintail",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "northern goshawk": {
        "id": "n006",
        "name": "Northern Goshawk",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "northern house martin": {
        "id": "n007",
        "name": "Northern House Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "northern lapwing": {
        "id": "n008",
        "name": "Northern Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "northern long eared owl": {
        "id": "n009",
        "name": "Northern Long-eared Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "northern wheatear": {
        "id": "n010",
        "name": "Northern Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "northern wren": {
        "id": "n011",
        "name": "Northern Wren",
        "order": order.PASSERIFORMES,
        "family": familyname.Troglodytidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "olive backed pipit": {
        "id": "o001",
        "name": "Olive-backed Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "orange bellied leafbird": {
        "id": "o002",
        "name": "Orange-bellied Leafbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Chloropseidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "orange breasted green dove": {
        "id": "o003",
        "name": "Orange-breasted Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "orange headed thrush": {
        "id": "o004",
        "name": "Orange-headed Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental cuckoo": {
        "id": "o005",
        "name": "Oriental Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental darter": {
        "id": "o006",
        "name": "Oriental Darter",
        "order": order.SULIFORMES,
        "family": familyname.Anhingidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental dollarbird": {
        "id": "o007",
        "name": "Oriental Dollarbird",
        "order": order.CORACIIFORMES,
        "family": familyname.Coraciidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental hobby": {
        "id": "o008",
        "name": "Oriental Hobby",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental honey buzzard": {
        "id": "o009",
        "name": "Oriental Honey-buzzard",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental magpie robin": {
        "id": "o010",
        "name": "Oriental Magpie-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental pied hornbill": {
        "id": "o011",
        "name": "Oriental Pied Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental reed warbler": {
        "id": "o012",
        "name": "Oriental Reed-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental scops owl": {
        "id": "o013",
        "name": "Oriental Scops-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental skylark": {
        "id": "o014",
        "name": "Oriental Skylark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental turtle dove": {
        "id": "o015",
        "name": "Oriental Turtle-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "oriental white eye": {
        "id": "o16",
        "name": "Oriental White-eye",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "orienteal pratincole": {
        "id": "o017",
        "name": "Oriental Pratincole",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Glareolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "osprey": {
        "id": "o018",
        "name": "Osprey",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pacific golden plover": {
        "id": "p001",
        "name": "Pacific Golden Plover",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pacific swift": {
        "id": "p002",
        "name": "Pacific Swift",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "paddyfield pipit": {
        "id": "p003",
        "name": "Paddyfield Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "paddyfield warbler": {
        "id": "p004",
        "name": "Paddyfield Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Acrocephalidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "painted stork": {
        "id": "p005",
        "name": "Painted Strok",
        "order": order.OTIDIFORMES,
        "family": familyname.Ciconiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pale blue flycatcher": {
        "id": "p006",
        "name": "Pale Blue-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pale sand martin": {
        "id": "p007",
        "name": "Pale Sand Martin",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pale billed flowerpecker": {
        "id": "p008",
        "name": "Pale-billed Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pale chinned flycatcher": {
        "id": "p009",
        "name": "Pale-chinned Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pale footed bush warbler": {
        "id": "p010",
        "name": "Pale-footed Bush-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pale headed woodpecker": {
        "id": "p011",
        "name": "Pale-headed Wookpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pallas s fish eagle": {
        "id": "p012",
        "name": "Pallas's Fish Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pallas s grasshopper warbler": {
        "id": "p013",
        "name": "Pallas's Grasshopper-warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Locustellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pallas s gull": {
        "id": "p014",
        "name": "Pallas's Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pallid harrier": {
        "id": "p015",
        "name": "Pallid Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "peregrine falcon": {
        "id": "p016",
        "name": "Peregrine Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pheasant tailed jacana": {
        "id": "p017",
        "name": "Pheasant-tailed Jacana",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Jacanidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pied avocet": {
        "id": "p018",
        "name": "Pied Avocet",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Recurvirostridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pied bushchat": {
        "id": "p019",
        "name": "Pied Bushchat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pied harrier": {
        "id": "p020",
        "name": "Pied Harrier",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pied kingfisher": {
        "id": "p021",
        "name": "Pied Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pied thrush": {
        "id": "p022",
        "name": "Pied Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pied wheatear": {
        "id": "p023",
        "name": "Pied Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pin striped tit babbler": {
        "id": "p024",
        "name": "Pin-striped Tit-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pin tailed green pigeon": {
        "id": "p025",
        "name": "Pin-tailed Green-pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pine bunting": {
        "id": "p026",
        "name": "Pine Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pink browed rosefinch": {
        "id": "p027",
        "name": "Pink-browed Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pink headed duck": {
        "id": "p028",
        "name": "Pink-headed Duck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pintail snipe": {
        "id": "p029",
        "name": "Pintail Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plain flowerpecker": {
        "id": "p030",
        "name": "Plain Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plain mountain finch": {
        "id": "p031",
        "name": "Plain Mountain-finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plain prinia": {
        "id": "p032",
        "name": "Plain Prinia",
        "order": order.PASSERIFORMES,
        "family": familyname.Cisticolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plain backed snowfinch": {
        "id": "p033",
        "name": "Plain-backed Snowfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plain crowned jay": {
        "id": "p034",
        "name": "Plain-crowned Jay",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plaintive cuckoo": {
        "id": "p035",
        "name": "Plaintive Cuckoo",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plum headed parakeet": {
        "id": "p036",
        "name": "Plum-headed Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "plumbeous water redstart": {
        "id": "p037",
        "name": "Plumbeous Water-redstart",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "puff throated babbler": {
        "id": "p038",
        "name": "Puff-throated Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "purple cochoa": {
        "id": "p039",
        "name": "Purple Cochoa",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "purple heron": {
        "id": "p040",
        "name": "Purple Heron",
        "order": order.PELECANIFORMES,
        "family": familyname.Ardeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "purple sunbird": {
        "id": "p041",
        "name": "Purple Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "purple swamphen": {
        "id": "p042",
        "name": "Purple Swamphen",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "purple backed starling": {
        "id": "p043",
        "name": "Purple-backed Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pygmy blue flycatcher": {
        "id": "p044",
        "name": "Pygmy Blue-flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "pygmy cupwing": {
        "id": "p045",
        "name": "Pygmy Cupwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Pnoepygidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "radde s warbler": {
        "id": "r001",
        "name": "Radde's Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rain quail": {
        "id": "r002",
        "name": "Rain Quail",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red avadavat": {
        "id": "r003",
        "name": "Red Avadavat",
        "order": order.PASSERIFORMES,
        "family": familyname.Ploceidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red crossbill": {
        "id": "r004",
        "name": "Red Crossbill",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red junglefowl": {
        "id": "r005",
        "name": "Red Junglefowl",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red knot": {
        "id": "r006",
        "name": "Red Knot",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red turtle dove": {
        "id": "r007",
        "name": "Red Turtle-dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red billed blue magpie": {
        "id": "r008",
        "name": "Red-billed Blue Magpie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red billed chough": {
        "id": "r009",
        "name": "Red-billed Chough",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red billed leiothrix": {
        "id": "r010",
        "name": "Red-billed Leiothrix",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red breasted flycatcher": {
        "id": "r011",
        "name": "Red-breasted Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red breasted merganser": {
        "id": "r012",
        "name": "Red-breasted Merganser",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red breated parakeet": {
        "id": "r013",
        "name": "Red-breasted Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red creted pochard": {
        "id": "r014",
        "name": "Red-crested Pochard",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red faced liocichla": {
        "id": "r015",
        "name": "Red-faced Liocichla",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red fronted rosefinch": {
        "id": "r016",
        "name": "Ref-fronted Rosefinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red fronted serin": {
        "id": "r017",
        "name": "Red-fronted Serin",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red headed bullfinch": {
        "id": "r018",
        "name": "Red-headed Bullfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red headed bunting": {
        "id": "r019",
        "name": "Red-headed Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red headed falcon": {
        "id": "r020",
        "name": "Red-headed Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red headed tit": {
        "id": "r021",
        "name": "Red-headed Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red headed trogon": {
        "id": "r022",
        "name": "Red-headed Trogon",
        "order": order.TROGONIFORMES,
        "family": familyname.Trogonidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red headed vulture": {
        "id": "r023",
        "name": "Red-headed Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red naped ibis": {
        "id": "r024",
        "name": "Red-naped Ibis",
        "order": order.OTIDIFORMES,
        "family": familyname.Threskiornithidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red necked phalarope": {
        "id": "r025",
        "name": "Red-necked Phalarope",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red rumped swallow": {
        "id": "r026",
        "name": "Red-rumped Swallow",
        "order": order.PASSERIFORMES,
        "family": familyname.Hirundinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red tailed minla": {
        "id": "r027",
        "name": "Red-tailed minla",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red tailed wheatear": {
        "id": "r028",
        "name": "Red-tailed Wheatear",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red throated flycatcher": {
        "id": "r029",
        "name": "Red-throated Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red throated loon": {
        "id": "r030",
        "name": "Red-throated Loon",
        "order": order.GALLIFORMES,
        "family": familyname.Gaviidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red throated pipit": {
        "id": "r031",
        "name": "Red-throated Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red vented bulbul": {
        "id": "r032",
        "name": "Red-vented Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red wattled lapwing": {
        "id": "r033",
        "name": "Red-wattled Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "red whiskered bulbul": {
        "id": "r034",
        "name": "Red-whiskered Bulbul",
        "order": order.PASSERIFORMES,
        "family": familyname.Pycnonotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "reed bunting": {
        "id": "r035",
        "name": "Reed Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "richard s pipit": {
        "id": "r036",
        "name": " Richard's Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "river lapwing": {
        "id": "r037",
        "name": "River Lapwing",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Charadriidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "river tern": {
        "id": "r038",
        "name": "River Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "robin accentor": {
        "id": "r039",
        "name": "Robin Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rock bunting": {
        "id": "r040",
        "name": "Rock Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rock dove": {
        "id": "r041",
        "name": "Rock Dove",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rock eagle owl": {
        "id": "r042",
        "name": "Rock Eagle-owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rose ringed parakeet": {
        "id": "r043",
        "name": "Rose-ringed Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rosy minivet": {
        "id": "r044",
        "name": "Rosy Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rosy pipit": {
        "id": "r045",
        "name": "Rosy Pipit",
        "order": order.PASSERIFORMES,
        "family": familyname.Motacillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rosy starling": {
        "id": "r046",
        "name": "Rosy Starling",
        "order": order.PASSERIFORMES,
        "family": familyname.Sturnidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ruby cheeked sunbird": {
        "id": "r047",
        "name": "Ruby-cheeked Sunbird",
        "order": order.PASSERIFORMES,
        "family": familyname.Nectariniidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ruddy kingfisher": {
        "id": "r048",
        "name": "Ruddy Kingfisher",
        "order": order.CORACIIFORMES,
        "family": familyname.Alcedinidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ruddy shelduck": {
        "id": "r049",
        "name": "Ruddy Shelduck",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ruddy turnstone": {
        "id": "r050",
        "name": "Ruddy Turnstone",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ruddy breasted crake": {
        "id": "r051",
        "name": "Ruddy-breasted Crake",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ruff": {
        "id": "r052",
        "name": "Ruff",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous sibia": {
        "id": "r053",
        "name": "Rufous Sibia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous treepie": {
        "id": "r054",
        "name": "Rufous Treepie",
        "order": order.PASSERIFORMES,
        "family": familyname.Corvidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous woodpecker": {
        "id": "r055",
        "name": "Rufous Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous backed sibia": {
        "id": "r056",
        "name": "Rufous-backed Sibia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous belied niltava": {
        "id": "r057",
        "name": "Rufous Bellied Niltava",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous bellied eagle": {
        "id": "r058",
        "name": "Rufous Bellied Eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous bellied woodpecker": {
        "id": "r059",
        "name": "Rufous-bellied Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous breasted accentor": {
        "id": "r060",
        "name": "Rufous-breasted Accentor",
        "order": order.PASSERIFORMES,
        "family": familyname.Prunellidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous breasted bush robin": {
        "id": "r061",
        "name": "Rufous-breasted Bush-robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous capped babbler": {
        "id": "r062",
        "name": "Rufous-capped Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous chinned laughingthrush": {
        "id": "r063",
        "name": "Rufous-chinned Laughungthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous faced warbler": {
        "id": "r064",
        "name": "Rufous-faced Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous fronted tit": {
        "id": "r065",
        "name": "Rufous-fronted Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Aegithalidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous gorgeted flycatcher": {
        "id": "r066",
        "name": "Rufous-gorgeted Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous naped tit": {
        "id": "r067",
        "name": "Rufous-naped Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous necked hornbill": {
        "id": "r068",
        "name": "Rufous-necked Hornbill",
        "order": order.BUCEROTIFORMES,
        "family": familyname.Bucerotidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous necked laughingthrush": {
        "id": "r069",
        "name": "Rufous-necked Laughinthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous necked snowfinch": {
        "id": "r070",
        "name": "Rufous-necked Snowfinch",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous tailed lark": {
        "id": "r071",
        "name": "Rufous-tailed Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous tailed rock thrush": {
        "id": "r072",
        "name": "Rufous-tailed Rock-thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous throated partridge": {
        "id": "r073",
        "name": "Rufous-throated Partridge",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous throated thrush": {
        "id": "r074",
        "name": "Rufous-throated Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous throated wren babbler": {
        "id": "r075",
        "name": "Rufous-throated Wren-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous vented tit": {
        "id": "r076",
        "name": "Rufous-vented Tit",
        "order": order.PASSERIFORMES,
        "family": familyname.Paridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous vented yuhina": {
        "id": "r077",
        "name": "Rufous-vented Yuhina",
        "order": order.PASSERIFORMES,
        "family": familyname.Zosteropidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rufous winged fulvetta": {
        "id": "r078",
        "name": "Rufous-winged Fulvetta",
        "order": order.PASSERIFORMES,
        "family": familyname.Pellorneidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "russet sparrow": {
        "id": "r079",
        "name": "Russet Sparrow",
        "order": order.PASSERIFORMES,
        "family": familyname.Passeridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rustic bunting": {
        "id": "r080",
        "name": "Rustic Bunting",
        "order": order.PASSERIFORMES,
        "family": familyname.Emberizidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rusty cheeked scimitar babbler": {
        "id": "r081",
        "name": "Rusty-cheeked Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rusty flanked treecreeper": {
        "id": "r082",
        "name": "Rusty-flanked Treecreeper",
        "order": order.PASSERIFORMES,
        "family": familyname.Certhiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rusty fronted barwing": {
        "id": "r083",
        "name": "Rusty-fronted Barwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "rusty tailed flycatcher": {
        "id": "r084",
        "name": "Rusty-tailed Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "saker falcon": {
        "id": "s001",
        "name": "Saker Falcon",
        "order": order.CARIAMIFORMES,
        "family": familyname.Falconidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sand lark": {
        "id": "s002",
        "name": "Sand Lark",
        "order": order.PASSERIFORMES,
        "family": familyname.Alaudidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sanderling": {
        "id": "s003",
        "name": "Sanderling",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sapphire flycatcher": {
        "id": "s004",
        "name": "Sapphire Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sarus crane": {
        "id": "s005",
        "name": "Sarus Crane",
        "order": order.GRUIFORMES,
        "family": familyname.Gruidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "satyr tragopan": {
        "id": "s006",
        "name": "Satyr Tragopan",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "savanna nightjar": {
        "id": "s007",
        "name": "Savanna Nightjar",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Caprimulgidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scaly laughingthrush": {
        "id": "s008",
        "name": "Scaly Laughingthrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scaly thrush": {
        "id": "s009",
        "name": "Scaly Thrush",
        "order": order.PASSERIFORMES,
        "family": familyname.Turdidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scaly bellied woodpecker": {
        "id": "s010",
        "name": "Scaly-bellied Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scaly breasted cupwing": {
        "id": "s011",
        "name": "Scaly-breasted Cupwing",
        "order": order.PASSERIFORMES,
        "family": familyname.Pnoepygidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scaly breasted munia": {
        "id": "s012",
        "name": "Scaly-breasted Munia",
        "order": order.PASSERIFORMES,
        "family": familyname.Estrildidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scarlet finch": {
        "id": "s013",
        "name": "Scarlet Finch",
        "order": order.PASSERIFORMES,
        "family": familyname.Fringillidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scarlet minivet": {
        "id": "s014",
        "name": "Scarlet Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scarlet backed flowerpecker": {
        "id": "s015",
        "name": "Scarlet-backed Flowerpecker",
        "order": order.PASSERIFORMES,
        "family": familyname.Dicaeidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "scarlet breasted woodpecker": {
        "id": "s016",
        "name": "Scarlet-breasted Woodpecker",
        "order": order.PICIFORMES,
        "family": familyname.Picidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "shikra": {
        "id": "s017",
        "name": "Shikra",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "short toed snake eagle": {
        "id": "s018",
        "name": "Short-toed Snake-eagle",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "short billed minivet": {
        "id": "s019",
        "name": "Short-billed Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "short eared owl": {
        "id": "s020",
        "name": "Short-eared Owl",
        "order": order.STRIGIFORMES,
        "family": familyname.Strigidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "siberian blue robin": {
        "id": "s021",
        "name": "Siberian Blue Robin",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "siberian chiffchaff": {
        "id": "s022",
        "name": "Siberian Chiffchaff",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "siberian rubythroat": {
        "id": "s023",
        "name": "Siberian Rubythroat",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sikkim treecreeper": {
        "id": "s024",
        "name": "Sikkim Treecreeper",
        "order": order.PASSERIFORMES,
        "family":familyname.Certhiidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "silver backed needletail": {
        "id": "s025",
        "name": "Silver-backed Needletail",
        "order": order.CAPRIMULGIFORMES,
        "family": familyname.Apodidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "silver eared mesia": {
        "id": "s026",
        "name": "Silver-eared Mesia",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sirkeer malkoha": {
        "id": "s027",
        "name": "Sirkeer Malkoha",
        "order": order.CUCULIFORMES,
        "family": familyname.Cuculidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slatey legged crake": {
        "id": "s028",
        "name": "Slaty-legged Crake",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slaty backed flycatcher": {
        "id": "s029",
        "name": "Slaty-backed Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slaty backed forktail": {
        "id": "s030",
        "name": "Slaty-backed Forktail",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slaty bellied tesia": {
        "id": "s031",
        "name": "Slaty-bellied Tesia",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slaty blue flycatcher": {
        "id": "s032",
        "name": "Slaty-blue Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slaty breasted rail": {
        "id": "s033",
        "name": "Slaty-breasted Rail",
        "order": order.GRUIFORMES,
        "family": familyname.Rallidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slaty headed parakeet": {
        "id": "s034",
        "name": "Slaty-headed Parakeet",
        "order": order.PSITTACIFORMES,
        "family": familyname.Psittacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slender billed babbler": {
        "id": "s035",
        "name": "Slender-billed Babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Leiotrichidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slender billed gull": {
        "id": "s036",
        "name": "Slender-billed Gull",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slender billed oriole": {
        "id": "s037",
        "name": "Slender-billed Oriole",
        "order": order.PASSERIFORMES,
        "family": familyname.Oriolidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slender billed scimitar babbler": {
        "id": "s038",
        "name": "Slender-billed Scimitar-babbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Timaliidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "slender billed vulture": {
        "id": "s039",
        "name": "Slender-billed Vulture",
        "order": order.ACCIPITRIFORMES,
        "family": familyname.Accipitridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "small minivet": {
        "id": "s040",
        "name": "Small Minivet",
        "order": order.PASSERIFORMES,
        "family": familyname.Campephagidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "small niltava": {
        "id": "s041",
        "name": "Small Niltava",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "smew": {
        "id": "s042",
        "name": "Smew",
        "order": order.ANSERIFORMES,
        "family": familyname.Anatidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "smoky warbler": {
        "id": "s043",
        "name": "Smoky Warbler",
        "order": order.PASSERIFORMES,
        "family": familyname.Phylloscopidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "snow partridge": {
        "id": "s044",
        "name": "Snow Partridge",
        "order": order.GALLIFORMES,
        "family": familyname.Phasianidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "snow pigeon": {
        "id": "s045",
        "name": "Snow Pigeon",
        "order": order.COLUMBIFORMES,
        "family": familyname.Columbidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "snowy browed flycatcher": {
        "id": "s046",
        "name": "Snowy-browed Flycatcher",
        "order": order.PASSERIFORMES,
        "family": familyname.Muscicapidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "solitary snipe": {
        "id": "s047",
        "name": "Solitary Snipe",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Scolopacidae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sooty tern": {
        "id": "s048",
        "name": "Sooty Tern",
        "order": order.CHARADRIIFORMES,
        "family": familyname.Laridae,
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "southern nutcraker": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spactacled finch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spanish sparrow": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "speckled piculet": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "speckled woodpigeon": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spiny babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spot bellied eagle owl": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spot billed pelican": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spot winged grosbeak": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spot winged rosefinch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spot winged starling": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spotted crake": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spotted elachura": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spotted forktail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spotted grasshopper warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spotted laughingthrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spotted owlet": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "spotted redshank": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "steppe eagle": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "stork billed kingfisher": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "streak breasted scimitar babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "streak throated swallow": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "streak throated woodpecker": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "streaked laughingthrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "streaked rosefinch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "streaked spiderhunter": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "streaked weaver": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "striated babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "striated bulbul": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "striated grassbird": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "striated laughingthrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "striated prinia": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "stripe throated yuhina": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sulphur bellied warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sultan tit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "swamp francolin": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "swamp grass babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "swinhoe s minivet": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "sykes s nightjar": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tawny eagle": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tawny fish owl": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tawny pipit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tawny bellied babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "temminck s stint": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "terek sandpiper": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "thick billed flowerpecker": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "thick billed green pigeon": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "thick billed warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tibetan blackbird": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tibetan lark": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tibetan partridge": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tibetan sandgrouse": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tibetan siskin": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tibetan snowcock": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tickell s blue flycatcher": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tickell s leaf warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tickell s thrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tree pipit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tricolored munia": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tufted duck": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tundra swan": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "twite": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "tytler s leaf warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "ultramarine flycatcher": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "upland buzzard": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "upland pipit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "variable wheatear": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "variegated laughingthrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "velvet fronted nuthatch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "verditer flycatcher": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "vernal hanging parrot": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "vinaceous rosefinch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "wallcreeper": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "water pipit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "watercock": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "wedge tailed green pigeon": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "western hooded pitta": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "western crowned leaf warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "western koel": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "western marsh harrier": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "western spotted dove": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "western water rail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "western yellow wagtail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "whimbrel": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "whiskered tern": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "whiskered yuhina": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "whistler s warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "whistling hawk cuckoo": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white stork": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white wagtail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white backed thrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white bellied drongo": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white bellied erponis": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white bellied heron": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white bellied redstart": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white breasted kingfisher": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white breasted waterhen": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browed bush robin": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browed fantail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browed fulvetta": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browed scimitar babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browed shrike babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browed tit warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browed wagtail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white browned piculet": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white capped bunting": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white capped water redstart": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white cheeked nuthatch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white collared blackbird": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white crested laughingthrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white eyed buzzard": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white gorgeted flycatcher": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white hooded babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white naped woodpecker": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white naped yuhina": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white rumped munia": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white rumped shama": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white rumped snowfinch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white rumped spinetail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white rumped vulture": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white shouldered starling": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white tailed blue robin": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white tailed lapwing": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white tailed nuthatch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white tailed sea eagle": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white tailed stonechat": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated bulbul": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated bushchat": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated dipper": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated fantail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated laughingthrush": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated needletail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated redstart": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white throated tit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white winged grosbeak": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white winged redstart": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "white winged tern": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "whooper swan": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "wire tailed swallow": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "wood sandpiper": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "wood snipe": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow billed blue magpie": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow bittern": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied fairy fantail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied flowerpecker": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied prinia": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow bellied warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow billed chough": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow breasted bunting": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow breasted greenfinch": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow browed tit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow browed warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow cheeked tit": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow crowned woodpecker": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow eyed babbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow footed green pigeon": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow legged buttonquail": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow rumped honeyguide": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow vented flowerpecker": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow vented warbler": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellow wattled lapwing": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "yellowhammer": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },
    "zitting cisticola": {
        "id": " ",
        "name": " ",
        "order": " ",
        "family": " ",
        "scientific name": " ",
        "nepali": " ",
        "details": " "
    },



}