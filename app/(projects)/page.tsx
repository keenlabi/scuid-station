import IconButton from "@/shared/components/Buttons/IconButton";
import { FaPlus } from "react-icons/fa";
import CreateProjectModal from "./components/CreateProjectModal";

export default function Page() {
    return (
        <div>
            <CreateProjectModal />
            <header className="h-[120px] p-[50px] flex items-center">
                <div className="text-3xl">Projects</div>
                <div className="ml-auto">
                    <IconButton
                        label="New"
                        prefixIcon={<FaPlus style={{color:"black"}} />}
                        clickAction={()=> {}}
                    />
                </div>
            </header> 
            <div></div>
        </div>
    );    
}