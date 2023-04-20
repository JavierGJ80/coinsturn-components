export type FileType = "IMAGE" | "FILE";
export declare const uploadFile: (files: [File], endpoint: string, type: FileType) => Promise<Promise<unknown>[]>;
export declare const gitSync: (oldRepo: string, newRepo: string, user: string, password: string) => Promise<boolean | undefined>;
