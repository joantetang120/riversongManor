import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'riversong-language';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Try to get saved language from localStorage
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && (saved === 'fr' || saved === 'en' || saved === 'de')) {
                return saved as Language;
            }
        }
        return 'fr'; // Default to French
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
        // Update document language attribute
        document.documentElement.lang = lang;
    };

    useEffect(() => {
        // Set initial document language
        document.documentElement.lang = language;
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Helper hook to get translated text
export const useTranslation = () => {
    const { language, t } = useLanguage();

    // Helper function to get translated value
    const getText = (obj: { fr: string; en: string; de: string }) => {
        return obj[language];
    };

    return { language, t, getText };
};
