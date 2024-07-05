import React from 'react';
import { OnboardingData } from '@/utils/const';
import { SafeScreen } from '@/components/template';
import { Slider } from '@/components/organisms';

function OnboardingScreen() {
	return (
		<SafeScreen>
			<Slider data={OnboardingData} />
		</SafeScreen>
	);
}

export default OnboardingScreen;
