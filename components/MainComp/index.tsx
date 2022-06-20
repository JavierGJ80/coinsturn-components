import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { FileUploader } from "..";

const GlobalContext =
  createContext<[any, Dispatch<SetStateAction<any>>] | any>(undefined);

const MainComp = () => {
  const [global, setGlobal] = useState<any>({});

  const handleNewImage = (name: string, newPath: string) => {
    if (!setGlobal) return;
    setGlobal({ ...global, [name]: newPath });
  };

  const domain = "http://localhost:8080";

  return (
    <GlobalContext.Provider value={[global, setGlobal]}>
      <div style={{ width: "150px", height: "150px" }}>
        <FileUploader
          endpoint={`${domain}/cloudFunctions/uploadFile`}
          onUpload={(newVal) => handleNewImage("test", newVal)}
          fileType="FILE"
          imageSource={global && global.test ? global.test : ""}
          design="SIMPLE"
        />
      </div>
    </GlobalContext.Provider>
  );
};

export default MainComp;
