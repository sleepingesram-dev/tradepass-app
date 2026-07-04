// TradePass question bank — TYPE II section (high-pressure appliances).
// ALL QUESTIONS ARE ORIGINAL. See questions-core.js header for field docs.

const QUESTIONS_TYPE2 = [
  {
    id: "Q0201", section: "Type II", topic: "Definitions", difficulty: "Easy", free: true,
    q: "A HIGH-PRESSURE appliance uses a refrigerant with a boiling point in what range at atmospheric pressure?",
    options: ["Above 10°C (50°F)", "Between -50°C and 10°C (-58°F and 50°F)", "Below -50°C (-58°F)", "Exactly 0°C (32°F)"],
    correct: 1,
    explain: "High-pressure refrigerants boil between -50°C and 10°C at atmospheric pressure — that covers R-22, R-134a, R-410A, and R-407C. Boiling below -50°C makes it a VERY-high-pressure refrigerant (R-13, R-503), and boiling above 10°C makes it low-pressure (R-11, R-123), which is Type III territory."
  },
  {
    id: "Q0202", section: "Type II", topic: "Definitions", difficulty: "Medium", free: false,
    q: "Which refrigerants are classified as VERY-high-pressure?",
    options: ["R-11 and R-123", "R-22 and R-410A", "R-13 and R-503", "R-134a and R-407C"],
    correct: 2,
    explain: "R-13 and R-503 boil below -50°C at atmospheric pressure, putting them in the very-high-pressure class used in ultra-low-temperature work. R-22 and R-410A are ordinary high-pressure refrigerants, and R-11/R-123 are the low-pressure chiller refrigerants."
  },
  {
    id: "Q0203", section: "Type II", topic: "Evacuation Levels", difficulty: "Medium", free: true,
    q: "Using recovery equipment made after November 15, 1993, to what level must you evacuate an R-22 appliance holding LESS than 200 pounds before opening it?",
    options: ["0 inches Hg (atmospheric pressure)", "10 inches Hg vacuum", "15 inches Hg vacuum", "25 mm Hg absolute"],
    correct: 0,
    explain: "Small R-22 systems (under 200 pounds) only need to be brought down to atmospheric pressure — 0 inches Hg gauge. Go to 200 pounds or more of R-22 and the requirement deepens to 10 inches Hg vacuum. The 25 mm figure belongs to low-pressure (Type III) equipment."
  },
  {
    id: "Q0204", section: "Type II", topic: "Evacuation Levels", difficulty: "Medium", free: false,
    q: "An R-22 system contains 300 pounds of refrigerant. Using current recovery equipment, what evacuation level is required before disposal or opening?",
    options: ["0 inches Hg", "4 inches Hg vacuum", "10 inches Hg vacuum", "15 inches Hg vacuum"],
    correct: 2,
    explain: "R-22 appliances with 200 pounds or more must be pulled to 10 inches Hg vacuum. The 15-inch requirement is for OTHER high-pressure refrigerants (like R-410A) at 200 pounds or more — R-22 gets a slightly easier target because it's harder to condense."
  },
  {
    id: "Q0205", section: "Type II", topic: "Evacuation Levels", difficulty: "Hard", free: false,
    q: "For high-pressure refrigerants OTHER than R-22 (such as R-410A), what are the required evacuation levels with current equipment?",
    options: ["0 inches Hg regardless of charge size", "10 inches Hg under 200 lbs; 15 inches Hg at 200 lbs or more", "15 inches Hg under 200 lbs; 25 inches Hg at 200 lbs or more", "4 inches Hg regardless of charge size"],
    correct: 1,
    explain: "Non-R-22 high-pressure systems: 10 inches Hg vacuum below 200 pounds, 15 inches Hg at 200 pounds and above. Compare with R-22's easier levels (0 and 10 inches). The 4-inch level belongs to small appliances — different rule set entirely."
  },
  {
    id: "Q0206", section: "Type II", topic: "Evacuation Levels", difficulty: "Hard", free: false,
    q: "To what level must a VERY-high-pressure appliance (R-13, R-503) be evacuated?",
    options: ["0 inches Hg (atmospheric), regardless of charge size", "10 inches Hg vacuum", "15 inches Hg vacuum", "25 mm Hg absolute"],
    correct: 0,
    explain: "Very-high-pressure refrigerants only require evacuation to atmospheric pressure (0 inches Hg). Their extreme pressures make deep vacuum recovery impractical, so the rule stops at zero gauge. This is the easy-to-forget corner of the evacuation table."
  },
  {
    id: "Q0207", section: "Type II", topic: "Evacuation Levels", difficulty: "Medium", free: true,
    q: "You're recovering from a system with a known bad leak. Pulling the required vacuum would drag air and moisture in through the leak. What should you do?",
    options: ["Pull the full vacuum anyway — rules are rules", "Evacuate the system to 0 psig (atmospheric pressure) instead", "Skip recovery entirely since the system leaks", "Pressurize the system with oxygen to find the leak first"],
    correct: 1,
    explain: "When leaks make the standard vacuum level impossible without contaminating the system, the EPA allows evacuating to atmospheric pressure (0 psig) instead. Skipping recovery is venting — illegal. And oxygen near refrigerant oil is an explosion hazard, never a leak-finding tool."
  },
  {
    id: "Q0208", section: "Type II", topic: "Recovery Techniques", difficulty: "Easy", free: true,
    q: "What is the fastest way to remove the bulk of the charge from a large high-pressure system?",
    options: ["Recover vapor only, slowly", "Recover liquid refrigerant first, then finish with vapor", "Heat the whole system with torches", "Open the system and let it equalize"],
    correct: 1,
    explain: "Liquid recovery moves pounds of refrigerant many times faster than vapor recovery — a pound of liquid occupies a tiny fraction of the space of a pound of vapor. Start at a liquid port (liquid line or king valve), then switch to vapor to finish the job."
  },
  {
    id: "Q0209", section: "Type II", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "From which point on the system should liquid refrigerant be removed during recovery?",
    options: ["The compressor discharge line", "The suction line at the evaporator", "The liquid line or the king valve on the receiver outlet", "The condenser fan housing"],
    correct: 2,
    explain: "Liquid lives between the condenser/receiver and the metering device, so the liquid line — or the king valve on the receiver — is where you tap it. The suction line carries vapor; drawing 'liquid' there means the system is flooding, which is a malfunction, not a technique."
  },
  {
    id: "Q0210", section: "Type II", topic: "Recovery Techniques", difficulty: "Medium", free: false,
    q: "Recovery into your cylinder has slowed to a crawl because the cylinder has warmed up and its pressure has risen. What speeds the transfer back up?",
    options: ["Cooling the recovery cylinder (ice bath or refrigeration)", "Heating the recovery cylinder", "Venting a little from the cylinder to drop its pressure", "Shaking the cylinder"],
    correct: 0,
    explain: "Refrigerant flows from higher pressure to lower pressure. Cooling the cylinder condenses vapor inside it and drops its pressure, restoring flow. Heating does the opposite, and venting to relieve pressure is illegal. This is the practical physics the exam loves."
  },
  {
    id: "Q0211", section: "Type II", topic: "Recovery Techniques", difficulty: "Medium", free: true,
    q: "After evacuating a system to the required level, you watch the gauge and the pressure climbs again. What does this indicate?",
    options: ["Refrigerant is boiling out of the compressor oil (or the system is leaking) — recovery isn't finished", "The system is now overcharged", "Normal behavior — vacuum always decays instantly", "The recovery cylinder is empty"],
    correct: 0,
    explain: "A rising pressure after evacuation means refrigerant dissolved in the oil is still boiling off — or air is sneaking in through a leak. Either way, resume recovery and confirm the system HOLDS the required vacuum before opening it. A solid vacuum that holds is the actual finish line."
  },
  {
    id: "Q0212", section: "Type II", topic: "Leak Repair", difficulty: "Medium", free: true,
    q: "For appliances with 50 or more pounds of ozone-depleting refrigerant, what annual leak rates trigger mandatory repair?",
    options: ["10% comfort cooling, 20% commercial refrigeration, 30% industrial process refrigeration", "35% for all equipment types", "5% for all equipment types", "50% comfort cooling, 60% commercial refrigeration"],
    correct: 0,
    explain: "The current trigger rates: 10% for comfort cooling, 20% for commercial refrigeration, 30% for industrial process refrigeration — calculated as a percentage of the full charge leaked per year. The old 35%/15% numbers were tightened in 2019, so beware of outdated study materials."
  },
  {
    id: "Q0213", section: "Type II", topic: "Leak Repair", difficulty: "Medium", free: false,
    q: "Once a leak above the threshold rate is discovered in a 50+ pound ODS appliance, the owner generally must have it repaired within how many days?",
    options: ["24 hours", "30 days", "90 days", "One year"],
    correct: 1,
    explain: "30 days to repair is the general rule (extensions exist for industrial shutdown constraints). The one-year figure is the deadline for COMPLETING a retrofit or retirement plan if the owner goes that route instead of repairing — a classic answer-swap trap."
  },
  {
    id: "Q0214", section: "Type II", topic: "Leak Repair", difficulty: "Hard", free: false,
    q: "Instead of repairing a chronically leaking appliance, the owner may develop a retrofit or retirement plan. What are the deadlines?",
    options: ["Plan within 7 days, complete within 60 days", "Plan within 30 days, complete within 1 year", "Plan within 90 days, complete within 5 years", "No deadlines apply to retrofit plans"],
    correct: 1,
    explain: "The plan must be developed (and kept at the site) within 30 days, and the retrofit or retirement must be finished within one year. It's an alternative to repair, not an escape hatch — the clock runs either way."
  },
  {
    id: "Q0215", section: "Type II", topic: "Leak Repair", difficulty: "Hard", free: false,
    q: "After repairing a leak on a 50+ pound appliance, what testing is required to confirm the fix?",
    options: ["No testing — a repair invoice is enough", "An initial verification test before adding refrigerant, and a follow-up verification test once the system is running", "Only a visual inspection after 30 days", "A complete refrigerant chemical analysis"],
    correct: 1,
    explain: "Two tests: an initial verification test (like a pressure or vacuum test) before the full charge goes back in, then a follow-up verification test with the system operating at normal conditions. The pair proves the leak is actually fixed, not just painted over."
  },
  {
    id: "Q0216", section: "Type II", topic: "Leak Repair", difficulty: "Medium", free: false,
    q: "How is an appliance's leak rate expressed under EPA rules?",
    options: ["Ounces lost per month", "The percentage of the full charge lost per 12-month period (annualized)", "Pounds lost per service visit", "Parts per million in the equipment room air"],
    correct: 1,
    explain: "Leak rate = percentage of the appliance's full charge lost over a rolling 12-month period. If a 100-pound system needed 20 pounds added over the past year, that's a 20% annual leak rate — at the trigger point for commercial refrigeration."
  },
  {
    id: "Q0217", section: "Type II", topic: "Leak Detection", difficulty: "Easy", free: true,
    q: "What is the standard two-step approach for finding a refrigerant leak on a high-pressure system?",
    options: ["Listen carefully, then feel for cold spots", "Use an electronic or ultrasonic detector to find the general area, then pinpoint with soap bubbles", "Add more refrigerant and wait", "Pressurize with oxygen and watch for frost"],
    correct: 1,
    explain: "Electronic and ultrasonic detectors sniff out the neighborhood of the leak; a soap-bubble solution then pinpoints the exact spot. Adding refrigerant to a leaking system without repair wastes product and can violate leak-repair rules. Oxygen is never used — explosion risk with oil."
  },
  {
    id: "Q0218", section: "Type II", topic: "Pressure Testing", difficulty: "Medium", free: true,
    q: "When pressure-testing a system with dry nitrogen, what pressure must you never exceed?",
    options: ["The nameplate's low-side test pressure", "1,000 psig on any system", "Whatever the nitrogen cylinder can deliver", "Double the high-side design pressure"],
    correct: 0,
    explain: "The equipment nameplate lists design test pressures — never exceed the LOW-side test pressure, because the low side is the weakest link and the whole system sees your nitrogen. A nitrogen cylinder holds 2,000+ psig, which is why the regulator and relief valve aren't optional."
  },
  {
    id: "Q0219", section: "Type II", topic: "System Performance", difficulty: "Medium", free: false,
    q: "Air (a non-condensable gas) has gotten into a high-pressure system. Where does it collect and what symptom does it cause?",
    options: ["In the evaporator, causing low suction pressure", "In the condenser, causing higher-than-normal head pressure", "In the oil, causing foaming only", "It dissolves harmlessly into the refrigerant"],
    correct: 1,
    explain: "Air can't condense at system temperatures, so it stacks up in the condenser, taking up condensing surface and driving head pressure above what the refrigerant's pressure-temperature relationship predicts. High head pressure means wasted energy and stressed equipment — the fix is recovery, evacuation, and recharge."
  },
  {
    id: "Q0220", section: "Type II", topic: "Reclaim & Resale", difficulty: "Medium", free: false,
    q: "You recovered 40 pounds of R-410A from a customer's decommissioned rooftop unit. A different customer wants to buy it. What must happen first?",
    options: ["Nothing — a sale between customers is private", "Filter it through one filter-drier", "It must be reclaimed to AHRI 700 purity by a certified reclaimer before changing ownership", "It must be mixed with virgin refrigerant 50/50"],
    correct: 2,
    explain: "Change of ownership triggers the reclamation requirement: processing to AHRI 700 purity with chemical analysis to prove it. A single filter pass is recycling — good enough only for reuse in the SAME owner's equipment. Selling un-reclaimed used refrigerant risks the buyer's equipment and your certification."
  },
  {
    id: "Q0221", section: "Type II", topic: "Equipment", difficulty: "Medium", free: false,
    q: "Recovery machines built after November 15, 1993 for high-pressure work must meet which requirements?",
    options: ["Painted safety orange and weigh under 50 lbs", "Certified by an EPA-approved testing lab and equipped with low-loss fittings", "Capable of recovering 100% of any charge", "Built with a sight glass on every port"],
    correct: 1,
    explain: "The two legal must-haves: certification by an EPA-approved testing organization (per AHRI 740) and low-loss fittings that minimize release on disconnect. No machine recovers 100% — some refrigerant always remains dissolved in oil — and the rules say nothing about paint color."
  },
  {
    id: "Q0222", section: "Type II", topic: "Recovery Techniques", difficulty: "Hard", free: false,
    q: "What is the 'push-pull' recovery method used for?",
    options: ["Removing air from a running system", "Transferring large volumes of LIQUID refrigerant by pulling vapor from the recovery cylinder and pushing it into the appliance, forcing liquid out into the cylinder", "Recovering vapor twice as fast with two machines", "Testing compressor valves"],
    correct: 1,
    explain: "In push-pull, the recovery machine pulls vapor off the top of the recovery cylinder and discharges it into the appliance, and that pressure pushes liquid refrigerant out of the appliance into the cylinder. It shines on systems holding large liquid volumes. It moves liquid — it does nothing about air."
  },
  {
    id: "Q0223", section: "Type II", topic: "Safety", difficulty: "Medium", free: true,
    q: "Why must you avoid skin contact with the oil from a hermetic compressor that suffered an electrical burnout?",
    options: ["The oil is radioactive", "Burnout oil contains acids formed when the motor burned — it can burn skin", "The oil is always boiling hot days later", "Oil stains are hard to wash out"],
    correct: 1,
    explain: "A motor burnout cooks the refrigerant and oil into acidic sludge. That acid attacks skin just like it attacks motor windings — wear gloves and eye protection when draining or handling it. Temperature isn't the issue after the fact; chemistry is."
  },
  {
    id: "Q0224", section: "Type II", topic: "Service Practices", difficulty: "Medium", free: false,
    q: "After replacing a compressor that failed from a severe burnout, what should be installed to protect the new compressor?",
    options: ["A larger condenser fan", "A suction-line filter-drier (and a new liquid-line drier) to catch acid and debris", "A second thermostat", "Nothing — the new compressor cleans the system itself"],
    correct: 1,
    explain: "Burnout leaves acid and carbon throughout the system. A suction-line filter-drier catches contaminants before they enter the new compressor, and the liquid-line drier gets replaced as a matter of course. Check and replace the suction drier as pressure drop develops. New compressors don't clean systems; they become victims of dirty ones."
  },
  {
    id: "Q0225", section: "Type II", topic: "Dehydration & Evacuation", difficulty: "Medium", free: false,
    q: "After repairs, you evacuate a system for dehydration. What reading indicates the system is properly dehydrated?",
    options: ["The compound gauge reads 25 psig", "A micron gauge holds a deep vacuum (around 500 microns) with the pump isolated", "The sight glass shows bubbles", "The nitrogen holds for one hour"],
    correct: 1,
    explain: "Dehydration is verified with a micron gauge: pull down to roughly 500 microns, isolate the pump, and confirm the vacuum holds. If it creeps up, there's still moisture boiling off or a leak. A compound gauge is far too coarse to prove dryness, and nitrogen tests find leaks, not moisture."
  },
  {
    id: "Q0226", section: "Type II", topic: "Charging", difficulty: "Medium", free: false,
    q: "How should a zeotropic blend like R-407C be charged into a system?",
    options: ["As vapor from the top of the cylinder", "As liquid (from the cylinder's liquid port), throttled into the system to avoid slugging", "Either way — it makes no difference", "Only through the discharge line"],
    correct: 1,
    explain: "Zeotropic blends must leave the cylinder as liquid so the mixture stays in its designed proportions — vapor charging fractionates the blend. Throttle the liquid carefully into the suction side (or charge into the liquid line with the system off) so liquid never slugs the compressor."
  },
  {
    id: "Q0227", section: "Type II", topic: "Definitions", difficulty: "Medium", free: true,
    q: "Which of these does Type II certification cover?",
    options: ["Household refrigerators", "Motor vehicle air conditioning", "Split-system air conditioners, heat pumps, and supermarket rack systems using high-pressure refrigerant", "Centrifugal chillers using R-123"],
    correct: 2,
    explain: "Type II covers high-pressure and very-high-pressure appliances that aren't small appliances or motor vehicle A/C — splits, packaged rooftop units, heat pumps, market racks. Household refrigerators are Type I, R-123 chillers are Type III, and car A/C falls under Section 609, a separate certification."
  },
  {
    id: "Q0228", section: "Type II", topic: "Records", difficulty: "Medium", free: false,
    q: "Owners of appliances holding 50 or more pounds of refrigerant must keep what records?",
    options: ["No records are required", "Records of refrigerant purchased and added during service, and leak inspections/servicing history", "Only the original purchase receipt", "Daily temperature logs"],
    correct: 1,
    explain: "Servicing records — especially the amount of refrigerant added, which is how leak rates get calculated — plus leak inspection records must be maintained. If refrigerant additions aren't documented, there's no way to prove the appliance is under its leak-rate threshold."
  },
  {
    id: "Q0229", section: "Type II", topic: "Safety", difficulty: "Easy", free: true,
    q: "Why should you never energize a system's compressor while the system is under a deep vacuum?",
    options: ["It wastes electricity", "The motor windings can arc and be destroyed — a vacuum is a poor electrical insulator", "The compressor will run backwards", "The vacuum gauge will break"],
    correct: 1,
    explain: "In a deep vacuum there are too few gas molecules to resist electrical discharge, so energized motor windings can arc across the gap and burn out instantly. Complete your evacuation, break the vacuum with refrigerant charge, and only then run the compressor."
  },
  {
    id: "Q0230", section: "Type II", topic: "Cylinders", difficulty: "Medium", free: false,
    q: "What must you check about a recovery cylinder before recovering R-410A into it?",
    options: ["That it is painted white", "That it is rated for R-410A's higher pressure and dedicated to the correct refrigerant, with a current test date", "That it is completely full already", "That it once held R-22, which is close enough"],
    correct: 1,
    explain: "R-410A runs roughly 50–60% higher pressure than R-22, so the cylinder must carry a pressure rating suitable for it (DOT-rated for the service), be within its hydrostatic test date, and be dedicated to R-410A to prevent mixing. Putting R-410A into a cylinder holding R-22 residue creates an unreclaimable mixture."
  }
];
