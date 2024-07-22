import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LayoutAnimation } from "react-native";
import { useTranslation } from "react-i18next";
import { registerSchema } from "@/utilities/yup/yupSchema";
import { DEFAULT_FORM_LOGIN } from "@/utilities/yup/defaultForm";
import { AuthSelectors, authActions } from "@/core/adapters/app-redux/slices/authSlice";
import { useAppDispatch } from "@/core/adapters/app-redux/hooks";
import { useSelector } from "react-redux";

const useAuth = () => {
    const [isSignInState, setisSignInState] = useState<boolean>(true);
    const { t } = useTranslation("auth");
    const isProcessing = useSelector(AuthSelectors.isProcessing);
    const dispatch = useAppDispatch();
    const form = useForm({
        mode: "onChange",
        defaultValues: DEFAULT_FORM_LOGIN,
        resolver: yupResolver(registerSchema(!isSignInState)),
        reValidateMode: "onChange",
        criteriaMode: "firstError",
    });

    const {
        formState: { isValid },
        handleSubmit,
        setValue,
        reset,
    } = form;

    useEffect(() => {
        reset();
    }, [isSignInState]);

    const textValues = {
        signIn: t("header.signIn"),
        signUp: t("header.signUp"),
        noHasAccount: t("label.noHasAccount"),
        hasAccount: t("label.hasAccount"),
    };

    const featureText = isSignInState ? textValues.signIn : textValues.signUp;
    const featureDiffText = isSignInState ? textValues.signUp : textValues.signIn;
    const alreadyHasAccount = isSignInState
        ? textValues.hasAccount
        : textValues.noHasAccount;

    function onChangeFeature() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setisSignInState((prev) => !prev);
    };

    const onSubmit = handleSubmit((data) => {
        isSignInState ? dispatch(authActions.loginRequest(data)) : dispatch(authActions.registerRequest(data))
    });

    return {
        isSignInState,
        form,
        featureText,
        featureDiffText,
        alreadyHasAccount,
        onChangeFeature,
        onSubmit,
        isProcessing,
        t,
    };
};

export default useAuth;