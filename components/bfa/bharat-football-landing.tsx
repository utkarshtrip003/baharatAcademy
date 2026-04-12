import { Icon } from "@iconify/react";
import Image from "next/image";
import { SiteNav } from "./site-nav";
import { TrialForm } from "./trial-form";

const heroImg =
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000";

type GalleryItem =
  | {
      kind: "simple";
      src: string;
      alt: string;
      label: string;
    }
  | {
      kind: "featured";
      src: string;
      alt: string;
      tag: string;
      title: string;
    };

const galleryItems: GalleryItem[] = [
  {
    kind: "simple",
    src: "/website%20shortlisted%20pics/WhatsApp%20Image%202026-04-09%20at%209.41.38%20AM.jpeg",
    alt: "Youth football technical drills at training",
    label: "Technical Drills",
  },
  {
    kind: "featured",
    src: "/website%20shortlisted%20pics/1766918918062.JPG",
    alt: "Match play and gameday exposure",
    tag: "Gameday",
    title: "Elite Match Exposure",
  },
  {
    kind: "simple",
    src: "/website%20shortlisted%20pics/1766918918118.JPG",
    alt: "Team spirit on the pitch",
    label: "Team Chemistry",
  },
  {
    kind: "simple",
    src: "/website%20shortlisted%20pics/WhatsApp%20Image%202026-04-09%20at%209.41.37%20AM%20%282%29.jpeg",
    alt: "Professional football coaching and pro mentorship",
    label: "Pro Mentorship",
  },
  {
    kind: "simple",
    src: "/website%20shortlisted%20pics/WhatsApp%20Image%202026-04-09%20at%209.41.37%20AM.jpeg",
    alt: "Team celebration and winning culture",
    label: "Winning Culture",
  },
];

