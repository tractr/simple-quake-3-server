#!node

// ###############################################################
//      MAPS LIST
// ###############################################################
const mapsList = [
    {
        name: "17t6remix",
        title: "The Very End of The Longest Yard",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/17t6remix.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/17t6remix.jpg",
        source: "DIXOFT"
    },
    {
        name: "tig_den",
        title: "Tig's Den",
        type: "dm",
        map: "https://ee.ws.q3df.org/maps/downloads/tig_den.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/tig_den.jpg",
        source: "Tigger-oN"
    },
    {
        name: "q3rev",
        title: "Revelation",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/q3rev.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/q3rev.jpg",
        source: "Darren Lafreniere"
    },
    {
        name: "phantq3dm6_mc",
        title: "Geotechnic",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/phantq3dm6_mc.pk3",
        image: "https://lvlworld.com/levels/phantq3dm6_mc/phantq3dm6_mclg.jpg",
        source: "Phantazm11"
    },
    {
        name: "phantq3dm4",
        title: "Windsong Keep",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/phantq3dm4.pk3",
        image: "https://lvlworld.com/levels/phantq3dm4/phantq3dm4lg.jpg",
        source: "Phantazm11"
    },
    {
        name: "phantq3dm3_rev",
        title: "Corrosion",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/phantq3dm3_rev.pk3",
        image: "https://lvlworld.com/levels/phantq3dm3_rev/phantq3dm3_revlg.jpg",
        source: "Phantazm11"
    },
    {
        name: "kaos",
        title: "Khaooohs",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/kaos.pk3",
        image: "https://lvlworld.com/levels/kaos/kaoslg.jpg",
        source: "Vondur"
    },
    {
        name: "bedlam",
        title: "Bedlam",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/bedlam.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/bedlam.jpg",
        source: "The Partisan"
    },
    {
        name: "obs3dm7",
        title: "The Killing Machine for Q3A",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/obs3dm7.pk3",
        image: "https://lvlworld.com/levels/obs3dm7/obs3dm7800x600.jpg",
        source: "Obsessed"
    },
    {
        name: "obs3dm5",
        title: "Time To Kill The Pain",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/obs3dm5.pk3",
        image: "https://lvlworld.com/levels/obs3dm5/obs3dm5800x600.jpg",
        source: "Obsessed"
    },
    {
        name: "obs3dm4",
        title: "Chronophagia",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/obs3dm4.pk3",
        image: "https://lvlworld.com/levels/obs3dm4/obs3dm4800x600.jpg",
        source: "Obsessed"
    },
    {
        name: "obs3dm3v2",
        title: "The Vomitorium (v2)",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/obs3dm3v2.pk3",
        extra: [
            {
                url: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/z_obs3dm3v2.pk3",
                filename: "z_obs3dm3v2.pk3"
            }
        ],
        image: "https://lvlworld.com/levels/obs3dm3v2/obs3dm3v2800x600.jpg",
        source: "Obsessed"
    },
    {
        name: "rcq3dm1",
        title: "A Glasswork Fishbowl",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/rcq3dm1.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/rcq3dm1.jpg",
        source: "Redchurch"
    },
    {
        name: "q3fig",
        title: "Final Inspiration",
        type: "dm",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/q3fig.pk3",
        image: "https://lvlworld.com/levels/q3fig/q3fig800x600.jpg",
        source: "Gooball"
    },
    {
        name: "q3tbdm3",
        title: "Pit and the Pendulum",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/q3tbdm3.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/q3tbdm3.jpg",
        source: "Kodiak"
    },
    {
        name: "q3tbdm4",
        title: "Lost Forever",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/q3tbdm4.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/q3tbdm4.jpg",
        source: "Kodiak"
    },
    {
        name: "storm3tourney6",
        title: "Halls of the Damned",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/storm3tourney6.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/storm3tourney6.jpg",
        source: "StormShadow"
    },
    {
        name: "chaosdungeons",
        title: "Chaos Dungeons",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/chaosdungeons.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/chaosdungeons.jpg",
        source: "Nihil"
    },
    {
        name: "chaosdungeons2",
        title: "Gate to Hell",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/chaosdungeons2.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/chaosdungeons2.jpg",
        source: "Nihil"
    },
    {
        name: "q3ndm3",
        title: "Cadavre's domain",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/q3ndm3.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/q3ndm3.jpg",
        source: "Nihil"
    },
    {
        name: "13arena",
        title: "Lost Arena",
        type: "dm",
        map: "http://sst13.de/map-13arena.pk3",
        image: "https://lvlworld.com/levels/map-13arena/map-13arena800x600.jpg",
        source: "SST13"
    },
    {
        name: "13house",
        title: "House Of Chthon",
        type: "dm",
        map: "http://sst13.de/map-13house.pk3",
        image: "https://lvlworld.com/levels/map-13house/map-13house800x600.jpg",
        source: "SST13"
    },
    {
        name: "13tokay",
        title: "Tokay Arena",
        type: "dm",
        map: "http://sst13.de/map-13tokay.pk3",
        image: "http://sst13.de/pics/tokay1.jpg",
        source: "SST13"
    },
    {
        name: "13power",
        title: "Powerstation - Extended",
        type: "dm",
        map: "http://sst13.de/map-13power.pk3",
        image: "http://sst13.de/pics/power1.jpg",
        source: "SST13"
    },
    {
        name: "13power_ctf",
        title: "Powerstation CTF",
        type: "ctf",
        map: "http://sst13.de/map-13power_ctf.pk3",
        image: "http://sst13.de/pics/power_ctf1.jpg",
        source: "SST13"
    },
    {
        name: "13matrix",
        title: "The Campgrounds II - Matrix Edition",
        type: "dm",
        map: "http://sst13.de/map-13matrix.pk3",
        image: "http://sst13.de/pics/matrix1.png",
        source: "SST13"
    },
    {
        name: "13tomb",
        title: "Ziggurat Tomb",
        type: "dm",
        map: "http://sst13.de/map-13tomb.pk3",
        image: "http://sst13.de/pics/tomb1.jpg",
        source: "SST13"
    },
    {
        name: "13circle",
        title: "Circle Of Death",
        type: "ctf",
        map: "http://sst13.de/map-13circle.pk3",
        image: "http://sst13.de/pics/circle1.jpg",
        source: "SST13"
    },
    {
        name: "13circle_xt",
        title: "Circle Of Death - Extended",
        type: "ctf",
        map: "http://sst13.de/map-13circle_xt.pk3",
        image: "http://sst13.de/pics/circle_xt1.jpg",
        source: "SST13"
    },
    {
        name: "13agony",
        title: "Agony",
        type: "dm",
        map: "http://sst13.de/map-13agony.pk3",
        image: "http://sst13.de/pics/agony1.jpg",
        source: "SST13"
    },
    {
        name: "13agony_ctf",
        title: "Agony CTF",
        type: "ctf",
        map: "http://sst13.de/map-13agony_ctf.pk3",
        image: "http://sst13.de/pics/agony_ctf1.jpg",
        source: "SST13"
    },
    {
        name: "13plant",
        title: "Incineration Plant",
        type: "ctf",
        map: "http://sst13.de/map-13plant.pk3",
        image: "http://sst13.de/pics/plant1.jpg",
        source: "SST13"
    },
    {
        name: "13yard",
        title: "The Lost Yard",
        type: "dm",
        map: "http://sst13.de/map-13yard.pk3",
        image: "http://sst13.de/pics/yard1.jpg",
        source: "SST13"
    },
    {
        name: "13yard_xt",
        title: "The Lost Yard - Extended",
        type: "dm",
        map: "http://sst13.de/map-13yard_xt.pk3",
        image: "http://sst13.de/pics/yard1.jpg",
        source: "SST13"
    },
    {
        name: "13hive",
        title: "Iron Hive",
        type: "dm",
        map: "http://sst13.de/map-13hive.pk3",
        image: "http://sst13.de/pics/hive1.jpg",
        source: "SST13"
    },
    {
        name: "13star",
        title: "Starforce",
        type: "dm",
        map: "http://sst13.de/map-13star.pk3",
        image: "http://sst13.de/pics/star1.jpg",
        source: "SST13"
    },
    {
        name: "13dawn",
        title: "Gothic Dawn",
        type: "dm",
        map: "http://sst13.de/map-13dawn.pk3",
        image: "http://sst13.de/pics/dawn1.jpg",
        source: "SST13"
    },
    {
        name: "13camp",
        title: "The Campgrounds II CTF",
        type: "ctf",
        map: "http://sst13.de/map-13camp.pk3",
        image: "http://sst13.de/pics/camp1.jpg",
        source: "SST13"
    },
    {
        name: "13simple",
        title: "Simple Death",
        type: "dm",
        map: "http://sst13.de/map-13simple.pk3",
        image: "http://sst13.de/pics/simple1.jpg",
        source: "SST13"
    },
    {
        name: "13octo",
        title: "Octagonal Overdose",
        type: "ctf",
        map: "http://sst13.de/map-13octo.pk3",
        image: "http://sst13.de/pics/octo1.jpg",
        source: "SST13"
    },
    {
        name: "13death",
        title: "The Place Of Many Deaths CTF",
        type: "ctf",
        map: "http://sst13.de/map-13death.pk3",
        image: "http://sst13.de/pics/death1.jpg",
        source: "SST13"
    },
    {
        name: "13dream",
        title: "Dreamscape",
        type: "ctf",
        map: "http://sst13.de/map-13dream.pk3",
        image: "http://sst13.de/pics/dream1.jpg",
        source: "SST13"
    },
    {
        name: "13dream_xt",
        title: "Dreamscape - Extended",
        type: "ctf",
        map: "http://sst13.de/map-13dream_xt.pk3",
        image: "http://sst13.de/pics/dream_xt1.jpg",
        source: "SST13"
    },
    {
        name: "13base",
        title: "Hangar Base",
        type: "dm",
        map: "http://sst13.de/map-13base.pk3",
        image: "http://sst13.de/pics/base1.jpg",
        source: "SST13"
    },
    {
        name: "13cube",
        title: "Hypercube 13",
        type: "dm",
        map: "http://sst13.de/map-13cube.pk3",
        image: "http://sst13.de/pics/cube1.jpg",
        source: "SST13"
    },
    {
        name: "13island",
        title: "Stoneface Islands",
        type: "ctf",
        map: "http://sst13.de/map-13island.pk3",
        image: "http://sst13.de/pics/island1.jpg",
        source: "SST13"
    },
    {
        name: "13edge",
        title: "Claustrophobic Edge",
        type: "dm",
        map: "http://sst13.de/map-13edge.pk3",
        image: "http://sst13.de/pics/edge1.jpg",
        source: "SST13"
    },
    {
        name: "13ground",
        title: "The Proving Grounds CTF",
        type: "ctf",
        map: "http://sst13.de/map-13ground.pk3",
        image: "http://sst13.de/pics/ground1.jpg",
        source: "SST13"
    },
    {
        name: "13ground_xt",
        title: "The Proving Grounds CTF - Extended",
        type: "ctf",
        map: "http://sst13.de/map-13ground_xt.pk3",
        image: "http://sst13.de/pics/ground_xt1.jpg",
        source: "SST13"
    },
    {
        name: "13stone",
        title: "Floating Stonefaces",
        type: "ctf",
        map: "http://sst13.de/map-13stone.pk3",
        image: "http://sst13.de/pics/stone1.jpg",
        source: "SST13"
    },
    {
        name: "13void",
        title: "Dark Void",
        type: "ctf",
        map: "http://sst13.de/map-13void.pk3",
        image: "http://sst13.de/pics/void1.jpg",
        source: "SST13"
    },
    {
        name: "13void_xt",
        title: "Dark Void - Extended",
        type: "ctf",
        map: "http://sst13.de/map-13void_xt.pk3",
        image: "http://sst13.de/pics/void_xt1.jpg",
        source: "SST13"
    },
    {
        name: "13vast",
        title: "The Vast And Furious - 13th RMX",
        type: "ctf",
        map: "http://sst13.de/map-13vast.pk3",
        image: "http://sst13.de/pics/vast1.jpg",
        source: "SST13"
    },
    {
        name: "13place",
        title: "Place Of Two Deaths",
        type: "dm",
        map: "http://sst13.de/map-13place.pk3",
        image: "http://sst13.de/pics/place1.jpg",
        source: "SST13"
    },
    {
        name: "13sky",
        title: "Dead Sun Skies",
        type: "dm",
        map: "http://sst13.de/map-13sky.pk3",
        image: "http://sst13.de/pics/sky1.jpg",
        source: "SST13"
    },
    {
        name: "13dyna",
        title: "Dynablast",
        type: "dm",
        map: "http://sst13.de/map-13dyna.pk3",
        image: "http://sst13.de/pics/dyna1.jpg",
        source: "SST13"
    },
    {
        name: "13black",
        title: "The Black Realm",
        type: "dm",
        map: "http://sst13.de/map-13black.pk3",
        image: "http://sst13.de/pics/black1.jpg",
        source: "SST13"
    },
    {
        name: "13black_se",
        title: "The Black Realm - Special Edition",
        type: "dm",
        map: "http://sst13.de/map-13black_se.pk3",
        image: "http://sst13.de/pics/black_se1.jpg",
        source: "SST13"
    },
    {
        name: "13black_hd",
        title: "The Black Realm - HD",
        type: "dm",
        map: "http://sst13.de/map-13black_hd.pk3",
        image: "http://sst13.de/pics/black_hd1.jpg",
        source: "SST13"
    },
    {
        name: "13out",
        title: "Outpost 20-B",
        type: "dm",
        map: "http://sst13.de/map-13out.pk3",
        image: "http://sst13.de/pics/out1.jpg",
        source: "SST13"
    },
    {
        name: "13hell",
        title: "Hell's Gate - Extended",
        type: "dm",
        map: "https://sst13.de/map-13hell.pk3",
        image: "https://sst13.de/pics/hell1.jpg",
        source: "SST13"
    },
    {
        name: "13zone",
        title: "The Dark Zone - RMX",
        type: "dm",
        map: "https://sst13.de/map-13zone.pk3",
        image: "https://sst13.de/pics/zone1.jpg",
        source: "SST13"
    },
    {
        name: "13gate",
        title: "Arena Gate CTF",
        type: "ctf",
        map: "http://sst13.de/map-13gate.pk3",
        image: "http://sst13.de/pics/gate1.jpg",
        source: "SST13"
    },
    {
        name: "13gate_xt",
        title: "Arena Gate CTF - Extended",
        type: "ctf",
        map: "http://sst13.de/map-13gate_xt.pk3",
        image: "http://sst13.de/pics/gate_xt1.jpg",
        source: "SST13"
    },
    {
        name: "q1edge",
        title: "Claustrophobic Edge",
        type: "dm",
        map: "http://sst13.de/map-13q1edge.pk3",
        image: "http://sst13.de/pics/q1edge1.jpg",
        source: "SST13"
    },
    {
        name: "q1black",
        title: "The Black Realm",
        type: "dm",
        map: "http://sst13.de/map-13q1black.pk3",
        image: "http://sst13.de/pics/q1black1.jpg",
        source: "SST13"
    },
    {
        name: "overkill",
        title: "Overkill! v2",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/overkill.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/overkill.jpg",
        source: "Wiebo"
    },
    {
        name: "wdw3dm4",
        title: "No Remorse!",
        type: "dm",
        map: "http://ws.q3df.org/maps/downloads/wdw3dm4.pk3",
        image: "http://ws.q3df.org/images/levelshots/512x384/wdw3dm4.jpg",
        source: "Wiebo & TymoN"
    },
    {
        name: "eadm1",
        title: "Monochrome",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm1.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm2",
        title: "Have a Banana",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm2.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm3",
        title: "Shady Towers",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm3.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm4",
        title: "Shady Towers 2",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm4.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm5",
        title: "Zion's Quarry",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm5.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm6",
        title: "Asylum",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm6.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm7",
        title: "Reduced Fat Wheat Thins",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm7.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm8",
        title: "Stomping Arena",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm8.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm9",
        title: "Aerodrome",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm9.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm10",
        title: "Circle Jerk",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm10.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm11",
        title: "Impossible Dinosaur Battlefield",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm11.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eadm12",
        title: "Carbon",
        type: "dm",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eadm12.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "eactf1",
        title: "Monochrome CTF",
        type: "ctf",
        map: "https://ws.q3df.org/maps/downloads/eadm.pk3",
        image: "https://ws.q3df.org/images/levelshots/512x384/eactf1.jpg",
        source: "EADM",
        pk3File: "eadm.pk3"
    },
    {
        name: "moddm17",
        title: "The Even Longer Yard",
        type: "ctf",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/moddm17.pk3",
        image: "https://lvlworld.com/levels/moddm17/moddm17lg.jpg",
        source: "LedMan",
    },
    {
        name: "q3wctf1",
        title: "Bloodlust",
        type: "ctf",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/maps-q3wctf.pk3",
        image: "https://lvlworld.com/levels/q3wctf/313495291419776lg.jpg",
        source: "Zoid & Casey",
        pk3File: "maps-q3wctf.pk3"
    },
    {
        name: "q3wctf2",
        title: "Courtyard Conundrum",
        type: "ctf",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/maps-q3wctf.pk3",
        image: "https://lvlworld.com/levels/q3wctf/313495291409416lg.jpg",
        source: "Zoid & Casey",
        pk3File: "maps-q3wctf.pk3"
    },
    {
        name: "q3wctf3",
        title: "Finnegan's Revenge",
        type: "ctf",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/maps-q3wctf.pk3",
        image: "https://lvlworld.com/levels/q3wctf/q3wctflg.jpg",
        source: "Zoid & Casey",
        pk3File: "maps-q3wctf.pk3"
    },
    {
        name: "simple-ctf1",
        title: "Faces of Quake",
        type: "ctf",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/simple-ctf1.pk3",
        image: "https://lvlworld.com/levels/simple-ctf1/simple-ctf11280x960.jpg",
        source: "r3x.theCat"
    },
    {
        name: "simple-ctf2",
        title: "The Longest Fall",
        type: "ctf",
        map: "https://tractr-lan-games-assets.s3.amazonaws.com/quake-3/maps/simple-ctf2.pk3",
        image: "https://lvlworld.com/levels/simple-ctf2/simple-ctf21280x960.jpg",
        source: "r3x.theCat"
    },
];
// ###############################################################

