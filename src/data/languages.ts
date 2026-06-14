export const languages = [
    { id: "urdu", name: "Urdu" },
    { id: "english", name: "English" },
    { id: "arabic", name: "Arabic" },
    { id: "hindi", name: "Hindi" },
    { id: "indonesian", name: "Indonesian" },
    { id: "sindhi", name: "Sindhi" },
    { id: "turkish", name: "Turkish" },
    { id: "chinese", name: "Chinese" },
    { id: "italian", name: "Italian" },
    { id: "filipino", name: "Filipino" },
    { id: "persian", name: "Persian" },
    { id: "spanish", name: "Spanish" },
    { id: "pashto", name: "Pashto" },
    { id: "portuguese", name: "Portuguese" },
    { id: "french", name: "French" },
    { id: "bengali", name: "Bengali" },
    { id: "korean", name: "Korean" },
    { id: "russian", name: "Russian" },
    { id: "german", name: "German" },
    { id: "balochi", name: "Balochi" },
    { id: "romanian", name: "Romanian" },
    { id: "thai", name: "Thai" },
    { id: "swahili", name: "Swahili" },
    { id: "punjabi", name: "Punjabi" },
    { id: "dutch", name: "Dutch" },
    { id: "greek", name: "Greek" },
    { id: "vietnamese", name: "Vietnamese" },
    { id: "japanese", name: "Japanese" },
    { id: "swedish", name: "Swedish" },
    { id: "azerbaijani", name: "Azerbaijani" }
];

export const coreLanguages = ["english", "urdu", "arabic"];

// Generate sensible pairs (avoiding 30x30 = 900 if too many are low value, 
// but we will generate pairings with English and Urdu at minimum).
export function generateLanguagePairs() {
    const pairs: { source: string, target: string }[] = [];
    
    // Everyone to English and Urdu
    for (const lang of languages) {
        if (lang.id !== "english") {
            pairs.push({ source: lang.id, target: "english" });
            pairs.push({ source: "english", target: lang.id });
        }
        if (lang.id !== "urdu") {
            pairs.push({ source: lang.id, target: "urdu" });
            pairs.push({ source: "urdu", target: lang.id });
        }
        if (lang.id !== "arabic" && lang.id !== "english" && lang.id !== "urdu") {
             pairs.push({ source: lang.id, target: "arabic" });
             pairs.push({ source: "arabic", target: lang.id });
        }
    }
    
    // Deduplicate pairs just in case
    const uniquePairs = Array.from(new Set(pairs.map(p => `${p.source}-${p.target}`)))
        .map(str => {
            const [source, target] = str.split('-');
            return { source, target };
        });

    return uniquePairs;
}
