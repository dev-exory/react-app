import React, { useState } from "react";
import CodeInput from "../../components/smsCodeInput";
import ButtonInput from "../../components/ButtonInput";
import MainLogo from "../../components/MainLogo";
import TextComponent from "../../components/TextComponent";
export default function Verification() {
  const [activation, setActivation] = useState("activated");

  return (
    <>
      <MainLogo />
      <CodeInput />
      <ButtonInput text="Verify" toastType={activation} />
      <TextComponent text="Back to register" target="/register" />
    </>
  );
}
