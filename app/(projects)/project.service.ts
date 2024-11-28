const projectService = {
    createProject: (title:string):Promise<void> => {
        return new Promise<void>(async (resolve, reject)=> {
            if(!window.showDirectoryPicker) return reject("File System Access API is not supported in this browser.")
            
            const dirHandle = await window.showDirectoryPicker();
            dirHandle.getDirectoryHandle(title, { create: true })
            .then((file)=> {
                console.log(file)
            })
            .catch((error)=> {console.log(error)});
            // console.log("SUCCESS", newDirHandle)
            // resolve(`Project ${newDirHandle.name}`)
            // if(fs.existsSync(title)) return reject("Project name already exist");

            // try {
            //     fs.mkdirSync(title)
            //     console.log("success")
            //     resolve();

            // } catch (error) {
            //     return reject(error);
            // }
        })
    }
}

export default projectService;