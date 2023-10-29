import { EmailTemplateProps } from "@/types";

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Contact Message: {message}</li>
      </ul>
    </div>
  );
};

export default EmailTemplate;
