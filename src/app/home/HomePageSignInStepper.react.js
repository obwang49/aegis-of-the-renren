/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const steps = Object.freeze({
  cn: [
    "点击下方按钮传送至人人网官方登录界面",
    "登陆个人账号并确认相关授权",
    "成功后将会自动跳转回本页面",
  ],
  eng: [
    "Click on the button at the bottom that will open the official sign in page " +
      "of renren.com",
    "Sign in to your personal account and confirm the authorization request",
    "Once authorized, you will be automatically redirected back to this page",
  ],
});

export default function HomePageSignInStepper() {
  const stepsByLanguage = useValueByAppLanguage(steps);

  return (
    <Stepper activeStep={0} alternativeLabel>
      {stepsByLanguage.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