function galleryOverlay(item: GalleryItem) {
  if (item.kind === "featured") {
    return (
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1F1A55]/70 via-[#1F1A55]/20 to-transparent p-6 opacity-100 transition-opacity md:p-8 md:opacity-0 md:group-hover:opacity-100">
        <div>
          <p className="mb-1 text-xs font-bold tracking-widest text-[#F28C28] uppercase">
            {item.tag}
          </p>
          <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {item.title}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1F1A55]/70 via-[#1F1A55]/20 to-transparent p-6 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
      <span className="font-bold tracking-tight text-white">{item.label}</span>
    </div>
  );
}

export function BharatFootballLanding() {
  return (
    <div className="bfa-landing min-h-screen bg-white">
      <SiteNav />

      <section className="relative flex h-[90vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Football field at Bharat Football Academy"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="animate-fade-up max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-[#F28C28]/30 bg-[#F28C28]/20 px-4 py-1.5 text-xs font-bold tracking-widest text-[#F28C28] uppercase">
              Now Enrolling: Ages 4-16
            </span>
            <h1 className="mb-8 text-6xl leading-[0.9] font-bold text-white md:text-8xl">
              Train Like a <span className="text-[#F28C28]">Champion.</span>
            </h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed font-medium text-gray-300">
              Join India&apos;s premier youth football academy. Experience
              professional coaching, elite match exposure, and a community
              dedicated to excellence.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/919871141009?text=Hi%20Bharat%20Football%20Academy%2C%20I%20want%20to%20book%20a%20free%20trial."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-trial-btn"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C7C54] px-10 py-5 text-lg font-bold text-white shadow-lg shadow-[#1C7C54]/20 transition-all hover:bg-[#166041]"
              >
                Book Your FREE Trial
                <Icon icon="lucide:arrow-right" />
              </a>
              <div className="flex items-center gap-4 px-6">
                <div className="flex -space-x-3">
                  <Image
                    className="h-10 w-10 rounded-full border-2 border-[#1F1A55] object-cover"
                    src="https://i.pravatar.cc/100?u=1"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <Image
                    className="h-10 w-10 rounded-full border-2 border-[#1F1A55] object-cover"
                    src="https://i.pravatar.cc/100?u=2"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <Image
                    className="h-10 w-10 rounded-full border-2 border-[#1F1A55] object-cover"
                    src="https://i.pravatar.cc/100?u=3"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  500+ Active Players
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 border-y border-[#F28C28]/10 bg-orange-50 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 animate-pulse items-center justify-center rounded-full bg-[#F28C28] text-white shadow-lg shadow-[#F28C28]/20">
              <Icon icon="lucide:alert-circle" className="text-xl" />
            </div>
            <div>
              <p className="font-bold text-[#1F1A55]">
                ⚠️ Limited Slots Available!
              </p>
              <p className="text-sm font-medium text-gray-600">
                Only 5 trial slots left for this month. Secure your child&apos;s
                spot now.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919871141009?text=Hi%20Bharat%20Football%20Academy%2C%20I%20want%20to%20book%20a%20free%20trial."
            target="_blank"
            rel="noopener noreferrer"
            id="urgency-book-btn"
            className="whitespace-nowrap rounded-full bg-[#1F1A55] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#1F1A55]/20 transition-all hover:bg-[#F28C28]"
          >
            Book Now
          </a>
        </div>
      </div>

      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Our Academy in Action
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Glimpses of our young champions training, competing, and growing
              at India&apos;s premier youth academy.
            </p>
          </div>
          <div
            className="gallery-carousel -mx-6 flex gap-4 overflow-x-auto px-6 pb-4 md:hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Academy photos"
          >
            {galleryItems.map((item, index) => (
              <div
                key={`m-gallery-${index}`}
                className={`group relative shrink-0 snap-center snap-always overflow-hidden rounded-[40px] shadow-sm ${
                  item.kind === "featured"
                    ? "aspect-[4/3] w-[min(88vw,26rem)] border border-gray-100"
                    : "aspect-square w-[min(78vw,21rem)]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="88vw"
                />
                {galleryOverlay(item)}
              </div>
            ))}
          </div>

          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {galleryItems.map((item, index) => (
              <div
                key={`d-gallery-${index}`}
                className={`group relative overflow-hidden rounded-[40px] shadow-sm ${
                  item.kind === "featured"
                    ? "aspect-[4/3] border border-gray-100 md:col-span-2"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {galleryOverlay(item)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tournaments"
        className="border-t border-gray-50 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-bold tracking-widest text-[#F28C28] uppercase">
                Proven Track Record
              </span>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Tournament Excellence
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Our consistent performance across major youth leagues and
                national championships showcases the depth of our training
                program.
              </p>
            </div>
            <div className="hidden items-center gap-3 rounded-3xl border border-[#F28C28]/20 bg-[#F28C28]/10 px-8 py-4 font-bold text-[#1F1A55] shadow-sm lg:flex">
              <Icon icon="lucide:award" className="text-3xl text-[#F28C28]" />
              <div className="leading-tight">
                <span className="block text-2xl tracking-tighter">GYL</span>
                <span className="text-[10px] tracking-widest uppercase">
                  DPDL • Pride Cup
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Under 7 Winners — GYL",
                sub: "2024–25 season",
              },
              {
                title: "Under 7 Winners — Silver Cup",
                sub: "2025–26 GYL",
              },
              {
                title: "Under 8 — 4th Position",
                sub: "DPDL 2025–26 season",
              },
              {
                title: "Pride Cup — Winner (U-10)",
                sub: "Gurgaon edition 2025–26",
              },
              {
                title: "Pride Cup — Winner (U-10)",
                sub: "Delhi edition 2025–26",
              },
              {
                title: "Pride Cup — Winner (U-8)",
                sub: "Delhi edition 2025–26",
              },
              {
                title: "Pride Cup — Runners Up (U-12)",
                sub: "Delhi edition 2025–26",
              },
            ].map((item) => (
              <div
                key={`${item.title}-${item.sub}`}
                className="group rounded-[40px] border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-[#F28C28] hover:bg-white hover:shadow-xl hover:shadow-[#F28C28]/5"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-colors group-hover:bg-[#F28C28]/5">
                  <Icon
                    icon="game-icons:trophy"
                    className="text-4xl text-[#F28C28] transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="border-t border-gray-50 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 block text-xs font-bold tracking-widest text-[#F28C28] uppercase">
              Leadership
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#1F1A55] md:text-5xl">
              About the Founder
            </h2>
            <p className="mb-10 text-xl font-bold text-[#1F1A55]">
              Amit Kumar Sharma
            </p>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Amit Kumar Sharma, the founder of Bharat Football Academy, is a
                passionate football professional whose journey began at the age
                of 12. From representing his school at national-level competitions
                to competing in college football, he steadily progressed to the
                professional stage, playing in the I-League 2nd Division for clubs
                such as Hindustan Football Club and N.D Hero&apos;s FC.
              </p>
              <p>
                After his playing career, Amit transitioned into coaching in 2013
                with a clear vision—to provide structured and high-quality
                football training to young players in India. He earned his AIFF D
                License from Mumbai in 2015 and went on to complete his AFC C
                Diploma from Odisha in 2016, strengthening his technical and
                tactical expertise.
              </p>
              <p>
                Amit gained valuable international exposure through his association
                with the Barcelona Football Academy, where he worked under renowned
                Spanish coaches including Aitor Olmo, David Jarey, and Jordi.
                These experiences helped him develop a modern, player-centric
                approach focused on long-term development.
              </p>
              <p>
                Before establishing Bharat Football Academy, he also worked
                closely with Japanese professional Takeru Takamatsu as a team
                manager, gaining insights into global football culture,
                discipline, and professionalism.
              </p>
              <p>
                The idea of Bharat Football Academy was conceived in 2016 and
                officially brought to life in 2020. Since then, Amit Kumar Sharma
                has been dedicated to nurturing young talent, not only as
                footballers but as confident, disciplined, and responsible
                individuals.
              </p>
              <p>
                Under his leadership, the academy continues to grow as a platform
                for excellence, delivering quality training and shaping the future
                of aspiring footballers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-y border-gray-100 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                What Parents & Players Say
              </h2>
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-4 py-2 shadow-sm">
                  <Icon icon="logos:google-icon" className="text-xl" />
                  <div className="flex text-[#F28C28]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon
                        key={i}
                        icon="material-symbols:star"
                        className="text-lg"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#1F1A55]">
                    4.9/5
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-500">
                  Verified Reviews from Gurgaon Parents
                </span>
              </div>
            </div>
            <a
              href="https://www.google.com/search?client=safari&hs=hwep&sca_esv=603be8ec33a5b75e&hl=en-in&sxsrf=ANbL-n4p7oIy9PDyGOjCF0UvKKeK3b0pTw:1775492795941&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObefcymeT_MvxePT6yZsNIQvfnTOhejJFwcqQKgvbu3Vf9PEiUGSwYFMfeUQxkek-RAgZH9QXnus74f88fkJOPskkk8rSXMWe7V8Zznx18Rx77ts4w%3D%3D&q=BHARAT+FOOTBALL+ACADEMY+Reviews&sa=X&ved=2ahUKEwjx1pyL0tmTAxV5S3ADHUeMEAYQ0bkNegQIJRAH&biw=1470&bih=832&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              id="view-all-reviews-link"
              className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-6 py-3 font-bold text-[#1F1A55] shadow-sm transition-colors hover:text-[#F28C28]"
            >
              View All 150+ Reviews
              <Icon icon="lucide:external-link" className="text-sm" />
            </a>
          </div>
          <div className="review-carousel -mx-6 flex gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {[
              {
                name: "Vihan Choudhary",
                role: "2 reviews · 1 photo",
                img: "https://i.pravatar.cc/100?u=4",
                quote:
                  "My nephew has trained here for 3 years — huge improvement in skills and confidence. Coaches are professional, supportive, and friendly. Highly recommended!",
              },
              {
                name: "Kriti Sharma",
                role: "3 reviews · 5 photos",
                img: "https://i.pravatar.cc/100?u=5",
                quote:
                  "Best decision for after-school practice. Friendly, professional team that truly cares. In weeks, my nephew’s confidence and skills jumped — he loved every session.",
              },
              {
                name: "Siddharth Dhariwal",
                role: "1 review",
                img: "https://i.pravatar.cc/100?u=6",
                quote:
                  "A transformative experience — committed coaches, great environment, and real growth. Special shout-out to Coach Rahul for clear guidance and incredible mentorship.",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="review-card group w-[min(88vw,24rem)] shrink-0 snap-center snap-always rounded-[48px] border border-gray-100 bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-xl md:w-auto md:shrink md:snap-none"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-[#1F1A55] transition-colors group-hover:bg-[#F28C28]/10 group-hover:text-[#F28C28]">
                      <Icon icon="lucide:user" className="text-2xl" />
                    </div>
                    <div className="absolute -right-1 -bottom-1 rounded-full bg-white p-1 shadow-sm">
                      <Icon
                        icon="logos:google-icon"
                        className="text-[10px]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 leading-none font-bold text-[#1F1A55]">
                      {r.name}
                    </p>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {r.role}
                    </p>
                  </div>
                </div>
                <p className="review-quote text-sm leading-relaxed text-gray-600 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                World-Class Training Centers Near You
              </h2>
              <p className="text-lg text-gray-600">
                We operate at premium facilities ensuring the highest standards
                of safety and professional play environment.
              </p>
            </div>
            <div className="flex items-center gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="text-center">
                <span className="bfa-font-display block text-4xl font-bold text-[#1F1A55]">
                  04
                </span>
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Min Age
                </span>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-center">
                <span className="bfa-font-display block text-4xl font-bold text-[#1F1A55]">
                  16
                </span>
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Max Age
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group rounded-[40px] border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-[#F28C28]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-colors group-hover:bg-[#F28C28]/10">
                <Icon
                  icon="lucide:map-pin"
                  className="text-2xl text-gray-400 group-hover:text-[#F28C28]"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-[#1F1A55]">
                Excelsior American School
              </h3>
              <p className="mb-6 text-gray-500">
                Sector 43, Shashank Lok Phase 1, Gurgaon
              </p>
              <div className="flex items-center text-sm font-bold tracking-widest text-[#1C7C54] uppercase">
                Daily Training Available
              </div>
            </div>

            <div className="group rounded-[40px] border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-[#F28C28]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-colors group-hover:bg-[#F28C28]/10">
                <Icon
                  icon="lucide:school"
                  className="text-2xl text-gray-400 group-hover:text-[#F28C28]"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-[#1F1A55]">
                Sushant University
              </h3>
              <p className="mb-6 text-gray-500">
                Sector 55, Golf Course Road, Gurgaon
              </p>
              <div className="flex items-center text-sm font-bold tracking-widest text-[#1C7C54] uppercase">
                Weekend Match Facility
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              The Bharat Advantage
            </h2>
            <p className="text-lg text-gray-600">
              Beyond just drills, we focus on holistic player development
              including tactical awareness and physical conditioning.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50">
                <Icon
                  icon="lucide:sparkles"
                  className="text-3xl text-[#F28C28]"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">
                Fun & Engaging Sessions
              </h3>
              <p className="leading-relaxed text-gray-500">
                Custom-built training modules for different age groups to keep
                learning exciting and effective.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#1F1A55]/5">
                <Icon
                  icon="lucide:users-2"
                  className="text-3xl text-[#1F1A55]"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">
                Professional Coaching
              </h3>
              <p className="leading-relaxed text-gray-500">
                AFC licensed coaches with years of experience in identifying and
                nurturing young talent.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <Icon icon="lucide:swords" className="text-3xl text-[#1C7C54]" />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">
                Competitive Exposure
              </h3>
              <p className="leading-relaxed text-gray-500">
                Frequent participation in elite leagues and inter-academy
                matches to build match-day confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Training Schedule
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect slot for your child across our premium
              facilities.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[40px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F1A55] text-white">
                  <Icon icon="lucide:calendar-days" className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#1F1A55]">
                    Excelsior American School
                  </h3>
                  <p className="text-sm text-gray-500">
                    Weekday Training (Mon - Sat)
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { age: "Ages 4 - 6", time: "4:00 PM - 5:00 PM" },
                  { age: "Ages 7 - 9", time: "4:00 PM - 5:30 PM" },
                  { age: "Ages 10 - 12", time: "5:30 PM - 7:00 PM" },
                ].map((row) => (
                  <div
                    key={row.age}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#F28C28]" />
                      <span className="font-bold text-gray-700">{row.age}</span>
                    </div>
                    <span className="rounded-full bg-[#1C7C54]/10 px-4 py-1.5 text-sm font-bold text-[#1C7C54]">
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[40px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F1A55] text-white">
                  <Icon icon="lucide:clock" className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#1F1A55]">
                    Sushant University
                  </h3>
                  <p className="text-sm text-gray-500">
                    Weekend & Evening Sessions
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { age: "Ages 4 - 6", time: "Sat & Sun: 9 AM" },
                  { age: "Ages 7 - 12", time: "Sat & Sun: 10 AM" },
                ].map((row) => (
                  <div
                    key={row.age}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#F28C28]" />
                      <span className="font-bold text-gray-700">{row.age}</span>
                    </div>
                    <span className="rounded-full bg-[#1C7C54]/10 px-4 py-1.5 text-sm font-bold text-[#1C7C54]">
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Coaches and players building the Bharat Football Academy community
              together.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                src: "/website%20shortlisted%20pics/team1.jpeg",
                alt: "Bharat Football Academy team group photo",
              },
              {
                src: "/website%20shortlisted%20pics/team2.jpeg",
                alt: "Bharat Football Academy team on the pitch",
              },
            ].map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-[32px] bg-gray-100 shadow-sm md:aspect-[16/10]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="relative overflow-hidden py-32">
        <div className="absolute top-0 right-0 z-0 h-full w-1/3 bg-gray-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-8 text-5xl font-bold tracking-tight text-[#1F1A55]">
                Book Your <br />
                Free Trial Now
              </h2>
              <p className="mb-12 max-w-md text-lg text-gray-600">
                Register today and let your child experience professional
                training. Our team will contact you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F1A55] font-bold text-white">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-[#1F1A55]">Fill the form</p>
                    <p className="text-sm text-gray-500">
                      Basic details about your child.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F28C28] font-bold text-white">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-[#1F1A55]">Get a Call</p>
                    <p className="text-sm text-gray-500">
                      Confirmation within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="rounded-[40px] border border-gray-100 bg-white p-10 shadow-2xl">
                <TrialForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-8 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F1A55]">
                  <Icon icon="lucide:trophy" className="text-xl text-white" />
                </div>
                <span className="bfa-font-display text-2xl font-bold tracking-tighter text-[#1F1A55] uppercase">
                  Bharat Academy
                </span>
              </div>
              <p className="mb-8 max-w-sm text-lg leading-relaxed text-gray-500">
                India&apos;s leading platform for youth football development and
                professional training.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  id="social-facebook-link"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-xl transition-all hover:bg-[#F28C28]/10 hover:text-[#F28C28]"
                >
                  <Icon icon="brandico:facebook" />
                </a>
                <a
                  href="#"
                  id="social-instagram-link"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-xl transition-all hover:bg-[#F28C28]/10 hover:text-[#F28C28]"
                >
                  <Icon icon="brandico:instagram" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="mb-6 text-xs font-bold tracking-widest text-[#1F1A55] uppercase">
                Quick Links
              </p>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li>
                  <a
                    href="#gallery"
                    id="footer-gallery-link"
                    className="hover:text-[#F28C28]"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    id="footer-programs-link"
                    className="hover:text-[#F28C28]"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    id="footer-schedule-link"
                    className="hover:text-[#F28C28]"
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#founder"
                    id="footer-founder-link"
                    className="hover:text-[#F28C28]"
                  >
                    Founder
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <p className="mb-6 text-xs font-bold tracking-widest text-[#1F1A55] uppercase">
                Our Centers
              </p>
              <div className="grid items-start gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                      <p className="mb-1 text-[10px] font-bold text-[#1C7C54] uppercase">
                        Primary
                      </p>
                      <p className="text-sm font-bold text-[#1F1A55]">
                        Excelsior School, Sec 43
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                      <p className="mb-1 text-[10px] font-bold text-[#1C7C54] uppercase">
                        Elite
                      </p>
                      <p className="text-sm font-bold text-[#1F1A55]">
                        Sushant University, Sec 55
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+919871141009"
                      id="footer-contact-phone"
                      className="flex items-center gap-2 text-lg font-bold text-[#1F1A55] transition-colors hover:text-[#F28C28]"
                    >
                      <Icon icon="lucide:phone-call" />
                      98711 41009
                    </a>
                    <a
                      href="tel:+919266993485"
                      id="footer-contact-phone-secondary"
                      className="flex items-center gap-2 text-sm font-bold text-[#1F1A55] transition-colors hover:text-[#F28C28]"
                    >
                      <Icon icon="lucide:phone-call" />
                      92669 93485
                    </a>
                  </div>

                 </div>

                <div className="md:justify-self-end">
                  <div className="relative w-full max-w-[420px] overflow-hidden rounded-[36px] border border-gray-100 bg-gray-50 shadow-sm">
                    <div className="aspect-[16/10] w-full">
                      <iframe
                        title="Google Maps location"
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                          "Bharat Football Academy Gurugram"
                        )}&output=embed`}
                      />
                    </div>
                    <a
                      href="https://share.google/BNgYu8Sxs9ceoRaHz"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="footer-google-map-view"
                      className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-[#1F1A55] shadow-sm transition-colors hover:text-[#F28C28]"
                      aria-label="Open map in Google Maps"
                    >
                      Maps
                      <Icon icon="lucide:external-link" className="text-base" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-100 pt-12 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Bharat Football Academy.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
        <a
          href="tel:+919871141009"
          id="floating-call-dialer"
          title="Call Us"
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F1A55] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[#1F1A55]/20"
        >
          <Icon icon="lucide:phone" className="text-2xl" />
        </a>
        <a
          href="https://wa.me/919871141009"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-chat"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1C7C54] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[#1C7C54]/20"
        >
          <Icon icon="ic:baseline-whatsapp" className="text-3xl" />
        </a>
      </div>
    </div>
  );
}
