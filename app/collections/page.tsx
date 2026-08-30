import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { CollectionCard } from "@/components/CollectionCard";
import { JsonLd } from "@/components/JsonLd";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  COLLECTIONS_ANSWER,
  COLLECTIONS_BODY,
  COLLECTIONS_HOW_TO_READ,
  COLLECTIONS_LOTS_ANSWER,
  COLLECTIONS_SIZE_ANSWER,
  COLLECTIONS_WHAT_TO_WATCH,
  COLLECTION_CARD,
  HUB_URL,
  PAGE_META,
  TOWNS_URL,
  UNVERIFIED_NOTE,
} from "@/lib/content";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { metadataByKey } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata = metadataByKey.collections();

export default function CollectionsPage() {
  const meta = PAGE_META.collections;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Collections", path: "/collections" },
        ])}
      />
      <PageHeader h1={meta.h1} />
      <Section labelledBy="answer">
        <AnswerFirstSummary heading="Will Bridgelands have a detached-home collection?">
          {COLLECTIONS_ANSWER}
        </AnswerFirstSummary>
        <div className="mt-8">
          <AnswerFirstSummary heading="How big are Bridgelands detached homes expected to be?">
            {COLLECTIONS_SIZE_ANSWER}
          </AnswerFirstSummary>
        </div>
        <div className="mt-8">
          <AnswerFirstSummary heading="What lot widths will Bridgelands detached homes have?">
            {COLLECTIONS_LOTS_ANSWER}
          </AnswerFirstSummary>
        </div>
      </Section>
      <Section alt labelledBy="card">
        <SectionHeading id="card">Expected detached-home collection</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          The card below describes a collection that is a reasonable expectation based on SouthCal
          in Caledon and The Castle Mile in Brampton. It is not a confirmed Bridgelands unit mix.
        </p>
        <div className="mt-10 max-w-2xl">
          <CollectionCard {...COLLECTION_CARD} />
        </div>
        <p className="mt-6 text-sm text-text-muted">{UNVERIFIED_NOTE}</p>
        <SpecsDisclaimer className="mt-4" />
      </Section>
      <Section labelledBy="context">
        <SectionHeading id="context">What is known, and what is inferred</SectionHeading>
        <div className="mt-6">
          <Prose>
            {COLLECTIONS_BODY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="watch">
        <SectionHeading id="watch">What to watch for at release</SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {COLLECTIONS_WHAT_TO_WATCH.map((item) => (
            <article key={item.title} className="stat-card">
              <h3 className="font-display text-lg font-semibold text-brand-deep">{item.title}</h3>
              <p className="mt-3 text-sm text-text-primary">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Prose>
            {COLLECTIONS_HOW_TO_READ.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <p className="mt-8 max-w-[62ch] text-text-primary">
          Townhome product, if confirmed, is covered at{" "}
          <TextLink href={TOWNS_URL} external>
            bridgelandstowns.ca
          </TextLink>
          . For the full project overview, see{" "}
          <TextLink href={HUB_URL} external>
            bridgelands-woodbridge.ca
          </TextLink>
          .{" "}
          <TextLink href="/pricing">View current pricing status</TextLink>.
        </p>
      </Section>
      <PageFootForm formId="collections-register" />
    </>
  );
}
