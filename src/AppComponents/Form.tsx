import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}

type TProps = {
  onSubmit: (data: formData) => void;
};

const schema = z.object({
  name: z
    .string()
    .min(6, { message: "The name must be at least 6 characters long" }),
  email: z.string().email({ message: "Please enter a valid Email" }),
  message: z
    .string()
    .min(15, { message: "The Message must be at least 15 characters long" }),
});

export type formData = z.infer<typeof schema>;

const Form = ({ onSubmit }: TProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <Input {...register("name")} id="name" type="text" />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <Input {...register("email")} id="email" type="text" />{" "}
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
        <label htmlFor="message">Message</label>
        <Textarea
          placeholder="Type your message here."
          {...register("message")}
          id="message"
        />
        {errors.message && (
          <p className="text-red-700">{errors.message.message}</p>
        )}
        <Button type="submit">Submit</Button>
        {isSubmitted && <p>Thank you for submitting the form!</p>}
      </form>
    </>
  );
};

export default Form;
