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
    default: assetUrl('assets/mascot/Volti_Alegre.png'),
    happy: assetUrl('assets/mascot/Volti_Alegre.png'),
    thinking: assetUrl('assets/mascot/Volti_duda.png'),
    success: assetUrl('assets/mascot/Volti_bien_hecho.png'),
    fail: assetUrl('assets/mascot/Volti_cansado.png'),
    workshop: assetUrl('assets/mascot/Volti_Taller.png'),
    animating: assetUrl('assets/mascot/Volti_animando.png'),
    takingNotes: assetUrl('assets/mascot/Volti_tomando_notas.png'),
    programming: assetUrl('assets/mascot/Volti_Programación.png'),
    measuring: assetUrl('assets/mascot/Volti_Medición.png'),
    mechanics: assetUrl('assets/mascot/Volti_Mecánica.png'),
    electronics: assetUrl('assets/mascot/Volti_Electrónica.png'),
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
    icon: assetUrl('assets/characters/Icono.png'),
  },
  badges: {
    tester: assetUrl('assets/badges/tester-badge.png'),
  },
};

export type MascotPose = keyof typeof APP_ASSETS.mascot;
export type CharacterAsset = keyof typeof APP_ASSETS.characters;
export type BadgeAsset = keyof typeof APP_ASSETS.badges;