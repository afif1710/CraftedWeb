import { useEffect, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, Mail, MapPin, ShieldCheck } from "lucide-react";
import Header from "@/components/marketplace/Header";
import Footer from "@/components/marketplace/Footer";
import SEO from "@/components/SEO";

type Page = "overview" | "privacy" | "terms";
const updated = "8 October 2026";
const contact = "craftedwebstudio@gmail.com";
const linkStyle = "text-solar-gold underline underline-offset-4 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solar-gold rounded-sm";
const pages = {
  overview: {
    path: "/lead-finder",
    label: "Overview",
    title: "Lead Finder",
    description: "A personal desktop workflow for finding public business listings, organizing contacts and sending authorized first emails.",
  },
  privacy: {
    path: "/lead-finder/privacy",
    label: "Privacy policy",
    title: "Privacy policy",
    description: "How Lead Finder accesses, uses, stores and shares information, including its Google account and Gmail permissions.",
  },
  terms: {
    path: "/lead-finder/terms",
    label: "Terms of use",
    title: "Terms of use",
    description: "The purpose, operator responsibilities and limits of the personal Lead Finder workflow.",
  },
} satisfies Record<Page, { path: string; label: string; title: string; description: string }>;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-card-bg/70 p-6 sm:p-8">
      <h2 className="mb-4 text-2xl text-white">{title}</h2>
      <div className="space-y-4 text-base leading-7 text-nav-gray">{children}</div>
    </section>
  );
}

function Contact() {
  return <a href={`mailto:${contact}`} className={`${linkStyle} break-words`}>{contact}</a>;
}

function Overview() {
  const features = [
    { icon: MapPin, title: "Find and organize businesses", text: "The locally installed Maps extension collects public business listings. The workflow filters listings with no website shown on Google Maps, checks individual profiles, removes duplicates and saves CSV files." },
    { icon: FileText, title: "Look up business contacts", text: "Optional Snov.io API searches match business identities and return available email addresses. Ambiguous matches are set aside, and normal outreach uses only matched, verified contacts." },
    { icon: Mail, title: "Send authorized first emails", text: "After the owner connects their Google account, the local workflow prepares individual website-service introductions and submits an authorized, limited batch through Gmail. Replies are handled by the owner." },
  ];
  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <section key={title} className="rounded-2xl border border-white/10 bg-card-bg/70 p-6 sm:p-8">
            <div className="mb-6 inline-flex rounded-xl border border-solar-gold/20 bg-solar-gold/10 p-3">
              <Icon className="h-5 w-5 text-solar-gold" aria-hidden="true" />
            </div>
            <h2 className="mb-3 text-2xl text-white">{title}</h2>
            <p className="text-base leading-7 text-nav-gray">{text}</p>
          </section>
        ))}
      </div>
      <div className="mx-auto grid max-w-4xl gap-6">
        <Section title="Personal use, local control">
          <p>Lead Finder is operated by Afif of CraftedWeb Studio for personal business outreach. These pages are public information about the tool, not a hosted automation service. Visitors cannot run it, connect an account or access the owner’s contacts or credentials through this website.</p>
          <p>The workflow runs on the owner’s computer. Google authorization, API credentials, lead files and send history remain in local storage rather than being uploaded to this website. Configured limits and saved history help prevent repeated searches and duplicate emails.</p>
        </Section>
        <Section title="Why Google permission is requested">
          <p>Google account identity and email permissions confirm which account the owner selected. Gmail send permission lets the workflow submit the messages the owner authorizes. It does not grant access to read the inbox, collect incoming emails or manage replies.</p>
          <p>For the full explanation of data access, sharing, retention and revocation, read the <Link to={pages.privacy.path} className={linkStyle}>Lead Finder privacy policy</Link>. The <Link to={pages.terms.path} className={linkStyle}>terms of use</Link> explain operator responsibilities and limitations.</p>
        </Section>
        <Section title="Contact and support">
          <p>For questions about Lead Finder or its handling of information, contact Afif at <Contact />.</p>
        </Section>
      </div>
    </>
  );
}

