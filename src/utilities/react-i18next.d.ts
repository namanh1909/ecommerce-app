import 'react-i18next';
import { Resource } from './i18next';

type Language = 'en' | 'vi';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: Record<Language, Resource>;
    }
}
