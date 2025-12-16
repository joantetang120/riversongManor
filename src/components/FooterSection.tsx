import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoRiversong from "@/assets/logo-riversong.png";

const quickLinks = [
  { label: "FAQ", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Request Brochure", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logoRiversong} 
                alt="Riversong Manor" 
                className="h-16 w-auto"
              />
            </div>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              A private 8,000-acre estate in Suffolk, England. Experience the
              perfect blend of luxury, nature, and British heritage.
            </p>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 tracking-luxury uppercase text-xs"
            >
              Download Brochure
            </Button>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:+441234567890"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:text-accent transition-colors duration-300" />
                <span className="font-body text-sm">+44 (0) 1234 567 890</span>
              </a>
              <a
                href="mailto:reservations@riversongmanor.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:text-accent transition-colors duration-300" />
                <span className="font-body text-sm">
                  reservations@riversongmanor.com
                </span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="font-body text-sm">
                  Sibton Park, Yoxford
                  <br />
                  Suffolk IP17 3LX
                  <br />
                  United Kingdom
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 link-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Riversong Manor. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
