import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ToastrComponent from "../components/Toastr";

export const ToastrContext = createContext({});

export const ToastrProvider = ({ children }) => {
  const [toastrs, setToastrs] = useState([]);
  //console.log({ toastrDOM });
  useEffect(() => {
    ReactDOM.render(
      <>
        <div className="toastr-container">
          {toastrs?.map((toastr) => (
            <ToastrComponent
              id={toastr.id}
              key={toastr.id}
              type={toastr.type}
              title={toastr.title}
              message={toastr.message}
              delay={toastr.delay}
              onClose={(id) => {
                setToastrs((previousToastrs) =>
                  previousToastrs.filter((tstr) => tstr.id !== id)
                );
              }}
            />
          ))}
        </div>
      </>,
      document.getElementById("toastr-root")
    );
  }, [toastrs]);

  const genID = () => "_" + Math.random().toString(36).substr(2, 9);
  class Toastr {
    static success({ title = "Success!", message }) {
      setToastrs([
        ...toastrs,
        { type: "success", title, message, id: genID() },
      ]);
    }
    static error({ title = "Error", message }) {
      setToastrs([...toastrs, { type: "error", title, message, id: genID() }]);
    }
    static info({ title = "Info", message }) {
      setToastrs([...toastrs, { type: "info", title, message, id: genID() }]);
    }
    static warning({ title = "Warning", message }) {
      setToastrs([
        ...toastrs,
        { type: "warning", title, message, id: genID(), delay: 30000 },
      ]);
    }
  }

  return (
    <ToastrContext.Provider value={{ Toastr }}>
      {children}
    </ToastrContext.Provider>
  );
};
