import { Linkedin, Mail } from "lucide-react";
import { FooterLayout } from "./ui/footer";

export function Footer() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <FooterLayout
        logo={null}
        brandName="GEORGI BIRMAN"
        socialLinks={[
          {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/george-birman/",
            label: "LinkedIn",
          },
          {
            icon: <Mail className="h-5 w-5" />,
            href: "mailto:birmangeorgi@gmail.com",
            label: "Email",
          },
        ]}
        mainLinks={[
          { href: "https://keyscout.com/", label: "KeyScout" },
          { href: "/project/hestiva-platforms", label: "Hestiva Platforms" },
          { href: "/project/tanaruz-boats", label: "Tanaruz Boats" },
          { href: "/project/rawidea", label: "RAW IDEA" },
        ]}
        copyright={{
          text: `© ${new Date().getFullYear()} Georgi Birman. All rights reserved.`,
        }}
      />
    </div>
  );
}
