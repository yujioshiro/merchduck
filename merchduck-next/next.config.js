/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
      return [
        {
          source: "/homepage-images/:path*.(jpg|jpeg|png|webp|gif)",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
      ];
    },
  };
  