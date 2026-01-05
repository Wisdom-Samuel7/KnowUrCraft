export default function Head() {
  return (
    <>
      <title>Knowurcraft</title>
      <meta name="description" content="Knowurcraft — Music, Design & Development" />
      
      {/* Favicon */}
      <link  rel="icon"  href="/favicon.ico" />
      
      {/* Optional: PNG or higher-res */}
      <link rel="icon" sizes="32x32" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

            {/* Open Graph for social sharing */}
      <meta property="og:title" content="Knowurcraft — Music & Web Studio" />
      <meta property="og:description" content="We deliver high-quality music, piano expertise, and web & mobile development." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://knowurcraft.vercel.app/" />
      <meta property="og:image" content="https://yourdomain.com/og-image.png" />
      <link rel="icon" href="/favicon.ico" />

    </>
  );
}
