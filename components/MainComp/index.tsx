import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import FileUploader from "../FileUploader";

const GlobalContext =
  createContext<[any, Dispatch<SetStateAction<any>>] | any>(undefined);

const MainComp = () => {
  const [global, setGlobal] = useState<any>({});

  const handleNewImage = (name: string, newPath: string) => {
    if (!setGlobal) return;
    setGlobal({ ...global, [name]: newPath });
  };

  return (
    <GlobalContext.Provider value={[global, setGlobal]}>
      <div style={{ width: "150px", height: "150px" }}>
        <FileUploader
          endpoint={`${
            process.env.REACT_APP_DOMAIN
              ? process.env.REACT_APP_DOMAIN
              : "http://localhost:8080"
          }/cloudFunctions/uploadFile`}
          onUpload={(newVal) => handleNewImage("test", newVal)}
          fileType="IMAGE"
          imageSource={global && global.test ? global.test : ""}
          design="DETAILED"
          uploadText="Upload"
          description="This is a test description"
        />
      </div>
    </GlobalContext.Provider>
  );
};

export default MainComp;
