// TradePass question bank — TYPE I section (small appliances).
// ALL QUESTIONS ARE ORIGINAL. See questions-core.js header for field docs.

const QUESTIONS_TYPE1 = [
  {
    id: "Q0101", section: "Type I", topic: "Definitions", difficulty: "Easy", free: true,
    q: "Under EPA rules, a 'small appliance' is a product that is fully manufactured, charged, and hermetically sealed at the factory with how much refrigerant or less?",
    options: ["5 pounds", "15 pounds", "50 pounds", "200 pounds"],
    correct: 0,
    explain: "A small appliance contains 5 pounds of refrigerant or less AND is charged and hermetically sealed at the factory. Both parts matter: a field-charged system isn't a small appliance no matter how little refrigerant it holds. 50 and 200 pounds are thresholds you'll see in Type II rules, which is why they're used as decoys."
  },
  {
    id: "Q0102", section: "Type I", topic: "Definitions", difficulty: "Easy", free: true,
    q: "Which of the following is considered a small appliance?",
    options: ["A 4-ton residential split-system air conditioner", "A window air conditioning unit", "A supermarket rack refrigeration system", "A centrifugal chiller"],
    correct: 1,
    explain: "Window units, household refrigerators and freezers, dehumidifiers, PTACs, and vending machines are the classic small appliances — factory-sealed with 5 pounds or less. A split system is charged in the field and typically holds more than 5 pounds, so it falls under Type II even when it serves a house."
  },
  {
    id: "Q0103", section: "Type I", topic: "Definitions", difficulty: "Medium", free: false,
    q: "Which of the following is NOT a small appliance?",
    options: ["A household dehumidifier", "A packaged terminal air conditioner (PTAC)", "A residential central split-system condensing unit", "A beverage vending machine"],
    correct: 2,
    explain: "A central split system is assembled and charged in the field, so it fails the 'hermetically sealed at the factory' test — and it usually holds more than 5 pounds anyway. Dehumidifiers, PTACs, and vending machines are all factory-sealed products within the 5-pound limit."
  },
  {
    id: "Q0104", section: "Type I", topic: "Recovery Requirements", difficulty: "Medium", free: true,
    q: "Recovery equipment manufactured after November 15, 1993 must recover what percentage of the refrigerant from a small appliance when its compressor IS operating?",
    options: ["70%", "80%", "90%", "99%"],
    correct: 2,
    explain: "90% with an operating compressor. If the compressor is dead, the requirement drops to 80% — because you can't use the system's own pressure to help push refrigerant out. Either way, achieving a 4 inches Hg vacuum also satisfies the rule."
  },
  {
    id: "Q0105", section: "Type I", topic: "Recovery Requirements", difficulty: "Medium", free: false,
    q: "When a small appliance's compressor is NOT operating, recovery equipment (made after Nov 15, 1993) must recover what percentage of the charge?",
    options: ["60%", "80%", "90%", "100%"],
    correct: 1,
    explain: "80% when the compressor won't run, versus 90% when it will. Older recovery equipment (made before November 15, 1993) only has to hit 80% in both cases. Nobody can recover 100% — some refrigerant always stays dissolved in the oil."
  },
  {
    id: "Q0106", section: "Type I", topic: "Recovery Requirements", difficulty: "Medium", free: true,
    q: "Instead of meeting the percentage requirement, recovery from a small appliance is also considered complete when the system is evacuated to what vacuum level?",
    options: ["4 inches Hg vacuum", "10 inches Hg vacuum", "15 inches Hg vacuum", "25 mm Hg absolute"],
    correct: 0,
    explain: "4 inches of mercury (Hg) vacuum is the alternative standard for small appliances. The deeper levels — 10 and 15 inches — belong to Type II high-pressure equipment, and 25 mm Hg absolute belongs to Type III low-pressure equipment. Matching the vacuum level to the equipment type is a guaranteed exam topic."
  },
  {
    id: "Q0107", section: "Type I", topic: "Recovery Requirements", difficulty: "Medium", free: false,
    q: "Recovery equipment used on small appliances must be certified by whom?",
    options: ["The local building department", "An EPA-approved testing organization (tested to the AHRI 740 standard)", "The refrigerant manufacturer", "OSHA"],
    correct: 1,
    explain: "Recovery machines must be tested and certified by an EPA-approved laboratory to the AHRI 740 standard. OSHA governs worker safety, not equipment certification, and building departments deal with codes and permits — common-sense-sounding decoys that are wrong here."
  },
  {
    id: "Q0108", section: "Type I", topic: "Recovery Requirements", difficulty: "Hard", free: false,
    q: "Businesses that service small appliances must do what regarding their recovery equipment?",
    options: ["Nothing — small appliance work is exempt from equipment rules", "Certify to the EPA (by signed statement to their EPA Regional Office) that they have acquired certified recovery equipment", "Have their equipment inspected by the EPA annually", "Lease equipment only from EPA-owned depots"],
    correct: 1,
    explain: "Shops must register with the EPA by sending a signed statement listing the certified recovery equipment they've acquired. There's no annual EPA inspection program and no exemption — the paperwork requirement is the piece people forget."
  },
  {
    id: "Q0109", section: "Type I", topic: "Recovery Techniques", difficulty: "Easy", free: true,
    q: "What is 'system-dependent' (passive) recovery?",
    options: ["Recovery that uses the appliance's own compressor or internal pressure to move refrigerant into a non-pressurized container", "Recovery using a machine with its own built-in compressor", "Letting the refrigerant vent slowly through a filter", "Any recovery that takes more than one hour"],
    correct: 0,
    explain: "System-dependent (passive) recovery relies on the appliance itself — its compressor or its internal pressure — to push refrigerant into a recovery container, which may be non-pressurized. Self-contained (active) recovery uses a machine with its own pump or compressor. Venting through a filter is illegal, full stop."
  },
  {
    id: "Q0110", section: "Type I", topic: "Recovery Techniques", difficulty: "Easy", free: false,
    q: "What makes recovery equipment 'self-contained' (active)?",
    options: ["It fits in one carrying case", "It has its own compressor or pump to draw out the refrigerant", "It needs no electricity", "It only works on operating compressors"],
    correct: 1,
    explain: "Self-contained means the recovery unit brings its own muscle — a built-in compressor or pump — so it doesn't depend on the appliance's compressor at all. That's exactly why it works on dead systems where passive recovery struggles."
  },
  {
    id: "Q0111", section: "Type I", topic: "Recovery Techniques", difficulty: "Medium", free: true,
    q: "When using system-dependent recovery on a small appliance whose compressor does NOT run, what should you do?",
    options: ["Recover from the low side only", "Access BOTH the high side and the low side of the system", "Skip recovery since the compressor is dead", "Pressurize the system with nitrogen first"],
    correct: 1,
    explain: "With a dead compressor there's nothing circulating the refrigerant, so you need access valves on both the high and low sides to capture the full charge. Recovery is never optional — a dead compressor doesn't create a venting exemption. Nitrogen would just contaminate the recovered refrigerant."
  },
  {
    id: "Q0112", section: "Type I", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "Which trick helps release refrigerant trapped in the oil of a small appliance's non-operating compressor during recovery?",
    options: ["Gently heating and tapping the compressor", "Packing the compressor in ice", "Running water over the condenser", "Turning the appliance upside down"],
    correct: 0,
    explain: "Refrigerant dissolves in compressor oil. Warming the compressor (and tapping it lightly with a rubber mallet) drives that dissolved refrigerant out of the oil so it can be recovered. Cooling it does the opposite — cold oil holds MORE refrigerant."
  },
  {
    id: "Q0113", section: "Type I", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "Why shouldn't a solderless, clamp-on piercing access valve be left permanently installed on a small appliance?",
    options: ["It voids the electrical warranty", "These valves tend to leak over time", "It makes the appliance run louder", "EPA rules require removing all valves within one hour"],
    correct: 1,
    explain: "Clamp-on piercing valves are a quick way in, but their gasket seal degrades and they leak with time — so they should be removed after service (or replaced with a brazed-in valve) and always leak-tested while installed. There's no one-hour EPA rule; the issue is purely that they leak."
  },
  {
    id: "Q0114", section: "Type I", topic: "Recovery Techniques", difficulty: "Medium", free: true,
    q: "Why should you never recover different refrigerants into the same cylinder?",
    options: ["The cylinder colors won't match", "Mixed refrigerants may be impossible to reclaim and often must be destroyed at your cost", "Mixing always causes an immediate explosion", "It is fine as long as both are HFCs"],
    correct: 1,
    explain: "A mixed-refrigerant cylinder usually can't be separated back into usable products — reclaimers will reject it, and you pay for destruction. It's rarely an instant safety catastrophe; it's an expensive, avoidable waste. Identify the refrigerant before recovery and dedicate cylinders accordingly."
  },
  {
    id: "Q0115", section: "Type I", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "Before recovering from a small appliance, how do you identify which refrigerant it contains?",
    options: ["By the color of the cabinet", "Check the nameplate/label, and verify with a pressure-temperature comparison if in doubt", "All small appliances use R-22", "Smell the access valve"],
    correct: 1,
    explain: "The nameplate or model label states the refrigerant and charge. If the label is gone or a retrofit is suspected, compare the system's standing pressure to the saturation pressure for that refrigerant at the current temperature. Household refrigerators alone have used R-12, R-134a, and R-600a over the years — never assume."
  },
  {
    id: "Q0116", section: "Type I", topic: "Recovery Techniques", difficulty: "Hard", free: false,
    q: "Recovery from a small appliance is going very slowly on a cold day. What is the most likely reason?",
    options: ["Low ambient temperature keeps system pressure low, slowing refrigerant flow to the recovery device", "Cold weather makes refrigerant heavier", "The refrigerant has frozen solid", "Recovery machines only work above 80°F"],
    correct: 0,
    explain: "Refrigerant pressure follows temperature. On a cold day the system's pressure is low, so there's less push driving refrigerant into your recovery setup. Warming the appliance (safely) speeds things up. Common refrigerants don't freeze at any temperature you'll ever work in."
  },
  {
    id: "Q0117", section: "Type I", topic: "Equipment", difficulty: "Medium", free: false,
    q: "Recovery equipment manufactured after November 15, 1993 must be equipped with what feature to minimize refrigerant release when hoses are disconnected?",
    options: ["Clear plastic hoses", "Low-loss fittings", "An automatic venting port", "Extra-long hoses"],
    correct: 1,
    explain: "Low-loss fittings close themselves off when disconnected, trapping the refrigerant in the hose instead of releasing it. The tiny puff that still escapes is a legal 'de minimis' release. An 'automatic venting port' is the opposite of the goal — venting is what we're preventing."
  },
  {
    id: "Q0118", section: "Type I", topic: "Disposal", difficulty: "Medium", free: true,
    q: "Who is responsible for making sure refrigerant is recovered from a refrigerator before it is scrapped and recycled?",
    options: ["Nobody — small appliances are exempt", "The original manufacturer", "The final person in the disposal chain (such as the scrap yard), unless they have a signed statement that the refrigerant was already recovered", "The homeowner's insurance company"],
    correct: 2,
    explain: "The last business in the disposal chain must ensure recovery happened — either by doing it or by obtaining a signed statement (with name, address, and date) from whoever delivered the appliance saying they recovered the refrigerant. Small appliances are exempt from leak-repair rules, but never from recovery-before-disposal."
  },
  {
    id: "Q0119", section: "Type I", topic: "Disposal", difficulty: "Hard", free: false,
    q: "Refrigerant recovered from a customer's small appliance may be returned WITHOUT reclamation to which equipment?",
    options: ["Any equipment anywhere", "Equipment belonging to the same owner", "Only the exact appliance it came from", "It must always be reclaimed before any reuse"],
    correct: 1,
    explain: "Recovered (or recycled) refrigerant can go back into the same owner's equipment without lab-certified reclamation — it doesn't have to be the identical appliance. The AHRI 700 reclamation requirement kicks in when the refrigerant changes ownership."
  },
  {
    id: "Q0120", section: "Type I", topic: "Refrigerants", difficulty: "Easy", free: true,
    q: "Older household refrigerators used R-12. What refrigerants are common in newer household refrigerators?",
    options: ["R-134a or R-600a (isobutane)", "R-22 or R-11", "R-410A or R-407C", "Ammonia or CO2 only"],
    correct: 0,
    explain: "R-134a replaced R-12 in domestic refrigeration through the 1990s and 2000s, and many current models use R-600a (isobutane), a flammable hydrocarbon. R-410A is a residential air conditioning refrigerant, and R-11 belongs to big low-pressure chillers — different worlds."
  },
  {
    id: "Q0121", section: "Type I", topic: "Refrigerants", difficulty: "Medium", free: false,
    q: "What special hazard does R-600a (isobutane) in a modern refrigerator present during service?",
    options: ["It is extremely toxic to touch", "It is flammable — keep ignition sources away and use tools rated for flammable refrigerants", "It operates at dangerously high pressure", "It destroys ozone faster than CFCs"],
    correct: 1,
    explain: "Isobutane is a hydrocarbon — think lighter fluid. A leak near a spark or open flame can ignite, so service requires ventilation, spark-free tools, and no brazing until the charge is out and the system is purged. It's actually a low-pressure, ozone-safe refrigerant; flammability is the whole story."
  },
  {
    id: "Q0122", section: "Type I", topic: "Refrigerants", difficulty: "Hard", free: false,
    q: "When retrofitting an old R-12 refrigerator to R-134a, which change is required?",
    options: ["No changes — just top off the R-12 with R-134a", "Replace the mineral oil with ester (POE) oil and replace the filter-drier", "Install a bigger compressor", "Paint the cylinder gray and yellow"],
    correct: 1,
    explain: "R-134a will not mix with the mineral oil that R-12 systems use, so the oil must be changed to polyolester and the filter-drier replaced with one compatible with R-134a. Topping off R-12 with R-134a creates an illegal, unreclaimable mixed refrigerant — never mix refrigerants in a system."
  },
  {
    id: "Q0123", section: "Type I", topic: "Safety", difficulty: "Easy", free: true,
    q: "What personal protective equipment is the minimum when transferring refrigerant?",
    options: ["Safety glasses and gloves — liquid refrigerant can cause frostbite", "A full hazmat suit at all times", "Hearing protection only", "None is needed for small appliances"],
    correct: 0,
    explain: "Liquid refrigerant boils at skin temperature and flash-freezes tissue on contact — frostbite injuries to eyes and hands are the everyday risk. Safety glasses and gloves are the baseline for any transfer. A full hazmat suit isn't the standard for routine work; eyes and skin protection are."
  },
  {
    id: "Q0124", section: "Type I", topic: "Cylinders", difficulty: "Easy", free: false,
    q: "Refrigerant recovered from a small appliance must be stored in what kind of container?",
    options: ["Any clean metal can with a lid", "A DOT-approved recovery cylinder (or a non-pressurized container when using system-dependent recovery)", "A glass carboy", "The original disposable cylinder the refrigerant came in"],
    correct: 1,
    explain: "Pressurized storage requires a DOT-approved recovery cylinder, filled to no more than 80%. The one exception: passive, system-dependent recovery may capture the charge in an approved non-pressurized container. Refilling a disposable cylinder is illegal and dangerous."
  },
  {
    id: "Q0125", section: "Type I", topic: "Recovery Requirements", difficulty: "Hard", free: false,
    q: "You evacuate a small appliance to 4 inches Hg vacuum and stop. A few minutes later the pressure has risen noticeably. What does this most likely mean?",
    options: ["The vacuum gauge is always wrong", "Refrigerant trapped in the compressor oil is boiling off (or the system has a leak) — resume recovery", "The recovery is complete and the rise is normal air expansion", "The appliance has recharged itself"],
    correct: 1,
    explain: "A pressure rebound after evacuation means more refrigerant is coming out of the oil — recover again until the system holds its vacuum. It could also indicate a leak pulling in air. Either way, walking away at the first sign of 4 inches Hg without confirming it holds is how techs fail the intent of the rule."
  },
  {
    id: "Q0126", section: "Type I", topic: "Regulations", difficulty: "Medium", free: true,
    q: "Small appliances are exempt from the EPA's leak repair requirements. Does that mean venting from a leaky refrigerator is legal?",
    options: ["Yes — exempt means anything goes", "No — the venting prohibition still applies to all appliances; only the mandatory leak-REPAIR thresholds don't apply", "Yes, but only for appliances older than 20 years", "Only if the leak is smaller than one ounce per year"],
    correct: 1,
    explain: "The leak-repair rules (the 10%/20%/30% thresholds) apply to appliances with 50+ pounds of charge, so small appliances are outside them. But knowingly venting refrigerant is illegal on ANY appliance. Exempt from repair deadlines does not mean free to release."
  },
  {
    id: "Q0127", section: "Type I", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "Why can't you use a plain vacuum pump by itself as recovery equipment?",
    options: ["Vacuum pumps are too slow", "A vacuum pump discharges to the atmosphere — using one to remove refrigerant is venting", "Vacuum pumps only work on large systems", "Vacuum pump oil dissolves refrigerant permanently"],
    correct: 1,
    explain: "A vacuum pump's exhaust goes straight to the air. Pulling refrigerant out with one releases the charge — that's illegal venting, not recovery. Vacuum pumps come out AFTER recovery, to evacuate air and moisture from the empty system before recharge."
  },
  {
    id: "Q0128", section: "Type I", topic: "Certification", difficulty: "Easy", free: true,
    q: "A technician holding ONLY Type I certification may work on which equipment?",
    options: ["Any air conditioning system up to 5 tons", "Small appliances only", "High-pressure systems under 200 pounds", "Low-pressure chillers"],
    correct: 1,
    explain: "Type I covers small appliances, period — household refrigerators, freezers, window units, PTACs, dehumidifiers, vending machines. A 5-ton split system is high-pressure Type II territory regardless of who owns it. To work across all categories you need Universal certification."
  },
  {
    id: "Q0129", section: "Type I", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "During system-dependent recovery of a small appliance, the refrigerant may legally be captured in which of the following?",
    options: ["An approved non-pressurized container (such as a recovery bag)", "A soda bottle with a tight cap", "The shop's air compressor tank", "An open bucket, if outdoors"],
    correct: 0,
    explain: "Passive recovery works at low pressure, so approved non-pressurized containers — including purpose-made recovery bags — are permitted for small appliances. Improvised containers are neither approved nor safe, and an open bucket is simply venting with extra steps."
  },
  {
    id: "Q0130", section: "Type I", topic: "Service Practices", difficulty: "Medium", free: false,
    q: "When brazing a new access fitting onto a small appliance's tubing (after recovery), why should you flow a low pressure of dry nitrogen through the tubing?",
    options: ["Nitrogen makes the solder joint shinier", "It prevents oxidation scale from forming inside the tubing, which would otherwise circulate and clog the system", "It is required by the DOT", "It cools the tubing so you can braze faster"],
    correct: 1,
    explain: "Brazing heat plus oxygen creates black oxide scale inside the pipe; flowing nitrogen displaces the oxygen so the inside stays clean. Scale that breaks loose plugs the cap tube and filter-drier — a slow death for a refrigerator. This is a shop-practice question that shows up because it protects the equipment."
  }
];
