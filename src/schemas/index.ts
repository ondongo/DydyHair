import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const RdvSchema = z.object({
  name: z.string().min(1, { message: "Nom requis" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  phoneInputWithCountrySelect: z
    .string()
    .min(1, { message: "Numéro de téléphone requis" })
    .refine(
      (value) => isValidPhoneNumber(value),
      {
        message:
          "Numéro de téléphone invalide, veuillez saisir un numéro correspondant au pays choisi",
        path: ["phoneInputWithCountrySelect"],
      }
    ),
  date: z.string().min(1, { message: "Date requise" }),
  time: z.string().min(1, { message: "Heure requise" }),
  service: z.string().min(1, { message: "Service requis" }),
  haircut: z.string().min(1, { message: "Type de coupe requis" }),
});

export type RdvType = z.infer<typeof RdvSchema>;

