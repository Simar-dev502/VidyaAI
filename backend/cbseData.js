
// ============================================================
// VidyaAI — CBSE Course Data (Classes 6 to 12)
// Subjects: Math, Science, English, Hindi, Social
// Each class has 6 chapters per subject with proper notes,
// examples, keyPoints, and 5 quiz questions.
// ============================================================

const courseData = {};
const quizData = {};

// ─── Helper to build a class entry ───────────────────────────────────────────
function cls(mathChapters, sciChapters, engChapters, hindiChapters, socialChapters) {
  return { Math: { chapters: mathChapters }, Science: { chapters: sciChapters }, English: { chapters: engChapters }, Hindi: { chapters: hindiChapters }, Social: { chapters: socialChapters } };
}
function ch(id, title, notes, example, keyPoints) {
  return { id, title, notes, example, keyPoints };
}
function quiz(q, options, answer) { return { q, options, answer }; }


// ============================================================
// CLASS 6
// ============================================================
courseData["6"] = cls(
  // MATH
  [
    ch(1,"Knowing Our Numbers","Numbers can be very large. We use the Indian system (ones, tens, hundreds, thousands, lakhs, crores) and the International system (ones, thousands, millions, billions) to read and write large numbers. Comparing numbers and forming the greatest or smallest number from given digits are important skills. Estimation helps us find approximate values quickly.",
      "1,23,456 in Indian system = 1 lakh 23 thousand 4 hundred 56. In International: 123,456 = one hundred twenty-three thousand four hundred fifty-six.",
      ["Indian place value: ones, tens, hundreds, thousands, ten-thousands, lakhs, ten-lakhs, crores","To compare numbers, first compare the number of digits; if equal, compare from the leftmost digit","Estimation: round off to nearest 10, 100, or 1000 for quick calculations"]),
    ch(2,"Whole Numbers","Whole numbers are 0, 1, 2, 3, 4, ... — they include zero and all natural numbers. The number line helps us visualise whole numbers and their order. Properties of whole numbers include closure, commutativity, associativity, and distributivity. Zero is the additive identity and one is the multiplicative identity.",
      "On a number line: 0, 1, 2, 3, 4, 5 ... Closure: 3 + 5 = 8 (whole number). Commutative: 4 + 6 = 6 + 4 = 10.",
      ["Whole numbers start from 0: {0, 1, 2, 3, ...}","Commutative property: a + b = b + a and a × b = b × a","Distributive property: a × (b + c) = a×b + a×c"]),
    ch(3,"Playing with Numbers","Factors are numbers that divide a number exactly. Multiples are the results of multiplying a number. HCF (Highest Common Factor) is the largest factor common to two numbers. LCM (Lowest Common Multiple) is the smallest multiple common to two numbers.",
      "Factors of 12: 1, 2, 3, 4, 6, 12. Multiples of 4: 4, 8, 12, 16... HCF(12,18)=6. LCM(4,6)=12.",
      ["A prime number has exactly two factors: 1 and itself (e.g., 2, 3, 5, 7, 11)","HCF is found using prime factorisation or division method","LCM × HCF = Product of the two numbers"]),
    ch(4,"Basic Geometrical Ideas","Geometry deals with points, lines, angles, and shapes. A point has no size. A line extends infinitely in both directions. A line segment has two endpoints. A ray starts at a point and goes infinitely in one direction. Angles are formed when two rays meet at a common point.",
      "A pencil tip is like a point. The edge of a ruler is like a line segment. The corner of a room forms an angle.",
      ["Point: exact location with no size. Line: infinite in both directions. Line segment: has two endpoints","An angle is formed by two rays with a common starting point called the vertex","Types of angles: acute (< 90°), right (= 90°), obtuse (90°–180°), straight (= 180°)"]),
    ch(5,"Understanding Elementary Shapes","Shapes are classified by their properties. Triangles are classified by sides (equilateral, isosceles, scalene) and by angles (acute, right, obtuse). Quadrilaterals have four sides — square, rectangle, parallelogram, rhombus, trapezium. 3D shapes include cube, cuboid, cylinder, cone, sphere, and pyramid.",
      "Equilateral triangle: all 3 sides equal (like a yield sign). Rectangle: opposite sides equal, all angles 90°. Cube: 6 equal square faces.",
      ["Triangles by sides: equilateral (3 equal), isosceles (2 equal), scalene (all different)","Quadrilaterals: square, rectangle, parallelogram, rhombus, trapezium, kite","3D shapes have faces, edges, and vertices — Euler's formula: F + V − E = 2"]),
    ch(6,"Integers, Fractions & Decimals","Integers include positive numbers, negative numbers, and zero. Negative numbers are used to represent temperatures below zero, depths below sea level, and losses. Fractions represent parts of a whole. Decimals are another way to write fractions with denominators of 10, 100, 1000.",
      "Temperature: −5°C means 5 degrees below zero. 3/4 = 0.75 as a decimal. 1/2 = 0.5.",
      ["Integers: ... −3, −2, −1, 0, 1, 2, 3 ... Negative numbers are to the left of zero on the number line","Fraction: numerator/denominator. Proper fraction: numerator < denominator","Decimal: 0.1 = 1/10, 0.01 = 1/100, 0.001 = 1/1000"])
  ],
  // SCIENCE
  [
    ch(1,"Food — Where Does It Come From?","All food comes from plants or animals. Plants are producers — they make their own food through photosynthesis. Animals are consumers — they eat plants or other animals. Some foods like milk, eggs, and honey come from animals. Herbivores eat only plants, carnivores eat only animals, and omnivores eat both.",
      "Rice, wheat, vegetables come from plants. Milk comes from cows. Eggs come from hens. Honey is made by bees from flower nectar.",
      ["Plants are the primary source of food — they produce food through photosynthesis","Herbivores (cow, deer) eat plants; Carnivores (lion, tiger) eat animals; Omnivores (humans, bear) eat both","Sprouts are germinated seeds rich in nutrients — soaking seeds in water causes germination"]),
    ch(2,"Components of Food","Food contains nutrients that our body needs to function. The main nutrients are carbohydrates (energy), proteins (growth and repair), fats (energy storage), vitamins (protection), and minerals (body functions). Water and roughage (fibre) are also essential. A balanced diet contains all nutrients in the right amounts.",
      "Rice and bread give carbohydrates (energy). Dal and eggs give protein (muscle building). Milk gives calcium (strong bones). Oranges give Vitamin C.",
      ["Carbohydrates and fats provide energy; proteins build and repair body tissues","Vitamins and minerals protect the body from diseases and help in body functions","Deficiency diseases: lack of Vitamin C causes scurvy; lack of iron causes anaemia"]),
    ch(3,"Fibre to Fabric","Fibres are thin strands used to make fabric (cloth). Natural fibres come from plants (cotton, jute) or animals (wool, silk). Synthetic fibres are man-made (nylon, polyester). Cotton comes from the cotton plant. Wool comes from sheep. Silk comes from silkworm cocoons.",
      "Cotton shirt: cotton fibres from cotton plant → ginning → spinning → weaving → fabric. Silk saree: silkworm spins cocoon → silk thread extracted → woven into fabric.",
      ["Natural fibres: cotton (plant), jute (plant), wool (sheep), silk (silkworm)","Synthetic fibres: nylon, polyester, acrylic — made from chemicals","Spinning converts fibres into yarn; weaving interlaces yarns to make fabric"]),
    ch(4,"Sorting Materials into Groups","Materials around us have different properties — transparency, solubility, density, hardness, and lustre. We sort materials based on these properties. Metals are lustrous, hard, and good conductors. Non-metals are generally dull and poor conductors. Materials can be soluble (dissolve in water) or insoluble.",
      "Glass is transparent. Wood is opaque. Salt dissolves in water (soluble). Sand does not dissolve (insoluble). Iron is hard and lustrous.",
      ["Materials are sorted by properties: hard/soft, transparent/opaque, soluble/insoluble, magnetic/non-magnetic","Metals: iron, copper, gold — lustrous, hard, good conductors of heat and electricity","Non-metals: wood, rubber, plastic — generally dull, poor conductors"]),
    ch(5,"Separation of Substances","Mixtures can be separated using different methods depending on the properties of the components. Handpicking removes large impurities. Sieving separates particles of different sizes. Sedimentation and decantation separate insoluble solids from liquids. Filtration removes fine insoluble particles. Evaporation separates dissolved solids from liquids.",
      "Sieving flour removes lumps. Filtering muddy water through cloth removes mud. Evaporating salt water leaves salt behind. A magnet separates iron filings from sand.",
      ["Sieving: separates particles of different sizes (flour from bran)","Filtration: separates insoluble solids from liquids (mud from water)","Evaporation: separates dissolved solids from liquids (salt from salt water)"]),
    ch(6,"Changes Around Us & Body Movements","Changes can be reversible (can be undone) or irreversible (cannot be undone). Melting ice is reversible; burning paper is irreversible. Our body can move because of joints and muscles. Different types of joints allow different movements — ball and socket, hinge, pivot, and fixed joints.",
      "Reversible: melting butter, dissolving sugar. Irreversible: burning wood, cooking food. Ball and socket joint (shoulder) allows rotation. Hinge joint (knee) allows back-and-forth movement.",
      ["Reversible changes: melting, dissolving, stretching — can be undone","Irreversible changes: burning, rusting, cooking — cannot be undone","Joints: ball-and-socket (shoulder, hip), hinge (knee, elbow), pivot (neck), fixed (skull)"])
  ],
  // ENGLISH
  [
    ch(1,"Prose — Who Did Patrick's Homework","This story teaches us that hard work and dedication are essential for success. Patrick tries to avoid homework by making a deal with an elf, but eventually learns that there are no shortcuts to learning. The story emphasises the value of education and self-effort. Reading comprehension involves understanding the main idea, characters, and moral of a story.",
      "Patrick made a deal with an elf to do his homework, but the elf needed Patrick's help at every step — showing that you cannot escape learning.",
      ["Main idea: There are no shortcuts to learning; hard work is essential","Characters: Patrick (lazy student), the elf (magical creature)","Moral: Education requires personal effort; others can guide but cannot learn for you"]),
    ch(2,"Poetry — A House, A Home","This poem distinguishes between a house (a physical structure) and a home (a place filled with love and warmth). A house is made of bricks and mortar, but a home is made of love, care, and family bonds. Poetry uses figurative language, rhyme, and rhythm to convey deep meanings. Understanding poetry requires reading between the lines.",
      "A house has walls, roof, and doors. A home has love, laughter, and family. The poem says: 'A house is made of walls and beams; a home is built with love and dreams.'",
      ["A house is a physical structure; a home is filled with love and warmth","Poetry uses rhyme, rhythm, and figurative language to express emotions","Theme: Family love and togetherness make a house into a home"]),
    ch(3,"Grammar — Nouns, Pronouns & Adjectives","A noun is a naming word for a person, place, thing, or idea. Pronouns replace nouns to avoid repetition. Adjectives describe or modify nouns by telling what kind, how many, or which one. Using the right parts of speech makes our writing clear and interesting.",
      "Noun: 'The teacher explained the lesson.' Pronoun: 'She explained it.' Adjective: 'The intelligent teacher explained the difficult lesson.'",
      ["Nouns: common (book, city), proper (Delhi, Riya), abstract (happiness), collective (flock)","Pronouns: I, you, he, she, it, we, they — replace nouns to avoid repetition","Adjectives: describe nouns — big, small, red, three, this, beautiful"]),
    ch(4,"Grammar — Verbs, Tenses & Adverbs","Verbs express actions or states of being. Tenses tell us when an action happens — present, past, or future. Adverbs modify verbs, adjectives, or other adverbs, telling how, when, where, or to what extent. Correct use of tenses is essential for clear communication.",
      "Present: 'She reads every day.' Past: 'She read yesterday.' Future: 'She will read tomorrow.' Adverb: 'She reads quickly (how) and reads here (where).'",
      ["Present tense: action happening now or regularly (I eat, she runs)","Past tense: action already completed (I ate, she ran)","Adverbs of manner (quickly), time (yesterday), place (here), frequency (always)"]),
    ch(5,"Writing — Paragraph & Formal Letter","A paragraph is a group of sentences about one main idea. It has a topic sentence, supporting sentences, and a concluding sentence. A formal letter has a specific format: sender's address, date, receiver's address, subject, salutation, body, and closing. Formal letters are written to officials, schools, or organisations.",
      "Paragraph on 'My School': Topic sentence: 'My school is a wonderful place to learn.' Supporting: 'It has a large library, science labs, and a playground.' Conclusion: 'I am proud of my school.'",
      ["A paragraph has: topic sentence (main idea), supporting sentences (details), concluding sentence","Formal letter format: address, date, subject, salutation (Dear Sir/Madam), body, closing (Yours faithfully)","Use formal language in letters: avoid slang, be polite and clear"]),
    ch(6,"Comprehension & Vocabulary Skills","Reading comprehension means understanding what you read — identifying the main idea, finding specific information, making inferences, and understanding vocabulary in context. Building vocabulary helps us read and write better. Synonyms are words with similar meanings; antonyms are words with opposite meanings.",
      "Passage about water conservation → Main idea: Save water. Inference: The author is concerned about water scarcity. Synonym of 'big' = large. Antonym of 'hot' = cold.",
      ["Read the passage carefully before answering questions — look for key words","Main idea = what the whole passage is about; details support the main idea","Synonyms: happy/glad, big/large. Antonyms: hot/cold, day/night, fast/slow"])
  ],
  // HINDI
  [
    ch(1,"वह चिड़िया जो — कविता","यह कविता केदारनाथ अग्रवाल द्वारा लिखी गई है। इसमें एक नीली चिड़िया का वर्णन है जो स्वतंत्र रूप से उड़ती है और जंगल में रहती है। कविता प्रकृति के प्रति प्रेम और स्वतंत्रता का संदेश देती है। कविता में लय, तुक और भावनात्मक अभिव्यक्ति होती है।",
      "चिड़िया नीले पंखों वाली है, वह जंगल में रहती है, अनाज के दाने चुगती है और स्वतंत्र रूप से उड़ती है।",
      ["कविता में नीली चिड़िया स्वतंत्रता और प्रकृति प्रेम का प्रतीक है","कवि ने चिड़िया के माध्यम से सरल जीवन की सुंदरता दर्शाई है","कविता की भाषा सरल और भावपूर्ण है — लय और तुक का सुंदर प्रयोग"]),
    ch(2,"बचपन — संस्मरण","यह पाठ कृष्णा सोबती द्वारा लिखा गया संस्मरण है जिसमें उन्होंने अपने बचपन की यादें साझा की हैं। संस्मरण एक ऐसी विधा है जिसमें लेखक अपने जीवन के अनुभवों को याद करके लिखता है। इस पाठ में बचपन की मस्ती, खेल, खान-पान और परिवार का वर्णन है।",
      "लेखिका को बचपन में फ्रॉक पहनना, चॉकलेट खाना और पहाड़ों पर घूमना पसंद था।",
      ["संस्मरण: लेखक के अपने जीवन के अनुभवों पर आधारित रचना","इस पाठ में बचपन की सुखद यादों का वर्णन है","भाषा: सरल, भावपूर्ण और व्यक्तिगत अनुभवों से भरी"]),
    ch(3,"नादान दोस्त — कहानी","यह प्रेमचंद की कहानी है जिसमें केशव और श्यामा नाम के दो बच्चे चिड़िया के अंडों की देखभाल करने की कोशिश करते हैं। अज्ञानता में की गई गलती से अंडे टूट जाते हैं। कहानी सिखाती है कि अच्छे इरादे होने के बावजूद बिना ज्ञान के किया गया काम नुकसानदेह हो सकता है।",
      "केशव और श्यामा ने चिड़िया के अंडों को बचाने के लिए घोंसले में दाना-पानी रखा, लेकिन इससे अंडे टूट गए।",
      ["कहानी का संदेश: अच्छे इरादे के साथ-साथ सही ज्ञान भी जरूरी है","पात्र: केशव (बड़ा भाई), श्यामा (छोटी बहन), माँ","प्रेमचंद की भाषा सरल, स्वाभाविक और जीवन से जुड़ी है"]),
    ch(4,"व्याकरण — संज्ञा और सर्वनाम","संज्ञा किसी व्यक्ति, स्थान, वस्तु या भाव के नाम को कहते हैं। संज्ञा के पाँच भेद हैं: व्यक्तिवाचक, जातिवाचक, भाववाचक, समूहवाचक और द्रव्यवाचक। सर्वनाम वे शब्द हैं जो संज्ञा के स्थान पर प्रयोग किए जाते हैं। सर्वनाम के छह भेद हैं।",
      "व्यक्तिवाचक: राम, दिल्ली। जातिवाचक: लड़का, शहर। भाववाचक: खुशी, दुःख। सर्वनाम: मैं, तुम, वह, हम, आप, यह।",
      ["संज्ञा के भेद: व्यक्तिवाचक (राम), जातिवाचक (लड़का), भाववाचक (खुशी), समूहवाचक (सेना), द्रव्यवाचक (सोना)","सर्वनाम के भेद: पुरुषवाचक, निश्चयवाचक, अनिश्चयवाचक, प्रश्नवाचक, संबंधवाचक, निजवाचक","सर्वनाम का प्रयोग संज्ञा की पुनरावृत्ति से बचाता है"]),
    ch(5,"व्याकरण — क्रिया और काल","क्रिया वह शब्द है जो किसी काम के होने या करने का बोध कराता है। काल तीन प्रकार के होते हैं: वर्तमान काल (अभी हो रहा है), भूतकाल (हो चुका है), और भविष्यकाल (होगा)। क्रिया के बिना वाक्य अधूरा होता है।",
      "वर्तमान: राम खाता है। भूत: राम ने खाया। भविष्य: राम खाएगा।",
      ["क्रिया के भेद: सकर्मक (कर्म के साथ), अकर्मक (कर्म के बिना)","वर्तमान काल: अभी हो रहा है। भूतकाल: हो चुका है। भविष्यकाल: होगा","क्रिया वाक्य का अनिवार्य अंग है — इसके बिना वाक्य पूरा नहीं होता"]),
    ch(6,"पत्र लेखन और अनुच्छेद","पत्र दो प्रकार के होते हैं: औपचारिक (formal) और अनौपचारिक (informal)। औपचारिक पत्र किसी अधिकारी, प्रधानाचार्य या संस्था को लिखे जाते हैं। अनौपचारिक पत्र मित्र या परिवार को लिखे जाते हैं। अनुच्छेद एक विषय पर लिखे गए सुसंगत वाक्यों का समूह होता है।",
      "औपचारिक पत्र: प्रधानाचार्य को अवकाश के लिए पत्र। अनौपचारिक: मित्र को जन्मदिन की बधाई पत्र।",
      ["औपचारिक पत्र में: प्रेषक का पता, दिनांक, विषय, संबोधन, मुख्य भाग, समापन","अनौपचारिक पत्र में: प्रिय मित्र/भाई से शुरू, तुम्हारा/आपका से समाप्त","अनुच्छेद में: विषय वाक्य, विस्तार वाक्य, निष्कर्ष वाक्य होते हैं"])
  ],
  // SOCIAL
  [
    ch(1,"What, Where, How & When?","History is the study of the past. Historians use sources like manuscripts, inscriptions, coins, and monuments to learn about the past. The subcontinent of India has a very long history going back thousands of years. Different regions of India had different names in ancient times — Bharatavarsha, Jambudvipa, and Hindustan.",
      "Manuscripts are handwritten texts on palm leaves or bark. The Rigveda is one of the oldest manuscripts. Coins found in excavations tell us about ancient rulers and trade.",
      ["Sources of history: manuscripts, inscriptions, coins, monuments, oral traditions","Historians use dates (BCE = Before Common Era, CE = Common Era) to organise history","India was known by different names: Bharatavarsha, Jambudvipa, Aryavarta"]),
    ch(2,"On the Trail of the Earliest People","The earliest humans were hunter-gatherers who moved from place to place in search of food. They lived in caves and rock shelters. They made tools from stone (Stone Age). Fire was one of the most important discoveries. Rock paintings found in places like Bhimbetka (Madhya Pradesh) tell us about their lives.",
      "Bhimbetka caves in Madhya Pradesh have rock paintings showing animals, hunting scenes, and daily life of early humans — over 30,000 years old.",
      ["Hunter-gatherers: moved in search of food, hunted animals, gathered fruits and roots","Stone Age tools: hand axes, scrapers, blades — made by chipping stones","Rock paintings at Bhimbetka show animals, humans, and hunting scenes"]),
    ch(3,"From Gathering to Growing Food","About 10,000 years ago, humans began to grow crops and domesticate animals — this is called the Neolithic Revolution. Farming allowed people to settle in one place and form villages. The first crops grown were wheat and barley. Animals like cattle, sheep, and goats were domesticated.",
      "Mehrgarh (in present-day Pakistan) is one of the earliest farming settlements in South Asia — people grew wheat and barley and kept cattle.",
      ["Neolithic Revolution: shift from hunting-gathering to farming and animal domestication","First crops: wheat, barley, rice. First domesticated animals: cattle, sheep, goat, dog","Farming led to permanent settlements, villages, and eventually cities"]),
    ch(4,"In the Earliest Cities — Harappan Civilisation","The Harappan (Indus Valley) Civilisation (2500–1900 BCE) was one of the world's earliest urban civilisations. Major cities included Harappa, Mohenjo-daro, Lothal, and Dholavira. These cities had planned streets, brick houses, drainage systems, and granaries. The people traded with Mesopotamia.",
      "Mohenjo-daro had a Great Bath — a large public bathing tank. Streets were laid in a grid pattern. Houses had private wells and bathrooms connected to a covered drainage system.",
      ["Major Harappan cities: Harappa, Mohenjo-daro (Pakistan), Lothal, Dholavira (India)","Features: planned cities, grid streets, brick houses, Great Bath, granaries, drainage","Harappan script has not been deciphered yet — a mystery of history"]),
    ch(5,"What Books and Burials Tell Us","The Vedas are the oldest texts of India, composed in Sanskrit. The Rigveda is the oldest Veda. Vedic society was divided into groups based on work. Burial sites (megalithic burials) tell us about beliefs in life after death. Iron tools found in burial sites show the use of iron in ancient India.",
      "The Rigveda has hymns (prayers) to gods like Agni (fire), Indra (rain), and Varuna (water). Megalithic burials in South India had iron tools and pottery placed with the dead.",
      ["Four Vedas: Rigveda (oldest), Samaveda, Yajurveda, Atharvaveda","Vedic society: Brahmanas (priests), Kshatriyas (warriors), Vaishyas (traders), Shudras (workers)","Megalithic burials: large stone structures built over graves — found across South India"]),
    ch(6,"Kingdoms, Kings & Early Republic","Around 3000 years ago, some janapadas (territories) became mahajanapadas (large kingdoms). There were 16 mahajanapadas. Some areas had republics (ganas/sanghas) where groups of people made decisions together. Magadha became the most powerful mahajanapada. Taxes were collected from farmers, traders, and craftspeople.",
      "The 16 Mahajanapadas included Magadha, Kosala, Vajji, Avanti, and Kashi. Vajji was a republic — decisions were made by a group of rajas meeting in an assembly.",
      ["16 Mahajanapadas: large kingdoms that emerged around 600 BCE","Magadha (Bihar) became the most powerful — later became the Maurya Empire","Republics (ganas/sanghas): Vajji, Malla — decisions made by assemblies, not single kings"])
  ]
);


