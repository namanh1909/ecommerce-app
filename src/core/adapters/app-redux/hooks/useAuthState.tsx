import { authActions, AuthSelectors } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

export const useAuthState = () => {
  const dispatch = useDispatch();

  const resetAuthState = useCallback(() => {
    dispatch(authActions.resetState());
  }, [dispatch]);

  const errorOTP = useSelector(AuthSelectors.getOTPError);
  const isProcessing = useSelector(AuthSelectors.isProcessing);

  const onBackPress = useCallback(() => {
    dispatch(authActions.resetState());
  }, [dispatch]);

  const handleEmailChange = useCallback(
    (email: string) => {
      dispatch(authActions.validateEmailRequest({ email }));
    },
    [dispatch]
  );

  const handleOTPChange = useCallback(
    (otp: string) => {
      dispatch(authActions.validateOTPRequest({ otp }));
    },
    [dispatch]
  );

  const navigateToOTP = useCallback(() => {
    dispatch(authActions.submitEmail());
  }, [dispatch]);

  const onSubmitOTP = useCallback(() => {
    dispatch(authActions.submitOTPCode());
  }, [dispatch]);

  return {
    resetAuthState,
    errorOTP,
    isProcessing,
    onBackPress,
    handleEmailChange,
    navigateToOTP,
    onSubmitOTP,
    handleOTPChange,
  };
};
