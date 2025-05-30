document.addEventListener("DOMContentLoaded", function () {
    // Map Initialization
    const map = L.map("map").setView([12.5657, 104.991], 7); // Centered on Cambodia
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  
    // Attractions Data
    const provinces = {
      "Phnom Penh": {
        coords: [11.5564, 104.9282],
        attractions: [
          { "name": "Royal Palace & Silver Pagoda", "description": "The residence of the Cambodian King.", "image": "royalpalace.jfif", "coords": [11.5564, 104.9282] },
          { "name": "National Museum of Cambodia", "description": "A rich collection of Angkorian-era artifacts.", "image": "nationalmuseum.jfif", "coords": [11.5646, 104.9282] },
          { "name": "Tuol Sleng Genocide Museum (S-21)", "description": "A sobering glimpse into Cambodia’s tragic history.", "image": "toulsleang.jfif", "coords": [11.5495, 104.9215] },
          { "name": "Wat Phnom", "description": "A historic temple atop a hill.", "image": "watphnom.jfif", "coords": [11.5731, 104.9236] },
          { "name": "Choeung Ek Killing Fields", "description": "A memorial site honoring the victims of the Khmer Rouge regime.", "image": "choeungek.jpg", "coords": [11.4844, 104.9017] },
          { "name": "Sisowath Quay", "description": "A lively riverside promenade with restaurants and bars.", "image": "sisowathquay.jfif", "coords": [11.5696, 104.9309] }
            ],
        }, 
            "Siem Reap": {
              coords: [13.4125, 103.8667],
              attractions: [
          { "name": "Angkor Wat", "description": "The iconic temple complex and UNESCO World Heritage Site.", "image": "angkorwat.jpg", "coords": [13.4125, 103.8660] },
          { "name": "Bayon Temple", "description": "Known for its massive stone faces and intricate carvings.", "image": "bayontemple.jfif", "coords": [13.4418, 103.8587] },
          { "name": "Ta Prohm", "description": "Famous for being engulfed by jungle, with tree roots intertwining with the temple ruins.", "image": "taphrom.jfif", "coords": [13.4350, 103.8893] },
          { "name": "Tonle Sap Lake", "description": "A vast freshwater lake with floating villages like Kampong Phluk.", "image": "tonlesap.jfif", "coords": [13.2385, 103.9846] },
          { "name": "Phnom Kulen National Park", "description": "A sacred mountain with waterfalls and ancient carvings.", "image": "phnomkulen.jfif", "coords": [13.6100, 104.1060] },
          { "name": "Banteay Srei", "description": "A smaller but exquisitely carved temple known as the 'Citadel of Women'.", "image": "banteaysrei.jpg", "coords": [13.5989, 103.9628] }
             ],
        },
            "Battambang": {
              coords: [13.1007, 103.1992],
              attractions: [
                { name: "Phnom Sampeau", description: "Known for the Killing Caves and bat exodus at sunset.", image: "phnomsampeau.jpg", coords: [13.0878, 103.2032] },
                { name: "Bamboo Train (Norry)", description: "A fun ride on an improvised train system.", image: "bambootrain.jpg", coords: [13.1096, 103.2022] },
                { name: "Ek Phnom Temple", description: "A tranquil pre-Angkorian temple surrounded by rice fields.", image: "watek.jfif", coords: [13.1267, 103.2043] },
                { name: "Battambang Provincial Museum", description: "Displays ancient artifacts from the region.", image: "battambangmuseum.webp", coords: [13.1007, 103.1992] }
              ],
        },
            "Preah Sihanouk": {
              coords: [10.6333, 103.5000],
              attractions: [
                { name: "Koh Rong Island", description: "Famous for its turquoise waters and white-sand beaches.", image: "kohrong.jpg", coords: [10.6833, 103.2333] },
                { name: "Koh Rong Samloem Island", description: "A serene retreat for nature lovers.", image: "kohrongsanloem.jpg", coords: [10.6100, 103.3100] },
                { name: "Otres Beach", description: "A quieter, less crowded beach with cozy resorts.", image: "otresbeach.jfif", coords: [10.5767, 103.5196] },
                { name: "Ream National Park", description: "Offers mangrove forests, wildlife, and hiking trails.", image: "reampark.jfif", coords: [10.5006, 103.6206] }
              ],
        },
            "Kampot": {
              coords: [10.6100, 104.1800],
              attractions: [
                { name: "Bokor Mountain (Bokor National Park)", description: "A mountain retreat with old colonial buildings and cool weather.", image: "bokormt.jfif", coords: [10.6531, 104.0519] },
                { name: "Kampot Pepper Farms", description: "Famous for producing world-class pepper, with guided tours available.", image: "kampotfarm.jfif", coords: [10.6200, 104.1800] },
                { name: "Teuk Chhou Rapids", description: "A natural recreation spot for swimming and picnics.", image: "teukchue.jpg", coords: [10.5967, 104.1467] },
                { name: "Salt Fields", description: "Traditional salt farming with picturesque landscapes.", image: "saltfarm.jfif", coords: [10.5742, 104.1774] }
              ],
         },
            "Kep": {
              coords: [10.4900, 104.3200],
              attractions: [
                { name: "Kep National Park", description: "A lush park with trails and viewpoints overlooking the sea.", image: "keppark.jfif", coords: [10.4800, 104.3167] },
                { name: "Crab Market", description: "Famous for fresh seafood and the iconic Cambodian crab.", image: "crabmarket.jfif", coords: [10.4724, 104.3188] },
                { name: "Koh Tonsay (Rabbit Island)", description: "A peaceful island escape with pristine beaches.", image: "kohtonsay.jpg", coords: [10.4197, 104.3334] },
                { name: "Old French Villas", description: "Ruins of colonial-era villas scattered across the town.", image: "oldfrenchvilla.jfif", coords: [10.4811, 104.3175] }
              ],
         },
            "Pursat": {
              coords: [12.5333, 103.9167],
              attractions: [
                { name: "Tonlé Sap Floating Villages (Kompong Luong)", description: "A vibrant floating community on Tonlé Sap Lake.", image: "kampongluong.jfif", coords: [12.4750, 104.1025] },
                { name: "Cardamom Mountains", description: "A biodiversity hotspot ideal for trekking and nature exploration.", image: "cardamoms.jfif", coords: [12.4167, 103.5000] },
                { name: "Pursat River Park", description: "A serene riverside park with local charm.", image: "pursatriver.jfif", coords: [12.5363, 103.9203] },
                { name: "Krakor District", description: "Known for its traditional fishing communities.", image: "krakor.jfif", coords: [12.5321, 104.0900] }
              ],
        },
            "Kampong Chhnang": {
              coords: [12.2500, 104.6667],
              attractions: [
                { name: "Pottery Village", description: "Famous for traditional pottery-making techniques.", image: "pottery.jfif", coords: [12.2500, 104.6667] },
                { name: "Floating Villages", description: "Unique stilted houses and boat-based lifestyles.", image: "floatingvillage.jfif", coords: [12.2490, 104.6933] },
                { name: "Phnom Krang Romeas", description: "A hilltop temple with great views of the province.", image: "krang.jpg", coords: [12.2495, 104.6672] },
                { name: "Tonle Sap Lake", description: "A crucial ecosystem and a vital resource for local communities.", image: "tonlesap.jfif", coords: [12.2670, 104.7500] },
                { name: "Phnom Kong Rei", description: "A legendary mountain in Kampong Chhnang, Cambodia, known for its silhouette resembling a sleeping woman from Khmer folklore. Popular for hiking, caves, and panoramic views.", image: "phnomneang.jpg", coords: [12.3058, 104.4500] }
              ],
        },
            "Kampong Cham": {
              coords: [12.0000, 105.4500],
              attractions: [
                { name: "Bamboo Bridge & Koh Paen Island", description: "A handwoven bridge leading to a serene island.", image: "kohpaen.jpg", coords: [12.0000, 105.4500] },
                { name: "Wat Nokor Bachey", description: "An 11th-century Angkorian temple complex.", image: "nokorbach.jpg", coords: [12.0122, 105.4655] },
                { name: "French Colonial Buildings", description: "Heritage architecture reflecting Cambodia's colonial history.", image: "french.jpg", coords: [12.0008, 105.4527] },
                { name: "Han Chey Mountain", description: "A hill with ancient temples and panoramic views.", image: "hanchey.webp", coords: [12.1240, 105.5238] },
                { name: "Prey Nor Kor Knong-Krau Temple", description: "A twin temple with intricate carvings.", image: "preynorkor.jfif", coords: [12.0671, 105.4723] }
              ],
        },
            "Kampong Thom": {
              coords: [12.7100, 104.8880],
              attractions: [
                { name: "Sambor Prei Kuk", description: "A UNESCO World Heritage Site with pre-Angkorian temples.", image: "samborpreikuk.jfif", coords: [12.8961, 105.0300] },
                { name: "Phnom Santuk", description: "A sacred mountain adorned with Buddhist shrines and statues.", image: "phnomsantuk.jfif", coords: [12.7097, 105.1220] },
                { name: "Steung Sen River", description: "A picturesque river ideal for relaxation and boating.", image: "stuengsen.jpg", coords: [12.7083, 105.1233] },
                { name: "Andet Temple", description: "A small temple showcasing pre-Angkorian art.", image: "andettemple.jfif", coords: [12.8899, 104.9641] },
                { name: "Phnom Penha", description: "A tranquil site with panoramic views of the countryside.", image: "images/phnom_penha.jpg", coords: [12.8000, 105.0200] }
              ],
        },
            "Kampong Speu": {
              coords: [11.5333, 104.3333],
              attractions: [
                { name: "Phnom Aural", description: "The highest mountain in Cambodia, known for its natural beauty.", image: "images/phnom_aural.jpg", coords: [11.8000, 104.1000] },
                { name: "Kirirom National Park", description: "A lush national park with diverse wildlife and scenic hiking trails.", image: "images/kirirom_national_park.jpg", coords: [11.3331, 104.0000] },
                { name: "Chambok Eco-tourism Site", description: "A site focused on nature and eco-tourism, offering outdoor activities.", image: "images/chambok.jpg", coords: [11.4430, 104.0870] },
                { name: "Ampe Phnom", description: "A charming picnic area along a riverbank with a suspension bridge.", image: "images/ampe_phnom.jpg", coords: [11.4600, 104.1500] },
                { name: "Oudong Resort", description: "A peaceful spot for weekend getaways with swimming and leisure activities.", image: "images/oudong_resort.jpg", coords: [11.5000, 104.2000] }
              ],
         },
            "Prey Veng": {
              coords: [11.4850, 105.3250],
              attractions: [
                { name: "Ba Phnom Temple", description: "An ancient hilltop temple offering stunning views and historical significance.", image: "images/ba_phnom_temple.jpg", coords: [11.3367, 105.4047] },
                { name: "Prey Veng Pagoda", description: "A serene pagoda surrounded by beautiful landscapes.", image: "images/prey_veng_pagoda.jpg", coords: [11.5000, 105.4500] },
                { name: "Neak Loeung Bridge", description: "A modern landmark crossing the mighty Mekong River.", image: "images/neak_loeung_bridge.jpg", coords: [11.2600, 105.2700] },
                { name: "Chea Sim University Garden", description: "A peaceful garden perfect for relaxation and picnics.", image: "images/university_garden.jpg", coords: [11.3700, 105.4100] },
                { name: "Baray Andet Reservoir", description: "An ancient reservoir providing picturesque views and tranquility.", image: "images/baray_andet.jpg", coords: [11.4000, 105.3700] }
              ],
         },
            "Svay Rieng": {
              coords: [11.0870, 105.7990],
              attractions: [
                { name: "Bavet International Border", description: "A bustling border town known for its casinos and trade activities.", image: "images/bavet_border.jpg", coords: [11.0830, 106.0675] },
                { name: "Svay Rieng Pagoda", description: "A peaceful pagoda showcasing Khmer architecture.", image: "images/svay_rieng_pagoda.jpg", coords: [11.1000, 105.9500] },
                { name: "Ang Trapeang Thmor", description: "A wetland conservation area teeming with birdlife and natural beauty.", image: "images/ang_trapeang_thmor.jpg", coords: [11.1200, 106.0000] },
                { name: "Svay Park", description: "A lovely recreational park popular among locals.", image: "images/svay_park.jpg", coords: [11.1200, 105.9700] },
                { name: "Svay Rieng Cultural Center", description: "A hub for learning about the province's history and culture.", image: "images/cultural_center.jpg", coords: [11.0900, 106.0200] }
              ],
        },
            "Takeo": {
              coords: [10.9900, 104.7830],
              attractions: [
                { name: "Phnom Da Temple", description: "An ancient pre-Angkorian temple built on a hilltop.", image: "images/phnom_da.jpg", coords: [10.8920, 104.7930] },
                { name: "Angkor Borei Museum", description: "A museum showcasing artifacts from the Funan era.", image: "images/angkor_borei_museum.jpg", coords: [10.8900, 104.8000] },
                { name: "Takeo Lake", description: "A serene lake ideal for boating and relaxation.", image: "images/takeo_lake.jpg", coords: [10.8700, 104.8200] },
                { name: "Chiso Mountain", description: "A mountain with an ancient temple and panoramic views.", image: "images/chiso_mountain.jpg", coords: [10.8495, 104.7683] },
                { name: "Tonle Bati", description: "A scenic lake surrounded by historic temples.", image: "images/tonle_bati.jpg", coords: [10.9036, 104.8389] }
              ],
        },
            "Kandal": {
              coords: [11.5000, 104.9167],
              attractions: [
                { name: "Oudong Mountain", description: "A historic site that served as the royal capital of Cambodia.", image: "images/oudong_mountain.jpg", coords: [11.8480, 104.7880] },
                { name: "Wat Phnom Bat", description: "A tranquil temple atop a hill.", image: "images/wat_phnom_bat.jpg", coords: [11.8500, 104.7600] },
                { name: "Prek Phnov Village", description: "A charming village known for its traditional Khmer lifestyle.", image: "images/prek_phnov.jpg", coords: [11.8600, 104.7500] },
                { name: "Koh Dach (Silk Island)", description: "An island famous for its silk weaving and handicrafts.", image: "images/koh_dach.jpg", coords: [11.6150, 104.9080] },
                { name: "Phnom Tamao Wildlife Rescue Center", description: "A sanctuary for rescued wildlife, including elephants and tigers.", image: "images/phnom_tamao.jpg", coords: [11.3170, 104.7878] }
              ],
        },
            "Koh Kong": {
              coords: [11.6150, 103.0000],
              attractions: [
                { name: "Tatai Waterfall", description: "A stunning waterfall surrounded by lush jungle, ideal for swimming and picnics.", image: "images/tatai_waterfall.jpg", coords: [11.5406, 103.1085] },
                { name: "Cardamom Mountains", description: "A vast mountain range offering trekking, wildlife, and eco-tourism experiences.", image: "images/cardamom_mountains.jpg", coords: [11.5275, 103.2500] },
                { name: "Koh Kong Island", description: "Cambodia's largest island, known for its pristine beaches and crystal-clear waters.", image: "images/koh_kong_island.jpg", coords: [11.3316, 102.9904] },
                { name: "Peam Krasaop Wildlife Sanctuary", description: "A mangrove forest teeming with diverse wildlife and ideal for boat tours.", image: "images/peam_krasaop.jpg", coords: [11.5783, 103.0125] },
                { name: "Chi Phat Community-Based Eco-Tourism", description: "A sustainable eco-tourism village offering jungle treks and river adventures.", image: "images/chi_phat.jpg", coords: [11.3472, 103.1858] }
              ],
        },
            "Preah Vihear": {
              coords: [14.0000, 104.8000],
              attractions: [
                { name: "Preah Vihear Temple", description: "A UNESCO World Heritage site perched atop a mountain, offering breathtaking views.", image: "images/preah_vihear_temple.jpg", coords: [14.3922, 104.6772] },
                { name: "Koh Ker Temple Complex", description: "An ancient capital of the Khmer Empire with fascinating temples.", image: "images/koh_ker.jpg", coords: [13.7878, 104.5446] },
                { name: "BeTreed Adventures", description: "An eco-tourism site featuring ziplining, hiking, and wildlife conservation.", image: "images/betreed_adventures.jpg", coords: [14.2500, 104.7000] },
                { name: "Sra Em Village", description: "A peaceful village near the Preah Vihear Temple, offering local culture and hospitality.", image: "images/sra_em.jpg", coords: [14.4000, 104.6667] },
                { name: "Rovieng Forest", description: "A dense forest with rich biodiversity, perfect for eco-tourism activities.", image: "images/rovieng_forest.jpg", coords: [14.2000, 104.5000] }
              ],
        },
            "Oddar Meanchey": {
              coords: [14.1600, 103.5000],
              attractions: [
                { name: "Anlong Veng Historical Site", description: "A key site from the Khmer Rouge era, including Pol Pot's residence.", image: "images/anlong_veng.jpg", coords: [14.1500, 103.5000] },
                { name: "Dangrek Mountains", description: "A mountain range along the Cambodian-Thai border, rich in history and nature.", image: "images/dangrek_mountains.jpg", coords: [14.2000, 103.5500] },
                { name: "Banteay Chhmar Temple", description: "An expansive temple complex showcasing intricate carvings and ancient architecture.", image: "images/banteay_chhmar.jpg", coords: [14.0906, 103.0447] },
                { name: "Samraong City", description: "A growing city that serves as the province's capital, with a mix of modern and traditional influences.", image: "images/samraong_city.jpg", coords: [14.1811, 103.5172] },
                { name: "Trapeang Thma Dam", description: "A historic dam built during the Khmer Rouge era, now a scenic spot.", image: "images/trapeang_thma_dam.jpg", coords: [14.2500, 103.4500] }
              ],
        },
            "Banteay Meanchey": {
              coords: [13.5850, 102.9940],
              attractions: [
                { name: "Banteay Chhmar Temple", description: "A remote and majestic temple complex with intricate bas-reliefs.", image: "images/banteay_chhmar_temple.jpg", coords: [14.0906, 103.0447] },
                { name: "Malai Bamboo Train", description: "A unique ride on a bamboo train through picturesque countryside.", image: "images/malai_bamboo_train.jpg", coords: [14.0000, 103.1000] },
                { name: "Poipet Border Market", description: "A bustling market at the Cambodia-Thailand border.", image: "images/poipet_market.jpg", coords: [13.6589, 102.5651] },
                { name: "Ang Trapeang Thmor", description: "A wildlife reserve home to the rare Sarus Crane.", image: "images/ang_trapeang_thmor_bmc.jpg", coords: [13.7641, 103.0644] },
                { name: "Sisophon City", description: "The provincial capital known for its local markets and relaxed vibe.", image: "images/sisophon_city.jpg", coords: [13.5833, 103.2000] }
              ],
         },
            "Mondulkiri": {
              coords: [12.4500, 107.2000],
              attractions: [
                { name: "Bou Sra Waterfall", description: "A spectacular multi-tiered waterfall surrounded by dense jungle, perfect for relaxation and photography.", image: "images/bou_sra_waterfall.jpg", coords: [12.4991, 107.1509] },
                { name: "Mondulkiri Elephant Sanctuary", description: "A sanctuary offering ethical elephant encounters and jungle treks.", image: "images/mondulkiri_elephant_sanctuary.jpg", coords: [12.5000, 107.1667] },
                { name: "Sen Monorom Waterfall", description: "A serene waterfall located close to Mondulkiri’s provincial capital.", image: "images/sen_monorom_waterfall.jpg", coords: [12.4511, 107.2035] },
                { name: "Phnom Doh Kromom", description: "A sacred hill offering panoramic views of Mondulkiri's rolling hills and valleys.", image: "images/phnom_doh_kromom.jpg", coords: [12.4635, 107.1885] },
                { name: "Pine Forests of Mondulkiri", description: "A unique landscape in Cambodia, featuring cool climates and lush pine forests.", image: "images/pine_forests_mondulkiri.jpg", coords: [12.4800, 107.1600] }
              ],
        },
            "Ratanakiri": {
              coords: [13.7370, 106.9870],
              attractions: [
                { name: "Yeak Laom Volcanic Lake", description: "A pristine volcanic crater lake surrounded by jungle, ideal for swimming and picnicking.", image: "images/yeak_laom_lake.jpg", coords: [13.7400, 107.0125] },
                { name: "Ka Chanh Waterfall", description: "A picturesque waterfall offering cool waters and a tranquil environment.", image: "images/ka_chanh_waterfall.jpg", coords: [13.7188, 107.0517] },
                { name: "Virachey National Park", description: "A vast national park with diverse wildlife, trekking opportunities, and cultural encounters with indigenous communities.", image: "images/virachey_national_park.jpg", coords: [14.0800, 107.5000] },
                { name: "Chaa Ong Waterfall", description: "A serene waterfall surrounded by lush greenery, perfect for nature lovers.", image: "images/chaa_ong_waterfall.jpg", coords: [13.7150, 107.0510] },
                { name: "Banlung Market", description: "A bustling market offering local produce, handmade crafts, and a glimpse into everyday life in Ratanakiri.", image: "images/banlung_market.jpg", coords: [13.7401, 107.0000] }
              ],
        },
            "Stung Treng": {
              coords: [13.5230, 105.9680],
              attractions: [
                { name: "Mekong Dolphins at Kampi", description: "A rare opportunity to see endangered Irrawaddy dolphins in their natural habitat.", image: "images/mekong_dolphins.jpg", coords: [13.5300, 105.9700] },
                { name: "Preah Nimith Waterfall", description: "A scenic waterfall on the Mekong River, offering breathtaking views and photo opportunities.", image: "images/preah_nimith_waterfall.jpg", coords: [13.6500, 105.9700] },
                { name: "Anlong Cheuteal Beach", description: "A tranquil riverside beach perfect for relaxation and picnics.", image: "images/anlong_cheuteal_beach.jpg", coords: [13.6000, 106.0000] },
                { name: "O'Svay Community", description: "An eco-tourism destination showcasing local culture and natural beauty.", image: "images/osvay_community.jpg", coords: [13.5500, 106.1000] },
                { name: "Stung Treng Town", description: "A charming riverside town with a vibrant local market and Mekong River views.", image: "images/stung_treng_town.jpg", coords: [13.5265, 105.9700] }
              ],
        },
            "Kratie": {
              coords: [12.4880, 106.0180],
              attractions: [
                { name: "Koh Trong Island", description: "An eco-tourism island with bicycle trails, fruit orchards, and a relaxed atmosphere.", image: "images/koh_trong_island.jpg", coords: [12.5008, 106.0147] },
                { name: "Mekong River Dolphins", description: "A popular spot to watch the rare Irrawaddy dolphins in their natural habitat.", image: "images/mekong_river_dolphins.jpg", coords: [12.4883, 106.0189] },
                { name: "Sambor Prei Kuk", description: "A collection of ancient temples showcasing Cambodia's rich history.", image: "images/sambor_prei_kuk.jpg", coords: [12.8900, 105.0333] },
                { name: "100 Pillars Pagoda", description: "A historic pagoda featuring intricate carvings and spiritual significance.", image: "images/100_pillars_pagoda.jpg", coords: [12.5000, 106.0170] },
                { name: "Kratie Town Market", description: "A lively market offering local food, crafts, and souvenirs.", image: "images/kratie_town_market.jpg", coords: [12.4880, 106.0180] }
              ],
        },
            "Tbong Khmum": {
              coords: [11.9000, 105.6000],
              attractions: [
                { name: "Wat Nokor Bachey", description: "A fascinating blend of an ancient temple and a modern pagoda.", image: "images/wat_nokor_bachey.jpg", coords: [11.7897, 105.6976] },
                { name: "Memot Rubber Plantation", description: "Explore Cambodia’s history with rubber cultivation.", image: "images/memot_rubber_plantation.jpg", coords: [11.3167, 105.2000] },
                { name: "Phnom Han Chey", description: "A riverside hilltop temple with stunning Mekong views.", image: "images/phnom_han_chey.jpg", coords: [11.4583, 105.6625] },
                { name: "Tonlé Touch Lake", description: "A peaceful natural area great for birdwatching.", image: "images/tonle_touch_lake.jpg", coords: [11.3700, 105.8700] },
                { name: "Krek Silk Village", description: "Famous for traditional silk weaving.", image: "images/krek_silk_village.jpg", coords: [11.9000, 105.5333] }
              ],
        },
            "Pailin": {
              coords: [12.8500, 102.6000],
              attractions: [
                { name: "Phnom Yat Temple", description: "A sacred hilltop temple offering panoramic views of the surrounding area.", image: "images/phnom_yat_temple.jpg", coords: [12.7250, 102.6178] },
                { name: "Gem Mines", description: "Pailin is famous for its gemstone industry, and visitors can learn about gem mining.", image: "images/gem_mines.jpg", coords: [12.6990, 102.6098] },
                { name: "Ou Eb Waterfall", description: "A picturesque spot surrounded by greenery.", image: "images/ou_eb_waterfall.jpg", coords: [12.6298, 102.6090] },
                { name: "Pailin City Park", description: "A serene place for locals and visitors to relax.", image: "images/pailin_city_park.jpg", coords: [12.6695, 102.6095] },
                { name: "Cambodian-Thai Border Markets", description: "A bustling area for trading goods between the two countries.", image: "images/cambodian_thai_border_markets.jpg", coords: [12.7150, 102.5995] }
              ],
        },
    };
  
    // Populate the dropdown with provinces
    const provinceSelect = document.getElementById("province-select");
    Object.keys(provinces).forEach((province) => {
      const option = document.createElement("option");
      option.value = province;
      option.textContent = province;
      provinceSelect.appendChild(option);
    });
  
    // Add markers for attractions on the map
    function addAttractionsToMap(province) {
      const attractions = provinces[province].attractions;
      attractions.forEach(attraction => {
        const { name, description, coords, image } = attraction;
        const marker = L.marker(coords).addTo(map);
        marker.bindPopup(`
          <b>${name}</b><br>
          ${description}<br>
          <img src="${image}" alt="${name}" style="width: 100px; height: auto;">
        `);
      });
    }
  
    // Handle province selection
    provinceSelect.addEventListener("change", function () {
      const selectedProvince = provinceSelect.value;
      if (selectedProvince) {
        // Set the map view to the selected province's coordinates
        const provinceCoords = provinces[selectedProvince].coords;
        map.setView(provinceCoords, 12); // Zoom into the selected province
  
        // Clear existing markers (if any)
        map.eachLayer(function (layer) {
          if (layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });
  
        // Add markers for the attractions in the selected province
        addAttractionsToMap(selectedProvince);
      }
    });
  
    document.addEventListener('DOMContentLoaded', function() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
      
        // Check for saved dark mode preference in localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
      
        // Apply dark mode if previously enabled
        if (isDarkMode) {
          body.classList.add('dark-mode');
          darkModeToggle.textContent = '☀️'; // Change to sun icon
        }
      
        // Toggle dark mode on button click
        darkModeToggle.addEventListener('click', function() {
          body.classList.toggle('dark-mode');
          const isDarkModeEnabled = body.classList.contains('dark-mode');
      
          // Save preference to localStorage
          if (isDarkModeEnabled) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️'; // Change to sun icon
          } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = '🌙'; // Change to moon icon
          }
        });
      });
  
    // Scroll Animations
    const reveals = document.querySelectorAll(".reveal");
    function revealElements() {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", revealElements);
    revealElements();
 });
