import { industries } from "@/data/industries";

const OnboardingPage = ()=>{
    return (
        <main>
            <Onboadringform industries={industries}/>
        </main>
    );
};

export default OnboardingPage