import {
  useMemo,
  useState,
  useEffect,
} from "react";

import {
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Container from "../ui/Container";

export default function QuotePage() {
  const [loading, setLoading] =
  useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    material: "",
    quantity: "",
    description: "",
  });

const nameRegex = /^[A-Za-z\s]+$/;

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
  /^[0-9]{10}$/;

const placeholders = [
  "Laser cutting for steel sheets...",
  "Need industrial fabrication work...",
  "Custom metal bending project...",
  "Precision cutting for machinery...",
  "Sheet metal processing work...",
];

const [placeholderIndex, setPlaceholderIndex] =
  useState(0);

const [typedPlaceholder, setTypedPlaceholder] =
  useState("");

  const [stopPlaceholderAnimation,
  setStopPlaceholderAnimation] =
  useState(false);

useEffect(() => {
  if (stopPlaceholderAnimation) {
  setTypedPlaceholder(
    "Add your project/order description and details here"
  );

  return;
}
  let charIndex = 0;

  const currentText =
    placeholders[placeholderIndex];

  const typing = setInterval(() => {
    setTypedPlaceholder(
      currentText.slice(
        0,
        charIndex + 1
      )
    );

    charIndex++;

    if (
      charIndex ===
      currentText.length
    ) {
      clearInterval(typing);

      setTimeout(() => {
        setPlaceholderIndex(
          (prev) =>
            (prev + 1) %
            placeholders.length
        );
      }, 1800);
    }
  }, 55);

  return () => clearInterval(typing);
}, [placeholderIndex]);

const validation = useMemo(
  () => ({
    firstName:
      nameRegex.test(
        form.firstName.trim()
      ),

    lastName:
      nameRegex.test(
        form.lastName.trim()
      ),

    service:
      form.service.trim()
        .length > 0,

    material:
      form.material.trim()
        .length > 0,

    email:
      form.email.trim() === ""
        ? true
        : emailRegex.test(
            form.email
          ),

    phone:
      form.phone.trim() === ""
        ? true
        : phoneRegex.test(
            form.phone
          ),

    description:
      form.description.trim() === ""
        ? true
        : form.description.trim()
            .length >= 10,
  }),
  [form]
);

const isFormValid =
  Object.values(validation)
    .every(Boolean);

