import { person } from '../content'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  return (
    <Section id="contact" tone="lime">
      <Reveal from="left">
        <p className="max-w-xl text-2xl leading-snug">
          I am looking for senior front-end and full-stack roles. The fastest way to reach me is email.
        </p>
      </Reveal>
      <Reveal from="scale" delay={150} className="mt-10">
        <a
          href={`mailto:${person.email}`}
          className="block break-all text-4xl font-black tracking-[-0.05em] underline decoration-4 underline-offset-8 transition-opacity hover:opacity-70 sm:text-6xl lg:text-7xl"
        >
          {person.email}
        </a>
      </Reveal>
      <Reveal from="right" delay={300} className="mt-12">
        <SocialLinks />
      </Reveal>
    </Section>
  )
}
