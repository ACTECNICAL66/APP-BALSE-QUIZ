function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}

export const APP_ASSETS = {
  brand: {
    logo: assetUrl('assets/brand/app-logo.svg'),
    name: "APP-BALSE-QUIZ",
  },
  mascot: {
    default: assetUrl('assets/characters/Icono.png'),
    happy: assetUrl('assets/mascot/voltio-happy.svg'),
    thinking: assetUrl('assets/mascot/voltio-thinking.svg'),
    success: assetUrl('assets/mascot/voltio-success.svg'),
    fail: assetUrl('assets/mascot/voltio-fail.svg'),
    workshop: assetUrl('assets/mascot/voltio-workshop.svg'),
  },
  characters: {
    capi: assetUrl('assets/characters/Perfil_Capi.png'),
    chip: assetUrl('assets/characters/Perfil_Chip.png'),
    diodi: assetUrl('assets/characters/Perfil_Diodi.png'),
    fpga: assetUrl('assets/characters/Perfil_FPGA.png'),
    mos: assetUrl('assets/characters/Perfil_MOS.png'),
    resi: assetUrl('assets/characters/Perfil_Resi.png'),
    smd: assetUrl('assets/characters/Perfil_SMD.png'),
    transi: assetUrl('assets/characters/Perfil_Transi.png'),
    led: assetUrl('assets/characters/Perfil_Led.png'),
    bobina: assetUrl('assets/characters/Perfil_Bobina.png'),
  },
  badges: {
    tester: assetUrl('assets/badges/tester-badge.png'),
  },
};

export type MascotPose = keyof typeof APP_ASSETS.mascot;
export type CharacterAsset = keyof typeof APP_ASSETS.characters;
export type BadgeAsset = keyof typeof APP_ASSETS.badges;