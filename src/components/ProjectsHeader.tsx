"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function ProjectsHeader(): React.ReactElement {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16 text-center">
      <div className="container-custom">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span style={{ color: 'var(--color-light-gray)' }}>{t('projects.page.title.part1')}</span>
          <span className="text-gradient">{t('projects.page.title.part2')}</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          {t('projects.page.subtitle')}
        </p>
      </div>
    </div>
  );
}


