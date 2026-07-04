// TradePass question bank — CORE section (EPA 608).
// ALL QUESTIONS ARE ORIGINAL, written from the public EPA Section 608 topic
// outline and general trade coursework. Never copy real exam questions.
// Fields: id, section, topic, difficulty (Easy/Medium/Hard), free (true = in
// the free tier), q, options[A,B,C,D], correct (0-3 index), explain.

const QUESTIONS_CORE = [
  {
    id: "Q0001", section: "Core", topic: "Ozone Depletion", difficulty: "Easy", free: true,
    q: "Which element found in CFC and HCFC refrigerants is responsible for destroying stratospheric ozone?",
    options: ["Fluorine", "Chlorine", "Hydrogen", "Carbon"],
    correct: 1,
    explain: "Chlorine is the ozone killer. When UV light breaks a CFC molecule apart in the stratosphere, the freed chlorine atom destroys ozone molecules over and over — one chlorine atom can take out thousands of them. Fluorine is the tempting wrong answer because it's also in the molecule, but fluorine does not deplete ozone."
  },
  {
    id: "Q0002", section: "Core", topic: "Ozone Depletion", difficulty: "Easy", free: true,
    q: "What does the ozone layer in the stratosphere do for life on Earth?",
    options: ["Traps heat to keep the planet warm", "Produces the oxygen we breathe", "Filters out harmful ultraviolet (UV) radiation", "Prevents acid rain from forming"],
    correct: 2,
    explain: "Stratospheric ozone acts as a sunscreen for the planet, absorbing harmful UV radiation before it reaches the surface. Less ozone means more UV, which increases skin cancer, cataracts, and crop damage. Trapping heat describes the greenhouse effect — a different problem."
  },
  {
    id: "Q0003", section: "Core", topic: "Ozone Depletion", difficulty: "Medium", free: false,
    q: "Which list ranks refrigerant classes from HIGHEST to LOWEST ozone depletion potential (ODP)?",
    options: ["HFC, HCFC, CFC", "CFC, HCFC, HFC", "HCFC, CFC, HFC", "CFC, HFC, HCFC"],
    correct: 1,
    explain: "CFCs are the worst (highest ODP), HCFCs are milder, and HFCs have zero ODP. The pattern to remember: the more chlorine and the longer the molecule survives, the higher the ODP. HFCs contain no chlorine at all, so they can't deplete ozone."
  },
  {
    id: "Q0004", section: "Core", topic: "Ozone Depletion", difficulty: "Medium", free: false,
    q: "Why do HCFC refrigerants like R-22 have a lower ozone depletion potential than CFCs like R-12?",
    options: ["HCFCs contain no chlorine", "The hydrogen in HCFCs makes them break down in the lower atmosphere before most reach the stratosphere", "HCFCs are heavier than air so they never rise", "HCFCs are only used in small quantities"],
    correct: 1,
    explain: "The hydrogen atom in an HCFC makes the molecule less stable, so most of it breaks apart in the lower atmosphere before it can carry chlorine up to the ozone layer. HCFCs DO contain chlorine — that's why their ODP is low but not zero. Weight has nothing to do with it; atmospheric mixing carries these gases upward regardless."
  },
  {
    id: "Q0005", section: "Core", topic: "Ozone Depletion", difficulty: "Hard", free: false,
    q: "The ozone depletion potential (ODP) scale is defined by assigning a value of 1.0 to which refrigerant?",
    options: ["R-22", "R-134a", "R-410A", "CFC-11 (R-11)"],
    correct: 3,
    explain: "CFC-11 (R-11) is the reference point — its ODP is defined as 1.0, and every other refrigerant is measured against it. R-12 also scores 1.0, but R-11 is the defined baseline. R-134a and R-410A are HFCs with an ODP of zero."
  },
  {
    id: "Q0006", section: "Core", topic: "Clean Air Act & Regulations", difficulty: "Easy", free: true,
    q: "Under Section 608 of the Clean Air Act, knowingly venting CFC and HCFC refrigerants during service has been illegal since what date?",
    options: ["July 1, 1992", "November 15, 1995", "January 1, 1996", "January 1, 2018"],
    correct: 0,
    explain: "July 1, 1992 is the date venting of CFCs and HCFCs became illegal. November 15, 1995 is the tempting wrong answer — that's when the venting ban was extended to SUBSTITUTE refrigerants like HFCs. Keep the two dates straight: 1992 for the originals, 1995 for the substitutes."
  },
  {
    id: "Q0007", section: "Core", topic: "Clean Air Act & Regulations", difficulty: "Medium", free: false,
    q: "Venting substitute refrigerants (such as HFC-134a and R-410A) has been prohibited since what date?",
    options: ["July 1, 1992", "November 14, 1994", "November 15, 1995", "January 1, 1996"],
    correct: 2,
    explain: "November 15, 1995 is when the venting prohibition was extended to substitutes such as HFCs. July 1, 1992 covers CFCs and HCFCs only. Even though HFCs don't harm the ozone layer, venting them is still illegal — they are powerful greenhouse gases."
  },
  {
    id: "Q0008", section: "Core", topic: "Clean Air Act & Regulations", difficulty: "Easy", free: true,
    q: "Which of the following releases of refrigerant is NOT a violation of the Clean Air Act?",
    options: ["Venting a system to the air to save recovery time", "The small puff released when disconnecting properly designed low-loss fittings after recovery", "Releasing refrigerant because the recovery machine is broken", "Blowing the charge out with nitrogen without recovering first"],
    correct: 1,
    explain: "Tiny releases that happen while making a good-faith effort to recover — like the trace amount in a low-loss fitting — are called 'de minimis' releases and are legal. Everything else listed is straight-up venting. A broken recovery machine is never an excuse; you must recover before opening a system."
  },
  {
    id: "Q0009", section: "Core", topic: "Clean Air Act & Regulations", difficulty: "Medium", free: false,
    q: "The EPA may pay an award of up to how much for information that leads to penalizing someone who illegally vents refrigerant?",
    options: ["$1,000", "$5,000", "$10,000", "$50,000"],
    correct: 2,
    explain: "The Clean Air Act allows the EPA to pay up to $10,000 to people who supply information leading to a penalty against a venting violator. Separate from the award, violators themselves face fines that can run tens of thousands of dollars per day, per violation — and technicians can lose their certification."
  },
  {
    id: "Q0010", section: "Core", topic: "Clean Air Act & Regulations", difficulty: "Medium", free: true,
    q: "Who is legally allowed to purchase CFC and HCFC refrigerants like R-22?",
    options: ["Anyone over 18", "Anyone who owns air conditioning equipment", "EPA Section 608 certified technicians (or their employers)", "Only equipment manufacturers"],
    correct: 2,
    explain: "The sales restriction limits the purchase of ozone-depleting refrigerants to technicians certified under Section 608 (or 609 for motor vehicle A/C). A homeowner can own equipment containing refrigerant but can't walk into a supply house and buy a jug of R-22. This is one reason your certification card matters on the job."
  },
  {
    id: "Q0011", section: "Core", topic: "Clean Air Act & Regulations", difficulty: "Easy", free: true,
    q: "Which EPA Section 608 certification type is required to service SMALL APPLIANCES like household refrigerators and window air conditioners?",
    options: ["Type I", "Type II", "Type III", "Universal only"],
    correct: 0,
    explain: "Type I covers small appliances, Type II covers high-pressure equipment, and Type III covers low-pressure equipment (big chillers). Universal certification covers all three, but it is not the only way to work on small appliances — Type I alone is enough."
  },
  {
    id: "Q0012", section: "Core", topic: "Clean Air Act & Regulations", difficulty: "Medium", free: false,
    q: "If EPA refrigerant regulations and your state or local regulations conflict, which do you follow?",
    options: ["Always the EPA rule", "Always the state rule", "Whichever rule is stricter", "Whichever rule was written most recently"],
    correct: 2,
    explain: "You must comply with the stricter requirement. Federal EPA rules are the floor, not the ceiling — states and localities are allowed to pass tougher rules, and if they do, those tougher rules apply to you."
  },
  {
    id: "Q0013", section: "Core", topic: "Montreal Protocol", difficulty: "Easy", free: true,
    q: "What is the Montreal Protocol?",
    options: ["A US law that created technician certification", "An international treaty to phase out the production of ozone-depleting substances", "A Canadian refrigerant recycling standard", "An ASHRAE safety standard for equipment rooms"],
    correct: 1,
    explain: "The Montreal Protocol is the international agreement (signed in 1987) committing countries to phase out ozone-depleting substances like CFCs and HCFCs. In the United States, it is implemented through the Clean Air Act — which is the US law, not the treaty itself."
  },
  {
    id: "Q0014", section: "Core", topic: "Montreal Protocol", difficulty: "Medium", free: false,
    q: "Under the US phase-out schedule, production and import of CFC refrigerants such as R-12 ended in what year?",
    options: ["1992", "1996", "2010", "2020"],
    correct: 1,
    explain: "CFC production and import for US consumption ended January 1, 1996. Any R-12 used after that comes from stockpiles or reclaimed refrigerant. 2010 and 2020 relate to later HCFC phase-out milestones (like R-22), which is why they're tempting."
  },
  {
    id: "Q0015", section: "Core", topic: "Refrigerants & Blends", difficulty: "Easy", free: true,
    q: "R-22 belongs to which class of refrigerants?",
    options: ["CFC", "HCFC", "HFC", "Natural refrigerant"],
    correct: 1,
    explain: "R-22 is an HCFC — it contains hydrogen, chlorine, fluorine, and carbon. Because it still contains chlorine it has a small but real ozone depletion potential, which is why it was phased out. R-12 is the classic CFC; R-134a and R-410A are HFCs."
  },
  {
    id: "Q0016", section: "Core", topic: "Refrigerants & Blends", difficulty: "Medium", free: false,
    q: "Refrigerant blends in the 400 series (such as R-407C) are classified as what?",
    options: ["Azeotropic blends that act like a single refrigerant", "Zeotropic blends that have a temperature glide", "Pure single-compound refrigerants", "Natural refrigerants"],
    correct: 1,
    explain: "400-series blends are zeotropic: their components boil and condense at slightly different temperatures, creating a 'temperature glide.' 500-series blends (like R-502) are azeotropic and behave like a single compound. The series number is the giveaway on the exam."
  },
  {
    id: "Q0017", section: "Core", topic: "Refrigerants & Blends", difficulty: "Medium", free: false,
    q: "Why must zeotropic blends like R-410A be charged into a system as a LIQUID?",
    options: ["Liquid charging is faster and that is the only reason", "Charging vapor could fractionate the blend and change its composition", "Liquid refrigerant is easier to weigh", "Vapor charging would overheat the compressor"],
    correct: 1,
    explain: "In a blend, the components evaporate at different rates. If you draw vapor off the cylinder, you pull out more of the lighter component and leave the rest behind — that's fractionation, and it changes the blend's makeup and performance. Charging liquid (throttled carefully into the low side) keeps the mixture correct."
  },
  {
    id: "Q0018", section: "Core", topic: "Refrigerants & Blends", difficulty: "Medium", free: true,
    q: "What is 'fractionation' in a refrigerant blend?",
    options: ["The blend breaking down into acid when overheated", "Components of the blend leaking or evaporating at different rates, changing the blend's composition", "The refrigerant freezing into layers inside the cylinder", "Mixing two different refrigerants in one system"],
    correct: 1,
    explain: "Fractionation means the ingredients of a blend separate because they evaporate at different rates — during a vapor leak or vapor charging, the lighter component leaves faster. That's why a system with a zeotropic blend that has leaked significantly is often recovered and recharged with virgin refrigerant instead of just topped off."
  },
  {
    id: "Q0019", section: "Core", topic: "Refrigerants & Blends", difficulty: "Hard", free: false,
    q: "A 500-series blend such as R-502 is azeotropic. What does that mean in practice?",
    options: ["It behaves like a single-component refrigerant with one boiling point at a given pressure", "It must never be recovered", "It always has a large temperature glide", "It contains no fluorine"],
    correct: 0,
    explain: "Azeotropic blends act like one pure refrigerant: at a given pressure they boil and condense at a single temperature, with no glide and no meaningful fractionation. That's the opposite of zeotropic 400-series blends, which is what makes this a favorite exam contrast."
  },
  {
    id: "Q0020", section: "Core", topic: "Refrigerants & Blends", difficulty: "Medium", free: false,
    q: "Which lubricant is used with HFC refrigerants like R-410A and R-134a?",
    options: ["Mineral oil", "Polyolester (POE) oil", "Vegetable-based oil", "Silicone oil"],
    correct: 1,
    explain: "HFC refrigerants don't mix well with the old mineral oils, so systems using them run polyolester (POE) synthetic oil. This matters on retrofits: converting an R-12 system to R-134a means changing the mineral oil to ester oil. POE oil also absorbs moisture aggressively, so keep it sealed."
  },
  {
    id: "Q0021", section: "Core", topic: "Recover, Recycle, Reclaim", difficulty: "Easy", free: true,
    q: "What does it mean to RECOVER refrigerant?",
    options: ["To clean refrigerant using filter-driers for reuse", "To remove refrigerant in any condition from a system and store it in an external container, without testing or processing it", "To re-process refrigerant to brand-new purity verified by lab analysis", "To destroy contaminated refrigerant"],
    correct: 1,
    explain: "Recovery is simply getting the refrigerant out of the system and into an approved container — no cleaning, no testing. Cleaning it with oil separators and filter-driers is RECYCLING; processing it back to new-product purity with lab verification is RECLAIMING. The three R's are defined by how much processing happens."
  },
  {
    id: "Q0022", section: "Core", topic: "Recover, Recycle, Reclaim", difficulty: "Easy", free: true,
    q: "What does it mean to RECYCLE refrigerant?",
    options: ["To store it in any available container", "To vent it slowly through a filter", "To clean it for reuse by oil separation and single or multiple passes through filter-driers", "To send it to a chemical plant for destruction"],
    correct: 2,
    explain: "Recycling cleans the refrigerant on site or at a shop using oil separation and filter-driers, typically so it can go back into equipment belonging to the same owner. It does NOT certify purity — that's reclamation, which requires meeting the AHRI 700 standard verified by chemical analysis."
  },
  {
    id: "Q0023", section: "Core", topic: "Recover, Recycle, Reclaim", difficulty: "Medium", free: true,
    q: "Before recovered refrigerant can be SOLD to a different owner, what must happen to it?",
    options: ["It must be recycled with a filter-drier", "It must be reclaimed to AHRI 700 purity, verified by chemical analysis", "It must sit in storage for 30 days", "Nothing — recovered refrigerant can be resold as-is"],
    correct: 1,
    explain: "Refrigerant that changes ownership must be reclaimed — processed back to the AHRI 700 purity standard and verified by lab analysis. Recycled refrigerant can generally only go back into equipment of the same owner. This protects buyers from contaminated refrigerant destroying their equipment."
  },
  {
    id: "Q0024", section: "Core", topic: "Recover, Recycle, Reclaim", difficulty: "Medium", free: false,
    q: "Reclaimed refrigerant must meet which industry purity standard?",
    options: ["ASHRAE 15", "AHRI 700", "DOT 39", "ISO 9000"],
    correct: 1,
    explain: "AHRI 700 is the purity standard for reclaimed refrigerant. ASHRAE 15 is the safety standard for equipment rooms, and DOT 39 relates to disposable cylinders — both are real standards used as decoys because you'll see them elsewhere on the exam."
  },
  {
    id: "Q0025", section: "Core", topic: "Cylinders & Shipping", difficulty: "Easy", free: true,
    q: "What is the standard color scheme for a refrigerant RECOVERY cylinder?",
    options: ["Solid white", "Green body with a red top", "Gray body with a yellow top", "Solid orange"],
    correct: 2,
    explain: "Recovery cylinders are gray with yellow tops (shoulders). This tells everyone downstream the cylinder holds used, recovered refrigerant rather than virgin product. Cylinders must also be DOT-approved and clearly labeled with the refrigerant type."
  },
  {
    id: "Q0026", section: "Core", topic: "Cylinders & Shipping", difficulty: "Easy", free: true,
    q: "A recovery cylinder should never be filled beyond what percentage of its capacity?",
    options: ["50%", "60%", "80%", "95%"],
    correct: 2,
    explain: "80% is the maximum safe fill level. The remaining space allows the liquid to expand as temperature rises. A cylinder filled too full can become 'hydrostatically' full of liquid with no vapor space — then even mild warming builds explosive pressure. Weigh cylinders during recovery; don't guess."
  },
  {
    id: "Q0027", section: "Core", topic: "Cylinders & Shipping", difficulty: "Medium", free: false,
    q: "What should you do with a disposable (one-trip) refrigerant cylinder once it is empty?",
    options: ["Refill it with recovered refrigerant since it held the same type", "Recover any remaining refrigerant, mark it empty, and recycle the metal — never refill it", "Vent the remaining vapor and throw it in the trash", "Use it as a compressed air tank in the shop"],
    correct: 1,
    explain: "Disposable cylinders are built for one trip only — refilling one is illegal and dangerous because the cylinder and its valve aren't designed for reuse. Before discarding, recover the remaining vapor (a 'empty' disposable can still hold a surprising amount), then render it useless and recycle the steel."
  },
  {
    id: "Q0028", section: "Core", topic: "Safety", difficulty: "Easy", free: true,
    q: "A large refrigerant leak happens in an enclosed equipment room. Why is this immediately dangerous to anyone inside?",
    options: ["Refrigerant vapor is flammable in any concentration", "Refrigerant vapor is heavier than air and displaces the oxygen you need to breathe", "Refrigerant vapor causes instant frostbite through clothing", "The leak will always trigger an explosion"],
    correct: 1,
    explain: "Most refrigerant vapors are heavier than air, so they pool in low spots and enclosed spaces and push the breathable air out — people have died from oxygen deprivation this way. That's why you evacuate, ventilate, and use a self-contained breathing apparatus (SCBA) for major leaks. Most common refrigerants aren't flammable; suffocation is the killer."
  },
  {
    id: "Q0029", section: "Core", topic: "Safety", difficulty: "Easy", free: true,
    q: "Which gas should be used to pressurize a system for leak testing, and with what safeguards?",
    options: ["Oxygen, with a regulator", "Compressed shop air, straight from the compressor", "Dry nitrogen, with a pressure regulator and a pressure relief valve in the line", "Acetylene, at low pressure"],
    correct: 2,
    explain: "Dry nitrogen is the only safe choice, and it must go through a pressure regulator with a relief valve so you can't over-pressurize the system. Oxygen or compressed air can explode when they contact refrigerant oil under pressure — that combination has killed technicians. This is one of the most-repeated safety questions on the exam."
  },
  {
    id: "Q0030", section: "Core", topic: "Safety", difficulty: "Medium", free: false,
    q: "What happens when R-22 vapor is drawn across an open flame or a glowing hot surface?",
    options: ["Nothing — it is completely inert", "It decomposes into toxic gases such as hydrochloric and hydrofluoric acid vapors", "It burns cleanly like propane", "It instantly freezes the flame source"],
    correct: 1,
    explain: "Heat breaks refrigerant molecules apart into nasty products — hydrochloric acid vapor, hydrofluoric acid vapor, and potentially phosgene gas. That sharp, biting smell near a leak and a flame is your warning. This is why you never braze on a system that still contains refrigerant and why halide torch detectors require ventilation."
  },
  {
    id: "Q0031", section: "Core", topic: "Dehydration & Evacuation", difficulty: "Medium", free: false,
    q: "Why must moisture be removed from a refrigeration system, and what removes it?",
    options: ["Moisture improves oil flow; add it deliberately", "Moisture reacts with refrigerant and oil to form acids and sludge; a deep vacuum (evacuation) boils it out", "Moisture only matters in low-pressure systems; drain it with a valve", "Moisture freezes the compressor windings; remove it with compressed air"],
    correct: 1,
    explain: "Water plus refrigerant plus heat makes acid, which chews up motor windings and metal and creates sludge. Pulling a deep vacuum lowers the boiling point of water so it boils off and gets pumped out. Blowing compressed air through a system would ADD moisture — air always carries water vapor."
  },
  {
    id: "Q0032", section: "Core", topic: "Shipping & Transport", difficulty: "Medium", free: false,
    q: "When shipping a filled refrigerant recovery cylinder, which requirement applies?",
    options: ["Any sturdy box with padding is acceptable", "The cylinder must be DOT-approved and labeled/marked in accordance with DOT hazardous materials regulations", "Cylinders can only be shipped completely full", "Refrigerant cylinders may never be transported on public roads"],
    correct: 1,
    explain: "Transporting refrigerant falls under Department of Transportation (DOT) hazardous materials rules: approved cylinders, proper labels identifying the contents, and secure upright transport. Cylinders should be at no more than 80% capacity — never 'completely full' — and yes, they move on roads every day, legally, when packaged right."
  }
];
