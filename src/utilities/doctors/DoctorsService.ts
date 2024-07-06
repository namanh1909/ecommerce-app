import { useAppDispatch, useAppSelector } from 'app-redux/hooks';
import { doctorsActions } from 'app-redux/slices/doctorsSlice';
import { CommonStatus } from 'app-redux/slices/types';
import { navigate } from 'navigation/NavigationService';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';

const DoctorsService = {
    loadMoreDoctors: () => {
        const dispatch = useAppDispatch();
        const loadingDoctors = useAppSelector((state: any) => state.doctors.status);
        const state = useAppSelector((state: any) => state);

        if (loadingDoctors !== CommonStatus.LOADING_MORE) {
            dispatch(doctorsActions.loadMoreDoctorsRequest({ nextPage: state.doctors.page + 1 }));
        }
    },

    refreshDoctors: () => {
        const dispatch = useAppDispatch();
        dispatch(doctorsActions.getDoctorsRequest());
    },

    navigateToDetail: (doctor: any) => {
        navigate(TAB_NAVIGATION_ROOT.DOCTOR_ROUTER.BOOK_APPOINTMENT, { item: doctor });
    }
};

export default DoctorsService;
