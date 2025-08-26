import LightContainer from "@/components/containers/Light";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <LightContainer>
      <section className="mx-auto py-12 max-w-7xl text-zinc-800 dark:text-zinc-200">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-4">
          Tori Training LLC (the “Company”) is committed to maintaining robust
          privacy protections for its users. Our Privacy Policy (“Privacy
          Policy”) is designed to help you understand how we collect, use and
          safeguard the information you provide to us and to assist you in
          making informed decisions when using our Service.
        </p>
        <p className="mb-4">
          For purposes of this Agreement, “Site” refers to the Company’s
          website, which can be accessed at{" "}
          <a
            href="https://www.toritraining.com"
            className="text-primary-blue-700 dark:text-primary-blue-300 underline"
          >
            www.toritraining.com
          </a>
          .
        </p>
        <p className="mb-4">
          “Service” refers to the Company’s services accessed via the Site, in
          which users can purchase training and nutrition coaching.
        </p>
        <p className="mb-4">
          The terms “we,” “us,” and “our” refer to the Company. “You” refers to
          you, as a user of our Site or our Service.
        </p>
        <p className="mb-6">
          By accessing our Site or our Service, you accept our Privacy Policy
          and Terms of Use (found here in the footer), and you consent to our
          collection, storage, use and disclosure of your Personal Information
          as described in this Privacy Policy.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">
          I. Information We Collect
        </h2>
        <p className="mb-4">
          We collect “Non-Personal Information” and “Personal Information.”
          Non-Personal Information includes information that cannot be used to
          personally identify you, such as anonymous usage data, general
          demographic information, referring/exit pages and URLs, platform
          types, preferences, and number of clicks. Personal Information
          includes your email, full name, and date of birth, which you submit to
          us through the registration process.
        </p>
        <ol className="mb-6 list-decimal space-y-3 pl-6">
          <li>
            <strong>Information collected via Technology:</strong> To activate
            the Service you only need to provide an email address. To use the
            Service thereafter, you may need to submit further Personal
            Information. This site does not collect cookies.
          </li>
          <li>
            <strong>Information you provide by registering:</strong> When you
            create a personal profile, you authorize us to collect, store and
            use your email address in accordance with this Privacy Policy.
          </li>
          <li>
            <strong>Children’s Privacy:</strong> We do not knowingly collect
            information from anyone under the age of 13. If we discover such
            information has been collected, we will delete it immediately.
            Please contact us at{" "}
            <a
              href="mailto:torihogantraining@gmail.com"
              className="text-primary-blue-700 dark:text-primary-blue-300 underline"
            >
              torihogantraining@gmail.com
            </a>{" "}
            if you believe this has occurred.
          </li>
        </ol>

        <h2 className="mb-4 text-2xl font-semibold">
          II. How We Use and Share Information
        </h2>
        <p className="mb-4">
          Except as otherwise stated, we do not sell, trade, rent or otherwise
          share your Personal Information with third parties without your
          consent. We may share information with vendors performing services for
          the Company (such as email servers). Vendors use your information only
          in accordance with our Privacy Policy.
        </p>
        <p className="mb-4">
          We may share information if required by law, to enforce our Terms of
          Service, to address fraud or security concerns, or to protect rights
          and safety.
        </p>
        <p className="mb-6">
          Non-Personal Information may be used freely to improve the Service,
          track trends, or shared with partners and advertisers. In the event of
          a business transaction such as a merger or acquisition, Personal
          Information may be transferred as an asset.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">
          III. How We Protect Information
        </h2>
        <p className="mb-6">
          We implement security measures such as encryption, firewalls, and SSL
          technology. However, no system is completely secure. By using our
          Service, you acknowledge and assume these risks.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">
          IV. Your Rights Regarding Personal Information
        </h2>
        <p className="mb-6">
          You can opt out of marketing communications at any time by following
          unsubscribe instructions in emails or by contacting us at{" "}
          <a
            href="mailto:torihogantraining@gmail.com"
            className="text-primary-blue-700 dark:text-primary-blue-300 underline"
          >
            torihogantraining@gmail.com
          </a>
          . Administrative emails may still be sent.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">
          V. Links to Other Websites
        </h2>
        <p className="mb-6">
          Our Service may contain links to other websites. We are not
          responsible for their privacy practices. Please review their privacy
          policies before using them.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">
          VI. Changes to Our Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Significant
          changes will be announced by email or via a prominent notice on our
          site 30 days before going into effect. Non-material changes will take
          effect immediately. Please check this page periodically.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">VII. Contact Us</h2>
        <p>
          If you have any questions, please contact us at{" "}
          <a
            href="mailto:torihogantraining@gmail.com"
            className="text-primary-blue-700 dark:text-primary-blue-300 underline"
          >
            torihogantraining@gmail.com
          </a>
          .
        </p>
        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
          Last Updated: 8/20/2025
        </p>
      </section>
    </LightContainer>
  );
};

export default PrivacyPolicyPage;
