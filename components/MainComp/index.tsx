import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { FileUploader } from "..";

const GlobalContext = createContext<
  [any, Dispatch<SetStateAction<any>>] | [undefined, undefined]
>([undefined, undefined]);

const MainComp = () => {
  const [global, setGlobal] = useState();
  const [gc, setGc] = useContext(GlobalContext);

  const handleNewImage = (name: string, newPath: string) => {
    if (!setGc) return;
    setGc({ ...gc, [name]: newPath });
  };

  const domain = "http://localhost:8080";
  return (
    <GlobalContext.Provider value={[global, setGlobal]}>
      <div style={{ width: "150px", height: "150px" }}>
        <FileUploader
          endpoint={`${domain}/cloudFunctions/uploadFile`}
          updateValue={(newVal) => handleNewImage("test", newVal)}
          fileType="IMAGE"
          imageSource={gc && gc.test ? gc.test : ""}
          design="SIMPLE"
        />
      </div>
    </GlobalContext.Provider>
  );
};

export default MainComp;
