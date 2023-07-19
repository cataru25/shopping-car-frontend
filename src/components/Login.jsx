import React from "react";
import CustomButton from "./CustomButton";

export default function Login() {
  return (
    <>
      <CustomButton labelButton="Ingresar" variant="contained" />
      <CustomButton labelButton="Salir" variant="text" />
      <CustomButton labelButton="Atención al cliente" variant="outlined" />
    </>
  );
}