// ============================================================
// CLASS 7
// ============================================================
courseData["7"] = cls(
  // MATH
  [
    ch(1,"Integers","Integers include all positive numbers, negative numbers, and zero. On a number line, positive integers are to the right of zero and negative integers are to the left. Addition of integers: same signs → add and keep sign; different signs → subtract and keep sign of larger. Multiplication: same signs → positive; different signs → negative.",
      "5 + (−3) = 2. (−4) + (−2) = −6. (−3) × (−4) = +12. (−3) × 4 = −12.",
      ["Integers: ... −3, −2, −1, 0, 1, 2, 3 ...","Adding integers: (−5) + 3 = −2 (subtract, keep sign of larger). (−5) + (−3) = −8","Multiplying integers: same signs = positive; different signs = negative"]),
    ch(2,"Fractions and Decimals","A fraction has a numerator and denominator. Proper fractions have numerator < denominator. Improper fractions have numerator ≥ denominator. Mixed numbers combine a whole number and a fraction. To multiply fractions: multiply numerators and denominators. To divide: multiply by the reciprocal.",
      "2/3 × 3/4 = 6/12 = 1/2. 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. 0.3 × 0.4 = 0.12.",
      ["Proper fraction: 3/4. Improper fraction: 7/4. Mixed number: 1¾","To multiply fractions: multiply numerators together and denominators together","To divide fractions: multiply by the reciprocal (flip the second fraction)"]),
    ch(3,"Data Handling","Data is a collection of facts or numbers. Data can be organised in a tally chart or frequency table. A bar graph uses bars to compare data. A pie chart shows data as parts of a circle. Mean (average) = sum of all values ÷ number of values. Median = middle value. Mode = most frequent value.",
      "Marks of 5 students: 60, 70, 80, 70, 90. Mean = (60+70+80+70+90)/5 = 74. Median = 70 (middle value when arranged). Mode = 70 (appears twice).",
      ["Mean = sum of all values ÷ number of values (average)","Median = middle value when data is arranged in order","Mode = value that appears most frequently in the data"]),
    ch(4,"Simple Equations","An equation is a mathematical statement that two expressions are equal. A simple equation has one variable (unknown). To solve, perform the same operation on both sides to isolate the variable. Equations are used to solve real-life problems.",
      "Solve: 2x + 5 = 13. Subtract 5: 2x = 8. Divide by 2: x = 4. Check: 2(4) + 5 = 13 ✓",
      ["An equation has a left side (LHS) and right side (RHS) separated by '='","To solve: perform inverse operations to isolate the variable","Always check your answer by substituting back into the original equation"]),
    ch(5,"Lines and Angles","When two lines intersect, they form pairs of angles. Vertically opposite angles are equal. A transversal crossing parallel lines creates corresponding angles (equal), alternate interior angles (equal), and co-interior angles (supplementary = 180°). The sum of angles in a triangle is 180°.",
      "Two parallel lines cut by a transversal: corresponding angles are equal (both 60°). Vertically opposite angles: if one is 70°, the opposite is also 70°.",
      ["Vertically opposite angles are equal when two lines intersect","Parallel lines cut by transversal: corresponding angles equal, alternate angles equal","Sum of all angles in a triangle = 180°; sum of angles in a quadrilateral = 360°"]),
    ch(6,"Triangles, Congruence & Ratio","Two triangles are congruent if they have the same shape and size. Congruence rules: SSS, SAS, ASA, RHS. Ratio compares two quantities of the same kind. Proportion means two ratios are equal. Unitary method: find the value of one unit, then multiply.",
      "SSS: if all 3 sides of one triangle equal all 3 sides of another, they are congruent. Ratio: 2:3 means for every 2 of one thing, there are 3 of another. If 5 pens cost ₹25, 1 pen costs ₹5, so 8 pens cost ₹40.",
      ["Congruent triangles: same shape and size. Rules: SSS, SAS, ASA, AAS, RHS","Ratio a:b = a/b. Equivalent ratios: 2:3 = 4:6 = 6:9","Proportion: a:b = c:d means a×d = b×c (cross multiplication)"])
  ],
  // SCIENCE
  [
    ch(1,"Nutrition in Plants","Plants are autotrophs — they make their own food through photosynthesis. Photosynthesis occurs in chloroplasts (containing chlorophyll) in leaves. The equation is: CO₂ + H₂O + Sunlight → Glucose + O₂. Some plants are parasitic (Cuscuta), some are insectivorous (Venus flytrap), and some have symbiotic relationships.",
      "A leaf is the food factory of a plant. Chlorophyll (green pigment) absorbs sunlight. Stomata (tiny pores) allow CO₂ in and O₂ out. Cuscuta (Amarbel) is a parasitic plant that grows on other plants.",
      ["Photosynthesis: CO₂ + H₂O + Sunlight (chlorophyll) → Glucose + O₂","Chlorophyll is the green pigment in leaves that absorbs sunlight for photosynthesis","Parasitic plants (Cuscuta) get nutrition from host plants; insectivorous plants (pitcher plant) trap insects"]),
    ch(2,"Nutrition in Animals","Animals cannot make their own food — they are heterotrophs. Digestion breaks down complex food into simple, absorbable nutrients. Human digestion: mouth (chewing, saliva) → oesophagus → stomach (acid, enzymes) → small intestine (absorption) → large intestine (water absorption) → excretion.",
      "Saliva in the mouth contains amylase enzyme that breaks down starch. The stomach produces HCl acid to kill bacteria and pepsin to digest proteins. Villi in the small intestine absorb nutrients into the blood.",
      ["Digestion: mechanical (chewing) + chemical (enzymes) breakdown of food","Enzymes: amylase (starch→sugar), pepsin (protein), lipase (fat)","Small intestine: main site of digestion and absorption; villi increase surface area"]),
    ch(3,"Heat","Heat is a form of energy that flows from a hotter object to a cooler one. Temperature measures the degree of hotness or coldness. Thermometers measure temperature in Celsius (°C) or Fahrenheit (°F). Heat transfer occurs by conduction (solids), convection (liquids and gases), and radiation (no medium needed).",
      "Conduction: metal spoon in hot tea gets hot. Convection: hot air rises, cool air sinks (room heater). Radiation: feeling warmth from the sun without touching it.",
      ["Heat flows from hot to cold objects until thermal equilibrium is reached","Conduction: heat transfer through solids (metals are good conductors)","Convection: heat transfer through fluids (liquids and gases); Radiation: heat transfer without medium"]),
    ch(4,"Acids, Bases and Salts","Acids taste sour and turn blue litmus red (e.g., lemon juice, vinegar). Bases taste bitter, feel soapy, and turn red litmus blue (e.g., baking soda, soap). Neutral substances don't change litmus (e.g., water). Indicators like litmus, turmeric, and China rose detect acids and bases. Acid + Base → Salt + Water (neutralisation).",
      "Lemon juice (acid) turns blue litmus red. Baking soda (base) turns red litmus blue. Antacid tablets (base) neutralise excess stomach acid (acid) to relieve acidity.",
      ["Acids: sour taste, turn blue litmus red. Examples: HCl, H₂SO₄, lemon juice, vinegar","Bases: bitter taste, soapy feel, turn red litmus blue. Examples: NaOH, baking soda","Neutralisation: Acid + Base → Salt + Water. Used in treating acidity and insect stings"]),
    ch(5,"Physical and Chemical Changes","A physical change alters the form or appearance of a substance but not its chemical composition — it is usually reversible. A chemical change produces a new substance with different properties — it is usually irreversible. Signs of chemical change: colour change, gas production, heat/light release, precipitate formation.",
      "Physical: cutting paper, melting ice, dissolving sugar — no new substance formed. Chemical: burning wood, rusting iron, cooking food — new substances formed.",
      ["Physical change: reversible, no new substance (melting, dissolving, cutting)","Chemical change: irreversible, new substance formed (burning, rusting, cooking)","Signs of chemical change: colour change, gas evolved, heat/light produced, precipitate formed"]),
    ch(6,"Weather, Climate and Adaptations","Weather is the day-to-day condition of the atmosphere. Climate is the average weather pattern of a region over many years. Tropical rainforests have hot, humid climate with heavy rainfall. Polar regions are extremely cold. Animals and plants adapt to their environment — polar bears have thick fur; cacti store water.",
      "Tropical rainforest: Amazon (Brazil) — hot, wet, dense vegetation. Polar region: Arctic/Antarctic — extremely cold, ice-covered. Polar bear: thick white fur for insulation and camouflage.",
      ["Weather: short-term atmospheric conditions. Climate: long-term average weather of a region","Tropical rainforest: hot, humid, heavy rainfall — rich biodiversity","Adaptations: polar bear (thick fur, white colour), camel (hump for fat storage, wide feet for sand)"])
  ],
  // ENGLISH
  [
    ch(1,"Three Questions — Tolstoy","This story by Leo Tolstoy presents three important questions: What is the right time to begin things? Who are the most important people? What is the most important thing to do? The answers reveal that the present moment is the most important time, the person you are with is the most important person, and doing good for that person is the most important thing.",
      "A king seeks answers to three questions. A hermit teaches him through experience: he helps a wounded man, and this act of kindness saves his life — showing that the present moment and the person before you matter most.",
      ["Three questions: right time, right people, most important thing to do","Answer: Now is the most important time; the person with you is most important; do good for them","Theme: Mindfulness, kindness, and living in the present moment"]),
    ch(2,"A Gift of Chappals","This story shows the kindness and generosity of children. Mridu visits her cousins and discovers they have given away their grandfather's chappals to a poor music teacher. The story highlights the values of empathy, sharing, and the innocence of children who give without thinking of consequences.",
      "Ravi and Meena gave their grandfather's new chappals to Ramu, a poor music teacher, because his old ones were torn. Their act of kindness was spontaneous and genuine.",
      ["Theme: Generosity, empathy, and the innocence of childhood","Characters: Mridu (visitor), Ravi and Meena (cousins), Ramu (music teacher)","Moral: True generosity comes from the heart without expecting anything in return"]),
    ch(3,"Grammar — Adjectives, Adverbs & Conjunctions","Adjectives modify nouns (big, red, three). Degrees of comparison: positive (tall), comparative (taller), superlative (tallest). Adverbs modify verbs, adjectives, or other adverbs. Conjunctions join words, phrases, or clauses — coordinating (and, but, or) and subordinating (because, although, when).",
      "Positive: Riya is tall. Comparative: Riya is taller than Priya. Superlative: Riya is the tallest in the class. Conjunction: I was tired, but I finished my homework.",
      ["Degrees of comparison: positive (fast), comparative (faster), superlative (fastest)","Adverbs: manner (quickly), time (yesterday), place (here), frequency (always), degree (very)","Conjunctions: coordinating (and, but, or, so), subordinating (because, although, if, when)"]),
    ch(4,"Grammar — Prepositions & Reported Speech","Prepositions show the relationship between a noun/pronoun and other words (in, on, at, by, with, under, over). Reported speech (indirect speech) reports what someone said without using their exact words. Rules: change pronouns, tenses (backshift), and time expressions.",
      "Direct: She said, 'I am happy.' Reported: She said that she was happy. Preposition: The book is on the table. He arrived at 5 o'clock.",
      ["Prepositions of place: in, on, at, under, over, between, beside","Reported speech: change present→past, 'I'→'she/he', 'today'→'that day'","Reporting verbs: said, told, asked, replied, announced"]),
    ch(5,"Writing — Story and Diary Entry","A story has a beginning (introduction of characters and setting), middle (conflict/problem), and end (resolution). A diary entry is a personal record of daily thoughts and experiences. It is written in first person, with the date and day at the top. Diary entries are informal and express personal feelings.",
      "Story structure: Once upon a time (beginning) → Problem arose (middle) → Problem solved (end). Diary: 'Monday, 15 July. Dear Diary, Today was an amazing day...'",
      ["Story elements: characters, setting, plot (conflict and resolution), theme","Diary entry format: Date, Day, 'Dear Diary', personal thoughts in first person","Use descriptive language in stories; use emotional, personal language in diary entries"]),
    ch(6,"Comprehension & Advanced Vocabulary","Advanced comprehension involves making inferences (reading between the lines), identifying the author's purpose, and understanding figurative language (similes, metaphors, personification). Vocabulary building includes understanding word roots, prefixes, and suffixes.",
      "Simile: 'She runs like the wind.' Metaphor: 'Life is a journey.' Personification: 'The trees danced in the breeze.' Prefix: 'un-' means not (unhappy). Suffix: '-ful' means full of (beautiful).",
      ["Simile: comparison using 'like' or 'as'. Metaphor: direct comparison without 'like/as'","Personification: giving human qualities to non-human things","Prefixes: un-(not), re-(again), pre-(before). Suffixes: -ful, -less, -ness, -tion"])
  ],
  // HINDI
  [
    ch(1,"हम पंछी उन्मुक्त गगन के — कविता","यह कविता शिवमंगल सिंह 'सुमन' द्वारा लिखी गई है। इसमें पक्षी पिंजरे में बंद होने की पीड़ा व्यक्त करते हैं और स्वतंत्र आकाश में उड़ने की इच्छा जताते हैं। कविता स्वतंत्रता के महत्व और प्रकृति के प्रति प्रेम का संदेश देती है।",
      "पक्षी कहते हैं: 'हम पंछी उन्मुक्त गगन के, पिंजरबद्ध न गा पाएंगे।' वे सोने के पिंजरे की बजाय खुले आकाश में उड़ना चाहते हैं।",
      ["कविता का मुख्य भाव: स्वतंत्रता सबसे बड़ा सुख है","पक्षी सोने के पिंजरे को भी अस्वीकार करते हैं — स्वतंत्रता अमूल्य है","कवि ने पक्षियों के माध्यम से मानव की स्वतंत्रता की चाह व्यक्त की है"]),
    ch(2,"दादी माँ — कहानी","यह शिवप्रसाद सिंह की कहानी है जिसमें एक बच्चे की दादी माँ के प्रति गहरे प्रेम और उनकी यादों का वर्णन है। दादी माँ का स्नेह, उनकी कहानियाँ और उनका त्याग बच्चे के मन पर गहरी छाप छोड़ते हैं। कहानी पारिवारिक प्रेम और बुजुर्गों के महत्व को दर्शाती है।",
      "बच्चे को बुखार होने पर दादी माँ रात भर जागकर उसकी देखभाल करती हैं। उनकी ममता और देखभाल बच्चे को जल्दी ठीक कर देती है।",
      ["कहानी का संदेश: बुजुर्गों का प्यार और अनुभव अमूल्य होता है","दादी माँ का चरित्र: ममतामयी, त्यागी, अनुभवी और स्नेहशील","पारिवारिक संबंधों की गर्माहट और बुजुर्गों के प्रति सम्मान का संदेश"]),
    ch(3,"हिमालय की बेटियाँ — निबंध","यह नागार्जुन का निबंध है जिसमें उन्होंने हिमालय से निकलने वाली नदियों को हिमालय की बेटियाँ कहा है। गंगा, यमुना, सतलुज जैसी नदियाँ हिमालय से निकलकर मैदानों को उपजाऊ बनाती हैं। निबंध में नदियों के प्रति श्रद्धा और प्रकृति के प्रति प्रेम व्यक्त किया गया है।",
      "गंगा, यमुना, सतलुज, ब्रह्मपुत्र — ये सभी हिमालय से निकलती हैं। ये नदियाँ करोड़ों लोगों को जीवन देती हैं।",
      ["हिमालय की प्रमुख नदियाँ: गंगा, यमुना, सतलुज, ब्रह्मपुत्र, झेलम","नदियाँ हिमालय की बेटियाँ हैं — वे जीवनदायिनी हैं","निबंध में प्रकृति के प्रति श्रद्धा और नदियों के महत्व का वर्णन"]),
    ch(4,"व्याकरण — विशेषण और क्रियाविशेषण","विशेषण वह शब्द है जो संज्ञा या सर्वनाम की विशेषता बताता है। विशेषण के चार भेद हैं: गुणवाचक, परिमाणवाचक, संख्यावाचक, और सार्वनामिक। क्रियाविशेषण वह शब्द है जो क्रिया की विशेषता बताता है।",
      "गुणवाचक: सुंदर फूल, मीठा आम। परिमाणवाचक: थोड़ा पानी, बहुत दूध। संख्यावाचक: पाँच लड़के, दस किताबें। क्रियाविशेषण: वह तेज दौड़ता है।",
      ["विशेषण के भेद: गुणवाचक (सुंदर), परिमाणवाचक (थोड़ा), संख्यावाचक (पाँच), सार्वनामिक (यह, वह)","क्रियाविशेषण के भेद: रीतिवाचक (कैसे), कालवाचक (कब), स्थानवाचक (कहाँ), परिमाणवाचक (कितना)","विशेषण संज्ञा से पहले आता है; क्रियाविशेषण क्रिया से पहले या बाद में"]),
    ch(5,"व्याकरण — समास और संधि","समास दो या दो से अधिक शब्दों के मेल से बने नए शब्द को कहते हैं। समास के छह भेद हैं: अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, और बहुव्रीहि। संधि दो वर्णों के मेल से होने वाले परिवर्तन को कहते हैं।",
      "समास: राजपुत्र = राजा का पुत्र (तत्पुरुष)। देशभक्त = देश का भक्त। संधि: सूर्य + उदय = सूर्योदय (स्वर संधि)।",
      ["समास: दो शब्दों का मेल — राजपुत्र, देशभक्त, पाठशाला","संधि: दो वर्णों का मेल — स्वर संधि, व्यंजन संधि, विसर्ग संधि","समास में बीच की विभक्ति लुप्त होती है; संधि में वर्ण परिवर्तन होता है"]),
    ch(6,"निबंध और पत्र लेखन","निबंध एक विषय पर विचारपूर्ण लेखन है। निबंध में भूमिका, विषय-विस्तार और उपसंहार होते हैं। औपचारिक पत्र में प्रेषक का पता, दिनांक, विषय, संबोधन, मुख्य भाग और समापन होता है। अनौपचारिक पत्र मित्र या परिवार को लिखा जाता है।",
      "निबंध विषय: 'पर्यावरण प्रदूषण'। भूमिका: प्रदूषण की समस्या। विस्तार: कारण और प्रभाव। उपसंहार: समाधान।",
      ["निबंध के भाग: भूमिका (परिचय), विषय-विस्तार (मुख्य भाग), उपसंहार (निष्कर्ष)","औपचारिक पत्र: सेवा में, महोदय/महोदया, भवदीय/भवदीया","अनौपचारिक पत्र: प्रिय मित्र/भाई, तुम्हारा/आपका"])
  ],
  // SOCIAL
  [
    ch(1,"Tracing Changes Through 1000 Years","Historians study changes over long periods. Between 700 CE and 1750 CE, India saw many changes — new rulers, religions, languages, and technologies. Maps from this period show how geographical knowledge evolved. The term 'Hindustan' was used by outsiders to describe the subcontinent.",
      "A map of India from 1154 CE by Al-Idrisi (Arab geographer) shows India upside down compared to modern maps — showing how geographical knowledge was different then.",
      ["History between 700–1750 CE: period of many changes in rulers, religion, and culture","Historians use coins, inscriptions, manuscripts, and monuments as sources","The term 'Hindustan' was used by outsiders; Indians used regional names"]),
    ch(2,"New Kings and Kingdoms","After the decline of the Gupta Empire, many new kingdoms emerged. Rulers used titles like maharajadhiraja (great king of kings). Land grants were given to Brahmanas and temples. Prashastis (inscriptions praising kings) were written. The Chola, Rashtrakuta, and Gurjara-Pratihara were major kingdoms.",
      "The Rashtrakutas of Deccan, Gurjara-Pratiharas of north India, and Palas of Bengal were the three major powers fighting for control of Kanauj (tripartite struggle).",
      ["After Gupta decline: many regional kingdoms emerged — Cholas, Rashtrakutas, Palas","Tripartite struggle: Rashtrakutas, Gurjara-Pratiharas, and Palas fought for Kanauj","Land grants to Brahmanas and temples increased their power and wealth"]),
    ch(3,"The Delhi Sultanate","The Delhi Sultanate (1206–1526 CE) was established by Qutb-ud-din Aibak. Five dynasties ruled: Slave, Khalji, Tughlaq, Sayyid, and Lodi. Iltutmish, Razia Sultan, Alauddin Khalji, and Muhammad bin Tughlaq were important sultans. The Mongol invasions were repelled. Persian became the court language.",
      "Razia Sultan (1236–1240) was the first woman ruler of the Delhi Sultanate. Alauddin Khalji introduced market reforms and price control. Qutb Minar in Delhi was built during this period.",
      ["Delhi Sultanate: 1206–1526 CE. Five dynasties: Slave, Khalji, Tughlaq, Sayyid, Lodi","Razia Sultan: first woman ruler of Delhi Sultanate (1236–1240 CE)","Alauddin Khalji: market reforms, price control, repelled Mongol invasions"]),
    ch(4,"The Mughal Empire","The Mughal Empire (1526–1857) was founded by Babur after the First Battle of Panipat (1526). Akbar was the greatest Mughal emperor — he promoted religious tolerance (Din-i-Ilahi), expanded the empire, and introduced the mansabdari system. Shah Jahan built the Taj Mahal. Aurangzeb's policies led to the empire's decline.",
      "Akbar's Navratnas (nine gems): Birbal, Todar Mal, Abul Fazl, Tansen, and others. Taj Mahal: built by Shah Jahan in memory of his wife Mumtaz Mahal — a UNESCO World Heritage Site.",
      ["Mughal Empire: 1526–1857. Founded by Babur at First Battle of Panipat (1526)","Akbar: greatest Mughal — Din-i-Ilahi, mansabdari system, religious tolerance","Taj Mahal: built by Shah Jahan (1632–1653) — symbol of love and Mughal architecture"]),
    ch(5,"Rulers and Buildings","Medieval rulers built magnificent structures to demonstrate their power and devotion. Temples, mosques, tombs, and forts were built. The Qutb Minar, Red Fort, Taj Mahal, and Konark Sun Temple are examples. Architecture combined Indian, Persian, and Central Asian styles. Craftsmen and architects were highly skilled.",
      "Qutb Minar (Delhi): 72.5 metres tall, built by Qutb-ud-din Aibak. Konark Sun Temple (Odisha): built by King Narasimhadeva I. Red Fort (Delhi): built by Shah Jahan.",
      ["Medieval architecture: temples (Hindu), mosques (Islamic), tombs, forts","Qutb Minar: tallest brick minaret in the world (72.5 m), Delhi","Taj Mahal: white marble mausoleum, Agra — UNESCO World Heritage Site"]),
    ch(6,"Towns, Traders and Craftspersons","Medieval India had thriving towns and trade. Temple towns grew around important temples. Administrative towns were centres of government. Port towns facilitated sea trade. Craftspersons made textiles, metalwork, and pottery. Indian textiles (cotton, silk) were exported to Europe, West Asia, and Southeast Asia.",
      "Hampi (Karnataka): capital of Vijayanagara Empire — a major trading city. Surat (Gujarat): important port for trade with Arabia and Europe. Indian cotton cloth was famous worldwide.",
      ["Types of towns: temple towns (Madurai), administrative towns (Delhi), port towns (Surat)","Indian exports: cotton textiles, spices, indigo, silk — traded with Arabia, Europe, Southeast Asia","Craftspersons: weavers, potters, metalworkers, carpenters — organised in guilds"])
  ]
);


