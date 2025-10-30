'use client';

import React from 'react';

interface GoogleMapEmbedProps {
  local: string;
  height?: string;
  zoom?: number;
}

export default function GoogleMapEmbed({
  local,
  height = '350px',
  zoom = 15,
}: GoogleMapEmbedProps) {
  const apiKey = "AIzaSyBz5_SovtVMi_rjSLdz5EEkBGU-_GZagR8"

  if (!apiKey) {
    return (
      <div
        className="w-full flex items-center justify-center rounded-lg bg-gray-200 text-gray-500"
        style={{ height }}
      >
        <p>Chave da API do Google Maps não configurada.</p>
      </div>
    );
  }

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
    local
  )}&zoom=${zoom}`;

  return (
    <iframe
      width="100%"
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={mapUrl}
      className="rounded-lg shadow-md"
    ></iframe>
  );
}
