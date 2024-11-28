import { IInputFormField } from "@/shared/components/Form/types";
import { useState } from "react"
import projectService from "./project.service";

export default function useProjects() {

    const [titleModel, setTitleModel] = useState<IInputFormField>({
        name: "title",
        label: "Choose a unique name",
        required: true,
        error: "",
        validated: false
    });

    function handleTitleModel(value:string) {
        titleModel.validated = true;
        titleModel.error = "";

        if(!value) {
            titleModel.validated = false;
            titleModel.error = `Please choose a name`;
        }

        return setTitleModel({ ...titleModel })
    }

    function submit() {
        if(!titleModel.validated) return;
        console.log(titleModel)
        projectService.createProject(titleModel.value!)
        .catch((error)=> {
            console.log(error)
        })
    }

    return {
        titleModel,
        handleTitleModel,
        submit
    }
}