const Axios = require('axios');
const Path = require('path');
const Fs = require('fs');
const MkdirP = require('mkdirp');
const Sharp = require('sharp');

async function download(url, path) {
    console.log(`  -> download ${url}`);
    const writer = Fs.createWriteStream(path);

    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

const custom = [];
let counter = 0;

const pk3sPath = Path.resolve(__dirname, 'pk3s');
MkdirP(pk3sPath);
const imagesPath = Path.resolve(__dirname, 'images');
MkdirP(imagesPath);

async function run() {
    for (const item of mapsList) {

        console.log(`Process ${item.title} (${item.name})`);

        // save pk3
        const pk3Name = item.pk3File ? item.pk3File : `${item.name}.pk3`;
        const pk3Path = Path.resolve(pk3sPath, pk3Name);
        if (!Fs.existsSync(pk3Path)) {
            await download(item.map, pk3Path);
            counter++;
        }

        // save extra files
        if (item.extra) {
            for(const extra of item.extra) {
                const pk3Path = Path.resolve(pk3sPath, extra.filename);
                if (!Fs.existsSync(pk3Path)) {
                    await download(extra.url, pk3Path);
                    counter++;
                }
            }
        }

        // save image
        const imageExt = Path.extname(item.image);
        const imageTempName = imageExt.length ? `temp_${item.name}${imageExt}` : `temp_${item.name}.jpg`;
        const imageTempPath = Path.resolve(imagesPath, imageTempName);
        const imageName = `${item.name}.jpg`; // Force JPG ext
        const imagePath = Path.resolve(imagesPath, imageName);
        if (!Fs.existsSync(imagePath)) {
            await download(item.image, imageTempPath);
            await Sharp(imageTempPath)
                .resize(500)
                .jpeg()
                .toFile(imagePath);
            Fs.unlinkSync(imageTempPath);
        }

        // Push new element
        custom.push({
            name: item.name,
            title: item.title,
            source: item.source,
            description: '',
            type: item.type
        });

    }

    // Save config
    const configPath = Path.resolve(__dirname, 'custom.json');
    Fs.writeFileSync(configPath, JSON.stringify(custom, null, 2), { encoding: "utf-8" });
}

run()
    .then(() => console.log(`Done. ${counter} new map(s) downloaded`))
    .catch(console.error);

