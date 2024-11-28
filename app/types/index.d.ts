// Extend Window interface for File System Access API
interface Window {
    showDirectoryPicker?: () => Promise<FileSystemDirectoryHandle>;
}