const handleChange = (e) => {
  let { name, value } =
    e.target;

  if (
    !stopPlaceholderAnimation &&
    value.trim().length > 0
  ) {
    setStopPlaceholderAnimation(
      true
    );
  }

  if (name === "phone") {
    value = value
      .replace(/\D/g, "")
      .slice(0, 10);
  }

  if (
    name === "description"
  ) {
    const words =
      value.trim().split(/\s+/);

    if (words.length > 1000) {
      return;
    }
  }

  setForm({
    ...form,
    [name]: value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isFormValid) return;

  setLoading(true);


  const quotationId = `${Math.floor(
  100000 + Math.random() * 900000
)}-${
  form.firstName
    .replace(/[^A-Za-z]/g, "")
    .slice(0, 2)
    .toUpperCase() || "RL"
}`;


const message = `
━━━━━━━━━━━━━━━━━━
      RISING LASERS
━━━━━━━━━━━━━━━━━━

QUOTE REQUEST DETAILS -

Quotation ID:
${quotationId}

━━━━━━━━━━━━━━━━━━

Name:
${form.firstName} ${form.lastName}

Email:
${form.email || "Not Provided"}

Phone:
${form.phone || "Not Provided"}

Company:
${form.company || "Not Provided"}

Service Required:
${form.service}

Material Type:
${form.material}

Estimated Quantity:
${form.quantity || "Not Provided"}

Project Description:
${form.description || "Not Provided"}

━━━━━━━━━━━━━━━━━━
Quotation Through
RisingLasers Website
━━━━━━━━━━━━━━━━━━
`;

  setTimeout(() => {
    const whatsappUrl = `https://wa.me/919586000429?text=${encodeURIComponent(
      message
    )}`;

    const isMobile =
  /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  );

if (isMobile) {
  window.location.href =
    whatsappUrl;

  setTimeout(() => {
    window.location.href =
      `sms:+919586000429?body=${encodeURIComponent(
        message
      )}`;
  }, 2500);
} else {
  window.open(
    whatsappUrl,
    "_blank"
  );
}

    setForm({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  material: "",
  quantity: "",
  description: "",
});

setLoading(false);
  }, 1200);
};
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section
          className="
            relative
            overflow-hidden
            py-24
            sm:py-32
          "
          style={{
            backgroundImage:
              "url('/gcardspics/g3.jpg')",
            backgroundSize: "cover",
            backgroundPosition:
              "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "rgba(0,0,0,0.75)",
            }}
          />

          <Container>
            <div className="relative z-10 max-w-4xl">
              <p
                className="
                  text-xs
                  tracking-[0.35em]
                  uppercase
                "
                style={{
                 color: "var(--color-green-quote)",
                }}
              >
                REQUEST A QUOTE
              </p>

              <h1
                className="
                  mt-5
                  text-5xl
                  font-black
                  leading-none

                  sm:text-7xl
                "
              >
                TELL US ABOUT
                <br />

                <span
                  style={{
                 color: "var(--color-green-quote)",
                  }}
                >
                  YOUR PROJECT
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-9
                  text-zinc-300
                "
              >
                Send your project
                details and we'll
                contact you with a
                quote for laser
                cutting, bending,
                fabrication, and
                industrial work.
              </p>
            </div>
          </Container>
        </section>

        {/* Form */}
        <section className="py-20">
          <Container>
            <div
              className="
                grid
                gap-8

                lg:grid-cols-[1.4fr_0.7fr]
              "
            >
              {/* Left */}
              <div
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/3
                  p-6

                  sm:p-10
                "
              >
                <h2
                  className="
                    text-3xl
                    font-black
                  "
                >
                  REQUEST FOR QUOTE
                </h2>

                <p
                  className="
                    mt-4
                    text-zinc-400
                    leading-8
                  "
                >
                  Share your project
                  details for a fast
                  industrial quote.
                </p>

                <form
                  onSubmit={
                    handleSubmit
                  }
                  className="
                    mt-10
                    grid
                    gap-5

                    md:grid-cols-2
                  "
                >
<div className="relative">
  <Input
    name="firstName"
    placeholder="First Name *"
    value={form.firstName}
    onChange={handleChange}
    isError={
      !validation.firstName &&
      form.firstName
    }
  />

  {!validation.firstName &&
    form.firstName && (
      <span
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          rounded-full
          bg-red-500/10
          px-3
          py-1

          text-[10px]
          font-medium
          text-red-400
        "
      >
        Letters only
      </span>
  )}
</div>

<div className="relative">
  <Input
    name="lastName"
    placeholder="Last Name *"
    value={form.lastName}
    onChange={handleChange}
    isError={
      !validation.lastName &&
      form.lastName
    }
  />

  {!validation.lastName &&
    form.lastName && (
      <span
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          rounded-full
          bg-red-500/10
          px-3
          py-1

          text-[10px]
          font-medium
          text-red-400
        "
      >
        Letters only
      </span>
  )}
</div>

<div className="relative">
  <Input
    name="email"
    type="email"
    placeholder="Email"
    value={form.email}
    onChange={handleChange}
    isError={
      !validation.email &&
      form.email
    }
  />

  {!validation.email &&
    form.email && (
      <span
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          rounded-full
          bg-red-500/10
          px-3
          py-1

          text-[10px]
          font-medium
          text-red-400
        "
      >
        Invalid Email
      </span>
  )}
</div>

<div className="relative">
  <Input
    name="phone"
    placeholder="Phone"
    value={form.phone}
    onChange={handleChange}
    isError={
      !validation.phone &&
      form.phone
    }
  />

  {!validation.phone &&
    form.phone && (
      <span
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          rounded-full
          bg-red-500/10
          px-3
          py-1

          text-[10px]
          font-medium
          text-red-400
        "
      >
        10 digits Req
      </span>
  )}
