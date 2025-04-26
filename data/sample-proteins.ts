// Sample protein data for demonstration
// In a real application, this would be loaded from PDB files

export const sampleProteins = {
  // Crambin - a small protein (46 residues)
  "1cbn": {
    name: "Crambin",
    resolution: 1.5,
    experimentalMethod: "X-ray diffraction",
    description: "A small plant protein with three disulfide bridges that stabilize its structure.",
    chains: [
      {
        id: "A",
        residues: [
          // This is simplified data - in reality, each residue would have all atoms and coordinates
          { name: "THR", ss: "H", atoms: { CA: { x: 0, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "THR", ss: "H", atoms: { CA: { x: 3, y: 1, z: 0, element: "C", radius: 1.7 } } },
          { name: "CYS", ss: "H", atoms: { CA: { x: 6, y: 2, z: 0, element: "C", radius: 1.7 } } },
          { name: "CYS", ss: "H", atoms: { CA: { x: 9, y: 3, z: 0, element: "C", radius: 1.7 } } },
          { name: "PRO", ss: "H", atoms: { CA: { x: 12, y: 4, z: 0, element: "C", radius: 1.7 } } },
          { name: "SER", ss: "H", atoms: { CA: { x: 15, y: 5, z: 0, element: "C", radius: 1.7 } } },
          { name: "ILE", ss: "H", atoms: { CA: { x: 18, y: 6, z: 0, element: "C", radius: 1.7 } } },
          { name: "VAL", ss: "H", atoms: { CA: { x: 21, y: 7, z: 0, element: "C", radius: 1.7 } } },
          { name: "ALA", ss: "H", atoms: { CA: { x: 24, y: 8, z: 0, element: "C", radius: 1.7 } } },
          { name: "ARG", ss: "H", atoms: { CA: { x: 27, y: 9, z: 0, element: "C", radius: 1.7 } } },
          { name: "SER", ss: "C", atoms: { CA: { x: 30, y: 10, z: 0, element: "C", radius: 1.7 } } },
          { name: "ASN", ss: "C", atoms: { CA: { x: 33, y: 11, z: 0, element: "C", radius: 1.7 } } },
          { name: "PHE", ss: "C", atoms: { CA: { x: 36, y: 12, z: 0, element: "C", radius: 1.7 } } },
          { name: "ASN", ss: "C", atoms: { CA: { x: 39, y: 13, z: 0, element: "C", radius: 1.7 } } },
          { name: "VAL", ss: "C", atoms: { CA: { x: 42, y: 14, z: 0, element: "C", radius: 1.7 } } },
          { name: "CYS", ss: "E", atoms: { CA: { x: 45, y: 15, z: 0, element: "C", radius: 1.7 } } },
          { name: "ARG", ss: "E", atoms: { CA: { x: 48, y: 16, z: 0, element: "C", radius: 1.7 } } },
          { name: "LEU", ss: "E", atoms: { CA: { x: 51, y: 17, z: 0, element: "C", radius: 1.7 } } },
          { name: "PRO", ss: "E", atoms: { CA: { x: 54, y: 18, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLY", ss: "E", atoms: { CA: { x: 57, y: 19, z: 0, element: "C", radius: 1.7 } } },
          { name: "THR", ss: "C", atoms: { CA: { x: 60, y: 20, z: 0, element: "C", radius: 1.7 } } },
          { name: "PRO", ss: "C", atoms: { CA: { x: 63, y: 21, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLU", ss: "C", atoms: { CA: { x: 66, y: 22, z: 0, element: "C", radius: 1.7 } } },
          { name: "ALA", ss: "C", atoms: { CA: { x: 69, y: 23, z: 0, element: "C", radius: 1.7 } } },
          { name: "ILE", ss: "H", atoms: { CA: { x: 72, y: 24, z: 0, element: "C", radius: 1.7 } } },
          { name: "CYS", ss: "H", atoms: { CA: { x: 75, y: 25, z: 0, element: "C", radius: 1.7 } } },
          { name: "ALA", ss: "H", atoms: { CA: { x: 78, y: 26, z: 0, element: "C", radius: 1.7 } } },
          { name: "THR", ss: "H", atoms: { CA: { x: 81, y: 27, z: 0, element: "C", radius: 1.7 } } },
          { name: "TYR", ss: "H", atoms: { CA: { x: 84, y: 28, z: 0, element: "C", radius: 1.7 } } },
          { name: "THR", ss: "H", atoms: { CA: { x: 87, y: 29, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLY", ss: "C", atoms: { CA: { x: 90, y: 30, z: 0, element: "C", radius: 1.7 } } },
          { name: "CYS", ss: "C", atoms: { CA: { x: 93, y: 31, z: 0, element: "C", radius: 1.7 } } },
          { name: "ILE", ss: "C", atoms: { CA: { x: 96, y: 32, z: 0, element: "C", radius: 1.7 } } },
          { name: "ILE", ss: "C", atoms: { CA: { x: 99, y: 33, z: 0, element: "C", radius: 1.7 } } },
          { name: "ILE", ss: "C", atoms: { CA: { x: 102, y: 34, z: 0, element: "C", radius: 1.7 } } },
          { name: "PRO", ss: "C", atoms: { CA: { x: 105, y: 35, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLY", ss: "C", atoms: { CA: { x: 108, y: 36, z: 0, element: "C", radius: 1.7 } } },
          { name: "ALA", ss: "C", atoms: { CA: { x: 111, y: 37, z: 0, element: "C", radius: 1.7 } } },
          { name: "THR", ss: "C", atoms: { CA: { x: 114, y: 38, z: 0, element: "C", radius: 1.7 } } },
          { name: "CYS", ss: "C", atoms: { CA: { x: 117, y: 39, z: 0, element: "C", radius: 1.7 } } },
          { name: "PRO", ss: "C", atoms: { CA: { x: 120, y: 40, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLY", ss: "C", atoms: { CA: { x: 123, y: 41, z: 0, element: "C", radius: 1.7 } } },
          { name: "ASP", ss: "C", atoms: { CA: { x: 126, y: 42, z: 0, element: "C", radius: 1.7 } } },
          { name: "TYR", ss: "C", atoms: { CA: { x: 129, y: 43, z: 0, element: "C", radius: 1.7 } } },
          { name: "ALA", ss: "C", atoms: { CA: { x: 132, y: 44, z: 0, element: "C", radius: 1.7 } } },
          { name: "ASN", ss: "C", atoms: { CA: { x: 135, y: 45, z: 0, element: "C", radius: 1.7 } } },
        ],
      },
    ],
  },

  // Hemoglobin - oxygen transport protein
  "1hho": {
    name: "Hemoglobin",
    resolution: 2.1,
    experimentalMethod: "X-ray diffraction",
    description: "Oxygen-transport protein in red blood cells, containing four subunits each with a heme group.",
    chains: [
      {
        id: "A",
        residues: generateHelicalProtein(20, 3, "A", 0, 0, 0),
      },
      {
        id: "B",
        residues: generateHelicalProtein(20, 3, "B", 30, 0, 0),
      },
      {
        id: "C",
        residues: generateHelicalProtein(20, 3, "C", 0, 30, 0),
      },
      {
        id: "D",
        residues: generateHelicalProtein(20, 3, "D", 30, 30, 0),
      },
    ],
  },

  // Green Fluorescent Protein (GFP)
  "1gfl": {
    name: "Green Fluorescent Protein",
    resolution: 1.9,
    experimentalMethod: "X-ray diffraction",
    description: "Fluorescent protein from jellyfish, with a beta-barrel structure surrounding the chromophore.",
    chains: [
      {
        id: "A",
        residues: generateBetaBarrel(11, 15, 0, 0, 0),
      },
    ],
  },

  // Insulin - hormone
  "4ins": {
    name: "Insulin",
    resolution: 1.5,
    experimentalMethod: "X-ray diffraction",
    description: "Peptide hormone that regulates blood glucose levels, consisting of A and B chains.",
    chains: [
      {
        id: "A",
        residues: generateHelicalProtein(10, 2, "A", 0, 0, 0),
      },
      {
        id: "B",
        residues: generateHelicalProtein(15, 2, "B", 15, 0, 0),
      },
    ],
  },

  // Collagen - structural protein
  "1bkv": {
    name: "Collagen",
    resolution: 2.0,
    experimentalMethod: "X-ray diffraction",
    description: "Fibrous protein forming the main structural component of connective tissues.",
    chains: [
      {
        id: "A",
        residues: generateTripleHelix(30, "A", 0, 0, 0),
      },
      {
        id: "B",
        residues: generateTripleHelix(30, "B", 2, 2, 0),
      },
      {
        id: "C",
        residues: generateTripleHelix(30, "C", -2, -2, 0),
      },
    ],
  },

  // SARS-CoV-2 Spike protein
  "6vxx": {
    name: "SARS-CoV-2 Spike",
    resolution: 2.8,
    experimentalMethod: "Cryo-EM",
    description: "Viral surface protein that mediates entry into host cells, target for vaccines and therapeutics.",
    chains: [
      {
        id: "A",
        residues: generateComplexProtein("A", 0, 0, 0),
      },
      {
        id: "B",
        residues: generateComplexProtein("B", 25, 10, 0),
      },
      {
        id: "C",
        residues: generateComplexProtein("C", -25, 10, 0),
      },
    ],
  },

  // Lysozyme - a medium-sized protein (129 residues)
  "3eiy": {
    name: "Lysozyme",
    resolution: 2.0,
    experimentalMethod: "X-ray diffraction",
    description: "Enzyme that damages bacterial cell walls by catalyzing the hydrolysis of peptidoglycan.",
    chains: [
      {
        id: "A",
        residues: [
          // Simplified data for demonstration
          { name: "LYS", ss: "H", atoms: { CA: { x: 0, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "VAL", ss: "H", atoms: { CA: { x: 0, y: 3, z: 0, element: "C", radius: 1.7 } } },
          { name: "PHE", ss: "H", atoms: { CA: { x: 0, y: 6, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLY", ss: "H", atoms: { CA: { x: 0, y: 9, z: 0, element: "C", radius: 1.7 } } },
          { name: "ARG", ss: "H", atoms: { CA: { x: 0, y: 12, z: 0, element: "C", radius: 1.7 } } },
          { name: "CYS", ss: "H", atoms: { CA: { x: 0, y: 15, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLU", ss: "H", atoms: { CA: { x: 0, y: 18, z: 0, element: "C", radius: 1.7 } } },
          { name: "LEU", ss: "H", atoms: { CA: { x: 0, y: 21, z: 0, element: "C", radius: 1.7 } } },
          { name: "ALA", ss: "H", atoms: { CA: { x: 0, y: 24, z: 0, element: "C", radius: 1.7 } } },
          { name: "ALA", ss: "H", atoms: { CA: { x: 0, y: 27, z: 0, element: "C", radius: 1.7 } } },
          // ... more residues would be here
        ],
      },
    ],
  },

  // Ubiquitin - a small protein (76 residues)
  "1ubq": {
    name: "Ubiquitin",
    resolution: 1.8,
    experimentalMethod: "X-ray diffraction",
    description:
      "Small regulatory protein that labels proteins for degradation and plays roles in many cellular processes.",
    chains: [
      {
        id: "A",
        residues: [
          // Simplified data for demonstration
          { name: "MET", ss: "C", atoms: { CA: { x: 0, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLN", ss: "C", atoms: { CA: { x: 3, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "ILE", ss: "E", atoms: { CA: { x: 6, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "PHE", ss: "E", atoms: { CA: { x: 9, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "VAL", ss: "E", atoms: { CA: { x: 12, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "LYS", ss: "E", atoms: { CA: { x: 15, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "THR", ss: "E", atoms: { CA: { x: 18, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "LEU", ss: "E", atoms: { CA: { x: 21, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "THR", ss: "C", atoms: { CA: { x: 24, y: 0, z: 0, element: "C", radius: 1.7 } } },
          { name: "GLY", ss: "C", atoms: { CA: { x: 27, y: 0, z: 0, element: "C", radius: 1.7 } } },
          // ... more residues would be here
        ],
      },
    ],
  },
}

// Helper function to generate a helical protein structure
function generateHelicalProtein(numResidues, numHelices, chainId, offsetX, offsetY, offsetZ) {
  const residues = []
  const residueTypes = ["ALA", "LEU", "GLU", "LYS", "ARG", "SER", "THR", "VAL", "ILE", "PHE"]

  for (let helix = 0; helix < numHelices; helix++) {
    // Create a helix
    for (let i = 0; i < numResidues; i++) {
      const angle = (i / 3.6) * Math.PI * 2 // 3.6 residues per turn in alpha helix
      const radius = 2
      const x = offsetX + Math.cos(angle) * radius + helix * 10
      const y = offsetY + Math.sin(angle) * radius
      const z = offsetZ + i * 1.5 // Rise per residue

      residues.push({
        name: residueTypes[Math.floor(Math.random() * residueTypes.length)],
        ss: "H", // Alpha helix
        atoms: {
          CA: { x, y, z, element: "C", radius: 1.7 },
          // In a real structure, there would be many more atoms
        },
      })
    }

    // Add a loop between helices
    if (helix < numHelices - 1) {
      for (let i = 0; i < 5; i++) {
        const lastResidue = residues[residues.length - 1]
        const x = lastResidue.atoms.CA.x + 2
        const y = lastResidue.atoms.CA.y
        const z = lastResidue.atoms.CA.z + 2

        residues.push({
          name: "GLY", // Glycine is common in loops
          ss: "C", // Coil/loop
          atoms: {
            CA: { x, y, z, element: "C", radius: 1.7 },
          },
        })
      }
    }
  }

  return residues
}

// Helper function to generate a beta barrel structure
function generateBetaBarrel(numStrands, strandLength, offsetX, offsetY, offsetZ) {
  const residues = []
  const residueTypes = ["VAL", "ILE", "LEU", "PHE", "TYR", "TRP", "THR"]
  const barrelRadius = 10

  for (let strand = 0; strand < numStrands; strand++) {
    const angle = (strand / numStrands) * Math.PI * 2
    const startX = offsetX + Math.cos(angle) * barrelRadius
    const startY = offsetY + Math.sin(angle) * barrelRadius

    // Create a beta strand
    for (let i = 0; i < strandLength; i++) {
      const z = offsetZ + i * 3.5 - strandLength * 1.75 // Center the barrel

      residues.push({
        name: residueTypes[Math.floor(Math.random() * residueTypes.length)],
        ss: "E", // Beta strand
        atoms: {
          CA: { x: startX, y: startY, z, element: "C", radius: 1.7 },
        },
      })
    }

    // Add a loop between strands
    if (strand < numStrands - 1) {
      const lastResidue = residues[residues.length - 1]
      const nextAngle = ((strand + 1) / numStrands) * Math.PI * 2
      const endX = offsetX + Math.cos(nextAngle) * barrelRadius
      const endY = offsetY + Math.sin(nextAngle) * barrelRadius

      // Create a loop of 3 residues
      for (let i = 0; i < 3; i++) {
        const t = (i + 1) / 4 // Interpolation factor
        const x = lastResidue.atoms.CA.x * (1 - t) + endX * t
        const y = lastResidue.atoms.CA.y * (1 - t) + endY * t
        const z = lastResidue.atoms.CA.z - 3.5

        residues.push({
          name: "GLY", // Glycine is common in loops
          ss: "C", // Coil/loop
          atoms: {
            CA: { x, y, z, element: "C", radius: 1.7 },
          },
        })
      }
    }
  }

  return residues
}

// Helper function to generate a triple helix (like collagen)
function generateTripleHelix(numResidues, chainId, offsetX, offsetY, offsetZ) {
  const residues = []
  const residueTypes = ["GLY", "PRO", "HYP"] // Glycine, Proline, Hydroxyproline

  for (let i = 0; i < numResidues; i++) {
    const angle = (i / 3) * Math.PI * 2 // Tighter helix than alpha
    const radius = 1
    const x = offsetX + Math.cos(angle) * radius
    const y = offsetY + Math.sin(angle) * radius
    const z = offsetZ + i * 0.9 // Rise per residue

    residues.push({
      name: residueTypes[i % 3], // Collagen has a repeating pattern
      ss: "H", // Using helix, though collagen has its own structure
      atoms: {
        CA: { x, y, z, element: "C", radius: 1.7 },
      },
    })
  }

  return residues
}

// Helper function to generate a complex protein with mixed secondary structures
function generateComplexProtein(chainId, offsetX, offsetY, offsetZ) {
  const residues = []

  // Add some alpha helices
  const helices = generateHelicalProtein(15, 3, chainId, offsetX, offsetY, offsetZ)
  residues.push(...helices)

  // Add a beta sheet
  const lastHelixResidue = residues[residues.length - 1]
  const sheetOffsetX = lastHelixResidue.atoms.CA.x + 10
  const sheetOffsetY = lastHelixResidue.atoms.CA.y
  const sheetOffsetZ = lastHelixResidue.atoms.CA.z - 10

  // Generate 4 beta strands
  for (let strand = 0; strand < 4; strand++) {
    const strandOffsetX = sheetOffsetX + strand * 5
    const strandOffsetY = sheetOffsetY
    const strandOffsetZ = sheetOffsetZ

    for (let i = 0; i < 7; i++) {
      const z = strandOffsetZ + i * 3.5

      residues.push({
        name: strand % 2 === 0 ? "VAL" : "ILE", // Alternating residues
        ss: "E", // Beta strand
        atoms: {
          CA: { x: strandOffsetX, y: strandOffsetY, z, element: "C", radius: 1.7 },
        },
      })
    }

    // Add a loop if not the last strand
    if (strand < 3) {
      const lastResidue = residues[residues.length - 1]

      for (let i = 0; i < 3; i++) {
        const x = lastResidue.atoms.CA.x + 1
        const y = lastResidue.atoms.CA.y
        const z = lastResidue.atoms.CA.z - i * 3

        residues.push({
          name: "GLY",
          ss: "C", // Coil/loop
          atoms: {
            CA: { x, y, z, element: "C", radius: 1.7 },
          },
        })
      }
    }
  }

  return residues
}
