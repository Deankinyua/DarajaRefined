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
        <h1 className="text-center text-2xl font-extrabold tracking-tight">
          Send Us A Message:
        </h1>
        <label htmlFor="name">Name</label>
        <Input
          {...register("name")}
          className="mt-3 mb-3"
          id="name"
          type="text"
        />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <Input
          {...register("email")}
          id="email"
          className="mt-3 mb-3"
          type="text"
        />{" "}
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
        <label htmlFor="message">Message</label>
        <Textarea
          placeholder="Type your message here."
          {...register("message")}
          id="message"
          className="mt-3 mb-3"
        />
        {errors.message && (
          <p className="text-red-700">{errors.message.message}</p>
        )}
        <Button type="submit" className="mt-3 mb-3">
          Submit
        </Button>

      </form>
    </>
  );
};

export default Form;
