import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber1: z
    .string()
    .min(1, "شماره تماس الزامی است")
    .refine((val) => /^07/.test(val), { message: "شماره تماس با 07 شروع کنید" })
    .refine((val) => /^07[0-9]{8}$/.test(val), { message: "شماره نامکمل" }),
  password: z
    .string()
    .min(1, "رمز الزامی است")
    .min(4, "رمز حداقل 4 حرف باشد"),
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

export const BecomeAgentSchema = z.object({
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
  email: z
  .any()
  .optional()
  .nullable()
  .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: "ایمیل معتبر وارد کنید",
  }),
  province: z
  .string()
  .min(2, 'ولایت الزامی است'),
    district: z
  .string()
  .min(1, 'ناحیه چند'),
  username: z
  .string()
  .optional(),
  phoneNumber2: z
  .string()
  .min(1, 'شماره تماس الزامی است')
  .refine((val) => /^07/.test(val), {message: "شماره تماس باید با 07 شروع کنید"})
  .refine((val) => /^07[0-9]{8}$/.test(val), {message: "شماره تماس نامکمل"}),
  agencyName: z
  .string()
  .min(2, 'نام دفتر معاملات الزامی است'),
  experienceYears: z
  .string()
  .min(1, 'تجربه کاری الزامی است اگر ندارید هم ذکر کنید'),
  specialization: z
  .string()
  .min(1, 'ساحه تجربه کاری دارید'),
  bio: z
  .string()
  .min(1, ' در مورد خود و تجربه کاری خود معلومات ارایه کنید')
  .min(50, 'بیوگرافی باید حداقل 50 حرف باشد')

})


export const propertySchema = z.object({

  title: z.string().nonempty("عنوان ملک الزامی است"),

  description: z.string().min(1,"توضیحات الزامی است").max(200, "توضیحات نباید بیشتر 200 حرف باشد"),

  propertyType:   z.string()
  .min(1, "نوع ملک الزامی است")
  .refine(val =>
    ["apartment", "house", "villa", "room", "studio", "commercial", "land"].includes(val),
    { message: "نوع ملک نامعتبر است" }
  ),
transaction: z
  .string()
  .nonempty("نوع معامله الزامی است")
  .refine(
    val => ["rent", "sell", "gerawi"].includes(val),
    { message: "نوع معامله نامعتبر است" }
  ),

  location: z.object({
    province: z.string().min(2,"ولایت الزامی است"),
    city: z.string().min(2,"شهر الزامی است"),
    district: z.string().min(2,"ناحیه الزامی است"),
    streetAddress: z.string().min(2,"آدرس الزامی است"),
    exactLocation: z.string().optional(),
    landmark: z.string().min(2,"نشانگر الزامی است"),
  }),

  details: z.object({
  bedroom: z
    .string()
    .min(1, "تعداد اتاق خواب الزامی است"),
  
  bathroom: z
    .string()
    .min(1, "تعداد حمام الزامی است"),
  
  area: z
    .string()
    .min(1, "متراژ الزامی است"),
  
  floor: z
    .string()
    .min(1, "طبقه الزامی است"),
  
  totalFloor: z
    .string()
    .min(1, "کل طبقات الزامی است"),
  
  yearBuild: z
    .string()
    .min(1, "سال تأسیس الزامی است"),
  furniture: z
    .string()
    .nullable()
    .optional()
    // .min(1, "وضعیت مبلمان الزامی است"),
  ,
  parking: z
    .string()
    .nullable()
    .optional()

    // .min(1, "پارکینگ الزامی است"),
  ,
  security: z
    .string()
    .nullable()
    .optional()

    // .min(1, "امنیت الزامی است"),
  }),

  amenities: z
    .array(
      z.enum([
        "parking",
        "elevator",
        "security",
        "garden",
        "pool",
        "balcony",
        "ac",
        "heating",
        "internet",
        "calble_tv",
        "pet_friendly",
        "furniture",
      ])
    )
    .optional(),

  price: z.object({
    amount: z.string().min(2, "مقدار الزامی است" ),
    currency: z.string().min(1,'لطفا واحد پولی را نیز انتخاب کنید'),
    period: z.string().optional(),
    negotiable: z.string().min(2, "ذکر کنید قابل مذاکره است یا خیر" ),
  }),
media: z
  .array(
    z.object({
      url: z.any(),
      public_id: z.number(),
      caption: z.string().max(200).optional(),
      isPrimary: z.boolean().optional()
    })
  )
  .min(1, "حداقل یک عکس لازم است")
});


export const profileSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ حرف باشد").max(50),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ حرف باشد").max(50),
  phoneNumber1: z.string().min(9, "شماره تماس معتبر وارد کنید"),
  email: z.string().email("ایمیل معتبر وارد کنید").optional().or(z.literal('')),
  province: z.string().optional(),
  district: z.string().optional(),
  password: z.string().min(2, "رمز عبور باید حداقل ۲ حرف باشد").optional().or(z.literal('')),
  confirmPassword: z.string().optional()
}).refine((data) => {
  if (data.password && data.password !== data.confirmPassword) {
    return false;
  }
  return true;
}, {
  message: "رمز عبور و تکرار آن مطابقت ندارند",
  path: ["confirmPassword"]
});
