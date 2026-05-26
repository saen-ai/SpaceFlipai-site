import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service — SpaceFlip" };

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/70">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-text-muted mt-3">Last updated: March 31, 2026</p>
      </div>

      <div className="prose">
        {/* 1. Acceptance of Terms */}
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing, downloading, installing, or using the SpaceFlip mobile
          application or any associated services (collectively, the
          &ldquo;Service&rdquo;), you acknowledge that you have read,
          understood, and agree to be bound by these Terms of Service
          (&ldquo;Terms&rdquo;). These Terms constitute a legally binding
          agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or
          &ldquo;your&rdquo;) and SpaceFlip (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;).
        </p>
        <p>
          If you do not agree to these Terms in their entirety, you must not
          access or use the Service. Your continued use of the Service following
          any modifications to these Terms constitutes your acceptance of those
          modifications.
        </p>

        {/* 2. Service Description */}
        <h2>2. Service Description</h2>
        <p>
          SpaceFlip is an AI-powered interior design application that enables
          users to transform their living and working spaces through artificial
          intelligence. The Service allows you to:
        </p>
        <ul>
          <li>
            Photograph rooms and interior spaces using your mobile device
          </li>
          <li>
            Receive AI-driven analysis of room features, including furniture
            detection, lighting assessment, style identification, and spatial
            layout evaluation
          </li>
          <li>
            Select design preferences such as style, mood, room type, and
            specific design parameters
          </li>
          <li>
            Generate AI-powered room redesign visualizations based on your
            preferences
          </li>
        </ul>
        <p>Available edit types within the Service include:</p>
        <ul>
          <li>
            <strong>Redesign</strong> — Generate a complete room redesign in
            your chosen style
          </li>
          <li>
            <strong>Paint</strong> — Visualize new wall colors and paint
            finishes
          </li>
          <li>
            <strong>Furnish</strong> — Add or replace furniture in your space
          </li>
          <li>
            <strong>Remove</strong> — Remove unwanted objects or furniture from
            a room
          </li>
          <li>
            <strong>Stage</strong> — Virtually stage an empty or sparsely
            furnished room
          </li>
          <li>
            <strong>Landscape</strong> — Redesign outdoor and landscaping areas
          </li>
          <li>
            <strong>Upscale</strong> — Enhance image resolution and quality of
            generated designs
          </li>
          <li>
            <strong>Replace</strong> — Swap specific items in a room with
            alternatives
          </li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of
          the Service at any time, with or without notice.
        </p>

        {/* 3. Account Registration */}
        <h2>3. Account Registration</h2>
        <p>
          To access the full functionality of SpaceFlip, you must create an
          account. You may register using one of the following methods:
        </p>
        <ul>
          <li>Email and password</li>
          <li>Google Sign-In</li>
          <li>Apple Sign-In</li>
        </ul>
        <p>By creating an account, you represent and warrant that:</p>
        <ul>
          <li>
            You are at least 13 years of age. If you are under 18, you confirm
            that you have obtained parental or guardian consent to use the
            Service.
          </li>
          <li>
            All registration information you provide is accurate, current, and
            complete.
          </li>
          <li>
            You will maintain the accuracy of such information and promptly
            update it as necessary.
          </li>
        </ul>
        <p>
          You are solely responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account. You agree to notify us immediately at{" "}
          <a href="mailto:support@spaceflip.co">support@spaceflip.co</a> if you
          become aware of any unauthorized use of your account or any other
          breach of security. We shall not be liable for any loss or damage
          arising from your failure to protect your account credentials.
        </p>

        {/* 4. Subscription Plans and Billing */}
        <h2>4. Subscription Plans and Billing</h2>
        <p>
          SpaceFlip offers multiple subscription tiers to accommodate different
          usage needs:
        </p>

        <h3>4.1 Free Tier</h3>
        <p>
          All users receive a limited number of AI generations at no cost. The
          Free tier is subject to usage limits that may be adjusted at our
          discretion. Free tier users may experience longer processing times
          during periods of high demand.
        </p>

        <h3>4.2 Pro Monthly</h3>
        <p>
          A monthly subscription plan offering an increased number of AI
          generations, priority processing, access to all edit types, and higher
          resolution outputs. Billed on a recurring monthly basis.
        </p>

        <h3>4.3 Pro Yearly</h3>
        <p>
          An annual subscription plan with the same benefits as Pro Monthly at a
          discounted rate. Billed on a recurring annual basis.
        </p>

        <h3>4.4 Business</h3>
        <p>
          Our highest-tier plan designed for professionals and commercial use.
          Includes the highest generation limits, priority processing, commercial
          usage rights, and dedicated support.
        </p>

        <h3>4.5 Billing and Renewal</h3>
        <ul>
          <li>
            All paid subscriptions are managed and processed through the Apple
            App Store or Google Play Store, depending on your device platform.
          </li>
          <li>
            Subscriptions automatically renew at the end of each billing period
            unless you cancel at least 24 hours before the renewal date.
          </li>
          <li>
            You may manage or cancel your subscription at any time through your
            device&rsquo;s app store account settings.
          </li>
          <li>
            Price changes will be communicated in advance. Continued use after a
            price change takes effect constitutes acceptance of the new price.
          </li>
        </ul>

        <h3>4.6 Refunds</h3>
        <p>
          All refund requests are handled by the respective app store (Apple App
          Store or Google Play Store) in accordance with their refund policies.
          SpaceFlip does not process refunds directly. Please contact Apple or
          Google support for any billing disputes or refund requests.
        </p>

        {/* 5. Credits and Usage */}
        <h2>5. Credits and Usage</h2>
        <p>
          SpaceFlip operates on a credit-based system for AI generations:
        </p>
        <ul>
          <li>
            Each AI generation (redesign, paint, furnish, remove, stage,
            landscape, upscale, or replace) consumes a certain number of credits.
            The credit cost may vary depending on the complexity of the edit type
            and the output resolution.
          </li>
          <li>
            Credits are allocated based on your subscription tier and refresh at
            the start of each billing cycle.
          </li>
          <li>
            <strong>Unused credits do not roll over</strong> to the next billing
            period. Any remaining credits at the end of a billing cycle will
            expire.
          </li>
          <li>
            Free credits may be earned through our referral program by inviting
            other users to join SpaceFlip. Referral credit amounts and terms are
            subject to change at our discretion.
          </li>
          <li>
            Credits are non-transferable and have no cash value. Credits cannot
            be sold, bartered, or exchanged.
          </li>
          <li>
            We reserve the right to modify credit allocations, costs, and
            refresh rates with reasonable notice to users.
          </li>
        </ul>

        {/* 6. Acceptable Use */}
        <h2>6. Acceptable Use</h2>
        <p>
          You agree to use SpaceFlip only for lawful purposes and in accordance
          with these Terms. You expressly agree that you will NOT:
        </p>
        <ul>
          <li>
            Upload, submit, or transmit any content that is illegal, harmful,
            threatening, abusive, harassing, defamatory, vulgar, obscene, or
            otherwise objectionable, including but not limited to images
            depicting violence, nudity, or illegal activities.
          </li>
          <li>
            Misrepresent AI-generated images as real photographs or actual
            depictions of existing spaces, particularly in contexts where such
            misrepresentation could mislead others.
          </li>
          <li>
            Use the Service for fraudulent purposes, including but not limited
            to creating misleading real estate listings, deceptive renovation
            proposals, or fraudulent insurance claims based on AI-generated
            visualizations.
          </li>
          <li>
            Attempt to reverse-engineer, decompile, disassemble, or otherwise
            attempt to derive the source code, algorithms, or underlying models
            of our AI systems.
          </li>
          <li>
            Share, distribute, or disclose your account credentials to any third
            party, or allow multiple individuals to access the Service through a
            single account.
          </li>
          <li>
            Exceed rate limits, use automated scripts or bots, or otherwise
            abuse the Service in a manner that degrades performance for other
            users.
          </li>
          <li>
            Circumvent, disable, or interfere with any security or
            access-control features of the Service.
          </li>
          <li>
            Use the Service to generate content that infringes upon the
            intellectual property rights of any third party.
          </li>
        </ul>
        <p>
          Violation of this Acceptable Use policy may result in immediate
          suspension or termination of your account, at our sole discretion.
        </p>

        {/* 7. Intellectual Property */}
        <h2>7. Intellectual Property</h2>

        <h3>7.1 Your Content</h3>
        <p>
          You retain full ownership of all photographs and images that you
          upload to SpaceFlip. By uploading content, you grant us a limited,
          non-exclusive, worldwide license to process, analyze, and transform
          your images solely for the purpose of providing the Service to you.
        </p>

        <h3>7.2 AI-Generated Designs</h3>
        <p>
          AI-generated designs produced through the Service are licensed to you
          for both personal and commercial use. You may freely share, download,
          print, publish, and use generated designs for any lawful purpose,
          including interior design presentations, social media posts, and
          commercial projects. No additional licensing fee or attribution is
          required for your use of generated designs.
        </p>

        <h3>7.3 Service Improvement</h3>
        <p>
          SpaceFlip retains the right to use anonymized, aggregated, and
          de-identified data derived from your use of the Service to improve,
          train, and enhance our AI models and overall Service quality. This
          data will not be used in a manner that personally identifies you or
          exposes your original uploaded images to third parties.
        </p>

        <h3>7.4 SpaceFlip Intellectual Property</h3>
        <p>
          The SpaceFlip name, brand, logo, app design, user interface, underlying
          technology, AI models, and all associated intellectual property are
          and remain the exclusive property of SpaceFlip. Nothing in these Terms
          grants you any right, title, or interest in our intellectual property
          beyond the limited license to use the Service as described herein.
        </p>

        {/* 8. Disclaimer of Warranties */}
        <h2>8. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          AI-generated designs are artistic suggestions and visualizations only.
          They do not constitute professional interior design advice,
          architectural plans, structural engineering assessments, or
          construction guidance. Specifically, we do not warrant or guarantee
          that:
        </p>
        <ul>
          <li>
            Room analysis results will be fully accurate or complete in their
            identification of room features, dimensions, or characteristics.
          </li>
          <li>
            AI-generated designs are physically feasible, structurally sound, or
            compliant with local building codes and regulations.
          </li>
          <li>
            The colors, materials, textures, or furniture shown in generated
            designs will precisely match real-world products or finishes.
          </li>
          <li>
            The Service will be uninterrupted, error-free, or free of harmful
            components.
          </li>
        </ul>
        <p>
          <strong>
            Always consult qualified interior designers, architects, structural
            engineers, or other licensed professionals before making any
            structural changes, renovations, or significant design decisions
            based on AI-generated visualizations.
          </strong>
        </p>

        {/* 9. Limitation of Liability */}
        <h2>9. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
          SPACEAI, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, OR
          LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
          OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
          RESULTING FROM:
        </p>
        <ul>
          <li>Your access to or use of, or inability to access or use, the Service.</li>
          <li>Any conduct or content of any third party on the Service.</li>
          <li>Any content obtained from the Service.</li>
          <li>
            Unauthorized access, use, or alteration of your transmissions or
            content.
          </li>
          <li>
            Any decisions made or actions taken based on AI-generated designs or
            room analysis results.
          </li>
        </ul>
        <p>
          IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS
          ARISING OUT OF OR RELATING TO THE SERVICE EXCEED THE TOTAL AMOUNT YOU
          HAVE PAID TO SPACEAI IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING
          THE EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED U.S. DOLLARS
          ($100), WHICHEVER IS GREATER.
        </p>

        {/* 10. Account Termination */}
        <h2>10. Account Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account, without
          prior notice or liability, for any reason, including but not limited
          to a breach of these Terms. Grounds for termination include, but are
          not limited to:
        </p>
        <ul>
          <li>Violation of the Acceptable Use policy outlined in Section 6.</li>
          <li>
            Engaging in fraudulent, abusive, or illegal activity through the
            Service.
          </li>
          <li>Non-payment or payment disputes related to subscription fees.</li>
          <li>
            Extended periods of inactivity, subject to reasonable prior notice.
          </li>
        </ul>
        <p>
          You may delete your account at any time through the app settings
          within SpaceFlip, or by contacting our support team at{" "}
          <a href="mailto:support@spaceflip.co">support@spaceflip.co</a>. Upon
          account deletion, your personal data will be handled in accordance
          with our Privacy Policy. Please note that account deletion does not
          entitle you to a refund of any prepaid subscription fees.
        </p>

        {/* 11. Modifications to Terms */}
        <h2>11. Modifications to Terms</h2>
        <p>
          We reserve the right to modify, amend, or update these Terms at any
          time at our sole discretion. When we make changes, we will update the
          &ldquo;Last updated&rdquo; date at the top of this page.
        </p>
        <p>
          For material changes that significantly affect your rights or
          obligations, we will make reasonable efforts to notify you through one
          or more of the following means: an in-app notification, a prompt upon
          your next login, or an email to the address associated with your
          account.
        </p>
        <p>
          Your continued use of the Service after any modifications to these
          Terms take effect constitutes your acceptance of the revised Terms. If
          you do not agree to the updated Terms, you must stop using the Service
          and delete your account.
        </p>

        {/* 12. Governing Law */}
        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the United States of America, without regard to conflict of
          law principles.
        </p>
        <p>
          Any dispute, controversy, or claim arising out of or relating to
          these Terms, or the breach, termination, or invalidity thereof, shall
          be settled by binding arbitration administered in accordance with the
          rules of the American Arbitration Association (AAA). The arbitration
          shall be conducted by a single arbitrator, and the decision of the
          arbitrator shall be final and binding upon both parties.
        </p>
        <p>
          You agree that any arbitration shall be conducted on an individual
          basis and not as a class, consolidated, or representative action. You
          waive any right to participate in a class action lawsuit or class-wide
          arbitration against SpaceFlip.
        </p>

        {/* 13. Severability */}
        <h2>13. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid, illegal, or
          unenforceable by a court of competent jurisdiction, such invalidity,
          illegality, or unenforceability shall not affect the remaining
          provisions of these Terms, which shall continue in full force and
          effect. The invalid or unenforceable provision shall be modified to
          the minimum extent necessary to make it valid and enforceable while
          preserving the original intent of the parties.
        </p>

        {/* 14. Contact */}
        <h2>14. Contact</h2>
        <p>
          If you have any questions, concerns, or feedback regarding these
          Terms of Service, please contact us at:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@spaceflip.co">support@spaceflip.co</a>
        </p>
        <p>
          We will make reasonable efforts to respond to your inquiries in a
          timely manner.
        </p>
      </div>
    </div>
  );
}
