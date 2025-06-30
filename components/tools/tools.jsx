'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toolGroups from '@/tools/data.json';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import clsx from 'clsx';

function getIconComponent(iconName) {
  return FaIcons[iconName] || SiIcons[iconName] || null;
}

export default function ToolIconsSection() {
  const categories = toolGroups.map(group => group.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeTools = toolGroups.find(g => g.category === activeCategory)?.tools || [];

  return (
    <section className=" py-12 bg-b_doom dark:bg-b_doom text-gray-900 dark:text-white">
      <div className="max-w-[800px] mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                'px-4 py-2 font-manrope rounded-full text-sm font-medium transition-colors',
                category === activeCategory
                  ? 'bg-primary text-b_doom dark:bg-primary'
                  : 'bg-primary text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6"
          >
            {activeTools.map(tool => {
              const Icon = getIconComponent(tool.icon);
              return (
              <div key={tool.name} className="flex font-manrope flex-col items-center justify-center text-center group" title={tool.name}>
                {Icon && (
                  <Icon
                  className="text-4xl transition-transform group-hover:scale-110"
                  style={{ color: tool.color || undefined }}
                  />
                  )}
                  <span className="mt-2 font-manrope text-sm">{tool.name}</span>
              </div>
              );
              })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
