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
    default: assetUrl('assets/mascot/Volti Alegre.png'),
    happy: assetUrl('assets/mascot/Volti Alegre.png'),
    thinking: assetUrl('assets/mascot/Volti duda.png'),
    success: assetUrl('assets/mascot/Volti bien hecho.png'),
    fail: assetUrl('assets/mascot/Volti cansado.png'),
    workshop: assetUrl('assets/mascot/Volti Taller.png'),
    animating: assetUrl('assets/mascot/Volti animando.png'),
    takingNotes: assetUrl('assets/mascot/Volti tomando notas.png'),
    programming: assetUrl('assets/mascot/Volti Programación.png'),
    measuring: assetUrl('assets/mascot/Volti Medición.png'),
    mechanics: assetUrl('assets/mascot/Volti Mecánica.png'),
    electronics: assetUrl('assets/mascot/Volti Electrónica.png'),
  },
  characters: {
    capi: assetUrl('assets/characters/Perfil Capi.png'),
    chip: assetUrl('assets/characters/Perfil Chip.png'),
    diodi: assetUrl('assets/characters/Perfil Diodi.png'),
    fpga: assetUrl('assets/characters/Perfil FPGA.png'),
    mos: assetUrl('assets/characters/Perfil MOS.png'),
    resi: assetUrl('assets/characters/Perfil Resi.png'),
    smd: assetUrl('assets/characters/Perfil SMD.png'),
    transi: assetUrl('assets/characters/Perfil Transi.png'),
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