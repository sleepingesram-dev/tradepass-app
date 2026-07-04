// TradePass question bank — TYPE III section (low-pressure appliances).
// ALL QUESTIONS ARE ORIGINAL. See questions-core.js header for field docs.

const QUESTIONS_TYPE3 = [
  {
    id: "Q0301", section: "Type III", topic: "Definitions", difficulty: "Easy", free: true,
    q: "A LOW-PRESSURE appliance uses a refrigerant whose boiling point at atmospheric pressure is:",
    options: ["Below -50°C (-58°F)", "Between -50°C and 10°C", "Above 10°C (50°F)", "Exactly at room temperature"],
    correct: 2,
    explain: "Low-pressure refrigerants — R-11, R-123, R-113 — boil ABOVE 10°C (50°F) at atmospheric pressure. That's why these machines run below atmospheric pressure in normal operation. Boiling between -50°C and 10°C defines high-pressure (Type II) refrigerants."
  },
  {
    id: "Q0302", section: "Type III", topic: "Definitions", difficulty: "Easy", free: true,
    q: "At normal operating conditions, the evaporator of a low-pressure centrifugal chiller runs at what pressure?",
    options: ["Well above atmospheric pressure", "Below atmospheric pressure — in a vacuum", "Exactly atmospheric pressure", "Over 400 psig"],
    correct: 1,
    explain: "Low-pressure chillers operate in a vacuum. An R-123 machine's evaporator typically runs around 10 inches Hg vacuum or deeper. This single fact drives most of the Type III rules: leaks pull air IN, purge units exist, and test pressures are tiny."
  },
  {
    id: "Q0303", section: "Type III", topic: "Leaks & Air", difficulty: "Medium", free: true,
    q: "Because a low-pressure chiller operates in a vacuum, what does a leak do?",
    options: ["Sprays liquid refrigerant out rapidly", "Lets air and moisture leak INTO the machine", "Nothing — vacuum systems can't leak", "Releases refrigerant vapor at high velocity"],
    correct: 1,
    explain: "With the inside pressure below atmospheric, a leak flows backwards compared to a high-pressure system: air and moisture get sucked in. That contaminates the refrigerant, raises head pressure, and forms acids — which is exactly why these machines carry purge units."
  },
  {
    id: "Q0304", section: "Type III", topic: "Purge Units", difficulty: "Easy", free: true,
    q: "What is the job of the purge unit on a low-pressure chiller?",
    options: ["To add refrigerant automatically", "To remove air and other non-condensable gases that accumulate in the machine", "To filter the chilled water", "To lubricate the compressor bearings"],
    correct: 1,
    explain: "The purge unit collects and expels the air (non-condensables) that leaks into a machine running in a vacuum, while returning as much refrigerant as possible. Without it, accumulated air would drive condensing pressure up and efficiency down."
  },
  {
    id: "Q0305", section: "Type III", topic: "Purge Units", difficulty: "Medium", free: false,
    q: "Where do non-condensable gases (air) collect in a low-pressure chiller, and where does the purge unit draw from?",
    options: ["The bottom of the evaporator", "The oil sump", "The top of the condenser", "The chilled water loop"],
    correct: 2,
    explain: "Air rises with the refrigerant vapor but can't condense, so it accumulates at the top of the condenser — and that's exactly where the purge unit taps in. Knowing WHERE air collects is the memorable half of this exam question."
  },
  {
    id: "Q0306", section: "Type III", topic: "Purge Units", difficulty: "Medium", free: false,
    q: "A chiller's purge unit has started running far more often than usual. What does this indicate?",
    options: ["The machine has developed a leak letting air in — find and repair it", "The refrigerant is wearing out", "Normal seasonal behavior", "The chilled water is too cold"],
    correct: 0,
    explain: "Excessive purge operation means excessive air, and air gets in through leaks. The purge unit is treating the symptom; the machine needs a leak check and repair. Refrigerant doesn't 'wear out,' and season alone doesn't put air inside a sealed machine."
  },
  {
    id: "Q0307", section: "Type III", topic: "Safety & Relief", difficulty: "Medium", free: true,
    q: "The rupture disc on a low-pressure chiller is designed to relieve at what pressure?",
    options: ["10 psig", "15 psig", "150 psig", "450 psig"],
    correct: 1,
    explain: "15 psig is the rupture disc setting on low-pressure machines. These vessels are not built for high pressure — they live in a vacuum — so the relief point is startlingly low compared to Type II equipment. It pairs with the 10 psig leak-test limit: test below the disc's setting."
  },
  {
    id: "Q0308", section: "Type III", topic: "Leak Testing", difficulty: "Medium", free: true,
    q: "What is the MAXIMUM pressure allowed when leak-testing a low-pressure chiller?",
    options: ["10 psig", "15 psig", "30 psig", "125 psig"],
    correct: 0,
    explain: "Never exceed 10 psig. The rupture disc lets go at 15 psig, so 10 psig keeps a safety margin — blow the disc and you dump the machine's charge and buy a repair. High-pressure habits (100+ psig nitrogen tests) will destroy a low-pressure machine."
  },
  {
    id: "Q0309", section: "Type III", topic: "Leak Testing", difficulty: "Hard", free: false,
    q: "What is the recommended way to raise a low-pressure chiller's pressure to 10 psig for leak testing?",
    options: ["Connect a high-pressure nitrogen cylinder directly", "Circulate controlled hot water through the tubes or use heater blankets to warm the refrigerant", "Run the compressor at full speed", "Add extra refrigerant until pressure rises"],
    correct: 1,
    explain: "Warming the refrigerant with controlled hot water (or heater blankets) raises its saturation pressure gently and evenly — you can't accidentally overshoot far past 10 psig the way an unregulated nitrogen cylinder can. The margin between 10 psig and the 15 psig rupture disc is small; controlled heat respects it."
  },
  {
    id: "Q0310", section: "Type III", topic: "Evacuation Levels", difficulty: "Hard", free: false,
    q: "Using recovery equipment made after November 15, 1993, a low-pressure appliance must be evacuated to what level?",
    options: ["0 inches Hg", "4 inches Hg vacuum", "10 inches Hg vacuum", "25 mm Hg absolute"],
    correct: 3,
    explain: "25 mm Hg ABSOLUTE — very close to a full vacuum — is the low-pressure requirement with current equipment. It's the deepest evacuation level in the 608 rules because the refrigerant is cheap to lose track of in a vacuum machine. Note the unit: millimeters absolute, not inches of vacuum."
  },
  {
    id: "Q0311", section: "Type III", topic: "Evacuation Levels", difficulty: "Hard", free: false,
    q: "25 mm Hg absolute is approximately equal to what reading on a standard compound gauge?",
    options: ["About 29 inches Hg vacuum", "About 25 inches Hg vacuum", "About 10 inches Hg vacuum", "0 — atmospheric pressure"],
    correct: 0,
    explain: "Atmospheric pressure is about 760 mm Hg absolute. 25 mm absolute means you've removed 735 mm of it — roughly 29 inches Hg of vacuum on a gauge that reads 29.9 at perfect vacuum. The '25 inches' answer is the trap: same number, wrong unit, much shallower vacuum."
  },
  {
    id: "Q0312", section: "Type III", topic: "Recovery Techniques", difficulty: "Medium", free: true,
    q: "In what order is refrigerant removed from a low-pressure chiller?",
    options: ["Vapor first, then liquid", "Liquid first, then remove the remaining vapor", "Oil first, then liquid, then vapor", "All phases at once through one hose"],
    correct: 1,
    explain: "Pump out the liquid first — it holds most of the pounds — then run the recovery unit's compressor to pull out the remaining vapor, which is the slow part of the job on a big machine. Oil is drained separately and heated to reclaim the refrigerant dissolved in it."
  },
  {
    id: "Q0313", section: "Type III", topic: "Recovery Techniques", difficulty: "Medium", free: true,
    q: "During refrigerant recovery (or evacuation) on a chiller, why must water keep circulating through the evaporator and condenser tubes?",
    options: ["To keep the pumps from rusting", "Because evaporating refrigerant chills the tubes — standing water inside them could freeze and rupture the tubes", "To keep the building cool during service", "It is not necessary"],
    correct: 1,
    explain: "As refrigerant boils off during recovery it absorbs heat from everything around it, including the water tubes. If that water sits still, it can freeze, expand, and split the tubes — a catastrophic repair on a chiller. Moving water can't freeze in place, so circulation stays on."
  },
  {
    id: "Q0314", section: "Type III", topic: "Recovery Techniques", difficulty: "Hard", free: false,
    q: "A significant amount of refrigerant remains dissolved in a chiller's oil after liquid removal. How is it recovered?",
    options: ["It can't be — that refrigerant is lost", "Heat the oil (to roughly 130°F) so the refrigerant boils out and can be recovered as vapor", "Stir the oil vigorously", "Freeze the oil to separate them"],
    correct: 1,
    explain: "Warm oil releases its dissolved refrigerant. Heating the oil to around 130°F drives the refrigerant out as vapor for the recovery unit to capture. Cooling does the opposite — cold oil is a refrigerant sponge. This is also why recovered pressure creeps back up after you stop."
  },
  {
    id: "Q0315", section: "Type III", topic: "Charging", difficulty: "Medium", free: false,
    q: "When recharging a low-pressure chiller, why do you charge VAPOR first before introducing liquid?",
    options: ["Vapor is cheaper than liquid", "Introducing liquid into the deep vacuum would chill the machine so fast the water in the tubes could freeze — vapor first raises the saturation temperature above freezing (about 36°F)", "Liquid refrigerant cannot flow into a vacuum", "It makes the gauges easier to read"],
    correct: 1,
    explain: "Liquid flashing into a deep vacuum refrigerates violently — cold enough to freeze the water in the tubes and split them. Charging vapor first brings the machine's pressure up until the saturation temperature is safely above freezing (around 36°F), and only then does liquid go in."
  },
  {
    id: "Q0316", section: "Type III", topic: "Safety", difficulty: "Medium", free: false,
    q: "R-123 has a very low allowable exposure limit. What does ASHRAE Standard 15 require for equipment rooms housing R-123 chillers?",
    options: ["A window that opens", "A refrigerant vapor monitor/sensor with an alarm, plus ventilation — and SCBA available for major leaks", "Monthly air freshener treatments", "Nothing beyond a fire extinguisher"],
    correct: 1,
    explain: "ASHRAE 15 calls for refrigerant monitors that alarm before exposure limits are reached, mechanical ventilation, and self-contained breathing apparatus (SCBA) for responding to major leaks. R-123's low exposure limit means you can be in danger at concentrations you can't smell."
  },
  {
    id: "Q0317", section: "Type III", topic: "Safety", difficulty: "Medium", free: false,
    q: "Why are room refrigerant sensors and oxygen-deprivation alarms so critical around low-pressure chillers?",
    options: ["Because chiller rooms are usually enclosed spaces where leaked refrigerant can displace oxygen or exceed exposure limits before anyone notices", "Because the sensors are required to run the chiller's compressor", "Because R-123 is highly explosive", "They are only installed for insurance discounts"],
    correct: 0,
    explain: "Machine rooms are enclosed, often below grade, and refrigerant vapor is heavier than air — a leak can quietly make the air unbreathable or push R-123 past its exposure limit. Alarms buy escape time. R-123 isn't explosive; the danger is what you're breathing."
  },
  {
    id: "Q0318", section: "Type III", topic: "Refrigerants", difficulty: "Easy", free: true,
    q: "R-123 was introduced as the interim replacement for which refrigerant in low-pressure chillers?",
    options: ["R-22", "R-12", "CFC-11 (R-11)", "R-502"],
    correct: 2,
    explain: "R-123, an HCFC, replaced CFC R-11 in centrifugal chillers when CFC production ended. Same low-pressure machine class, far lower ozone depletion potential. R-12's replacement was R-134a — a different machine class entirely."
  },
  {
    id: "Q0319", section: "Type III", topic: "Refrigerants", difficulty: "Medium", free: false,
    q: "New production of R-11 ended with the CFC phase-out in 1996. Where does R-11 for servicing existing chillers come from today?",
    options: ["New factories overseas ship it legally into the US", "Existing stockpiles and reclaimed refrigerant only", "It is synthesized on-site from R-134a", "Servicing R-11 machines is illegal"],
    correct: 1,
    explain: "Since production and import ended, every pound of R-11 in circulation is old stock or reclaimed product — which is why recovering it carefully matters economically as well as legally. Owning and servicing existing R-11 machines remains perfectly legal."
  },
  {
    id: "Q0320", section: "Type III", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "During vapor recovery from a low-pressure chiller, what does the recovery unit's water-cooled condenser do?",
    options: ["Cools the chiller's oil sump", "Condenses the recovered refrigerant vapor back into liquid so it can be stored in the receiving drum", "Chills the building's water loop", "Removes acid from the refrigerant"],
    correct: 1,
    explain: "The recovery compressor pulls vapor from the machine and discharges it into a water-cooled condenser, where it turns back into liquid and drains to the storage drum. Vapor takes up enormous space; condensing it is the only practical way to store the charge."
  },
  {
    id: "Q0321", section: "Type III", topic: "Recovery Techniques", difficulty: "Hard", free: false,
    q: "After evacuating a chiller to 25 mm Hg absolute, you isolate it and the pressure slowly rises. What are the two possible causes you must distinguish between?",
    options: ["Gauge error or sunspots", "Refrigerant still boiling out of the oil, or air leaking into the machine", "Water freezing or oil foaming", "Nothing causes pressure rise in a vacuum"],
    correct: 1,
    explain: "A rebound after evacuation is either leftover refrigerant off-gassing from the oil (recover more) or an air leak (find and fix it before opening the machine). Watching how far and how fast the pressure climbs — and whether it levels off at the refrigerant's saturation pressure — tells you which one you have."
  },
  {
    id: "Q0322", section: "Type III", topic: "Service Practices", difficulty: "Medium", free: false,
    q: "Before opening a low-pressure chiller for repairs after recovery, what should you do about the deep vacuum inside it?",
    options: ["Open it under vacuum — the air rushing in does no harm", "Break the vacuum with dry nitrogen up to atmospheric pressure, then open it", "Break the vacuum with compressed shop air", "Fill it with water first"],
    correct: 1,
    explain: "Bring the machine to atmospheric pressure with dry nitrogen before opening — controlled, moisture-free, and it prevents a rush of humid room air from soaking the machine's internals. Shop air carries water vapor and oil mist, which is exactly what you're trying to keep out."
  },
  {
    id: "Q0323", section: "Type III", topic: "Leak Repair", difficulty: "Medium", free: false,
    q: "A building's R-123 chiller holds 800 pounds of refrigerant and serves comfort cooling. What annual leak rate triggers mandatory repair?",
    options: ["10%", "20%", "30%", "35%"],
    correct: 0,
    explain: "Chillers serving building air conditioning are comfort-cooling appliances, and comfort cooling has the strictest trigger: 10% of the full charge per year. The 20% and 30% rates belong to commercial and industrial process refrigeration. At 800 pounds, this machine is squarely inside the 50-pound rule."
  },
  {
    id: "Q0324", section: "Type III", topic: "Purge Units", difficulty: "Medium", free: false,
    q: "Why are HIGH-EFFICIENCY purge units important on low-pressure chillers?",
    options: ["They run quieter than standard purges", "They release far less refrigerant per pound of air removed, cutting both emissions and refrigerant cost", "They eliminate the need for leak repairs", "They double the chiller's cooling capacity"],
    correct: 1,
    explain: "Every purge cycle expels some refrigerant along with the air. High-efficiency purge units recover nearly all of that refrigerant, losing only a small fraction per pound of air purged — better for the ozone layer, the law, and the owner's wallet. They don't fix leaks; they just manage the air the leaks let in."
  },
  {
    id: "Q0325", section: "Type III", topic: "Definitions", difficulty: "Medium", free: true,
    q: "Which machine is the classic example of a Type III (low-pressure) appliance?",
    options: ["A rooftop packaged unit", "A centrifugal chiller using R-11 or R-123", "A household chest freezer", "An automotive A/C system"],
    correct: 1,
    explain: "Big centrifugal chillers running R-11 or R-123 are THE low-pressure machines — building-cooling workhorses holding hundreds of pounds of refrigerant in a vacuum. Rooftop units are Type II, chest freezers are Type I small appliances, and car A/C is Section 609."
  },
  {
    id: "Q0326", section: "Type III", topic: "Pressure-Temperature", difficulty: "Hard", free: false,
    q: "An idle R-123 chiller sits in a 68°F equipment room. If you crack open a valve on it, what happens?",
    options: ["Refrigerant vapor sprays out under pressure", "Air flows INTO the machine, because R-123's pressure at 68°F is below atmospheric", "Liquid refrigerant pours out", "Nothing — the valve is frozen"],
    correct: 1,
    explain: "R-123 boils at about 82°F at atmospheric pressure, so at 68°F its saturation pressure is a partial vacuum — lower than the room's pressure. Open a valve and the room pushes air in; the machine doesn't push refrigerant out. This backwards-from-intuition behavior is the heart of Type III."
  },
  {
    id: "Q0327", section: "Type III", topic: "Cylinders", difficulty: "Easy", free: false,
    q: "The 80% maximum fill rule for recovery cylinders applies to low-pressure refrigerants like R-123:",
    options: ["No — low-pressure refrigerants can fill to 100%", "Yes — never fill any recovery cylinder beyond 80% of its capacity", "Only in summer months", "Only for cylinders over 1,000 pounds"],
    correct: 1,
    explain: "The 80% rule is universal: liquid needs room to expand as temperature rises, no matter how low the refrigerant's pressure is at room temperature. A hydrostatically full cylinder of any refrigerant becomes a bomb in a hot truck."
  },
  {
    id: "Q0328", section: "Type III", topic: "Evacuation Levels", difficulty: "Hard", free: false,
    q: "Recovery equipment manufactured BEFORE November 15, 1993 must evacuate a low-pressure appliance to what level?",
    options: ["25 inches Hg vacuum", "25 mm Hg absolute", "0 inches Hg", "4 inches Hg vacuum"],
    correct: 0,
    explain: "Older (pre-November 1993) equipment gets the shallower target: 25 INCHES Hg vacuum. Current equipment must reach 25 MM Hg absolute — nearly a full vacuum. Same digits, different units, very different depths: that pairing is a deliberate exam trap."
  },
  {
    id: "Q0329", section: "Type III", topic: "Safety", difficulty: "Easy", free: true,
    q: "A major refrigerant leak occurs in a chiller equipment room. What is the correct first response?",
    options: ["Grab a flashlight and go find the leak alone", "Evacuate the room, ventilate it, and re-enter only with SCBA (never alone)", "Seal the room doors to contain the vapor", "Turn off the lights to prevent ignition"],
    correct: 1,
    explain: "Get out, get air moving, and go back in only with self-contained breathing apparatus and a partner. Refrigerant displaces oxygen and R-123 exceeds its exposure limit quickly — sealing yourself in with it or searching alone is how fatalities happen. Ignition isn't the primary danger; asphyxiation is."
  },
  {
    id: "Q0330", section: "Type III", topic: "Certification", difficulty: "Medium", free: false,
    q: "A technician certified as Type III only may legally work on which of the following?",
    options: ["A 500-ton R-123 centrifugal chiller", "A rooftop R-410A packaged unit", "A window air conditioner", "All refrigeration equipment"],
    correct: 0,
    explain: "Type III covers low-pressure appliances — the R-123 chiller qualifies. The rooftop unit needs Type II and the window unit needs Type I. Working on everything requires Universal certification, which is simply passing all three specialty exams plus Core."
  }
];
