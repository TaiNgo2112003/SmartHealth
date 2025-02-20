const symptoms = [
    "abdomen acute", "abdominal tenderness", "abnormally hard consistency", "abortion",
    "abscess bacterial", "absences finding", "achalasia", "agitation", "air fluid level",
    "alcohol binge episode", "ambidexterity", "angina pectoris", "anorexia", "anosmia",
    "aphagia", "apyrexial", "arthralgia", "ascites", "asterixis", "asthenia", "ataxia",
    "atypia", "aura", "bedridden", "behavior hyperactive", "blackout", "bradycardia",
    "bradykinesia", "breakthrough pain", "breath sounds decreased", "breech presentation",
    "bruit", "burning sensation", "cardiomegaly", "cardiovascular event",
    "cardiovascular finding", "catatonia", "catching breath", "charleyhorse",
    "chest discomfort", "chest tightness", "chill", "cicatrisation", "clonus",
    "clumsiness", "colic abdominal", "consciousness clear", "constipation", "cough",
    "cushingoid facies", "cushingoid habitus", "cyanosis", "cystic lesion", "debilitation",
    "decompensation", "decreased body weight", "diarrhea", "difficulty",
    "difficulty passing urine", "disequilibrium", "distended abdomen", "distress respiratory",
    "disturbed family", "dizziness", "dizzy spells", "drool", "drowsiness", "dysarthria",
    "dysdiadochokinesia", "dysesthesia", "dyspnea", "dyspnea on exertion", "dysuria",
    "ecchymosis", "egophony", "emphysematous change", "energy increased", "enuresis",
    "erythema", "estrogen use", "exhaustion", "extrapyramidal sign", "extreme exhaustion",
    "facial paresis", "fall", "fatigability", "fatigue", "fear of falling", "fecaluria",
    "feces in rectum", "feeling hopeless", "feeling strange", "feeling suicidal",
    "feels hot/feverish", "fever", "flare", "flatulence", "food intolerance",
    "formication", "frail", "gasping for breath", "general discomfort",
    "general unsteadiness", "gravida 0", "green sputum", "groggy", "guaiac positive",
    "gurgle", "haemoptysis", "haemorrhage", "hallucinations auditory",
    "hallucinations visual", "has religious belief", "headache", "heartburn",
    "hematocrit decreased", "hematuria", "heme positive", "hemianopsia homonymous",
    "hemiplegia", "hemodynamically stable", "hepatosplenomegaly", "hirsutism",
    "history of - blackout", "hoard", "hoarseness", "homelessness", "hot flush",
    "hydropneumothorax", "hypercapnia", "hyperemesis", "hyperhidrosis disorder",
    "hyperkalemia", "hypersomnia", "hypersomnolence", "hypertonicity",
    "hypoalbuminemia", "hypokinesia", "hypometabolism", "hyponatremia", "hypotension",
    "hypothermia, natural", "hypotonic", "hypoxemia", "immobile", "impaired cognition",
    "intermenstrual heavy bleeding", "intoxication", "irritable mood",
    "jugular venous distention", "labored breathing", "large-for-dates fetus",
    "left atrial hypertrophy", "lesion", "lethargy", "lightheadedness", "lip smacking",
    "loose associations", "low back pain", "lung nodule", "malaise", "mass in breast",
    "mass of body structure", "mediastinal shift", "mental status changes",
    "metastatic lesion", "moan", "monoclonal", "mood depressed", "moody",
    "motor retardation", "Murphy's sign", "muscle hypotonia", "muscle twitch",
    "myalgia", "mydriasis", "myoclonus", "nasal flaring", "nausea", "neck stiffness",
    "neologism", "night sweat", "nightmare", "no status change",
    "non-productive cough", "nonsmoker", "numbness", "numbness of hand",
    "oliguria", "orthopnea", "orthostasis", "out of breath", "overweight", "pain",
    "pain abdominal", "pain back", "pain chest", "pain neck", "painful swallowing",
    "pallor", "palpitation", "panic", "pansystolic murmur", "para 1", "para 2",
    "paralyse", "paraparesis", "paresis", "paresthesia", "passed stones",
    "patient non compliance", "pericardial friction rub", "phonophobia",
    "photophobia", "pin-point pupils", "pleuritic pain", "pneumatouria",
    "polydypsia", "polymyalgia", "polyuria", "posturing",
    "presence of q wave", "pressure chest", "previous pregnancies 2",
    "primigravida", "prodrome", "productive cough", "projectile vomiting",
    "prostatism", "proteinemia", "pruritus", "pulsus paradoxus", "pustule",
    "qt interval prolonged", "r wave feature", "rale", "rambling speech",
    "redness", "renal angle tenderness", "retropulsion", "rhonchus",
    "rolling of eyes", "room spinning", "satiety early", "scar tissue",
    "scleral icterus", "sedentary", "seizure", "sensory discomfort",
    "shooting pain", "shortness of breath", "side pain", "sinus rhythm",
    "sleeplessness", "sleepy", "slowing of urinary stream", "sneeze",
    "sniffle", "snore", "snuffle", "sore to touch", "spasm", "speech slurred",
    "spontaneous rupture of membranes", "sputum purulent", "st segment depression",
    "st segment elevation", "Stahli's line", "stiffness", "stool color yellow",
    "stridor", "suicidal", "superimposition", "sweat", "sweating increased",
    "swelling", "symptom aggravating factors", "syncope", "systolic ejection murmur",
    "systolic murmur", "t wave inverted", "tachypnea", "terrify", "thicken",
    "throat sore", "tinnitus", "tired", "titubation", "tonic seizures",
    "transaminitis", "tremor", "tremor resting", "tumor cell invasion",
    "unable to concentrate", "unconscious state", "uncoordination", "underweight",
    "unhappy", "unresponsiveness", "unsteady gait", "unwell",
    "urge incontinence", "urgency of micturition", "urinary hesitation",
    "verbal auditory hallucinations", "vertigo", "vision blurred", "vomiting",
    "weepiness", "weight gain", "welt", "wheelchair bound", "wheezing",
    "withdraw", "worry", "yellow sputum"
];

function showSuggestions(index) {
    const input = document.getElementById(`symptomInput${index}`).value.toLowerCase();
    const suggestionsList = document.getElementById(`suggestionsList${index}`);
    suggestionsList.innerHTML = '';

    if (input) {
        const suggestions = symptoms.filter(symptom => symptom.startsWith(input));

        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.onclick = () => {
                document.getElementById(`symptomInput${index}`).value = suggestion;
                suggestionsList.innerHTML = '';
            };
            suggestionsList.appendChild(li);
        });
    }
}


function toggleMap(radio) {
    const mapContainer = document.getElementById('map');
    if (radio.value === 'yes') {
        mapContainer.style.display = 'block';
        initializeMap();
    } else {
        mapContainer.style.display = 'none';
    }
}

function initializeMap() {
    // Sử dụng vị trí giả lập cho ví dụ này
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
        L.marker([lat, lon]).addTo(map).bindPopup('Bạn đang ở đây!').openPopup();
    }, function() {
        alert("Không thể truy cập vị trí của bạn.");
    });
}


function showReasonPopup() {
    alert('Giải thích lý do bạn chọn giới tính là thông tin quan trọng để giúp chẩn đoán chính xác hơn.');
}

