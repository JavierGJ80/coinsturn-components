export declare type FileType = "IMAGE" | "FILE";
export declare const uploadFile: (file: File, endpoint: string, type: FileType) => Promise<unknown>;
export declare const gitSync: (oldRepo: string, newRepo: string, user: string, password: string) => Promise<boolean | undefined>;