// ============================================================
// CLASS 8
// ============================================================
courseData["8"] = cls(
  [
    ch(1,"Rational Numbers","Rational numbers are numbers that can be expressed as p/q where p and q are integers and q ≠ 0. They include integers, fractions, and decimals. Rational numbers are dense — between any two rational numbers, there are infinitely many rational numbers. Properties: closure, commutativity, associativity, distributivity.",
      "3/4, −2/5, 0, 7, −3 are all rational numbers. Between 1/2 and 3/4: 5/8 is a rational number. 0 is the additive identity; 1 is the multiplicative identity.",
      ["Rational numbers: p/q form where q ≠ 0. Includes integers, fractions, terminating decimals","Properties: commutative and associative for addition and multiplication","Additive inverse of p/q is −p/q. Multiplicative inverse (reciprocal) of p/q is q/p"]),
    ch(2,"Linear Equations in One Variable","A linear equation has the variable raised to the power of 1. It can be solved by performing the same operation on both sides. Applications include finding unknown ages, numbers, and solving word problems. Equations with variables on both sides are solved by collecting variable terms on one side.",
      "Solve: 3x − 5 = 2x + 7. Subtract 2x: x − 5 = 7. Add 5: x = 12. Word problem: A number is 5 more than twice another. If their sum is 20, find the numbers.",
      ["Linear equation: variable has power 1. Solve by isolating the variable","Transpose: move terms to the other side by changing their sign","Applications: age problems, number problems, geometry problems"]),
    ch(3,"Understanding Quadrilaterals","A quadrilateral has 4 sides, 4 angles, and 4 vertices. Sum of interior angles = 360°. Types: parallelogram (opposite sides parallel and equal), rectangle (all angles 90°), rhombus (all sides equal), square (all sides equal, all angles 90°), trapezium (one pair of parallel sides), kite.",
      "Rectangle: length 8 cm, width 5 cm. Area = 40 cm², Perimeter = 26 cm. Rhombus: all 4 sides equal, diagonals bisect each other at right angles.",
      ["Sum of interior angles of any quadrilateral = 360°","Parallelogram: opposite sides parallel and equal, opposite angles equal, diagonals bisect each other","Square is a special rectangle AND a special rhombus — all sides equal, all angles 90°"]),
    ch(4,"Squares, Square Roots, Cubes & Cube Roots","A perfect square is a number whose square root is a whole number (1, 4, 9, 16, 25...). Square root can be found by prime factorisation or long division. A perfect cube is a number whose cube root is a whole number (1, 8, 27, 64...). Cube root is found by prime factorisation.",
      "√144 = 12 (since 12² = 144). ∛216 = 6 (since 6³ = 216). Prime factorisation of 324: 2²×3⁴, so √324 = 2×3² = 18.",
      ["Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...","Square root by prime factorisation: pair up prime factors, take one from each pair","Perfect cubes: 1, 8, 27, 64, 125, 216... Cube root: group prime factors in threes"]),
    ch(5,"Data Handling & Probability","Data can be represented using bar graphs, pie charts, histograms, and line graphs. A histogram shows frequency distribution of continuous data. Probability is the likelihood of an event occurring. P(event) = Number of favourable outcomes / Total number of outcomes. Probability ranges from 0 (impossible) to 1 (certain).",
      "Tossing a coin: P(heads) = 1/2. Rolling a die: P(getting 4) = 1/6. P(getting even number) = 3/6 = 1/2.",
      ["Probability = Favourable outcomes / Total outcomes. Range: 0 to 1","P(impossible event) = 0. P(certain event) = 1","Histogram: bars touch each other (continuous data). Bar graph: bars have gaps (discrete data)"]),
    ch(6,"Algebraic Expressions & Identities","An algebraic expression contains variables, constants, and operations. A polynomial is an expression with one or more terms. Identities are equations true for all values of variables: (a+b)² = a²+2ab+b², (a−b)² = a²−2ab+b², (a+b)(a−b) = a²−b².",
      "(x+3)² = x²+6x+9. (2x−5)² = 4x²−20x+25. (x+4)(x−4) = x²−16.",
      ["(a+b)² = a²+2ab+b². (a−b)² = a²−2ab+b². (a+b)(a−b) = a²−b²","Like terms have the same variable and power — they can be added/subtracted","Factorisation: reverse of expansion — take out common factors"])
  ],
  [
    ch(1,"Crop Production and Management","Agriculture is the backbone of India. Crops are classified as Kharif (sown in June-July, harvested in October: rice, maize, cotton) and Rabi (sown in November, harvested in April: wheat, mustard, peas). Soil preparation, sowing, irrigation, fertilisation, harvesting, and storage are the steps of crop production.",
      "Kharif crops: rice, maize, cotton, groundnut — grown in rainy season. Rabi crops: wheat, mustard, peas — grown in winter. Paddy (rice) needs flooded fields; wheat needs less water.",
      ["Kharif crops: sown in June-July (monsoon), harvested October-November (rice, maize, cotton)","Rabi crops: sown November-December, harvested March-April (wheat, mustard, peas)","Steps: soil preparation → sowing → irrigation → fertilisation → harvesting → storage"]),
    ch(2,"Microorganisms — Friend and Foe","Microorganisms are tiny living things visible only under a microscope. Types: bacteria, viruses, fungi, protozoa, algae. Useful microorganisms: make curd, bread, antibiotics, fix nitrogen. Harmful microorganisms: cause diseases (cholera, typhoid, COVID-19), food spoilage.",
      "Lactobacillus bacteria convert milk into curd. Yeast (fungus) ferments dough to make bread rise. Penicillin antibiotic was discovered from Penicillium fungus. Plasmodium protozoa causes malaria.",
      ["Useful microorganisms: curd (Lactobacillus), bread (yeast), antibiotics (Penicillium), nitrogen fixation (Rhizobium)","Harmful microorganisms: cholera (Vibrio cholerae), typhoid (Salmonella), malaria (Plasmodium)","Preservation methods: pasteurisation, refrigeration, salting, pickling, chemical preservatives"]),
    ch(3,"Synthetic Fibres and Plastics","Synthetic fibres are man-made from chemical substances (petrochemicals). Types: rayon (semi-synthetic), nylon, polyester, acrylic. Plastics are polymers — long chains of repeating units. Thermoplastics can be remoulded (PVC, polythene). Thermosetting plastics cannot be remoulded (Bakelite, melamine).",
      "Nylon: strong, elastic, used in ropes, parachutes, stockings. Polyester: wrinkle-resistant, used in clothes. Bakelite: heat-resistant, used in electrical switches. Polythene: flexible, used in bags.",
      ["Synthetic fibres: rayon, nylon, polyester, acrylic — made from petrochemicals","Thermoplastics: can be remoulded on heating (PVC, polythene, PET)","Thermosetting plastics: cannot be remoulded (Bakelite, melamine) — used in electrical fittings"]),
    ch(4,"Metals and Non-Metals","Metals are lustrous, malleable, ductile, and good conductors of heat and electricity. Non-metals are generally dull, brittle, and poor conductors. Metals react with oxygen (form oxides), water, and acids. Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au.",
      "Iron rusts (Fe + O₂ + H₂O → Fe₂O₃). Copper turns green (patina). Gold and silver don't react with air — that's why they're used in jewellery. Aluminium is used in aircraft because it's light and strong.",
      ["Metals: lustrous, malleable, ductile, good conductors. Non-metals: dull, brittle, poor conductors","Reactivity series: K, Na, Ca, Mg, Al, Zn, Fe, Pb, Cu, Ag, Au (decreasing reactivity)","Corrosion: rusting of iron (Fe₂O₃). Prevention: painting, galvanising, alloying"]),
    ch(5,"Coal and Petroleum","Coal and petroleum are fossil fuels formed from the remains of ancient organisms over millions of years. They are non-renewable resources. Coal is used for electricity generation and making coke, coal tar, and coal gas. Petroleum is refined to get petrol, diesel, kerosene, LPG, and lubricating oil.",
      "Coal formation: dead plants buried under earth → compressed over millions of years → coal. Petroleum refining: crude oil heated → different fractions collected at different temperatures (fractional distillation).",
      ["Fossil fuels: coal, petroleum, natural gas — formed over millions of years, non-renewable","Coal products: coke (fuel), coal tar (dyes, medicines), coal gas (fuel)","Petroleum products: petrol, diesel, kerosene, LPG, lubricating oil, paraffin wax"]),
    ch(6,"Combustion, Flame & Conservation","Combustion is a chemical reaction between a fuel and oxygen that produces heat and light. Conditions for combustion: fuel, oxygen, ignition temperature. Types of combustion: rapid (burning wood), spontaneous (white phosphorus), explosive (crackers). A candle flame has three zones: dark inner zone, luminous middle zone, non-luminous outer zone.",
      "Fire triangle: fuel + oxygen + heat. Remove any one to extinguish fire. CO₂ extinguisher: removes oxygen. Water: lowers temperature. Sand: removes oxygen.",
      ["Combustion requires: fuel, oxygen, and ignition temperature (fire triangle)","Types: rapid combustion (wood), spontaneous combustion (white phosphorus), explosive (crackers)","Fire extinguishers: CO₂ (electrical fires), water (wood/paper fires), sand (oil fires)"])
  ],
  [
    ch(1,"The Best Christmas Present in the World","This story by Michael Morpurgo is about a letter found in an old desk, written by a soldier during World War I. The letter describes the famous Christmas Truce of 1914, when German and British soldiers stopped fighting and celebrated Christmas together. The story highlights the humanity that exists even in times of war.",
      "Jim Macpherson's letter describes how on Christmas Day 1914, German soldiers came out of their trenches singing carols, and British soldiers joined them — they played football and exchanged gifts.",
      ["Theme: Peace, humanity, and the futility of war","Christmas Truce of 1914: real historical event — soldiers from both sides stopped fighting","Moral: Even enemies can find common humanity; peace is always possible"]),
    ch(2,"The Tsunami","This chapter describes the devastating tsunami of December 26, 2004, that struck the Indian Ocean region. It tells stories of survival and loss. Tilly Smith, a 10-year-old British girl, saved many lives because she had learned about tsunamis in school. Animals sensed the tsunami before it struck.",
      "Tilly Smith had studied tsunamis in geography class. When she saw the sea receding rapidly, she warned her parents and the beach was evacuated — saving about 100 lives.",
      ["Tsunami of 2004: caused by undersea earthquake near Sumatra — killed over 2 lakh people","Warning signs: sea recedes rapidly, unusual wave patterns, animals behave strangely","Tilly Smith: 10-year-old who saved lives using knowledge from school geography"]),
    ch(3,"Grammar — Passive Voice and Conditionals","Active voice: subject performs the action. Passive voice: subject receives the action. Passive is formed with 'be' + past participle. Conditionals express conditions and results: Type 0 (general truth), Type 1 (real/possible), Type 2 (unreal/hypothetical), Type 3 (impossible/past).",
      "Active: 'The teacher teaches the students.' Passive: 'The students are taught by the teacher.' Conditional: 'If it rains, I will stay home.' (Type 1)",
      ["Passive voice: Object becomes subject. 'The cake was eaten by him.'","Passive formation: am/is/are/was/were + past participle","Conditionals: Type 1 (if + present, will + base). Type 2 (if + past, would + base)"]),
    ch(4,"Grammar — Reported Speech & Clauses","Reported speech reports what someone said without using their exact words. Rules: change tense (backshift), pronouns, and time expressions. Clauses are groups of words with a subject and verb. Main clause can stand alone; subordinate clause cannot.",
      "Direct: 'I am going to school,' she said. Reported: She said that she was going to school. Clause: 'Although it was raining (subordinate), we went out (main).'",
      ["Reported speech: tense backshift — present→past, past→past perfect","Time changes: today→that day, tomorrow→the next day, yesterday→the previous day","Subordinate clauses: noun clause, adjective clause, adverb clause"]),
    ch(5,"Writing — Formal Letter and Report","A formal letter is written for official purposes — complaints, applications, requests. Format: sender's address, date, receiver's address, subject, salutation, body (3 paragraphs), closing. A report presents facts about an event or situation. It has a heading, date, reporter's name, and body.",
      "Formal letter: complaint to municipality about broken road. Report: school annual day celebration — heading, date, reporter, what happened, who attended, conclusion.",
      ["Formal letter format: address, date, subject, Dear Sir/Madam, body, Yours faithfully, signature","Report format: heading, date, by (reporter's name), body paragraphs, conclusion","Use formal, polite language; avoid contractions and slang in formal writing"]),
    ch(6,"Comprehension — Prose and Poetry","Advanced comprehension involves understanding tone, mood, and the author's perspective. Poetry analysis includes identifying poetic devices: alliteration, assonance, onomatopoeia, imagery, symbolism. Critical reading means evaluating the text and forming your own opinion.",
      "Alliteration: 'Peter Piper picked a peck.' Onomatopoeia: 'The bees buzzed.' Imagery: 'The golden sun melted into the horizon.' Symbolism: a dove symbolises peace.",
      ["Poetic devices: alliteration (same consonant), assonance (same vowel sound), onomatopoeia (sound words)","Imagery: language that appeals to the senses. Symbolism: object represents an idea","Critical reading: identify author's purpose, bias, tone, and evaluate arguments"])
  ],
  [
    ch(1,"ध्वनि — कविता","यह सूर्यकांत त्रिपाठी 'निराला' की कविता है जो वसंत ऋतु के आगमन का उत्साहपूर्ण स्वागत करती है। कविता में प्रकृति के नवजीवन और उत्साह का वर्णन है। कवि कहते हैं कि अभी न होगा मेरा अंत — जीवन में उत्साह और आशा बनाए रखने का संदेश है।",
      "'अभी न होगा मेरा अंत, अभी-अभी ही तो आया है मेरे वन में मृदुल वसंत।' — कवि वसंत के आगमन से उत्साहित हैं।",
      ["कविता का भाव: जीवन में उत्साह और आशा बनाए रखो","वसंत ऋतु नवजीवन और उमंग का प्रतीक है","निराला की भाषा: छायावादी, भावपूर्ण, प्रकृति चित्रण से भरपूर"]),
    ch(2,"लाख की चूड़ियाँ — कहानी","यह कामतानाथ की कहानी है जिसमें एक बच्चे और लाख की चूड़ियाँ बनाने वाले बदलू काका के बीच के संबंध का वर्णन है। मशीनों के आने से बदलू काका का काम बंद हो जाता है। कहानी पारंपरिक शिल्प के नष्ट होने और आधुनिकीकरण के प्रभाव को दर्शाती है।",
      "बदलू काका हाथ से लाख की चूड़ियाँ बनाते थे। जब मशीन से बनी सस्ती चूड़ियाँ आईं, तो उनका काम बंद हो गया।",
      ["कहानी का संदेश: आधुनिकीकरण से पारंपरिक शिल्प और कारीगर प्रभावित होते हैं","बदलू काका का चरित्र: कुशल कारीगर, स्वाभिमानी, परंपरा का पालक","पारंपरिक शिल्प को संरक्षित करने की जरूरत है"]),
    ch(3,"व्याकरण — वाच्य","वाच्य क्रिया का वह रूप है जो बताता है कि वाक्य में कर्ता, कर्म या भाव की प्रधानता है। वाच्य तीन प्रकार के होते हैं: कर्तृवाच्य (कर्ता प्रधान), कर्मवाच्य (कर्म प्रधान), और भाववाच्य (भाव प्रधान)।",
      "कर्तृवाच्य: राम खाना खाता है। कर्मवाच्य: राम द्वारा खाना खाया जाता है। भाववाच्य: राम से चला नहीं जाता।",
      ["कर्तृवाच्य: कर्ता प्रधान — 'राम पढ़ता है'","कर्मवाच्य: कर्म प्रधान — 'राम द्वारा पुस्तक पढ़ी जाती है'","भाववाच्य: भाव प्रधान — 'राम से पढ़ा नहीं जाता'"]),
    ch(4,"व्याकरण — अलंकार","अलंकार काव्य की शोभा बढ़ाने वाले तत्व हैं। अलंकार दो प्रकार के होते हैं: शब्दालंकार (शब्द पर आधारित) और अर्थालंकार (अर्थ पर आधारित)। प्रमुख अलंकार: अनुप्रास, यमक, श्लेष (शब्दालंकार); उपमा, रूपक, उत्प्रेक्षा (अर्थालंकार)।",
      "अनुप्रास: 'चारु चंद्र की चंचल किरणें' (च की आवृत्ति)। उपमा: 'मुख चंद्रमा के समान सुंदर है।' रूपक: 'मुख चंद्रमा है।'",
      ["शब्दालंकार: अनुप्रास (एक वर्ण की आवृत्ति), यमक (एक शब्द अलग अर्थ में), श्लेष (एक शब्द के दो अर्थ)","अर्थालंकार: उपमा (जैसे/सा से तुलना), रूपक (सीधी तुलना), उत्प्रेक्षा (मानो/जानो से)","अलंकार काव्य को सुंदर, प्रभावशाली और भावपूर्ण बनाते हैं"]),
    ch(5,"व्याकरण — छंद","छंद काव्य की लय और संगीतात्मकता का आधार है। छंद में मात्राओं और वर्णों की निश्चित संख्या होती है। प्रमुख छंद: दोहा (13+11 मात्राएँ), चौपाई (16+16 मात्राएँ), सोरठा (11+13 मात्राएँ)।",
      "दोहा: 'रहिमन धागा प्रेम का, मत तोड़ो चटकाय। टूटे से फिर ना जुड़े, जुड़े गाँठ पड़ जाय।' — पहली पंक्ति 13+11 मात्राएँ।",
      ["दोहा: 13+11 मात्राएँ, दो पंक्तियाँ, अंत में तुक","चौपाई: 16+16 मात्राएँ, चार पंक्तियाँ — रामचरितमानस में प्रयुक्त","छंद काव्य को लयबद्ध और संगीतात्मक बनाता है"]),
    ch(6,"निबंध लेखन और अपठित गद्यांश","निबंध लेखन में विषय की गहरी समझ, तर्कपूर्ण प्रस्तुति और भाषा की शुद्धता जरूरी है। अपठित गद्यांश में दिए गए अनजान पाठ को पढ़कर प्रश्नों के उत्तर देने होते हैं। मुख्य विचार, शब्दार्थ और निष्कर्ष पहचानना जरूरी है।",
      "निबंध: 'मोबाइल फोन — वरदान या अभिशाप'। भूमिका: मोबाइल का महत्व। विस्तार: फायदे और नुकसान। उपसंहार: संतुलित उपयोग।",
      ["निबंध में तर्क, उदाहरण और भाषा की शुद्धता जरूरी है","अपठित गद्यांश: पहले पूरा पढ़ें, फिर प्रश्न पढ़ें, फिर उत्तर खोजें","शब्दार्थ: संदर्भ से अर्थ समझें; मुख्य विचार: पूरे अनुच्छेद का सार"])
  ],
  [
    ch(1,"How, When and Where","Historians use dates, sources, and perspectives to understand the past. The British introduced new ways of recording history — surveys, census, and official documents. James Mill divided Indian history into Hindu, Muslim, and British periods — a controversial classification. History is not just about rulers but also about ordinary people.",
      "James Mill's 'History of British India' (1817) divided Indian history into Hindu, Muslim, and British periods. This classification was criticised as it ignored the diversity within each period.",
      ["History sources: official records, newspapers, diaries, photographs, oral traditions","James Mill's periodisation: Hindu, Muslim, British — criticised for being simplistic","British introduced: surveys, census, official records — changed how history was recorded"]),
    ch(2,"From Trade to Territory — The Company Establishes Power","The British East India Company came to India for trade in 1600. Gradually, it gained political power. The Battle of Plassey (1757) gave the Company control over Bengal. The Doctrine of Lapse (Lord Dalhousie) was used to annex states. By 1857, the Company controlled most of India.",
      "Battle of Plassey (1757): Robert Clive defeated Nawab Siraj-ud-Daulah of Bengal — beginning of British political control. Doctrine of Lapse: if a ruler died without a natural heir, the state was annexed by the British.",
      ["East India Company: established 1600, came for trade, gradually gained political power","Battle of Plassey (1757): British defeated Bengal Nawab — first major political victory","Doctrine of Lapse (Dalhousie): states without natural heirs annexed — Satara, Jhansi, Nagpur"]),
    ch(3,"Ruling the Countryside","The British introduced the Permanent Settlement (1793) in Bengal — zamindars were made permanent owners of land and had to pay fixed revenue. The Ryotwari system (Madras, Bombay) dealt directly with peasants. Indigo cultivation was forced on peasants in Bengal — leading to the Indigo Revolt (1859).",
      "Permanent Settlement (1793): Lord Cornwallis fixed land revenue permanently. Zamindars who couldn't pay lost their land. Indigo Revolt (1859): Bengal peasants refused to grow indigo — supported by missionaries and educated Indians.",
      ["Permanent Settlement (1793): zamindars made permanent landowners, fixed revenue to British","Ryotwari system: direct settlement with peasants (Madras, Bombay)","Indigo Revolt (1859): peasants in Bengal refused to grow indigo — early example of peasant resistance"]),
    ch(4,"Tribals, Dikus and the Vision of a Golden Age","Tribal communities had their own customs, land rights, and ways of life. The British disrupted tribal life through forest laws, land settlements, and taxation. Birsa Munda led the Ulgulan (Great Tumult) revolt in 1899–1900 in Jharkhand. He envisioned a golden age where tribals would rule themselves.",
      "Birsa Munda: tribal leader from Jharkhand who led the Ulgulan revolt against British rule and exploitation by dikus (outsiders). He was called 'Dharti Aaba' (Father of the Earth).",
      ["Tribal communities: Santhals, Mundas, Gonds — had their own land rights and customs","British disruption: forest laws, land settlements, taxation — displaced tribals","Birsa Munda: led Ulgulan revolt (1899–1900) — 'Dharti Aaba', symbol of tribal resistance"]),
    ch(5,"When People Rebel — 1857","The Revolt of 1857 was the first major uprising against British rule. Causes: Doctrine of Lapse, greased cartridges (Enfield rifle), economic exploitation, social reforms. Key leaders: Mangal Pandey, Rani Lakshmibai, Nana Sahib, Bahadur Shah Zafar. The revolt was suppressed but led to the end of Company rule.",
      "Mangal Pandey fired the first shot at Barrackpore. Rani Lakshmibai of Jhansi fought bravely. Bahadur Shah Zafar was the last Mughal emperor — exiled to Rangoon after the revolt.",
      ["Revolt of 1857: first major uprising against British — called 'Sepoy Mutiny' by British, 'First War of Independence' by Indians","Causes: greased cartridges, Doctrine of Lapse, economic exploitation, social reforms","Result: Company rule ended, Crown took over — Queen Victoria's Proclamation (1858)"]),
    ch(6,"Weavers, Iron Smelters and Factory Owners","India had a thriving textile industry before British rule. Indian cotton and silk were exported worldwide. British policies destroyed Indian industries — cheap machine-made goods flooded India. Weavers lost their livelihood. Iron smelting was a traditional industry in many parts of India. The Tata Iron and Steel Company (1907) revived Indian industry.",
      "Dacca muslin was so fine it was called 'woven air'. British machine-made cloth was cheaper — Indian weavers couldn't compete. Jamshedji Tata established TISCO (Tata Iron and Steel Company) in Jamshedpur in 1907.",
      ["Indian textiles: Dacca muslin, Calico, Chintz — famous worldwide before British rule","British policies destroyed Indian industries: cheap imports, heavy duties on Indian exports","TISCO (1907): Jamshedji Tata — first major Indian industrial enterprise, symbol of self-reliance"])
  ]
);


