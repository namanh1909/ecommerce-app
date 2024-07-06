import { ProfileResponse } from 'api/interface/authenticate';
import { updateInformation } from 'api/modules/api-app/authenticate';
import { TypeUpdateInformation } from 'api/modules/request-app/authenticate';
import { userInfoActions } from 'app-redux/slices/userInfoSlice';
import { store } from 'app-redux/store';
import { AlertMessage } from 'components/base';
import ModalizeManager from 'components/base/modal/ModalizeManager';



interface ApiResponse {
    status: number;
}

const ProfileService = {
    modalize: ModalizeManager(),

    handleDismissModal: function () {
        this.modalize.dismiss('fillProfile');
    },

    updateProfile: async function (profile: TypeUpdateInformation) {
        const response: ApiResponse = await updateInformation(profile);
        if (response.status === 200) {
            this.handleDismissModal();
            store.dispatch(userInfoActions.getUserInfoRequest(store.getState().userInfo?.token));
            AlertMessage('Update Successful');
        } else {
            this.handleDismissModal();
            AlertMessage('Update Failure');
        }
    },

    updateProfileFirstTime: async function (profile: TypeUpdateInformation) {
        const response: ApiResponse = await updateInformation(profile);
        if (response.status === 200) {
            store.dispatch(userInfoActions.getUserInfoRequest(store.getState().userInfo?.token));
            store.dispatch(userInfoActions.updateStatusUpdateProfile(true));
        } else {
            this.handleDismissModal();
            AlertMessage('Update Failure');
        }
    }
};

export default ProfileService;
