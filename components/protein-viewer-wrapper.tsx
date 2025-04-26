"use client"

import dynamic from "next/dynamic"

// Use dynamic import with no SSR to ensure the component only loads on the client
const ProteinViewer = dynamic(() => import("../protein-viewer"), { ssr: false })

export default function ProteinViewerWrapper() {
  return (
    <div className="w-full min-h-screen">
      <ProteinViewer />
    </div>
  )
}