// ============================================================
// CLASS 9
// ============================================================
courseData["9"] = cls(
  [
    ch(1,"Number Systems","The real number system includes natural numbers (N), whole numbers (W), integers (Z), rational numbers (Q), and irrational numbers. Irrational numbers cannot be expressed as p/q (e.g., √2, π). Every real number corresponds to a unique point on the number line. Decimal expansion of rational numbers is either terminating or non-terminating repeating.",
      "√2 = 1.41421... (non-terminating, non-repeating) — irrational. 1/3 = 0.333... (non-terminating, repeating) — rational. π = 3.14159... — irrational.",
      ["Real numbers = Rational + Irrational. Rational: p/q form. Irrational: non-terminating, non-repeating","Laws of exponents: aᵐ × aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1","Rationalising the denominator: multiply by conjugate to remove irrational from denominator"]),
    ch(2,"Polynomials","A polynomial is an algebraic expression with non-negative integer powers of variables. Degree is the highest power. Types: monomial (1 term), binomial (2 terms), trinomial (3 terms). Factor theorem: (x−a) is a factor of p(x) if p(a) = 0. Remainder theorem: when p(x) is divided by (x−a), remainder = p(a).",
      "p(x) = x³ − 3x² + 3x − 1. p(1) = 1 − 3 + 3 − 1 = 0, so (x−1) is a factor. Factorisation: x² − 5x + 6 = (x−2)(x−3).",
      ["Degree of polynomial: highest power of variable. Linear (1), quadratic (2), cubic (3)","Remainder theorem: remainder when p(x) ÷ (x−a) = p(a)","Factor theorem: (x−a) is a factor of p(x) if and only if p(a) = 0"]),
    ch(3,"Coordinate Geometry","The Cartesian plane has two perpendicular axes: x-axis (horizontal) and y-axis (vertical). Their intersection is the origin (0,0). A point is represented as (x, y) — x is the abscissa, y is the ordinate. The plane is divided into four quadrants. Distance formula: d = √[(x₂−x₁)² + (y₂−y₁)²].",
      "Point A(3, 4): 3 units right of origin, 4 units up. Quadrant I: (+,+). Quadrant II: (−,+). Quadrant III: (−,−). Quadrant IV: (+,−).",
      ["Cartesian plane: x-axis (horizontal), y-axis (vertical), origin (0,0)","Quadrants: I(+,+), II(−,+), III(−,−), IV(+,−)","Distance formula: d = √[(x₂−x₁)² + (y₂−y₁)²]"]),
    ch(4,"Linear Equations in Two Variables","A linear equation in two variables has the form ax + by + c = 0. It has infinitely many solutions, each representing a point on a straight line. The graph of a linear equation is always a straight line. Every point on the line satisfies the equation.",
      "2x + 3y = 12. Solutions: (0,4), (6,0), (3,2). These points lie on a straight line. The equation y = 2x represents a line passing through the origin.",
      ["Linear equation in two variables: ax + by + c = 0 (a, b not both zero)","Graph is always a straight line. Infinitely many solutions","x-intercept: put y=0. y-intercept: put x=0"]),
    ch(5,"Introduction to Euclid's Geometry","Euclid's geometry is based on axioms (self-evident truths) and postulates (assumptions). Five postulates: a straight line can be drawn between any two points; a terminated line can be extended; a circle can be drawn with any centre and radius; all right angles are equal; parallel postulate.",
      "Euclid's first postulate: A straight line can be drawn from any point to any other point. Axiom: Things equal to the same thing are equal to each other (if a=b and b=c, then a=c).",
      ["Euclid's axioms: self-evident truths applicable to all mathematics","Euclid's 5 postulates: basis of plane geometry","Theorem: a statement proved using axioms, postulates, and previously proved theorems"]),
    ch(6,"Lines, Angles, Triangles & Quadrilaterals","Parallel lines cut by a transversal: corresponding angles equal, alternate interior angles equal, co-interior angles supplementary. Triangle properties: sum of angles = 180°, exterior angle = sum of two non-adjacent interior angles. Congruence: SSS, SAS, ASA, AAS, RHS. Quadrilateral: sum of angles = 360°.",
      "In △ABC, if ∠A = 60°, ∠B = 70°, then ∠C = 50°. Exterior angle at C = ∠A + ∠B = 130°. Parallelogram: opposite sides equal and parallel, diagonals bisect each other.",
      ["Angle sum of triangle = 180°. Exterior angle = sum of two non-adjacent interior angles","Congruence criteria: SSS, SAS, ASA, AAS, RHS","Parallelogram properties: opposite sides equal, opposite angles equal, diagonals bisect each other"])
  ],
  [
    ch(1,"Matter in Our Surroundings","Matter is anything that has mass and occupies space. States of matter: solid (definite shape and volume), liquid (definite volume, no fixed shape), gas (no definite shape or volume). Changes of state: melting, freezing, evaporation, condensation, sublimation. Latent heat is the heat absorbed or released during a change of state without temperature change.",
      "Ice (solid) → Water (liquid) at 0°C (melting). Water → Steam at 100°C (boiling). Dry ice (solid CO₂) → CO₂ gas directly (sublimation). Camphor sublimes on heating.",
      ["States of matter: solid (fixed shape, volume), liquid (fixed volume), gas (no fixed shape or volume)","Melting point of ice = 0°C. Boiling point of water = 100°C at 1 atm pressure","Sublimation: solid → gas directly (dry ice, camphor, iodine)"]),
    ch(2,"Is Matter Around Us Pure?","A pure substance has a fixed composition and definite properties. A mixture contains two or more substances mixed in any proportion. Mixtures can be homogeneous (uniform composition — salt water) or heterogeneous (non-uniform — sand and water). Separation methods: evaporation, distillation, chromatography, centrifugation.",
      "Salt water: homogeneous mixture. Sand + water: heterogeneous mixture. Separating salt from water: evaporation. Separating alcohol from water: distillation. Separating cream from milk: centrifugation.",
      ["Pure substance: element (only one type of atom) or compound (fixed ratio of elements)","Mixture: homogeneous (uniform) or heterogeneous (non-uniform)","Separation: evaporation, distillation, chromatography, centrifugation, magnetic separation"]),
    ch(3,"Atoms and Molecules","An atom is the smallest particle of an element that retains its chemical properties. A molecule is the smallest particle of a substance that can exist independently. Atomic mass is the relative mass of an atom compared to 1/12 of carbon-12. Mole concept: 1 mole = 6.022 × 10²³ particles (Avogadro's number).",
      "Water molecule: H₂O (2 hydrogen atoms + 1 oxygen atom). Atomic mass of H = 1 u, O = 16 u. Molecular mass of H₂O = 18 u. 1 mole of water = 18 g = 6.022 × 10²³ molecules.",
      ["Atom: smallest particle of element. Molecule: smallest particle of substance","Atomic mass unit (u): 1/12 of mass of carbon-12 atom","Mole: 6.022 × 10²³ particles (Avogadro's number). Molar mass = mass of 1 mole in grams"]),
    ch(4,"Structure of the Atom","Dalton proposed atoms are indivisible. Thomson discovered electrons (plum pudding model). Rutherford's gold foil experiment showed a dense, positively charged nucleus. Bohr proposed electrons orbit the nucleus in fixed energy levels (shells). Atomic number = number of protons. Mass number = protons + neutrons.",
      "Rutherford's experiment: most alpha particles passed through gold foil, but some deflected — showing a small, dense, positive nucleus. Bohr's model: electrons in K, L, M, N shells. Carbon: atomic number 6, mass number 12 (6 protons, 6 neutrons).",
      ["Atomic number (Z) = number of protons = number of electrons (neutral atom)","Mass number (A) = protons + neutrons. Neutrons = A − Z","Bohr's model: electrons in shells K(2), L(8), M(18). Valence electrons determine chemical properties"]),
    ch(5,"The Fundamental Unit of Life — Cell","The cell is the basic structural and functional unit of life. Robert Hooke discovered cells (1665). Cell theory: all living things are made of cells; cells arise from pre-existing cells. Prokaryotic cells (bacteria) have no nucleus. Eukaryotic cells (plants, animals) have a membrane-bound nucleus.",
      "Plant cell vs Animal cell: Plant cells have cell wall, chloroplasts, and large central vacuole. Animal cells have centrioles and small vacuoles. Mitochondria: powerhouse of the cell (ATP production).",
      ["Cell theory: all living things made of cells; cells arise from pre-existing cells","Prokaryotic (bacteria): no nucleus, no membrane-bound organelles","Eukaryotic: nucleus present. Plant cell: cell wall, chloroplasts, large vacuole. Animal cell: centrioles"]),
    ch(6,"Tissues, Motion & Force","Tissues are groups of similar cells performing a specific function. Plant tissues: meristematic (dividing) and permanent (non-dividing). Animal tissues: epithelial, connective, muscular, nervous. Motion: distance, displacement, speed, velocity, acceleration. Newton's laws of motion: inertia, F=ma, action-reaction.",
      "Epithelial tissue: covers body surfaces (skin). Connective tissue: bone, blood, cartilage. Newton's 2nd law: F = ma. A car of mass 1000 kg accelerating at 2 m/s² needs force = 2000 N.",
      ["Plant tissues: meristematic (growth), permanent (protection, conduction, support)","Animal tissues: epithelial (covering), connective (support), muscular (movement), nervous (control)","Newton's laws: 1st (inertia), 2nd (F=ma), 3rd (action-reaction equal and opposite)"])
  ],
  [
    ch(1,"The Fun They Had","This science fiction story by Isaac Asimov is set in 2157. Margie and Tommy find an old printed book and learn about schools of the past where children learned together with human teachers. Margie is fascinated by the idea of a school where children could help each other and have fun learning together.",
      "In 2157, children learn at home with mechanical teachers. Margie finds an old book about schools with human teachers and classrooms — she thinks it must have been fun to go to school with other children.",
      ["Theme: The value of human interaction in education vs. mechanical learning","Setting: 2157 — futuristic world with mechanical teachers","Moral: Technology cannot replace the joy of learning together with peers and human teachers"]),
    ch(2,"The Sound of Music","This chapter has two parts: Evelyn Glennie, a deaf percussionist who learned to hear music through vibrations, and Bismillah Khan, the shehnai maestro. Both stories show that passion, dedication, and hard work can overcome any obstacle. Music is a universal language that transcends barriers.",
      "Evelyn Glennie lost her hearing at age 11 but became a world-famous percussionist by feeling vibrations through her body. Bismillah Khan played shehnai at India's independence ceremony on 15 August 1947.",
      ["Evelyn Glennie: deaf percussionist — music felt through vibrations, not just heard","Bismillah Khan: shehnai maestro — played at India's first Independence Day","Theme: Passion and dedication can overcome any obstacle; music transcends barriers"]),
    ch(3,"Grammar — Tenses, Modals & Voice","Tenses: simple (I eat), continuous (I am eating), perfect (I have eaten), perfect continuous (I have been eating) — in present, past, and future. Modals express ability (can), permission (may), obligation (must), possibility (might), advice (should). Active and passive voice transformation.",
      "Present perfect: 'She has finished her homework.' Past continuous: 'They were playing cricket.' Modal: 'You should study regularly.' Passive: 'The book was written by Tagore.'",
      ["12 tenses: 4 aspects (simple, continuous, perfect, perfect continuous) × 3 times (present, past, future)","Modals: can/could (ability), may/might (possibility), must (obligation), should (advice), will/would (future)","Passive voice: object becomes subject + be + past participle"]),
    ch(4,"Grammar — Determiners, Prepositions & Conjunctions","Determiners specify nouns: articles (a, an, the), demonstratives (this, that), possessives (my, your), quantifiers (some, many, few). Prepositions show relationships: time (at, on, in), place (at, on, in), direction (to, from, towards). Conjunctions: coordinating (FANBOYS), subordinating, correlative.",
      "Articles: 'A dog barked.' (any dog) 'The dog barked.' (specific dog). Preposition: 'She arrived at 5 on Monday in January.' Conjunction: 'Neither he nor she came.'",
      ["Articles: 'a/an' (indefinite), 'the' (definite). Use 'an' before vowel sounds","Prepositions of time: at (specific time), on (day/date), in (month/year/period)","Correlative conjunctions: either...or, neither...nor, both...and, not only...but also"]),
    ch(5,"Writing — Article and Speech","An article is a piece of writing for a newspaper or magazine. It has a title, introduction, body (3-4 paragraphs), and conclusion. A speech is delivered orally to an audience. It begins with addressing the audience, has a clear structure, and ends with a thank you. Both require a clear purpose and audience awareness.",
      "Article title: 'The Importance of Physical Education in Schools'. Speech opening: 'Good morning, respected Principal, teachers, and dear friends. Today I stand before you to speak on...'",
      ["Article format: catchy title, introduction (hook), body paragraphs, conclusion","Speech format: address audience, introduction, main points, conclusion, thank you","Use rhetorical questions, statistics, and examples to make articles and speeches effective"]),
    ch(6,"Writing — Formal and Informal Letters","Formal letters: job applications, complaints, requests to officials. Informal letters: to friends and family. Email writing follows similar rules but has a subject line and email address. Notice writing: brief, official announcement with heading, date, and details.",
      "Formal letter: application for the post of librarian. Informal: letter to friend describing a trip. Email: complaint to customer service about a defective product.",
      ["Formal letter: sender's address, date, receiver's address, subject, Dear Sir/Madam, body, Yours faithfully","Informal letter: Dear [Name], body in friendly tone, Yours lovingly/sincerely","Notice: heading (NOTICE), date, title, body, name and designation of issuer"])
  ],
  [
    ch(1,"दो बैलों की कथा — प्रेमचंद","यह प्रेमचंद की प्रसिद्ध कहानी है जिसमें हीरा और मोती नाम के दो बैलों की मित्रता और स्वतंत्रता की चाह का वर्णन है। बैल अपने मालिक झूरी के घर से दूसरे घर जाने पर वापस लौटने की कोशिश करते हैं। कहानी स्वतंत्रता, मित्रता और पशुओं की भावनाओं को मार्मिक रूप से प्रस्तुत करती है।",
      "हीरा और मोती को गया के घर भेजा जाता है जहाँ उनके साथ बुरा व्यवहार होता है। वे भागकर झूरी के पास वापस आते हैं — स्वतंत्रता और घर की चाह का प्रतीक।",
      ["कहानी का संदेश: स्वतंत्रता सबसे बड़ा सुख है; मित्रता में शक्ति है","हीरा और मोती: स्वतंत्रता और मित्रता के प्रतीक","प्रेमचंद की भाषा: सरल, ग्रामीण जीवन से जुड़ी, पशुओं के प्रति संवेदनशील"]),
    ch(2,"ल्हासा की ओर — यात्रावृत्त","यह राहुल सांकृत्यायन का यात्रावृत्त है जिसमें उन्होंने तिब्बत की यात्रा का वर्णन किया है। उन्होंने भिखारी के वेश में यात्रा की क्योंकि उस समय भारतीयों को तिब्बत जाने की अनुमति नहीं थी। यात्रावृत्त में तिब्बत की संस्कृति, भूगोल और लोगों का वर्णन है।",
      "राहुल सांकृत्यायन ने 1929-30 में तिब्बत की यात्रा की। उन्होंने बौद्ध भिक्षु का वेश धारण किया। ल्हासा तिब्बत की राजधानी है।",
      ["यात्रावृत्त: यात्रा के अनुभवों का वर्णन — एक साहित्यिक विधा","राहुल सांकृत्यायन: महापंडित, यात्री, लेखक — 'घुमक्कड़ शास्त्र' के लेखक","तिब्बत: बौद्ध धर्म का केंद्र, हिमालय के उत्तर में स्थित"]),
    ch(3,"व्याकरण — अपठित गद्यांश और काव्यांश","अपठित गद्यांश में अनजान गद्य पाठ को पढ़कर प्रश्नों के उत्तर देने होते हैं। अपठित काव्यांश में कविता की पंक्तियों का अर्थ और भाव समझना होता है। मुख्य विचार, शब्दार्थ, और निष्कर्ष पहचानना जरूरी है।",
      "गद्यांश पढ़ने की विधि: पहले पूरा पढ़ें → प्रश्न पढ़ें → उत्तर खोजें → अपने शब्दों में लिखें।",
      ["अपठित गद्यांश: पहले पूरा पढ़ें, फिर प्रश्नों के उत्तर खोजें","शीर्षक: पूरे गद्यांश का सार एक वाक्य में","काव्यांश: भाव, अलंकार, और काव्य-सौंदर्य पहचानें"]),
    ch(4,"व्याकरण — लेखन कौशल","लेखन कौशल में निबंध, पत्र, विज्ञापन, और संवाद लेखन शामिल हैं। औपचारिक पत्र में भाषा की शुद्धता और शिष्टाचार जरूरी है। विज्ञापन में आकर्षक भाषा, संक्षिप्तता और उद्देश्य स्पष्ट होना चाहिए।",
      "विज्ञापन: 'नई किताब — VidyaAI की पाठ्यपुस्तक। सरल भाषा में CBSE पाठ्यक्रम। अभी खरीदें!'",
      ["निबंध: भूमिका, विस्तार, उपसंहार — तर्कपूर्ण और भाषा-शुद्ध","औपचारिक पत्र: सेवा में, विषय, महोदय, भवदीय — शिष्ट भाषा","विज्ञापन: आकर्षक शीर्षक, संक्षिप्त जानकारी, संपर्क विवरण"]),
    ch(5,"काव्य — सूरदास और मीराबाई","सूरदास कृष्ण भक्ति के महान कवि थे। उनके पद 'सूरसागर' में संकलित हैं। मीराबाई कृष्ण की अनन्य भक्त थीं। उनके भजन आज भी गाए जाते हैं। दोनों कवियों ने भक्ति रस में डूबकर कृष्ण की लीलाओं का वर्णन किया।",
      "सूरदास का पद: 'मैया मोहि दाऊ बहुत खिझायो।' — बाल कृष्ण की शिकायत। मीरा का भजन: 'पायो जी मैंने राम रतन धन पायो।'",
      ["सूरदास: अष्टछाप के कवि, सूरसागर के रचयिता, वात्सल्य और श्रृंगार रस","मीराबाई: कृष्ण भक्त, राजस्थानी कवयित्री, भक्ति रस की प्रमुख कवयित्री","भक्ति काव्य: ईश्वर के प्रति प्रेम और समर्पण का काव्य"]),
    ch(6,"व्याकरण — व्याकरण विश्लेषण","व्याकरण विश्लेषण में वाक्य के प्रत्येक शब्द का व्याकरणिक परिचय दिया जाता है। पद परिचय में शब्द का भेद, उपभेद, लिंग, वचन, कारक, काल आदि बताना होता है। वाक्य भेद: सरल, संयुक्त, मिश्र।",
      "वाक्य: 'राम ने सेब खाया।' पद परिचय: राम — संज्ञा, व्यक्तिवाचक, पुल्लिंग, एकवचन, कर्ता कारक। सेब — संज्ञा, जातिवाचक, पुल्लिंग, एकवचन, कर्म कारक।",
      ["पद परिचय: शब्द का भेद, उपभेद, लिंग, वचन, कारक, काल","वाक्य भेद: सरल (एक उद्देश्य-विधेय), संयुक्त (और/किंतु से जुड़े), मिश्र (जो/कि/क्योंकि से जुड़े)","कारक: कर्ता (ने), कर्म (को), करण (से), संप्रदान (के लिए), अपादान (से), संबंध (का/के/की), अधिकरण (में/पर), संबोधन (हे/अरे)"])
  ],
  [
    ch(1,"The French Revolution","The French Revolution (1789) overthrew the monarchy and established a republic based on liberty, equality, and fraternity. Causes: financial crisis, social inequality (Three Estates), Enlightenment ideas. Key events: storming of the Bastille (14 July 1789), Declaration of Rights of Man, execution of Louis XVI, Reign of Terror, rise of Napoleon.",
      "The Three Estates: First (clergy), Second (nobility), Third (commoners — 97% of population). The Third Estate bore all the tax burden. On 14 July 1789, Parisians stormed the Bastille prison — symbol of royal tyranny.",
      ["Causes: financial crisis, social inequality (Three Estates), Enlightenment ideas, food shortage","Key events: Bastille (1789), Declaration of Rights of Man, execution of Louis XVI (1793)","Impact: end of monarchy, rise of republic, spread of democratic ideas worldwide"]),
    ch(2,"Socialism in Europe and the Russian Revolution","Socialism advocates collective ownership of means of production. Karl Marx and Friedrich Engels wrote the Communist Manifesto (1848). Russian Revolution (1917): February Revolution overthrew the Tsar; October Revolution brought Bolsheviks (Lenin) to power. USSR was established in 1922.",
      "Karl Marx: 'Workers of the world, unite!' October Revolution (1917): Lenin led Bolsheviks to overthrow the Provisional Government. USSR: world's first communist state — lasted until 1991.",
      ["Socialism: collective ownership, equality, no private property","Russian Revolution 1917: February (overthrew Tsar Nicholas II), October (Bolsheviks took power)","Lenin's policies: New Economic Policy (NEP). Stalin: Five Year Plans, collectivisation"]),
    ch(3,"Nazism and the Rise of Hitler","Adolf Hitler rose to power in Germany after World War I. The Nazi Party used propaganda, fear, and scapegoating of Jews to gain support. Hitler became Chancellor in 1933 and Führer in 1934. The Holocaust: systematic genocide of 6 million Jews. World War II (1939–1945) ended with Germany's defeat.",
      "Hitler blamed Jews and communists for Germany's defeat in WWI and economic problems. The Nuremberg Laws (1935) stripped Jews of citizenship. The Holocaust: concentration camps, gas chambers — 6 million Jews killed.",
      ["Rise of Hitler: economic crisis after WWI, Treaty of Versailles humiliation, Nazi propaganda","Nazi ideology: Aryan supremacy, anti-Semitism, nationalism, totalitarianism","Holocaust: systematic genocide of 6 million Jews — one of history's greatest crimes"]),
    ch(4,"Forest Society and Colonialism","Colonial powers exploited forests for timber, railways, and agriculture. Forest Acts restricted tribal communities' access to forests. Scientific forestry replaced diverse forests with single-species plantations. Tribal revolts: Bastar (1910), Gudem Hills (1920s — Alluri Sitarama Raju).",
      "British Forest Acts: reserved forests (no access), protected forests (limited access). Bastar Rebellion (1910): tribal communities revolted against forest restrictions. Alluri Sitarama Raju: led Gudem Hills revolt using guerrilla warfare.",
      ["Colonial forest policy: reserved forests, scientific forestry, commercial exploitation","Impact on tribals: loss of livelihood, displacement, restrictions on forest use","Tribal revolts: Bastar (1910), Gudem Hills (Alluri Sitarama Raju, 1920s)"]),
    ch(5,"Pastoralists in the Modern World","Pastoralists are communities that depend on animal herding. They move seasonally between pastures (transhumance). Colonial policies disrupted pastoral life: Waste Land Acts, Forest Acts, Criminal Tribes Act. Maasai (Africa) and Gujjars (India) are examples of pastoral communities facing modern challenges.",
      "Gujjars of Himachal Pradesh: move to high Himalayan pastures in summer, return to foothills in winter. Maasai of East Africa: lost grazing lands to colonial game reserves and European farms.",
      ["Pastoralists: move seasonally between pastures — Gujjars, Bakarwals (India), Maasai (Africa)","Colonial disruption: Waste Land Acts, Forest Acts, Criminal Tribes Act","Modern challenges: loss of grazing land, drought, government restrictions"]),
    ch(6,"India — Physical Features and Location","India is located in South Asia between 8°4'N and 37°6'N latitude and 68°7'E and 97°25'E longitude. Physical divisions: Himalayan Mountains, Northern Plains, Peninsular Plateau, Coastal Plains, Islands. The Himalayas are fold mountains formed by collision of Indian and Eurasian plates.",
      "India's area: 3.28 million km² (7th largest). Coastline: 7,516 km. Himalayas: highest peak in India — Kangchenjunga (8,586 m). Deccan Plateau: ancient, hard rock, rich in minerals.",
      ["India: 8°4'N to 37°6'N, 68°7'E to 97°25'E. Area: 3.28 million km²","Physical divisions: Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains, Islands","Himalayas: fold mountains, 3 ranges (Himadri, Himachal, Shivalik), formed by tectonic collision"])
  ]
);

