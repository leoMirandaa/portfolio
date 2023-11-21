import { useState, FormEvent } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

export const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isInvalidName, setIsInvalidName] = useState<boolean>(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      setIsInvalidName(true);
    } else {
      setIsInvalidName(false);
    }

    if (email === "") {
      setIsInvalidEmail(true);
    } else {
      setIsInvalidEmail(false);
    }

    if (message === "") {
      setIsInvalidMessage(true);
    } else {
      setIsInvalidMessage(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-3xl font-bold">Contact with me</h2>
      <p className="text-lg text-gray-400">
        You can also get in touch with me through this form below.
      </p>

      <Input
        type="text"
        label="Name"
        placeholder="John Doe"
        isInvalid={isInvalidName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        errorMessage={isInvalidName && "Please enter your name"}
      />

      <Input
        type="email"
        label="Email"
        placeholder="john.doe@example.com"
        isInvalid={isInvalidEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={isInvalidEmail && "Please enter a valid email"}
      />

      <Textarea
        type="text"
        label="Message"
        placeholder="Enter your message here"
        minRows={5}
        isInvalid={isInvalidMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        errorMessage={isInvalidMessage && "Please enter your message"}
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
};
