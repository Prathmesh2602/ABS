"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedInterest = searchParams?.get("interest") || "";

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submissionError, setSubmissionError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      workEmail: "",
      phone: "",
      areaOfInterest:
        (preselectedInterest as ContactFormData["areaOfInterest"]) || "education-admissions",
      otherSolution: "",
      projectRequirement: "",
      consent: true,
    },
  });

  const selectedArea = useWatch({
    control,
    name: "areaOfInterest",
  });

  React.useEffect(() => {
    if (preselectedInterest) {
      const validOptions = [
        "education-admissions",
        "digital-governance",
        "examination-management",
        "recruitment-management",
        "workflow-automation",
        "mis-data-analytics",
        "custom-govt-llm",
        "secured-paper-delivery",
        "aums-agri-erp",
        "royal-enfield-vendor-erp",
        "other",
      ];
      if (validOptions.includes(preselectedInterest)) {
        setValue("areaOfInterest", preselectedInterest as ContactFormData["areaOfInterest"]);
      }
    }
  }, [preselectedInterest, setValue]);

  const onSubmit = async () => {
    setSubmissionError(null);
    try {
      // Simulate client submission to secure institutional API boundary
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSuccess(true);
      reset();
    } catch {
      setSubmissionError("Unable to submit consultation request. Please try again or use direct email.");
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] text-center flex flex-col items-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#16a34a] text-white flex items-center justify-center mb-6 shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#15803d]">
          Thank You! Your Request Has Been Received
        </h3>
        <p className="mt-4 text-base text-[#166534] max-w-lg leading-relaxed">
          Our project team in Pune will review your requirement and reach out to you within <strong>1 business day</strong>.
        </p>
        <div className="mt-8">
          <Button
            variant="primary"
            size="md"
            onClick={() => setIsSuccess(false)}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm space-y-6"
      noValidate
    >
      {submissionError && (
        <div className="p-4 rounded-lg bg-[#fef2f2] border border-[#fecaca] flex items-center gap-3 text-xs text-[#991b1b]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{submissionError}</span>
        </div>
      )}

      {/* Row 1: Name & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold uppercase tracking-wider text-[#0f294a] mb-2"
          >
            Your Full Name <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Dr. Rajesh Sharma / Shri. Anil Kulkarni"
            {...register("fullName")}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border text-sm text-[#0f172a] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7]",
              errors.fullName ? "border-[#ef4444] bg-[#fef2f2]/30" : "border-[#cbd5e1] hover:border-[#94a3b8]"
            )}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-[#ef4444] font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="organization"
            className="block text-xs font-bold uppercase tracking-wider text-[#0f294a] mb-2"
          >
            Department / University / College <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="organization"
            type="text"
            placeholder="e.g. State CET Cell / Directorate of Higher Education"
            {...register("organization")}
            aria-invalid={!!errors.organization}
            aria-describedby={errors.organization ? "organization-error" : undefined}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border text-sm text-[#0f172a] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7]",
              errors.organization ? "border-[#ef4444] bg-[#fef2f2]/30" : "border-[#cbd5e1] hover:border-[#94a3b8]"
            )}
          />
          {errors.organization && (
            <p id="organization-error" className="mt-1.5 text-xs text-[#ef4444] font-medium">
              {errors.organization.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Work Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="workEmail"
            className="block text-xs font-bold uppercase tracking-wider text-[#0f294a] mb-2"
          >
            Official Email Address <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="workEmail"
            type="email"
            placeholder="e.g. director@dhe.gov.in or registrar@university.ac.in"
            {...register("workEmail")}
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border text-sm text-[#0f172a] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7]",
              errors.workEmail ? "border-[#ef4444] bg-[#fef2f2]/30" : "border-[#cbd5e1] hover:border-[#94a3b8]"
            )}
          />
          {errors.workEmail && (
            <p id="workEmail-error" className="mt-1.5 text-xs text-[#ef4444] font-medium">
              {errors.workEmail.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-[#0f294a] mb-2"
          >
            Mobile / Contact Number <span className="text-xs text-[#64748b] font-normal lowercase">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98XXXXXXXX"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(
              "w-full px-4 py-2.5 rounded-lg border text-sm text-[#0f172a] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7]",
              errors.phone ? "border-[#ef4444] bg-[#fef2f2]/30" : "border-[#cbd5e1] hover:border-[#94a3b8]"
            )}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-[#ef4444] font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Which Solution Do You Need? */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="areaOfInterest"
            className="block text-xs font-bold uppercase tracking-wider text-[#0f294a] mb-2"
          >
            Which Solution Do You Need? <span className="text-[#ef4444]">*</span>
          </label>
          <select
            id="areaOfInterest"
            {...register("areaOfInterest")}
            aria-invalid={!!errors.areaOfInterest}
            aria-describedby={errors.areaOfInterest ? "areaOfInterest-error" : undefined}
            className="w-full px-4 py-2.5 rounded-lg border border-[#cbd5e1] text-sm text-[#0f172a] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          >
            <option value="education-admissions">Centralized Online Admissions (CET & CAP Rounds)</option>
            <option value="digital-governance">Government Portals & File Approvals</option>
            <option value="examination-management">University Examination & Results Management</option>
            <option value="recruitment-management">Staff & Teacher Recruitment (PAVITRA)</option>
            <option value="workflow-automation">College Salary & Grant Assessment (DHE)</option>
            <option value="mis-data-analytics">Statewide Education Dashboards & MIS</option>
            <option value="custom-govt-llm">AI Document OCR & Letter Drafter (GenAI)</option>
            <option value="secured-paper-delivery">Blockchain Question Paper Delivery Vault (Zero Leaks)</option>
            <option value="aums-agri-erp">University & Medical Campus Lifecycle ERPs</option>
            <option value="royal-enfield-vendor-erp">Automotive & Enterprise Vendor ERP</option>
            <option value="other">Other Solution / Custom Requirement (Specify Below)</option>
          </select>
          {errors.areaOfInterest && (
            <p id="areaOfInterest-error" className="mt-1.5 text-xs text-[#ef4444] font-medium">
              {errors.areaOfInterest.message}
            </p>
          )}
        </div>

        {/* Manual Text Input when 'Other' is selected */}
        {selectedArea === "other" && (
          <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <label
              htmlFor="otherSolution"
              className="block text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-1.5"
            >
              Please Specify Your Solution <span className="text-[#ef4444]">*</span>
            </label>
            <p className="text-xs text-slate-500 mb-2.5 font-normal">
              Type the specific portal, software, or workflow automation requirement for your department or organization.
            </p>
            <input
              id="otherSolution"
              type="text"
              placeholder="e.g. Prison Inmate Tracking CMS / Legal Aid Portal / Police Department Logistics"
              {...register("otherSolution")}
              aria-invalid={!!errors.otherSolution}
              aria-describedby={errors.otherSolution ? "otherSolution-error" : undefined}
              className={cn(
                "w-full px-4 py-2.5 rounded-lg border text-sm text-[#0f172a] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff6201]",
                errors.otherSolution ? "border-[#ef4444] bg-[#fef2f2]/40" : "border-orange-300 hover:border-orange-400"
              )}
            />
            {errors.otherSolution && (
              <p id="otherSolution-error" className="mt-1.5 text-xs text-[#ef4444] font-medium">
                {errors.otherSolution.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Row 4: Project Requirement Description */}
      <div>
        <label
          htmlFor="projectRequirement"
          className="block text-xs font-bold uppercase tracking-wider text-[#0f294a] mb-2"
        >
          Tell Us About Your Project Requirements <span className="text-[#ef4444]">*</span>
        </label>
        <textarea
          id="projectRequirement"
          rows={4}
          placeholder="Please describe your portal requirement, expected number of students or candidates, and timeline..."
          {...register("projectRequirement")}
          aria-invalid={!!errors.projectRequirement}
          aria-describedby={errors.projectRequirement ? "projectRequirement-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-lg border text-sm text-[#0f172a] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284c7]",
            errors.projectRequirement ? "border-[#ef4444] bg-[#fef2f2]/30" : "border-[#cbd5e1] hover:border-[#94a3b8]"
          )}
        />
        {errors.projectRequirement && (
          <p id="projectRequirement-error" className="mt-1.5 text-xs text-[#ef4444] font-medium">
            {errors.projectRequirement.message}
          </p>
        )}
      </div>

      {/* Row 5: Consent */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 w-4 h-4 rounded text-[#0284c7] border-[#cbd5e1] focus:ring-[#0284c7]"
          />
          <span className="text-xs text-[#475569] leading-relaxed">
            I confirm that this inquiry is on behalf of a government department, university, college, or examination body.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-[#ef4444] font-medium">
            {errors.consent.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="orange"
          size="lg"
          className="w-full sm:w-auto min-w-[220px]"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4 text-white" />}
        >
          {isSubmitting ? "Submitting Inquiry..." : "Schedule Technical Consultation"}
        </Button>
      </div>
    </form>
  );
}
