const z =require('zod');
const emailSchema = z.string().email()
const passwordSchema = z.string().min(8).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
const phoneNumberSchema = z.string().length(10)
const objectSchema = z.object({
    username: z.string(),
    age: z.number()
})
console.log(emailSchema.parse('uno@uno.com'))
console.log(passwordSchema.parse('Password1!'))
console.log(phoneNumberSchema.parse('1234567890'))
console.log(objectSchema.parse({username: 'uno', age: 21}))