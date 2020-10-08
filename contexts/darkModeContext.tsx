import * as React from 'react';
import { DarkMode } from 'use-dark-mode';

export const DarkModeContext = React.createContext<Partial<DarkMode>>({});

export default DarkModeContext;
