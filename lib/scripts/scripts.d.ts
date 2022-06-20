export declare type FileType = "IMAGE" | "FILE";
export declare const uploadFile: (file: File, endpoint: string, type: FileType) => Promise<unknown>;