// CLASS 10 placeholder
// CLASS 10 placeholder removed
courseData["10"] = cls(
  [
    ch(1,"Real Numbers","Real numbers include all rational and irrational numbers. Euclid's Division Lemma: for any two positive integers a and b, there exist unique integers q and r such that a = bq + r (0 ≤ r < b). The Fundamental Theorem of Arithmetic: every composite number can be expressed as a product of primes in a unique way. HCF and LCM can be found using prime factorisation.",
      "HCF(12,18) = 6. LCM(12,18) = 36. HCF × LCM = 12 × 18 = 216. √2 is irrational (proof by contradiction). Decimal expansion of 1/7 = 0.142857... (non-terminating repeating).",
      ["Euclid's Division Lemma: a = bq + r, 0 ≤ r < b. Used to find HCF","Fundamental Theorem of Arithmetic: unique prime factorisation of every composite number","HCF × LCM = Product of two numbers. Irrational numbers: non-terminating, non-repeating decimals"]),
    ch(2,"Polynomials","A polynomial p(x) has degree n. Zeroes of a polynomial are values of x where p(x) = 0. For a quadratic ax²+bx+c: sum of zeroes = −b/a, product of zeroes = c/a. For a cubic: sum = −b/a, sum of products of pairs = c/a, product = −d/a. Geometrically, zeroes are x-intercepts of the graph.",
      "p(x) = x² − 5x + 6. Zeroes: x = 2 and x = 3. Sum = 2+3 = 5 = −(−5)/1. Product = 2×3 = 6 = 6/1.",
      ["Zeroes of polynomial: values where p(x) = 0 (x-intercepts of graph)","Quadratic: sum of zeroes = −b/a, product = c/a","Cubic: sum = −b/a, sum of products of pairs = c/a, product of all three = −d/a"]),
    ch(3,"Pair of Linear Equations","A pair of linear equations in two variables can be solved graphically or algebraically. Algebraic methods: substitution, elimination, cross-multiplication. Types of solutions: unique solution (intersecting lines), no solution (parallel lines), infinitely many solutions (coincident lines).",
      "2x + 3y = 12 and x − y = 1. Substitution: x = y+1, so 2(y+1)+3y = 12, 5y = 10, y = 2, x = 3. Solution: (3, 2).",
      ["Graphical: intersecting (unique), parallel (no solution), coincident (infinite solutions)","Substitution method: express one variable in terms of other, substitute","Elimination method: multiply equations to make coefficients equal, then add/subtract"]),
    ch(4,"Quadratic Equations","A quadratic equation has the form ax² + bx + c = 0 (a ≠ 0). Methods to solve: factorisation, completing the square, quadratic formula. Discriminant D = b² − 4ac: D > 0 (two distinct real roots), D = 0 (two equal real roots), D < 0 (no real roots).",
      "x² − 5x + 6 = 0. Factorisation: (x−2)(x−3) = 0, x = 2 or 3. Quadratic formula: x = [5 ± √(25−24)]/2 = [5 ± 1]/2 = 3 or 2.",
      ["Quadratic formula: x = [−b ± √(b²−4ac)] / 2a","Discriminant D = b²−4ac: D>0 (two real roots), D=0 (equal roots), D<0 (no real roots)","Factorisation: split middle term. Completing the square: add and subtract (b/2a)²"]),
    ch(5,"Arithmetic Progressions","An AP is a sequence where each term differs from the previous by a constant (common difference d). nth term: aₙ = a + (n−1)d. Sum of n terms: Sₙ = n/2[2a + (n−1)d] = n/2[a + l] where l is the last term.",
      "AP: 2, 5, 8, 11, 14... a=2, d=3. 10th term = 2 + 9×3 = 29. Sum of 10 terms = 10/2[2×2 + 9×3] = 5[4+27] = 155.",
      ["AP: constant difference between consecutive terms. a = first term, d = common difference","nth term: aₙ = a + (n−1)d","Sum of n terms: Sₙ = n/2[2a + (n−1)d]"]),
    ch(6,"Triangles, Coordinate Geometry & Trigonometry","Similar triangles have the same shape but different sizes. AA, SSS, SAS similarity criteria. Basic Proportionality Theorem (Thales): a line parallel to one side of a triangle divides the other two sides proportionally. Trigonometric ratios: sin, cos, tan, cosec, sec, cot. Pythagoras theorem: a² + b² = c².",
      "sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1. In a right triangle with sides 3, 4, 5: sin A = 3/5, cos A = 4/5, tan A = 3/4.",
      ["Similar triangles: AA, SSS, SAS criteria. Ratio of areas = square of ratio of sides","Trigonometric ratios: sin=P/H, cos=B/H, tan=P/B. sin²θ + cos²θ = 1","Pythagoras theorem: (hypotenuse)² = (base)² + (perpendicular)²"])
  ],
  [
    ch(1,"Chemical Reactions and Equations","A chemical reaction involves breaking and forming of chemical bonds. It is represented by a chemical equation. Types: combination (A+B→AB), decomposition (AB→A+B), displacement (A+BC→AC+B), double displacement, oxidation-reduction. Balancing equations follows the law of conservation of mass.",
      "Combination: 2H₂ + O₂ → 2H₂O. Decomposition: 2H₂O → 2H₂ + O₂ (electrolysis). Displacement: Fe + CuSO₄ → FeSO₄ + Cu (iron displaces copper).",
      ["Law of conservation of mass: mass of reactants = mass of products","Types: combination, decomposition, displacement, double displacement, redox","Balancing: ensure equal atoms of each element on both sides"]),
    ch(2,"Acids, Bases and Salts","Acids produce H⁺ ions in water (HCl, H₂SO₄, HNO₃). Bases produce OH⁻ ions (NaOH, Ca(OH)₂). pH scale: 0–14. pH < 7 (acidic), pH = 7 (neutral), pH > 7 (basic). Neutralisation: Acid + Base → Salt + Water. Indicators: litmus, phenolphthalein, methyl orange.",
      "HCl + NaOH → NaCl + H₂O (neutralisation). Stomach acid (HCl, pH≈2) causes acidity — antacid (Mg(OH)₂) neutralises it. Baking soda (NaHCO₃) is basic — used in cooking.",
      ["pH scale: 0–14. Acidic: pH<7. Neutral: pH=7. Basic: pH>7","Strong acids: HCl, H₂SO₄, HNO₃. Strong bases: NaOH, KOH","Neutralisation: Acid + Base → Salt + Water. Used in antacids, agriculture"]),
    ch(3,"Metals and Non-Metals","Metals are electropositive, lustrous, malleable, ductile, and good conductors. Non-metals are electronegative, dull, brittle, and poor conductors. Reactivity series determines which metal displaces another. Extraction of metals: highly reactive (electrolysis), moderately reactive (reduction with carbon), less reactive (heating alone).",
      "Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au. Iron is extracted by reducing Fe₂O₃ with coke in a blast furnace. Aluminium is extracted by electrolysis of molten Al₂O₃.",
      ["Reactivity series: K, Na, Ca, Mg, Al, Zn, Fe, Pb, Cu, Ag, Au (decreasing)","Extraction: highly reactive metals (electrolysis), moderately reactive (reduction with C/CO)","Alloys: brass (Cu+Zn), bronze (Cu+Sn), steel (Fe+C), solder (Pb+Sn)"]),
    ch(4,"Carbon and Its Compounds","Carbon forms millions of compounds due to catenation (self-linking) and tetravalency (4 bonds). Hydrocarbons: alkanes (CₙH₂ₙ₊₂), alkenes (CₙH₂ₙ), alkynes (CₙH₂ₙ₋₂). Functional groups: −OH (alcohol), −COOH (carboxylic acid), −CHO (aldehyde), −CO− (ketone). Ethanol and ethanoic acid are important carbon compounds.",
      "Methane (CH₄): simplest alkane — natural gas. Ethanol (C₂H₅OH): alcohol in drinks. Ethanoic acid (CH₃COOH): vinegar. Soap: sodium salt of fatty acid — cleans by forming micelles.",
      ["Carbon: tetravalent, forms catenation. Allotropes: diamond, graphite, fullerene","Hydrocarbons: alkanes (single bonds), alkenes (double bond), alkynes (triple bond)","Soap: sodium/potassium salt of fatty acid. Micelle formation removes oil from clothes"]),
    ch(5,"Life Processes","Life processes are the basic functions performed by living organisms: nutrition, respiration, transportation, excretion. Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP. Human circulatory system: heart, blood, blood vessels.",
      "Photosynthesis in leaves: CO₂ enters through stomata, water absorbed by roots, sunlight absorbed by chlorophyll → glucose + oxygen. Heart: 4 chambers (2 atria, 2 ventricles). Blood: RBC (oxygen), WBC (immunity), platelets (clotting), plasma.",
      ["Photosynthesis: CO₂ + H₂O + light (chlorophyll) → glucose + O₂","Aerobic respiration: glucose + O₂ → CO₂ + H₂O + energy (38 ATP)","Human heart: 4 chambers. Double circulation: pulmonary (lungs) + systemic (body)"]),
    ch(6,"Control, Coordination, Heredity & Light","Nervous system: brain, spinal cord, nerves. Reflex arc: receptor → sensory nerve → spinal cord → motor nerve → effector. Hormones: chemical messengers (insulin, adrenaline, thyroxine). Heredity: Mendel's laws — law of segregation, law of independent assortment. Light: reflection, refraction, lenses, human eye.",
      "Reflex action: touching hot object → hand withdraws automatically (spinal cord controls). Insulin: produced by pancreas, regulates blood sugar. Mendel's pea plant experiments: tall (T) dominant over dwarf (t). Convex lens: converging, used in magnifying glass.",
      ["Nervous system: CNS (brain, spinal cord) + PNS (nerves). Reflex arc bypasses brain","Hormones: insulin (blood sugar), adrenaline (fight-or-flight), thyroxine (metabolism)","Mendel's laws: segregation (alleles separate during gamete formation), independent assortment"])
  ],
  [
    ch(1,"A Letter to God","This story by G.L. Fuentes is about Lencho, a farmer who writes a letter to God asking for 100 pesos after his crops are destroyed by hail. The post office workers, moved by his faith, collect money and send it. Lencho, receiving only 70 pesos, writes again accusing the post office workers of stealing. The story explores faith, irony, and human nature.",
      "Lencho's unshakeable faith in God is contrasted with his suspicion of humans. The post office workers' kindness is met with ingratitude — a beautiful irony.",
      ["Theme: Faith, irony, and the contrast between faith in God and distrust of humans","Irony: Lencho suspects the very people who helped him of stealing","Moral: Blind faith without reason can lead to misunderstanding"]),
    ch(2,"Nelson Mandela — Long Walk to Freedom","This excerpt from Nelson Mandela's autobiography describes his inauguration as South Africa's first black President on 10 May 1994. It reflects on the long struggle against apartheid (racial segregation). Mandela speaks of the twin obligations — to family and to society. He emphasises that courage is not the absence of fear but the triumph over it.",
      "Apartheid: South Africa's system of racial segregation (1948–1994). Mandela spent 27 years in prison on Robben Island. On 10 May 1994, he became South Africa's first democratically elected black President.",
      ["Apartheid: racial segregation in South Africa — ended in 1994","Mandela: 27 years in prison, became first black President of South Africa","Theme: Freedom, equality, courage, and the long struggle against injustice"]),
    ch(3,"Grammar — Advanced Grammar","Subject-verb agreement: singular subject takes singular verb; plural subject takes plural verb. Determiners: articles, demonstratives, possessives, quantifiers. Connectors: addition (moreover, furthermore), contrast (however, nevertheless), cause (therefore, consequently), time (meanwhile, subsequently).",
      "Subject-verb: 'The team is playing well.' (collective noun = singular). 'Neither he nor they are wrong.' (verb agrees with nearer subject). Connector: 'He studied hard; consequently, he passed.'",
      ["Subject-verb agreement: collective nouns (team, class) take singular verb","Neither...nor, either...or: verb agrees with the subject closer to it","Connectors: moreover (addition), however (contrast), therefore (result), meanwhile (time)"]),
    ch(4,"Writing — Formal Letter and Debate","Formal letters: job application, complaint, request. Debate: a formal argument for or against a motion. Structure: introduction (state position), arguments (3-4 points with evidence), counter-arguments, conclusion. Use persuasive language, rhetorical questions, and statistics.",
      "Debate motion: 'Social media does more harm than good.' For: addiction, cyberbullying, misinformation. Against: connectivity, information access, business opportunities.",
      ["Formal letter: address, date, subject, Dear Sir/Madam, body, Yours faithfully","Debate: state position clearly, give 3-4 arguments with evidence, address counter-arguments","Persuasive devices: rhetorical questions, statistics, examples, emotional appeal"]),
    ch(5,"Grammar — Editing and Omission","Editing involves identifying and correcting grammatical errors in a passage. Common errors: tense, subject-verb agreement, articles, prepositions, spelling. Omission involves identifying missing words in a passage. These test grammar knowledge in context.",
      "Error: 'She go to school everyday.' Correction: 'She goes to school every day.' Omission: 'He is best student in class.' Missing word: 'the' before 'best'.",
      ["Common errors: wrong tense, subject-verb disagreement, wrong article, wrong preposition","Editing: read the sentence, identify the error type, correct it","Omission: identify what type of word is missing (article, preposition, verb, etc.)"]),
    ch(6,"Literature — Poetry and Drama","Poetry analysis: identify theme, poetic devices (metaphor, simile, alliteration, personification, imagery), tone, and mood. Drama: understand characters, conflict, dialogue, and stage directions. CBSE Class 10 poetry includes poems by Robert Frost, Ogden Nash, and others.",
      "Robert Frost's 'Fire and Ice': fire = desire, ice = hatred. Both can destroy the world. Tone: philosophical, ironic. Poetic device: symbolism.",
      ["Poetry analysis: theme, tone, mood, poetic devices (metaphor, simile, imagery, symbolism)","Drama: characters, conflict, dialogue, stage directions, theme","CBSE poems: Fire and Ice (Frost), A Tiger in the Zoo (Leslie Norris), Amanda (Robin Klein)"])
  ],
  [
    ch(1,"सूरदास के पद","सूरदास कृष्ण भक्ति के महान कवि थे। उनके पद 'सूरसागर' में संकलित हैं। इस पाठ में कृष्ण की बाल लीलाओं और भक्ति का वर्णन है। सूरदास ने वात्सल्य रस और श्रृंगार रस में अद्भुत काव्य रचना की।",
      "सूरदास का पद: 'मैया मोहि दाऊ बहुत खिझायो। मोसों कहत मोल को लीन्हो, तू जसुमति कब जायो।' — कृष्ण माँ से दाऊ (बलराम) की शिकायत करते हैं।",
      ["सूरदास: अष्टछाप के प्रमुख कवि, सूरसागर के रचयिता","वात्सल्य रस: माँ-बच्चे के प्रेम का वर्णन। श्रृंगार रस: प्रेम का वर्णन","सूरदास की भाषा: ब्रजभाषा — मधुर, सरल, भावपूर्ण"]),
    ch(2,"राम-लक्ष्मण-परशुराम संवाद","यह तुलसीदास के रामचरितमानस से लिया गया है। इसमें परशुराम के क्रोध और लक्ष्मण के व्यंग्यपूर्ण उत्तरों का वर्णन है। राम शांत और विनम्र हैं जबकि लक्ष्मण तीखे और व्यंग्यात्मक हैं। यह संवाद वीर रस और हास्य रस का सुंदर मिश्रण है।",
      "परशुराम: 'बालक बोलत बधत न तोही।' लक्ष्मण: 'बहु धनुही तोरी लरिकाई।' — लक्ष्मण का व्यंग्य।",
      ["तुलसीदास: रामचरितमानस के रचयिता, भक्तिकाल के महान कवि","परशुराम: क्रोधी, शिव धनुष टूटने पर क्रुद्ध। लक्ष्मण: व्यंग्यात्मक, निडर","वीर रस और हास्य रस का सुंदर संयोजन"]),
    ch(3,"व्याकरण — पद परिचय","पद परिचय में वाक्य के प्रत्येक शब्द का व्याकरणिक विश्लेषण किया जाता है। संज्ञा के लिए: भेद, लिंग, वचन, कारक। सर्वनाम के लिए: भेद, पुरुष, लिंग, वचन, कारक। क्रिया के लिए: भेद, काल, वाच्य, कर्ता।",
      "वाक्य: 'सुंदर बच्चे खेल रहे हैं।' पद परिचय: सुंदर — विशेषण, गुणवाचक, पुल्लिंग, बहुवचन। बच्चे — संज्ञा, जातिवाचक, पुल्लिंग, बहुवचन, कर्ता कारक।",
      ["संज्ञा पद परिचय: भेद, लिंग, वचन, कारक, क्रिया से संबंध","सर्वनाम पद परिचय: भेद, पुरुष, लिंग, वचन, कारक","क्रिया पद परिचय: भेद (सकर्मक/अकर्मक), काल, वाच्य, कर्ता"]),
    ch(4,"व्याकरण — वाक्य भेद","वाक्य रचना के आधार पर तीन भेद हैं: सरल वाक्य (एक उद्देश्य, एक विधेय), संयुक्त वाक्य (दो या अधिक सरल वाक्य 'और/किंतु/परंतु' से जुड़े), मिश्र वाक्य (एक प्रधान और एक या अधिक आश्रित उपवाक्य)। अर्थ के आधार पर: विधानवाचक, निषेधवाचक, प्रश्नवाचक, विस्मयवाचक, आज्ञावाचक, इच्छावाचक।",
      "सरल: 'राम पढ़ता है।' संयुक्त: 'राम पढ़ता है और श्याम खेलता है।' मिश्र: 'जो परिश्रम करता है, वह सफल होता है।'",
      ["रचना के आधार पर: सरल, संयुक्त, मिश्र वाक्य","अर्थ के आधार पर: विधानवाचक, निषेधवाचक, प्रश्नवाचक, विस्मयवाचक, आज्ञावाचक, इच्छावाचक","मिश्र वाक्य में प्रधान उपवाक्य और आश्रित उपवाक्य होते हैं"]),
    ch(5,"व्याकरण — अलंकार और छंद","अलंकार काव्य की शोभा बढ़ाते हैं। प्रमुख अलंकार: उपमा, रूपक, उत्प्रेक्षा, अनुप्रास, यमक, श्लेष। छंद काव्य की लय का आधार है। दोहा (13+11), चौपाई (16+16), सोरठा (11+13) प्रमुख छंद हैं।",
      "उपमा: 'मुख चंद्रमा के समान सुंदर है।' रूपक: 'मुख चंद्रमा है।' उत्प्रेक्षा: 'मुख मानो चंद्रमा है।' दोहा: 'रहिमन धागा प्रेम का...' (13+11 मात्राएँ)।",
      ["उपमा: जैसे/सा/सी से तुलना। रूपक: सीधी तुलना (मुख = चंद्रमा)। उत्प्रेक्षा: मानो/जानो से","अनुप्रास: एक वर्ण की आवृत्ति। यमक: एक शब्द अलग अर्थ में। श्लेष: एक शब्द के दो अर्थ","दोहा: 13+11 मात्राएँ। चौपाई: 16+16 मात्राएँ। सोरठा: 11+13 मात्राएँ"]),
    ch(6,"निबंध और पत्र लेखन — उच्च स्तर","उच्च स्तर के निबंध में तर्क, उदाहरण, आँकड़े और भाषा की परिपक्वता जरूरी है। औपचारिक पत्र में शुद्ध भाषा, उचित प्रारूप और विनम्रता आवश्यक है। संपादक को पत्र, प्रधानाचार्य को पत्र, और सरकारी पत्र लिखना सीखें।",
      "संपादक को पत्र: 'सेवा में, संपादक महोदय, दैनिक जागरण, नई दिल्ली। विषय: बढ़ते प्रदूषण की समस्या।'",
      ["संपादक को पत्र: सेवा में, संपादक महोदय, पत्र का नाम, विषय, महोदय, मुख्य भाग, भवदीय","प्रधानाचार्य को पत्र: अवकाश, शिकायत, सुझाव के लिए","निबंध: तर्क + उदाहरण + आँकड़े + भाषा की परिपक्वता"])
  ],
  [
    ch(1,"The Rise of Nationalism in Europe","Nationalism is the feeling of pride and loyalty towards one's nation. In 19th century Europe, nationalism led to the unification of Germany (Bismarck, 1871) and Italy (Garibaldi, Mazzini, Cavour). The French Revolution spread ideas of liberty, equality, and fraternity. Romanticism promoted national culture and language.",
      "Germany unified under Bismarck (Iron Chancellor) in 1871. Italy unified under Garibaldi (military leader), Mazzini (idealist), and Cavour (diplomat). The Frankfurt Parliament (1848) attempted German unification but failed.",
      ["Nationalism: pride and loyalty to one's nation. Led to unification of Germany and Italy","Germany: unified by Bismarck (1871) through 'blood and iron' policy","Italy: unified by Garibaldi (military), Mazzini (ideology), Cavour (diplomacy)"]),
    ch(2,"Nationalism in India","Indian nationalism grew in response to British colonialism. Indian National Congress (1885): moderate phase (petitions), extremist phase (Bal Gangadhar Tilak), Gandhian phase (mass movements). Non-Cooperation Movement (1920), Civil Disobedience Movement (1930 — Dandi March), Quit India Movement (1942).",
      "Dandi March (1930): Gandhi walked 240 miles to Dandi to make salt — defying British salt laws. Quit India Movement (1942): 'Do or Die' — mass uprising against British rule.",
      ["INC phases: moderate (1885–1905), extremist (1905–1920), Gandhian (1920–1947)","Non-Cooperation (1920): boycott of British goods, courts, schools","Civil Disobedience (1930): Dandi March, salt satyagraha. Quit India (1942): 'Do or Die'"]),
    ch(3,"The Making of a Global World","Globalisation is not new — it began with ancient trade routes (Silk Road). The 19th century saw rapid globalisation through industrialisation, colonialism, and improved transport. The Great Depression (1929) caused worldwide economic collapse. Post-WWII: Bretton Woods institutions (IMF, World Bank) established.",
      "Silk Road: ancient trade route connecting China to Europe. Corn Laws (Britain): repealed 1846 — allowed cheap food imports. Great Depression (1929): US stock market crash → worldwide unemployment and poverty.",
      ["Ancient globalisation: Silk Road, spice trade, spread of religions and cultures","19th century: industrialisation, colonialism, steamships, railways accelerated globalisation","Great Depression (1929): US stock market crash → worldwide economic crisis"]),
    ch(4,"The Age of Industrialisation","The Industrial Revolution began in Britain in the 18th century. Key inventions: steam engine (James Watt), spinning jenny (Hargreaves), power loom. India's textile industry was destroyed by cheap British machine-made cloth. Indian industrialisation: Tata (steel), Birla (textiles) in early 20th century.",
      "Before industrialisation: cottage industries, hand-made goods. After: factories, machines, mass production. India: Dacca muslin destroyed by cheap British cloth. TISCO (1907): Jamshedji Tata — first major Indian steel plant.",
      ["Industrial Revolution: Britain, 18th century. Steam engine, spinning jenny, power loom","Impact on India: cottage industries destroyed, raw materials exported, finished goods imported","Indian industrialisation: Tata (steel, 1907), Birla (textiles) — symbol of self-reliance"]),
    ch(5,"Print Culture and the Modern World","Gutenberg invented the printing press (1440s). Print culture spread literacy, ideas, and nationalism. In India, print culture helped spread reform ideas (Raja Ram Mohan Roy), nationalist ideas (newspapers), and literature in regional languages. Censorship was used by colonial powers to control information.",
      "Gutenberg's printing press (1440s): made books affordable. In India: first printing press in Goa (1556) by Portuguese. Newspapers: Bengal Gazette (1780), Kesari (Tilak), Young India (Gandhi).",
      ["Gutenberg's printing press (1440s): revolution in communication and literacy","Print culture spread: Reformation (Europe), nationalism (India), social reform","Indian newspapers: Bengal Gazette (1780), Kesari (Tilak), Young India (Gandhi)"]),
    ch(6,"Resources, Development & Water Resources","Resources are anything that can be used to satisfy human needs. Types: natural (renewable, non-renewable), human-made, human. Resource development must be sustainable. Water resources: rivers, lakes, groundwater, rainwater. Multipurpose river projects: dams for irrigation, electricity, flood control.",
      "Renewable resources: solar, wind, water. Non-renewable: coal, petroleum. Bhakra Nangal Dam (Sutlej river): irrigation + electricity. Sardar Sarovar Dam (Narmada): controversy over displacement of people.",
      ["Resources: natural (renewable/non-renewable), human-made, human resources","Sustainable development: use resources without depleting them for future generations","Multipurpose river projects: irrigation, electricity, flood control, water supply (Bhakra Nangal, Hirakud)"])
  ]
);

