import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SpaceFlip collects, uses, and protects your data and room photos when you use our AI interior design app.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/70">Legal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-text-muted mt-3">Last updated: March 31, 2026</p>
      </div>

      <div className="prose">
        {/* 1. Introduction */}
        <h2>1. Introduction</h2>
        <p>
          SpaceFlip (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
          operates the SpaceFlip mobile application (the
          &ldquo;App&rdquo;). This Privacy Policy explains what personal
          information we collect, how we use and share it, and the choices you
          have regarding your data. By using SpaceFlip you agree to the
          collection and use of information in accordance with this policy. If
          you do not agree with the terms described here, please do not use the
          App.
        </p>

        {/* 2. Information We Collect */}
        <h2>2. Information We Collect</h2>

        <h3>Account Data</h3>
        <p>
          When you create an account we collect your email address, display
          name, and profile photo. You may register using Google Sign-In, Apple
          Sign-In, or a traditional email and password combination. If you use
          a third-party sign-in provider we receive only the authentication
          token and basic profile information that you authorize.
        </p>

        <h3>Room Photos</h3>
        <p>
          SpaceFlip allows you to capture new photos with your device camera or
          select existing images from your photo library. These room photos are
          uploaded to our servers so that our AI models can analyze and
          transform them into new design concepts.
        </p>

        <h3>Design Preferences</h3>
        <p>
          Throughout the design wizard you provide preferences such as interior
          style selections, mood choices, room type classifications, and any
          special instructions or notes. These preferences are used to guide
          the AI generation process and are stored alongside your projects.
        </p>

        <h3>Generated Content</h3>
        <p>
          We store the AI-generated design images and room analysis results
          that are produced on your behalf. This includes detected room
          attributes, furniture inventories, lighting assessments, and the
          final rendered design images.
        </p>

        <h3>Usage Data</h3>
        <p>
          We collect information about how you interact with the App, including
          which features you use, the types of edits you perform (redesign,
          paint, furnish, remove, stage, landscape, generate, upscale, or
          replace), the number of generations you run, and the credits you
          consume.
        </p>

        <h3>Device Data</h3>
        <p>
          We automatically collect certain technical information from your
          device, including device type and model, operating system and
          version, app version, and language and locale settings. This data
          helps us diagnose issues and optimize performance across different
          devices.
        </p>

        <h3>Payment Data</h3>
        <p>
          Subscription purchases are processed entirely by RevenueCat and the
          respective app store (Apple App Store or Google Play). We receive
          your subscription status, plan type, and purchase history from
          RevenueCat. We do not collect, process, or store your payment card
          details, billing address, or other financial information.
        </p>

        {/* 3. How We Use Your Information */}
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>
            <strong>AI Room Analysis and Design Generation:</strong> We use
            your room photos, design preferences, and special instructions to
            perform AI-powered room analysis and generate personalized design
            concepts tailored to your selections.
          </li>
          <li>
            <strong>Subscription and Credit Management:</strong> We use your
            account and payment data to process subscriptions, allocate design
            credits, and enforce usage limits associated with your plan.
          </li>
          <li>
            <strong>Service Improvement:</strong> Aggregated and anonymized
            usage data helps us improve our AI models, refine design quality,
            and develop new features. We may use de-identified data to train
            and evaluate model performance.
          </li>
          <li>
            <strong>Notifications:</strong> We send push notifications to
            inform you when your AI-generated designs are ready for review, as
            well as occasional updates about new features or changes to your
            account.
          </li>
          <li>
            <strong>Analytics:</strong> We analyze feature usage patterns to
            understand which tools are most valuable, identify areas for
            improvement, and make informed product decisions.
          </li>
        </ul>

        {/* 4. How Your Photos Are Processed */}
        <h2>4. How Your Photos Are Processed</h2>
        <p>
          Your room photos go through the following pipeline:
        </p>
        <ul>
          <li>
            <strong>Local Compression:</strong> Before any data leaves your
            device, photos are compressed locally to a maximum dimension of
            1280 pixels and encoded as JPEG at 70% quality. This reduces file
            size and upload time while preserving sufficient detail for
            accurate AI analysis.
          </li>
          <li>
            <strong>Secure Upload:</strong> Compressed images are transmitted
            over TLS-encrypted connections and stored in our secure cloud
            storage infrastructure powered by Supabase. Each image is placed in
            a private storage bucket accessible only to your authenticated
            account.
          </li>
          <li>
            <strong>AI Analysis:</strong> Our backend passes your photos to AI
            vision models that detect the room type, identify furniture and
            fixtures, assess lighting conditions, and evaluate the existing
            style. This analysis informs the design generation process.
          </li>
          <li>
            <strong>Design Generation:</strong> Your photos, combined with your
            selected style, mood, and special instructions, are used as inputs
            for AI design generation. The resulting images are stored in your
            account alongside the originals.
          </li>
          <li>
            <strong>Retention:</strong> All uploaded photos and generated
            designs remain in your account until you choose to delete them.
            Deleting a project or individual image permanently removes it from
            our storage.
          </li>
        </ul>

        {/* 5. Third-Party Services */}
        <h2>5. Third-Party Services</h2>
        <p>
          We work with the following third-party service providers, each of
          which receives only the data necessary to perform its function:
        </p>
        <ul>
          <li>
            <strong>Supabase:</strong> Provides our cloud infrastructure,
            database, file storage, and authentication services. Supabase
            receives and stores your account data, room photos, generated
            designs, and usage logs. Data is protected by row-level security
            policies that ensure users can only access their own records.
          </li>
          <li>
            <strong>RevenueCat:</strong> Manages in-app subscriptions and
            purchase verification. RevenueCat receives your anonymous user
            identifier, subscription status, and purchase history. It does not
            receive your email address, photos, or design data.
          </li>
          <li>
            <strong>Singular:</strong> Provides analytics and marketing
            attribution. Singular receives anonymized usage events and device
            identifiers. It does not receive your photos, designs, or personal
            account information.
          </li>
          <li>
            <strong>Google OAuth:</strong> If you choose to sign in with
            Google, we exchange authentication tokens with Google&rsquo;s
            identity platform. Google receives only the data necessary to
            verify your identity. We do not share your photos or usage data
            with Google.
          </li>
          <li>
            <strong>Apple OAuth:</strong> If you choose to sign in with Apple,
            we exchange authentication tokens with Apple&rsquo;s identity
            service. Apple receives only the data necessary to verify your
            identity. Apple&rsquo;s &ldquo;Hide My Email&rdquo; feature is
            fully supported.
          </li>
          <li>
            <strong>AI Providers (via our backend):</strong> Room photos and
            design parameters are sent to third-party AI model providers
            through our secure backend for analysis and image generation.
            Photos are transmitted over encrypted connections and are not
            retained by AI providers beyond the duration required to process
            your request, in accordance with our data processing agreements.
          </li>
        </ul>

        {/* 6. Device Permissions */}
        <h2>6. Device Permissions</h2>
        <p>
          SpaceFlip requests the following device permissions. Each permission is
          requested only when needed and you may deny or revoke any permission
          at any time through your device settings:
        </p>
        <ul>
          <li>
            <strong>Camera:</strong> Required to photograph rooms directly
            within the App for redesign, analysis, and AI-powered
            transformation. The camera is activated only when you explicitly
            choose to capture a new photo.
          </li>
          <li>
            <strong>Photo Library:</strong> Required to select existing room
            photos from your device for upload, and to save AI-generated design
            images back to your photo library for easy sharing and reference.
          </li>
          <li>
            <strong>Microphone:</strong> Used for voice commands that allow you
            to describe desired design changes verbally instead of typing. The
            microphone is activated only during active voice input sessions.
          </li>
          <li>
            <strong>Speech Recognition:</strong> Used to transcribe your spoken
            voice instructions into text that is included as special
            instructions in your design brief. Processing occurs on-device
            where supported, or through the operating system&rsquo;s speech
            recognition service.
          </li>
          <li>
            <strong>Notifications:</strong> Used to alert you when your
            AI-generated designs are complete and ready for review, especially
            for generations that take longer to process. You can disable
            notifications at any time without affecting core functionality.
          </li>
        </ul>

        {/* 7. Data Retention */}
        <h2>7. Data Retention</h2>
        <p>
          We retain your personal data for as long as your account remains
          active and as needed to provide you with our services. Specifically:
        </p>
        <ul>
          <li>
            <strong>Account data</strong> is retained until you delete your
            account.
          </li>
          <li>
            <strong>Room photos and generated designs</strong> are stored in
            your account until you explicitly delete them or delete your
            account entirely.
          </li>
          <li>
            <strong>Usage logs and analytics data</strong> are retained for 12
            months from the date of collection, after which they are
            automatically purged or permanently anonymized.
          </li>
          <li>
            <strong>Subscription and payment records</strong> may be retained
            for up to 24 months after the end of your subscription to comply
            with financial record-keeping obligations.
          </li>
        </ul>
        <p>
          You may request full account deletion at any time by contacting us or
          using the account deletion option within the App. Upon deletion, all
          your personal data, photos, and designs will be permanently removed
          from our systems within 30 days, except where retention is required
          by law.
        </p>

        {/* 8. Your Rights */}
        <h2>8. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the following rights
          with respect to your personal data:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> You may request a copy of the personal
            data we hold about you, including your account information, photos,
            designs, and usage history.
          </li>
          <li>
            <strong>Deletion:</strong> You may request that we delete your
            account and all associated data, including room photos, generated
            designs, and usage logs.
          </li>
          <li>
            <strong>Export:</strong> You may download your room photos and
            AI-generated designs at any time through the App. You may also
            request a machine-readable export of your account data.
          </li>
          <li>
            <strong>Correction:</strong> You may update your display name,
            email address, and profile photo through the App&rsquo;s profile
            settings at any time.
          </li>
          <li>
            <strong>Opt-out:</strong> You may disable analytics tracking
            through the App&rsquo;s settings. This will stop the collection of
            usage events while preserving full access to all App features.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:privacy@spaceflip.co">privacy@spaceflip.co</a>. We
          will respond to your request within 30 days.
        </p>

        {/* 9. Data Security */}
        <h2>9. Data Security</h2>
        <p>
          We take the security of your data seriously and implement
          industry-standard measures to protect it. All data transmitted
          between the App and our servers is encrypted using TLS (Transport
          Layer Security). Data stored in our databases and file storage is
          encrypted at rest. Room photos and design images are stored in
          private storage buckets with row-level security policies that ensure
          only authenticated users can access their own files. Authentication
          tokens and session data are stored securely on your device using
          platform-provided secure storage mechanisms (Keychain on iOS,
          Keystore on Android).
        </p>
        <p>
          While we strive to protect your personal data, no method of
          electronic transmission or storage is 100% secure. We cannot
          guarantee absolute security, but we continuously review and improve
          our security practices.
        </p>

        {/* 10. Children's Privacy */}
        <h2>10. Children&rsquo;s Privacy</h2>
        <p>
          SpaceFlip is not intended for use by children under the age of 13 (or
          the applicable minimum age in your jurisdiction). We do not knowingly
          collect personal information from children under 13. If we become
          aware that we have inadvertently collected data from a child under
          13, we will take prompt steps to delete that information from our
          servers. If you are a parent or guardian and believe your child has
          provided us with personal data, please contact us at{" "}
          <a href="mailto:privacy@spaceflip.co">privacy@spaceflip.co</a> so we
          can take appropriate action.
        </p>

        {/* 11. International Data Transfers */}
        <h2>11. International Data Transfers</h2>
        <p>
          Your personal data may be transferred to and processed in countries
          other than the country in which you reside. Our cloud infrastructure
          providers may store and process data in data centers located in
          various jurisdictions. Where such transfers occur, we ensure that
          appropriate safeguards are in place, including standard contractual
          clauses approved by relevant data protection authorities, to protect
          your data in accordance with this Privacy Policy and applicable data
          protection laws.
        </p>

        {/* 12. California Privacy Rights (CCPA) */}
        <h2>12. California Privacy Rights (CCPA)</h2>
        <p>
          If you are a California resident, you have additional rights under
          the California Consumer Privacy Act (CCPA) and the California
          Privacy Rights Act (CPRA):
        </p>
        <ul>
          <li>
            <strong>Right to Know:</strong> You have the right to request
            information about the categories and specific pieces of personal
            data we have collected about you, the categories of sources from
            which the data was collected, the business purposes for collecting
            the data, and the categories of third parties with whom we share
            the data.
          </li>
          <li>
            <strong>Right to Delete:</strong> You have the right to request
            deletion of your personal data, subject to certain exceptions
            provided by law.
          </li>
          <li>
            <strong>Right to Opt-Out of Sale:</strong> We do not sell your
            personal information to third parties. We do not and will not sell
            your room photos, design preferences, or any other personal data.
          </li>
          <li>
            <strong>Non-Discrimination:</strong> We will not discriminate
            against you for exercising any of your CCPA rights. You will not
            receive different pricing or quality of service for making a
            privacy request.
          </li>
        </ul>
        <p>
          To exercise your California privacy rights, please contact us at{" "}
          <a href="mailto:privacy@spaceflip.co">privacy@spaceflip.co</a>.
        </p>

        {/* 13. European Privacy Rights (GDPR) */}
        <h2>13. European Privacy Rights (GDPR)</h2>
        <p>
          If you are located in the European Union or European Economic Area,
          you have additional rights under the General Data Protection
          Regulation (GDPR):
        </p>
        <ul>
          <li>
            <strong>Data Portability:</strong> You have the right to receive
            your personal data in a structured, commonly used, and
            machine-readable format, and to transmit that data to another
            controller without hindrance.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> You have the right
            to request restriction of processing of your personal data under
            certain circumstances, such as when you contest the accuracy of
            the data.
          </li>
          <li>
            <strong>Right to Object:</strong> You have the right to object to
            the processing of your personal data for direct marketing purposes
            or where processing is based on legitimate interests.
          </li>
          <li>
            <strong>Right to Lodge a Complaint:</strong> You have the right to
            lodge a complaint with a supervisory authority in your member state
            if you believe your data protection rights have been violated.
          </li>
        </ul>
        <p>
          Our legal bases for processing your personal data are: (a) your
          consent, which you provide when creating an account and using the
          App; (b) the performance of a contract, specifically the provision of
          our design services to you; and (c) our legitimate interests in
          improving and securing our services, provided these interests are not
          overridden by your fundamental rights and freedoms.
        </p>
        <p>
          To exercise your GDPR rights or to contact our data protection
          representative, please email{" "}
          <a href="mailto:privacy@spaceflip.co">privacy@spaceflip.co</a>.
        </p>

        {/* 14. Changes to This Policy */}
        <h2>14. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices, technologies, legal requirements, or other
          factors. When we make material changes, we will notify you by posting
          the updated policy within the App, sending you an email notification,
          or displaying a prominent in-app notice. The &ldquo;Last
          updated&rdquo; date at the top of this page indicates when the policy
          was most recently revised. We encourage you to review this policy
          periodically. Your continued use of SpaceFlip after any changes
          constitutes your acceptance of the updated policy.
        </p>

        {/* 15. Contact Us */}
        <h2>15. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@spaceflip.co">privacy@spaceflip.co</a>
          </li>
        </ul>
        <p>
          We will make every effort to respond to your inquiry within 30 days.
        </p>
      </div>
    </div>
  );
}
