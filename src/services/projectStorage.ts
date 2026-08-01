import { PROJECTS, Project, GALLERY_WORKS } from '../data/portfolioData';

export type { Project };

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PROJECTS_STORAGE_KEY = 'mira_portfolio_projects_v1';
const GALLERY_STORAGE_KEY = 'mira_portfolio_gallery_v1';
export const PROJECTS_UPDATED_EVENT = 'mira-projects-updated';

// Get current projects from LocalStorage or initial default
export const getStoredProjects = (): Project[] => {
  try {
    const stored = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to parse stored projects:', err);
  }
  return PROJECTS;
};

// Save projects to LocalStorage and trigger event
export const saveProjects = (projects: Project[]): void => {
  try {
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
    window.dispatchEvent(new CustomEvent(PROJECTS_UPDATED_EVENT));
  } catch (err) {
    console.error('Failed to save projects to localStorage:', err);
  }
};

// Update a single project photo
export const updateProjectImage = (projectId: string, imageUrl: string): Project[] => {
  const current = getStoredProjects();
  const updated = current.map(p => {
    if (p.id === projectId) {
      return { ...p, image: imageUrl };
    }
    return p;
  });
  saveProjects(updated);
  return updated;
};

// Add or update project details
export const saveOrUpdateProject = (project: Project): Project[] => {
  const current = getStoredProjects();
  const exists = current.some(p => p.id === project.id);
  let updated: Project[];
  if (exists) {
    updated = current.map(p => (p.id === project.id ? project : p));
  } else {
    updated = [project, ...current];
  }
  saveProjects(updated);
  return updated;
};

// Delete a project
export const deleteProject = (projectId: string): Project[] => {
  const current = getStoredProjects();
  const updated = current.filter(p => p.id !== projectId);
  saveProjects(updated);
  return updated;
};

// Reset projects to default initial data
export const resetProjectsToDefault = (): Project[] => {
  try {
    localStorage.removeItem(PROJECTS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(PROJECTS_UPDATED_EVENT));
  } catch (err) {
    console.error('Failed to reset projects:', err);
  }
  return PROJECTS;
};

// Get current gallery items
export const getStoredGallery = (): GalleryItem[] => {
  try {
    const stored = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to parse gallery storage:', err);
  }
  return GALLERY_WORKS;
};

// Save gallery items
export const saveGallery = (gallery: GalleryItem[]): void => {
  try {
    localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(gallery));
    window.dispatchEvent(new CustomEvent(PROJECTS_UPDATED_EVENT));
  } catch (err) {
    console.error('Failed to save gallery:', err);
  }
};

// Update a single gallery photo
export const updateGalleryImage = (galleryId: string, imageUrl: string): GalleryItem[] => {
  const current = getStoredGallery();
  const updated = current.map(g => (g.id === galleryId ? { ...g, image: imageUrl } : g));
  saveGallery(updated);
  return updated;
};

// Add new gallery item
export const addGalleryItem = (item: GalleryItem): GalleryItem[] => {
  const current = getStoredGallery();
  const updated = [item, ...current];
  saveGallery(updated);
  return updated;
};

// Delete gallery item
export const deleteGalleryItem = (id: string): GalleryItem[] => {
  const current = getStoredGallery();
  const updated = current.filter(g => g.id !== id);
  saveGallery(updated);
  return updated;
};
