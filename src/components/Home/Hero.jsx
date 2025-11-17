import { Canvas } from '@react-three/fiber';
import { Planet } from './planet/Planet';
import { Environment, Float, Lightformer } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import AnimatedHeaderSection from '../common/AnimatedHeaderSection';

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 })
    const Text = `I build websites that don’t just look 
                        good — they perform, convert, and 
                        make brands unforgettable.`;


    return (
        <section id='home' className='min-h-screen flex flex-col justify-end'>
            <AnimatedHeaderSection subTitle={'404 No Bugs Found'} title={"Abhijeet kumar"} text={Text} textColor={"text-black"}/>

            <figure className='absolute inset-0 -z-50' style={{ width: "100vw", height: '100vh' }}>

                <Canvas shadows camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}>
                    <ambientLight intensity={0.7} />
                    <Float speed={1}>
                        <Planet scale={isMobile ? 0.7 : 1} />
                    </Float>
                    <Environment resolution={256}>
                        <group rotation={[-Math.PI / 3, 4, 1]}>
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[0, 5, -9]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[0, 3, 1]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[-5, -1, -1]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[10, 1, 0]}
                                scale={16}
                            />

                        </group>
                    </Environment>
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero