import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
    const imageDivRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.to(imageDivRef.current,{
            scrollTrigger:{
                trigger: imageDivRef.current,
                markers: true,
                start : "top 36%",
                end : "top -70%",
                pin : true,
            }
        })
    })
    return (
        <div>
            <div className="section1">
                <div ref={imageDivRef} className=" absolute top-40 left-115 h-80 w-55 overflow-hidden rounded-4xl">
                    <img className="h-full w-full object-cover" src="https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg" alt="" />
                </div>
                <div className="relative font-[lausanne-500]">
                    <div className="mt-[55vh]">
                        <h1 className="text-[20vw] uppercase leading-[17vw] text-center">Soixan7e <br />
                            Douze
                        </h1>
                    </div>
                    <div className="pl-[40%] mt-20">
                        <p className="text-5xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                    </div>
                </div>
            </div>
            <div className="section2 h-screen">

            </div>
        </div>
    )
}

export default Agence;