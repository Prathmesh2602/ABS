"use client";

import * as React from "react";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Cpu,
  BarChart3,
  Layers,
  Sparkles,
  Zap,
  Building,
  GraduationCap,
  Truck,
  Hash,
  Activity,
  AlertCircle,
  Eye,
} from "lucide-react";

interface ArchetypeProps {
  archetype?:
    | "ai_ocr"
    | "blockchain_ledger"
    | "seat_matrix"
    | "statistical_heatmap"
    | "academic_logbook"
    | "telecom_gateway"
    | "vendor_supply";
  title?: string;
  className?: string;
}

export function ProjectPreviewArchetype({ archetype = "ai_ocr", title, className = "" }: ArchetypeProps) {
  switch (archetype) {
    case "ai_ocr":
      return (
        <div className={`rounded-xl overflow-hidden border border-[#0a192f]/15 bg-[#060d1a] text-white shadow-xl ${className}`}>
          {/* Header */}
          <div className="bg-[#0a192f] px-3.5 py-2.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-emerald-400">AI OCR ENGINE: LIVE</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>99.4% Confidence</span>
            </div>
          </div>

          {/* Interactive Inspection Grid */}
          <div className="p-3.5 grid grid-cols-12 gap-3 text-xs font-mono">
            {/* Scanned Doc Column */}
            <div className="col-span-6 bg-slate-900/80 rounded-lg p-2.5 border border-slate-700/60 relative">
              <div className="text-[10px] text-slate-400 mb-1 flex items-center justify-between">
                <span>SCANNED GOVT RESOLUTION</span>
                <span className="text-amber-400">BILINGUAL</span>
              </div>
              <div className="space-y-1.5 opacity-90">
                <div className="h-2 w-3/4 bg-slate-700 rounded" />
                <div className="p-1 rounded bg-amber-500/20 border border-amber-400/60 text-[9px] text-amber-200">
                  शासन निर्णय क्र: संकिर्ण-२०२६/प्र.क्र.४२
                </div>
                <div className="h-1.5 w-full bg-slate-700 rounded" />
                <div className="p-1 rounded bg-sky-500/20 border border-sky-400/60 text-[9px] text-sky-200">
                  Sanction: ₹ 14,80,00,000/- Grant
                </div>
                <div className="h-1.5 w-5/6 bg-slate-700 rounded" />
                <div className="p-1 rounded bg-emerald-500/20 border border-emerald-400/60 text-[9px] text-emerald-200">
                  Officer: Joint Director, Higher Ed.
                </div>
              </div>
            </div>

            {/* Extracted JSON / Draft Column */}
            <div className="col-span-6 bg-slate-950 rounded-lg p-2.5 border border-slate-800 space-y-2">
              <div className="text-[10px] text-sky-400 font-semibold flex items-center justify-between">
                <span>PARSED ENTITIES</span>
                <span className="text-emerald-400">AIR-GAPPED</span>
              </div>
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">GR Date:</span>
                  <span className="text-amber-300 font-bold">14-Oct-2026</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-400 font-bold">Verified</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Draft Letter:</span>
                  <span className="text-sky-300">Generated</span>
                </div>
              </div>
              <div className="pt-1">
                <div className="text-[9px] text-slate-400">Official Noting:</div>
                <p className="text-[9px] text-slate-200 italic line-clamp-2">
                  &ldquo;उपरोक्त विषयान्वये सादर करण्यात येते की...&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case "blockchain_ledger":
      return (
        <div className={`rounded-xl overflow-hidden border border-[#0a192f]/15 bg-[#060d1a] text-white shadow-xl ${className}`}>
          {/* Header */}
          <div className="bg-[#0f172a] px-3.5 py-2.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs font-mono font-semibold text-sky-300">BLOCKCHAIN VAULT: SECURED</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
              TAMPER-PROOF (0 FLAGS)
            </span>
          </div>

          {/* Cryptographic Ledger Deck */}
          <div className="p-3.5 space-y-2.5 font-mono text-xs">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-900/90 rounded p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">BLOCK HEIGHT</div>
                <div className="text-amber-300 font-bold text-xs">#482,910</div>
              </div>
              <div className="bg-slate-900/90 rounded p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">TIME-LOCK UNSEAL</div>
                <div className="text-emerald-400 font-bold text-xs">00:14:59</div>
              </div>
              <div className="bg-slate-900/90 rounded p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">GEO-FENCE GPS</div>
                <div className="text-sky-400 font-bold text-xs">RADIUS 50M</div>
              </div>
            </div>

            <div className="bg-slate-950 rounded p-2 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400">SHA-256 HASH:</span>
                <span className="text-sky-300 truncate max-w-[160px]">0x7f9a88c2...3c21e09</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400">Biometric Key:</span>
                <span className="text-amber-400 font-bold">Center Supt. #104 Verified</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "seat_matrix":
      return (
        <div className={`rounded-xl overflow-hidden border border-[#0a192f]/15 bg-[#ffffff] text-[#0a192f] shadow-xl ${className}`}>
          {/* Header */}
          <div className="bg-[#0a192f] text-white px-3.5 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-semibold">CAP ROUND II LIVE SEAT ALLOCATION</span>
            </div>
            <span className="text-[10px] text-amber-300 bg-amber-500/20 border border-amber-400/40 px-2 py-0.5 rounded-full font-bold">
              100% AUDITABLE
            </span>
          </div>

          {/* Allocation Matrix Table */}
          <div className="p-3.5 space-y-2 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded p-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-500 block">MERIT PERCENTILE</span>
                <span className="font-extrabold text-sm text-[#0a192f]">99.4238517</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block">ALLOCATED CHOICE</span>
                <span className="font-bold text-xs text-[#0284c7]">Preference #01</span>
              </div>
            </div>

            <div className="border border-emerald-200 bg-emerald-50/80 rounded p-2 text-[11px]">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-bold text-emerald-900">SEAT ALLOTMENT CONFIRMED</span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">CODE: 60061010</span>
              </div>
              <p className="text-slate-700 text-[10px]">
                COEP Technological University — B.Tech Computer Engineering (Open / General)
              </p>
            </div>
          </div>
        </div>
      );

    case "statistical_heatmap":
      return (
        <div className={`rounded-xl overflow-hidden border border-[#0a192f]/15 bg-[#ffffff] text-[#0a192f] shadow-xl ${className}`}>
          {/* Header */}
          <div className="bg-[#0a192f] text-white px-3.5 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs font-semibold">DISTRICT SOCIO-ECONOMIC INDEX</span>
            </div>
            <span className="text-[10px] text-sky-300 bg-sky-500/20 border border-sky-400/30 px-2 py-0.5 rounded-full">
              22 DISTRICTS
            </span>
          </div>

          {/* District Bars */}
          <div className="p-3.5 space-y-2 text-xs">
            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span className="font-semibold text-slate-700">Gurugram (Services &amp; IT)</span>
                  <span className="font-bold text-emerald-600">+9.4% GSDP</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "94%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span className="font-semibold text-slate-700">Faridabad (Manufacturing)</span>
                  <span className="font-bold text-sky-600">+8.1% GSDP</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: "81%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-0.5">
                  <span className="font-semibold text-slate-700">Karnal / Hisar (Agri-Output)</span>
                  <span className="font-bold text-amber-600">+7.6% GSDP</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: "76%" }} />
                </div>
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-100">
              <span>Annual Economic Survey</span>
              <span className="text-emerald-700 font-bold">Auto-Gazette Ready</span>
            </div>
          </div>
        </div>
      );

    case "academic_logbook":
      return (
        <div className={`rounded-xl overflow-hidden border border-[#0a192f]/15 bg-[#ffffff] text-[#0a192f] shadow-xl ${className}`}>
          {/* Header */}
          <div className="bg-[#0a192f] text-white px-3.5 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold">UNIVERSITY AUMS &amp; CLINICAL DECK</span>
            </div>
            <span className="text-[10px] text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 rounded-full">
              NCISM / ICAR
            </span>
          </div>

          <div className="p-3.5 space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                <span className="text-[10px] text-slate-500 block">HOSPITAL BED OCCUPANCY</span>
                <span className="font-extrabold text-sm text-emerald-700">92.4%</span>
                <span className="text-[9px] text-slate-400 block">IPD Verified Daily</span>
              </div>
              <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                <span className="text-[10px] text-slate-500 block">ICAR CREDIT SYLLABUS</span>
                <span className="font-extrabold text-sm text-[#0284c7]">100%</span>
                <span className="text-[9px] text-slate-400 block">Deans Committee</span>
              </div>
            </div>

            <div className="border border-slate-200 bg-slate-50/50 rounded p-2 text-[10px] space-y-1">
              <div className="flex justify-between font-semibold text-slate-700">
                <span>Clinical Posting: Panchakarma Dept</span>
                <span className="text-emerald-600 font-bold">Logged</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Student Rotational Logbook:</span>
                <span className="font-mono text-slate-700">MUHS Sign-off OK</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "telecom_gateway":
      return (
        <div className={`rounded-xl overflow-hidden border border-[#0a192f]/15 bg-[#060d1a] text-white shadow-xl ${className}`}>
          {/* Header */}
          <div className="bg-[#0f172a] px-3.5 py-2.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-semibold text-amber-300">MEGHDOOT GATEWAY: ROUTING</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
              99.98% DELIVERY
            </span>
          </div>

          <div className="p-3.5 space-y-2 text-xs font-mono">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-slate-900 rounded p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">THROUGHPUT</div>
                <div className="text-emerald-400 font-bold text-sm">48,250 / min</div>
              </div>
              <div className="bg-slate-900 rounded p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">DLT TEMPLATES</div>
                <div className="text-amber-300 font-bold text-sm">100% TRAI OK</div>
              </div>
            </div>

            <div className="p-2 bg-slate-950 rounded border border-slate-800 text-[10px] space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">WhatsApp Delivery:</span>
                <span className="text-emerald-400 font-bold">96.8% Instant</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">SMS Auto-Failover:</span>
                <span className="text-sky-300 font-bold">3.2% (15s Fallback)</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "vendor_supply":
      return (
        <div className={`rounded-xl overflow-hidden border border-[#0a192f]/15 bg-[#ffffff] text-[#0a192f] shadow-xl ${className}`}>
          {/* Header */}
          <div className="bg-[#0a192f] text-white px-3.5 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-semibold">AUTOMOTIVE VENDOR ERP TRACKER</span>
            </div>
            <span className="text-[10px] text-amber-300 bg-amber-500/20 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold">
              TIER-1 / TIER-2
            </span>
          </div>

          <div className="p-3.5 space-y-2 text-xs">
            <div className="p-2 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
              <div>
                <span className="text-[10px] text-slate-500 block">PURCHASE ORDER</span>
                <span className="font-extrabold text-sm text-[#0a192f]">#PO-RE-2026-89</span>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                ASN Dispatched
              </span>
            </div>

            <div className="border border-slate-200 bg-slate-50/50 rounded p-2 text-[10px] space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">QR Packing Slip:</span>
                <span className="text-emerald-700 font-bold">Verified at Plant Gate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Early Payment Discount:</span>
                <span className="text-amber-700 font-bold">2% Approved (7-Day Cycle)</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