</div>

<Input
  name="company"
  placeholder="Company"
  value={form.company}
  onChange={handleChange}
/>

<Input
  name="service"
  placeholder="Service Needed *"
  value={form.service}
  onChange={handleChange}
/>

<Input
  name="material"
  placeholder="Material *"
  value={form.material}
  onChange={handleChange}
/>

<Input
  name="quantity"
  placeholder="Estimated Quantity"
  value={form.quantity}
  onChange={handleChange}
/>

<div
  className="
    relative
    md:col-span-2
  "
>
  <textarea
    name="description"
    placeholder={typedPlaceholder}
    value={form.description}
    onChange={handleChange}
    className="
      min-h-45
      w-full
      rounded-2xl
      border
      border-white/10
      bg-black/40
      p-5
      pr-34
      text-white
      outline-none

      transition-all
      duration-300

      focus:border-(--color-green-light)
      focus:bg-black/60
    "
  />

  {!validation.description &&
    form.description && (
      <span
        className="
          absolute
          right-4
          top-5

          rounded-full
          bg-red-500/10
          px-3
          py-1

          text-[10px]
          font-medium
          text-red-400
        "
      >
        Min 10 chars
      </span>
  )}
</div>

               <motion.button
  type="submit"
  disabled={
    !isFormValid || loading
  }
  whileTap={{
    scale: 0.98,
  }}
  whileHover={
    isFormValid
      ? {
          scale: 1.01,
        }
      : {}
  }
  className="
    flex
    items-center
    justify-center
    gap-3

    rounded-2xl
    px-8
    py-4

    text-sm
    font-bold

    transition-all
    duration-300

    sm:col-span-2
  "
  style={{
    background:
      isFormValid
        ? "var(--color-green-primary)"
        : "rgba(255,255,255,0.08)",

    color:
      isFormValid
        ? "var(--color-text-primary)"
        : "rgba(255,255,255,0.4)",

    cursor:
      isFormValid
        ? "pointer"
        : "not-allowed",

    opacity:
      loading ? 0.8 : 1,
  }}
>
  {loading ? (
    <>
      <div
        className="
          h-4
          w-4
          animate-spin
          rounded-full
          border-2
          border-white/30
          border-t-white
        "
      />

      Sending Request...
    </>
  ) : (
    "SUBMIT QUOTE REQUEST"
  )}
</motion.button>
                </form>
              </div>

              {/* Right */}
              <div className="space-y-6">
                <div
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/3
                    p-8
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    CONTACT
                  </h3>

                  <div className="mt-8 space-y-7">
                    <Info
                      icon={<Phone />}
                      title="Call Us"
                      text="+91 9586000429"
                    />

                    <Info
                      icon={<Mail />}
                      title="Email"
                      text="info.risinglasers@gmail.com"
                    />

                    <Info
                      icon={<MapPin />}
                      title="Location"
                      text="India"
                    />
                  </div>
                </div>

                <div
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/3
                    p-8
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    WHAT HELPS US
                  </h3>

                  <div className="mt-8 space-y-5">
                    {[
                      "Project dimensions",
                      "Material type",
                      "Required quantity",
                      "Special requirements",
                      "Reference image or design",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <Check
                          size={18}
                          style={{
                        color: "var(--color-green-quote)",
                          }}
                        />

                        <p className="text-zinc-300 leading-7">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Input({
  isError,
  ...props
}) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-2xl
        border
        bg-black/40
        p-4
        pr-34

        text-sm
        text-white
        outline-none

        transition-all
        duration-300

        ${
          isError
            ? "border-red-500/60"
            : "border-white/10"
        }

        focus:border-(--color-green-light)
        focus:bg-black/60
      `}
    />
  );
}

function Info({
  icon,
  title,
  text,
}) {
  return (
    <div className="flex gap-4">
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
        "
        style={{
background:
  "rgba(0,199,140,0.12)",

        color: "var(--color-green-quote)",
        }}
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          {title}
        </p>

        <p
          className="
            mt-2
            text-lg
            font-semibold
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}