"use client";

import * as React from "react";
import { CheckCircle2, ArrowRight, Sparkles, Layers } from "lucide-react";

interface WorkflowStep {
  step: number;
  title: string;
  detail: string;
}

export function InteractiveWorkflowFlowchart({
  workflow,
}: {
  workflow: WorkflowStep[];
}) {
  const [activeStep, setActiveStep] = React.useState<number>(1);

  return (
    <div className="w-full bg-[#070e1b] border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden text-white shadow-2xl">
      {/* Background Atmosphere (Zero Dots, Solid Vector Gradients) */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#ff6201]/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#0284c7]/15 blur-[100px] pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
            <span>Interactive Workflow Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black !text-white tracking-tight">
            End-to-End Operational Lifecycle
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          STEP <span className="text-[#ff6201] font-bold">0{activeStep}</span> OF 0{workflow.length}
        </div>
      </div>

      {/* Interactive Flow Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
        {workflow.map((item, idx) => {
          const isActive = activeStep === item.step;
          const isPassed = activeStep > item.step;

          return (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                isActive
                  ? "bg-[#0d203c] border-[#ff6201] shadow-[0_0_30px_rgba(255,98,1,0.25)] scale-102"
                  : "bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
              }`}
            >
              {/* Top Step Pill */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-[#ff6201] text-white shadow-[0_2px_12px_rgba(255,98,1,0.4)]"
                      : isPassed
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  0{item.step}
                </span>

                {idx < workflow.length - 1 && (
                  <ArrowRight
                    className={`w-4 h-4 hidden lg:block transition-colors ${
                      isActive ? "text-[#ff6201]" : "text-slate-600"
                    }`}
                  />
                )}
              </div>

              {/* Title & Detail */}
              <div>
                <h4
                  className={`text-base font-bold transition-colors leading-snug ${
                    isActive ? "!text-white" : "!text-slate-200"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Active Status Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span
                  className={
                    isActive
                      ? "text-[#ff6201] font-bold"
                      : "text-slate-500"
                  }
                >
                  {isActive ? "ACTIVE STAGE" : "STAGE 0" + item.step}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#ff6201] animate-ping" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
