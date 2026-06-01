export const APP_ASSETS = {
  brand: {
    logo: "/assets/brand/app-logo.svg",
    name: "APP-BALSE-QUIZ",
  },
  mascot: {
    default: "/assets/characters/Icono.png",
    happy: "/assets/mascot/voltio-happy.svg",
    thinking: "/assets/mascot/voltio-thinking.svg",
    success: "/assets/mascot/voltio-success.svg",
    fail: "/assets/mascot/voltio-fail.svg",
    workshop: "/assets/mascot/voltio-workshop.svg",
  },
  characters: {
    capi: "/assets/characters/Perfil Capi.png",
    chip: "/assets/characters/Perfil Chip.png",
    diodi: "/assets/characters/Perfil Diodi.png",
    fpga: "/assets/characters/Perfil FPGA.png",
    mos: "/assets/characters/Perfil MOS.png",
    resi: "/assets/characters/Perfil Resi.png",
    smd: "/assets/characters/Perfil SMD.png",
    transi: "/assets/characters/Perfil Transi.png",
    led: "/assets/characters/Perfil Led.png",
    bobina: "/assets/characters/Perfil Bobina.png",
  },
  badges: {
    tester: "/assets/characters/Icono.png",
  },
} as const;

export type MascotPose = keyof typeof APP_ASSETS.mascot;
export type CharacterAsset = keyof typeof APP_ASSETS.characters;
export type BadgeAsset = keyof typeof APP_ASSETS.badges;