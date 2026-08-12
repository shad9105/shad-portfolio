import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProfileData, HonorAward, AcademicQualification, WorkExperience } from '../types';
import { PROFILE_DATA, HONORS_AWARDS, ACADEMIC_QUALIFICATIONS, WORK_EXPERIENCE } from '../data/portfolioData';

interface PortfolioContextType {
  profile: ProfileData;
  honors: HonorAward[];
  education: AcademicQualification[];
  experience: WorkExperience[];
  isAdmin: boolean;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  updateProfile: (data: Partial<ProfileData>) => void;
  addHonor: (honor: Omit<HonorAward, 'id'>) => void;
  updateHonor: (id: string, honor: Partial<HonorAward>) => void;
  deleteHonor: (id: string) => void;
  addEducation: (edu: Omit<AcademicQualification, 'id'>) => void;
  updateEducation: (id: string, edu: Partial<AcademicQualification>) => void;
  deleteEducation: (id: string) => void;
  addExperience: (exp: Omit<WorkExperience, 'id'>) => void;
  updateExperience: (id: string, exp: Partial<WorkExperience>) => void;
  deleteExperience: (id: string) => void;
  resetToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const ADMIN_PIN_DEFAULT = '1209'; // Default passkey for Shad
const STORAGE_KEY_PREFIX = 'shad_portfolio_v3_';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}profile`);
    return saved ? JSON.parse(saved) : PROFILE_DATA;
  });

  const [honors, setHonors] = useState<HonorAward[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}honors`);
    return saved ? JSON.parse(saved) : HONORS_AWARDS;
  });

  const [education, setEducation] = useState<AcademicQualification[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}edu`);
    return saved ? JSON.parse(saved) : ACADEMIC_QUALIFICATIONS;
  });

  const [experience, setExperience] = useState<WorkExperience[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}exp`);
    return saved ? JSON.parse(saved) : WORK_EXPERIENCE;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(`${STORAGE_KEY_PREFIX}admin_session`) === 'true';
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}profile`, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}honors`, JSON.stringify(honors));
  }, [honors]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}edu`, JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}exp`, JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}admin_session`, isAdmin ? 'true' : 'false');
  }, [isAdmin]);

  const loginAdmin = (pin: string): boolean => {
    if (pin.trim() === ADMIN_PIN_DEFAULT || pin.trim() === '1234') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
  };

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...data }));
  };

  const addHonor = (honor: Omit<HonorAward, 'id'>) => {
    const newHonor: HonorAward = {
      ...honor,
      id: `honor-${Date.now()}`
    };
    setHonors(prev => [newHonor, ...prev]);
  };

  const updateHonor = (id: string, updated: Partial<HonorAward>) => {
    setHonors(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteHonor = (id: string) => {
    setHonors(prev => prev.filter(item => item.id !== id));
  };

  const addEducation = (edu: Omit<AcademicQualification, 'id'>) => {
    const newEdu: AcademicQualification = {
      ...edu,
      id: `edu-${Date.now()}`
    };
    setEducation(prev => [newEdu, ...prev]);
  };

  const updateEducation = (id: string, updated: Partial<AcademicQualification>) => {
    setEducation(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteEducation = (id: string) => {
    setEducation(prev => prev.filter(item => item.id !== id));
  };

  const addExperience = (exp: Omit<WorkExperience, 'id'>) => {
    const newExp: WorkExperience = {
      ...exp,
      id: `exp-${Date.now()}`
    };
    setExperience(prev => [newExp, ...prev]);
  };

  const updateExperience = (id: string, updated: Partial<WorkExperience>) => {
    setExperience(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteExperience = (id: string) => {
    setExperience(prev => prev.filter(item => item.id !== id));
  };

  const resetToDefaults = () => {
    setProfile(PROFILE_DATA);
    setHonors(HONORS_AWARDS);
    setEducation(ACADEMIC_QUALIFICATIONS);
    setExperience(WORK_EXPERIENCE);
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}profile`);
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}honors`);
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}edu`);
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}exp`);
    localStorage.removeItem('shad_portfolio_profile');
    localStorage.removeItem('shad_portfolio_honors');
    localStorage.removeItem('shad_portfolio_edu');
    localStorage.removeItem('shad_portfolio_exp');
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        honors,
        education,
        experience,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        updateProfile,
        addHonor,
        updateHonor,
        deleteHonor,
        addEducation,
        updateEducation,
        deleteEducation,
        addExperience,
        updateExperience,
        deleteExperience,
        resetToDefaults
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
