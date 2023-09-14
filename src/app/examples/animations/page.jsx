
import AnimatedText from "@/componentsAnimations/AnimatedText";
import { DraggableBox, HoverableBox } from "@/componentsAnimations/AnimatedList";
import StaggeredAnimation from '@/componentsAnimations/Staggered'
import KeyframeAnimation from '@/componentsAnimations/KeyframeAnimation'
import Spinner from '@/componentsAnimations/Spinner'
import SpringAnimation from '@/componentsAnimations/SpringAnimations'


const Page = () => (
    <div className="flex flex-col gap-4">
        <AnimatedText />
        <DraggableBox />
        <HoverableBox />
        <StaggeredAnimation />
        <KeyframeAnimation />
        <Spinner />
        <SpringAnimation />
     </div>
)

export default Page;