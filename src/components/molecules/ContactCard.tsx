import { MotionCard } from "@/src/components/atoms/MotionCard";
import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { SocialIcon } from "@/src/components/atoms/SocialIcon";
import { SocialLink } from "@/src/components/atoms/SocialLink";
import { socials } from "@/src/data/portfolio";

export function ContactCard() {
  return (
    <MotionCard className="cell c-contact" id="contact" delay={0.5}>
      <div className="contact">
        <div className="contact-left">
          <SectionLabel>Get in touch</SectionLabel>
          <div className="contact-h">
            Let&apos;s build something <em>worth shipping.</em>
          </div>
          <div className="contact-sub">Reply time under 24h. Bring problems, not just specs.</div>
        </div>
        <div className="contact-right">
          <SocialLink href="mailto:hello@rusith.dev" label="Email" variant="primary">
            <SocialIcon name="mail" size={14} />
            hello@rusith.dev
            <span aria-hidden="true">-&gt;</span>
          </SocialLink>
          <div className="socials">
            {socials.map((social) => (
              <SocialLink href={social.href} label={social.label} variant="icon" key={social.label}>
                <SocialIcon name={social.icon} />
              </SocialLink>
            ))}
          </div>
        </div>
      </div>
    </MotionCard>
  );
}
