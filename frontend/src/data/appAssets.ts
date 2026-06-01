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
    capi: "/assets/characters/Perfil_Capi.png",
    chip: "/assets/characters/Perfil_Chip.png",
    diodi: "/assets/characters/Perfil_Diodi.png",
    fpga: "/assets/characters/Perfil_FPGA.png",
    mos: "/assets/characters/Perfil_MOS.png",
    resi: "/assets/characters/Perfil_Resi.png",
    smd: "/assets/characters/Perfil_SMD.png",
    transi: "/assets/characters/Perfil_Transi.png",
    led: "/assets/characters/Perfil_Led.png",
    bobina: "/assets/characters/Perfil_Bobina.png",
  },
  badges: {
    tester: "/assets/characters/Icono.png",
  },
} as const;

export type MascotPose = keyof typeof APP_ASSETS.mascot;
export type CharacterAsset = keyof typeof APP_ASSETS.characters;
export type BadgeAsset = keyof typeof APP_ASSETS.badges;