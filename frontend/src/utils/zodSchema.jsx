import { z } from "zod";

export const loginSchema = z.object({
  name: z
    .string()
    .min(1, "نام الزامی است")
    .min(2, "نام شما حداقل باید دو حرف باشد"),
  phoneNumber1: z
    .string()
    .min(1, "شماره تماس الزامی است")
    .refine((val) => /^07/.test(val), { message: "شماره تماس با 07 شروع کنید" })
    .refine((val) => /^07[0-9]{8}$/.test(val), { message: "شماره نامکمل" }),
});

export const signupSchema = z.object({
  name: z
  .string()
  .min(1, 'نام الزامی است')
  .min(2, 'نام شما حداقل باید دو حرف باشد'),
  phoneNumber1: z
  .string()
  .min(1, 'شماره تماس الزامی است')
  .refine((val) => /^07/.test(val), {message: "شماره تماس باید با 07 شروع کنید"})
  .refine((val) => /^07[0-9]{8}$/.test(val), {message: "شماره تماس نامکمل"}),
  lastName: z
  .string()
  .min(1, 'نام خانوادگی الزامی است')
  .min(2, 'نام خانوادگی باید حداقل 2 حرف باشد'),
  password: z
  .string()
  .min(1, 'رمز الزامی است')
  .min(4, 'رمز حداقل 4 حرف باشد'),
  email: z
  .any()
  .optional()
  .nullable()
  .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: "ایمیل معتبر وارد کنید",
  }),
  province: z
  .string()
  .optional(),
    district: z
  .string()
  .optional(),  
  username: z
  .string()
  .optional(),
})