function Privacy() {
  return (
    <>
      <Section title="1. Scope and operator">
        <p>This policy covers the personal Lead Finder desktop workflow and its information pages. Afif of CraftedWeb Studio operates the tool. It covers Maps listing collection, optional Snov.io contact lookup and Gmail sending; it does not replace the terms for template purchases.</p>
        <p>For privacy questions or requests concerning information held by the operator, contact <Contact />.</p>
      </Section>
      <Section title="2. Google account access">
        <p>The owner authorizes a Google Desktop OAuth client. The workflow requests only these permissions:</p>
        <ul className="list-disc space-y-3 pl-5 marker:text-solar-gold">
          <li><strong className="font-medium text-white">Account identity and email (openid and email):</strong> confirm the selected account and its verified email address so messages use the intended sender.</li>
          <li><strong className="font-medium text-white">Gmail sending (gmail.send):</strong> submit the outgoing messages authorized by the owner. Recipients, subjects and message bodies are sent to Gmail for delivery.</li>
        </ul>
        <p>Lead Finder does not request inbox-reading permissions, retrieve incoming messages, access Google Contacts, delete received mail or automatically handle replies. It stores the selected account identity, OAuth client configuration, access and refresh tokens, and token expiry information locally to authenticate authorized actions.</p>
      </Section>
      <Section title="3. Business and outreach information">
        <p>Local lead files may contain public business names, telephone numbers, categories, addresses, Maps links and listed-website status. Snov.io searches receive business names or associated domains and return company evidence, available contacts and email-verification results. Google authorization tokens are not sent to Snov.io.</p>
        <p>Drafts and send records may contain recipient addresses, message text, the configured sender’s contact details, timestamps, submission outcomes and Gmail message IDs. Suppression records help avoid contacting businesses that have opted out.</p>
      </Section>
      <Section title="4. Use and sharing">
        <p>Google account information is used to verify the sender and carry out authorized email sending. Gmail receives outgoing messages, and delivered messages are shared with their intended recipients. Business lookup information is shared with Snov.io only for the requested contact searches.</p>
        <p>Lead Finder does not sell Google user data, share it with advertising platforms or data brokers, use it for personalized advertising, or use it to train AI or machine-learning models. The local workflow does not automatically upload Google user data to an AI service. Human access is limited to the operator and assistance the operator expressly authorizes.</p>
        <p>Information obtained from Google APIs is handled for the features described here in accordance with the <a href="https://developers.google.com/terms/api-services-user-data-policy" className={linkStyle} target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including its Limited Use requirements.</p>
      </Section>
      <Section title="5. Storage and security">
        <p>Credentials, authorization tokens, CSVs, drafts and send history are stored on the operator’s computer. They are excluded from the public website and source-control commits. Google and Snov.io API connections use HTTPS.</p>
        <p>Local files rely on the computer’s account and filesystem access controls; the application does not encrypt them at rest. The operator is responsible for protecting the device, any backups and access granted to other tools. No Lead Finder account or Google authorization is collected from visitors to these information pages.</p>
      </Section>
      <Section title="6. Retention, deletion and revocation">
        <p>Local records are retained until the operator removes them; there is no automatic retention period. The operator can revoke Lead Finder’s permission in their <a href="https://myaccount.google.com/connections" className={linkStyle} target="_blank" rel="noopener noreferrer">Google Account’s third-party connections</a> and remove the local authorization file to disconnect the tool.</p>
        <p>When the workflow is stopped, the operator can delete local tokens, contact exports, drafts or other records. Deleting send or suppression history can remove duplicate-contact protections. Revoking access or deleting local files does not remove messages already sent from Gmail or recipients’ mailboxes.</p>
        <p>Business contacts may ask the operator to correct or remove their held information, or stop outreach, by replying to a message or emailing <Contact />. Minimal suppression information may be kept to honor a request not to be contacted again.</p>
      </Section>
      <Section title="7. Visiting these information pages">
        <p>Vercel hosts this website and may process ordinary request information, such as an IP address, browser details and requested URL, to serve and protect the pages. The website’s existing Google Analytics integration, when configured, records page visits and may use cookies. The website also uses local storage for preferences such as its theme.</p>
        <p>The Lead Finder workflow does not send its Google tokens, local contacts or message bodies to website analytics. See <a href="https://vercel.com/legal/privacy-policy" className={linkStyle} target="_blank" rel="noopener noreferrer">Vercel’s privacy policy</a> and <a href="https://policies.google.com/privacy" className={linkStyle} target="_blank" rel="noopener noreferrer">Google’s privacy policy</a> for their practices.</p>
      </Section>
      <Section title="8. Policy updates">
        <p>The date above identifies this policy’s latest update. Material changes to Google-data use will be disclosed here, and any additional access or changed use will require the owner’s consent before it is used.</p>
      </Section>
    </>
  );
}

