/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Masterclass Footer with Copyright and Legal Notices
 */

import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenShareModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShareModal }) => {
  return (
    <footer className="mt-12 bg-white border-t border-slate-200 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
        {/* Creator Attribution */}
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Created by Fani</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-600 font-normal">RSS Mid-Term Masterclass</span>
        </div>

        {/* Legal notice */}
        <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
          &copy; 2026 Fani. All rights reserved. Registered educational publication.
          Unauthorised copying, altering, reverse engineering, or redistribution of this resource without explicit permission is strictly prohibited.
        </p>

        {/* Security badge button */}
        <button
          onClick={onOpenShareModal}
          className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-bold bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>View Official Certificate &amp; Public Live Link</span>
        </button>
      </div>
    </footer>
  );
};
