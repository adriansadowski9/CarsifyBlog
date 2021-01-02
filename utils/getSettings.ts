export const importContactSettings = async () => {
  const contactSettings = await import('../content/settings/contact.md');
  return { ...contactSettings };
};

export const importSocialsSettings = async () => {
  const socialsSettings = await import('../content/settings/socials.md');
  return { ...socialsSettings };
};

export const getContactSettings = async () => {
  const importedContactSettings = importContactSettings();
  return importedContactSettings;
};

export const getSocialsSettings = async () => {
  const importedSocialsSettings = importSocialsSettings();
  return importedSocialsSettings;
};
