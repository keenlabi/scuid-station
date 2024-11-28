"use client"

import useProjects from "@/(projects)/useProjects";
import PrimaryTextButton from "@/shared/components/Buttons/TextButton/TextButton";
import InputField from "@/shared/components/InputField";
import SizedBox from "@/shared/components/SizedBox";
import { FaTimes } from "react-icons/fa";

export default function CreateProjectModal() {
    const {
        titleModel,
        handleTitleModel,
        submit
    } = useProjects();

    return  <div className={"fixed top-0 flex items-center justify-center h-[100%] w-[100%]"}>
                
                <div className={"fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-20 backdrop-blur-[4px] z-[99]"}></div>
                
                <div className={"fixed bg-black-100 w-[30%] min-h-[100px] z-[100] rounded-[8px] pb-[32px]"}>
                    <div className="flex justify-space-between items-center w-[100%] border-b border-black-200 border-opacity-50 py-[16px] px-[32px]">
                        <div className={"font-semibold mr-[auto]"}>New Project</div>
                        <FaTimes className={"rounded-50% w-[20px] h-[20px] border-light-grey"} />
                    </div>

                    <SizedBox height="32px" />
                    
                    <div className="px-[32px]">
                        <InputField 
                            type="text"
                            label={titleModel.label}
                            placeholder="Name"
                            backgroundColor="var(--black-accent-300)"
                            error={titleModel.error}
                            onInput={handleTitleModel}
                        />

                        <SizedBox height="10px" />

                        <div className="">
                            <PrimaryTextButton 
                                label="Create"
                                width="100%"
                                disabled={!titleModel.validated}
                                clickAction={()=> submit()}
                            />
                        </div>
                    </div>
                </div>
            </div>
}