// Classes 11 and 12 � use Class 10 content as base (same subjects, advanced level)
courseData["11"] = JSON.parse(JSON.stringify(courseData["10"]));
courseData["12"] = JSON.parse(JSON.stringify(courseData["10"]));

const CLASSES = ['6','7','8','9','10','11','12'];
CLASSES.forEach(cls => {
  quizData[cls] = {
    Math: [
      quiz('What is the HCF of 12 and 18?', ['2','4','6','9'], 2),
      quiz('Which is an irrational number?', ['1/3','0.5','sqrt(2)','4/2'], 2),
      quiz('Sum of angles in a triangle?', ['90','120','180','360'], 2),
      quiz('If 2x + 5 = 13, what is x?', ['3','4','5','6'], 1),
      quiz('Area of rectangle: length 8, width 5?', ['26','30','40','45'], 2)
    ],
    Science: [
      quiz('Gas produced during photosynthesis?', ['CO2','N2','O2','H2'], 2),
      quiz('Atomic number of Carbon?', ['4','6','8','12'], 1),
      quiz('Which organ pumps blood?', ['Lungs','Liver','Kidney','Heart'], 3),
      quiz('Burning of wood is a?', ['Physical change','Reversible change','Chemical change','Mechanical change'], 2),
      quiz('Which is a renewable resource?', ['Coal','Petroleum','Solar energy','Natural gas'], 2)
    ],
    English: [
      quiz('Passive voice: She reads the book?', ['She reads the book','The book is read by her','She is reading','She read the book'], 1),
      quiz('Past tense of go?', ['goed','gone','went','going'], 2),
      quiz('Which word is an adverb?', ['beautiful','quickly','beauty','beautify'], 1),
      quiz('Simile uses which words?', ['is/are','like/as','was/were','has/have'], 1),
      quiz('Which is a compound sentence?', ['She ran fast','She ran and he walked','Although she ran','Running fast'], 1)
    ],
    Hindi: [
      quiz('Hindi mein kitne swar hote hain?', ['9','11','13','15'], 1),
      quiz('Upma alankar mein kiska prayog hota hai?', ['mano/jano','jaise/sa','hai/hain','tha/thi'], 1),
      quiz('Dohe mein kitni matraen hoti hain?', ['13+11','16+16','11+13','14+12'], 0),
      quiz('Khana shabd kis prakar ki kriya hai?', ['Akarmak','Sakarmak','Prernarth','Sanyukt'], 1),
      quiz('Surdas kis bhakti ke kavi the?', ['Ram bhakti','Krishna bhakti','Shiv bhakti','Devi bhakti'], 1)
    ],
    Social: [
      quiz('French Revolution began in which year?', ['1776','1789','1799','1815'], 1),
      quiz('Who led the Dandi March?', ['Nehru','Subhas Bose','Gandhi','Tilak'], 2),
      quiz('Capital of India?', ['Mumbai','Kolkata','New Delhi','Chennai'], 2),
      quiz('Harappan Civilisation was near which river?', ['Ganga','Yamuna','Indus','Brahmaputra'], 2),
      quiz('Who wrote the Communist Manifesto?', ['Lenin','Stalin','Marx and Engels','Trotsky'], 2)
    ]
  };
});

module.exports = { courseData, quizData };
