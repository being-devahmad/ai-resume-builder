
// import ThemeColor from './ThemeColor';

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import PersonalDetail from "./forms/PersonalDetail";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";

function FormSection() {
    const [activeFormIndex, setActiveFormIndex] = useState(3);
    const [enableNext, setEnableNext] = useState(true);
    const { resumeId } = useParams();
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <Link to={"/dashboard"}>
                        <Button><Home /></Button>
                    </Link>
                    {/* <ThemeColor /> */}

                </div>
                <div className='flex gap-2'>
                    {activeFormIndex > 1
                        && <Button size="sm"
                            onClick={() => setActiveFormIndex(activeFormIndex - 1)}> <ArrowLeft /> </Button>}
                    <Button
                        disabled={!enableNext}
                        className="flex gap-2" size="sm"
                        onClick={() => setActiveFormIndex(activeFormIndex + 1)}
                    > Next
                        <ArrowRight /> </Button>
                </div>
            </div>
            {/* Personal Detail  */}
            {activeFormIndex == 1 ?
                <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
                : activeFormIndex == 2 ?
                    <Summery enabledNext={(v) => setEnableNext(v)} />
                    : activeFormIndex == 3 ?
                        <Experience />
                        : activeFormIndex == 4 ?
                            <Education />
                            : activeFormIndex == 5 ?
                                <Skills />
                                : activeFormIndex == 6 ?
                                    <Navigate to={'/my-resume/' + resumeId + "/view"} />
                                    : null
            }


            {/* Experience  */}

            {/* Educational Detail  */}

            {/* Skills  */}

        </div>
    )
}

export default FormSection