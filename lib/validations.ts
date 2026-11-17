import { z } from "zod";

export const contactFormSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Full name must not exceed 100 characters"),
    organization: z
      .string()
      .min(2, "Organization / Department name must be at least 2 characters")
      .max(150, "Organization name must not exceed 150 characters"),
    workEmail: z
      .string()
      .email("Please provide a valid work email address"),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
        {
          message: "Please provide a valid phone number",
        }
      ),
    areaOfInterest: z.enum(
      [
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
      ],
      {
        errorMap: () => ({ message: "Please select a solution" }),
      }
    ),
    otherSolution: z
      .string()
      .max(200, "Specification must not exceed 200 characters")
      .optional(),
    projectRequirement: z
      .string()
      .min(20, "Please provide at least 20 characters describing your requirement")
      .max(2000, "Description must not exceed 2000 characters"),
    consent: z.literal(true, {
      errorMap: () => ({ message: "You must consent to confidential requirement review" }),
    }),
  })
  .refine(
    (data) => {
      if (data.areaOfInterest === "other") {
        return !!data.otherSolution && data.otherSolution.trim().length >= 2;
      }
      return true;
    },
    {
      message: "Please specify the solution or requirement you need",
      path: ["otherSolution"],
    }
  );

export type ContactFormData = z.infer<typeof contactFormSchema>;

