import { MotionCard } from "@/src/components/atoms/MotionCard";
import { SectionLabel } from "@/src/components/atoms/SectionLabel";
import { SocialLink } from "@/src/components/atoms/SocialLink";
import { socials } from "@/src/data/portfolio";

export function ContactCard() {
  return (
    <MotionCard className="cell c-contact" id="contact" delay={0.45}>
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
            <span aria-hidden="true">mail</span>
            hello@rusith.dev
            <span aria-hidden="true">-&gt;</span>
          </SocialLink>
          <div className="socials">
            {socials.map((name) => (
              <SocialLink label={name} variant="icon" key={name} />
            ))}
          </div>
        </div>
      </div>
    </MotionCard>
  );
}
