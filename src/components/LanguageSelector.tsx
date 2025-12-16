import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import { ChevronDown } from 'lucide-react';

const languageOptions: { code: Language; flag: string; name: string }[] = [
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'en', flag: 'En', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
];

interface LanguageSelectorProps {
    isScrolled?: boolean;
}

export const LanguageSelector = ({ isScrolled = false }: LanguageSelectorProps) => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languageOptions.find((l) => l.code === language) || languageOptions[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-all duration-300 font-body text-sm tracking-refined ${isScrolled
                    ? 'text-foreground/80 hover:text-primary hover:bg-secondary'
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                    }`}
                aria-label="Select language"
            >
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="hidden sm:inline uppercase">{currentLanguage.code}</span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-sm shadow-elevated overflow-hidden z-50 min-w-[140px] animate-fade-in">
                    {languageOptions.map((option) => (
                        <button
                            key={option.code}
                            onClick={() => handleSelect(option.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 font-body text-sm ${language === option.code
                                ? 'bg-secondary text-primary'
                                : 'text-foreground/80 hover:bg-secondary/50 hover:text-foreground'
                                }`}
                        >
                            <span className="text-lg">{option.flag}</span>
                            <span>{option.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
