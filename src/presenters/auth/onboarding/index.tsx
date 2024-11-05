import React from "react";
import { OnboardingData } from "@/utils/const";
import { Slider } from "@/components/organisms";

function OnboardingScreen() {
  return <Slider data={OnboardingData} />;
}

export default OnboardingScreen;
