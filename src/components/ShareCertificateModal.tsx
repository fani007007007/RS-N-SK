/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Share & Official Certificate of Authenticity Modal
 * Demonstrates immutable online link and copyright attribution for Fani
 */

import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, Award, Lock, ExternalLink, QrCode, Globe, AlertCircle, X } from 'lucide-react';
import { sound } from '../utils/audio';

interface ShareCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  appUrl: string;
}

export const ShareCertificateModal: React.FC<ShareCertificateModalProps> = ({
  isOpen,
  onClose,
  appUrl
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(appUrl).then(() => {
      setCopied(true);
      sound.playSuccess();
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-extrabold text-slate-900">
              Official Masterclass Link &amp; Copyright Protection
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Card */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-yellow-50/50 rounded-2xl p-5 border-2 border-amber-300 shadow-sm mb-5 relative overflow-hidden">
          {/* Watermark */}
          <div className="absolute -right-8 -bottom-8 text-amber-200/40 text-8xl font-black pointer-events-none select-none">
            🛡️
          </div>

          <div className="text-center pb-3 border-b border-amber-200 mb-3">
            <span className="text-[10px] uppercase tracking-widest text-amber-800 font-black block mb-0.5">
              OFFICIAL CERTIFICATE OF COPYRIGHT &amp; AUTHENTICITY
            </span>
            <h4 className="text-lg font-black text-slate-950">
              Getting Ready for Study — RSS Masterclass
            </h4>
            <div className="inline-flex items-center gap-1 mt-1 bg-amber-400/20 text-amber-900 border border-amber-400/40 px-3 py-0.5 rounded-full text-xs font-bold">
              <span>Verified Creator:</span>
              <strong className="text-slate-950">Fani</strong>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs mb-3">
            <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200">
              <span className="text-[10px] text-slate-500 font-bold block">Author &amp; Owner</span>
              <span className="font-extrabold text-slate-900">Fani</span>
              <span className="text-[10px] text-slate-500 block">fani007007@gmail.com</span>
            </div>
            <div className="bg-white/80 p-2.5 rounded-xl border border-amber-200">
              <span className="text-[10px] text-slate-500 font-bold block">Protection Status</span>
              <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>Immutable Read-Only</span>
              </span>
              <span className="text-[10px] text-slate-500 block">Locked Server Master</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-700 text-center leading-relaxed mt-2 pt-2 border-t border-amber-200/60">
            &copy; 2026 Fani. All rights reserved. Unauthorised copying, altering, reverse-engineering, or unauthorized redistribution of this masterclass resource is strictly prohibited.
          </p>
        </div>

        {/* Live Public Link Box */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-5">
          <label className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5 mb-1.5">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Your Permanent, Non-Alterable Online Link</span>
          </label>
          <p className="text-[11px] text-slate-500 mb-2">
            Share this link with students and peers. They can interact with the study modules and board games, but <strong>cannot edit or change your live deployment</strong>:
          </p>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={appUrl}
              className="flex-1 px-3 py-2 text-xs font-mono font-bold bg-white border border-slate-300 rounded-xl text-blue-900 truncate focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Security & Immutability Explanation */}
        <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-200 mb-5">
          <h4 className="text-xs font-black text-blue-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Why No One Can Alter or Edit Your Masterclass</span>
          </h4>
          <ul className="space-y-2 text-xs text-blue-950">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">1.</span>
              <span>
                <strong>Cloud Security Lockdown:</strong> The master files are hosted in a secure Google Cloud Run container. Only your authenticated session can update the underlying code; visitors have zero write access.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">2.</span>
              <span>
                <strong>Client-Side Isolation:</strong> When students play games or answer quiz questions, all score changes happen strictly inside their temporary local browser memory. Your master class remains 100% pristine.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">3.</span>
              <span>
                <strong>Built-in Anti-Tamper Deterrents:</strong> Right-click context menus and developer shortcut keys are intercepted to discourage local browser inspection and source code scraping.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-600">4.</span>
              <span>
                <strong>Embedded Copyright Verification:</strong> Fani is permanently registered as author and copyright holder in the HTML metadata, header banner, watermark, and footer.
              </span>
            </li>
          </ul>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-md transition-all shrink-0"
        >
          Close Certificate Window
        </button>
      </div>
    </div>
  );
};
