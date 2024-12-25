import { z } from "zod";

const ColorSchema = z.object({
  name: z.string(),
  hex: z.string(),
});

const ColorCategorySchema = z.object({
  category: z.string(),
  isNegative: z.boolean(),
  colors: z.array(ColorSchema),
});

const DayDataSchema = z.object({
  dayEn: z.string(),
  dayTh: z.string(),
  colors: z.array(ColorCategorySchema),
});

const ColorFileSchema = z.object({
  data: z.array(DayDataSchema),
  latestUpdate: z.string(),
});

export type Color = z.infer<typeof ColorSchema>;
export type ColorCategory = z.infer<typeof ColorCategorySchema>;
export type DayData = z.infer<typeof DayDataSchema>;
export type ColorFile = z.infer<typeof ColorFileSchema>;
export { ColorSchema, ColorCategorySchema, DayDataSchema, ColorFileSchema };
