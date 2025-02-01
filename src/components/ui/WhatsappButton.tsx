"use client";

import { kodeinTeknoLogo3 } from "@/assets";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+6282170270241"
      accountName="Kodein Tekno"
      avatar={kodeinTeknoLogo3.src}
      chatMessage="Halo! Ada yang bisa kami bantu?"
      statusMessage="Online"
    />
  );
};

export default WhatsappButton;