function Terms() {
  return (
    <>
      <Section title="1. Purpose and access">
        <p>Lead Finder is a personal desktop tool operated by Afif of CraftedWeb Studio. These pages explain the tool and its policies; they do not offer a public account, hosted automation service or access to its local files. Visiting this website does not authorize any email sending or Google-account access.</p>
        <p>These terms apply to Lead Finder. Template purchases remain governed by the existing <Link to="/license" className={linkStyle}>CraftedWeb Studio Terms &amp; License</Link>.</p>
      </Section>
      <Section title="2. Operator control and authorization">
        <p>The operator must control the sender account or have its owner’s permission, supply the required local settings and approve Google authorization. The workflow prepares individual first messages and submits only an authorized, limited batch. It does not automatically manage replies or send follow-ups.</p>
        <p>Normal outreach requires a matched, verified business contact. Any explicitly authorized unverified test is limited to its selected recipient and does not permit unverified bulk sending. Saved send history and suppression records must be preserved to prevent repeat contact.</p>
      </Section>
      <Section title="3. Responsible use">
        <p>The operator is responsible for accurate sender information, appropriate recipients and message content, honoring opt-outs, and following applicable communication laws and the policies of Google Maps, Gmail and Snov.io. Do not impersonate others, contact suppressed recipients, bypass access controls or human-verification challenges, or use Google user data outside the purposes disclosed in the privacy policy.</p>
      </Section>
      <Section title="4. Third-party services and availability">
        <p>Google Maps, Gmail and Snov.io are independent services with their own terms, permissions, account limits and availability. Search layouts, listed information, email-verification results and API access can change. Snov.io may require credits or a suitable plan; this website does not provide those services or guarantee their availability.</p>
      </Section>
      <Section title="5. Limits and review">
        <p>A missing website on a Maps profile does not establish that a business has no website elsewhere. Business information and contacts must be reviewed before outreach. Lead Finder does not guarantee a particular number of leads, an email address for each business, inbox delivery, replies or business results.</p>
        <p>The workflow stops at configured limits or conditions requiring attention. A successful Gmail response confirms submission, not delivery. If a send outcome is uncertain, the operator must inspect Gmail Sent before considering further action; the workflow does not automatically retry that message.</p>
      </Section>
      <Section title="6. Privacy, changes and contact">
        <p>Google-account access and information handling are described in the <Link to={pages.privacy.path} className={linkStyle}>Lead Finder privacy policy</Link>. The operator can stop using the workflow and revoke Google permission at any time.</p>
        <p>Updates to these terms will appear on this page with the updated date. For questions about Lead Finder, contact Afif at <Contact />.</p>
      </Section>
    </>
  );
}

export default function LeadFinder({ page }: { page: Page }) {
  const navigate = useNavigate();
  const details = pages[page];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const handleNavigate = (destination: string) => {
    if (destination === "faq") {
      navigate("/how-it-works#faq");
      window.setTimeout(() => {
        if (window.location.pathname === "/how-it-works" && window.location.hash === "#faq") {
          document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return;
    }
    navigate(destination === "home" ? "/" : `/${destination}`);
  };

  const handleCategory = (category: string) => {
    localStorage.setItem("craftedweb_selected_category", category);
    localStorage.setItem("craftedweb_selected_page", "1");
    navigate("/templates");
  };

  return (
    <div className="flex min-h-screen flex-col bg-obsidian">
      <SEO title={`${details.title}${page === "overview" ? "" : " — Lead Finder"} — CraftedWeb Studio`} description={details.description} canonical={details.path} image="https://craftedwebstudio.vercel.app/og-image.jpg" />
      <Header currentPage="lead-finder" onNavigate={handleNavigate} />
      <main className="relative flex-grow overflow-hidden pb-20 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-solar-gold/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className={`mb-10 inline-flex items-center gap-2 text-sm ${linkStyle}`}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            CraftedWeb Studio
          </Link>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-solar-gold/20 bg-solar-gold/10 px-4 py-2 text-sm font-medium text-solar-gold">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Lead Finder · Personal tool
            </div>
            <h1 className="mb-5 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{details.title}</h1>
            <p className="text-lg leading-8 text-nav-gray">{details.description}</p>
            {page !== "overview" && <p className="mt-4 text-sm text-nav-gray">Last updated: <time dateTime="2026-10-08">{updated}</time></p>}
          </div>
          <nav aria-label="Lead Finder information" className="mb-10 flex flex-wrap justify-center gap-3">
            {(Object.keys(pages) as Page[]).map(key => (
              <Link key={key} to={pages[key].path} aria-current={page === key ? "page" : undefined}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solar-gold ${page === key ? "border-solar-gold/40 bg-solar-gold/10 text-solar-gold" : "border-white/10 text-nav-gray hover:border-solar-gold/40 hover:text-white"}`}>
                {pages[key].label}
              </Link>
            ))}
          </nav>
          <div className={`grid gap-6 ${page === "overview" ? "" : "mx-auto max-w-4xl"}`}>
            {page === "overview" ? <Overview /> : page === "privacy" ? <Privacy /> : <Terms />}
          </div>
        </div>
      </main>
      <Footer onNavigate={handleNavigate} onSelectCategory={handleCategory} />
    </div>
  );
}
