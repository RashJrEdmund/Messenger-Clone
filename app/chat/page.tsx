"use client";

import AuthGaurd from "@/HOC/AuthGaurd";
import React from "react";

type Props = {};

function Chat({}: Props) {
  return <div>Chat page</div>;
}

export default AuthGaurd(Chat);
