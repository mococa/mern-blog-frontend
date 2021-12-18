import React, { useContext } from "react";
import { ToastrContext } from "../context/Toastr";
export function useToastr() {
  const { Toastr } = useContext(ToastrContext);
  return Toastr;
}
