const jajanan = [
  // 1. SURABAYA (Kota)
  {
    nama: "Lapis Surabaya",
    daerah: "Surabaya",
    gambar: "img/lapis-surabaya.jpg",
    deskripsi: "Kue lapis dengan tiga lapisan (kuning-cokelat-kuning) yang terkenal sangat lembut dan menggunakan banyak kuning telur. Populer sebagai oleh-oleh legendaris.",
    resep: [
      "20 butir kuning telur",
      "5 butir putih telur",
      "250g gula pasir",
      "200g margarin/mentega kocok",
      "50g tepung terigu protein rendah",
      "Cokelat bubuk (untuk lapisan tengah)"
    ],
    cara: [
      "Kocok telur dan gula hingga mengembang dan kental.",
      "Masukkan terigu, aduk rata. Masukkan margarin/mentega kocok, aduk balik.",
      "Bagi adonan menjadi tiga, beri cokelat bubuk pada satu bagian.",
      "Panggang per lapisan di loyang terpisah hingga matang.",
      "Susun dan rekatkan dengan selai atau butter cream."
    ]
  },
  // 2. MALANG (Kota)
  {
    nama: "Onde-Onde Ubi Ungu",
    daerah: "Malang",
    gambar: "img/onde-ubi.jpg",
    deskripsi: "Modifikasi Onde-onde dengan isian ubi ungu manis dan kulit luar bertabur wijen. Merupakan inovasi dari onde-onde klasik.",
    resep: [
      "250g tepung ketan",
      "50g tepung beras",
      "100g gula pasir",
      "Air hangat secukupnya",
      "Wijen untuk lapisan",
      "Isian: ubi ungu kukus yang dihaluskan dan diberi sedikit gula"
    ],
    cara: [
      "Campur tepung ketan, tepung beras, gula, dan air hangat, uleni hingga kalis.",
      "Ambil adonan, pipihkan, dan isi dengan adonan ubi ungu.",
      "Bulatkan, celupkan ke air, lalu gulingkan ke wijen.",
      "Goreng dengan api kecil hingga matang dan mengapung."
    ]
  },
  // 3. MOJOKERTO (Kota)
  {
    nama: "Kue Mochi",
    daerah: "Mojokerto",
    gambar: "img/mochi-mojokerto.jpg",
    deskripsi: "Kue kenyal dari tepung ketan, diisi kacang tanah manis, sering dijadikan oleh-oleh.",
    resep: [
      "250g tepung ketan",
      "50g tepung beras",
      "200ml santan hangat",
      "150g gula halus",
      "Isian: kacang tanah sangrai yang dihaluskan dengan gula dan sedikit air"
    ],
    cara: [
      "Campur tepung ketan, tepung beras, gula, dan santan hangat, aduk rata.",
      "Kukus adonan hingga matang dan kenyal.",
      "Ambil adonan, pipihkan, isi dengan isian kacang, lalu bulatkan.",
      "Gulingkan di tepung maizena sangrai agar tidak lengket."
    ]
  },
  // 4. KEDIRI (Kota)
  {
    nama: "Getuk Pisang",
    daerah: "Kediri",
    gambar: "img/getuk-pisang.jpg",
    deskripsi: "Camilan khas Kediri yang terbuat dari pisang raja nangka/kepok, memiliki rasa manis dan sedikit asam yang segar. Dibungkus daun pisang.",
    resep: [
      "1 kg pisang raja nangka/kepok yang matang",
      "250g gula pasir",
      "Daun pisang untuk membungkus",
      "Garam sedikit"
    ],
    cara: [
      "Kukus pisang hingga matang, kupas dan haluskan.",
      "Campur pisang halus, gula, dan garam, aduk rata.",
      "Ambil adonan, letakkan di atas daun pisang, gulung dan padatkan.",
      "Kukus lagi selama 30 menit hingga matang sempurna.",
      "Dinginkan dan potong-potong sebelum disajikan."
    ]
  },
  // 5. BLITAR (Kota)
  {
    nama: "Wajik Kletik",
    daerah: "Blitar",
    gambar: "img/wajik-kletik.jpg",
    deskripsi: "Wajik kecil yang dibungkus dengan kulit jagung, memiliki tekstur 'kletik' (renyah) dari butiran beras ketan yang masih utuh.",
    resep: [
      "250g beras ketan",
      "100g gula merah",
      "100ml santan kental",
      "Garam secukupnya",
      "Kulit jagung (klobot) untuk pembungkus"
    ],
    cara: [
      "Kukus beras ketan hingga setengah matang, lalu aron dengan santan dan garam.",
      "Kukus lagi hingga matang.",
      "Masak gula merah hingga larut dan mengental.",
      "Campurkan ketan matang ke dalam larutan gula, aduk hingga kering dan lengket.",
      "Bungkus wajik kecil-kecil dengan kulit jagung."
    ]
  },
  // 6. PASURUAN (Kota)
  {
    nama: "Kue Tok",
    daerah: "Pasuruan",
    gambar: "img/kue-tok.jpg",
    deskripsi: "Kue berbentuk bulat/oval dari tepung ketan yang kenyal, diisi kacang hijau manis, sering berwarna merah atau hijau.",
    resep: [
      "250g tepung ketan",
      "2 sdm gula halus",
      "Pewarna makanan",
      "Santan hangat secukupnya",
      "Isian: kacang hijau kukus, dihaluskan dengan gula dan garam"
    ],
    cara: [
      "Campur tepung ketan, gula, pewarna, dan santan, uleni hingga kalis.",
      "Ambil adonan, pipihkan, isi dengan isian kacang hijau, dan bulatkan.",
      "Cetak dengan cetakan 'kue tok'.",
      "Kukus di atas daun pisang yang diolesi minyak."
    ]
  },
  // 7. PROBOLINGGO (Kota)
  {
    nama: "Proll Tape",
    daerah: "Probolinggo",
    gambar: "img/proll-tape.jpg",
    deskripsi: "Kue padat yang terbuat dari fermentasi tape singkong, memiliki rasa asam manis khas tape yang kuat. Dipanggang seperti cake.",
    resep: [
      "500g tape singkong, buang sumbunya",
      "100g tepung terigu",
      "100g gula pasir",
      "4 butir telur",
      "100g margarin cair",
      "Keju parut untuk topping"
    ],
    cara: [
      "Haluskan tape singkong.",
      "Kocok telur dan gula hingga mengembang.",
      "Masukkan tape, terigu, dan margarin cair, aduk rata.",
      "Tuang adonan ke loyang, beri topping keju.",
      "Panggang hingga matang."
    ]
  },
  // 8. MADIUN (Kota)
  {
    nama: "Brem",
    daerah: "Madiun",
    gambar: "img/brem-madiun.jpg",
    deskripsi: "Makanan ringan padat yang berasal dari fermentasi air tape ketan, memiliki rasa manis, dingin, dan langsung lumer di mulut.",
    resep: [
      "Air tape ketan murni",
      "Ragi"
    ],
    cara: [
      "Endapkan air tape ketan selama beberapa hari hingga menjadi biang.",
      "Masak biang dengan api kecil hingga mengkristal dan mengeras.",
      "Cetak adonan padat tersebut dalam loyang atau cetakan persegi panjang.",
      "Jemur hingga kering dan keras sebelum dipotong-potong."
    ]
  },
  // 9. BANGKALAN (Kabupaten)
  {
    nama: "Kue Apem",
    daerah: "Bangkalan",
    gambar: "img/apem-bangkalan.jpg",
    deskripsi: "Kue dari tepung beras dan tape singkong, dikukus, disajikan dengan parutan kelapa dan sedikit gula. Populer saat acara adat.",
    resep: [
      "250g tepung beras",
      "100g tape singkong",
      "50g gula pasir",
      "1 sdt ragi instan",
      "Santan hangat secukupnya"
    ],
    cara: [
      "Campur semua bahan, diamkan 1 jam hingga mengembang.",
      "Kukus adonan dalam cetakan kecil hingga matang.",
      "Sajikan dengan parutan kelapa dan siraman gula cair."
    ]
  },
  // 10. BANYUWANGI (Kabupaten)
  {
    nama: "Ladrang Sabrang",
    daerah: "Banyuwangi",
    gambar: "img/ladrang-sabrang.png",
    deskripsi: "Camilan renyah dari irisan 'sabrang' (pisang) tipis yang digoreng dan dimaniskan, dibentuk gulungan atau lembaran.",
    resep: [
      "5 buah pisang kepok muda/mengkal",
      "Gula pasir secukupnya",
      "Air kapur sirih sedikit",
      "Minyak untuk menggoreng"
    ],
    cara: [
      "Iris pisang tipis-tipis, rendam sebentar dalam air kapur sirih.",
      "Goreng irisan pisang hingga kering dan renyah.",
      "Masak gula pasir dengan sedikit air hingga berambut (mengental).",
      "Masukkan pisang goreng, aduk cepat hingga gula melapisinya."
    ]
  },
  // 11. BLITAR (Kabupaten)
  {
    nama: "Getuk",
    daerah: "Blitar Kab",
    gambar: "img/getuk.jpg",
    deskripsi: "Olahan singkong yang dihaluskan dan diberi pewarna, disajikan dengan parutan kelapa. Jajanan pasar klasik.",
    resep: [
      "1 kg singkong",
      "150g gula pasir",
      "Pewarna makanan",
      "Parutan kelapa kukus"
    ],
    cara: [
      "Kukus singkong hingga empuk, lalu haluskan selagi panas.",
      "Campur singkong halus, gula, dan pewarna, aduk rata.",
      "Cetakkan dan sajikan dengan parutan kelapa."
    ]
  },
  // 12. BOJONEGORO (Kabupaten)
  {
    nama: "Ledre",
    daerah: "Bojonegoro",
    gambar: "img/ledre.jpg",
    deskripsi: "Keripik pisang raja yang sangat tipis, renyah, dan manis, digulung seperti pipa atau lembaran, khas Bojonegoro.",
    resep: [
      "Pisang raja yang matang",
      "Tepung beras",
      "Gula dan garam sedikit",
      "Air"
    ],
    cara: [
      "Haluskan pisang, campur dengan tepung beras, gula, dan garam, aduk hingga jadi adonan.",
      "Tuang adonan tipis-tipis di atas wajan anti lengket (seperti membuat kulit lumpia).",
      "Setelah matang, angkat, beri gula/madu, lalu gulung hingga kering."
    ]
  },
  // 13. BONDOWOSO (Kabupaten)
  {
    nama: "Tape Manis",
    daerah: "Bondowoso",
    gambar: "img/tape-bondowoso.jpg",
    deskripsi: "Tape singkong dengan proses fermentasi yang menghasilkan rasa manis legit dan sedikit alkohol, sangat populer sebagai oleh-oleh.",
    resep: [
      "Singkong jenis mentega/empuk",
      "Ragi tape"
    ],
    cara: [
      "Kupas dan cuci bersih singkong, kukus hingga matang (jangan terlalu lembek).",
      "Dinginkan singkong, taburi dengan ragi yang sudah dihaluskan secara merata.",
      "Simpan dalam wadah tertutup rapat selama 2-3 hari hingga matang dan berair."
    ]
  },
  // 14. GRESIK (Kabupaten)
  {
    nama: "Pudak",
    daerah: "Gresik",
    gambar: "img/pudak.jpg",
    deskripsi: "Kue dari tepung beras, gula, dan santan yang dimasak lalu dibungkus dengan pelepah daun pinang yang dilipat (OPE), teksturnya kenyal.",
    resep: [
      "250g tepung beras",
      "200g gula jawa/pasir",
      "500ml santan kental",
      "Garam sedikit",
      "Pelepah daun pinang (Ope)"
    ],
    cara: [
      "Campur semua bahan, aduk rata hingga gula larut.",
      "Saring adonan dan masukkan ke dalam bungkusan ope.",
      "Kukus hingga matang (sekitar 2 jam) dan teksturnya padat."
    ]
  },
  // 15. JEMBER (Kabupaten)
  {
    nama: "Suwar-Suwir",
    daerah: "Jember",
    gambar: "img/suwar-suwir.jpg",
    deskripsi: "Manisan olahan fermentasi tape singkong, bertekstur seperti dodol yang agak padat, sering dibentuk balok kecil dan rasa manis asam.",
    resep: [
      "500g tape singkong",
      "200g gula pasir",
      "Pewarna makanan (coklat, merah)",
      "Garam sedikit"
    ],
    cara: [
      "Haluskan tape, masak bersama gula dan garam hingga gula larut.",
      "Masak terus sambil diaduk hingga adonan kental dan tidak lengket di wajan.",
      "Tambahkan pewarna, aduk rata. Cetak dalam loyang.",
      "Dinginkan dan potong-potong setelah mengeras."
    ]
  },
  // 16. JOMBANG (Kabupaten)
  {
    nama: "Kue Satu",
    daerah: "Jombang",
    gambar: "img/kue-satu.jpg",
    deskripsi: "Kue kering tradisional yang terbuat dari kacang hijau yang dihaluskan, dicetak padat, dan dikeringkan, teksturnya renyah dan lumer.",
    resep: [
      "250g kacang hijau kupas (sangrai dan haluskan)",
      "200g gula halus",
      "Air matang sedikit",
      "Vanili"
    ],
    cara: [
      "Campur kacang hijau halus, gula halus, dan vanili.",
      "Tambahkan sedikit air hingga adonan bisa dipadatkan.",
      "Cetak adonan padat dengan cetakan khusus Kue Satu.",
      "Keringkan/panggang sebentar hingga benar-benar kering."
    ]
  },
  // 17. KEDIRI (Kabupaten)
  {
    nama: "Tahu Takwa",
    daerah: "Kediri Kab",
    gambar: "img/tahu-takwa.jpg",
    deskripsi: "Tahu berwarna kuning cerah karena dimasak dengan kunyit. Teksturnya padat dan kenyal, khas Kediri. Populer sebagai camilan gorengan/pelengkap.",
    resep: [
      "Tahu putih",
      "Bumbu rendaman: kunyit, bawang putih, garam"
    ],
    cara: [
      "Rendam tahu dalam larutan bumbu kunyit hingga meresap dan berwarna kuning.",
      "Goreng tahu hingga matang dan bagian luarnya berkulit."
    ]
  },
  // 18. LAMONGAN (Kabupaten)
  {
    nama: "Wingko Babat",
    daerah: "Lamongan",
    gambar: "img/wingko-babat.jpg",
    deskripsi: "Kue semi-basah dari kelapa muda, gula, dan tepung ketan. Populer karena rasa kelapa yang kuat dan tekstur legit.",
    resep: [
      "250g tepung ketan",
      "200g kelapa muda parut",
      "200g gula pasir",
      "100ml santan kental",
      "Garam dan vanili secukupnya"
    ],
    cara: [
      "Campur semua bahan hingga rata dan kalis.",
      "Panggang adonan di atas teflon atau oven dengan api kecil hingga matang dan berwarna kecoklatan.",
      "Potong-potong selagi hangat."
    ]
  },
  // 19. LUMAJANG (Kabupaten)
  {
    nama: "Minuman Coro",
    daerah: "Lumajang",
    gambar: "img/minuman-coro.jpg",
    deskripsi: "Minuman kental manis dari tepung ketan dan santan, rasanya gurih manis dan disajikan hangat, sering dianggap camilan cair.",
    resep: [
      "100g tepung ketan",
      "500ml santan",
      "100g gula merah",
      "Daun pandan",
      "Garam sedikit"
    ],
    cara: [
      "Larutkan tepung ketan dengan sedikit santan.",
      "Masak sisa santan, gula merah, pandan, dan garam hingga mendidih.",
      "Tuang larutan tepung, aduk cepat hingga mengental seperti bubur.",
      "Sajikan hangat."
    ]
  },
  // 20. MADIUN (Kabupaten)
  {
    nama: "Madumongso",
    daerah: "Madiun Kab",
    gambar: "img/madumongso.jpg",
    deskripsi: "Manisan/dodol yang terbuat dari fermentasi ketan hitam dan gula merah, dibungkus dengan plastik warna-warni, rasanya manis legit.",
    resep: [
      "500g ketan hitam (dimasak/difermentasi)",
      "200g gula merah",
      "Santan kental",
      "Daun pandan"
    ],
    cara: [
      "Masak ketan hitam, gula merah, dan santan hingga mengental dan tanak.",
      "Dinginkan adonan dan bungkus dengan plastik kecil-kecil."
    ]
  },
  // 21. MAGETAN (Kabupaten)
  {
    nama: "Ledre Pisang Raja",
    daerah: "Magetan",
    gambar: "img/ledre-magetan.jpg",
    deskripsi: "Keripik pisang raja yang sangat tipis, renyah, manis, dan digulung, mirip Ledre Bojonegoro.",
    resep: [
      "Pisang raja matang",
      "Tepung beras",
      "Gula",
      "Santan kental"
    ],
    cara: [
      "Haluskan pisang, campur dengan tepung beras, gula, dan santan.",
      "Cetak tipis di wajan datar anti lengket.",
      "Gulung saat masih panas hingga kering."
    ]
  },
  // 22. MALANG (Kabupaten)
  {
    nama: "Keripik Tempe Sagu",
    daerah: "Malang Kab",
    gambar: "img/kripik-tempe-sagu.jpg",
    deskripsi: "Keripik tempe dengan balutan tepung sagu yang membuatnya sangat renyah, camilan khas Malang.",
    resep: [
      "Tempe kedelai",
      "Tepung sagu",
      "Bumbu halus: bawang putih, ketumbar, kencur, garam",
      "Daun jeruk iris"
    ],
    cara: [
      "Iris tempe tipis-tipis.",
      "Campur tepung sagu dengan bumbu halus dan air hingga jadi adonan kental.",
      "Celupkan tempe ke adonan, goreng di minyak panas hingga kering dan renyah."
    ]
  },
  // 23. MOJOKERTO (Kabupaten)
  {
    nama: "Kue Lumpur",
    daerah: "Mojokerto Kab",
    gambar: "img/kue-lumpur.jpg",
    deskripsi: "Kue basah tradisional berbahan dasar santan, tepung terigu, kentang, dan vanili, teksturnya lembut dan beraroma pandan/vanila.",
    resep: [
      "250g kentang kukus, haluskan",
      "250g tepung terigu",
      "200g gula pasir",
      "500ml santan hangat",
      "4 butir telur",
      "Kismis/nangka untuk topping"
    ],
    cara: [
      "Campur kentang, gula, dan telur, kocok hingga rata.",
      "Masukkan terigu dan santan sedikit demi sedikit, aduk rata.",
      "Tuang ke cetakan kue lumpur yang sudah dipanaskan, beri topping, dan panggang hingga matang."
    ]
  },
  // 24. NGANJUK (Kabupaten)
  {
    nama: "Dumbleg",
    daerah: "Nganjuk",
    gambar: "img/dumbleg.jpg",
    deskripsi: "Kue tradisional berbahan dasar tepung ketan, gula merah, dan santan, dibungkus daun pinang yang dilipat (ope), mirip Pudak.",
    resep: [
      "250g tepung ketan",
      "200g gula merah",
      "500ml santan kental",
      "Daun pandan",
      "Pelepah daun pinang (Ope)"
    ],
    cara: [
      "Campur tepung ketan, gula merah cair, dan santan, aduk rata.",
      "Masak sebentar hingga gula larut dan adonan agak kental.",
      "Masukkan adonan ke dalam bungkusan ope.",
      "Kukus hingga matang dan padat."
    ]
  },
  // 25. NGAWI (Kabupaten)
  {
    nama: "Keripik Tempe",
    daerah: "Ngawi",
    gambar: "img/keripik-tempe.jpg",
    deskripsi: "Tempe yang diiris sangat tipis dan digoreng renyah dengan bumbu gurih, populer sebagai camilan dan oleh-oleh.",
    resep: [
      "Tempe kedelai",
      "Tepung beras",
      "Bumbu halus: bawang putih, ketumbar, kencur, garam",
      "Daun jeruk iris"
    ],
    cara: [
      "Iris tempe tipis-tipis.",
      "Campur tepung beras dengan bumbu halus dan air hingga jadi adonan kental.",
      "Celupkan tempe ke adonan, goreng di minyak panas hingga kering dan renyah."
    ]
  },
  // 26. PACITAN (Kabupaten)
  {
    nama: "Sale Pisang",
    daerah: "Pacitan",
    gambar: "img/sale-pisang.jpg",
    deskripsi: "Irisan tipis pisang yang dikeringkan (dijemur), lalu digoreng dengan balutan adonan tepung, manis dan renyah.",
    resep: [
      "Pisang raja yang matang",
      "Tepung terigu",
      "Gula, garam, vanili",
      "Air"
    ],
    cara: [
      "Iris tipis pisang, jemur hingga kering (lentur).",
      "Buat adonan celupan dari tepung, gula, dan air.",
      "Celupkan pisang sale kering ke adonan, lalu goreng hingga matang."
    ]
  },
  // 27. PAMEKASAN (Kabupaten)

  // 28. PASURUAN (Kabupaten)
  {
    nama: "Apel Malang (Camilan Olahan)",
    daerah: "Pasuruan Kab",
    gambar: "img/keripik-apel.jpg",
    deskripsi: "Meskipun bukan jajanan pasar klasik, keripik/camilan olahan apel sangat populer di kawasan Prigen/Pasuruan sebagai oleh-oleh.",
    resep: [
      "Apel jenis tertentu (manalagi/anna)",
      "Air",
      "Gula pasir sedikit"
    ],
    cara: [
      "Iris apel tipis-tipis, rendam air garam.",
      "Bekukan irisan apel.",
      "Goreng vakum hingga kering dan renyah. Beri lapisan gula tipis."
    ]
  },
  // 29. PONOROGO (Kabupaten)
  {
    nama: "Jenang Mirah",
    daerah: "Ponorogo",
    gambar: "img/jenang-mirah.jpg",
    deskripsi: "Jenang (dodol) dari ketan hitam yang rasanya legit, sangat populer sebagai oleh-oleh khas Ponorogo.",
    resep: [
      "250g tepung ketan hitam",
      "500g gula merah",
      "400ml santan kental",
      "Daun pandan"
    ],
    cara: [
      "Campur semua bahan, masak di atas api kecil sambil terus diaduk.",
      "Masak hingga adonan mengental, berminyak, dan tidak lengket di wajan.",
      "Tuang ke loyang, dinginkan, dan potong-potong."
    ]
  },
  // 30. PROBOLINGGO (Kabupaten)
  {
    nama: "Getas Ketan",
    daerah: "Probolinggo Kab",
    gambar: "img/getas-ketan.jpg",
    deskripsi: "Kue kering yang terbuat dari tepung ketan dan kelapa, digoreng, lalu dilapisi gula putih yang mengeras, rasanya manis dan gurih.",
    resep: [
      "200g tepung ketan",
      "100g kelapa parut",
      "Air hangat",
      "Lapisan gula: gula pasir dan air"
    ],
    cara: [
      "Campur tepung ketan, kelapa parut, dan air, uleni hingga kalis.",
      "Bentuk bulat pipih, goreng hingga matang.",
      "Masak larutan gula hingga berambut, masukkan getas, aduk cepat hingga gula melapisinya."
    ]
  },
  // 31. SAMPANG (Kabupaten)
  {
    nama: "Arem-Arem",
    daerah: "Sampang",
    gambar: "img/arem-arem.jpg",
    deskripsi: "Lontong kecil dari nasi yang diisi sayuran atau daging cincang pedas, dibungkus daun pisang, sering dijadikan camilan.",
    resep: [
      "Nasi aron",
      "Isian: daging/ayam cincang, wortel, bumbu pedas",
      "Santan kental",
      "Daun pisang"
    ],
    cara: [
      "Masak nasi aron dengan santan dan garam.",
      "Buat isian pedas.",
      "Ambil nasi aron, isi dengan isian, gulung dan bungkus dengan daun pisang.",
      "Kukus hingga matang."
    ]
  },
  // 32. SIDOARJO (Kabupaten)
  {
    nama: "Kerupuk Udang",
    daerah: "Sidoarjo",
    gambar: "img/kerupuk-udang.jpg",
    deskripsi: "Kerupuk (camilan gurih) dengan rasa udang yang kuat, khas Sidoarjo yang terkenal dengan tambak udangnya.",
    resep: [
      "500g udang segar yang dihaluskan",
      "500g tepung tapioka",
      "Garam, bawang putih halus"
    ],
    cara: [
      "Campur udang halus, tapioka, garam, dan bawang putih, uleni hingga kalis.",
      "Bentuk adonan memanjang, kukus hingga matang.",
      "Setelah dingin, iris tipis dan jemur hingga kering.",
      "Goreng hingga mengembang."
    ]
  },
  // 33. SITUBONDO (Kabupaten)
  {
    nama: "Kerupuk Ikan Layang",
    daerah: "Situbondo",
    gambar: "img/kerupuk-ikan.jpg",
    deskripsi: "Kerupuk yang terbuat dari campuran tepung dan ikan layang/ikan laut khas perairan Situbondo, rasanya gurih.",
    resep: [
      "Ikan layang/ikan laut, haluskan",
      "Tepung tapioka",
      "Garam dan bumbu halus"
    ],
    cara: [
      "Campur ikan halus, tepung, dan bumbu, uleni.",
      "Bentuk adonan memanjang, kukus, dan iris tipis.",
      "Jemur hingga kering, lalu goreng."
    ]
  },
  // 34. SUMENEP (Kabupaten)

  // 35. TRENGGALEK (Kabupaten)
  {
    nama: "Sale Pisang Trenggalek",
    daerah: "Trenggalek",
    gambar: "img/sale-pisang-tg.jpg",
    deskripsi: "Pisang yang diolah dengan cara dijemur dan diasapi, menghasilkan rasa manis yang khas dan tahan lama, sering digulung tipis.",
    resep: [
      "Pisang kepok/raja yang matang",
      "Gula pasir (optional)"
    ],
    cara: [
      "Kupas pisang, belah menjadi lembaran tipis.",
      "Jemur di bawah sinar matahari atau di oven hingga kering dan lentur.",
      "Gulung hingga padat dan bungkus."
    ]
  },
  // 36. TUBAN (Kabupaten)
  {
    nama: "Ampo",
    daerah: "Tuban",
    gambar: "img/ampo.jpg",
    deskripsi: "Camilan ekstrem tradisional yang terbuat dari olahan tanah liat khusus yang dipanggang. (Disajikan untuk tujuan informasi kebudayaan, bukan konsumsi massal).",
    resep: [
      "Tanah liat khusus yang bersih",
      "Air bersih"
    ],
    cara: [
      "Bersihkan tanah liat khusus dari kotoran.",
      "Bentuk tanah liat seperti stik.",
      "Panggang dalam tungku hingga matang dan kering."
    ]
  },
  // 37. TULUNGAGUNG (Kabupaten)
  {
    nama: "Kue Sagon",
    daerah: "Tulungagung",
    gambar: "img/sagon.jpg",
    deskripsi: "Kue kering tradisional yang terbuat dari tepung sagu, parutan kelapa, dan gula, dipanggang hingga renyah dan beraroma kelapa.",
    resep: [
      "250g tepung sagu",
      "100g kelapa parut sangrai",
      "150g gula halus",
      "Margarin sedikit"
    ],
    cara: [
      "Campur semua bahan kering, aduk rata.",
      "Tambahkan margarin, aduk hingga berbutir.",
      "Cetak dalam cetakan kecil atau loyang.",
      "Panggang hingga matang dan kering."
    ]
  },
  // 38. BATU (Kota)
  {
    nama: "Keripik Apel",
    daerah: "Batu",
    gambar: "img/keripik-apell.jpg",
    deskripsi: "Camilan modern tradisional yang terbuat dari irisan apel yang digoreng vakum hingga menjadi keripik renyah.",
    resep: [
      "Apel jenis Manalagi/Anna",
      "Air",
      "Gula (optional)"
    ],
    cara: [
      "Iris apel tipis, rendam dalam air garam dan gula.",
      "Goreng menggunakan mesin penggoreng vakum suhu rendah hingga kering.",
      "Dinginkan dan kemas."
    ]
  },
  // 39. KOTA SURABAYA
  {
    nama: "Klepon",
    daerah: "Surabaya",
    gambar: "img/klepon.jpg",
    deskripsi: "Bola-bola kecil dari tepung ketan yang diisi gula merah cair, direbus dan digulingkan di parutan kelapa. Manis dan 'meletus' di mulut.",
    resep: [
      "250g tepung ketan",
      "Air daun suji/pandan",
      "Gula merah sisir untuk isian",
      "Kelapa parut kukus"
    ],
    cara: [
      "Uleni tepung ketan dengan air pandan hingga kalis.",
      "Ambil sedikit adonan, pipihkan, isi dengan gula merah, dan bulatkan.",
      "Rebus hingga mengapung. Angkat dan gulingkan di kelapa parut."
    ]
  },
  // 40. KOTA MALANG
  {
    nama: "Mendut",
    daerah: "Malang",
    gambar: "img/mendut.jpg",
    deskripsi: "Kue basah dari tepung ketan, diisi unti kelapa (kelapa parut yang dimasak dengan gula merah), dibungkus daun pisang berbentuk segitiga atau kerucut.",
    resep: [
      "250g tepung ketan",
      "Pewarna makanan",
      "Unti (isian kelapa gula merah)",
      "Santan kental"
    ],
    cara: [
      "Uleni tepung ketan dengan air panas dan pewarna.",
      "Bentuk adonan menjadi bola, isi dengan unti.",
      "Susun di mangkuk kecil dari daun pisang, siram dengan santan kental, lalu kukus."
    ]
  },
  // 41. KAB. JEMBER
  {
    nama: "Tape Bakar",
    daerah: "Jember",
    gambar: "img/tape-bakar.jpg",
    deskripsi: "Potongan tape singkong yang dibakar atau dipanggang, sering disajikan dengan topping keju, meses, atau susu kental manis.",
    resep: [
      "Tape singkong matang",
      "Margarin untuk olesan",
      "Topping (keju, susu, meses)"
    ],
    cara: [
      "Potong tape. Olesi margarin.",
      "Panggang di atas teflon atau bara api hingga kecoklatan.",
      "Sajikan hangat dengan topping sesuai selera."
    ]
  },
  // 42. KAB. MADIUN
  {
    nama: "Jenang Dodol",
    daerah: "Madiun Kab",
    gambar: "img/jenang-dodol.jpg",
    deskripsi: "Dodol dari tepung beras ketan, santan, dan gula merah. Memiliki tekstur lengket, legit, dan elastis.",
    resep: [
      "500g tepung ketan",
      "500g gula merah",
      "1 liter santan kental",
      "Garam dan daun pandan"
    ],
    cara: [
      "Campur semua bahan, masak di atas api kecil sambil terus diaduk (kurang lebih 4-8 jam) hingga mengental sempurna dan berwarna gelap."
    ]
  },
  // 44. KAB. GRESIK
  {
    nama: "Jubung",
    daerah: "Gresik",
    gambar: "img/jubung.jpg",
    deskripsi: "Jajanan manis yang terbuat dari tepung ketan hitam, gula aren, dan santan. Dibungkus daun lontar kecil dan ditaburi wijen.",
    resep: [
      "Tepung ketan hitam",
      "Gula aren",
      "Santan",
      "Wijen untuk taburan",
      "Daun lontar/aren untuk wadah"
    ],
    cara: [
      "Masak tepung ketan hitam, gula aren, dan santan hingga menjadi adonan yang sangat kental (mirip dodol).",
      "Masukkan ke dalam wadah daun lontar kecil dan taburi wijen."
    ]
  },
  // 45. KAB. TULUNGAGUNG
  {
    nama: "Kue Serabi Solo (Modifikasi)",
    daerah: "Tulungagung",
    gambar: "img/serabi.jpg",
    deskripsi: "Serabi khas Jawa Timur yang biasanya dibuat dari tepung beras dan santan, dimasak di wajan kecil, disajikan dengan kuah kinca gula merah.",
    resep: [
      "Tepung beras",
      "Santan",
      "Gula pasir/garam",
      "Kinca: gula merah, air, daun pandan"
    ],
    cara: [
      "Campur tepung beras dan santan, diamkan sebentar.",
      "Tuang adonan ke wajan/cetakan serabi panas, masak hingga matang.",
      "Sajikan dengan kuah kinca hangat."
    ]
  },
  // 46. KAB. NGANJUK
  {
    nama: "Nagasari",
    daerah: "Nganjuk",
    gambar: "img/nagasari.jpg",
    deskripsi: "Kue basah dari tepung beras, santan, gula, dan potongan pisang di tengahnya. Dibungkus daun pisang lalu dikukus.",
    resep: [
      "Tepung beras",
      "Santan",
      "Gula dan garam",
      "Pisang raja/kepok untuk isian"
    ],
    cara: [
      "Masak tepung beras dengan santan dan gula hingga menjadi bubur kental.",
      "Ambil adonan, beri potongan pisang di tengah, bungkus daun pisang.",
      "Kukus hingga matang."
    ]
  },
  // 47. KAB. BLITAR
  {
    nama: "Cenil",
    daerah: "Blitar Kab",
    gambar: "img/cenil.jpg",
    deskripsi: "Kue kenyal berwarna-warni dari tepung tapioka, disajikan dengan parutan kelapa dan siraman gula merah cair.",
    resep: [
      "200g tepung tapioka",
      "Air panas",
      "Pewarna makanan",
      "Pelengkap: kelapa parut kukus, gula merah cair"
    ],
    cara: [
      "Uleni tapioka dengan air panas, bagi menjadi beberapa bagian dan beri warna.",
      "Bentuk memanjang atau bulat, rebus hingga mengapung.",
      "Gulingkan di kelapa parut dan siram kinca gula merah."
    ]
  },
  // 48. KAB. PASURUAN
  {
    nama: "Grubi (Bola Ubi)",
    daerah: "Pasuruan Kab",
    gambar: "img/grubi.jpg",
    deskripsi: "Camilan renyah berbentuk bola, terbuat dari parutan ubi jalar yang digoreng, lalu dilumuri gula merah yang mengeras (karamel).",
    resep: [
      "Ubi jalar (parut kasar)",
      "Gula merah",
      "Garam sedikit",
      "Minyak untuk menggoreng"
    ],
    cara: [
      "Goreng parutan ubi hingga kering dan renyah.",
      "Masak gula merah dengan sedikit air hingga mengental.",
      "Masukkan ubi goreng, aduk cepat hingga rata dan membentuk bola/gumpalan kecil."
    ]
  },
  // 49. KAB. PACITAN
  {
    nama: "Tiwul Instan",
    daerah: "Pacitan",
    gambar: "img/tiwul.jpg",
    deskripsi: "Olahan dari gaplek (singkong kering) yang dihaluskan, dijadikan makanan pokok pengganti nasi. Modernnya dijual dalam bentuk instan, disajikan manis dengan kelapa parut.",
    resep: [
      "Tepung gaplek/tiwul instan",
      "Air panas",
      "Pelengkap: gula, garam, kelapa parut kukus"
    ],
    cara: [
      "Seduh tiwul instan dengan air panas, diamkan hingga mengembang.",
      "Kukus hingga matang.",
      "Sajikan hangat dengan kelapa parut dan sedikit gula/garam."
    ]
  }
];