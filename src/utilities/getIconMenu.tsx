import {
    CardiologyIcon,
    DentisIcon,
    GeneralIcon,
    HerbalIcon,
    IntestineIcon,
    MoreIcon,
    MoreIconMenu,
    OtologyIcon,
    PediatricIcon,
} from 'assets/icon';

export const getIcon: any = (name: string) => {
    switch (name) {
        case 'General':
            return <GeneralIcon />;
        case 'Dentis':
            return <DentisIcon />;
        case 'Otology':
            return <OtologyIcon />;
        case 'Cardiology':
            return <CardiologyIcon />;
        case 'Intestine':
            return <IntestineIcon />;
        case 'Pediatric':
            return <PediatricIcon />;
        case 'Herbal':
            return <HerbalIcon />;
        case 'More':
            return <MoreIconMenu />;
        default:
            return;
    }
};
